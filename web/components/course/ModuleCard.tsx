"use client";

import Link from "next/link";
import { useCourseProgress } from "@/lib/useCourseProgress";

interface ModuleCardProps {
  slug: string;
  title: string;
  description: string;
  estimatedTime: string;
  order: number;
  allModules: string[];
  practiceLabel?: string;
}

export default function ModuleCard({
  slug,
  title,
  description,
  estimatedTime,
  order,
  allModules,
  practiceLabel,
}: ModuleCardProps) {
  const { completedModules } = useCourseProgress();

  const isCompleted = completedModules.includes(slug);

  const previousModule = allModules[order - 1];
  const isUnlocked = order === 0 || completedModules.includes(previousModule);

  const isNext =
    !isCompleted && (order === 0 || completedModules.includes(previousModule));

  const href =
    slug === "orientation" ? "/course/orientation" : `/course/module/${slug}`;

  return (
    <div
      className={`group border border-gray-700 rounded-xl p-5 transition-all duration-200 shadow-md hover:shadow-xl ${
        isUnlocked
          ? "hover:bg-gray-50 hover:text-black hover:-translate-y-1"
          : "opacity-40"
      }`}>
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-gray-400 mt-1 group-hover:text-gray-700">
        {description}
      </p>

      <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-600">
        Estimated time: {estimatedTime}
      </p>

      {practiceLabel && (
        <div className="mt-3">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-100 group-hover:text-blue-700 group-hover:border-blue-300">
            {practiceLabel}
          </span>
        </div>
      )}

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm">
          {isCompleted && (
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-green-600/20 text-green-300 border border-green-500/30 group-hover:bg-green-100 group-hover:text-green-700 group-hover:border-green-300">
              ✓ Completed
            </span>
          )}

          {isNext && (
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 group-hover:bg-blue-100 group-hover:text-blue-700 group-hover:border-blue-300">
              → Next
            </span>
          )}

          {!isUnlocked && (
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-gray-700/40 text-gray-300 border border-gray-600/40">
              🔒 Locked
            </span>
          )}
        </div>

        {isUnlocked && (
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:underline group-hover:text-blue-700">
            Open
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
