import { ReactNode } from "react";
import Badge from "@/components/ui/Badge";
import Surface from "@/components/ui/Surface";

interface LessonIntroProps {
  title: string;
  description: string;
  children?: ReactNode;
  metadata?: string[];
  learnerQuestion?: string;
  takeaway?: string;
}

export default function LessonIntro({
  title,
  description,
  children,
  metadata,
  learnerQuestion,
  takeaway,
}: LessonIntroProps) {
  return (
    <Surface
      padding="none"
      className="overflow-hidden rounded-[var(--radius-xl)] border-l-4 border-l-[var(--primary)]">
      <div className="border-b border-[var(--border)] bg-[var(--surface-elevated)] p-5 sm:p-6">
        {metadata && metadata.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {metadata.map((item) => (
              <Badge key={item} tone="primary">
                {item}
              </Badge>
            ))}
          </div>
        )}

        <h2 className="text-2xl font-semibold leading-tight text-[var(--text)]">
          {title}
        </h2>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        {learnerQuestion && (
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--primary-hover)]">
              Learner question
            </p>
            <p className="text-xl font-semibold leading-snug text-[var(--text)]">
              {learnerQuestion}
            </p>
          </div>
        )}

        <p className="leading-7 text-[var(--text)]">{description}</p>

        {takeaway && (
          <p className="rounded-[var(--radius-lg)] border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_8%,var(--surface))] px-4 py-3 text-sm leading-6 text-[var(--text)]">
            <span className="font-semibold text-[var(--primary-hover)]">
              Takeaway:
            </span>{" "}
            {takeaway}
          </p>
        )}

        {children && (
          <div className="max-w-4xl text-sm leading-7 text-[var(--muted)]">
            {children}
          </div>
        )}
      </div>
    </Surface>
  );
}
