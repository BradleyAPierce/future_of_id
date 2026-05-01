"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import LessonIntro from "@/components/course/LessonIntro";
import LessonSection from "@/components/course/LessonSection";
import ReflectionFeedbackAI from "@/components/course/ReflectionFeedbackAI";
import ScenarioDecisionAI from "@/components/course/ScenarioDecisionAI";
import BackToTopButton from "@/components/ui/BackToTopButton";
import { moduleContentBySlug } from "@/data/moduleContent";
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
  const orderedLayers = [
    moduleContent.layers.theory,
    moduleContent.layers.experience,
    moduleContent.layers.reverseEngineering,
  ];
  const scenarioDecisions = SCENARIO_DECISIONS_BY_MODULE[slug] ?? [];

  const completed = isCompleted(slug);

  return (
    <div className="space-y-14">
      <section className="space-y-4">
        {/* badges */}
        <div className="flex flex-wrap gap-3">
          <span className="inline-block rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--text)]">
            Module {currentModule.order}
          </span>

          {currentModule.practiceLabel && (
            <span className="inline-block rounded-full border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--primary)]">
              {currentModule.practiceLabel}
            </span>
          )}
        </div>

        {/* estimated time */}
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

      <section className="space-y-14">
        {moduleContent.intro.outcomes && (
          <details className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 open:border-[var(--primary)] open:bg-[var(--surface-elevated)]">
            <summary className="flex cursor-pointer list-none items-center gap-4 rounded-lg p-4 transition hover:bg-[var(--surface-elevated)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] text-lg font-semibold text-[var(--primary)] transition group-open:border-[var(--primary-hover)] group-open:text-[var(--primary-hover)]">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>

              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 text-2xl font-semibold text-[var(--text)]">
                  <svg
                    aria-hidden="true"
                    className="h-6 w-6 text-[var(--success)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-5-9h2m6 0h2m-5-5v2m0 6v2"
                    />
                  </svg>
                  <span>What You&#39;ll Be Able to Do</span>
                </span>
                <span className="mt-1 block text-sm font-medium text-[var(--muted)]">
                  View outcomes
                </span>
              </span>

              <svg
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </summary>

            <div className="px-4 pb-4 pt-2">
              <p className="leading-relaxed text-[var(--muted)]">
                By the end of this module, you should be able to:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--muted)]">
                {moduleContent.intro.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </details>
        )}

        {orderedLayers.map((layer, index) => (
          <LessonSection
            key={layer.title}
            title={layer.title}
            badge={layer.badge}
            accent={
              index === 1 ? "blue" : index === 2 ? "amber" : "default"
            }
            emphasis={index === 1 ? "dominant" : "default"}>
            {layer.intro && <p>{layer.intro}</p>}

            {index === 0 &&
              layer.sections.map((section) => (
                <details
                  key={section.id}
                  className="group rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] p-2 open:border-[var(--primary)] open:bg-[color-mix(in_srgb,var(--primary)_8%,var(--surface-elevated))]">
                  <summary className="flex cursor-pointer list-none items-center gap-3 rounded-md p-3 transition hover:bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] text-base font-semibold text-[var(--primary)] transition group-open:border-[var(--primary-hover)] group-open:text-[var(--primary-hover)]">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>

                    <span className="flex-1 text-lg font-semibold text-[var(--text)]">
                      {section.title}
                    </span>

                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 shrink-0 text-[var(--muted)] transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>

                  <div className="px-3 pb-3 pt-2 space-y-3">
                    {section.description && <p>{section.description}</p>}

                    {section.items && section.items.length > 0 && (
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li
                            key={item.label}
                            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                            <p className="font-medium text-[var(--text)]">
                              {item.label}
                            </p>
                            {item.description && (
                              <p className="mt-1">{item.description}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              ))}

            {index === 1 &&
              layer.sections.map((section) => (
                <div key={section.id} className="space-y-3 rounded-lg border border-[var(--primary)] bg-[var(--surface-elevated)] p-5">
                  <h4 className="text-lg font-semibold text-[var(--text)]">
                    {section.title}
                  </h4>

                  {section.description && <p>{section.description}</p>}

                  {section.items && section.items.length > 0 && (
                    <ul className="space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item.label}
                          className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                          <p className="font-medium text-[var(--text)]">
                            {item.label}
                          </p>
                          {item.description && (
                            <p className="mt-1">{item.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            {index === 2 && (
              <div className="grid gap-4 md:grid-cols-2">
                {layer.sections.map((section) => (
                  <div
                    key={section.id}
                    className="space-y-3 rounded-lg border border-[var(--accent)] bg-[var(--surface-elevated)] p-5">
                    <h4 className="text-lg font-semibold text-[var(--text)]">
                      {section.title}
                    </h4>

                    {section.description && <p>{section.description}</p>}

                    {section.items && section.items.length > 0 && (
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li
                            key={item.label}
                            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                            <p className="font-medium text-[var(--text)]">
                              {item.label}
                            </p>
                            {item.description && (
                              <p className="mt-1">{item.description}</p>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}

            {scenarioDecisions.length > 0 && index === 1 && (
              <ScenarioDecisionAI
                moduleSlug={slug}
                scenarios={scenarioDecisions}
              />
            )}
          </LessonSection>
        ))}

        {moduleContent.reflection && (
          <div className="rounded-xl border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface-elevated))] p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-[var(--accent)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L9.75 16.902 6 18l1.098-3.75L16.862 4.487ZM19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
                  />
                </svg>
              </span>
              <h3 className="text-2xl font-semibold text-[var(--text)]">
                {moduleContent.reflection.title}
              </h3>
            </div>

            <p className="leading-relaxed text-[var(--muted)]">
              {moduleContent.reflection.prompt}
            </p>

            <ReflectionFeedbackAI moduleSlug={slug} />
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
               ? "cursor-default bg-[var(--success)] text-[var(--bg)]"
               : "bg-[var(--primary)] text-[var(--bg)] hover:bg-[var(--primary-hover)]"
          }`}>
          {completed ? "✓ Module Completed" : "Mark Module Complete"}
        </button>

        {nextModule && (
          <Link
            href={`/course/module/${nextModule.slug}`}
            className="rounded-lg border border-[var(--border)] px-5 py-3 text-center font-medium text-[var(--text)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-elevated)]">
            Next Module →
          </Link>
        )}

        <Link
          href="/course/dashboard"
          className="rounded-lg border border-[var(--border)] px-5 py-3 text-center font-medium text-[var(--text)] transition hover:border-[var(--primary)] hover:bg-[var(--surface-elevated)]">
          Back to Dashboard
        </Link>
      </section>
      <BackToTopButton />
    </div>
  );
}
