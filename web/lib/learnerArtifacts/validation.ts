import { modules } from "@/data/modules";
import { SCENARIO_DECISIONS_BY_MODULE } from "@/data/scenarioDecisions";
import {
  MODULE_ARTIFACT_SCHEMA_VERSION,
  REFLECTION_SCHEMA_VERSION,
  type AIReviewState,
  type BranchingAIReviewFeedback,
  type BranchingReviewSubject,
  type BranchingSimulationEntry,
  type ModuleArtifactEntry,
  type ModuleArtifactRecord,
  type ReflectionAIReviewFeedback,
  type ReflectionRecord,
  type ReflectionReviewSubject,
  type WrittenAIReviewFeedback,
  type WrittenResponseEntry,
  type WrittenReviewSubject,
} from "./types";

const MAX_IDENTIFIER_LENGTH = 160;
const MAX_LEARNER_TEXT_LENGTH = 1200;
const MAX_FEEDBACK_FIELD_LENGTH = 2000;
const MAX_FEEDBACK_STRENGTHS = 5;

type UnknownRecord = Record<string, unknown>;

export interface ArtifactAuthority {
  isModuleSlug(value: string): boolean;
  isWrittenInteraction(
    moduleSlug: string,
    interactionId: string,
    contextId: string,
  ): boolean;
  isValidBranchingEntry(moduleSlug: string, entry: BranchingSimulationEntry): boolean;
}

export type ParsedRecord<T> =
  | { ok: true; value: T; isolatedEntryIds: string[] }
  | { ok: false; reason: "invalid" | "unsupported" };

function isRecord(value: unknown): value is UnknownRecord {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isBoundedString(
  value: unknown,
  maxLength: number,
  allowEmpty = false,
): value is string {
  return (
    typeof value === "string" &&
    value.length <= maxLength &&
    (allowEmpty || value.trim().length > 0)
  );
}

function isIdentifier(value: unknown): value is string {
  return (
    isBoundedString(value, MAX_IDENTIFIER_LENGTH) &&
    /^[a-zA-Z0-9][a-zA-Z0-9._:-]*$/.test(value)
  );
}

function isStringArray(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.length <= MAX_FEEDBACK_STRENGTHS &&
    value.every((item) => isBoundedString(item, MAX_FEEDBACK_FIELD_LENGTH))
  );
}

function isWrittenFeedback(value: unknown): value is WrittenAIReviewFeedback {
  if (!isRecord(value)) return false;

  return (
    isBoundedString(value.summary, MAX_FEEDBACK_FIELD_LENGTH) &&
    isStringArray(value.strengths) &&
    isBoundedString(value.gap, MAX_FEEDBACK_FIELD_LENGTH) &&
    isBoundedString(value.nextStep, MAX_FEEDBACK_FIELD_LENGTH)
  );
}

function isReflectionFeedback(
  value: unknown,
): value is ReflectionAIReviewFeedback {
  if (!isRecord(value)) return false;

  return (
    isBoundedString(value.summary, MAX_FEEDBACK_FIELD_LENGTH) &&
    isStringArray(value.strengths) &&
    isBoundedString(value.nextStep, MAX_FEEDBACK_FIELD_LENGTH)
  );
}

function isBranchingFeedback(
  value: unknown,
): value is BranchingAIReviewFeedback {
  if (!isRecord(value)) return false;

  return (
    isBoundedString(value.summary, MAX_FEEDBACK_FIELD_LENGTH) &&
    isBoundedString(value.strength, MAX_FEEDBACK_FIELD_LENGTH) &&
    isBoundedString(value.overlookedTradeoff, MAX_FEEDBACK_FIELD_LENGTH) &&
    isBoundedString(value.refinementQuestion, MAX_FEEDBACK_FIELD_LENGTH)
  );
}

function isWrittenSubject(value: unknown): value is WrittenReviewSubject {
  return isRecord(value) && isIdentifier(value.responseRevisionId);
}

function isReflectionSubject(value: unknown): value is ReflectionReviewSubject {
  return isRecord(value) && isIdentifier(value.responseRevisionId);
}

