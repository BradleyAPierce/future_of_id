import type { LandingLearningLoopStep } from "@/content/landing";
import Badge from "@/components/ui/Badge";
import Surface from "@/components/ui/Surface";

type LearningLoopVisualProps = {
  steps: LandingLearningLoopStep[];
  className?: string;
};

export default function LearningLoopVisual({
  steps,
  className = "",
}: LearningLoopVisualProps) {
  const orderedSteps = [...steps].sort((a, b) => a.order - b.order);

  return (
    <Surface padding="lg" className={className}>
      <ol
        aria-label="Future of ID learning loop"
        className="grid gap-6 lg:grid-cols-4 lg:gap-5">
        {orderedSteps.map((step, index) => (
          <li
            key={step.label}
            className={`relative flex flex-col gap-4 rounded-[var(--radius-lg)] border p-4 ${
              step.meaning === "Reverse Build"
                ? "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_8%,var(--surface))] shadow-[var(--shadow-md)]"
                : "border-[var(--border)] bg-[var(--surface)]"
            }`}>
            {index < orderedSteps.length - 1 && (
              <div
                aria-hidden="true"
                className="absolute left-8 top-[4.25rem] h-[calc(100%-1.25rem)] w-px bg-[var(--primary)]/35 lg:left-auto lg:right-[-1.35rem] lg:top-8 lg:h-px lg:w-5"
              />
            )}

            <div className="relative z-10 flex items-center gap-3 lg:flex-col lg:items-start">
              <Badge tone="primary" className="shrink-0">
                {String(step.order).padStart(2, "0")}
              </Badge>
              <span className="text-sm font-semibold text-[var(--primary-hover)]">
                {step.meaning}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">
                {step.label}
              </h3>
              <p className="leading-7 text-[var(--muted)]">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Surface>
  );
}
