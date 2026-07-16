"use client";

import { useCallback, useSyncExternalStore } from "react";
import { moduleArtifactStore } from "@/lib/learnerArtifacts";
import type { DomainSnapshot, ModuleArtifactRecord } from "@/lib/learnerArtifacts";

const serverSnapshot: DomainSnapshot<ModuleArtifactRecord> = {
  status: "absent",
  persistence: "none",
  value: null,
  isolatedEntryIds: [],
};

export function useModuleLearnerArtifact(moduleSlug: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) =>
      moduleArtifactStore.subscribe(moduleSlug, onStoreChange),
    [moduleSlug],
  );
  const getSnapshot = useCallback(
    () => moduleArtifactStore.getSnapshot(moduleSlug),
    [moduleSlug],
  );

  const snapshot = useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot);

  return {
    snapshot,
    saveWrittenResponse: moduleArtifactStore.saveWrittenResponse,
    markWrittenReviewPending: moduleArtifactStore.markWrittenReviewPending,
    saveWrittenFeedback: moduleArtifactStore.saveWrittenFeedback,
    markWrittenReviewFailed: moduleArtifactStore.markWrittenReviewFailed,
    saveBranchingEntry: moduleArtifactStore.saveBranchingEntry,
    markBranchingReviewPending: moduleArtifactStore.markBranchingReviewPending,
    saveBranchingFeedback: moduleArtifactStore.saveBranchingFeedback,
    markBranchingReviewFailed: moduleArtifactStore.markBranchingReviewFailed,
    resetActivePractice: moduleArtifactStore.resetActivePractice,
    clearModuleWork: moduleArtifactStore.clearModuleWork,
  };
}
