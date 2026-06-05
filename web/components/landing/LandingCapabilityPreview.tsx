import type { LandingCapability } from "@/content/landing";
import Badge from "@/components/ui/Badge";
import Surface from "@/components/ui/Surface";

type LandingCapabilityPreviewProps = {
  items: LandingCapability[];
};

export default function LandingCapabilityPreview({
  items,
}: LandingCapabilityPreviewProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item) => (
        <Surface
          key={item.title}
          padding="lg"
          className="flex min-h-full flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <span className="text-sm font-semibold text-[var(--primary)]">
              {item.label}
            </span>
            <Badge tone="accent" className="shrink-0">
              {item.focus}
            </Badge>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">
              {item.title}
            </h3>
            <p className="leading-7 text-[var(--muted)]">{item.description}</p>
          </div>
        </Surface>
      ))}
    </div>
  );
}
