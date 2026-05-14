type ModuleOutcomesAccordionProps = {
  outcomes?: string[];
};

export default function ModuleOutcomesAccordion({
  outcomes,
}: ModuleOutcomesAccordionProps) {
  if (!outcomes) {
    return null;
  }

  return (
    <details className="group overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] border-l-[6px] border-l-[var(--success)] bg-[var(--surface)] shadow-[var(--shadow-sm)] open:border-[var(--success)]">
      <summary className="flex cursor-pointer list-none items-center gap-4 bg-[color-mix(in_srgb,var(--success)_8%,var(--surface))] p-5 transition hover:bg-[color-mix(in_srgb,var(--success)_12%,var(--surface))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] sm:p-6">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] text-lg font-semibold text-[var(--primary)] transition group-open:border-[var(--primary-hover)] group-open:text-[var(--primary-hover)]">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">−</span>
        </span>

        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2 text-2xl font-semibold text-[var(--text)]">
            <svg
              aria-hidden="true"
              className="h-6 w-6 text-[var(--success)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-5-9h2m6 0h2m-5-5v2m0 6v2"
              />
            </svg>
            <span>What You&#39;ll Be Able to Do</span>
          </span>
          <span className="mt-1 block text-sm font-medium text-[var(--muted)]">
            View outcomes
          </span>
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

      <div className="border-t border-[var(--border)] bg-[var(--surface)] px-5 pb-6 pt-5 sm:px-6">
        <p className="leading-relaxed text-[var(--muted)]">
          By the end of this module, you should be able to:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--muted)]">
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}
