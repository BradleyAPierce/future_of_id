import { describe, expect, it, vi } from "vitest";
import { createCourseProgressStore } from "./courseProgressStore";
import { createBrowserStorage, type StorageAdapter } from "@/lib/persistence/browserStorage";
import { createBrowserStoreEvents, type StoreEvents } from "@/lib/persistence/storageEvents";
import {
  COURSE_PROGRESS_EVENT,
  COURSE_PROGRESS_STORAGE_KEY,
  LEGACY_COURSE_PROGRESS_STORAGE_KEY,
} from "@/lib/learnerArtifacts/keys";

class ProgressStorage implements StorageAdapter {
  readonly values = new Map<string, string>();
  failReads = false;
  failWrites = false;
  failRemovals = false;
  readonly failRemovalKeys = new Set<string>();
  setAttempts = 0;

  getItem(key: string) {
    return this.failReads
      ? ({ ok: false, reason: "storage-unavailable" } as const)
      : ({ ok: true, value: this.values.get(key) ?? null } as const);
  }

  setItem(key: string, value: string) {
    this.setAttempts += 1;
    if (this.failWrites) {
      return { ok: false, reason: "storage-unavailable" } as const;
    }
    this.values.set(key, value);
    return { ok: true, value: undefined } as const;
  }

  removeItem(key: string) {
    if (this.failRemovals || this.failRemovalKeys.has(key)) {
      return { ok: false, reason: "storage-unavailable" } as const;
    }
    this.values.delete(key);
    return { ok: true, value: undefined } as const;
  }
}

function createEventBus(): StoreEvents {
  const listeners = new Map<string, Set<() => void>>();
  return {
    subscribe(_key, eventName, listener) {
      const eventListeners = listeners.get(eventName) ?? new Set();
      eventListeners.add(listener);
      listeners.set(eventName, eventListeners);
      return () => eventListeners.delete(listener);
    },
    emit(eventName) {
      listeners.get(eventName)?.forEach((listener) => listener());
      return true;
    },
  };
}

function createStore(
  storage = new ProgressStorage(),
  events: StoreEvents = createEventBus(),
) {
  return {
    storage,
    store: createCourseProgressStore({
      storage,
      events,
      authoritativeSlugs: ["orientation", "module-a", "module-b"],
    }),
  };
}

