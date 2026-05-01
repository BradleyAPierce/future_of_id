"use client";

import { useState } from "react";

const MIN_RESPONSE_LENGTH = 10;

type ScenarioDecisionAIProps = {
  moduleSlug: string;
  scenarios: {
    id: string;
    title: string;
    progressionLabel: string;
    focus: string;
    scenario: string;
  }[];
};

type ScenarioFeedback = {
  summary: string;
  strengths: string[];
  gap: string;
  nextStep: string;
};

export default function ScenarioDecisionAI({
  moduleSlug,
  scenarios,
}: ScenarioDecisionAIProps) {
  if (scenarios.length === 0) {
    return null;
  }

  const [selectedScenarioId, setSelectedScenarioId] = useState(
    scenarios[0]?.id ?? "",
  );
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState<ScenarioFeedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const selectedScenario = scenarios.find(
    (scenario) => scenario.id === selectedScenarioId,
  );
  const selectedScenarioIndex = scenarios.findIndex(
    (scenario) => scenario.id === selectedScenarioId,
  );
  const nextScenario = scenarios[selectedScenarioIndex + 1];
  const trimmedResponse = response.trim();
  const canSubmit =
    Boolean(selectedScenario) &&
    trimmedResponse.length >= MIN_RESPONSE_LENGTH &&
    !isLoading;

  function handleScenarioChange(scenarioId: string) {
    if (scenarioId === selectedScenarioId) {
      return;
    }

    setSelectedScenarioId(scenarioId);
    setResponse("");
    setError(null);
    setFeedback(null);
  }

  async function handleSubmit() {
    if (!canSubmit) {
      return;
    }

    setIsLoading(true);
    setError(null);
    setFeedback(null);

    try {
      const apiResponse = await fetch("/api/scenario-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          moduleSlug,
          scenarioId: selectedScenarioId,
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
    <div className="mt-6 space-y-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text)] shadow-sm">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary-hover)]">
          Practice sequence
        </p>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          These scenarios build in complexity from realistic practice design to
          governed AI conversations and adaptive simulation logic. You can move
          in order or select the decision point most relevant to your work.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          {scenarios.map((scenarioOption) => (
            <button
              key={scenarioOption.id}
              type="button"
              onClick={() => handleScenarioChange(scenarioOption.id)}
              className={`rounded-lg border px-4 py-3 text-left text-sm transition ${
                selectedScenarioId === scenarioOption.id
                  ? "border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_14%,transparent)] text-[var(--text)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)] hover:bg-[var(--surface-elevated)]"
              }`}>
              <span className="block text-xs font-medium uppercase tracking-wide text-[var(--primary-hover)]">
                {scenarioOption.progressionLabel}
              </span>
              <span className="mt-1 block font-medium text-[var(--text)]">
                {scenarioOption.focus}
              </span>
              <span className="mt-1 block text-[var(--muted)]">
                {scenarioOption.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-[var(--primary)] bg-[color-mix(in_srgb,var(--primary)_14%,var(--surface-elevated))] p-5 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary-hover)]">
          Scenario
        </p>
        <p className="mt-3 text-[var(--text)]">{selectedScenario?.scenario}</p>
      </div>

      <textarea
        value={response}
        onChange={(event) => setResponse(event.target.value)}
        rows={5}
        maxLength={1200}
        placeholder="Describe your design decision..."
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
        <>
          <div className="space-y-6 rounded-lg bg-[var(--surface-elevated)] p-4 shadow-sm">
            <p className="text-[var(--text)]">{feedback.summary}</p>

            <ul className="list-disc space-y-2 rounded-lg border border-[var(--success)] bg-[color-mix(in_srgb,var(--success)_12%,transparent)] p-4 pl-8 text-[var(--success-hover)]">
              {feedback.strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>

            <p className="rounded-lg border border-[var(--danger)] bg-[color-mix(in_srgb,var(--danger)_14%,transparent)] p-4 text-[var(--danger-hover)]">
              <span className="font-medium text-[var(--text)]">Gap: </span>
              {feedback.gap}
            </p>

            <p className="rounded-lg border border-[var(--accent)] bg-[color-mix(in_srgb,var(--accent)_12%,transparent)] p-4 text-[var(--accent-hover)]">
              <span className="font-medium text-[var(--text)]">Next step: </span>
              {feedback.nextStep}
            </p>
          </div>

          <div className="space-y-3 rounded-lg border border-[var(--border)] p-4">
            <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary-hover)]">
              Apply the feedback
            </p>

            <p className="text-sm leading-relaxed text-[var(--muted)]">
              Before moving on, revise your decision in one sentence: what would
              you keep, and what would you adjust based on this feedback?
            </p>

            <p className="text-sm leading-relaxed text-[var(--muted)]">
              {nextScenario
                ? `Next, try ${nextScenario.focus} to continue into the next design tension.`
                : "After this scenario, compare your three decisions: how did your design priorities shift as complexity increased?"}
            </p>

            {nextScenario && (
              <button
                type="button"
                onClick={() => handleScenarioChange(nextScenario.id)}
                className="rounded-lg bg-[var(--success-hover)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:bg-[var(--success)]">
                Move to {nextScenario.focus}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
