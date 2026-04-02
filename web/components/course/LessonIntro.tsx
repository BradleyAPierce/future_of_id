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
    <div className="border border-gray-700 rounded-xl p-6 bg-gray-800/40 space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="text-gray-300 leading-relaxed">{description}</p>

      {children && (
        <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
      )}
    </div>
  );
}
