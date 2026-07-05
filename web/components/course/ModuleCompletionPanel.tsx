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
      <div className="mb-4 space-y-1">
        <p className="text-lg font-semibold text-[var(--text)]">
          Choose what you are curious about next.
        </p>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          Follow the next capability or return to the Capability Map. Learners
          may begin anywhere; there is no required sequence.
        </p>
      </div>

      <section className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          type="button"
          onClick={onMarkComplete}
          disabled={isCompleted}
          variant={isCompleted ? "secondary" : "primary"}>
          {isCompleted ? "✓ Complete" : "Mark Complete"}
        </Button>

        {nextModule && nextModuleHref && (
          <Button href={nextModuleHref} variant="secondary">
            Explore Next Capability →
          </Button>
        )}

        <Button href={dashboardHref} variant="secondary">
          Return to Capability Map
        </Button>
      </section>
    </Surface>
  );
}
