import { describe, expect, it } from "vitest";
import type { StorageAdapter } from "@/lib/persistence/browserStorage";
import type { StoreEvents } from "@/lib/persistence/storageEvents";
import {
  COURSE_PROGRESS_STORAGE_KEY,
  getModuleArtifactEventName,
  getModuleArtifactStorageKey,
  getReflectionStorageKey,
} from "./keys";
import { createModuleArtifactStore } from "./moduleArtifactStore";
import type {
  BranchingSimulationEntry,
  WrittenAIReviewFeedback,
} from "./types";
import {
  parseModuleArtifactRecord,
  type ArtifactAuthority,
} from "./validation";

class MemoryStorage implements StorageAdapter {
  readonly values = new Map<string, string>();
  failReads = false;
  failWrites = false;
  failRemovals = false;

  getItem(key: string) {
    return this.failReads
      ? ({ ok: false, reason: "storage-unavailable" } as const)
      : ({ ok: true, value: this.values.get(key) ?? null } as const);
  }

  setItem(key: string, value: string) {
    if (this.failWrites) {
      return { ok: false, reason: "storage-unavailable" } as const;
    }
    this.values.set(key, value);
    return { ok: true, value: undefined } as const;
  }

  removeItem(key: string) {
    if (this.failRemovals) {
      return { ok: false, reason: "storage-unavailable" } as const;
    }
    this.values.delete(key);
    return { ok: true, value: undefined } as const;
  }
}

function createTestEvents() {
  const subscriptions = new Set<{
    storageKey: string;
    eventName: string;
    listener: () => void;
  }>();

  const events: StoreEvents = {
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
    events,
    emitStorage(storageKey: string) {
      for (const subscription of subscriptions) {
        if (subscription.storageKey === storageKey) subscription.listener();
      }
    },
  };
}

const authority: ArtifactAuthority = {
  isModuleSlug(value) {
    return value === "module-a" || value === "module-b";
  },
  isWrittenInteraction(_moduleSlug, interactionId, contextId) {
    return interactionId === contextId && interactionId.startsWith("prompt-");
  },
  isValidBranchingEntry(moduleSlug, entry) {
    return moduleSlug === "module-a" && entry.simulationId === "simulation-1";
  },
};

const writtenFeedback: WrittenAIReviewFeedback = {
  summary: "A bounded summary.",
  strengths: ["A specific strength."],
  gap: "A bounded gap.",
  nextStep: "A bounded next step.",
};

function createStore(
  storage = new MemoryStorage(),
  options: {
    eventHarness?: ReturnType<typeof createTestEvents>;
    createRevisionId?: () => string;
    artifactAuthority?: ArtifactAuthority;
  } = {},
) {
  const eventHarness = options.eventHarness ?? createTestEvents();
  let revision = 0;
  return {
    storage,
    eventHarness,
    store: createModuleArtifactStore({
      storage,
      events: eventHarness.events,
      authority: options.artifactAuthority ?? authority,
      createRevisionId:
        options.createRevisionId ?? (() => `revision-${++revision}`),
    }),
  };
}

