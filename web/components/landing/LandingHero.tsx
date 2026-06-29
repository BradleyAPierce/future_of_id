import Image from "next/image";
import type { landingContent } from "@/content/landing";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type LandingHeroProps = {
  content: typeof landingContent.hero;
};

export default function LandingHero({ content }: LandingHeroProps) {
  return (
    <section className="relative min-h-[560px] overflow-hidden border-b border-[var(--border)] md:min-h-[620px]">
      <Image
        src={content.imageUrl}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex min-h-[560px] max-w-6xl items-end px-5 py-14 text-white sm:px-6 md:min-h-[620px] lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/75">
            {content.eyebrow}
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/90 md:text-2xl">
            {content.description}
          </p>
          <p className="mt-5 max-w-3xl leading-7 text-white/75">
            {content.support}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={content.primaryCta.href}>
              {content.primaryCta.label}
            </Button>
            <Button
              href={content.secondaryCta.href}
              variant="secondary"
              className="border-white/35 bg-white/10 text-white hover:border-white/50 hover:bg-white/15">
              {content.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {content.proofPoints.map((point) => (
              <Badge
                key={point}
                className="border-white/25 bg-white/10 text-white backdrop-blur">
                {point}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
