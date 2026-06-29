import Surface from "@/components/ui/Surface";

type DashboardStatProps = {
  value: number | string;
  label: string;
};

export default function DashboardStat({ value, label }: DashboardStatProps) {
  return (
    <Surface
      tone="elevated"
      padding="sm"
      className="rounded-[var(--radius-md)] shadow-none">
      <p className="text-2xl font-semibold text-[var(--text)]">{value}</p>
      <p className="mt-1 text-sm text-[var(--muted)]">{label}</p>
    </Surface>
  );
}
