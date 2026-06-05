import type { landingContent } from "@/content/landing";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";

type LandingFinalCtaProps = {
  content: typeof landingContent.finalCta;
};

export default function LandingFinalCta({ content }: LandingFinalCtaProps) {
  return (
    <Surface
      tone="primary"
      padding="lg"
      className="overflow-hidden rounded-[var(--radius-xl)] border-l-[6px] border-l-[var(--primary)]">
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
        <Button href={content.secondaryCta.href} variant="secondary">
          {content.secondaryCta.label}
        </Button>
      </div>
    </Surface>
  );
}
