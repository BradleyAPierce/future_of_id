import type { ModuleLayerSection } from "@/types/moduleContent";
import ModuleSectionItems from "./ModuleSectionItems";

type ModuleSectionAccordionProps = {
  section: ModuleLayerSection;
};

export default function ModuleSectionAccordion({
  section,
}: ModuleSectionAccordionProps) {
  return (
    <details className="group rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] p-2 open:border-[var(--primary)] open:bg-[color-mix(in_srgb,var(--primary)_8%,var(--surface-elevated))]">
      <summary className="flex cursor-pointer list-none items-center gap-3 rounded-md p-3 transition hover:bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] text-base font-semibold text-[var(--primary)] transition group-open:border-[var(--primary-hover)] group-open:text-[var(--primary-hover)]">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>

        <span className="flex-1 text-lg font-semibold text-[var(--text)]">
          {section.title}
        </span>

        <svg
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div className="px-3 pb-3 pt-2 space-y-3">
        {section.description && <p>{section.description}</p>}

        <ModuleSectionItems items={section.items} />
      </div>
    </details>
  );
}