function isBranchingSubject(value: unknown): value is BranchingReviewSubject {
  return (
    isRecord(value) &&
    isIdentifier(value.deterministicStateRevisionId) &&
    isIdentifier(value.originalRationaleRevisionId)
  );
}

function parseReviewState<TSubject, TFeedback>(
  value: unknown,
  isSubject: (subject: unknown) => subject is TSubject,
  isFeedback: (feedback: unknown) => feedback is TFeedback,
  recoverPending: boolean,
): AIReviewState<TSubject, TFeedback> | null {
  if (!isRecord(value) || typeof value.status !== "string") return null;

  if (
    value.status === "not-requested" ||
    value.status === "ready" ||
    value.status === "stale" ||
    value.status === "cleared"
  ) {
    return { status: value.status };
  }

  if (
    (value.status === "pending" || value.status === "failed") &&
    isSubject(value.subject)
  ) {
    return {
      status:
        value.status === "pending" && recoverPending
          ? "failed"
          : value.status,
      subject: value.subject,
    };
  }

  if (
    value.status === "available" &&
    isSubject(value.subject) &&
    isFeedback(value.feedback)
  ) {
    return {
      status: "available",
      subject: value.subject,
      feedback: value.feedback,
    };
  }

  return null;
}

function subjectsMatchWritten(
  review: AIReviewState<WrittenReviewSubject, WrittenAIReviewFeedback>,
  responseRevisionId: string,
) {
  return (
    !("subject" in review) ||
    review.subject.responseRevisionId === responseRevisionId
  );
}

function subjectsMatchReflection(
  review: AIReviewState<ReflectionReviewSubject, ReflectionAIReviewFeedback>,
  responseRevisionId: string,
) {
  return (
    !("subject" in review) ||
    review.subject.responseRevisionId === responseRevisionId
  );
}

function subjectsMatchBranching(
  review: AIReviewState<BranchingReviewSubject, BranchingAIReviewFeedback>,
  entry: BranchingSimulationEntry,
) {
  if (!("subject" in review)) return true;
  if (!entry.originalRationale) return false;

  return (
    review.subject.deterministicStateRevisionId ===
      entry.deterministicStateRevisionId &&
    review.subject.originalRationaleRevisionId ===
      entry.originalRationale.revisionId
  );
}

function parseWrittenEntry(
  value: unknown,
  moduleSlug: string,
  authority: ArtifactAuthority,
  recoverPending: boolean,
): WrittenResponseEntry | null {
  if (!isRecord(value) || value.activityType !== "written-response") return null;
  if (
    !isIdentifier(value.interactionId) ||
    !isIdentifier(value.contextId) ||
    !isBoundedString(value.response, MAX_LEARNER_TEXT_LENGTH) ||
    !isIdentifier(value.responseRevisionId) ||
    !authority.isWrittenInteraction(
      moduleSlug,
      value.interactionId,
      value.contextId,
    )
  ) {
    return null;
  }

  const review = parseReviewState(
    value.review,
    isWrittenSubject,
    isWrittenFeedback,
    recoverPending,
  );
  if (!review) return null;

  return {
    activityType: "written-response",
    interactionId: value.interactionId,
    contextId: value.contextId,
    response: value.response,
    responseRevisionId: value.responseRevisionId,
    review: subjectsMatchWritten(review, value.responseRevisionId)
      ? review
      : { status: "stale" },
  };
}

function parseRationale(value: unknown) {
  if (!isRecord(value)) return null;
  if (
    !isBoundedString(value.text, MAX_LEARNER_TEXT_LENGTH) ||
    !isIdentifier(value.revisionId)
  ) {
    return null;
  }
  return { text: value.text, revisionId: value.revisionId };
}

