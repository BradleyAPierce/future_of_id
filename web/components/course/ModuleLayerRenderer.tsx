import type { ScenarioDecision } from "@/data/scenarioDecisions";
import type { ModuleLayer } from "@/types/moduleContent";
import LessonSection from "./LessonSection";
import ModuleExperienceSections from "./ModuleExperienceSections";
import ModuleSectionAccordion from "./ModuleSectionAccordion";
import ReverseBuildModalCards from "./ReverseBuildModalCards";
import ScenarioDecisionAI from "./ScenarioDecisionAI";

export type ModuleLayerKind = "theory" | "experience" | "reverseBuild";

type ModuleLayerRendererProps = {
  kind: ModuleLayerKind;
  layer: ModuleLayer;
  moduleSlug: string;
  scenarioDecisions: ScenarioDecision[];
};

const layerDisplayByKind = {
  theory: {
    accent: "default",
    emphasis: "default",
  },
  experience: {
    accent: "blue",
    emphasis: "dominant",
  },
  reverseBuild: {
    accent: "amber",
    emphasis: "default",
  },
} as const;

export default function ModuleLayerRenderer({
  kind,
  layer,
  moduleSlug,
  scenarioDecisions,
}: ModuleLayerRendererProps) {
  const display = layerDisplayByKind[kind];

  return (
    <LessonSection
      title={layer.title}
      badge={layer.badge}
      accent={display.accent}
      emphasis={display.emphasis}>
      {kind !== "reverseBuild" && layer.intro && <p>{layer.intro}</p>}

      {kind === "theory" &&
        layer.sections.map((section) => (
          <ModuleSectionAccordion key={section.id} section={section} />
        ))}

      {kind === "experience" && (
        <>
          <ModuleExperienceSections sections={layer.sections} />

          {scenarioDecisions.length > 0 && (
            <ScenarioDecisionAI
              moduleSlug={moduleSlug}
              scenarios={scenarioDecisions}
            />
          )}
        </>
      )}

      {kind === "reverseBuild" && (
        <ReverseBuildModalCards intro={layer.intro} sections={layer.sections} />
      )}
    </LessonSection>
  );
}
