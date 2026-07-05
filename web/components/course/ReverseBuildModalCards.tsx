"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ModuleLayerSection } from "@/types/moduleContent";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type ReverseBuildModalCardsProps = {
  intro?: string;
  sections: ModuleLayerSection[];
};

type ReverseBuildLayer = {
  label: string;
  description: string;
  mentorPrompt: string;
  order: number;
};

function getReverseBuildLayer(section: ModuleLayerSection): ReverseBuildLayer {
  if (section.id === "what-this-module-is-solving") {
    return {
      label: "The Problem",
      description:
        "What this experience was built to solve before any design choices were made.",
      mentorPrompt:
        "Look for the performance, learning, or judgment gap the experience is trying to expose.",
      order: 2,
    };
  }

  if (section.id === "proven-practice-vs-new-approach") {
    return {
      label: "Instructional Foundations",
      description:
        "How modern practice connects back to established instructional design and learning science.",
      mentorPrompt:
        "Read this as a bridge to foundations such as ADDIE, Backward Design, performance consulting, cognitive load, deliberate practice, retrieval practice, or related learning science.",
      order: 3,
    };
  }

  if (section.id === "key-design-decisions") {
    return {
      label: "Design Decisions",
      description:
        "Why the experience was scoped, sequenced, simplified, or emphasized this way.",
      mentorPrompt:
        "This is where the build reveals professional judgment rather than a single correct answer.",
      order: 4,
    };
  }

  if (section.id === "how-ai-supported-the-build") {
    return {
      label: "AI Collaboration",
      description:
        "Where AI accelerated exploration, variation, critique, or drafting without owning the decision.",
      mentorPrompt:
        "Notice where AI supported the work and where human judgment refined, rejected, or constrained it.",
      order: 5,
    };
  }

  if (
    section.id === "tradeoffs-and-constraints" ||
    section.id === "where-this-could-break"
  ) {
    return {
      label: "Design Trade-offs",
      description:
        "Where the experience balances realism, clarity, complexity, guidance, autonomy, automation, and human review.",
      mentorPrompt:
        "Trade-offs are not mistakes. They are the visible shape of instructional design judgment.",
      order: 6,
    };
  }

  if (
    section.id === "what-another-designer-can-reuse" ||
    section.id === "reflection-question" ||
    section.id === "reflection"
  ) {
    return {
      label: "Learning Science & Transfer",
      description:
        "How this reasoning can transfer into future instructional design practice.",
      mentorPrompt:
        "Ask what this way of thinking might change in your own design work.",
      order: 7,
    };
  }

  return {
    label: "Reveal the Thinking",
    description:
      "A piece of professional reasoning behind the learning experience.",
    mentorPrompt:
      "Use this layer to study how the experience was shaped, questioned, and refined.",
    order: 4,
  };
}

export default function ReverseBuildModalCards({
  intro,
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

  const orderedSections = sections
    .map((section, index) => ({
      section,
      layer: getReverseBuildLayer(section),
      index,
    }))
    .sort((a, b) => a.layer.order - b.layer.order || a.index - b.index);
  const activeLayer = activeSection
    ? getReverseBuildLayer(activeSection)
    : null;

  return (
    <>
      <div className="space-y-5 rounded-[var(--radius-xl)] border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface))] p-5 shadow-[var(--shadow-sm)] sm:p-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent-hover)]">
            Inspect the Build
          </p>
          <h4 className="max-w-3xl text-2xl font-semibold leading-tight text-[var(--text)]">
            {"You just experienced this as a learner. Now let's inspect it as an instructional designer."}
          </h4>
          <p className="max-w-4xl leading-7 text-[var(--muted)]">
            Reverse Build reconstructs the learning experience, not the module
            topic or the code. It reveals the challenge you practiced, the
            thinking behind the design, how AI supported the work, and the
            trade-offs that shaped the experience.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {[
            "The learning challenge",
            "The decision you practiced",
            "The AI-supported critique",
            "Reflection and transfer",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[var(--radius-lg)] border border-[var(--accent)] bg-[var(--surface)] p-3 text-sm font-medium leading-snug text-[var(--text)]">
              {item}
            </div>
          ))}
        </div>
      </div>

      {intro && (
        <div className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent-hover)]">
            Reconstruct the Experience
          </p>
          <p className="mt-3 leading-7 text-[var(--muted)]">{intro}</p>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {orderedSections.map(({ section, layer }) => {
          const itemCount = section.items?.length ?? 0;

          return (
            <article
              key={section.id}
              className="relative flex min-h-[220px] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--accent)] bg-[var(--surface)] p-5 pt-6 shadow-[var(--shadow-sm)] transition hover:shadow-[var(--shadow-md)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--accent)]" />
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent-hover)]">
                      {layer.label}
                    </p>
                    <h4 className="text-lg font-semibold text-[var(--text)]">
                      {section.title}
                    </h4>
                  </div>

                  {itemCount > 0 && (
                    <Badge tone="accent">
                      {itemCount} {itemCount === 1 ? "move" : "moves"}
                    </Badge>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  {layer.description}
                </p>

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
                Reveal the Thinking
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
                  Inspect the Build{activeLayer ? ` · ${activeLayer.label}` : ""}
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
              {activeLayer && (
                <div className="rounded-[var(--radius-lg)] border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_8%,var(--surface))] p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent-hover)]">
                    Mentorship lens
                  </p>
                  <p className="mt-2 text-[var(--text)]">
                    {activeLayer.mentorPrompt}
                  </p>
                </div>
              )}

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

      <div className="rounded-[var(--radius-xl)] border border-[var(--accent)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] sm:p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--accent-hover)]">
          Transfer to Your Practice
        </p>
        <h4 className="mt-2 text-xl font-semibold leading-tight text-[var(--text)]">
          What might this way of thinking change in your own instructional
          design practice?
        </h4>
        <p className="mt-3 leading-7 text-[var(--muted)]">
          Reverse Build is not a correct-answer key. It is professional
          reasoning made visible so you can study it, question it, adapt it, and
          apply it. Professional judgment is learnable.
        </p>
      </div>
    </>
  );
}
