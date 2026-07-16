"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  reflectionStore,
  type ReflectionSnapshot,
} from "@/lib/learnerArtifacts/reflectionStore";

const serverSnapshot: ReflectionSnapshot = {
  status: "absent",
  persistence: "none",
  value: null,
  isolatedEntryIds: [],
};

export function useReflectionPersistence(moduleSlug: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) =>
      reflectionStore.subscribe(moduleSlug, onStoreChange),
    [moduleSlug],
  );
  const getSnapshot = useCallback(
    () => reflectionStore.getSnapshot(moduleSlug),
    [moduleSlug],
  );
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot);

  return {
    snapshot,
    saveResponse: reflectionStore.saveResponse,
    markReviewPending: reflectionStore.markReviewPending,
    saveFeedback: reflectionStore.saveFeedback,
    markReviewFailed: reflectionStore.markReviewFailed,
    clearReflection: reflectionStore.clearReflection,
  };
}
