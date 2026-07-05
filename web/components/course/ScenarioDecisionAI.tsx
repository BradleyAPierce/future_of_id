"use client";

import { useState } from "react";
import AIFeedbackPanel from "@/components/ai/AIFeedbackPanel";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import TextAreaField from "@/components/ui/TextAreaField";

const MIN_RESPONSE_LENGTH = 20;

type ScenarioDecisionAIProps = {
  moduleSlug: string;
  practiceGuidance?: string;
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
  practiceGuidance,
  scenarios,
}: ScenarioDecisionAIProps) {
  const [selectedScenarioId, setSelectedScenarioId] = useState(
    scenarios[0]?.id ?? "",
  );
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState<ScenarioFeedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (scenarios.length === 0) {
    return null;
  }

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
    <Surface
      tone="primary"
      padding="md"
      className="mt-6 space-y-6 rounded-[var(--radius-xl)] shadow-[var(--shadow-sm)]">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary-hover)]">
          Design practice
        </p>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          Choose a professional design decision, explain your reasoning, and use
          AI feedback as a structured critique. You can move in order or select
          the decision point most relevant to your work.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          {scenarios.map((scenarioOption) => (
            <button
              key={scenarioOption.id}
              type="button"
              onClick={() => handleScenarioChange(scenarioOption.id)}
              className={`rounded-[var(--radius-lg)] border px-4 py-3 text-left text-sm shadow-[var(--shadow-sm)] transition ${
                selectedScenarioId === scenarioOption.id
                  ? "border-[var(--primary)] bg-[var(--surface)] text-[var(--text)] shadow-[var(--shadow-md)]"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--primary)] hover:bg-[var(--surface-elevated)] hover:shadow-[var(--shadow-md)]"
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

      <Surface
        tone="elevated"
        padding="md"
        className="rounded-[var(--radius-lg)] border-l-4 border-l-[var(--primary)]">
        <p className="text-sm font-medium uppercase tracking-wide text-[var(--primary-hover)]">
          Scenario
        </p>
        <p className="mt-3 text-[var(--text)]">{selectedScenario?.scenario}</p>
      </Surface>

      <TextAreaField
        value={response}
        onChange={setResponse}
        rows={5}
        maxLength={1200}
        minLength={MIN_RESPONSE_LENGTH}
        error={error}
        helperText={practiceGuidance}
        showCharacterCount
        placeholder="Describe your design decision..."
      />

      <div className="flex justify-end">
        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          variant="primary">
          {isLoading ? "Getting Feedback..." : "Get AI Feedback"}
        </Button>
      </div>

      {feedback && (
        <>
          <AIFeedbackPanel
            type="scenario"
            summary={feedback.summary}
            strengths={feedback.strengths}
            gap={feedback.gap}
            nextStep={feedback.nextStep}
          />

          <Surface
            padding="sm"
            className="space-y-3 rounded-[var(--radius-lg)] shadow-none">
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
              <Button
                type="button"
                onClick={() => handleScenarioChange(nextScenario.id)}
                variant="secondary"
                size="sm"
                className="w-fit">
                Move to {nextScenario.focus}
              </Button>
            )}
          </Surface>
        </>
      )}
    </Surface>
  );
}
