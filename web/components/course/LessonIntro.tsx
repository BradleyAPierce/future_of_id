import { ReactNode } from "react";
import Surface from "@/components/ui/Surface";

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
    <Surface padding="lg" className="space-y-4">
      <h2 className="text-2xl font-semibold text-[var(--text)]">{title}</h2>

      <p className="leading-relaxed text-[var(--text)]">{description}</p>

      {children && (
        <div className="text-sm leading-relaxed text-[var(--muted)]">{children}</div>
      )}
    </Surface>
  );
}
