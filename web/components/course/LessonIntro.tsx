import { ReactNode } from "react";

interface LessonIntroProps {
  title: string;
  description: string;
  children?: ReactNode;
}

export default function LessonIntro({
  title,
  description,
  children,
}: LessonIntroProps) {
  return (
    <div className="space-y-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
      <h2 className="text-2xl font-semibold text-[var(--text)]">{title}</h2>

      <p className="leading-relaxed text-[var(--text)]">{description}</p>

      {children && (
        <div className="text-sm leading-relaxed text-[var(--muted)]">{children}</div>
      )}
    </div>
  );
}
