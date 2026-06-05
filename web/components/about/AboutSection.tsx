import type { ReactNode } from "react";

type AboutSectionProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function AboutSection({
  eyebrow,
  title,
  intro,
  children,
}: AboutSectionProps) {
  return (
    <section className="space-y-6">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
          {title}
        </h2>
        {intro && (
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            {intro}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}
