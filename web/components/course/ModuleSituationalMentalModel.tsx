import type { ModuleSituationalMentalModel as ModuleSituationalMentalModelData } from "@/types/moduleContent";
import Surface from "@/components/ui/Surface";

type ModuleSituationalMentalModelProps = {
  model: ModuleSituationalMentalModelData;
};

export default function ModuleSituationalMentalModel({
  model,
}: ModuleSituationalMentalModelProps) {
  return (
    <Surface
      tone="elevated"
      padding="md"
      className="space-y-4 rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)]">
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--primary-hover)]">
          Situational mental model
        </p>
        <h4 className="text-xl font-semibold leading-tight text-[var(--text)]">
          {model.title}
        </h4>
      </div>

      <ol className="flex flex-col gap-2 lg:flex-row lg:items-center">
        {model.steps.map((step, index) => (
          <li
            key={step}
            className="flex flex-col gap-2 lg:flex-1 lg:flex-row lg:items-center">
            <div className="flex min-h-16 flex-1 items-center gap-3 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_10%,transparent)] text-xs font-semibold text-[var(--primary-hover)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium leading-snug text-[var(--text)]">
                {step}
              </span>
            </div>

            {index < model.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="mx-auto h-4 w-px bg-[var(--border)] lg:mx-0 lg:h-px lg:w-5"
              />
            )}
          </li>
        ))}
      </ol>
    </Surface>
  );
}
