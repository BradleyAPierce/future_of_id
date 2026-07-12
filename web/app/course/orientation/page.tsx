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
        subtitle="Understand the capability development method, then explore Bradley's current implemented pathway."
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
        title="Start With Professional Calibration"
        question="How did this pathway take shape, and what does that mean for mine?"
        takeaway="Capability development starts with honest professional calibration, not a claim of mastery or one prescribed pathway.">
        <LandingFrameworkPanel
          framework={learningFrameworksById["different-paths"]}
          description="Future of ID emerged through Bradley's professional calibration as an experienced instructional designer: he assessed established strengths, recognized where future work required intentional development, and allowed research, experimentation, applied practice, and reflection to reveal new questions. His seven capabilities are the first demonstrated pathway through that process, not a universal definition of what every practitioner needs.">
          <div className="grid gap-3 md:grid-cols-3">
            {[
              {
                title: "Know what you know",
                description:
                  "Begin with existing experience, strengths, and professional judgment.",
              },
              {
                title: "Know what you do not know",
                description:
                  "Identify where future work calls for new knowledge, practice, and experimentation.",
              },
              {
                title: "Discover through practice",
                description:
                  "Use building, application, and reflection to surface questions you could not see at the start.",
              },
            ].map((step, index) => (
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
          <p className="text-sm leading-6 text-[var(--muted)]">
            Bradley personally selected this pathway by calibrating his current
            professional context and responsibilities with active projects,
            applied experimentation, immediate development needs, and a future
            direction toward full-stack learning product development. Research
            informed the individual capability concepts; professional judgment,
            not an outside institution, selected the collection.
          </p>
          <p className="text-sm leading-6 text-[var(--muted)]">
            Another practitioner may identify different needs, replace or add
            capability areas, and preserve the same Identify → Develop → Apply →
            Share method and Theory → Experience → Reverse Build → Reflection
            architecture. Future of ID does not diagnose needs or generate a
            pathway automatically.
          </p>
        </LandingFrameworkPanel>
      </SectionFrame>

      <SectionFrame
        act="Act 3"
        title="How Future of ID Teaches"
        question="What kind of learning experience is this?"
        takeaway="Future of ID develops capabilities through a reusable learning architecture, not isolated content.">
        <LandingFrameworkPanel
          framework={learningFrameworksById["learning-system"]}
          description="Theory, Experience, Reverse Build, and Reflection can organize different capability topics while preserving a consistent development method.">
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
        question="What do the current seven capabilities demonstrate about the larger system?"
        takeaway="Bradley's seven capabilities form the first complete demonstration of the system, not its universal or permanent boundary.">
        <LandingFrameworkPanel
          framework={learningFrameworksById["capability-ecosystem"]}
          description="This implemented pathway connects judgment, performance, evidence, practice, adaptation, maintainability, and trust. Other practitioners may create a different collection using the same method.">
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
          or open the Capability Map and choose from Bradley&apos;s implemented
          pathway. The reusable method can support different capability topics,
          but this platform does not create personalized pathways automatically.
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
