import { describe, expect, it } from "vitest";
import * as moduleArtifactExports from "./index";
import {
  COURSE_PROGRESS_STORAGE_KEY,
  getModuleArtifactStorageKey,
  getReflectionStorageKey,
} from "./keys";
import { createModuleArtifactStore } from "./moduleArtifactStore";
import { createReflectionStore } from "./reflectionStore";
import type { StorageAdapter } from "@/lib/persistence/browserStorage";
import type { StoreEvents } from "@/lib/persistence/storageEvents";
import type { ArtifactAuthority } from "./validation";

type TestStorage = StorageAdapter & {
  values: Map<string, string>;
  failReads: boolean;
  failWrites: boolean;
  failRemovals: boolean;
};

function createStorage(): TestStorage {
  const values = new Map<string, string>();
  return {
    values,
    failReads: false,
    failWrites: false,
    failRemovals: false,
    getItem(key) {
      return this.failReads
        ? ({ ok: false, reason: "storage-unavailable" } as const)
        : ({ ok: true, value: values.get(key) ?? null } as const);
    },
    setItem(key, value) {
      if (this.failWrites) {
        return { ok: false, reason: "storage-unavailable" } as const;
      }
      values.set(key, value);
      return { ok: true, value: undefined };
    },
    removeItem(key) {
      if (this.failRemovals) {
        return { ok: false, reason: "storage-unavailable" } as const;
      }
      values.delete(key);
      return { ok: true, value: undefined };
    },
  };
}

const events: StoreEvents = {
  subscribe: () => () => {},
  emit: () => true,
};

function createEventHarness() {
  const subscriptions = new Set<{
    storageKey: string;
    eventName: string;
    listener: () => void;
  }>();
  const harnessEvents: StoreEvents = {
    subscribe(storageKey, eventName, listener) {
      const subscription = { storageKey, eventName, listener };
      subscriptions.add(subscription);
      return () => subscriptions.delete(subscription);
    },
    emit(eventName) {
      for (const subscription of subscriptions) {
        if (subscription.eventName === eventName) subscription.listener();
      }
      return true;
    },
  };
  return {
    events: harnessEvents,
    emitStorage(storageKey: string) {
      for (const subscription of subscriptions) {
        if (subscription.storageKey === storageKey) subscription.listener();
      }
    },
  };
}

const authority: ArtifactAuthority = {
  isModuleSlug: (value) => value === "module-a",
  isWrittenInteraction: (_module, interaction, context) =>
    interaction === "prompt-1" && context === "prompt-1",
  isValidBranchingEntry: () => false,
};

function revisionFactory() {
  let revision = 0;
  return () => `reflection-revision-${++revision}`;
}

