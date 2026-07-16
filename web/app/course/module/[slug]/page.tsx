"use client";

import { notFound } from "next/navigation";
import { use, useState } from "react";
import ModuleContentFlow from "@/components/course/ModuleContentFlow";
import ModulePageHeader from "@/components/course/ModulePageHeader";
import ModuleCompletionPanel from "@/components/course/ModuleCompletionPanel";
import BackToTopButton from "@/components/ui/BackToTopButton";
import { moduleContentBySlug } from "@/content/modules";
import { modules } from "@/data/modules";
import { SCENARIO_DECISIONS_BY_MODULE } from "@/data/scenarioDecisions";
import { useCourseProgress } from "@/lib/useCourseProgress";

interface ModulePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ModulePage({ params }: ModulePageProps) {
  const { slug } = use(params);
  const { markComplete, isCompleted, persistence } = useCourseProgress();
  const [completionMessage, setCompletionMessage] = useState<{
    tone: "status" | "error";
    text: string;
  } | null>(null);

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

  function handleMarkComplete() {
    const result = markComplete(slug);
    if (result.ok) {
      setCompletionMessage(null);
      return;
    }

    setCompletionMessage(
      result.sessionValue
        ? {
            tone: "status",
            text: "Completion is available for this session, but it could not be saved in this browser. You can keep using the course and try again.",
          }
        : {
            tone: "error",
            text: "Completion could not be saved in this browser. Your course remains available. Please try again, or reset unreadable completion progress from the Capability Map.",
          },
    );
  }

  return (
    <div className="space-y-14">
      <ModulePageHeader module={currentModule} moduleContent={moduleContent} />

      <ModuleContentFlow
        moduleContent={moduleContent}
        moduleSlug={slug}
        scenarioDecisions={scenarioDecisions}
      />

      <div className="space-y-3">
        <ModuleCompletionPanel
          isCompleted={completed && persistence !== "session-only"}
          onMarkComplete={handleMarkComplete}
          nextModule={nextModule}
          nextModuleHref={nextModule ? `/course/module/${nextModule.slug}` : undefined}
        />
        {completionMessage && (
          <p
            role={completionMessage.tone === "error" ? "alert" : "status"}
            className={`text-sm font-medium ${
              completionMessage.tone === "error"
                ? "text-[var(--danger)]"
                : "text-[var(--muted)]"
            }`}>
            {completionMessage.text}
          </p>
        )}
      </div>
      <BackToTopButton />
    </div>
  );
}
