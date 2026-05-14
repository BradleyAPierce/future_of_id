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
    default: "border-[var(--border)] bg-[var(--surface)]",
    blue: "border-[var(--primary)] bg-[var(--surface)]",
    amber: "border-[var(--accent)] bg-[var(--surface)]",
  };

  const headerStyles = {
    default:
      "border-b-[var(--border)] bg-[linear-gradient(90deg,var(--surface-elevated),var(--surface))]",
    blue:
      "border-b-[var(--primary)] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--primary)_14%,var(--surface-elevated)),var(--surface))]",
    amber:
      "border-b-[var(--accent)] bg-[linear-gradient(90deg,color-mix(in_srgb,var(--accent)_16%,var(--surface-elevated)),var(--surface))]",
  };

  const bodyRailStyles = {
    default: "border-l-[var(--border)]",
    blue: "border-l-[var(--primary)]",
    amber: "border-l-[var(--accent)]",
  };

  const iconFrameStyles = {
    default: "border-[var(--border)] bg-[var(--surface)]",
    blue:
      "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)]",
    amber:
      "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]",
  };

  const badgeTone = {
    default: "default",
    blue: "primary",
    amber: "accent",
  } as const;

  return (
    <section
      className={`overflow-hidden rounded-[var(--radius-xl)] border shadow-[var(--shadow-md)] ${accentStyles[accent]}`}>
      <div className={`border-b p-5 sm:p-6 ${headerStyles[accent]}`}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${iconFrameStyles[accent]}`}>
            <SectionIcon accent={accent} />
          </span>

          <div className="min-w-0 space-y-3">
            {badge && <Badge tone={badgeTone[accent]}>{badge}</Badge>}
            <h3
              className={`font-semibold leading-tight text-[var(--text)] ${
                emphasis === "dominant" ? "text-2xl md:text-3xl" : "text-2xl"
              }`}>
              {title}
            </h3>
          </div>
        </div>
      </div>

      <div
        className={`border-l-4 p-5 leading-7 text-[var(--muted)] sm:p-6 ${
          emphasis === "dominant" ? "space-y-5" : "space-y-4"
        } ${bodyRailStyles[accent]}`}>
        {children}
      </div>
    </section>
  );
}
