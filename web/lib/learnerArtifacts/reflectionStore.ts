import { createBrowserStorage, type StorageAdapter } from "@/lib/persistence/browserStorage";
import { createBrowserStoreEvents, type StoreEvents } from "@/lib/persistence/storageEvents";
import {
  getReflectionEventName,
  getReflectionStorageKey,
} from "./keys";
import { migrateReflectionRecord } from "./migrations";
import {
  createRevisionIdentity,
  type RevisionIdentityFactory,
} from "./revisionIdentity";
import {
  REFLECTION_SCHEMA_VERSION,
  type DomainSnapshot,
  type PersistenceOperationFailureReason,
  type PersistenceOperationResult,
  type ReflectionAIReviewFeedback,
  type ReflectionRecord,
  type ReflectionReviewSubject,
} from "./types";
import {
  isValidLearnerText,
  isValidReflectionFeedback,
  parseReflectionRecord,
  repositoryArtifactAuthority,
  type ArtifactAuthority,
} from "./validation";

export type ReflectionSnapshot = DomainSnapshot<ReflectionRecord>;

type ReflectionReviewInput = {
  moduleSlug: string;
  responseRevisionId: string;
};

type SaveReflectionFeedbackInput = ReflectionReviewInput & {
  feedback: ReflectionAIReviewFeedback;
};

export interface ReflectionStore {
  getSnapshot(moduleSlug: string): ReflectionSnapshot;
  subscribe(moduleSlug: string, onStoreChange: () => void): () => void;
  saveResponse(
    moduleSlug: string,
    response: string,
  ): PersistenceOperationResult<ReflectionRecord>;
  markReviewPending(
    input: ReflectionReviewInput,
  ): PersistenceOperationResult<ReflectionRecord>;
  saveFeedback(
    input: SaveReflectionFeedbackInput,
  ): PersistenceOperationResult<ReflectionRecord>;
  markReviewFailed(
    input: ReflectionReviewInput,
  ): PersistenceOperationResult<ReflectionRecord>;
  clearReflection(moduleSlug: string): PersistenceOperationResult<null>;
}

type Dependencies = {
  storage: StorageAdapter;
  events: StoreEvents;
  authority: ArtifactAuthority;
  createRevisionId: RevisionIdentityFactory;
};

type SessionRecord = {
  value: ReflectionRecord;
  baselineRawValue: string | null;
};

type UpdateContext =
  | {
      ok: true;
      value: ReflectionRecord | null;
      baselineRawValue: string | null;
      persistence: "local" | "session-only" | "none";
    }
  | { ok: false; reason: PersistenceOperationFailureReason };

const invalidSnapshot: ReflectionSnapshot = {
  status: "invalid",
  persistence: "none",
  value: null,
  isolatedEntryIds: [],
};

