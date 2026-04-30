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
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <div className="lg:grid lg:grid-cols-[280px_1fr]">
        <CourseSidebar modules={modules} />
        <div className="flex min-h-[calc(100vh-73px)] min-w-0 flex-col">
          <MainContent>{children}</MainContent>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