function parseBranchingEntry(
  value: unknown,
  moduleSlug: string,
  authority: ArtifactAuthority,
  recoverPending: boolean,
): BranchingSimulationEntry | null {
  if (!isRecord(value) || value.activityType !== "branching-simulation") {
    return null;
  }

  const completionStates = new Set([
    "not-started",
    "selection-only",
    "consequence-visible",
    "pathway-complete",
    "rationale-complete",
  ]);
  const optionalIdentifiers = [
    "firstDecisionId",
    "firstOptionId",
    "firstConsequenceId",
    "secondDecisionId",
    "secondOptionId",
    "pathwayId",
    "finalStateId",
  ] as const;

  if (
    !isIdentifier(value.interactionId) ||
    !isIdentifier(value.simulationId) ||
    !Number.isInteger(value.simulationVersion) ||
    (value.simulationVersion as number) < 1 ||
    typeof value.completionState !== "string" ||
    !completionStates.has(value.completionState) ||
    !isIdentifier(value.deterministicStateRevisionId) ||
    optionalIdentifiers.some(
      (field) => value[field] !== undefined && !isIdentifier(value[field]),
    )
  ) {
    return null;
  }

  const originalRationale =
    value.originalRationale === undefined
      ? undefined
      : parseRationale(value.originalRationale);
  const revisedRationale =
    value.revisedRationale === undefined
      ? undefined
      : parseRationale(value.revisedRationale);

  if (
    (value.originalRationale !== undefined && !originalRationale) ||
    (value.revisedRationale !== undefined && !revisedRationale)
  ) {
    return null;
  }

  const review = parseReviewState(
    value.review,
    isBranchingSubject,
    isBranchingFeedback,
    recoverPending,
  );
  if (!review) return null;

  const entry: BranchingSimulationEntry = {
    activityType: "branching-simulation",
    interactionId: value.interactionId,
    simulationId: value.simulationId,
    simulationVersion: value.simulationVersion as number,
    completionState: value.completionState as BranchingSimulationEntry["completionState"],
    deterministicStateRevisionId: value.deterministicStateRevisionId,
    ...(value.firstDecisionId ? { firstDecisionId: value.firstDecisionId as string } : {}),
    ...(value.firstOptionId ? { firstOptionId: value.firstOptionId as string } : {}),
    ...(value.firstConsequenceId
      ? { firstConsequenceId: value.firstConsequenceId as string }
      : {}),
    ...(value.secondDecisionId
      ? { secondDecisionId: value.secondDecisionId as string }
      : {}),
    ...(value.secondOptionId
      ? { secondOptionId: value.secondOptionId as string }
      : {}),
    ...(value.pathwayId ? { pathwayId: value.pathwayId as string } : {}),
    ...(value.finalStateId ? { finalStateId: value.finalStateId as string } : {}),
    ...(originalRationale ? { originalRationale } : {}),
    ...(revisedRationale ? { revisedRationale } : {}),
    review,
  };

  if (!authority.isValidBranchingEntry(moduleSlug, entry)) return null;

  return {
    ...entry,
    review: subjectsMatchBranching(review, entry) ? review : { status: "stale" },
  };
}

function parseModuleEntry(
  value: unknown,
  moduleSlug: string,
  authority: ArtifactAuthority,
  recoverPending: boolean,
): ModuleArtifactEntry | null {
  if (!isRecord(value)) return null;

  if (value.activityType === "written-response") {
    return parseWrittenEntry(value, moduleSlug, authority, recoverPending);
  }

  if (value.activityType === "branching-simulation") {
    return parseBranchingEntry(value, moduleSlug, authority, recoverPending);
  }

  return null;
}

