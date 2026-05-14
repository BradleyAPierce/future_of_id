import type { ModuleLayerSection } from "@/types/moduleContent";

type ModuleSectionItemsProps = {
  items?: ModuleLayerSection["items"];
};

export default function ModuleSectionItems({ items }: ModuleSectionItemsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]">
      {items.map((item) => (
        <li
          key={item.label}
          className="border-b border-[var(--border)] p-4 last:border-b-0">
          <p className="font-medium text-[var(--text)]">{item.label}</p>
          {item.description && (
            <p className="mt-2 leading-7 text-[var(--muted)]">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
