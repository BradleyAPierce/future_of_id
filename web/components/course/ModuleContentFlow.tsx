import type { ScenarioDecision } from "@/data/scenarioDecisions";
import { learningFrameworksById } from "@/data/learningFrameworks";
import type { ModuleContent, ModuleLayer } from "@/types/moduleContent";
import LandingFrameworkPanel from "@/components/landing/LandingFrameworkPanel";
import ModuleLayerRenderer, {
  type ModuleLayerKind,
} from "./ModuleLayerRenderer";
import ModuleOutcomesAccordion from "./ModuleOutcomesAccordion";
import ModuleReflectionSection from "./ModuleReflectionSection";

type ModuleContentFlowProps = {
  moduleContent: ModuleContent;
  moduleSlug: string;
  scenarioDecisions: ScenarioDecision[];
};

type OrderedModuleLayer = {
  kind: ModuleLayerKind;
  layer: ModuleLayer;
};

export default function ModuleContentFlow({
  moduleContent,
  moduleSlug,
  scenarioDecisions,
}: ModuleContentFlowProps) {
  const introFrameworkId = moduleContent.frameworks?.afterIntro;
  const introFramework = introFrameworkId
    ? learningFrameworksById[introFrameworkId]
    : undefined;

  const orderedLayers: OrderedModuleLayer[] = [
    { kind: "theory", layer: moduleContent.layers.theory },
    { kind: "experience", layer: moduleContent.layers.experience },
    { kind: "reverseBuild", layer: moduleContent.layers.reverseEngineering },
  ];

  return (
    <section className="space-y-12">
      {introFramework && <LandingFrameworkPanel framework={introFramework} />}

      <ModuleOutcomesAccordion outcomes={moduleContent.intro.outcomes} />

      {orderedLayers.map(({ kind, layer }) => (
        <ModuleLayerRenderer
          key={kind}
          kind={kind}
          layer={layer}
          moduleSlug={moduleSlug}
          frameworkId={
            kind === "experience"
              ? moduleContent.frameworks?.beforeDesignPractice
              : undefined
          }
          scenarioDecisions={scenarioDecisions}
        />
      ))}

      {moduleContent.reflection && (
        <ModuleReflectionSection
          moduleSlug={moduleSlug}
          reflection={moduleContent.reflection}
        />
      )}
    </section>
  );
}
