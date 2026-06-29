import type { ModuleMetadata } from "@/data/modules";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";

export type CurrentModuleStatus = "upNext" | "inProgress" | "complete";

type CurrentModuleWidgetProps = {
  module?: ModuleMetadata;
  status: CurrentModuleStatus;
  progress?: number;
  ctaLabel?: string;
  href?: string;
  className?: string;
};

const statusBadge: Record<
  CurrentModuleStatus,
  { label: string; tone: "primary" | "success" }
> = {
  upNext: { label: "Up Next", tone: "primary" },
  inProgress: { label: "In Progress", tone: "primary" },
  complete: { label: "Course Complete", tone: "success" },
};

export default function CurrentModuleWidget({
  module,
  status,
  progress,
  ctaLabel = "Continue Course",
  href,
  className = "",
}: CurrentModuleWidgetProps) {
  const isComplete = status === "complete";
  const badge = statusBadge[status];
  const moduleLabel = module
    ? module.type === "orientation"
      ? "Orientation"
      : `Module ${module.order}`
    : undefined;

  return (
    <Surface
      tone={isComplete ? "success" : "primary"}
      padding="lg"
      className={`flex flex-col justify-between gap-6 ${className}`}>
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={badge.tone}>{badge.label}</Badge>
          {module?.practiceLabel && (
            <Badge tone="accent">{module.practiceLabel}</Badge>
          )}
        </div>

        {module ? (
          <>
            <div>
              <p className="text-sm font-medium text-[var(--muted)]">
                {moduleLabel}
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-[var(--text)]">
                {module.title}
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-[var(--muted)]">
              {module.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge tone="default">Estimated time: {module.estimatedTime}</Badge>
              {typeof progress === "number" && (
                <Badge tone={isComplete ? "success" : "primary"}>
                  {Math.round(progress)}% complete
                </Badge>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold leading-tight text-[var(--text)]">
              You have completed the course path.
            </h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Revisit any module below when you want to review a capability or
              return to a practice activity.
            </p>

            {typeof progress === "number" && (
              <Card className="shadow-none">
                <p className="text-sm font-medium text-[var(--muted)]">
                  Course Progress
                </p>
                <p className="mt-1 text-2xl font-semibold text-[var(--text)]">
                  {Math.round(progress)}% complete
                </p>
              </Card>
            )}
          </>
        )}
      </div>

      {module && href && (
        <Button href={href} className="w-fit">
          {ctaLabel}
        </Button>
      )}
    </Surface>
  );
}
