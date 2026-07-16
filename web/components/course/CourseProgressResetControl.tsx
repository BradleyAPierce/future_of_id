"use client";

import { useRef, useState } from "react";
import { useCourseProgress } from "@/lib/useCourseProgress";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";

type ResultMessage =
  | { tone: "success"; text: string }
  | { tone: "error"; text: string }
  | null;

export default function CourseProgressResetControl() {
  const {
    completedModules,
    progressStatus,
    persistence,
    isolatedModuleSlugs,
    resetCourseProgress,
  } = useCourseProgress();
  const [isConfirming, setIsConfirming] = useState(false);
  const [resultMessage, setResultMessage] = useState<ResultMessage>(null);
  const resetButtonRef = useRef<HTMLButtonElement | null>(null);
  const cancelButtonRef = useRef<HTMLButtonElement | null>(null);
  const resultMessageRef = useRef<HTMLParagraphElement | null>(null);

  const hasProgress = completedModules.length > 0;
  const hasUnreadableProgress =
    progressStatus === "invalid" || progressStatus === "unsupported";
  const canReset = hasProgress || hasUnreadableProgress;

  function beginConfirmation() {
    setResultMessage(null);
    setIsConfirming(true);
    window.requestAnimationFrame(() => cancelButtonRef.current?.focus());
  }

  function cancelReset() {
    setIsConfirming(false);
    window.requestAnimationFrame(() => resetButtonRef.current?.focus());
  }

  function confirmReset() {
    const result = resetCourseProgress();
    setIsConfirming(false);

    if (result.ok) {
      setResultMessage({
        tone: "success",
        text: "Course completion progress was reset in this browser. Module work and Reflection were not cleared.",
      });
    } else {
      setResultMessage({
        tone: "error",
        text: "Course completion progress could not be reset. Your existing local progress may still be present.",
      });
    }

    window.requestAnimationFrame(() => resultMessageRef.current?.focus());
  }

  return (
    <Surface padding="md" className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-[var(--text)]">
          Progress saved in this browser
        </h2>
        <p className="text-sm leading-6 text-[var(--muted)]">
          Course completion progress is stored locally when browser storage is
          available. It is not connected to an account, backed up, or synced
          across devices. Clearing browser data or using private browsing may
          remove it.
        </p>
        <p className="text-sm leading-6 text-[var(--muted)]">
          Resetting course progress clears completion markers only. It does not
          clear module learner artifacts or Reflection records.
        </p>
      </div>

      {persistence === "session-only" && (
        <p className="text-sm font-medium text-[var(--danger)]" role="status">
          Browser storage is unavailable. Current progress may last only for
          this session.
        </p>
      )}

      {(progressStatus === "invalid" || progressStatus === "unsupported") && (
        <p className="text-sm font-medium text-[var(--danger)]" role="status">
          Saved completion progress could not be read safely. Course access is
          still available, and you can reset the affected local progress below.
        </p>
      )}

      {isolatedModuleSlugs.length > 0 && (
        <p className="text-sm text-[var(--muted)]" role="status">
          Unrecognized completion entries were ignored and do not count toward
          course progress.
        </p>
      )}

      {!isConfirming ? (
        <Button
          ref={resetButtonRef}
          type="button"
          variant="danger"
          className="min-h-11"
          disabled={!canReset}
          onClick={beginConfirmation}>
          Reset course completion progress
        </Button>
      ) : (
        <div
          className="space-y-3 rounded-[var(--radius-lg)] border border-[var(--danger)] bg-[color-mix(in_srgb,var(--danger)_8%,var(--surface))] p-4"
          role="group"
          aria-labelledby="course-progress-reset-confirmation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              cancelReset();
            }
          }}>
          <p
            id="course-progress-reset-confirmation"
            className="font-medium text-[var(--text)]">
            Reset completion markers in this browser? Module work and Reflection
            will be preserved.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              ref={cancelButtonRef}
              type="button"
              variant="secondary"
              className="min-h-11"
              onClick={cancelReset}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="danger"
              className="min-h-11"
              onClick={confirmReset}>
              Confirm progress reset
            </Button>
          </div>
        </div>
      )}

      {resultMessage && (
        <p
          ref={resultMessageRef}
          tabIndex={-1}
          role={resultMessage.tone === "error" ? "alert" : "status"}
          className={`rounded-sm text-sm font-medium outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 ${
            resultMessage.tone === "error"
              ? "text-[var(--danger)]"
              : "text-[var(--success)]"
          }`}>
          {resultMessage.text}
        </p>
      )}
    </Surface>
  );
}
