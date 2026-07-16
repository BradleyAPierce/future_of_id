import type { StorageAdapter } from "@/lib/persistence/browserStorage";
import type { StoreEvents } from "@/lib/persistence/storageEvents";
import {
  getModuleArtifactEventName,
  getModuleArtifactStorageKey,
} from "./keys";
import { migrateModuleArtifactRecord } from "./migrations";
import type { RevisionIdentityFactory } from "./revisionIdentity";
import {
  MODULE_ARTIFACT_SCHEMA_VERSION,
  type BranchingAIReviewFeedback,
  type BranchingReviewSubject,
  type BranchingSimulationEntry,
  type DomainSnapshot,
  type ModuleArtifactRecord,
  type PersistenceOperationFailureReason,
  type PersistenceOperationResult,
  type WrittenAIReviewFeedback,
  type WrittenResponseEntry,
  type WrittenReviewSubject,
} from "./types";
import {
  isValidBranchingFeedback,
  isValidLearnerText,
  isValidWrittenFeedback,
  parseModuleArtifactRecord,
  validateBranchingEntry,
  type ArtifactAuthority,
} from "./validation";

type ModuleArtifactSnapshot = DomainSnapshot<ModuleArtifactRecord>;

export type SaveWrittenResponseInput = {
  moduleSlug: string;
  interactionId: string;
  contextId: string;
  response: string;
};

export type WrittenReviewInput = {
  moduleSlug: string;
  interactionId: string;
  responseRevisionId: string;
};

export type SaveWrittenFeedbackInput = WrittenReviewInput & {
  feedback: WrittenAIReviewFeedback;
};

export type SaveBranchingEntryInput = {
  moduleSlug: string;
  entry: BranchingSimulationEntry;
};

export type BranchingReviewInput = {
  moduleSlug: string;
  interactionId: string;
  deterministicStateRevisionId: string;
  originalRationaleRevisionId: string;
};

export type SaveBranchingFeedbackInput = BranchingReviewInput & {
  feedback: BranchingAIReviewFeedback;
};

export interface ModuleArtifactStore {
  getSnapshot(moduleSlug: string): ModuleArtifactSnapshot;
  subscribe(moduleSlug: string, onStoreChange: () => void): () => void;
  saveWrittenResponse(
    input: SaveWrittenResponseInput,
  ): PersistenceOperationResult<ModuleArtifactRecord>;
  markWrittenReviewPending(
    input: WrittenReviewInput,
  ): PersistenceOperationResult<ModuleArtifactRecord>;
  saveWrittenFeedback(
    input: SaveWrittenFeedbackInput,
  ): PersistenceOperationResult<ModuleArtifactRecord>;
  markWrittenReviewFailed(
    input: WrittenReviewInput,
  ): PersistenceOperationResult<ModuleArtifactRecord>;
  saveBranchingEntry(
    input: SaveBranchingEntryInput,
  ): PersistenceOperationResult<ModuleArtifactRecord>;
  markBranchingReviewPending(
    input: BranchingReviewInput,
  ): PersistenceOperationResult<ModuleArtifactRecord>;
  saveBranchingFeedback(
    input: SaveBranchingFeedbackInput,
  ): PersistenceOperationResult<ModuleArtifactRecord>;
  markBranchingReviewFailed(
    input: BranchingReviewInput,
  ): PersistenceOperationResult<ModuleArtifactRecord>;
  resetActivePractice(
    moduleSlug: string,
    interactionId: string,
  ): PersistenceOperationResult<ModuleArtifactRecord | null>;
  clearModuleWork(
    moduleSlug: string,
  ): PersistenceOperationResult<null>;
}

type Dependencies = {
  storage: StorageAdapter;
  events: StoreEvents;
  authority: ArtifactAuthority;
  createRevisionId: RevisionIdentityFactory;
};

type SessionRecord = {
  value: ModuleArtifactRecord;
  baselineRawValue: string | null;
};

type UpdateContext =
  | {
      ok: true;
      value: ModuleArtifactRecord;
      baselineRawValue: string | null;
      persistence: "local" | "session-only" | "none";
    }
  | { ok: false; reason: PersistenceOperationFailureReason };

const invalidSnapshot: ModuleArtifactSnapshot = {
  status: "invalid",
  persistence: "none",
  value: null,
  isolatedEntryIds: [],
};

function absentSnapshot(): ModuleArtifactSnapshot {
  return {
    status: "absent",
    persistence: "none",
    value: null,
    isolatedEntryIds: [],
  };
}