describe("course progress hardening", () => {
  it("migrates the legacy array once, filters invalid slugs, and notifies same-tab subscribers", async () => {
    const eventBus = createEventBus();
    const emit = vi.spyOn(eventBus, "emit");
    const { storage, store } = createStore(new ProgressStorage(), eventBus);
    storage.values.set(
      LEGACY_COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify(["module-a", "unknown", "module-a", 42]),
    );

    const snapshot = store.getSnapshot();
    expect(snapshot.completedModules).toEqual(["module-a"]);
    expect(snapshot.persistence).toBe("local");
    expect(storage.values.has(LEGACY_COURSE_PROGRESS_STORAGE_KEY)).toBe(false);
    expect(JSON.parse(storage.values.get(COURSE_PROGRESS_STORAGE_KEY) ?? "")).toEqual({
      domain: "course-progress",
      schemaVersion: 1,
      completedModuleSlugs: ["module-a"],
    });
    await Promise.resolve();
    expect(emit).toHaveBeenCalledWith(COURSE_PROGRESS_EVENT);
  });

  it("isolates unknown current slugs and rejects unsupported future versions", () => {
    const { storage, store } = createStore();
    storage.values.set(
      COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify({
        domain: "course-progress",
        schemaVersion: 1,
        completedModuleSlugs: ["module-a", "removed-module"],
      }),
    );
    expect(store.getSnapshot()).toMatchObject({
      status: "available",
      completedModules: ["module-a"],
      isolatedModuleSlugs: ["removed-module"],
    });

    storage.values.set(
      COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify({
        domain: "course-progress",
        schemaVersion: 2,
        completedModuleSlugs: ["module-a"],
      }),
    );
    expect(store.getSnapshot().status).toBe("unsupported");
  });

  it("returns explicit results, preserves session progress on write failure, and stays open on read failure", () => {
    const storage = new ProgressStorage();
    storage.failWrites = true;
    const { store } = createStore(storage);
    const result = store.markComplete("module-a");
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.reason).toBe("storage-unavailable");
    expect(store.getSnapshot()).toMatchObject({
      status: "available",
      persistence: "session-only",
      completedModules: ["module-a"],
    });
    expect(store.markComplete("not-authoritative")).toEqual({
      ok: false,
      reason: "invalid-input",
    });

    const unavailableStorage = new ProgressStorage();
    unavailableStorage.failReads = true;
    expect(createStore(unavailableStorage).store.getSnapshot()).toMatchObject({
      status: "unavailable",
      completedModules: [],
    });
  });

  it("resets both current and legacy progress without affecting unrelated keys", () => {
    const { storage, store } = createStore();
    storage.values.set(LEGACY_COURSE_PROGRESS_STORAGE_KEY, '["module-a"]');
    storage.values.set(COURSE_PROGRESS_STORAGE_KEY, "current");
    storage.values.set("future-of-id:module-artifact:module-a", "preserve");
    storage.values.set("future-of-id:reflection:module-a", "preserve");

    expect(store.resetCourseProgress()).toEqual({ ok: true, value: null });
    expect(storage.values.has(LEGACY_COURSE_PROGRESS_STORAGE_KEY)).toBe(false);
    expect(storage.values.has(COURSE_PROGRESS_STORAGE_KEY)).toBe(false);
    expect(storage.values.get("future-of-id:module-artifact:module-a")).toBe(
      "preserve",
    );
    expect(storage.values.get("future-of-id:reflection:module-a")).toBe(
      "preserve",
    );
  });

  it("does not report a reset as successful when storage removal fails", () => {
    const storage = new ProgressStorage();
    storage.values.set(COURSE_PROGRESS_STORAGE_KEY, "existing");
    storage.failRemovals = true;
    const { store } = createStore(storage);

    expect(store.resetCourseProgress()).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });
    expect(storage.values.get(COURSE_PROGRESS_STORAGE_KEY)).toBe("existing");
  });

  it("does not overwrite malformed, wrong-type, unsupported, or unreadable progress records", () => {
    const fixtures = [
      { raw: "{not-json", reason: "stored-record-invalid" },
      { raw: JSON.stringify([]), reason: "stored-record-invalid" },
      {
        raw: JSON.stringify({
          domain: "course-progress",
          schemaVersion: 2,
          completedModuleSlugs: ["module-a"],
        }),
        reason: "stored-record-unsupported",
      },
    ] as const;

    for (const fixture of fixtures) {
      const storage = new ProgressStorage();
      storage.values.set(COURSE_PROGRESS_STORAGE_KEY, fixture.raw);
      expect(createStore(storage).store.markComplete("module-b")).toEqual({
        ok: false,
        reason: fixture.reason,
      });
      expect(storage.values.get(COURSE_PROGRESS_STORAGE_KEY)).toBe(fixture.raw);
    }

    const storage = new ProgressStorage();
    storage.values.set(COURSE_PROGRESS_STORAGE_KEY, "stored-but-unreadable");
    storage.failReads = true;
    expect(createStore(storage).store.markComplete("module-b")).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });
    expect(storage.values.get(COURSE_PROGRESS_STORAGE_KEY)).toBe(
      "stored-but-unreadable",
    );
  });

  it("preserves a valid progress baseline on write failure and retries session completion coherently", () => {
    const storage = new ProgressStorage();
    storage.values.set(
      COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify({
        domain: "course-progress",
        schemaVersion: 1,
        completedModuleSlugs: ["module-a"],
      }),
    );
    const baseline = storage.values.get(COURSE_PROGRESS_STORAGE_KEY);
    const { store } = createStore(storage);
    storage.failWrites = true;
    const failed = store.markComplete("module-b");
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.reason).toBe("storage-unavailable");
    expect(failed.sessionValue?.completedModuleSlugs).toEqual([
      "module-a",
      "module-b",
    ]);
    expect(storage.values.get(COURSE_PROGRESS_STORAGE_KEY)).toBe(baseline);
    expect(store.getSnapshot()).toMatchObject({
      persistence: "session-only",
      completedModules: ["module-a", "module-b"],
    });

    storage.failWrites = false;
    expect(store.markComplete("module-b").ok).toBe(true);
    expect(
      JSON.parse(storage.values.get(COURSE_PROGRESS_STORAGE_KEY) ?? "")
        .completedModuleSlugs,
    ).toEqual(["module-a", "module-b"]);
  });

  it("preserves legacy progress when migration write fails and recovers without inventing an empty baseline", () => {
    const storage = new ProgressStorage();
    const legacy = JSON.stringify(["module-a"]);
    storage.values.set(LEGACY_COURSE_PROGRESS_STORAGE_KEY, legacy);
    storage.failWrites = true;
    const { store } = createStore(storage);

    expect(store.getSnapshot()).toMatchObject({
      persistence: "session-only",
      completedModules: ["module-a"],
    });
    expect(storage.values.get(LEGACY_COURSE_PROGRESS_STORAGE_KEY)).toBe(legacy);
    expect(storage.values.has(COURSE_PROGRESS_STORAGE_KEY)).toBe(false);

    storage.failWrites = false;
    expect(store.markComplete("module-b").ok).toBe(true);
    expect(storage.values.has(LEGACY_COURSE_PROGRESS_STORAGE_KEY)).toBe(false);
    expect(
      JSON.parse(storage.values.get(COURSE_PROGRESS_STORAGE_KEY) ?? "")
        .completedModuleSlugs,
    ).toEqual(["module-a", "module-b"]);
  });

  it("reports failed legacy cleanup after a successful envelope write without remigrating", () => {
    const storage = new ProgressStorage();
    storage.values.set(
      LEGACY_COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify(["module-a"]),
    );
    storage.failRemovalKeys.add(LEGACY_COURSE_PROGRESS_STORAGE_KEY);
    const { store } = createStore(storage);

    expect(store.getSnapshot()).toMatchObject({
      persistence: "local",
      completedModules: ["module-a"],
      legacyCleanupPending: true,
    });
    expect(storage.values.has(COURSE_PROGRESS_STORAGE_KEY)).toBe(true);
    expect(storage.values.has(LEGACY_COURSE_PROGRESS_STORAGE_KEY)).toBe(true);
    expect(storage.setAttempts).toBe(1);

    expect(store.getSnapshot().completedModules).toEqual(["module-a"]);
    expect(storage.setAttempts).toBe(1);
  });
});

