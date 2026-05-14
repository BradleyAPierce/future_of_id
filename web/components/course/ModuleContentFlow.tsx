import type { ScenarioDecision } from "@/lib/ai/scenarioFeedback";
import type { ModuleContent, ModuleLayer } from "@/types/moduleContent";
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
  const orderedLayers: OrderedModuleLayer[] = [
    { kind: "theory", layer: moduleContent.layers.theory },
    { kind: "experience", layer: moduleContent.layers.experience },
    { kind: "reverseBuild", layer: moduleContent.layers.reverseEngineering },
  ];

  return (
    <section className="space-y-14">
      <ModuleOutcomesAccordion outcomes={moduleContent.intro.outcomes} />

      {orderedLayers.map(({ kind, layer }) => (
        <ModuleLayerRenderer
          key={kind}
          kind={kind}
          layer={layer}
          moduleSlug={moduleSlug}
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