export function createReflectionStore({
  storage,
  events,
  authority,
  createRevisionId,
}: Dependencies): ReflectionStore {
  const cachedSnapshots = new Map<
    string,
    { rawValue: string | null; snapshot: ReflectionSnapshot }
  >();
  const sessionRecords = new Map<string, SessionRecord>();

  function notify(moduleSlug: string) {
    cachedSnapshots.delete(moduleSlug);
    events.emit(getReflectionEventName(moduleSlug));
  }

  function getSnapshot(moduleSlug: string): ReflectionSnapshot {
    if (!authority.isModuleSlug(moduleSlug)) return invalidSnapshot;

    const sessionRecord = sessionRecords.get(moduleSlug);
    if (sessionRecord) {
      const cached = cachedSnapshots.get(moduleSlug);
      if (
        cached?.rawValue === null &&
        cached.snapshot.status === "available" &&
        cached.snapshot.persistence === "session-only" &&
        cached.snapshot.value === sessionRecord.value
      ) {
        return cached.snapshot;
      }

      const snapshot: ReflectionSnapshot = {
        status: "available",
        persistence: "session-only",
        value: sessionRecord.value,
        isolatedEntryIds: [],
      };
      cachedSnapshots.set(moduleSlug, { rawValue: null, snapshot });
      return snapshot;
    }

    const readResult = storage.getItem(getReflectionStorageKey(moduleSlug));
    if (!readResult.ok) {
      return {
        status: "unavailable",
        persistence: "none",
        value: null,
        isolatedEntryIds: [],
      };
    }

    const cached = cachedSnapshots.get(moduleSlug);
    if (cached?.rawValue === readResult.value) return cached.snapshot;

    if (readResult.value === null) {
      const snapshot: ReflectionSnapshot = {
        status: "absent",
        persistence: "none",
        value: null,
        isolatedEntryIds: [],
      };
      cachedSnapshots.set(moduleSlug, { rawValue: null, snapshot });
      return snapshot;
    }

    const migration = migrateReflectionRecord(readResult.value, authority);
    if (!migration.ok) {
      const snapshot: ReflectionSnapshot = {
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

    const snapshot: ReflectionSnapshot = {
      status: "available",
      persistence: "local",
      value: migration.value,
      isolatedEntryIds: [],
    };
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
        value: null,
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
    record: ReflectionRecord,
  ): PersistenceOperationResult<ReflectionRecord> {
    const validated = parseReflectionRecord(record, authority, {
      recoverPending: false,
    });
    if (!validated.ok) return { ok: false, reason: "invalid-input" };

    const currentRead = storage.getItem(getReflectionStorageKey(moduleSlug));
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
      getReflectionStorageKey(moduleSlug),
      JSON.stringify(validated.value),
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
      rawValue: JSON.stringify(validated.value),
      snapshot: {
        status: "available",
        persistence: "local",
        value: validated.value,
        isolatedEntryIds: [],
      },
    });
    return { ok: true, value: validated.value };
  }

  function updateReview(
    input: ReflectionReviewInput,
    getReview: (
      subject: ReflectionReviewSubject,
    ) => ReflectionRecord["review"],
  ): PersistenceOperationResult<ReflectionRecord> {
    const current = getRecordForUpdate(input.moduleSlug);
    if (!current.ok) return current;
    if (!current.value) return { ok: false, reason: "not-found" };
    if (current.value.responseRevisionId !== input.responseRevisionId) {
      return { ok: false, reason: "stale-subject" };
    }

    return persist(input.moduleSlug, current, {
      ...current.value,
      review: getReview({ responseRevisionId: input.responseRevisionId }),
    });
  }

  return {
    getSnapshot,
    subscribe(moduleSlug, onStoreChange) {
      if (!authority.isModuleSlug(moduleSlug)) return () => {};
      return events.subscribe(
        getReflectionStorageKey(moduleSlug),
        getReflectionEventName(moduleSlug),
        () => {
          cachedSnapshots.delete(moduleSlug);
          onStoreChange();
        },
      );
    },
    saveResponse(moduleSlug, response) {
      if (!authority.isModuleSlug(moduleSlug) || !isValidLearnerText(response)) {
        return { ok: false, reason: "invalid-input" };
      }

      const current = getRecordForUpdate(moduleSlug);
      if (!current.ok) return current;
      if (
        current.value &&
        current.value.response === response
      ) {
        return current.persistence === "local"
          ? { ok: true, value: current.value }
          : persist(moduleSlug, current, current.value);
      }

      let responseRevisionId: string;
      try {
        responseRevisionId = createRevisionId();
      } catch {
        return { ok: false, reason: "storage-unavailable" };
      }

      return persist(moduleSlug, current, {
        domain: "reflection",
        schemaVersion: REFLECTION_SCHEMA_VERSION,
        moduleSlug,
        response,
        responseRevisionId,
        review: { status: "not-requested" },
      });
    },
    markReviewPending(input) {
      return updateReview(input, (subject) => ({ status: "pending", subject }));
    },
    saveFeedback(input) {
      if (!isValidReflectionFeedback(input.feedback)) {
        return { ok: false, reason: "invalid-input" };
      }
      return updateReview(input, (subject) => ({
        status: "available",
        subject,
        feedback: input.feedback,
      }));
    },
    markReviewFailed(input) {
      return updateReview(input, (subject) => ({ status: "failed", subject }));
    },
    clearReflection(moduleSlug) {
      if (!authority.isModuleSlug(moduleSlug)) {
        return { ok: false, reason: "invalid-input" };
      }
      const clearResult = storage.removeItem(getReflectionStorageKey(moduleSlug));
      if (!clearResult.ok) {
        return { ok: false, reason: "storage-unavailable" };
      }

      sessionRecords.delete(moduleSlug);
      notify(moduleSlug);
      return { ok: true, value: null };
    },
  };
}

export const reflectionStore = createReflectionStore({
  storage: createBrowserStorage(),
  events: createBrowserStoreEvents(),
  authority: repositoryArtifactAuthority,
  createRevisionId: createRevisionIdentity,
});
