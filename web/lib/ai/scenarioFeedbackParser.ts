export type ScenarioFeedback = {
  summary: string;
  strengths: string[];
  gap: string;
  nextStep: string;
};

type ServiceError = {
  message: string;
  status: number;
};

type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ServiceError };

function isScenarioFeedback(value: unknown): value is ScenarioFeedback {
  if (!value || typeof value !== "object") {
    return false;
  }

  const feedback = value as Partial<ScenarioFeedback>;

  return (
    typeof feedback.summary === "string" &&
    Array.isArray(feedback.strengths) &&
    feedback.strengths.length === 2 &&
    feedback.strengths.every((strength) => typeof strength === "string") &&
    typeof feedback.gap === "string" &&
    typeof feedback.nextStep === "string"
  );
}

export function parseScenarioFeedback(content: string): Result<ScenarioFeedback> {
  let feedback: unknown;

  try {
    feedback = JSON.parse(content);
  } catch {
    return { ok: false, error: { message: "AI feedback failed.", status: 502 } };
  }

  if (!isScenarioFeedback(feedback)) {
    return { ok: false, error: { message: "AI feedback failed.", status: 502 } };
  }

  return {
    ok: true,
    data: {
      summary: feedback.summary.trim(),
      strengths: feedback.strengths.map((strength) => strength.trim()),
      gap: feedback.gap.trim(),
      nextStep: feedback.nextStep.trim(),
    },
  };
}