describe("Reflection persistence boundary", () => {
  it("replaces the current Reflection, invalidates old feedback, and rejects a stale callback", () => {
    const storage = createStorage();
    const store = createReflectionStore({
      storage,
      events,
      authority,
      createRevisionId: revisionFactory(),
    });

    const first = store.saveResponse("module-a", "First reflection.");
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(
      store.saveFeedback({
        moduleSlug: "module-a",
        responseRevisionId: first.value.responseRevisionId,
        feedback: {
          summary: "Summary.",
          strengths: ["Strength."],
          nextStep: "Next step.",
        },
      }).ok,
    ).toBe(true);

    const revised = store.saveResponse("module-a", "Revised reflection.");
    expect(revised.ok).toBe(true);
    if (!revised.ok) return;
    expect(revised.value.responseRevisionId).not.toBe(
      first.value.responseRevisionId,
    );
    expect(revised.value.review).toEqual({ status: "not-requested" });
    expect(
      store.saveFeedback({
        moduleSlug: "module-a",
        responseRevisionId: first.value.responseRevisionId,
        feedback: {
          summary: "Old summary.",
          strengths: ["Old strength."],
          nextStep: "Old next step.",
        },
      }),
    ).toEqual({ ok: false, reason: "stale-subject" });
  });

  it("keeps Reflection physically and structurally separate from module artifacts", () => {
    const storage = createStorage();
    const moduleStore = createModuleArtifactStore({
      storage,
      events,
      authority,
      createRevisionId: () => "module-revision-1",
    });
    const reflectionStore = createReflectionStore({
      storage,
      events,
      authority,
      createRevisionId: () => "reflection-revision-1",
    });

    expect(
      moduleStore.saveWrittenResponse({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        contextId: "prompt-1",
        response: "Module work.",
      }).ok,
    ).toBe(true);
    expect(reflectionStore.saveResponse("module-a", "Private reflection.").ok).toBe(
      true,
    );
    expect(storage.values.has(getModuleArtifactStorageKey("module-a"))).toBe(true);
    expect(storage.values.has(getReflectionStorageKey("module-a"))).toBe(true);
    storage.values.set(COURSE_PROGRESS_STORAGE_KEY, "progress");

    expect(reflectionStore.clearReflection("module-a").ok).toBe(true);
    expect(storage.values.has(getReflectionStorageKey("module-a"))).toBe(false);
    expect(storage.values.has(getModuleArtifactStorageKey("module-a"))).toBe(true);
    expect(storage.values.get(COURSE_PROGRESS_STORAGE_KEY)).toBe("progress");
    expect(reflectionStore.saveResponse("module-a", "Private reflection.").ok).toBe(
      true,
    );

    expect(moduleStore.clearModuleWork("module-a").ok).toBe(true);
    expect(storage.values.has(getModuleArtifactStorageKey("module-a"))).toBe(false);
    expect(storage.values.has(getReflectionStorageKey("module-a"))).toBe(true);
    expect(storage.values.get(COURSE_PROGRESS_STORAGE_KEY)).toBe("progress");
    expect("reflectionStore" in moduleArtifactExports).toBe(false);
    expect("ReflectionRecord" in moduleArtifactExports).toBe(false);

    expect(reflectionStore.clearReflection("module-a").ok).toBe(true);
    expect(storage.values.has(getReflectionStorageKey("module-a"))).toBe(false);
  });

  it("preserves a Reflection in memory when persistence is unavailable", () => {
    const storage = createStorage();
    storage.failWrites = true;
    const store = createReflectionStore({
      storage,
      events,
      authority,
      createRevisionId: revisionFactory(),
    });

    const result = store.saveResponse("module-a", "Session-only reflection.");
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.reason).toBe("storage-unavailable");
    const snapshot = store.getSnapshot("module-a");
    expect(snapshot.status).toBe("available");
    if (snapshot.status !== "available") return;
    expect(snapshot.persistence).toBe("session-only");
  });

  it("does not overwrite malformed, wrong-type, unsupported, or unreadable Reflection records", () => {
    const fixtures = [
      { raw: "{not-json", reason: "stored-record-invalid" },
      { raw: JSON.stringify([]), reason: "stored-record-invalid" },
      {
        raw: JSON.stringify({
          domain: "reflection",
          schemaVersion: 2,
          moduleSlug: "module-a",
          response: "Future response.",
          responseRevisionId: "future-revision",
          review: { status: "not-requested" },
        }),
        reason: "stored-record-unsupported",
      },
    ] as const;

    for (const fixture of fixtures) {
      const storage = createStorage();
      const key = getReflectionStorageKey("module-a");
      storage.values.set(key, fixture.raw);
      const store = createReflectionStore({
        storage,
        events,
        authority,
        createRevisionId: revisionFactory(),
      });
      expect(store.saveResponse("module-a", "Do not overwrite.")).toEqual({
        ok: false,
        reason: fixture.reason,
      });
      expect(storage.values.get(key)).toBe(fixture.raw);
    }

    const storage = createStorage();
    const key = getReflectionStorageKey("module-a");
    storage.values.set(key, "stored-but-unreadable");
    storage.failReads = true;
    const store = createReflectionStore({
      storage,
      events,
      authority,
      createRevisionId: revisionFactory(),
    });
    expect(store.saveResponse("module-a", "Still not overwritten.")).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });
    expect(storage.values.get(key)).toBe("stored-but-unreadable");
  });

  it("preserves a valid Reflection baseline on write failure and retries session work coherently", () => {
    const storage = createStorage();
    const store = createReflectionStore({
      storage,
      events,
      authority,
      createRevisionId: revisionFactory(),
    });
    expect(store.saveResponse("module-a", "Persisted reflection.").ok).toBe(true);
    const key = getReflectionStorageKey("module-a");
    const baseline = storage.values.get(key);

    storage.failWrites = true;
    const failed = store.saveResponse("module-a", "Session reflection.");
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.reason).toBe("storage-unavailable");
    expect(failed.sessionValue?.response).toBe("Session reflection.");
    expect(storage.values.get(key)).toBe(baseline);

    storage.failWrites = false;
    expect(store.saveResponse("module-a", "Session reflection.").ok).toBe(true);
    expect(JSON.parse(storage.values.get(key) ?? "").response).toBe(
      "Session reflection.",
    );
  });

  it("reports Reflection remove failure without invalidating cached work", () => {
    const storage = createStorage();
    const store = createReflectionStore({
      storage,
      events,
      authority,
      createRevisionId: revisionFactory(),
    });
    expect(store.saveResponse("module-a", "Keep until clear succeeds.").ok).toBe(
      true,
    );
    expect(store.getSnapshot("module-a").status).toBe("available");
    storage.failRemovals = true;
    expect(store.clearReflection("module-a")).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });
    expect(store.getSnapshot("module-a").status).toBe("available");

    storage.failRemovals = false;
    expect(store.clearReflection("module-a")).toEqual({ ok: true, value: null });
    expect(store.getSnapshot("module-a").status).toBe("absent");
  });

  it("updates Reflection snapshots through events and tolerates event dispatch failure", () => {
    const storage = createStorage();
    const eventHarness = createEventHarness();
    const store = createReflectionStore({
      storage,
      events: eventHarness.events,
      authority,
      createRevisionId: revisionFactory(),
    });
    let changes = 0;
    store.subscribe("module-a", () => changes++);
    expect(store.saveResponse("module-a", "Same-tab Reflection.").ok).toBe(true);
    expect(changes).toBe(1);

    storage.values.delete(getReflectionStorageKey("module-a"));
    eventHarness.emitStorage(getReflectionStorageKey("module-a"));
    expect(changes).toBe(2);
    expect(store.getSnapshot("module-a").status).toBe("absent");

    const eventFailureStore = createReflectionStore({
      storage: createStorage(),
      events: { subscribe: () => () => {}, emit: () => false },
      authority,
      createRevisionId: () => "event-failure-revision",
    });
    expect(
      eventFailureStore.saveResponse("module-a", "Write remains successful.").ok,
    ).toBe(true);
  });

  it("rejects invalid feedback and revision-ID factory failure without changing storage", () => {
    const storage = createStorage();
    const store = createReflectionStore({
      storage,
      events,
      authority,
      createRevisionId: revisionFactory(),
    });
    const saved = store.saveResponse("module-a", "Valid Reflection.");
    expect(saved.ok).toBe(true);
    if (!saved.ok) return;
    const key = getReflectionStorageKey("module-a");
    const baseline = storage.values.get(key);
    expect(
      store.saveFeedback({
        moduleSlug: "module-a",
        responseRevisionId: saved.value.responseRevisionId,
        feedback: { summary: "Summary.", strengths: [], nextStep: "Next." },
      }),
    ).toEqual({ ok: false, reason: "invalid-input" });
    expect(storage.values.get(key)).toBe(baseline);

    const revisionFailureStorage = createStorage();
    const revisionFailureStore = createReflectionStore({
      storage: revisionFailureStorage,
      events,
      authority,
      createRevisionId: () => {
        throw new Error("unavailable");
      },
    });
    expect(
      revisionFailureStore.saveResponse("module-a", "Cannot create revision."),
    ).toEqual({ ok: false, reason: "storage-unavailable" });
    expect(revisionFailureStorage.values.size).toBe(0);
  });
});
