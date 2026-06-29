import { SCENARIO_DECISIONS_BY_MODULE } from "@/data/scenarioDecisions";
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
const SCENARIO_FEEDBACK_MAX_TOKENS = 240;
const SCENARIO_RESPONSE_VALIDATION_ERROR =
  "Scenario response needs a more specific answer before feedback can be generated.";

type ServiceError = {
  message: string;
  status: number;
};

type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ServiceError };

export type ScenarioFeedbackRequest = {
  moduleSlug: string;
  scenarioId: string;
  response: string;
};

export function validateScenarioFeedbackRequest(
  body: unknown,
): Result<ScenarioFeedbackRequest> {
  const { moduleSlug, scenarioId, response } = body as {
    moduleSlug?: unknown;
    scenarioId?: unknown;
    response?: unknown;
  };

  if (typeof moduleSlug !== "string") {
    return { ok: false, error: { message: "Module slug is required.", status: 400 } };
  }

  if (typeof scenarioId !== "string") {
    return { ok: false, error: { message: "Scenario not found.", status: 400 } };
  }

  const moduleScenarios = SCENARIO_DECISIONS_BY_MODULE[moduleSlug];

  if (!moduleScenarios) {
    return {
      ok: false,
      error: { message: "Scenario module not found.", status: 400 },
    };
  }

  if (!moduleScenarios.some((scenario) => scenario.id === scenarioId)) {
    return { ok: false, error: { message: "Scenario not found.", status: 400 } };
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

  return { ok: true, data: { moduleSlug, scenarioId, response: trimmedResponse } };
}

export async function generateScenarioFeedback(
  request: ScenarioFeedbackRequest,
): Promise<Result<ScenarioFeedback>> {
  const moduleScenarios = SCENARIO_DECISIONS_BY_MODULE[request.moduleSlug];

  if (!moduleScenarios) {
    return {
      ok: false,
      error: { message: "Scenario module not found.", status: 400 },
    };
  }

  const scenarioDecision = moduleScenarios.find(
    (scenario) => scenario.id === request.scenarioId,
  );

  if (!scenarioDecision) {
    return { ok: false, error: { message: "Scenario not found.", status: 400 } };
  }

  const messages: ScenarioFeedbackMessage[] = buildScenarioFeedbackMessages({
    scenario: scenarioDecision.scenario,
    moduleSlug: request.moduleSlug,
    response: request.response,
  });
  const completion = await createChatCompletionJson(messages, {
    maxTokens: SCENARIO_FEEDBACK_MAX_TOKENS,
  });

  if (!completion.ok) {
    return completion;
  }

  return parseScenarioFeedback(completion.data);
}
