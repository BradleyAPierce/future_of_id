"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "course-progress";
const COURSE_PROGRESS_EVENT = "course-progress-change";

let cachedStorageValue = "";
let cachedCompletedModules: string[] = [];

function parseCompletedModules(value: string | null) {
  if (!value) {
    return [];
  }

  const parsed = JSON.parse(value);
  return Array.isArray(parsed)
    ? parsed.filter((slug): slug is string => typeof slug === "string")
    : [];
}

function getCourseProgressSnapshot() {
  if (typeof window === "undefined") {
    return [];
  }

  const saved = localStorage.getItem(STORAGE_KEY) ?? "";
  if (saved === cachedStorageValue) {
    return cachedCompletedModules;
  }

  cachedStorageValue = saved;
  cachedCompletedModules = parseCompletedModules(saved);
  return cachedCompletedModules;
}

function subscribeToCourseProgress(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  function handleStorage(event: StorageEvent) {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(COURSE_PROGRESS_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(COURSE_PROGRESS_EVENT, onStoreChange);
  };
}

function getServerSnapshot() {
  return [];
}

export function useCourseProgress() {
  const completedModules = useSyncExternalStore(
    subscribeToCourseProgress,
    getCourseProgressSnapshot,
    getServerSnapshot,
  );

  function markComplete(slug: string) {
    if (completedModules.includes(slug)) return;

    const updated = [...completedModules, slug];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event(COURSE_PROGRESS_EVENT));
  }

  function isCompleted(slug: string) {
    return completedModules.includes(slug);
  }

  return {
    completedModules,
    markComplete,
    isCompleted,
  };
}
