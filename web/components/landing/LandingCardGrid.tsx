import type { LandingCard } from "@/content/landing";
import Badge from "@/components/ui/Badge";
import Surface from "@/components/ui/Surface";

type LandingCardGridProps = {
  items: LandingCard[];
  columns?: "two" | "three";
  tone?: "default" | "elevated" | "primary" | "accent";
};

export default function LandingCardGrid({
  items,
  columns = "two",
  tone = "default",
}: LandingCardGridProps) {
  const gridColumns =
    columns === "three" ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className={`grid gap-5 ${gridColumns}`}>
      {items.map((item) => (
        <Surface
          key={item.title}
          tone={tone}
          padding="lg"
          className="flex min-h-full flex-col gap-3">
          {item.label && (
            <Badge tone={tone === "accent" ? "accent" : "primary"} className="w-fit">
              {item.label}
            </Badge>
          )}
          <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">
            {item.title}
          </h3>
          <p className="leading-7 text-[var(--muted)]">{item.description}</p>
        </Surface>
      ))}
    </div>
  );
}
