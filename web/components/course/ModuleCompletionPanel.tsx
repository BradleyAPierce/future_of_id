import type { ModuleMetadata } from "@/data/modules";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";

type ModuleCompletionPanelProps = {
  isCompleted: boolean;
  onMarkComplete: () => void;
  nextModule?: ModuleMetadata;
  nextModuleHref?: string;
  dashboardHref?: string;
  className?: string;
};

export default function ModuleCompletionPanel({
  isCompleted,
  onMarkComplete,
  nextModule,
  nextModuleHref,
  dashboardHref = "/course/dashboard",
  className = "",
}: ModuleCompletionPanelProps) {
  return (
    <Surface
      padding="md"
      className={`rounded-[var(--radius-xl)] border-t-4 border-t-[var(--primary)] ${className}`}>
      <section className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          type="button"
          onClick={onMarkComplete}
          disabled={isCompleted}
          variant={isCompleted ? "secondary" : "primary"}>
          {isCompleted ? "✓ Module Completed" : "Mark Module Complete"}
        </Button>

        {nextModule && nextModuleHref && (
          <Button href={nextModuleHref} variant="secondary">
            Next Module →
          </Button>
        )}

        <Button href={dashboardHref} variant="secondary">
          Back to Dashboard
        </Button>
      </section>
    </Surface>
  );
}
