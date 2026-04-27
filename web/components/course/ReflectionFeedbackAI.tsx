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
    <div className="mt-6 space-y-4 rounded-lg border border-gray-700 p-4">
      <textarea
        value={response}
        onChange={(event) => setResponse(event.target.value)}
        rows={5}
        maxLength={1200}
        placeholder="Write your reflection response..."
        className="w-full rounded-lg border border-gray-700 bg-transparent p-3 text-white placeholder:text-gray-500 focus:border-blue-400 focus:outline-none"
      />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          {trimmedResponse.length} / 1200 characters
        </p>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-400">
          {isLoading ? "Getting Feedback..." : "Get AI Feedback"}
        </button>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      {feedback && (
        <div className="space-y-4 rounded-lg bg-gray-900 p-4">
          <p className="text-gray-300">{feedback.summary}</p>

          <ul className="list-disc space-y-2 pl-5 text-gray-400">
            {feedback.strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>

          <p className="text-gray-300">
            <span className="font-medium text-white">Next step: </span>
            {feedback.nextStep}
          </p>
        </div>
      )}
    </div>
  );
}
