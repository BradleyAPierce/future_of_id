import { landingContent } from "@/content/landing";
import { homepageProofAssets } from "@/data/homepageProofs";
import { learningFrameworksById } from "@/data/learningFrameworks";
import HomepageProofAsset from "@/components/landing/HomepageProofAsset";
import LandingAccordion from "@/components/landing/LandingAccordion";
import LandingCardGrid from "@/components/landing/LandingCardGrid";
import LandingFinalCta from "@/components/landing/LandingFinalCta";
import LandingFeatureBlocks from "@/components/landing/LandingFeatureBlocks";
import LandingFrameworkPanel from "@/components/landing/LandingFrameworkPanel";
import LandingHeader from "@/components/landing/LandingHeader";
import LandingHero from "@/components/landing/LandingHero";
import LandingSection from "@/components/landing/LandingSection";
import LearningLoopSection from "@/components/landing/LearningLoopSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <LandingHeader
        navItems={landingContent.header.navItems}
        cta={landingContent.header.cta}
      />

      <main>
        <LandingHero content={landingContent.hero} />

        <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <LearningLoopSection content={landingContent.learningLoop} />

          <HomepageProofAsset asset={homepageProofAssets.dashboard} />

          <LandingSection
            id="what-it-is"
            eyebrow={landingContent.whatIs.eyebrow}
            title={landingContent.whatIs.title}
            intro={landingContent.whatIs.intro}>
            <LandingFeatureBlocks
              items={landingContent.whatIs.items}
              image={homepageProofAssets.learningSystemFramework}
            />
          </LandingSection>

          <LandingSection
            id="what-it-is-not"
            eyebrow={landingContent.whatIsNot.eyebrow}
            title={landingContent.whatIsNot.title}
            intro={landingContent.whatIsNot.intro}>
            <LandingAccordion items={landingContent.whatIsNot.items} />
          </LandingSection>

          <LandingSection
            id="different-paths"
            eyebrow={landingContent.paths.eyebrow}
            title={landingContent.paths.title}
            intro={landingContent.paths.intro}>
            <LandingFrameworkPanel
              framework={learningFrameworksById["different-paths"]}
              description={landingContent.paths.intro}
            />
          </LandingSection>

          <LandingSection
            id="why-this-exists"
            eyebrow={landingContent.whyExists.eyebrow}
            title={landingContent.whyExists.title}
            intro={landingContent.whyExists.intro}>
            <LandingCardGrid
              items={landingContent.whyExists.items}
              columns="three"
              tone="primary"
            />
          </LandingSection>

          <LandingSection
            id="capabilities"
            eyebrow={landingContent.capabilities.eyebrow}
            title={landingContent.capabilities.title}
            intro={landingContent.capabilities.intro}>
            <LandingFrameworkPanel
              framework={learningFrameworksById["capability-ecosystem"]}
              description="The seven capability areas are connected parts of one professional system: judgment, performance, evidence, practice, adaptation, maintainability, and trust.">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {landingContent.capabilities.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <span className="text-sm font-semibold text-[var(--primary)]">
                        {item.label}
                      </span>
                      <span className="rounded-full border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] px-2.5 py-1 text-xs font-semibold text-[var(--accent-hover)]">
                        {item.focus}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-semibold leading-snug text-[var(--text)]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </LandingFrameworkPanel>
          </LandingSection>

          <LandingSection
            id="platform-principles"
            eyebrow={landingContent.principles.eyebrow}
            title={landingContent.principles.title}
            intro={landingContent.principles.intro}>
            <LandingCardGrid
              items={landingContent.principles.items}
              tone="accent"
            />
          </LandingSection>

          <LandingSection
            id="inside"
            eyebrow={landingContent.inside.eyebrow}
            title={landingContent.inside.title}
            intro={landingContent.inside.intro}>
            <LandingCardGrid items={landingContent.inside.items} />
          </LandingSection>

          <LandingFinalCta content={landingContent.finalCta} />
        </div>
      </main>
    </div>
  );
}
