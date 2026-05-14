import type { ModuleLayerSection } from "@/types/moduleContent";

type ModuleSectionItemsProps = {
  items?: ModuleLayerSection["items"];
};

export default function ModuleSectionItems({ items }: ModuleSectionItemsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.label}
          className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[color-mix(in_srgb,var(--surface)_72%,var(--surface-elevated))] p-4">
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
