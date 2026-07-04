import type { LandingCard } from "@/content/landing";

type LandingAccordionProps = {
  items: LandingCard[];
};

export default function LandingAccordion({ items }: LandingAccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.title}
          className="group overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] open:border-[var(--primary)]">
          <summary className="flex cursor-pointer list-none items-center gap-4 p-4 transition hover:bg-[var(--surface-elevated)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] sm:p-5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)] text-sm font-semibold text-[var(--text)] transition group-open:border-[var(--primary)] group-open:text-[var(--primary)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-base font-semibold leading-snug text-[var(--text)] sm:text-lg">
                {item.title}
              </span>
              <span className="mt-1 block text-sm font-medium text-[var(--muted)]">
                <span className="group-open:hidden">View clarification</span>
                <span className="hidden group-open:inline">Hide clarification</span>
              </span>
            </span>

            <svg
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m6 9 6 6 6-6"
              />
            </svg>
          </summary>

          <div className="border-t border-[var(--border)] bg-[var(--surface-elevated)] px-4 pb-5 pt-4 sm:px-5">
            <p className="leading-7 text-[var(--muted)]">{item.description}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
