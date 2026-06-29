"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import ModuleContentFlow from "@/components/course/ModuleContentFlow";
import ModulePageHeader from "@/components/course/ModulePageHeader";
import ModuleCompletionPanel from "@/components/course/ModuleCompletionPanel";
import BackToTopButton from "@/components/ui/BackToTopButton";
import { moduleContentBySlug } from "@/content/modules";
import { modules } from "@/data/modules";
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
  const completed = isCompleted(slug);

  return (
    <div className="space-y-14">
      <ModulePageHeader module={currentModule} moduleContent={moduleContent} />

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
