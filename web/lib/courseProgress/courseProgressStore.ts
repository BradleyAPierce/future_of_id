import { modules } from "@/data/modules";
import { createBrowserStorage, type StorageAdapter } from "@/lib/persistence/browserStorage";
import { createBrowserStoreEvents, type StoreEvents } from "@/lib/persistence/storageEvents";
import {
  COURSE_PROGRESS_EVENT,
  COURSE_PROGRESS_STORAGE_KEY,
  LEGACY_COURSE_PROGRESS_STORAGE_KEY,
} from "@/lib/learnerArtifacts/keys";
import { migrateLegacyCourseProgress } from "@/lib/learnerArtifacts/migrations";
import type { PersistenceOperationResult } from "@/lib/learnerArtifacts/types";

export const COURSE_PROGRESS_SCHEMA_VERSION = 1 as const;
const LEGACY_COURSE_PROGRESS_EVENT = "course-progress-change";

export type CourseProgressRecord = {
  domain: "course-progress";
  schemaVersion: typeof COURSE_PROGRESS_SCHEMA_VERSION;
  completedModuleSlugs: string[];
};

export type CourseProgressSnapshot = {
  status: "available" | "empty" | "invalid" | "unsupported" | "unavailable";
  persistence: "local" | "session-only" | "none";
  completedModules: string[];
  isolatedModuleSlugs: string[];
  legacyCleanupPending: boolean;
};

export interface CourseProgressStore {
  getSnapshot(): CourseProgressSnapshot;
  subscribe(onStoreChange: () => void): () => void;
  markComplete(slug: string): PersistenceOperationResult<CourseProgressRecord>;
  resetCourseProgress(): PersistenceOperationResult<null>;
  isAuthoritativeSlug(slug: string): boolean;
}

type Dependencies = {
  storage: StorageAdapter;
  events: StoreEvents;
  authoritativeSlugs: readonly string[];
};

type ParsedProgress =
  | {
      ok: true;
      value: CourseProgressRecord;
      isolatedModuleSlugs: string[];
    }
  | { ok: false; reason: "invalid" | "unsupported" };

const emptySnapshot: CourseProgressSnapshot = {
  status: "empty",
  persistence: "none",
  completedModules: [],
  isolatedModuleSlugs: [],
  legacyCleanupPending: false,
};

