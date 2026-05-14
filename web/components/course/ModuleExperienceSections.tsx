import type { ModuleLayerSection } from "@/types/moduleContent";
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
        <div
          key={section.id}
          className="space-y-3 rounded-lg border border-[var(--primary)] bg-[var(--surface-elevated)] p-5">
          <h4 className="text-lg font-semibold text-[var(--text)]">
            {section.title}
          </h4>

          {section.description && <p>{section.description}</p>}

          <ModuleSectionItems items={section.items} />
        </div>
      ))}
    </>
  );
}
