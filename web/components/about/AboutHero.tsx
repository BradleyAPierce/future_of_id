import type { aboutContent } from "@/content/about";
import Badge from "@/components/ui/Badge";
import Surface from "@/components/ui/Surface";

type AboutHeroProps = {
  content: typeof aboutContent.hero;
};

export default function AboutHero({ content }: AboutHeroProps) {
  return (
    <Surface
      tone="primary"
      padding="lg"
      className="overflow-hidden rounded-[var(--radius-xl)] border-l-[6px] border-l-[var(--primary)] p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
            {content.intro}
          </p>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-xl font-semibold text-[var(--primary)]">
              BP
            </div>
            <div>
              <p className="font-semibold text-[var(--text)]">{content.creator}</p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                {content.creatorRole}
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {content.proofPoints.map((point) => (
              <Badge key={point} tone="primary">
                {point}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Surface>
  );
}
