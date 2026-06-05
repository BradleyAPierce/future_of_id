import AboutCardGrid from "@/components/about/AboutCardGrid";
import AboutCta from "@/components/about/AboutCta";
import AboutHero from "@/components/about/AboutHero";
import AboutSection from "@/components/about/AboutSection";
import AboutStatement from "@/components/about/AboutStatement";
import { aboutContent } from "@/content/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-5 py-10 text-[var(--text)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl space-y-14">
        <AboutHero content={aboutContent.hero} />

        <AboutStatement content={aboutContent.purpose} />

        <AboutSection
          eyebrow={aboutContent.creator.eyebrow}
          title={aboutContent.creator.title}
          intro={aboutContent.creator.intro}>
          <AboutCardGrid items={aboutContent.creator.items} columns="three" />
        </AboutSection>

        <AboutSection
          eyebrow={aboutContent.audience.eyebrow}
          title={aboutContent.audience.title}
          intro={aboutContent.audience.intro}>
          <AboutCardGrid items={aboutContent.audience.items} columns="three" />
        </AboutSection>

        <AboutSection
          eyebrow={aboutContent.disciplines.eyebrow}
          title={aboutContent.disciplines.title}
          intro={aboutContent.disciplines.intro}>
          <AboutCardGrid items={aboutContent.disciplines.items} />
        </AboutSection>

        <AboutCta content={aboutContent.finalCta} />
      </div>
    </main>
  );
}
