import Link from "next/link";
import type { LandingLink } from "@/content/landing";
import Button from "@/components/ui/Button";

type LandingHeaderProps = {
  navItems: LandingLink[];
  cta: LandingLink;
};

export default function LandingHeader({ navItems, cta }: LandingHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--surface-elevated)_92%,transparent)] px-5 py-4 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="w-fit">
          <span className="block text-lg font-semibold text-[var(--text)]">
            Future of ID
          </span>
          <span className="block text-sm text-[var(--muted)]">
            Practical instructional design implementation
          </span>
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <nav aria-label="Public navigation" className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[var(--radius-sm)] px-2 py-1 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]">
                {item.label}
              </Link>
            ))}
          </nav>

          <Button href={cta.href} size="sm" className="w-fit">
            {cta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}