describe("safe browser adapters and subscriptions", () => {
  it("contains storage exceptions and event-target failures", () => {
    const storage = createBrowserStorage(() => {
      throw new DOMException("Blocked", "SecurityError");
    });
    expect(storage.getItem("key")).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });
    expect(storage.setItem("key", "value")).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });
    expect(storage.removeItem("key")).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });

    const events = createBrowserStoreEvents(() => {
      throw new Error("No window");
    });
    expect(events.emit(COURSE_PROGRESS_EVENT)).toBe(false);
    expect(events.subscribe("key", "event", vi.fn())).toEqual(
      expect.any(Function),
    );
  });

  it("notifies for the matching cross-tab key and same-tab event only", () => {
    const events = createBrowserStoreEvents(() => window);
    const listener = vi.fn();
    const unsubscribe = events.subscribe(
      COURSE_PROGRESS_STORAGE_KEY,
      COURSE_PROGRESS_EVENT,
      listener,
    );

    window.dispatchEvent(
      new StorageEvent("storage", { key: "some-other-storage-key" }),
    );
    expect(listener).not.toHaveBeenCalled();
    window.dispatchEvent(
      new StorageEvent("storage", { key: COURSE_PROGRESS_STORAGE_KEY }),
    );
    events.emit(COURSE_PROGRESS_EVENT);
    expect(listener).toHaveBeenCalledTimes(2);

    unsubscribe();
    events.emit(COURSE_PROGRESS_EVENT);
    expect(listener).toHaveBeenCalledTimes(2);
  });

  it("updates store snapshots for same-tab and cross-tab events", () => {
    const storage = new ProgressStorage();
    const browserEvents = createBrowserStoreEvents(() => window);
    const { store } = createStore(storage, browserEvents);
    let changes = 0;
    store.subscribe(() => changes++);

    expect(store.markComplete("module-a").ok).toBe(true);
    expect(changes).toBe(1);
    expect(store.getSnapshot().completedModules).toEqual(["module-a"]);

    storage.values.set(
      COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify({
        domain: "course-progress",
        schemaVersion: 1,
        completedModuleSlugs: ["module-a", "module-b"],
      }),
    );
    window.dispatchEvent(
      new StorageEvent("storage", { key: COURSE_PROGRESS_STORAGE_KEY }),
    );
    expect(changes).toBe(2);
    expect(store.getSnapshot().completedModules).toEqual([
      "module-a",
      "module-b",
    ]);
  });

  it("keeps a successful progress write successful when event dispatch fails", () => {
    const storage = new ProgressStorage();
    const events: StoreEvents = {
      subscribe: () => () => {},
      emit: () => false,
    };
    const { store } = createStore(storage, events);
    expect(store.markComplete("module-a").ok).toBe(true);
    expect(storage.values.has(COURSE_PROGRESS_STORAGE_KEY)).toBe(true);
  });
});
