"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ModuleMetadata } from "@/data/modules";

type CourseSidebarProps = {
  modules: ModuleMetadata[];
};

function linkClasses(isActive: boolean) {
  return `block rounded-lg border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
    isActive
      ? "border-blue-400 bg-blue-500/10 text-white"
      : "border-transparent text-gray-400 hover:border-gray-700 hover:bg-gray-900 hover:text-white"
  }`;
}

export default function CourseSidebar({ modules }: CourseSidebarProps) {
  const pathname = usePathname();
  const courseModules = modules.filter((module) => module.type === "module");

  return (
    <aside className="border-b border-gray-800 bg-black px-6 py-5 lg:sticky lg:top-0 lg:h-[calc(100vh-73px)] lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-5">
      <nav aria-label="Course navigation" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Course
          </p>
          <Link
            href="/course/dashboard"
            className={linkClasses(pathname === "/course/dashboard")}>
            Dashboard
          </Link>
          <Link
            href="/course/orientation"
            className={linkClasses(pathname === "/course/orientation")}>
            Orientation
          </Link>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            Modules
          </p>
          <div className="space-y-2">
            {courseModules.map((module) => {
              const href = `/course/module/${module.slug}`;
              const isActive = pathname === href;

              return (
                <Link key={module.slug} href={href} className={linkClasses(isActive)}>
                  <span className="block text-xs text-gray-500">
                    {String(module.order).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block leading-snug">{module.title}</span>
                  {module.practiceLabel && (
                    <span className="mt-2 inline-block rounded-full border border-blue-500/30 px-2 py-0.5 text-xs text-blue-300">
                      {module.practiceLabel}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
}
