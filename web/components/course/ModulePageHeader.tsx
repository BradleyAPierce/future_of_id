import type { ModuleMetadata } from "@/data/modules";
import type { ModuleContent } from "@/types/moduleContent";
import PageBanner from "@/components/ui/PageBanner";
import { DEFAULT_BANNER_IMAGE, moduleBannersBySlug } from "@/data/pageBanners";
import LessonIntro from "./LessonIntro";

type ModulePageHeaderProps = {
  module: ModuleMetadata;
  moduleContent: ModuleContent;
  className?: string;
};

function getModuleMetadata(module: ModuleMetadata) {
  return [
    module.type === "orientation" ? "Orientation" : `Module ${module.order}`,
    `Estimated time: ${module.estimatedTime}`,
    ...(module.practiceLabel ? [module.practiceLabel] : []),
  ];
}

function getFallbackBanner(module: ModuleMetadata) {
  return {
    title: module.title,
    subtitle: module.description,
    imageUrl: DEFAULT_BANNER_IMAGE,
    pills: [
      module.type === "orientation" ? "Orientation" : `Module ${module.order}`,
      ...(module.practiceLabel ? [module.practiceLabel] : []),
    ],
  };
}

export default function ModulePageHeader({
  module,
  moduleContent,
  className = "",
}: ModulePageHeaderProps) {
  const moduleBanner = moduleBannersBySlug[module.slug] ?? getFallbackBanner(module);

  return (
    <section className={`space-y-4 ${className}`}>
      <PageBanner
        imageUrl={moduleBanner.imageUrl}
        title={moduleBanner.title}
        subtitle={moduleBanner.subtitle}
        pills={moduleBanner.pills}
      />

      <LessonIntro
        title={module.title}
        description={module.description}
        metadata={getModuleMetadata(module)}>
        {moduleContent.intro.overview}
      </LessonIntro>
    </section>
  );
}
