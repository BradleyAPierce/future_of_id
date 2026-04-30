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

export const SALES_ONBOARDING_SCENARIO =
  "You are designing a scenario-based learning experience for a new sales onboarding program. The experience should help new sales representatives practice making realistic decisions, interpreting customer cues, and choosing next steps during an early customer conversation.";

const AI_CONVERSATION_GOVERNANCE_SCENARIO =
  "You are designing an AI-driven conversation simulation for sales onboarding. The sales team wants the AI customer to vary responses so practice feels realistic, but legal and brand leaders want every customer objection and recommended reply pre-approved by SMEs. Decide how you would balance adaptive conversation practice with accuracy, brand alignment, and review control.";

export const SCENARIO_DECISIONS = [
  {
    id: "sales-onboarding-decision",
    title: "Sales Onboarding Decision Practice",
    scenario: SALES_ONBOARDING_SCENARIO,
  },
  {
    id: "ai-conversation-governance",
    title: "AI Conversation Governance",
    scenario: AI_CONVERSATION_GOVERNANCE_SCENARIO,
  },
  {
    id: "adaptive-simulation-logic",
    title: "Adaptive Simulation Logic",
    scenario:
      "You are designing an adaptive sales onboarding simulation. The platform can adjust scenario difficulty based on prior responses, confidence ratings, and early performance patterns. Sales leaders want high performers moved quickly into advanced challenges, while new or struggling reps receive more guided practice. You are concerned that limited data could misclassify learners, reinforce early mistakes, or create uneven practice experiences. Decide how you would define the adaptive logic and what safeguards would keep the experience fair, effective, and instructionally controlled.",
  },
];

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
  const scenarioDecision = SCENARIO_DECISIONS.find(
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
  const completion = await createChatCompletionJson(messages);

  if (!completion.ok) {
    return completion;
  }

  return parseScenarioFeedback(completion.data);
}
