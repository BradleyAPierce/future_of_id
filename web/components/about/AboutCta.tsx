import type { aboutContent } from "@/content/about";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";

type AboutCtaProps = {
  content: typeof aboutContent.finalCta;
};

export default function AboutCta({ content }: AboutCtaProps) {
  return (
    <Surface
      tone="primary"
      padding="lg"
      className="rounded-[var(--radius-xl)] p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
          {content.description}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
        <Button
          href={content.secondaryCta.href}
          variant="secondary"
          target={content.secondaryCta.external ? "_blank" : undefined}
          rel={content.secondaryCta.external ? "noreferrer" : undefined}>
          {content.secondaryCta.label}
        </Button>
      </div>
    </Surface>
  );
}
