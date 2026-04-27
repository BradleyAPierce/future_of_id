"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import LessonIntro from "@/components/course/LessonIntro";
import LessonSection from "@/components/course/LessonSection";
import BackToTopButton from "@/components/ui/BackToTopButton";
import { moduleContentBySlug } from "@/data/moduleContent";
import { modules } from "@/data/modules";
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
  const orderedLayers = [
    moduleContent.layers.theory,
    moduleContent.layers.experience,
    moduleContent.layers.reverseEngineering,
  ];

  const completed = isCompleted(slug);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        {/* badges */}
        <div className="flex flex-wrap gap-3">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gray-700/40 text-gray-300 border border-gray-600/40">
            Module {currentModule.order}
          </span>

          {currentModule.practiceLabel && (
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30">
              {currentModule.practiceLabel}
            </span>
          )}
        </div>

        {/* estimated time */}
        <p className="text-sm text-gray-500">
          Estimated time: {currentModule.estimatedTime}
        </p>

        {/* LESSON INTRO */}
        <LessonIntro
          title={currentModule.title}
          description={currentModule.description}>
          {moduleContent.intro.overview}
        </LessonIntro>
      </section>

      <section className="space-y-10">
        {moduleContent.intro.outcomes && (
          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">
              What You&#39;ll Be Able to Do
            </h3>

            <p className="text-gray-400 leading-relaxed">
              By the end of this module, you should be able to:
            </p>

            <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
              {moduleContent.intro.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}

        {orderedLayers.map((layer, index) => (
          <LessonSection
            key={layer.title}
            title={layer.title}
            badge={layer.badge}
            accent={
              index === 1 ? "blue" : index === 2 ? "amber" : "default"
            }>
            {layer.intro && <p>{layer.intro}</p>}

            {layer.sections.map((section) => (
              <div key={section.id} className="space-y-3">
                <h4 className="text-lg font-semibold text-white">
                  {section.title}
                </h4>

                {section.description && <p>{section.description}</p>}

                {section.items && section.items.length > 0 && (
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item.label}
                        className="rounded-lg border border-gray-700 p-4">
                        <p className="font-medium text-white">{item.label}</p>
                        {item.description && (
                          <p className="mt-1">{item.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </LessonSection>
        ))}

        {moduleContent.reflection && (
          <div className="border border-gray-700 rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-4">
              {moduleContent.reflection.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {moduleContent.reflection.prompt}
            </p>
          </div>
        )}
      </section>

      <section className="flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={() => markComplete(slug)}
          disabled={completed}
          className={`rounded-lg px-5 py-3 font-medium transition ${
            completed
              ? "bg-green-700 text-white cursor-default"
              : "bg-white text-black hover:bg-gray-200"
          }`}>
          {completed ? "✓ Module Completed" : "Mark Module Complete"}
        </button>

        {nextModule && (
          <Link
            href={`/course/module/${nextModule.slug}`}
            className="rounded-lg border border-gray-700 px-5 py-3 font-medium text-white hover:bg-gray-900 transition text-center">
            Next Module →
          </Link>
        )}

        <Link
          href="/course/dashboard"
          className="rounded-lg border border-gray-700 px-5 py-3 font-medium text-white hover:bg-gray-900 transition text-center">
          Back to Dashboard
        </Link>
      </section>
      <BackToTopButton />
    </div>
  );
}
