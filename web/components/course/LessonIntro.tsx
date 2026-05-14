import { ReactNode } from "react";
import Badge from "@/components/ui/Badge";
import Surface from "@/components/ui/Surface";

interface LessonIntroProps {
  title: string;
  description: string;
  children?: ReactNode;
  metadata?: string[];
}

export default function LessonIntro({
  title,
  description,
  children,
  metadata,
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
        <p className="leading-7 text-[var(--text)]">{description}</p>

        {children && (
          <div className="max-w-4xl text-sm leading-7 text-[var(--muted)]">
            {children}
          </div>
        )}
      </div>
    </Surface>
  );
}
