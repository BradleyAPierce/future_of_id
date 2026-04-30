import { createChatCompletionJson } from "./openAIClient";
import { validateMeaningfulReflectionResponse } from "./reflectionFeedback";
import {
  buildScenarioFeedbackMessages,
  type ScenarioFeedbackMessage,
} from "./scenarioFeedbackPrompt";
import {
  parseScenarioFeedback,
  type ScenarioFeedback,
} from "./scenarioFeedbackParser";

const MIN_RESPONSE_LENGTH = 20;
const MAX_RESPONSE_LENGTH = 1200;
const SCENARIO_RESPONSE_VALIDATION_ERROR =
  "Scenario response needs a more specific answer before feedback can be generated.";

const SALES_ONBOARDING_SCENARIO =
  "You are designing a scenario-based learning experience for a new sales onboarding program. The experience should help new sales representatives practice making realistic decisions, interpreting customer cues, and choosing next steps during an early customer conversation.";

type ServiceError = {
  message: string;
  status: number;
};

type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ServiceError };

export type ScenarioFeedbackRequest = {
  moduleSlug: string;
  response: string;
};

export function validateScenarioFeedbackRequest(
  body: unknown,
): Result<ScenarioFeedbackRequest> {
  const { moduleSlug, response } = body as {
    moduleSlug?: unknown;
    response?: unknown;
  };

  if (typeof moduleSlug !== "string") {
    return { ok: false, error: { message: "Module slug is required.", status: 400 } };
  }

  if (typeof response !== "string") {
    return {
      ok: false,
      error: { message: "Scenario response is required.", status: 400 },
    };
  }

  const trimmedResponse = response.trim();

  if (
    trimmedResponse.length < MIN_RESPONSE_LENGTH ||
    trimmedResponse.length > MAX_RESPONSE_LENGTH
  ) {
    return {
      ok: false,
      error: {
        message: `Scenario response must be between ${MIN_RESPONSE_LENGTH} and ${MAX_RESPONSE_LENGTH} characters.`,
        status: 400,
      },
    };
  }

  if (!validateMeaningfulReflectionResponse(trimmedResponse)) {
    return {
      ok: false,
      error: { message: SCENARIO_RESPONSE_VALIDATION_ERROR, status: 400 },
    };
  }

  return { ok: true, data: { moduleSlug, response: trimmedResponse } };
}

export async function generateScenarioFeedback(
  request: ScenarioFeedbackRequest,
): Promise<Result<ScenarioFeedback>> {
  const messages: ScenarioFeedbackMessage[] = buildScenarioFeedbackMessages({
    scenario: SALES_ONBOARDING_SCENARIO,
    moduleSlug: request.moduleSlug,
    response: request.response,
  });
  const completion = await createChatCompletionJson(messages);

  if (!completion.ok) {
    return completion;
  }

  return parseScenarioFeedback(completion.data);
}
