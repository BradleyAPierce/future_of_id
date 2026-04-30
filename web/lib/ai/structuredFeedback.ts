export type ReflectionFeedback = {
  summary: string;
  strengths: string[];
  nextStep: string;
};

type ServiceError = {
  message: string;
  status: number;
};

type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ServiceError };

function isReflectionFeedback(value: unknown): value is ReflectionFeedback {
  if (!value || typeof value !== "object") {
    return false;
  }

  const feedback = value as Partial<ReflectionFeedback>;

  return (
    typeof feedback.summary === "string" &&
    Array.isArray(feedback.strengths) &&
    feedback.strengths.length === 2 &&
    feedback.strengths.every((strength) => typeof strength === "string") &&
    typeof feedback.nextStep === "string"
  );
}

export function parseReflectionFeedback(
  content: string,
): Result<ReflectionFeedback> {
  let feedback: unknown;

  try {
    feedback = JSON.parse(content);
  } catch {
    return { ok: false, error: { message: "AI feedback failed.", status: 502 } };
  }

  if (!isReflectionFeedback(feedback)) {
    return { ok: false, error: { message: "AI feedback failed.", status: 502 } };
  }

  return {
    ok: true,
    data: {
      summary: feedback.summary.trim(),
      strengths: feedback.strengths.map((strength) => strength.trim()),
      nextStep: feedback.nextStep.trim(),
    },
  };
}
