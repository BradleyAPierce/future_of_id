"use client";

import Link from "next/link";
import { useCourseProgress } from "@/lib/useCourseProgress";

export default function OrientationPage() {
  const { markComplete, isCompleted } = useCourseProgress();
  const completed = isCompleted("orientation");

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to the Future of Instructional Design
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Instructional design is evolving. Rapid advances in artificial
          intelligence, data systems, and digital learning environments are
          changing how learning experiences are designed, delivered, and
          evaluated.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          This guided experience explores seven capabilities that will define
          the next generation of instructional designers. Rather than focusing
          only on course production, these capabilities emphasize systems
          thinking, performance impact, and the integration of intelligent
          technologies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">What You Will Explore</h2>

        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>AI Literacy and Agent-Enabled Learning Design</li>
          <li>Performance Consulting and Business Alignment</li>
          <li>Learning Analytics and Evidence-Based Design</li>
          <li>Scenario, Simulation, and Conversation Design</li>
          <li>Adaptive and Personalized Learning Architecture</li>
          <li>Content Systems Thinking and Workflow Automation</li>
          <li>Human-Centered Change, Ethics, and Learner Trust</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          How This Experience Works
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Each module introduces one capability shaping the future of
          instructional design. Modules combine conceptual insights, examples,
          and practical ideas that instructional designers can apply to their
          own work.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          The modules can be explored sequentially or individually depending on
          your interests. As the project evolves, interactive exercises,
          simulations, and AI-supported learning tools will be integrated into
          the experience.
        </p>
      </section>

      <section className="border border-gray-700 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Begin the Journey</h2>

        <p className="text-gray-400 leading-relaxed mb-6">
          Start with the first module on AI literacy and agent-enabled learning
          design to understand how AI is transforming the practice of
          instructional design.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={() => markComplete("orientation")}
            disabled={completed}
            className={`rounded-lg px-5 py-3 font-medium transition ${
              completed
                ? "bg-green-700 text-white cursor-default"
                : "bg-yellow-400 text-black hover:bg-yellow-300"
            }`}>
            {completed
              ? "✓ Orientation Completed"
              : "Mark Orientation Complete"}
          </button>

          <Link
            href="/course/module/ai-literacy"
            className="rounded-lg border border-gray-500 px-5 py-3 font-medium text-white hover:bg-gray-900 transition text-center">
            Go to Module 1
          </Link>
        </div>
      </section>
    </div>
  );
}
