type SiteHeaderProps = {
  isMobileNavOpen: boolean;
  onToggleMobileNav: () => void;
};

export default function SiteHeader({
  isMobileNavOpen,
  onToggleMobileNav,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--border)] bg-[var(--surface-elevated)] px-6 py-4 backdrop-blur lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-[var(--text)]">Future of ID</p>
          <p className="text-sm text-[var(--muted)]">
            Instructional Design Capability Lab
          </p>
        </div>

        <button
          type="button"
          aria-controls="course-navigation"
          aria-expanded={isMobileNavOpen}
          aria-label={
            isMobileNavOpen
              ? "Close course navigation"
              : "Open course navigation"
          }
          onClick={onToggleMobileNav}
          className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--text)] transition hover:bg-[var(--surface)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] lg:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}
