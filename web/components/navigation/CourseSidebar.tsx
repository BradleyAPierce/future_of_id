"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ModuleMetadata } from "@/data/modules";

type CourseSidebarProps = {
  modules: ModuleMetadata[];
  isMobileNavOpen: boolean;
  onCloseMobileNav: () => void;
};

function linkClasses(isActive: boolean) {
  return `block rounded-lg border px-3 py-2 text-sm transition focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
    isActive
      ? "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--text)]"
      : "border-transparent text-[var(--muted)] hover:border-[var(--primary)] hover:bg-[var(--surface-elevated)] hover:text-[var(--text)]"
  }`;
}

export default function CourseSidebar({
  modules,
  isMobileNavOpen,
  onCloseMobileNav,
}: CourseSidebarProps) {
  const pathname = usePathname();
  const courseModules = modules.filter((module) => module.type === "module");

  return (
    <aside
      id="course-navigation"
      className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto border-r border-[var(--border)] bg-[var(--surface)] px-6 py-5 transition-transform lg:sticky lg:top-0 lg:z-auto lg:h-[calc(100vh-73px)] lg:w-auto lg:max-w-none lg:translate-x-0 lg:px-5 ${
        isMobileNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
      <nav aria-label="Course navigation" className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
            Course
          </p>
          <Link
            href="/course/dashboard"
            onClick={onCloseMobileNav}
            className={linkClasses(pathname === "/course/dashboard")}>
            Dashboard
          </Link>
          <Link
            href="/course/orientation"
            onClick={onCloseMobileNav}
            className={linkClasses(pathname === "/course/orientation")}>
            Orientation
          </Link>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
            Modules
          </p>
          <div className="space-y-2">
            {courseModules.map((module) => {
              const href = `/course/module/${module.slug}`;
              const isActive = pathname === href;

              return (
                <Link
                  key={module.slug}
                  href={href}
                  onClick={onCloseMobileNav}
                  className={linkClasses(isActive)}>
                  <span className="block text-xs text-[var(--muted)]">
                    {String(module.order).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block leading-snug">{module.title}</span>
                  {module.practiceLabel && (
                    <span className="mt-2 inline-block rounded-full border border-[var(--primary)] px-2 py-0.5 text-xs text-[var(--primary)]">
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
