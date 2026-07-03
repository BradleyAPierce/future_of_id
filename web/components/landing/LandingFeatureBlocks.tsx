import type { LandingCard } from "@/content/landing";
import type { HomepageProofAsset } from "@/data/homepageProofs";

import Badge from "@/components/ui/Badge";
import LightboxImage from "@/components/ui/LightboxImage";
import Surface from "@/components/ui/Surface";

type LandingFeatureBlocksProps = {
  items: LandingCard[];
  image: Pick<
    HomepageProofAsset,
    "imageUrl" | "imageAlt" | "caption" | "cropBottom"
  >;
};

export default function LandingFeatureBlocks({
  items,
  image,
}: LandingFeatureBlocksProps) {
  const imageClassName = image.cropBottom
    ? "object-cover object-top"
    : "object-contain";

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
      <Surface padding="none" className="overflow-hidden">
        <figure>
          <LightboxImage
            src={image.imageUrl}
            alt={image.imageAlt}
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="relative block aspect-[4/5] w-full bg-[var(--surface-elevated)]"
            imageClassName={imageClassName}
            previewClassName="h-[min(82vh,900px)] w-[min(92vw,720px)]"
            previewImageClassName={imageClassName}
          />
          {image.caption ? (
            <figcaption className="border-t border-[var(--border)] px-5 py-4 text-sm leading-6 text-[var(--text-muted)]">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      </Surface>

      <div className="grid gap-4">
        {items.map((item, index) => (
          <Surface key={item.title} className="p-5">
            <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start">
              <Badge tone={index === 1 ? "accent" : "default"}>
                {String(index + 1).padStart(2, "0")}
              </Badge>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  {item.description}
                </p>
              </div>
            </div>
          </Surface>
        ))}
      </div>
    </div>
  );
}
