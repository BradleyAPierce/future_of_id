"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import LessonIntro from "@/components/course/LessonIntro";
import ModuleContentFlow from "@/components/course/ModuleContentFlow";
import ModuleCompletionPanel from "@/components/course/ModuleCompletionPanel";
import BackToTopButton from "@/components/ui/BackToTopButton";
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

        <LessonIntro
          title={currentModule.title}
          description={currentModule.description}
          metadata={[
            currentModule.type === "orientation"
              ? "Orientation"
              : `Module ${currentModule.order}`,
            `Estimated time: ${currentModule.estimatedTime}`,
            ...(currentModule.practiceLabel ? [currentModule.practiceLabel] : []),
          ]}>
          {moduleContent.intro.overview}
        </LessonIntro>
      </section>

      <ModuleContentFlow
        moduleContent={moduleContent}
        moduleSlug={slug}
        scenarioDecisions={scenarioDecisions}
      />

      <ModuleCompletionPanel
        isCompleted={completed}
        onMarkComplete={() => markComplete(slug)}
        nextModule={nextModule}
        nextModuleHref={nextModule ? `/course/module/${nextModule.slug}` : undefined}
      />
      <BackToTopButton />
    </div>
  );
}
