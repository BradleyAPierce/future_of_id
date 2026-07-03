import { landingContent } from "@/content/landing";
import { homepageProofAssets } from "@/data/homepageProofs";
import HomepageProofAsset from "@/components/landing/HomepageProofAsset";
import LandingCardGrid from "@/components/landing/LandingCardGrid";
import LandingCapabilityPreview from "@/components/landing/LandingCapabilityPreview";
import LandingFinalCta from "@/components/landing/LandingFinalCta";
import LandingFeatureBlocks from "@/components/landing/LandingFeatureBlocks";
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
              image={homepageProofAssets.dashboard}
            />
          </LandingSection>

          <LandingSection
            id="what-it-is-not"
            eyebrow={landingContent.whatIsNot.eyebrow}
            title={landingContent.whatIsNot.title}
            intro={landingContent.whatIsNot.intro}>
            <LandingCardGrid
              items={landingContent.whatIsNot.items}
              tone="elevated"
            />
          </LandingSection>

          <LandingSection
            id="different-paths"
            eyebrow={landingContent.paths.eyebrow}
            title={landingContent.paths.title}
            intro={landingContent.paths.intro}>
            <LandingCardGrid items={landingContent.paths.items} columns="three" />
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
            <LandingCapabilityPreview items={landingContent.capabilities.items} />
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
