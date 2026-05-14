import type { ModuleContent } from "@/types/moduleContent";
import Surface from "@/components/ui/Surface";
import ReflectionFeedbackAI from "./ReflectionFeedbackAI";

type ModuleReflection = NonNullable<ModuleContent["reflection"]>;

type ModuleReflectionSectionProps = {
  moduleSlug: string;
  reflection: ModuleReflection;
};

export default function ModuleReflectionSection({
  moduleSlug,
  reflection,
}: ModuleReflectionSectionProps) {
  return (
    <Surface tone="accent" padding="lg" className="space-y-5 rounded-[var(--radius-xl)]">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]">
          <svg
            aria-hidden="true"
            className="h-6 w-6 text-[var(--accent)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L9.75 16.902 6 18l1.098-3.75L16.862 4.487ZM19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
            />
          </svg>
        </span>
        <h3 className="text-2xl font-semibold text-[var(--text)]">
          {reflection.title}
        </h3>
      </div>

      <p className="leading-relaxed text-[var(--muted)]">
        {reflection.prompt}
      </p>

      <ReflectionFeedbackAI moduleSlug={moduleSlug} />
    </Surface>
  );
}
