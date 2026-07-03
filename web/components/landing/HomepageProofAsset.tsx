import Image from "next/image";
import type { HomepageProofAsset as HomepageProofAssetConfig } from "@/data/homepageProofs";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";

type HomepageProofAssetProps = {
  asset: HomepageProofAssetConfig;
};

export default function HomepageProofAsset({ asset }: HomepageProofAssetProps) {
  return (
    <Surface
      tone="elevated"
      padding="none"
      className="grid overflow-hidden rounded-[var(--radius-xl)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.2fr)]">
      <div className="space-y-5 p-6 sm:p-8">
        <Badge tone="primary">{asset.eyebrow}</Badge>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
            {asset.title}
          </h2>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            {asset.description}
          </p>
        </div>

        {asset.href && (
          <Button href={asset.href} variant="secondary">
            Explore Capability Map
          </Button>
        )}
      </div>

      <figure className="border-t border-[var(--border)] bg-[var(--surface)] lg:border-l lg:border-t-0">
        <div className="relative aspect-[640/287] w-full">
          <Image
            src={asset.imageUrl}
            alt={asset.imageAlt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>

        {asset.caption && (
          <figcaption className="border-t border-[var(--border)] px-5 py-3 text-sm text-[var(--muted)]">
            {asset.caption}
          </figcaption>
        )}
      </figure>
    </Surface>
  );
}
