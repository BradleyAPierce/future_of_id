"use client";

import { landingContent } from "@/content/landing";
import { learningFrameworksById } from "@/data/learningFrameworks";
import { orientationBanner } from "@/data/pageBanners";
import { useCourseProgress } from "@/lib/useCourseProgress";

import LandingFrameworkPanel from "@/components/landing/LandingFrameworkPanel";
import Button from "@/components/ui/Button";
import PageBanner from "@/components/ui/PageBanner";

const learningLoop = [
  {
    title: "Theory",
    description: "Understand the capability and the instructional design foundation it extends.",
  },
  {
    title: "Experience",
    description: "Practice the idea through a scenario, decision, simulation, or AI-supported feedback moment.",
  },
  {
    title: "Reverse Build",
    description: "Inspect the design choices, AI collaboration, trade-offs, and learning science behind the experience.",
  },
  {
    title: "Reflection",
    description: "Translate the insight into your own role, tools, constraints, and future design decisions.",
  },
];

function SectionFrame({
  act,
  title,
  question,
  takeaway,
  children,
}: {
  act: string;
  title: string;
  question: string;
  takeaway: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
          {act}
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
          {title}
        </h2>
        <p className="text-base font-medium text-[var(--muted)]">
          Learner question: {question}
        </p>
      </div>

      {children}

      <p className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-elevated)] px-5 py-4 text-sm font-medium leading-6 text-[var(--text)]">
        Takeaway: {takeaway}
      </p>
    </section>
  );
}

export default function OrientationPage() {
  const { markComplete, isCompleted } = useCourseProgress();
  const completed = isCompleted("orientation");

  return (
    <div className="space-y-14 text-[var(--text)]">
      <PageBanner
        imageUrl={orientationBanner.imageUrl}
        title={orientationBanner.title}
        subtitle="Build a shared vocabulary for Future of ID, then choose the capability that matches your curiosity."
        pills={orientationBanner.pills}
      />

      <SectionFrame
        act="Act 1"
        title="The Profession Has Changed"
        question="What should instructional designers own when AI can generate more of the work?"
        takeaway="The point is not chasing AI tools. It is strengthening instructional design judgment.">
        <LandingFrameworkPanel
          framework={learningFrameworksById["human-judgment-in-the-age-of-ai"]}
          description="AI can accelerate analysis, drafting, feedback, and iteration. Human judgment still owns purpose, ethics, context, quality, and consequence."
        />
      </SectionFrame>

      <SectionFrame
        act="Act 2"
        title="You Already Belong"
        question="Do I need to become a technologist, coder, or AI expert to belong here?"
        takeaway="There is more than one credible future for instructional designers. Your path depends on your role, context, strengths, and level of technical ownership.">
        <LandingFrameworkPanel
          framework={learningFrameworksById["different-paths"]}
          description="Future-ready instructional design is not one ladder. Some designers deepen AI-supported writing and review, some improve production workflows, some design scenarios and feedback, and some move into systems architecture."
        />
      </SectionFrame>

      <SectionFrame
        act="Act 3"
        title="How Future of ID Teaches"
        question="What kind of learning experience is this?"
        takeaway="Future of ID teaches through a connected learning system, not isolated content.">
        <LandingFrameworkPanel
          framework={learningFrameworksById["learning-system"]}
          description="Each module connects explanation, practice, Reverse Build, and reflection so learners can experience an idea and inspect the design rationale behind it.">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {learningLoop.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                <span className="text-sm font-semibold text-[var(--primary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-semibold text-[var(--text)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </LandingFrameworkPanel>
      </SectionFrame>

      <SectionFrame
        act="Act 4"
        title="How Modern Instructional Design Fits Together"
        question="Are these seven modules separate topics, or do they form a larger professional model?"
        takeaway="The seven capabilities reinforce one another. Together, they form one professional capability system.">
        <LandingFrameworkPanel
          framework={learningFrameworksById["capability-ecosystem"]}
          description="These capabilities connect judgment, performance, evidence, practice, adaptation, maintainability, and trust into a stronger model of future-ready instructional design.">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {landingContent.capabilities.items.map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-sm font-semibold text-[var(--primary)]">
                    {item.label}
                  </span>
                  <span className="rounded-full border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-2.5 py-1 text-xs font-semibold text-[var(--accent-hover)]">
                    {item.focus}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-[var(--text)]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </LandingFrameworkPanel>
      </SectionFrame>

      <SectionFrame
        act="Act 5"
        title="How Experts Think"
        question="How do I learn from the design decisions behind the experience?"
        takeaway="The design rationale is part of the lesson. Reverse Build shows how expert decisions are made.">
        <LandingFrameworkPanel
          framework={learningFrameworksById["reverse-build"]}
          description="Reverse Build reveals the instructional decisions, AI collaboration, trade-offs, constraints, and learning science behind the visible learner experience."
        />
      </SectionFrame>

      <section className="rounded-3xl border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface-elevated))] p-8 shadow-md lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent-hover)]">
          Act 6
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text)]">
          Choose Where You&apos;re Curious
        </h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-[var(--muted)]">
          Modules are internally guided, but the overall course path is open.
          You can start with AI Literacy for the recommended judgment baseline,
          or open the Capability Map and choose the area that matches your
          current question.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Button
            type="button"
            variant={completed ? "secondary" : "accent"}
            onClick={() => markComplete("orientation")}
            disabled={completed}>
            {completed ? "Orientation Completed" : "Mark Orientation Complete"}
          </Button>

          <Button href="/course/module/ai-literacy" variant="primary">
            Recommended: AI Literacy
          </Button>

          <Button href="/course/dashboard" variant="secondary">
            Open Capability Map
          </Button>
        </div>
      </section>
    </div>
  );
}
