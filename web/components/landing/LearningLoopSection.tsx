import type { landingContent } from "@/content/landing";
import SectionHeader from "@/components/ui/SectionHeader";
import LearningLoopVisual from "@/components/landing/LearningLoopVisual";

type LearningLoopSectionProps = {
  content: typeof landingContent.learningLoop;
};

export default function LearningLoopSection({ content }: LearningLoopSectionProps) {
  return (
    <section id="learning-loop" className="scroll-mt-28 space-y-8">
      <SectionHeader
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
      />

      <LearningLoopVisual steps={content.steps} />
    </section>
  );
}
