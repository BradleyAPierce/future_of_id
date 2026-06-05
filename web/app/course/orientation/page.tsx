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
    "Human-Centered Change, Ethics, and Learner Trust",
  ];

  const experienceSteps = [
    {
      title: "Theory",
      description:
        "Start with the capability, why it matters, and the L&D foundations it extends.",
    },
    {
      title: "Experience",
      description:
        "Apply the idea through a scenario, simulation, or decision activity. Some modules include AI-supported feedback.",
    },
    {
      title: "Reverse Build / Design Notes",
      description:
        "Open the build notes to see the design decisions, tradeoffs, prompts, and constraints behind the experience.",
    },
    {
      title: "Reflection",
      description:
        "Capture what you would apply in your work and mark progress when you are ready to move on.",
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
            • Future of ID is for instructional designers, curriculum
            developers, and L&D professionals who want to strengthen how they
            design for performance, practice, evidence, content systems,
            AI-supported work, and learner trust.
          </li>
          <li>
            • The shift is not from instructional designer to technologist. It
            is from course producer to learning systems designer: someone who
            can choose the right tools, design better practice, connect learning
            to performance, and improve outcomes with sound judgment.
          </li>
          <li>
            • The course builds on foundations that still matter: learning
            science, analysis, practice design, accessibility, evaluation, and
            stakeholder collaboration.
          </li>
        </ul>
      </section>

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
              d="M4 12h3l2-5 4 10 2-5h5M4 5h16M4 19h16"
            />
          </svg>
          <span>Why this matters now</span>
        </h2>
        <p className="mt-5 leading-relaxed text-[var(--muted)]">
          Instructional design work is expanding faster than traditional
          professional development pathways can keep up. Learning teams are
          being asked to use AI responsibly, connect work to performance,
          interpret data, design realistic practice, adapt learning paths,
          manage reusable content, and protect trust in AI-supported
          experiences. The point is not to chase tools. It is to make better
          design decisions when the work gets more complex.
        </p>
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
            Each module uses the same guided flow so you can move from idea to
            practice without losing the design rationale.
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
          <p className="mt-2 max-w-4xl leading-relaxed text-[var(--muted)]">
            These seven capabilities were selected because each one extends a
            traditional instructional design strength into an area where modern
            learning work is becoming more complex. Together, they create a
            system: judgment, performance, evidence, practice, adaptation,
            maintainability, and trust.
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
          Start with AI literacy because it sets the judgment standard for the
          rest of the course: use new tools without handing over the quality
          decisions that belong to the designer.
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
