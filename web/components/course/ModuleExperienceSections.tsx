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
    <div className="grid gap-4">
      {sections.map((section) => (
        <Surface
          key={section.id}
          tone="primary"
          padding="lg"
          className="space-y-4 rounded-[var(--radius-xl)] border-l-[6px] border-l-[var(--primary)] shadow-[var(--shadow-sm)]">
          <h4 className="text-xl font-semibold leading-tight text-[var(--text)]">
            {section.title}
          </h4>

          {section.description && (
            <p className="leading-7 text-[var(--muted)]">{section.description}</p>
          )}

          <ModuleSectionItems items={section.items} />
        </Surface>
      ))}
    </div>
  );
}