const unavailableSnapshot: CourseProgressSnapshot = {
  status: "unavailable",
  persistence: "none",
  completedModules: [],
  isolatedModuleSlugs: [],
  legacyCleanupPending: false,
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function createRecord(completedModuleSlugs: string[]): CourseProgressRecord {
  return {
    domain: "course-progress",
    schemaVersion: COURSE_PROGRESS_SCHEMA_VERSION,
    completedModuleSlugs,
  };
}

export function createCourseProgressStore({
  storage,
  events,
  authoritativeSlugs,
}: Dependencies): CourseProgressStore {
  const allowedSlugs = new Set(authoritativeSlugs);
  let sessionRecord: {
    value: CourseProgressRecord;
    baselineRawValue: string | null;
  } | null = null;
  let cached: { source: string; snapshot: CourseProgressSnapshot } | null = null;

  function isAuthoritativeSlug(slug: string) {
    return allowedSlugs.has(slug);
  }

  function parseCurrent(rawValue: string): ParsedProgress {
    let value: unknown;
    try {
      value = JSON.parse(rawValue) as unknown;
    } catch {
      return { ok: false, reason: "invalid" };
    }

    if (!isRecord(value)) return { ok: false, reason: "invalid" };
    if (value.schemaVersion !== COURSE_PROGRESS_SCHEMA_VERSION) {
      return {
        ok: false,
        reason:
          typeof value.schemaVersion === "number" &&
          value.schemaVersion > COURSE_PROGRESS_SCHEMA_VERSION
            ? "unsupported"
            : "invalid",
      };
    }
    if (
      value.domain !== "course-progress" ||
      !Array.isArray(value.completedModuleSlugs)
    ) {
      return { ok: false, reason: "invalid" };
    }

    const isolatedModuleSlugs: string[] = [];
    const completedModuleSlugs = Array.from(
      new Set(
        value.completedModuleSlugs.filter((slug): slug is string => {
          if (typeof slug !== "string" || !isAuthoritativeSlug(slug)) {
            if (typeof slug === "string") isolatedModuleSlugs.push(slug);
            return false;
          }
          return true;
        }),
      ),
    );

    return {
      ok: true,
      value: createRecord(completedModuleSlugs),
      isolatedModuleSlugs,
    };
  }

  function snapshotFromRecord(
    record: CourseProgressRecord,
    persistence: "local" | "session-only",
    isolatedModuleSlugs: string[] = [],
    legacyCleanupPending = false,
  ): CourseProgressSnapshot {
    return {
      status: record.completedModuleSlugs.length > 0 ? "available" : "empty",
      persistence,
      completedModules: record.completedModuleSlugs,
      isolatedModuleSlugs,
      legacyCleanupPending,
    };
  }

  function notify() {
    cached = null;
    events.emit(COURSE_PROGRESS_EVENT);
  }

  function migrateLegacy(rawValue: string): CourseProgressSnapshot {
    const source = `legacy:${rawValue}`;
    if (cached?.source === source) return cached.snapshot;

    const migration = migrateLegacyCourseProgress(rawValue, isAuthoritativeSlug);
    if (!migration.ok) {
      const snapshot: CourseProgressSnapshot = {
        status: "invalid",
        persistence: "none",
        completedModules: [],
        isolatedModuleSlugs: [],
        legacyCleanupPending: false,
      };
      cached = { source, snapshot };
      return snapshot;
    }

    const record = createRecord(migration.completedModuleSlugs);
    const writeResult = storage.setItem(
      COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify(record),
    );
    if (!writeResult.ok) {
      sessionRecord = { value: record, baselineRawValue: null };
      const snapshot = snapshotFromRecord(record, "session-only");
      cached = { source: "session", snapshot };
      return snapshot;
    }

    const legacyRemoval = storage.removeItem(
      LEGACY_COURSE_PROGRESS_STORAGE_KEY,
    );
    const snapshot = snapshotFromRecord(
      record,
      "local",
      [],
      !legacyRemoval.ok,
    );
    cached = { source: JSON.stringify(record), snapshot };
    queueMicrotask(() => events.emit(COURSE_PROGRESS_EVENT));
    return snapshot;
  }

  function getSnapshot(): CourseProgressSnapshot {
    if (sessionRecord) {
      if (cached?.source === "session") return cached.snapshot;
      const snapshot = snapshotFromRecord(sessionRecord.value, "session-only");
      cached = { source: "session", snapshot };
      return snapshot;
    }

    const currentRead = storage.getItem(COURSE_PROGRESS_STORAGE_KEY);
    if (!currentRead.ok) return unavailableSnapshot;

    if (currentRead.value !== null) {
      if (cached?.source === currentRead.value) return cached.snapshot;
      const parsed = parseCurrent(currentRead.value);
      if (!parsed.ok) {
        const snapshot: CourseProgressSnapshot = {
          status: parsed.reason,
          persistence: "none",
          completedModules: [],
          isolatedModuleSlugs: [],
          legacyCleanupPending: false,
        };
        cached = { source: currentRead.value, snapshot };
        return snapshot;
      }

      const snapshot = snapshotFromRecord(
        parsed.value,
        "local",
        parsed.isolatedModuleSlugs,
      );
      cached = { source: currentRead.value, snapshot };
      return snapshot;
    }

    const legacyRead = storage.getItem(LEGACY_COURSE_PROGRESS_STORAGE_KEY);
    if (!legacyRead.ok) return unavailableSnapshot;
    if (legacyRead.value === null) return emptySnapshot;
    return migrateLegacy(legacyRead.value);
  }

  function persist(
    record: CourseProgressRecord,
    baselineRawValue: string | null,
  ): PersistenceOperationResult<CourseProgressRecord> {
    const currentRead = storage.getItem(COURSE_PROGRESS_STORAGE_KEY);
    if (!currentRead.ok) {
      sessionRecord = { value: record, baselineRawValue };
      notify();
      return {
        ok: false,
        reason: "storage-unavailable",
        sessionValue: record,
      };
    }
    if (currentRead.value !== baselineRawValue) {
      sessionRecord = { value: record, baselineRawValue };
      notify();
      return {
        ok: false,
        reason: "stored-record-changed",
        sessionValue: record,
      };
    }

    const writeResult = storage.setItem(
      COURSE_PROGRESS_STORAGE_KEY,
      JSON.stringify(record),
    );
    if (!writeResult.ok) {
      sessionRecord = { value: record, baselineRawValue };
      notify();
      return {
        ok: false,
        reason: "storage-unavailable",
        sessionValue: record,
      };
    }

    sessionRecord = null;
    const legacyRemoval = storage.removeItem(
      LEGACY_COURSE_PROGRESS_STORAGE_KEY,
    );
    notify();
    return {
      ok: true,
      value: record,
      ...(!legacyRemoval.ok && { warning: "legacy-cleanup-failed" as const }),
    };
  }

  return {
    getSnapshot,
    subscribe(onStoreChange) {
      const unsubscribeCurrent = events.subscribe(
        COURSE_PROGRESS_STORAGE_KEY,
        COURSE_PROGRESS_EVENT,
        () => {
          cached = null;
          onStoreChange();
        },
      );
      const unsubscribeLegacy = events.subscribe(
        LEGACY_COURSE_PROGRESS_STORAGE_KEY,
        LEGACY_COURSE_PROGRESS_EVENT,
        () => {
          cached = null;
          onStoreChange();
        },
      );

      return () => {
        unsubscribeCurrent();
        unsubscribeLegacy();
      };
    },
    markComplete(slug) {
      if (!isAuthoritativeSlug(slug)) {
        return { ok: false, reason: "invalid-input" };
      }

      const snapshot = getSnapshot();
      if (snapshot.status === "invalid") {
        return { ok: false, reason: "stored-record-invalid" };
      }
      if (snapshot.status === "unsupported") {
        return { ok: false, reason: "stored-record-unsupported" };
      }
      if (snapshot.status === "unavailable") {
        return { ok: false, reason: "storage-unavailable" };
      }

      const baselineRawValue = sessionRecord
        ? sessionRecord.baselineRawValue
        : snapshot.persistence === "local"
          ? cached?.source ?? null
          : null;
      if (snapshot.completedModules.includes(slug)) {
        const record = createRecord(snapshot.completedModules);
        return snapshot.persistence === "session-only"
          ? persist(record, baselineRawValue)
          : { ok: true, value: record };
      }

      return persist(
        createRecord([...snapshot.completedModules, slug]),
        baselineRawValue,
      );
    },
    resetCourseProgress() {
      const legacyRemoval = storage.removeItem(
        LEGACY_COURSE_PROGRESS_STORAGE_KEY,
      );
      if (!legacyRemoval.ok) {
        return { ok: false, reason: "storage-unavailable" };
      }

      const currentRemoval = storage.removeItem(COURSE_PROGRESS_STORAGE_KEY);
      if (!currentRemoval.ok) {
        return { ok: false, reason: "storage-unavailable" };
      }

      sessionRecord = null;
      notify();
      return { ok: true, value: null };
    },
    isAuthoritativeSlug,
  };
}

export const courseProgressStore = createCourseProgressStore({
  storage: createBrowserStorage(),
  events: createBrowserStoreEvents(),
  authoritativeSlugs: modules.map((module) => module.slug),
});
