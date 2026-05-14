"use client";

import { modules } from "@/data/modules";
import { useCourseProgress } from "@/lib/useCourseProgress";
import ProgressBar from "@/components/course/ProgressBar";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import PageBanner from "@/components/ui/PageBanner";
import { dashboardBanner } from "@/data/pageBanners";

export default function Dashboard() {
  const { completedModules } = useCourseProgress();
  const sortedModules = [...modules].sort((a, b) => a.order - b.order);

  const progress = (completedModules.length / modules.length) * 100;

  const nextModule = sortedModules.find((m) => !completedModules.includes(m.slug));

  return (
    <div className="space-y-14 bg-[var(--bg)] text-[var(--text)]">
      <div className="space-y-6">
        <PageBanner
          imageUrl={dashboardBanner.imageUrl}
          title={dashboardBanner.title}
          subtitle={dashboardBanner.subtitle}
          pills={dashboardBanner.pills}
        />

        <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-2 text-sm text-[var(--muted)]">Course Progress</p>
            <ProgressBar progress={progress} />
            <p className="mt-2 text-sm text-[var(--muted)]">
              {Math.round(progress)}% complete
            </p>
          </div>

          {nextModule && (
            <Button
              href={
                nextModule.slug === "orientation"
                  ? "/course/orientation"
                  : `/course/module/${nextModule.slug}`
              }>
              Continue
            </Button>
          )}
          </div>
        </section>
      </div>

      <section className="space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-[var(--text)]">
            Course Modules
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            Explore each topic through clear explanations, hands-on
            practice, real examples, and guided reflection using AI.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {sortedModules.map((module) => {
            const isCompleted = completedModules.includes(module.slug);
            const href =
              module.slug === "orientation"
                ? "/course/orientation"
                : `/course/module/${module.slug}`;

            return (
              <Card key={module.slug} className="flex min-h-full flex-col">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-medium text-[var(--muted)]">
                      {module.type === "orientation"
                        ? "Orientation"
                        : `Module ${module.order}`}
                    </p>
                    {isCompleted && (
                      <Badge tone="success">Complete</Badge>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">
                      {module.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                      {module.description}
                    </p>
                  </div>

                  <p className="text-sm text-[var(--muted)]">
                    Estimated time: {module.estimatedTime}
                  </p>
                </div>

                <div className="mt-6">
                  <Button href={href} variant={isCompleted ? "secondary" : "primary"}>
                    {isCompleted ? "Continue" : "Start Module"}
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
