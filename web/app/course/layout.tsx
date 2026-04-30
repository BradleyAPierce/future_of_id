import AppShell from "@/components/layout/AppShell";
import { modules, type ModuleMetadata } from "@/data/modules";

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sortedModules = [...modules].sort(
    (a, b) => a.order - b.order,
  ) as ModuleMetadata[];

  return <AppShell modules={sortedModules}>{children}</AppShell>;
}
