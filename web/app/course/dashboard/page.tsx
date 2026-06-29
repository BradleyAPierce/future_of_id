"use client";

import { modules } from "@/data/modules";
import { useCourseProgress } from "@/lib/useCourseProgress";
import ModuleCard from "@/components/course/ModuleCard";
import CurrentModuleWidget from "@/components/dashboard/CurrentModuleWidget";
import LearningProgressPanel from "@/components/dashboard/LearningProgressPanel";
import PageBanner from "@/components/ui/PageBanner";
import SectionHeader from "@/components/ui/SectionHeader";
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
          <LearningProgressPanel
            progress={progress}
            completedCount={completedCount}
            remainingCount={remainingCount}
            totalCount={modules.length}
          />

          <CurrentModuleWidget
            module={nextModule}
            status={nextModule ? "upNext" : "complete"}
            progress={progress}
            href={nextModule ? nextModuleHref : undefined}
            ctaLabel="Continue Course"
          />
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
            const status = isCompleted
              ? "complete"
              : isUpNext
                ? "upNext"
                : "available";

            return (
              <ModuleCard
                key={module.slug}
                module={module}
                status={status}
                href={href}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
