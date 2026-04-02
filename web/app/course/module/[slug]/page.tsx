"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { modules } from "@/data/modules";
import { useCourseProgress } from "@/lib/useCourseProgress";
import AIReflection from "@/components/course/AIReflection";
import BackToTopButton from "@/components/ui/BackToTopButton";
import LessonSection from "@/components/course/LessonSection";
import LessonIntro from "@/components/course/LessonIntro";

interface ModulePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ModulePage({ params }: ModulePageProps) {
  const { slug } = use(params);
  const { markComplete, isCompleted } = useCourseProgress();

  const module = modules.find((m) => m.slug === slug);

  if (!module) {
    notFound();
  }

  const sortedModules = [...modules].sort((a, b) => a.order - b.order);
  const currentIndex = sortedModules.findIndex((m) => m.slug === slug);
  const nextModule = sortedModules[currentIndex + 1];

  const completed = isCompleted(slug);

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        {/* badges */}
        <div className="flex flex-wrap gap-3">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gray-700/40 text-gray-300 border border-gray-600/40">
            Module {module.order}
          </span>

          {module.practiceLabel && (
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30">
              {module.practiceLabel}
            </span>
          )}
        </div>

        {/* estimated time */}
        <p className="text-sm text-gray-500">
          Estimated time: {module.estimatedTime}
        </p>

        {/* LESSON INTRO */}
        <LessonIntro title={module.title} description={module.description}>
          This module introduces how AI is reshaping instructional design and
          how you can begin applying it responsibly in your workflow.
        </LessonIntro>
      </section>

      <section className="space-y-10">
        {/* WHAT YOU'LL BE ABLE TO DO */}
        <div className="border border-gray-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">
            What You&#39;ll Be Able to Do
          </h3>

          <p className="text-gray-400 leading-relaxed">
            By the end of this module, you should be able to:
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
            <li>
              Explain what AI literacy means in the context of instructional
              design
            </li>
            <li>
              Recognize the difference between using AI as a helper and
              designing AI-enabled learning experiences
            </li>
            <li>
              Identify where AI can support the instructional design workflow
              responsibly
            </li>
            <li>
              Apply better judgment about when AI should be used and when human
              oversight is essential
            </li>
          </ul>
        </div>

        {/* WHAT YOU'LL PRACTICE */}
        <LessonSection
          title="What You’ll Practice"
          accent="blue"
          badge="Practice Preview">
          <p>
            In this module, you won&#39;t just read about AI literacy —
            you&#39;ll practice making judgment calls about when AI should be
            used, when human review is essential, and how responsible use
            affects learner trust and instructional quality.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Evaluating whether AI is appropriate for a specific learning task
            </li>
            <li>Identifying where human oversight is still necessary</li>
            <li>
              Recognizing risks tied to accuracy, trust, and responsible use
            </li>
          </ul>
        </LessonSection>

        {/* WHY THIS MATTERS */}
        <div className="border border-gray-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Common Misconceptions About AI Literacy
          </h3>

          <div className="space-y-4 text-gray-400">
            <div>
              <p className="font-semibold text-white">
                Misconception 1: AI literacy is just knowing how to write
                prompts.
              </p>
              <p className="mt-1 leading-relaxed">
                Prompting is only one part of AI literacy. Instructional
                designers also need to understand accuracy, bias, workflow fit,
                learner trust, and where human judgment still matters.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Misconception 2: If AI saves time, it automatically improves
                learning design.
              </p>
              <p className="mt-1 leading-relaxed">
                Speed is helpful, but faster content is not always better
                content. Good learning design still requires relevance,
                accuracy, context, and alignment to learner needs.
              </p>
            </div>

