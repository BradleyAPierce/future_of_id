import type { ReactNode } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

type LandingSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function LandingSection({
  id,
  eyebrow,
  title,
  intro,
  children,
}: LandingSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-6">
      <SectionHeader eyebrow={eyebrow} title={title} description={intro} />

      {children}
    </section>
  );
}
