import type { ModuleContent } from "@/types/moduleContent";
import { aiLiteracyContent } from "./ai-literacy";
import { performanceConsultingContent } from "./performance-consulting";
import { learningAnalyticsContent } from "./learning-analytics";
import { simulationDesignContent } from "./simulation-design";
import { adaptiveLearningContent } from "./adaptive-learning";
import { contentSystemsContent } from "./content-systems";
import { humanCenteredChangeContent } from "./human-centered-change";

export const moduleContentBySlug: Record<string, ModuleContent> = {
  "ai-literacy": aiLiteracyContent,
  "performance-consulting": performanceConsultingContent,
  "learning-analytics": learningAnalyticsContent,
  "simulation-design": simulationDesignContent,
  "adaptive-learning": adaptiveLearningContent,
  "content-systems": contentSystemsContent,
  "human-centered-change": humanCenteredChangeContent,
};

export type { ModuleContent, ModuleLayer, ModuleLayerSection } from "@/types/moduleContent";
