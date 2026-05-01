import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "tertiary";
};

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-[var(--primary-hover)] text-[var(--bg)] shadow-sm hover:bg-[var(--primary)] hover:shadow-md",
    secondary:
      "border border-[var(--border)] text-[var(--text)] shadow-sm hover:border-[var(--primary)] hover:bg-[var(--surface-elevated)] hover:shadow-md",
    tertiary:
      "border border-[var(--accent)] text-[var(--accent)] shadow-sm hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] hover:shadow-md",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[var(--primary-hover)] ${variantClasses}`}>
      {children}
    </Link>
  );
}
