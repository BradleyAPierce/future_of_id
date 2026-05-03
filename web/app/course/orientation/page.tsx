"use client";

import Link from "next/link";
import { useCourseProgress } from "@/lib/useCourseProgress";
import PageBanner from "@/components/ui/PageBanner";
import { orientationBanner } from "@/data/pageBanners";

export default function OrientationPage() {
  const { markComplete, isCompleted } = useCourseProgress();
  const completed = isCompleted("orientation");

  const capabilities = [
    "AI Literacy and Agent-Enabled Learning Design",
    "Performance Consulting and Business Alignment",
    "Learning Analytics and Evidence-Based Design",
    "Scenario, Simulation, and Conversation Design",
    "Adaptive and Personalized Learning Architecture",
    "Content Systems Thinking and Workflow Automation",
    "Human-Centered Change, Ethics, and Trust",
  ];

  const experienceSteps = [
    {
      title: "Start with a capability",
      description:
        "Each module focuses on one capability you can apply in your instructional design work.",
    },
    {
      title: "Connect ideas to practice",
      description:
        "Each module includes examples and practical approaches you can use in your work.",
    },
    {
      title: "Choose your path",
      description:
        "You can follow the modules in order or focus on the capabilities most relevant to your role.",
    },
    {
      title: "Practice with AI support",
      description:
        "You’ll use interactive exercises, simulations, and AI-supported tools to practice each capability.",
    },
  ];

  return (
    <div className="space-y-14 text-[var(--text)]">
      <PageBanner
        imageUrl={orientationBanner.imageUrl}
        title={orientationBanner.title}
        subtitle={orientationBanner.subtitle}
        pills={orientationBanner.pills}
      />

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-[var(--text)]">
          <svg
            aria-hidden="true"
            className="h-6 w-6 text-[var(--primary)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6.5A2.5 2.5 0 0 1 6.5 4H20v15H6.5A2.5 2.5 0 0 1 4 16.5v-10Zm0 10A2.5 2.5 0 0 1 6.5 14H20M8 8h7"
            />
          </svg>
          <span>What this is</span>
        </h2>
        <ul className="mt-5 space-y-3 text-[var(--muted)]">
          <li>
            • This course focuses on the core capabilities instructional
            designers need to design, build, and improve learning today.
          </li>
          <li>
            • You’ll move beyond course production and learn how to design
            learning that supports real job performance.
          </li>
          <li>
            • You’ll learn how to start using AI and automation tools while
            maintaining strong instructional design judgment.
          </li>
        </ul>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-semibold text-[var(--text)]">
            <svg
              aria-hidden="true"
              className="h-6 w-6 text-[var(--primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 7h14M5 12h14M5 17h14M3.5 7h.01M3.5 12h.01M3.5 17h.01"
              />
            </svg>
            <span>How this works</span>
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            Each module shows you how to apply ideas directly to your
            instructional design work.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {experienceSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] text-sm font-semibold text-[var(--primary)]">
                  {index + 1}
                </span>
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 leading-relaxed text-[var(--muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-semibold text-[var(--text)]">
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
                d="M4 7h7v7H4V7Zm9 0h7v7h-7V7ZM4 16h7v3H4v-3Zm9 0h7v3h-7v-3Z"
              />
            </svg>
            <span>What you’ll explore</span>
          </h2>
          <p className="mt-2 text-[var(--muted)]">
            The experience is organized around seven key capability areas.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-sm font-medium text-[var(--text)] shadow-sm">
              {capability}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface-elevated))] p-8 shadow-md lg:p-10">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-[var(--text)]">
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
              d="M5 12h14m0 0-5-5m5 5-5 5M4 5h7m-7 14h7"
            />
          </svg>
          <span>Start with AI literacy</span>
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
          Start with the AI literacy module to learn how to apply AI directly
          in your instructional design work.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => markComplete("orientation")}
            disabled={completed}
            className={`rounded-lg px-5 py-3 font-medium transition ${
              completed
                ? "cursor-default bg-[var(--success)] text-white"
                : "bg-[var(--success)] text-white hover:bg-[var(--success-hover)]"
            }`}>
            {completed
              ? "✓ Orientation Completed"
              : "Mark Orientation Complete"}
          </button>

          <Link
            href="/course/module/ai-literacy"
            className="rounded-lg bg-[var(--primary)] px-5 py-3 text-center font-semibold text-white shadow-sm transition hover:scale-[1.01] hover:bg-[var(--primary-hover)] hover:shadow-md">
            Go to Module 1
          </Link>
        </div>
      </section>
    </div>
  );
}
