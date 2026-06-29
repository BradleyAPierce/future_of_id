import ProgressBar from "@/components/course/ProgressBar";
import Badge from "@/components/ui/Badge";
import Surface from "@/components/ui/Surface";
import DashboardStat from "./DashboardStat";

type LearningProgressPanelProps = {
  progress: number;
  completedCount: number;
  remainingCount: number;
  totalCount: number;
  className?: string;
};

export default function LearningProgressPanel({
  progress,
  completedCount,
  remainingCount,
  totalCount,
  className = "",
}: LearningProgressPanelProps) {
  return (
    <Surface padding="lg" className={`space-y-5 ${className}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            Course Progress
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">
            {Math.round(progress)}% complete
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            {completedCount} of {totalCount} course steps complete.
            {remainingCount > 0
              ? ` ${remainingCount} still to go.`
              : " You have completed the full course path."}
          </p>
        </div>

        <Badge tone={remainingCount === 0 ? "success" : "primary"}>
          {remainingCount === 0 ? "Complete" : `${remainingCount} remaining`}
        </Badge>
      </div>

      <ProgressBar progress={progress} />

      <div className="grid gap-3 sm:grid-cols-3">
        <DashboardStat value={completedCount} label="Completed" />
        <DashboardStat value={remainingCount} label="Remaining" />
        <DashboardStat value={totalCount} label="Total steps" />
      </div>
    </Surface>
  );
}
