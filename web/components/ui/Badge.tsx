import type { HTMLAttributes, ReactNode } from "react";

type BadgeTone = "default" | "primary" | "accent" | "success" | "danger";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  default:
    "border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text)]",
  primary:
    "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--primary)]",
  accent:
    "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent-hover)]",
  success:
    "border-[var(--success)] bg-[color-mix(in_srgb,var(--success)_12%,transparent)] text-[var(--success-hover)]",
  danger:
    "border-[var(--danger)] bg-[color-mix(in_srgb,var(--danger)_12%,transparent)] text-[var(--danger-hover)]",
};

export default function Badge({
  children,
  tone = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${toneClasses[tone]} ${className}`}
      {...props}>
      {children}
    </span>
  );
}
