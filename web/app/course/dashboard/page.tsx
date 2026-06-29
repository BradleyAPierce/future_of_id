"use client";

import { modules } from "@/data/modules";
import { useCourseProgress } from "@/lib/useCourseProgress";
import ProgressBar from "@/components/course/ProgressBar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PageBanner from "@/components/ui/PageBanner";
import SectionHeader from "@/components/ui/SectionHeader";
import Surface from "@/components/ui/Surface";
import { dashboardBanner } from "@/data/pageBanners";

export default function Dashboard() {
  const { completedModules } = useCourseProgress();
  const sortedModules = [...modules].sort((a, b) => a.order - b.order);

  const progress = (completedModules.length / modules.length) * 100;
  const completedCount = completedModules.length;
  const remainingCount = modules.length - completedCount;

  const nextModule = sortedModules.find((m) => !completedModules.includes(m.slug));
  const nextModuleHref = nextModule
    ? nextModule.slug === "orientation"
      ? "/course/orientation"
      : `/course/module/${nextModule.slug}`
    : "/course/dashboard";

  return (
    <div className="space-y-12 bg-[var(--bg)] text-[var(--text)]">
      <div className="space-y-6">
        <PageBanner
          imageUrl={dashboardBanner.imageUrl}
          title={dashboardBanner.title}
          subtitle={dashboardBanner.subtitle}
          pills={dashboardBanner.pills}
        />

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
          <Surface padding="lg" className="space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
                  Course Progress
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-[var(--text)]">
                  {Math.round(progress)}% complete
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {completedCount} of {modules.length} course steps complete.
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
              <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                <p className="text-2xl font-semibold text-[var(--text)]">
                  {completedCount}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">Completed</p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                <p className="text-2xl font-semibold text-[var(--text)]">
                  {remainingCount}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">Remaining</p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                <p className="text-2xl font-semibold text-[var(--text)]">
                  {modules.length}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">Total steps</p>
              </div>
            </div>
          </Surface>

          <Surface
            tone={nextModule ? "primary" : "success"}
            padding="lg"
            className="flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <Badge tone={nextModule ? "primary" : "success"}>
                {nextModule ? "Up Next" : "Course Complete"}
              </Badge>

              {nextModule ? (
                <>
                  <div>
                    <p className="text-sm font-medium text-[var(--muted)]">
                      {nextModule.type === "orientation"
                        ? "Orientation"
                        : `Module ${nextModule.order}`}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold leading-tight text-[var(--text)]">
                      {nextModule.title}
                    </h2>
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    {nextModule.description}
                  </p>

                  <p className="text-sm font-medium text-[var(--text)]">
                    Estimated time: {nextModule.estimatedTime}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold leading-tight text-[var(--text)]">
                    You have completed the course path.
                  </h2>
                  <p className="text-sm leading-relaxed text-[var(--muted)]">
                    Revisit any module below when you want to review a capability
                    or return to a practice activity.
                  </p>
                </>
              )}
            </div>

            {nextModule && (
              <Button href={nextModuleHref} className="w-fit">
                Continue Course
              </Button>
            )}
          </Surface>
        </section>
      </div>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Learning Path"
          title="Course Modules"
          description="Explore each topic through clear explanations, hands-on practice, real examples, and guided reflection using AI."
          variant="compact"
          action={
            <p className="text-sm text-[var(--muted)]">
              {sortedModules.length} guided steps
            </p>
          }
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedModules.map((module) => {
            const isCompleted = completedModules.includes(module.slug);
            const href =
              module.slug === "orientation"
                ? "/course/orientation"
                : `/course/module/${module.slug}`;
            const isUpNext = nextModule?.slug === module.slug;
            const statusTone = isCompleted
              ? "success"
              : isUpNext
                ? "primary"
                : "default";
            const statusLabel = isCompleted
              ? "Complete"
              : isUpNext
                ? "Up Next"
                : "Available";
            const ctaLabel = isCompleted
              ? "Review"
              : isUpNext
                ? "Continue"
                : module.type === "orientation"
                  ? "Start Orientation"
                  : "Start Module";

            return (
              <Card
                key={module.slug}
                className={`flex min-h-full flex-col ${
                  isUpNext
                    ? "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_7%,var(--surface))]"
                    : ""
                }`}>
                <div className="flex-1 space-y-5">
                  <div className="flex items-center justify-between gap-3">
                    <Badge tone="default">
                      {module.type === "orientation" ? "Orientation" : `Module ${module.order}`}
                    </Badge>

                    <Badge tone={statusTone}>{statusLabel}</Badge>
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
                    <Badge tone={module.practiceLabel ? "primary" : "default"}>
                      {module.estimatedTime}
                    </Badge>
                    {module.practiceLabel && (
                      <Badge tone="accent">{module.practiceLabel}</Badge>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    href={href}
                    variant={isUpNext ? "primary" : "secondary"}
                    className="w-full sm:w-fit">
                    {ctaLabel}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
