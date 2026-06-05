import type { AboutCard } from "@/content/about";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type AboutCardGridProps = {
  items: AboutCard[];
  columns?: "two" | "three";
};

export default function AboutCardGrid({
  items,
  columns = "two",
}: AboutCardGridProps) {
  const gridColumns =
    columns === "three" ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className={`grid gap-5 ${gridColumns}`}>
      {items.map((item) => (
        <Card key={item.title} className="flex min-h-full flex-col gap-3 p-6">
          {item.label && (
            <Badge tone="accent" className="w-fit">
              {item.label}
            </Badge>
          )}
          <h3 className="text-xl font-semibold leading-tight text-[var(--text)]">
            {item.title}
          </h3>
          <p className="leading-7 text-[var(--muted)]">{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
