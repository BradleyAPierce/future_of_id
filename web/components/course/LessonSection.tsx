import { ReactNode } from "react";
import Badge from "@/components/ui/Badge";

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
    blue: "border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))]",
    amber: "border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_7%,var(--surface))]",
  };

  const badgeTone = {
    default: "default",
    blue: "primary",
    amber: "accent",
  } as const;

  return (
    <div
      className={`rounded-[var(--radius-xl)] ${
        emphasis === "dominant" ? "p-7 shadow-[var(--shadow-md)]" : "p-6 shadow-[var(--shadow-sm)]"
      } ${accentStyles[accent]}`}>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-elevated)]">
          <SectionIcon accent={accent} />
        </span>

        <div className="min-w-0 space-y-2">
          {badge && <Badge tone={badgeTone[accent]}>{badge}</Badge>}
          <h3
            className={`font-semibold leading-tight text-[var(--text)] ${
              emphasis === "dominant" ? "text-2xl md:text-3xl" : "text-2xl"
            }`}>
            {title}
          </h3>
        </div>
      </div>

      <div
        className={`leading-7 text-[var(--muted)] ${
          emphasis === "dominant" ? "space-y-5" : "space-y-4"
        }`}>
        {children}
      </div>
    </div>
  );
}
