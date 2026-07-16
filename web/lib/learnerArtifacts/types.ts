export const MODULE_ARTIFACT_SCHEMA_VERSION = 1 as const;
export const REFLECTION_SCHEMA_VERSION = 1 as const;

export type PersistenceLocation = "local" | "session-only" | "none";

export type PersistenceOperationFailureReason =
  | "invalid-input"
  | "not-found"
  | "stale-subject"
  | "storage-unavailable"
  | "stored-record-changed"
  | "stored-record-invalid"
  | "stored-record-unsupported";

export type PersistenceOperationResult<T> =
  | { ok: true; value: T; warning?: "legacy-cleanup-failed" }
  | {
      ok: false;
      reason: PersistenceOperationFailureReason;
      sessionValue?: T;
    };

export type WrittenAIReviewFeedback = {
  summary: string;
  strengths: string[];
  gap: string;
  nextStep: string;
};

export type BranchingAIReviewFeedback = {
  summary: string;
  strength: string;
  overlookedTradeoff: string;
  refinementQuestion: string;
};

export type ReflectionAIReviewFeedback = {
  summary: string;
  strengths: string[];
  nextStep: string;
};

export type WrittenReviewSubject = {
  responseRevisionId: string;
};

export type ReflectionReviewSubject = {
  responseRevisionId: string;
};

export type BranchingReviewSubject = {
  deterministicStateRevisionId: string;
  originalRationaleRevisionId: string;
};

export type AIReviewState<TSubject, TFeedback> =
  | { status: "not-requested" | "ready" | "stale" | "cleared" }
  | { status: "pending" | "failed"; subject: TSubject }
  | { status: "available"; subject: TSubject; feedback: TFeedback };

export type WrittenResponseEntry = {
  activityType: "written-response";
  interactionId: string;
  contextId: string;
  response: string;
  responseRevisionId: string;
  review: AIReviewState<WrittenReviewSubject, WrittenAIReviewFeedback>;
};

export type SimulationCompletionState =
  | "not-started"
  | "selection-only"
  | "consequence-visible"
  | "pathway-complete"
  | "rationale-complete";

export type LearnerRationale = {
  text: string;
  revisionId: string;
};

export type BranchingSimulationEntry = {
  activityType: "branching-simulation";
  interactionId: string;
  simulationId: string;
  simulationVersion: number;
  completionState: SimulationCompletionState;
  deterministicStateRevisionId: string;
  firstDecisionId?: string;
  firstOptionId?: string;
  firstConsequenceId?: string;
  secondDecisionId?: string;
  secondOptionId?: string;
  pathwayId?: string;
  finalStateId?: string;
  originalRationale?: LearnerRationale;
  revisedRationale?: LearnerRationale;
  review: AIReviewState<BranchingReviewSubject, BranchingAIReviewFeedback>;
};

export type ModuleArtifactEntry =
  | WrittenResponseEntry
  | BranchingSimulationEntry;

export type ModuleArtifactRecord = {
  domain: "module-artifact";
  schemaVersion: typeof MODULE_ARTIFACT_SCHEMA_VERSION;
  moduleSlug: string;
  entries: Record<string, ModuleArtifactEntry>;
};

export type ReflectionRecord = {
  domain: "reflection";
  schemaVersion: typeof REFLECTION_SCHEMA_VERSION;
  moduleSlug: string;
  response: string;
  responseRevisionId: string;
  review: AIReviewState<ReflectionReviewSubject, ReflectionAIReviewFeedback>;
};

export type DomainSnapshot<T> =
  | {
      status: "available";
      persistence: Exclude<PersistenceLocation, "none">;
      value: T;
      isolatedEntryIds: string[];
    }
  | {
      status: "absent" | "invalid" | "unsupported" | "unavailable";
      persistence: "none";
      value: null;
      isolatedEntryIds: string[];
    };
