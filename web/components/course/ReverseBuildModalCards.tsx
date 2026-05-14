"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ModuleLayerSection } from "@/types/moduleContent";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type ReverseBuildModalCardsProps = {
  sections: ModuleLayerSection[];
};

export default function ReverseBuildModalCards({
  sections,
}: ReverseBuildModalCardsProps) {
  const [activeSection, setActiveSection] = useState<ModuleLayerSection | null>(
    null,
  );
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const closeModal = useCallback(() => {
    setActiveSection(null);
    window.requestAnimationFrame(() => lastFocusedElementRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!activeSection) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, closeModal]);

  function openModal(section: ModuleLayerSection) {
    lastFocusedElementRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setActiveSection(section);
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => {
          const itemCount = section.items?.length ?? 0;

          return (
            <article
              key={section.id}
              className="relative flex min-h-[220px] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--accent)] bg-[var(--surface)] p-5 pt-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h4 className="text-lg font-semibold text-[var(--text)]">
                    {section.title}
                  </h4>

                  {itemCount > 0 && (
                    <Badge tone="accent">
                      {itemCount} {itemCount === 1 ? "note" : "notes"}
                    </Badge>
                  )}
                </div>

                {section.description && (
                  <p
                    className="text-sm leading-relaxed text-[var(--muted)]"
                    style={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                      overflow: "hidden",
                    }}>
                    {section.description}
                  </p>
                )}
              </div>

              <Button
                type="button"
                onClick={() => openModal(section)}
                variant="accent"
                size="sm"
                className="mt-5 w-fit">
                View Design Notes
              </Button>
            </article>
          );
        })}
      </div>

      {activeSection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}>
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="reverse-build-modal-title"
            className="max-h-[80vh] w-full max-w-[720px] overflow-y-auto rounded-[var(--radius-xl)] border border-[var(--accent)] bg-[var(--surface)] text-[var(--text)] shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] bg-[color-mix(in_srgb,var(--accent)_10%,var(--surface))] p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-hover)]">
                  Reverse Build
                </p>
                <h4
                  id="reverse-build-modal-title"
                  className="mt-2 text-2xl font-semibold text-[var(--text)]">
                  {activeSection.title}
                </h4>
              </div>

              <Button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                variant="secondary"
                size="sm">
                Close
              </Button>
            </div>

            <div className="space-y-5 p-6 leading-relaxed text-[var(--muted)]">
              {activeSection.description && <p>{activeSection.description}</p>}

              {activeSection.items && activeSection.items.length > 0 && (
                <ul className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)]">
                  {activeSection.items.map((item) => (
                    <li
                      key={item.label}
                      className="border-b border-[var(--border)] bg-[var(--surface-elevated)] p-4 last:border-b-0">
                      <p className="font-medium text-[var(--text)]">
                        {item.label}
                      </p>
                      {item.description && (
                        <p className="mt-1">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
