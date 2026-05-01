"use client";

import { useState } from "react";

const MIN_RESPONSE_LENGTH = 20;

type ReflectionFeedbackAIProps = {
  moduleSlug: string;
};

type ReflectionFeedback = {
  summary: string;
  strengths: string[];
  nextStep: string;
};

export default function ReflectionFeedbackAI({
  moduleSlug,
}: ReflectionFeedbackAIProps) {
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState<ReflectionFeedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const trimmedResponse = response.trim();
  const canSubmit =
    trimmedResponse.length >= MIN_RESPONSE_LENGTH && !isLoading;

  async function handleSubmit() {
    if (!canSubmit) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const apiResponse = await fetch("/api/reflection-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          moduleSlug,
          response: trimmedResponse,
        }),
      });

      const data = await apiResponse.json();

      if (!apiResponse.ok) {
        setError(data?.error ?? "AI feedback failed.");
        return;
      }

      setFeedback(data);
    } catch {
      setError("AI feedback failed.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-6 space-y-6 rounded-lg border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,var(--surface-elevated))] p-4 text-[var(--text)] shadow-sm">
      <textarea
        value={response}
        onChange={(event) => setResponse(event.target.value)}
        rows={5}
        maxLength={1200}
        placeholder="Write your reflection response..."
        className="w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3 text-[var(--text)] placeholder:text-[var(--muted)] focus:border-[var(--primary)] focus:outline-none"
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          {trimmedResponse.length} / 1200 characters
        </p>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="rounded-lg bg-[var(--primary-hover)] px-5 py-3 font-medium text-[var(--bg)] transition hover:bg-[var(--primary)] disabled:cursor-not-allowed disabled:bg-[var(--border)] disabled:text-[var(--muted)]">
          {isLoading ? "Getting Feedback..." : "Get AI Feedback"}
        </button>
      </div>

      {error && <p className="text-sm text-[var(--danger-hover)]">{error}</p>}

      {feedback && (
        <div className="space-y-5 rounded-lg bg-[var(--surface)] p-4 shadow-sm">
          <p className="text-[var(--text)]">{feedback.summary}</p>

          <ul className="list-disc space-y-2 rounded-lg border border-[var(--success)] bg-[color-mix(in_srgb,var(--success)_12%,transparent)] p-4 pl-8 text-[var(--success-hover)]">
            {feedback.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>

          <p className="rounded-lg border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] p-4 text-[var(--accent-hover)]">
            <span className="font-medium text-[var(--text)]">Next step: </span>
            {feedback.nextStep}
          </p>
        </div>
      )}
    </div>
  );
}
