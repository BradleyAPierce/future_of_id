import type { aboutContent } from "@/content/about";
import Surface from "@/components/ui/Surface";

type AboutStatementProps = {
  content: typeof aboutContent.purpose;
};

export default function AboutStatement({ content }: AboutStatementProps) {
  return (
    <Surface
      tone="accent"
      padding="lg"
      className="rounded-[var(--radius-xl)] p-8 lg:p-10">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent-hover)]">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          {content.title}
        </h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-[var(--muted)]">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Surface>
  );
}
