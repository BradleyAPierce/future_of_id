import type { ReactNode } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

type AboutSectionProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function AboutSection({
  eyebrow,
  title,
  intro,
  children,
}: AboutSectionProps) {
  return (
    <section className="space-y-6">
      <SectionHeader eyebrow={eyebrow} title={title} description={intro} />

      {children}
    </section>
  );
}
