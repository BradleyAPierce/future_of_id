import type { ModuleMetadata } from "@/data/modules";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export type ModuleCardStatus =
  | "available"
  | "upNext"
  | "complete"
  | "orientation";

type ModuleCardProps = {
  module: ModuleMetadata;
  status?: ModuleCardStatus;
  href?: string;
  ctaLabel?: string;
  practiceLabel?: string;
  estimatedTime?: string;
  className?: string;
};

type StatusBadge = {
  label: string;
  tone: "default" | "primary" | "success";
};

const statusBadge: Record<ModuleCardStatus, StatusBadge> = {
  available: { label: "Available", tone: "default" },
  upNext: { label: "Up Next", tone: "primary" },
  complete: { label: "Complete", tone: "success" },
  orientation: { label: "Available", tone: "default" },
};

function getCtaLabel(module: ModuleMetadata, status: ModuleCardStatus) {
  if (status === "complete") {
    return "Review";
  }

  if (status === "upNext") {
    return "Continue";
  }

  return module.type === "orientation" ? "Start Orientation" : "Start Module";
}

export default function ModuleCard({
  module,
  status = "available",
  href,
  ctaLabel,
  practiceLabel = module.practiceLabel,
  estimatedTime = module.estimatedTime,
  className = "",
}: ModuleCardProps) {
  const statusDisplay = statusBadge[status];
  const isUpNext = status === "upNext";
  const moduleLabel =
    module.type === "orientation" ? "Orientation" : `Module ${module.order}`;

  return (
    <Card
      className={`flex min-h-full flex-col ${
        isUpNext
          ? "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))]"
          : ""
      } ${className}`}>
      <div className="flex-1 space-y-5">
        <div className="flex items-center justify-between gap-3">
          <Badge tone="default">{moduleLabel}</Badge>
          <Badge tone={statusDisplay.tone}>{statusDisplay.label}</Badge>
        </div>

        <div>
          <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">
            {module.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            {module.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge tone={practiceLabel ? "primary" : "default"}>
            {estimatedTime}
          </Badge>
          {practiceLabel && <Badge tone="accent">{practiceLabel}</Badge>}
        </div>
      </div>

      {href && (
        <div className="mt-6">
          <Button
            href={href}
            variant={isUpNext ? "primary" : "secondary"}
            className="w-full sm:w-fit">
            {ctaLabel ?? getCtaLabel(module, status)}
          </Button>
        </div>
      )}
    </Card>
  );
}
