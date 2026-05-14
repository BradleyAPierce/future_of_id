import type { HTMLAttributes, ReactNode } from "react";

type FeedbackTone = "default" | "primary" | "accent" | "success" | "danger";

type FeedbackPanelProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: FeedbackTone;
  title?: string;
};

const toneClasses: Record<FeedbackTone, string> = {
  default: "border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text)]",
  primary:
    "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_12%,transparent)] text-[var(--text)]",
  accent:
    "border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] text-[var(--accent-hover)]",
  success:
    "border-[var(--success)] bg-[color-mix(in_srgb,var(--success)_12%,transparent)] text-[var(--success-hover)]",
  danger:
    "border-[var(--danger)] bg-[color-mix(in_srgb,var(--danger)_14%,transparent)] text-[var(--danger-hover)]",
};

export default function FeedbackPanel({
  children,
  tone = "default",
  title,
  className = "",
  ...props
}: FeedbackPanelProps) {
  return (
    <div
      className={`rounded-[var(--radius-md)] border p-4 leading-relaxed ${toneClasses[tone]} ${className}`}
      {...props}>
      {title && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--text)]">
          {title}
        </p>
      )}
      {children}
    </div>
  );
}
