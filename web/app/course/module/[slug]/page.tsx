"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import LessonIntro from "@/components/course/LessonIntro";
import ModuleContentFlow from "@/components/course/ModuleContentFlow";
import BackToTopButton from "@/components/ui/BackToTopButton";
import Button from "@/components/ui/Button";
import PageBanner from "@/components/ui/PageBanner";
import { moduleContentBySlug } from "@/content/modules";
import { modules } from "@/data/modules";
import { DEFAULT_BANNER_IMAGE, moduleBannersBySlug } from "@/data/pageBanners";
import { SCENARIO_DECISIONS_BY_MODULE } from "@/lib/ai/scenarioFeedback";
import { useCourseProgress } from "@/lib/useCourseProgress";

interface ModulePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ModulePage({ params }: ModulePageProps) {
  const { slug } = use(params);
  const { markComplete, isCompleted } = useCourseProgress();

  const currentModule = modules.find((m) => m.slug === slug);
  const moduleContent = moduleContentBySlug[slug];

  if (!currentModule || !moduleContent) {
    notFound();
  }

  const sortedModules = [...modules].sort((a, b) => a.order - b.order);
  const currentIndex = sortedModules.findIndex((m) => m.slug === slug);
  const nextModule = sortedModules[currentIndex + 1];
  const scenarioDecisions = SCENARIO_DECISIONS_BY_MODULE[slug] ?? [];
  const moduleBanner = moduleBannersBySlug[slug] ?? {
    title: currentModule.title,
    subtitle: currentModule.description,
    imageUrl: DEFAULT_BANNER_IMAGE,
    pills: [
      `Module ${currentModule.order}`,
      ...(currentModule.practiceLabel ? [currentModule.practiceLabel] : []),
    ],
  };

  const completed = isCompleted(slug);

  return (
    <div className="space-y-14">
      <section className="space-y-4">
        <PageBanner
          imageUrl={moduleBanner.imageUrl}
          title={moduleBanner.title}
          subtitle={moduleBanner.subtitle}
          pills={moduleBanner.pills}
        />

        <p className="text-sm text-[var(--muted)]">
          Estimated time: {currentModule.estimatedTime}
        </p>

        {/* LESSON INTRO */}
        <LessonIntro
          title={currentModule.title}
          description={currentModule.description}>
          {moduleContent.intro.overview}
        </LessonIntro>
      </section>

      <ModuleContentFlow
        moduleContent={moduleContent}
        moduleSlug={slug}
        scenarioDecisions={scenarioDecisions}
      />

      <section className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          type="button"
          onClick={() => markComplete(slug)}
          disabled={completed}
          variant={completed ? "secondary" : "primary"}>
          {completed ? "✓ Module Completed" : "Mark Module Complete"}
        </Button>

        {nextModule && (
          <Button
            href={`/course/module/${nextModule.slug}`}
            variant="secondary">
            Next Module →
          </Button>
        )}

        <Button
          href="/course/dashboard"
          variant="secondary">
          Back to Dashboard
        </Button>
      </section>
      <BackToTopButton />
    </div>
  );
}
