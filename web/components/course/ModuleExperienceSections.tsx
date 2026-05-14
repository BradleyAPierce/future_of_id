import type { ModuleLayerSection } from "@/types/moduleContent";
import Surface from "@/components/ui/Surface";
import ModuleSectionItems from "./ModuleSectionItems";

type ModuleExperienceSectionsProps = {
  sections: ModuleLayerSection[];
};

export default function ModuleExperienceSections({
  sections,
}: ModuleExperienceSectionsProps) {
  return (
    <>
      {sections.map((section) => (
        <Surface
          key={section.id}
          tone="elevated"
          padding="md"
          className="space-y-4 rounded-[var(--radius-lg)] border-l-4 border-l-[var(--primary)] shadow-none">
          <h4 className="text-lg font-semibold text-[var(--text)]">
            {section.title}
          </h4>

          {section.description && (
            <p className="leading-7 text-[var(--muted)]">{section.description}</p>
          )}

          <ModuleSectionItems items={section.items} />
        </Surface>
      ))}
    </>
  );
}
