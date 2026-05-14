import type { HTMLAttributes, ReactNode } from "react";

type SurfaceTone =
  | "default"
  | "elevated"
  | "primary"
  | "accent"
  | "success"
  | "danger";

type SurfacePadding = "none" | "sm" | "md" | "lg";

type SurfaceProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: SurfaceTone;
  padding?: SurfacePadding;
  interactive?: boolean;
};

const toneClasses: Record<SurfaceTone, string> = {
  default: "border-[var(--border)] bg-[var(--surface)]",
  elevated: "border-[var(--border)] bg-[var(--surface-elevated)]",
  primary:
    "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_10%,var(--surface))]",
  accent:
    "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))]",
  success:
    "border-[var(--success)] bg-[color-mix(in_srgb,var(--success)_12%,transparent)]",
  danger:
    "border-[var(--danger)] bg-[color-mix(in_srgb,var(--danger)_14%,transparent)]",
};

const paddingClasses: Record<SurfacePadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export default function Surface({
  children,
  tone = "default",
  padding = "md",
  interactive = false,
  className = "",
  ...props
}: SurfaceProps) {
  const interactiveClasses = interactive
    ? "transition hover:border-[var(--primary)] hover:shadow-[var(--shadow-md)]"
    : "";

  return (
    <div
      className={`rounded-[var(--radius-lg)] border text-[var(--text)] shadow-[var(--shadow-sm)] ${toneClasses[tone]} ${paddingClasses[padding]} ${interactiveClasses} ${className}`}
      {...props}>
      {children}
    </div>
  );
}
