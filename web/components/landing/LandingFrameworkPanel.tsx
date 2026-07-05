import type { ReactNode } from "react";

import type { LearningFramework } from "@/data/learningFrameworks";

import Badge from "@/components/ui/Badge";
import LightboxImage from "@/components/ui/LightboxImage";
import Surface from "@/components/ui/Surface";

type LandingFrameworkPanelProps = {
  framework: LearningFramework;
  description?: string;
  children?: ReactNode;
};

export default function LandingFrameworkPanel({
  framework,
  description,
  children,
}: LandingFrameworkPanelProps) {
  const hasImage = Boolean(framework.imageUrl && framework.alt);

  return (
    <Surface tone="elevated" padding="none" className="overflow-hidden">
      <div
        className={`grid gap-0 lg:items-stretch ${
          hasImage
            ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)]"
            : ""
        }`}>
        <div className="space-y-5 p-6 sm:p-7">
          <Badge tone="primary">Learning framework</Badge>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--text)]">
              {framework.title}
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
              {framework.transformationalQuestion}
            </p>
            <p className="leading-7 text-[var(--muted)]">
              {description ?? framework.mentalModel}
            </p>
          </div>
        </div>

        {hasImage ? (
          <div className="border-t border-[var(--border)] bg-white lg:border-l lg:border-t-0">
            <LightboxImage
              src={framework.imageUrl as string}
              alt={framework.alt as string}
              sizes="(min-width: 1024px) 720px, 100vw"
              className="relative block aspect-video w-full bg-white"
              imageClassName="object-contain"
              previewClassName="aspect-video w-[min(92vw,1180px)]"
              previewImageClassName="object-contain"
            />
          </div>
        ) : null}
      </div>

      {children ? (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
          {children}
        </div>
      ) : null}
    </Surface>
  );
}
