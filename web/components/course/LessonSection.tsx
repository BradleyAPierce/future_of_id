import { ReactNode } from "react";

interface LessonSectionProps {
  title: string;
  children: ReactNode;
  accent?: "default" | "blue" | "amber";
  badge?: string;
  emphasis?: "default" | "dominant";
}

function SectionIcon({ accent }: { accent: "default" | "blue" | "amber" }) {
  const iconColor = accent === "amber" ? "text-[var(--accent)]" : "text-[var(--primary)]";

  if (accent === "blue") {
    return (
      <svg
        aria-hidden="true"
        className={`h-6 w-6 ${iconColor}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 19 19 5m0 0h-6m6 0v6M7 7h4v4H7V7Zm6 6h4v4h-4v-4Z"
        />
      </svg>
    );
  }

  if (accent === "amber") {
    return (
      <svg
        aria-hidden="true"
        className={`h-6 w-6 ${iconColor}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.8">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15.5 15.5 4 4M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13Zm-2-7h4m-2-2v4"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={`h-6 w-6 ${iconColor}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15H6.5A2.5 2.5 0 0 1 4 16.5v-10Zm0 10A2.5 2.5 0 0 1 6.5 14H20M8 8h7"
      />
    </svg>
  );
}

export default function LessonSection({
  title,
  children,
  accent = "default",
  badge,
  emphasis = "default",
}: LessonSectionProps) {
  const accentStyles = {
    default: "border border-[var(--border)] bg-[var(--surface)]",
    blue: "border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_10%,var(--surface))]",
    amber: "border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))]",
  };

  const badgeStyles = {
    default: "bg-[var(--surface-elevated)] text-[var(--text)] border border-[var(--border)]",
    blue: "bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)] border border-[var(--primary)]",
    amber: "bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent)] border border-[var(--accent)]",
  };

  return (
    <div
      className={`rounded-xl ${
        emphasis === "dominant" ? "p-8 shadow-md" : "p-6"
      } ${accentStyles[accent]}`}>
      {badge && (
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles[accent]}`}>
            {badge}
          </span>
        </div>
      )}

      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
          <SectionIcon accent={accent} />
        </span>
        <h3
          className={`font-semibold text-[var(--text)] ${
            emphasis === "dominant" ? "text-3xl" : "text-2xl"
          }`}>
          {title}
        </h3>
      </div>

      <div
        className={`leading-relaxed text-[var(--muted)] ${
          emphasis === "dominant" ? "space-y-6" : "space-y-4"
        }`}>
        {children}
      </div>
    </div>
  );
}
