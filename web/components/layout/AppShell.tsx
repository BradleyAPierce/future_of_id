"use client";

import { useState } from "react";
import type { ModuleMetadata } from "@/data/modules";
import CourseSidebar from "@/components/navigation/CourseSidebar";
import MainContent from "./MainContent";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

type AppShellProps = {
  children: React.ReactNode;
  modules: ModuleMetadata[];
};

export default function AppShell({ children, modules }: AppShellProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteHeader
        isMobileNavOpen={isMobileNavOpen}
        onToggleMobileNav={() => setIsMobileNavOpen((open) => !open)}
      />
      {isMobileNavOpen && (
        <button
          type="button"
          aria-label="Close course navigation"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}
      <div className="lg:grid lg:grid-cols-[280px_1fr]">
        <CourseSidebar
          modules={modules}
          isMobileNavOpen={isMobileNavOpen}
          onCloseMobileNav={() => setIsMobileNavOpen(false)}
        />
        <div className="flex min-h-[calc(100vh-73px)] min-w-0 flex-col">
          <MainContent>{children}</MainContent>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
