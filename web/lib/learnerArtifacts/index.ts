import { createBrowserStorage } from "@/lib/persistence/browserStorage";
import { createBrowserStoreEvents } from "@/lib/persistence/storageEvents";
import { createModuleArtifactStore } from "./moduleArtifactStore";
import { createRevisionIdentity } from "./revisionIdentity";
import { repositoryArtifactAuthority } from "./validation";

export const moduleArtifactStore = createModuleArtifactStore({
  storage: createBrowserStorage(),
  events: createBrowserStoreEvents(),
  authority: repositoryArtifactAuthority,
  createRevisionId: createRevisionIdentity,
});

export { createModuleArtifactStore } from "./moduleArtifactStore";
export type {
  BranchingReviewInput,
  ModuleArtifactStore,
  SaveBranchingEntryInput,
  SaveBranchingFeedbackInput,
  SaveWrittenFeedbackInput,
  SaveWrittenResponseInput,
  WrittenReviewInput,
} from "./moduleArtifactStore";
export type {
  AIReviewState,
  BranchingAIReviewFeedback,
  BranchingReviewSubject,
  BranchingSimulationEntry,
  DomainSnapshot,
  ModuleArtifactEntry,
  ModuleArtifactRecord,
  PersistenceOperationResult,
  SimulationCompletionState,
  WrittenAIReviewFeedback,
  WrittenResponseEntry,
  WrittenReviewSubject,
} from "./types";