            <div>
              <p className="font-semibold text-white">
                Misconception 3: AI will replace the instructional designer.
              </p>
              <p className="mt-1 leading-relaxed">
                AI can automate parts of the workflow, but it does not replace
                the designer&#39;s role in making strategic decisions, shaping
                learning experiences, and ensuring quality.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT IT ACTUALLY MEANS */}
        <div className="border border-gray-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">
            What AI Literacy Actually Means
          </h3>

          <p className="text-gray-400 leading-relaxed">
            AI literacy is often misunderstood as simply knowing how to write
            prompts or use tools like ChatGPT. While those are useful skills,
            true AI literacy goes much deeper.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
            <li>Understanding what AI is good at — and what it is not</li>
            <li>Knowing how to guide AI to produce useful outputs</li>
            <li>Recognizing when human judgment is required</li>
            <li>
              Designing learning experiences that leverage AI appropriately
            </li>
            <li>Evaluating AI-generated content for accuracy and bias</li>
          </ul>

          <p className="text-gray-400 mt-4 leading-relaxed">
            In other words, AI literacy is not about replacing the instructional
            designer — it is about amplifying their ability to design effective
            learning experiences.
          </p>
        </div>

        {/* MATURITY SHIFT */}
        <div className="border border-gray-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">
            From AI User to AI-Enabled Learning Designer
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Many professionals start by using AI as a helper — generating
            outlines, rewriting text, or brainstorming ideas. This is a valuable
            first step, but it is not the end state.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            The real shift happens when instructional designers begin to design
            learning experiences that intentionally incorporate AI as part of
            the learner journey.
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
            <li>AI-assisted feedback during practice activities</li>
            <li>Dynamic role-play simulations with AI personas</li>
            <li>Personalized learning paths based on learner behavior</li>
            <li>Real-time coaching embedded into workflows</li>
          </ul>
        </div>

        {/* WORKFLOW */}
        <div className="border border-gray-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Where AI Fits in the Instructional Design Workflow
          </h3>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>
              <strong>Analysis:</strong> Summarizing research, identifying skill
              gaps
            </li>
            <li>
              <strong>Design:</strong> Generating learning objectives, outlining
              structures
            </li>
            <li>
              <strong>Development:</strong> Drafting content, creating scenarios
            </li>
            <li>
              <strong>Evaluation:</strong> Analyzing learner data and feedback
            </li>
            <li>
              <strong>Iteration:</strong> Continuously improving learning
              experiences
            </li>
          </ul>

          <p className="text-gray-400 mt-4 leading-relaxed">
            AI accelerates each phase, but it does not replace the need for
            thoughtful design decisions.
          </p>
        </div>

        {/* RISKS */}
        <div className="border border-gray-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">
            Risks and Responsible Use
          </h3>

          <ul className="list-disc pl-6 text-gray-400 space-y-2">
            <li>Bias in generated content</li>
            <li>Incorrect or fabricated information</li>
            <li>Over-reliance on automation</li>
            <li>Lack of transparency for learners</li>
          </ul>

          <p className="text-gray-400 mt-4 leading-relaxed">
            AI literacy includes knowing when not to use AI — and ensuring that
            learning experiences remain accurate, ethical, and learner-centered.
          </p>
        </div>

        {/* REFLECTION */}
        <div className="border border-gray-700 rounded-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Reflection</h3>

          <p className="text-gray-400 leading-relaxed">
            Think about your current instructional design workflow.
          </p>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Where are you already using AI, and where could it enhance your
            process without reducing quality or learner trust?
          </p>
        </div>
      </section>

      <AIReflection />

      {/* Key Takeaway */}
      <LessonSection title="Key Takeaway / Before You Continue" accent="amber">
        <p>
          AI literacy is not just about using new tools. It is about developing
          the judgment to decide when AI can strengthen learning design, when
          human oversight is essential, and how to build experiences that remain
          accurate, ethical, and learner-centered.
        </p>

        <p>
          As you move into the next module, keep this principle in mind: the
          future of instructional design is not about replacing the designer. It
          is about equipping designers to work more strategically with
          intelligent systems.
        </p>
      </LessonSection>

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
