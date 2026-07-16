export const COURSE_PROGRESS_STORAGE_KEY = "future-of-id:course-progress";
export const LEGACY_COURSE_PROGRESS_STORAGE_KEY = "course-progress";

const MODULE_ARTIFACT_PREFIX = "future-of-id:module-artifact:";
const REFLECTION_PREFIX = "future-of-id:reflection:";

export const COURSE_PROGRESS_EVENT = "future-of-id:course-progress-change";
export const MODULE_ARTIFACT_EVENT = "future-of-id:module-artifact-change";
export const REFLECTION_EVENT = "future-of-id:reflection-change";

export function getModuleArtifactStorageKey(moduleSlug: string) {
  return `${MODULE_ARTIFACT_PREFIX}${encodeURIComponent(moduleSlug)}`;
}

export function getReflectionStorageKey(moduleSlug: string) {
  return `${REFLECTION_PREFIX}${encodeURIComponent(moduleSlug)}`;
}

export function getModuleArtifactEventName(moduleSlug: string) {
  return `${MODULE_ARTIFACT_EVENT}:${encodeURIComponent(moduleSlug)}`;
}

export function getReflectionEventName(moduleSlug: string) {
  return `${REFLECTION_EVENT}:${encodeURIComponent(moduleSlug)}`;
}
