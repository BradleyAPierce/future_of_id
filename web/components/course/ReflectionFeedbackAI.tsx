"use client";

import { useState } from "react";
import AIFeedbackPanel from "@/components/ai/AIFeedbackPanel";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import TextAreaField from "@/components/ui/TextAreaField";

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
    <Surface tone="accent" padding="sm" className="mt-6 space-y-6 rounded-lg">
      <TextAreaField
        value={response}
        onChange={setResponse}
        rows={5}
        maxLength={1200}
        placeholder="Write your reflection response..."
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          {trimmedResponse.length} / 1200 characters ({MIN_RESPONSE_LENGTH} minimum)
        </p>

        <Button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          variant="primary">
          {isLoading ? "Getting Feedback..." : "Get AI Feedback"}
        </Button>
      </div>

      {error && <p className="text-sm text-[var(--danger-hover)]">{error}</p>}

      {feedback && (
        <AIFeedbackPanel
          type="reflection"
          summary={feedback.summary}
          strengths={feedback.strengths}
          nextStep={feedback.nextStep}
        />
      )}
    </Surface>
  );
}
