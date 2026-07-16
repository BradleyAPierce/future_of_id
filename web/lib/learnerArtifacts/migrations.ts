import {
  parseModuleArtifactRecord,
  parseReflectionRecord,
  type ArtifactAuthority,
  type ParsedRecord,
} from "./validation";
import type { ModuleArtifactRecord, ReflectionRecord } from "./types";

export type JsonMigrationResult<T> =
  | { ok: true; value: T; isolatedEntryIds: string[] }
  | { ok: false; reason: "invalid" | "unsupported" };

function parseJson(rawValue: string): unknown | null {
  try {
    return JSON.parse(rawValue) as unknown;
  } catch {
    return null;
  }
}

function migrateCurrentRecord<T>(
  rawValue: string,
  parse: (value: unknown) => ParsedRecord<T>,
): JsonMigrationResult<T> {
  const parsedJson = parseJson(rawValue);
  if (parsedJson === null) return { ok: false, reason: "invalid" };
  return parse(parsedJson);
}

export function migrateModuleArtifactRecord(
  rawValue: string,
  authority: ArtifactAuthority,
): JsonMigrationResult<ModuleArtifactRecord> {
  return migrateCurrentRecord(rawValue, (value) =>
    parseModuleArtifactRecord(value, authority),
  );
}

export function migrateReflectionRecord(
  rawValue: string,
  authority: ArtifactAuthority,
): JsonMigrationResult<ReflectionRecord> {
  return migrateCurrentRecord(rawValue, (value) =>
    parseReflectionRecord(value, authority),
  );
}

export function migrateLegacyCourseProgress(
  rawValue: string,
  isAuthoritativeSlug: (slug: string) => boolean,
): { ok: true; completedModuleSlugs: string[] } | { ok: false } {
  const parsed = parseJson(rawValue);
  if (!Array.isArray(parsed)) return { ok: false };

  const completedModuleSlugs = Array.from(
    new Set(
      parsed.filter(
        (value): value is string =>
          typeof value === "string" && isAuthoritativeSlug(value),
      ),
    ),
  );

  return { ok: true, completedModuleSlugs };
}