export function parseModuleArtifactRecord(
  value: unknown,
  authority: ArtifactAuthority,
  { recoverPending = true }: { recoverPending?: boolean } = {},
): ParsedRecord<ModuleArtifactRecord> {
  if (!isRecord(value)) return { ok: false, reason: "invalid" };
  if (value.schemaVersion !== MODULE_ARTIFACT_SCHEMA_VERSION) {
    return {
      ok: false,
      reason:
        typeof value.schemaVersion === "number" &&
        value.schemaVersion > MODULE_ARTIFACT_SCHEMA_VERSION
          ? "unsupported"
          : "invalid",
    };
  }
  if (
    value.domain !== "module-artifact" ||
    !isIdentifier(value.moduleSlug) ||
    !authority.isModuleSlug(value.moduleSlug) ||
    !isRecord(value.entries)
  ) {
    return { ok: false, reason: "invalid" };
  }

  const entries: Record<string, ModuleArtifactEntry> = {};
  const isolatedEntryIds: string[] = [];

  for (const [entryKey, entryValue] of Object.entries(value.entries)) {
    const entry = parseModuleEntry(
      entryValue,
      value.moduleSlug,
      authority,
      recoverPending,
    );
    if (!entry || entry.interactionId !== entryKey) {
      isolatedEntryIds.push(entryKey);
      continue;
    }
    entries[entryKey] = entry;
  }

  if (Object.keys(entries).length === 0 && isolatedEntryIds.length > 0) {
    return { ok: false, reason: "invalid" };
  }

  return {
    ok: true,
    value: {
      domain: "module-artifact",
      schemaVersion: MODULE_ARTIFACT_SCHEMA_VERSION,
      moduleSlug: value.moduleSlug,
      entries,
    },
    isolatedEntryIds,
  };
}

export function parseReflectionRecord(
  value: unknown,
  authority: ArtifactAuthority,
  { recoverPending = true }: { recoverPending?: boolean } = {},
): ParsedRecord<ReflectionRecord> {
  if (!isRecord(value)) return { ok: false, reason: "invalid" };
  if (value.schemaVersion !== REFLECTION_SCHEMA_VERSION) {
    return {
      ok: false,
      reason:
        typeof value.schemaVersion === "number" &&
        value.schemaVersion > REFLECTION_SCHEMA_VERSION
          ? "unsupported"
          : "invalid",
    };
  }
  if (
    value.domain !== "reflection" ||
    !isIdentifier(value.moduleSlug) ||
    !authority.isModuleSlug(value.moduleSlug) ||
    !isBoundedString(value.response, MAX_LEARNER_TEXT_LENGTH) ||
    !isIdentifier(value.responseRevisionId)
  ) {
    return { ok: false, reason: "invalid" };
  }

  const review = parseReviewState(
    value.review,
    isReflectionSubject,
    isReflectionFeedback,
    recoverPending,
  );
  if (!review) return { ok: false, reason: "invalid" };

  return {
    ok: true,
    value: {
      domain: "reflection",
      schemaVersion: REFLECTION_SCHEMA_VERSION,
      moduleSlug: value.moduleSlug,
      response: value.response,
      responseRevisionId: value.responseRevisionId,
      review: subjectsMatchReflection(review, value.responseRevisionId)
        ? review
        : { status: "stale" },
    },
    isolatedEntryIds: [],
  };
}

const artifactModuleSlugs = new Set(
  modules.filter((module) => module.type === "module").map((module) => module.slug),
);

export const repositoryArtifactAuthority: ArtifactAuthority = {
  isModuleSlug(value) {
    return artifactModuleSlugs.has(value);
  },
  isWrittenInteraction(moduleSlug, interactionId, contextId) {
    const interactions = SCENARIO_DECISIONS_BY_MODULE[moduleSlug] ?? [];
    return interactions.some(
      (interaction) =>
        interaction.id === interactionId && interaction.id === contextId,
    );
  },
  isValidBranchingEntry() {
    // Module 4's repository-authoritative branching catalog is owned by Section 7.
    return false;
  },
};

export function isValidLearnerText(value: string) {
  return isBoundedString(value, MAX_LEARNER_TEXT_LENGTH);
}

export function isValidWrittenFeedback(value: unknown): value is WrittenAIReviewFeedback {
  return isWrittenFeedback(value);
}

export function isValidBranchingFeedback(
  value: unknown,
): value is BranchingAIReviewFeedback {
  return isBranchingFeedback(value);
}

export function isValidReflectionFeedback(
  value: unknown,
): value is ReflectionAIReviewFeedback {
  return isReflectionFeedback(value);
}

export function validateBranchingEntry(
  moduleSlug: string,
  entry: BranchingSimulationEntry,
  authority: ArtifactAuthority,
) {
  return Boolean(parseBranchingEntry(entry, moduleSlug, authority, false));
}
