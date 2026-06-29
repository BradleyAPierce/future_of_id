import type { ReactNode } from "react";

type SectionHeaderVariant = "default" | "compact";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  variant?: SectionHeaderVariant;
  className?: string;
};

const titleClasses: Record<SectionHeaderVariant, string> = {
  default:
    "mt-3 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl",
  compact: "mt-2 text-2xl font-semibold text-[var(--text)]",
};

const descriptionClasses: Record<SectionHeaderVariant, string> = {
  default: "mt-4 text-lg leading-relaxed text-[var(--muted)]",
  compact: "mt-2 text-[var(--muted)]",
};

const contentWidthClasses: Record<SectionHeaderVariant, string> = {
  default: "max-w-3xl",
  compact: "max-w-2xl",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  variant = "default",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-3 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className={contentWidthClasses[variant]}>
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            {eyebrow}
          </p>
        )}
        <h2 className={titleClasses[variant]}>{title}</h2>
        {description && <p className={descriptionClasses[variant]}>{description}</p>}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
