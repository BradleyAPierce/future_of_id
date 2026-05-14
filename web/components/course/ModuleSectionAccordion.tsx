import type { ModuleLayerSection } from "@/types/moduleContent";
import ModuleSectionItems from "./ModuleSectionItems";

type ModuleSectionAccordionProps = {
  section: ModuleLayerSection;
};

export default function ModuleSectionAccordion({
  section,
}: ModuleSectionAccordionProps) {
  return (
    <details className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] open:border-[var(--primary)]">
      <summary className="flex cursor-pointer list-none items-center gap-3 p-4 transition hover:bg-[var(--surface-elevated)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] sm:p-5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] text-base font-semibold text-[var(--primary)] transition group-open:border-[var(--primary-hover)] group-open:text-[var(--primary-hover)]">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>

        <span className="flex-1 text-base font-semibold leading-snug text-[var(--text)] sm:text-lg">
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

      <div className="space-y-4 border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 pb-5 pt-4 sm:px-5">
        {section.description && (
          <p className="leading-7 text-[var(--muted)]">{section.description}</p>
        )}

        <ModuleSectionItems items={section.items} />
      </div>
    </details>
  );
}