function emptyRecord(moduleSlug: string): ModuleArtifactRecord {
  return {
    domain: "module-artifact",
    schemaVersion: MODULE_ARTIFACT_SCHEMA_VERSION,
    moduleSlug,
    entries: {},
  };
}

function serializeRecord(record: ModuleArtifactRecord) {
  return JSON.stringify(record);
}

export function createModuleArtifactStore({
  storage,
  events,
  authority,
  createRevisionId,
}: Dependencies): ModuleArtifactStore {
  const cachedSnapshots = new Map<
    string,
    { rawValue: string | null; snapshot: ModuleArtifactSnapshot }
  >();
  const sessionRecords = new Map<string, SessionRecord>();

  function notify(moduleSlug: string) {
    cachedSnapshots.delete(moduleSlug);
    events.emit(getModuleArtifactEventName(moduleSlug));
  }

  function snapshotFromRecord(
    value: ModuleArtifactRecord,
    persistence: "local" | "session-only",
    isolatedEntryIds: string[] = [],
  ): ModuleArtifactSnapshot {
    return {
      status: "available",
      persistence,
      value,
      isolatedEntryIds,
    };
  }

  function getSnapshot(moduleSlug: string): ModuleArtifactSnapshot {
    if (!authority.isModuleSlug(moduleSlug)) return invalidSnapshot;

    const sessionRecord = sessionRecords.get(moduleSlug);
    if (sessionRecord) {
      const existing = cachedSnapshots.get(moduleSlug);
      if (
        existing?.rawValue === null &&
        existing.snapshot.status === "available" &&
        existing.snapshot.persistence === "session-only" &&
        existing.snapshot.value === sessionRecord.value
      ) {
        return existing.snapshot;
      }

      const snapshot = snapshotFromRecord(sessionRecord.value, "session-only");
      cachedSnapshots.set(moduleSlug, { rawValue: null, snapshot });
      return snapshot;
    }

    const storageKey = getModuleArtifactStorageKey(moduleSlug);
    const readResult = storage.getItem(storageKey);
    if (!readResult.ok) {
      const snapshot: ModuleArtifactSnapshot = {
        status: "unavailable",
        persistence: "none",
        value: null,
        isolatedEntryIds: [],
      };
      return snapshot;
    }

    const cached = cachedSnapshots.get(moduleSlug);
    if (cached?.rawValue === readResult.value) return cached.snapshot;

    if (readResult.value === null) {
      const snapshot = absentSnapshot();
      cachedSnapshots.set(moduleSlug, { rawValue: null, snapshot });
      return snapshot;
    }

    const migration = migrateModuleArtifactRecord(readResult.value, authority);
    if (!migration.ok) {
      const snapshot: ModuleArtifactSnapshot = {
        status: migration.reason,
        persistence: "none",
        value: null,
        isolatedEntryIds: [],
      };
      cachedSnapshots.set(moduleSlug, {
        rawValue: readResult.value,
        snapshot,
      });
      return snapshot;
    }

    const snapshot = snapshotFromRecord(
      migration.value,
      "local",
      migration.isolatedEntryIds,
    );
    cachedSnapshots.set(moduleSlug, {
      rawValue: readResult.value,
      snapshot,
    });
    return snapshot;
  }

  function getRecordForUpdate(moduleSlug: string): UpdateContext {
    const sessionRecord = sessionRecords.get(moduleSlug);
    if (sessionRecord) {
      return {
        ok: true,
        value: sessionRecord.value,
        baselineRawValue: sessionRecord.baselineRawValue,
        persistence: "session-only",
      };
    }

    const snapshot = getSnapshot(moduleSlug);
    if (snapshot.status === "available") {
      const rawValue = cachedSnapshots.get(moduleSlug)?.rawValue;
      if (snapshot.persistence !== "local" || rawValue == null) {
        return { ok: false, reason: "storage-unavailable" };
      }
      return {
        ok: true,
        value: snapshot.value,
        baselineRawValue: rawValue,
        persistence: "local",
      };
    }
    if (snapshot.status === "absent") {
      return {
        ok: true,
        value: emptyRecord(moduleSlug),
        baselineRawValue: null,
        persistence: "none",
      };
    }
    if (snapshot.status === "invalid") {
      return { ok: false, reason: "stored-record-invalid" };
    }
    if (snapshot.status === "unsupported") {
      return { ok: false, reason: "stored-record-unsupported" };
    }
    return { ok: false, reason: "storage-unavailable" };
  }

  function persist(
    moduleSlug: string,
    context: Extract<UpdateContext, { ok: true }>,
    nextRecord: ModuleArtifactRecord,
  ): PersistenceOperationResult<ModuleArtifactRecord> {
    const validated = parseModuleArtifactRecord(nextRecord, authority, {
      recoverPending: false,
    });
    if (!validated.ok) return { ok: false, reason: "invalid-input" };

    const currentRead = storage.getItem(getModuleArtifactStorageKey(moduleSlug));
    if (!currentRead.ok) {
      sessionRecords.set(moduleSlug, {
        value: validated.value,
        baselineRawValue: context.baselineRawValue,
      });
      notify(moduleSlug);
      return {
        ok: false,
        reason: "storage-unavailable",
        sessionValue: validated.value,
      };
    }
    if (currentRead.value !== context.baselineRawValue) {
      sessionRecords.set(moduleSlug, {
        value: validated.value,
        baselineRawValue: context.baselineRawValue,
      });
      notify(moduleSlug);
      return {
        ok: false,
        reason: "stored-record-changed",
        sessionValue: validated.value,
      };
    }

    const writeResult = storage.setItem(
      getModuleArtifactStorageKey(moduleSlug),
      serializeRecord(validated.value),
    );

    if (!writeResult.ok) {
      sessionRecords.set(moduleSlug, {
        value: validated.value,
        baselineRawValue: context.baselineRawValue,
      });
      notify(moduleSlug);
      return {
        ok: false,
        reason: "storage-unavailable",
        sessionValue: validated.value,
      };
    }

    sessionRecords.delete(moduleSlug);
    notify(moduleSlug);
    cachedSnapshots.set(moduleSlug, {
      rawValue: serializeRecord(validated.value),
      snapshot: snapshotFromRecord(validated.value, "local"),
    });
    return { ok: true, value: validated.value };
  }

  function updateWrittenReview(
    input: WrittenReviewInput,
    getReview: (
      subject: WrittenReviewSubject,
    ) => WrittenResponseEntry["review"],
  ): PersistenceOperationResult<ModuleArtifactRecord> {
    if (!authority.isModuleSlug(input.moduleSlug)) {
      return { ok: false, reason: "invalid-input" };
    }

    const current = getRecordForUpdate(input.moduleSlug);
    if (!current.ok) return current;
    const entry = current.value.entries[input.interactionId];
    if (!entry || entry.activityType !== "written-response") {
      return { ok: false, reason: "not-found" };
    }
    if (entry.responseRevisionId !== input.responseRevisionId) {
      return { ok: false, reason: "stale-subject" };
    }

    const subject = { responseRevisionId: input.responseRevisionId };
    return persist(input.moduleSlug, current, {
      ...current.value,
      entries: {
        ...current.value.entries,
        [input.interactionId]: { ...entry, review: getReview(subject) },
      },
    });
  }

  function updateBranchingReview(
    input: BranchingReviewInput,
    getReview: (
      subject: BranchingReviewSubject,
    ) => BranchingSimulationEntry["review"],
  ): PersistenceOperationResult<ModuleArtifactRecord> {
    if (!authority.isModuleSlug(input.moduleSlug)) {
      return { ok: false, reason: "invalid-input" };
    }

    const current = getRecordForUpdate(input.moduleSlug);
    if (!current.ok) return current;
    const entry = current.value.entries[input.interactionId];
    if (!entry || entry.activityType !== "branching-simulation") {
      return { ok: false, reason: "not-found" };
    }
    if (
      entry.deterministicStateRevisionId !==
        input.deterministicStateRevisionId ||
      entry.originalRationale?.revisionId !==
        input.originalRationaleRevisionId
    ) {
      return { ok: false, reason: "stale-subject" };
    }

    const subject = {
      deterministicStateRevisionId: input.deterministicStateRevisionId,
      originalRationaleRevisionId: input.originalRationaleRevisionId,
    };
    return persist(input.moduleSlug, current, {
      ...current.value,
      entries: {
        ...current.value.entries,
        [input.interactionId]: { ...entry, review: getReview(subject) },
      },
    });
  }

  return {
    getSnapshot,
    subscribe(moduleSlug, onStoreChange) {
      if (!authority.isModuleSlug(moduleSlug)) return () => {};
      return events.subscribe(
        getModuleArtifactStorageKey(moduleSlug),
        getModuleArtifactEventName(moduleSlug),
        () => {
          cachedSnapshots.delete(moduleSlug);
          onStoreChange();
        },
      );
    },
    saveWrittenResponse(input) {
      if (
        !authority.isModuleSlug(input.moduleSlug) ||
        !authority.isWrittenInteraction(
          input.moduleSlug,
          input.interactionId,
          input.contextId,
        ) ||
        !isValidLearnerText(input.response)
      ) {
        return { ok: false, reason: "invalid-input" };
      }

      const current = getRecordForUpdate(input.moduleSlug);
      if (!current.ok) return current;
      const previous = current.value.entries[input.interactionId];
      if (
        previous?.activityType === "written-response" &&
        previous.contextId === input.contextId &&
        previous.response === input.response
      ) {
        return current.persistence === "local"
          ? { ok: true, value: current.value }
          : persist(input.moduleSlug, current, current.value);
      }

      let responseRevisionId: string;
      try {
        responseRevisionId = createRevisionId();
      } catch {
        return { ok: false, reason: "storage-unavailable" };
      }

      const entry: WrittenResponseEntry = {
        activityType: "written-response",
        interactionId: input.interactionId,
        contextId: input.contextId,
        response: input.response,
        responseRevisionId,
        review: { status: "not-requested" },
      };

      return persist(input.moduleSlug, current, {
        ...current.value,
        entries: { ...current.value.entries, [input.interactionId]: entry },
      });
    },
    markWrittenReviewPending(input) {
      return updateWrittenReview(input, (subject) => ({
        status: "pending",
        subject,
      }));
    },
    saveWrittenFeedback(input) {
      if (!isValidWrittenFeedback(input.feedback)) {
        return { ok: false, reason: "invalid-input" };
      }
      return updateWrittenReview(input, (subject) => ({
        status: "available",
        subject,
        feedback: input.feedback,
      }));
    },
    markWrittenReviewFailed(input) {
      return updateWrittenReview(input, (subject) => ({
        status: "failed",
        subject,
      }));
    },
    saveBranchingEntry({ moduleSlug, entry }) {
      if (
        !authority.isModuleSlug(moduleSlug) ||
        !validateBranchingEntry(moduleSlug, entry, authority)
      ) {
        return { ok: false, reason: "invalid-input" };
      }

      const current = getRecordForUpdate(moduleSlug);
      if (!current.ok) return current;
      const previous = current.value.entries[entry.interactionId];
      if (
        previous?.activityType === "branching-simulation" &&
        previous.originalRationale &&
        (entry.originalRationale?.revisionId !==
          previous.originalRationale.revisionId ||
          entry.originalRationale.text !== previous.originalRationale.text)
      ) {
        return { ok: false, reason: "invalid-input" };
      }

      return persist(moduleSlug, current, {
        ...current.value,
        entries: { ...current.value.entries, [entry.interactionId]: entry },
      });
    },
    markBranchingReviewPending(input) {
      return updateBranchingReview(input, (subject) => ({
        status: "pending",
        subject,
      }));
    },
    saveBranchingFeedback(input) {
      if (!isValidBranchingFeedback(input.feedback)) {
        return { ok: false, reason: "invalid-input" };
      }
      return updateBranchingReview(input, (subject) => ({
        status: "available",
        subject,
        feedback: input.feedback,
      }));
    },
    markBranchingReviewFailed(input) {
      return updateBranchingReview(input, (subject) => ({
        status: "failed",
        subject,
      }));
    },
    resetActivePractice(moduleSlug, interactionId) {
      if (!authority.isModuleSlug(moduleSlug)) {
        return { ok: false, reason: "invalid-input" };
      }
      const current = getRecordForUpdate(moduleSlug);
      if (!current.ok) return current;
      if (!current.value.entries[interactionId]) {
        return { ok: false, reason: "not-found" };
      }

      const nextEntries = { ...current.value.entries };
      delete nextEntries[interactionId];

      if (Object.keys(nextEntries).length === 0) {
        const clearResult = storage.removeItem(
          getModuleArtifactStorageKey(moduleSlug),
        );
        if (!clearResult.ok) {
          return { ok: false, reason: "storage-unavailable" };
        }
        sessionRecords.delete(moduleSlug);
        notify(moduleSlug);
        return { ok: true, value: null };
      }

      return persist(moduleSlug, current, {
        ...current.value,
        entries: nextEntries,
      });
    },
    clearModuleWork(moduleSlug) {
      if (!authority.isModuleSlug(moduleSlug)) {
        return { ok: false, reason: "invalid-input" };
      }
      const clearResult = storage.removeItem(
        getModuleArtifactStorageKey(moduleSlug),
      );
      if (!clearResult.ok) {
        return { ok: false, reason: "storage-unavailable" };
      }

      sessionRecords.delete(moduleSlug);
      notify(moduleSlug);
      return { ok: true, value: null };
    },
  };
}
