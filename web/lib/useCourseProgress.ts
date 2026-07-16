"use client";

import { useSyncExternalStore } from "react";
import {
  courseProgressStore,
  type CourseProgressSnapshot,
} from "@/lib/courseProgress/courseProgressStore";

const serverSnapshot: CourseProgressSnapshot = {
  status: "empty",
  persistence: "none",
  completedModules: [],
  isolatedModuleSlugs: [],
  legacyCleanupPending: false,
};

export function useCourseProgress() {
  const snapshot = useSyncExternalStore(
    courseProgressStore.subscribe,
    courseProgressStore.getSnapshot,
    () => serverSnapshot,
  );

  function isCompleted(slug: string) {
    return snapshot.completedModules.includes(slug);
  }

  return {
    completedModules: snapshot.completedModules,
    progressStatus: snapshot.status,
    persistence: snapshot.persistence,
    isolatedModuleSlugs: snapshot.isolatedModuleSlugs,
    legacyCleanupPending: snapshot.legacyCleanupPending,
    markComplete: courseProgressStore.markComplete,
    resetCourseProgress: courseProgressStore.resetCourseProgress,
    isCompleted,
  };
}