describe("module learner-artifact store", () => {
  it("keeps one latest response per prompt, preserves siblings, and rejects stale feedback", () => {
    const { store } = createStore();

    const first = store.saveWrittenResponse({
      moduleSlug: "module-a",
      interactionId: "prompt-1",
      contextId: "prompt-1",
      response: "My first response.",
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const firstRevision = first.value.entries["prompt-1"];
    expect(firstRevision.activityType).toBe("written-response");
    if (firstRevision.activityType !== "written-response") return;

    expect(
      store.saveWrittenFeedback({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        responseRevisionId: firstRevision.responseRevisionId,
        feedback: writtenFeedback,
      }).ok,
    ).toBe(true);
    expect(
      store.saveWrittenResponse({
        moduleSlug: "module-a",
        interactionId: "prompt-2",
        contextId: "prompt-2",
        response: "A sibling response.",
      }).ok,
    ).toBe(true);

    const revised = store.saveWrittenResponse({
      moduleSlug: "module-a",
      interactionId: "prompt-1",
      contextId: "prompt-1",
      response: "My revised response.",
    });
    expect(revised.ok).toBe(true);
    if (!revised.ok) return;
    expect(Object.keys(revised.value.entries)).toEqual(["prompt-1", "prompt-2"]);
    const revisedEntry = revised.value.entries["prompt-1"];
    expect(revisedEntry.activityType).toBe("written-response");
    if (revisedEntry.activityType !== "written-response") return;
    expect(revisedEntry.responseRevisionId).not.toBe(
      firstRevision.responseRevisionId,
    );
    expect(revisedEntry.review).toEqual({ status: "not-requested" });

    expect(
      store.saveWrittenFeedback({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        responseRevisionId: firstRevision.responseRevisionId,
        feedback: writtenFeedback,
      }),
    ).toEqual({ ok: false, reason: "stale-subject" });
  });

  it("isolates malformed sibling entries and normalizes restored pending reviews", () => {
    const { store, storage } = createStore();
    storage.values.set(
      getModuleArtifactStorageKey("module-a"),
      JSON.stringify({
        domain: "module-artifact",
        schemaVersion: 1,
        moduleSlug: "module-a",
        entries: {
          "prompt-1": {
            activityType: "written-response",
            interactionId: "prompt-1",
            contextId: "prompt-1",
            response: "Recoverable response.",
            responseRevisionId: "revision-safe",
            review: {
              status: "pending",
              subject: { responseRevisionId: "revision-safe" },
            },
          },
          "prompt-bad": { activityType: "unknown", response: "ignored" },
        },
      }),
    );

    const snapshot = store.getSnapshot("module-a");
    expect(snapshot.status).toBe("available");
    if (snapshot.status !== "available") return;
    expect(snapshot.isolatedEntryIds).toEqual(["prompt-bad"]);
    expect(snapshot.value.entries["prompt-1"].review.status).toBe("failed");
  });

  it("keeps a live pending state but recovers it after a new store reads storage", () => {
    const storage = new MemoryStorage();
    const firstHarness = createStore(storage);
    const saved = firstHarness.store.saveWrittenResponse({
      moduleSlug: "module-a",
      interactionId: "prompt-1",
      contextId: "prompt-1",
      response: "Response awaiting review.",
    });
    expect(saved.ok).toBe(true);
    if (!saved.ok) return;
    const entry = saved.value.entries["prompt-1"];
    if (entry.activityType !== "written-response") return;

    const pending = firstHarness.store.markWrittenReviewPending({
      moduleSlug: "module-a",
      interactionId: "prompt-1",
      responseRevisionId: entry.responseRevisionId,
    });
    expect(pending.ok).toBe(true);
    if (!pending.ok) return;
    expect(pending.value.entries["prompt-1"].review.status).toBe("pending");
    const liveSnapshot = firstHarness.store.getSnapshot("module-a");
    expect(liveSnapshot.status).toBe("available");
    if (liveSnapshot.status !== "available") return;
    expect(liveSnapshot.value.entries["prompt-1"].review.status).toBe(
      "pending",
    );

    const restored = createStore(storage).store.getSnapshot("module-a");
    expect(restored.status).toBe("available");
    if (restored.status !== "available") return;
    expect(restored.value.entries["prompt-1"].review.status).toBe("failed");
  });

  it("preserves valid in-session work when a storage write fails", () => {
    const storage = new MemoryStorage();
    storage.failWrites = true;
    const { store } = createStore(storage);

    const result = store.saveWrittenResponse({
      moduleSlug: "module-a",
      interactionId: "prompt-1",
      contextId: "prompt-1",
      response: "Keep this in memory.",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.reason).toBe("storage-unavailable");
    expect(result.sessionValue?.entries["prompt-1"]).toBeDefined();

    const snapshot = store.getSnapshot("module-a");
    expect(snapshot.status).toBe("available");
    if (snapshot.status !== "available") return;
    expect(snapshot.persistence).toBe("session-only");
  });

  it("binds branching feedback to deterministic state plus original rationale and preserves the original", () => {
    const { store } = createStore();
    const entry: BranchingSimulationEntry = {
      activityType: "branching-simulation",
      interactionId: "simulation-entry",
      simulationId: "simulation-1",
      simulationVersion: 1,
      completionState: "rationale-complete",
      deterministicStateRevisionId: "state-1",
      firstDecisionId: "decision-1",
      firstOptionId: "option-1",
      originalRationale: { text: "Original rationale.", revisionId: "reason-1" },
      review: { status: "ready" },
    };
    expect(store.saveBranchingEntry({ moduleSlug: "module-a", entry }).ok).toBe(
      true,
    );

    const reviewInput = {
      moduleSlug: "module-a",
      interactionId: "simulation-entry",
      deterministicStateRevisionId: "state-1",
      originalRationaleRevisionId: "reason-1",
    };
    expect(
      store.saveBranchingFeedback({
        ...reviewInput,
        feedback: {
          summary: "Summary.",
          strength: "Strength.",
          overlookedTradeoff: "Tradeoff.",
          refinementQuestion: "Question?",
        },
      }).ok,
    ).toBe(true);

    const changedState = store.saveBranchingEntry({
      moduleSlug: "module-a",
      entry: {
        ...entry,
        deterministicStateRevisionId: "state-2",
        revisedRationale: { text: "Revised rationale.", revisionId: "reason-2" },
        review: {
          status: "available",
          subject: {
            deterministicStateRevisionId: "state-1",
            originalRationaleRevisionId: "reason-1",
          },
          feedback: {
            summary: "Old summary.",
            strength: "Old strength.",
            overlookedTradeoff: "Old tradeoff.",
            refinementQuestion: "Old question?",
          },
        },
      },
    });
    expect(changedState.ok).toBe(true);
    if (!changedState.ok) return;
    expect(changedState.value.entries["simulation-entry"].review.status).toBe(
      "stale",
    );
    expect(store.markBranchingReviewPending(reviewInput)).toEqual({
      ok: false,
      reason: "stale-subject",
    });

    expect(
      store.saveBranchingEntry({
        moduleSlug: "module-a",
        entry: {
          ...entry,
          originalRationale: {
            text: "Overwritten original.",
            revisionId: "reason-replaced",
          },
        },
      }),
    ).toEqual({ ok: false, reason: "invalid-input" });
  });

  it("uses module-scoped same-tab events and storage-key-scoped cross-tab events", () => {
    const { store, eventHarness } = createStore();
    let moduleAChanges = 0;
    let moduleBChanges = 0;
    const unsubscribeA = store.subscribe("module-a", () => moduleAChanges++);
    const unsubscribeB = store.subscribe("module-b", () => moduleBChanges++);

    eventHarness.events.emit(getModuleArtifactEventName("module-a"));
    expect([moduleAChanges, moduleBChanges]).toEqual([1, 0]);
    eventHarness.emitStorage(getModuleArtifactStorageKey("module-b"));
    expect([moduleAChanges, moduleBChanges]).toEqual([1, 1]);

    unsubscribeA();
    unsubscribeB();
  });

  it("rejects unsupported envelopes and stale persisted review subjects", () => {
    expect(
      parseModuleArtifactRecord(
        {
          domain: "module-artifact",
          schemaVersion: 2,
          moduleSlug: "module-a",
          entries: {},
        },
        authority,
      ),
    ).toEqual({ ok: false, reason: "unsupported" });

    const parsed = parseModuleArtifactRecord(
      {
        domain: "module-artifact",
        schemaVersion: 1,
        moduleSlug: "module-a",
        entries: {
          "prompt-1": {
            activityType: "written-response",
            interactionId: "prompt-1",
            contextId: "prompt-1",
            response: "Current response.",
            responseRevisionId: "revision-current",
            review: {
              status: "available",
              subject: { responseRevisionId: "revision-old" },
              feedback: writtenFeedback,
            },
          },
        },
      },
      authority,
    );
    expect(parsed.ok).toBe(true);
    if (!parsed.ok) return;
    expect(parsed.value.entries["prompt-1"].review).toEqual({ status: "stale" });
  });

  it("does not overwrite malformed, wrong-type, unsupported, or unreadable stored records", () => {
    const fixtures = [
      { raw: "{not-json", reason: "stored-record-invalid" },
      { raw: JSON.stringify([]), reason: "stored-record-invalid" },
      {
        raw: JSON.stringify({
          domain: "module-artifact",
          schemaVersion: 2,
          moduleSlug: "module-a",
          entries: {},
        }),
        reason: "stored-record-unsupported",
      },
    ] as const;

    for (const fixture of fixtures) {
      const storage = new MemoryStorage();
      const key = getModuleArtifactStorageKey("module-a");
      storage.values.set(key, fixture.raw);
      const result = createStore(storage).store.saveWrittenResponse({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        contextId: "prompt-1",
        response: "Do not overwrite the original.",
      });
      expect(result).toEqual({ ok: false, reason: fixture.reason });
      expect(storage.values.get(key)).toBe(fixture.raw);
    }

    const storage = new MemoryStorage();
    const key = getModuleArtifactStorageKey("module-a");
    storage.values.set(key, "stored-but-unreadable");
    storage.failReads = true;
    expect(
      createStore(storage).store.saveWrittenResponse({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        contextId: "prompt-1",
        response: "Still available in the component, not the store.",
      }),
    ).toEqual({ ok: false, reason: "storage-unavailable" });
    expect(storage.values.get(key)).toBe("stored-but-unreadable");
  });

  it("preserves a valid stored baseline on write failure and retries the session value coherently", () => {
    const { storage, store } = createStore();
    expect(
      store.saveWrittenResponse({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        contextId: "prompt-1",
        response: "Persisted first response.",
      }).ok,
    ).toBe(true);
    const key = getModuleArtifactStorageKey("module-a");
    const baseline = storage.values.get(key);

    storage.failWrites = true;
    const failed = store.saveWrittenResponse({
      moduleSlug: "module-a",
      interactionId: "prompt-2",
      contextId: "prompt-2",
      response: "Session-only sibling.",
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.reason).toBe("storage-unavailable");
    expect(failed.sessionValue?.entries["prompt-1"]).toBeDefined();
    expect(failed.sessionValue?.entries["prompt-2"]).toBeDefined();
    expect(storage.values.get(key)).toBe(baseline);

    storage.failWrites = false;
    const retried = store.saveWrittenResponse({
      moduleSlug: "module-a",
      interactionId: "prompt-2",
      contextId: "prompt-2",
      response: "Session-only sibling.",
    });
    expect(retried.ok).toBe(true);
    expect(JSON.parse(storage.values.get(key) ?? "").entries).toHaveProperty(
      "prompt-1",
    );
    expect(JSON.parse(storage.values.get(key) ?? "").entries).toHaveProperty(
      "prompt-2",
    );
  });

  it("resets one active practice while preserving siblings and every unrelated domain", () => {
    const { storage, store } = createStore();
    for (const interactionId of ["prompt-1", "prompt-2"]) {
      expect(
        store.saveWrittenResponse({
          moduleSlug: "module-a",
          interactionId,
          contextId: interactionId,
          response: `Response for ${interactionId}.`,
        }).ok,
      ).toBe(true);
    }
    storage.values.set(getModuleArtifactStorageKey("module-b"), "other-module");
    storage.values.set(getReflectionStorageKey("module-a"), "reflection");
    storage.values.set(COURSE_PROGRESS_STORAGE_KEY, "progress");

    const result = store.resetActivePractice("module-a", "prompt-1");
    expect(result.ok).toBe(true);
    if (!result.ok || result.value === null) return;
    expect(Object.keys(result.value.entries)).toEqual(["prompt-2"]);
    expect(storage.values.get(getModuleArtifactStorageKey("module-b"))).toBe(
      "other-module",
    );
    expect(storage.values.get(getReflectionStorageKey("module-a"))).toBe(
      "reflection",
    );
    expect(storage.values.get(COURSE_PROGRESS_STORAGE_KEY)).toBe("progress");
  });

  it("clears only module work, invalidates its cache, and reports removal failure honestly", () => {
    const { storage, store } = createStore();
    expect(
      store.saveWrittenResponse({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        contextId: "prompt-1",
        response: "Cached response.",
      }).ok,
    ).toBe(true);
    storage.values.set(getReflectionStorageKey("module-a"), "reflection");
    storage.values.set(COURSE_PROGRESS_STORAGE_KEY, "progress");
    expect(store.getSnapshot("module-a").status).toBe("available");

    storage.failRemovals = true;
    expect(store.clearModuleWork("module-a")).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });
    expect(store.getSnapshot("module-a").status).toBe("available");

    storage.failRemovals = false;
    expect(store.clearModuleWork("module-a")).toEqual({ ok: true, value: null });
    expect(store.getSnapshot("module-a").status).toBe("absent");
    expect(storage.values.get(getReflectionStorageKey("module-a"))).toBe(
      "reflection",
    );
    expect(storage.values.get(COURSE_PROGRESS_STORAGE_KEY)).toBe("progress");
  });

  it("updates store snapshots through events and keeps writes successful when event dispatch fails", () => {
    const storage = new MemoryStorage();
    const eventHarness = createTestEvents();
    const { store } = createStore(storage, { eventHarness });
    let changes = 0;
    store.subscribe("module-a", () => changes++);

    expect(
      store.saveWrittenResponse({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        contextId: "prompt-1",
        response: "Same-tab update.",
      }).ok,
    ).toBe(true);
    expect(changes).toBe(1);
    expect(store.getSnapshot("module-a").status).toBe("available");

    storage.values.delete(getModuleArtifactStorageKey("module-a"));
    eventHarness.emitStorage(getModuleArtifactStorageKey("module-a"));
    expect(changes).toBe(2);
    expect(store.getSnapshot("module-a").status).toBe("absent");

    const failingEvents: StoreEvents = {
      subscribe: () => () => {},
      emit: () => false,
    };
    const eventFailureStore = createModuleArtifactStore({
      storage: new MemoryStorage(),
      events: failingEvents,
      authority,
      createRevisionId: () => "event-failure-revision",
    });
    expect(
      eventFailureStore.saveWrittenResponse({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        contextId: "prompt-1",
        response: "The write still succeeds.",
      }).ok,
    ).toBe(true);
  });

  it("rejects invalid feedback, revision failure, and invalid branching authority without corrupting valid state", () => {
    const { storage, store } = createStore();
    const saved = store.saveWrittenResponse({
      moduleSlug: "module-a",
      interactionId: "prompt-1",
      contextId: "prompt-1",
      response: "Valid response.",
    });
    expect(saved.ok).toBe(true);
    if (!saved.ok) return;
    const entry = saved.value.entries["prompt-1"];
    if (entry.activityType !== "written-response") return;
    const baseline = storage.values.get(getModuleArtifactStorageKey("module-a"));

    expect(
      store.saveWrittenFeedback({
        moduleSlug: "module-a",
        interactionId: "prompt-1",
        responseRevisionId: entry.responseRevisionId,
        feedback: { ...writtenFeedback, strengths: [] },
      }),
    ).toEqual({ ok: false, reason: "invalid-input" });
    expect(
      store.saveBranchingEntry({
        moduleSlug: "module-a",
        entry: {
          activityType: "branching-simulation",
          interactionId: "simulation-entry",
          simulationId: "not-authoritative",
          simulationVersion: 1,
          completionState: "not-started",
          deterministicStateRevisionId: "state-invalid",
          review: { status: "not-requested" },
        },
      }),
    ).toEqual({ ok: false, reason: "invalid-input" });
    expect(storage.values.get(getModuleArtifactStorageKey("module-a"))).toBe(
      baseline,
    );

    const revisionFailure = createStore(new MemoryStorage(), {
      createRevisionId: () => {
        throw new Error("unavailable");
      },
    }).store.saveWrittenResponse({
      moduleSlug: "module-a",
      interactionId: "prompt-1",
      contextId: "prompt-1",
      response: "Revision creation fails safely.",
    });
    expect(revisionFailure).toEqual({
      ok: false,
      reason: "storage-unavailable",
    });
  });
});
