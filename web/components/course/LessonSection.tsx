import { ReactNode } from "react";

interface LessonSectionProps {
  title: string;
  children: ReactNode;
  accent?: "default" | "blue" | "amber";
  badge?: string;
}

export default function LessonSection({
  title,
  children,
  accent = "default",
  badge,
}: LessonSectionProps) {
  const accentStyles = {
    default: "border border-gray-700 bg-transparent",
    blue: "border border-blue-500/30 bg-blue-500/5",
    amber: "border border-amber-500/30 bg-amber-500/5",
  };

  const badgeStyles = {
    default: "bg-gray-700/40 text-gray-300 border border-gray-600/40",
    blue: "bg-blue-600/20 text-blue-300 border border-blue-500/30",
    amber: "bg-amber-500/20 text-amber-300 border border-amber-500/30",
  };

  return (
    <div className={`rounded-xl p-6 ${accentStyles[accent]}`}>
      {badge && (
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles[accent]}`}>
            {badge}
          </span>
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-4">{title}</h3>

      <div className="space-y-4 text-gray-400 leading-relaxed">{children}</div>
    </div>
  );
}
