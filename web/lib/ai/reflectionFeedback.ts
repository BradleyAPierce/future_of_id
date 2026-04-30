import { moduleContentBySlug } from "@/data/moduleContent";
import { modules } from "@/data/modules";
import { createChatCompletionJson } from "./openAIClient";
import { buildReflectionFeedbackMessages } from "./reflectionFeedbackPrompt";
import {
  parseReflectionFeedback,
  type ReflectionFeedback,
} from "./structuredFeedback";

const MIN_RESPONSE_LENGTH = 20;
const MAX_RESPONSE_LENGTH = 1200;
const MIN_MEANINGFUL_WORD_COUNT = 6;
const GENERIC_RESPONSE_WORD_LIMIT = 10;
const SEMANTIC_VALIDATION_ERROR =
  "Reflection response needs a more specific answer before feedback can be generated.";

type ServiceError = {
  message: string;
  status: number;
};

type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ServiceError };

export type ReflectionFeedbackRequest = {
  moduleSlug: string;
  response: string;
};

type ReflectionFeedbackContext = ReflectionFeedbackRequest & {
  moduleTitle: string;
  reflectionPrompt: string;
};

export function validateReflectionFeedbackRequest(
  body: unknown,
): Result<ReflectionFeedbackRequest> {
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
      error: { message: "Reflection response is required.", status: 400 },
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
        message: `Reflection response must be between ${MIN_RESPONSE_LENGTH} and ${MAX_RESPONSE_LENGTH} characters.`,
        status: 400,
      },
    };
  }

  if (!validateMeaningfulReflectionResponse(trimmedResponse)) {
    return {
      ok: false,
      error: { message: SEMANTIC_VALIDATION_ERROR, status: 400 },
    };
  }

  return { ok: true, data: { moduleSlug, response: trimmedResponse } };
}

export function validateMeaningfulReflectionResponse(response: string): boolean {
  const normalizedResponse = normalizeResponse(response);
  const words = getMeaningfulWords(response);
  const meaningfulWordCount = words.length;

  if (meaningfulWordCount < MIN_MEANINGFUL_WORD_COUNT) {
    return false;
  }

  if (isPlaceholderResponse(normalizedResponse)) {
    return false;
  }

  if (isRepeatedNoiseResponse(words, normalizedResponse)) {
    return false;
  }

  return !(
    isOverlyGenericResponse(response, words) &&
    meaningfulWordCount < GENERIC_RESPONSE_WORD_LIMIT
  );
}

function getMeaningfulWords(response: string): string[] {
  return response
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.replace(/[^a-z0-9']/g, ""))
    .filter((word) => /[a-z0-9]{2,}/.test(word));
}

function normalizeResponse(response: string): string {
  return response
    .toLowerCase()
    .replace(/[^a-z0-9'\/\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isPlaceholderResponse(normalizedResponse: string): boolean {
  const placeholderPhrases = new Set([
    "test",
    "testing",
    "placeholder",
    "asdf",
    "lorem ipsum",
    "dummy text",
    "sample response",
    "n/a",
    "na",
    "none",
    "nothing",
    "idk",
    "i don't know",
    "i dont know",
    "not sure",
    "no idea",
  ]);

  return placeholderPhrases.has(normalizedResponse);
}

function isRepeatedNoiseResponse(
  words: string[],
  normalizedResponse: string,
): boolean {
  const nonSpaceCharacters = normalizedResponse.replace(/\s/g, "");

  if (nonSpaceCharacters.length > 0) {
    const characterCounts = [...nonSpaceCharacters].map(
      (character) => nonSpaceCharacters.split(character).length - 1,
    );
    const highestCharacterCount = Math.max(...characterCounts);

    if (highestCharacterCount / nonSpaceCharacters.length >= 0.8) {
      return true;
    }
  }

  if (words.length < MIN_MEANINGFUL_WORD_COUNT) {
    return false;
  }

  const uniqueWords = new Set(words);

  return uniqueWords.size <= 3 && words.length / uniqueWords.size >= 2;
}

function isOverlyGenericResponse(response: string, words: string[]): boolean {
  const normalizedResponse = normalizeResponse(response);
  const specificTerms = new Set([
    "scenario",
    "feedback",
    "assessment",
    "sme",
    "data",
    "dashboard",
    "simulation",
    "course",
    "practice",
    "manager",
    "learner",
    "learners",
    "performance",
    "behavior",
    "outcome",
    "outcomes",
    "review",
    "rubric",
    "prototype",
    "analytics",
    "pathway",
    "conversation",
    "support",
  ]);
  const actionVerbs = new Set([
    "use",
    "review",
    "measure",
    "compare",
    "test",
    "validate",
    "design",
    "revise",
    "ask",
    "track",
    "evaluate",
    "align",
    "adapt",
    "analyze",
  ]);
  const hasSpecificTerm = words.some((word) => specificTerms.has(word));
  const hasActionVerb = words.some((word) => actionVerbs.has(word));
  const hasCausalLanguage = [
    "because",
    "so that",
    "if",
    "when",
    "would",
    "should",
    "before",
    "after",
    "to ensure",
  ].some((phrase) => normalizedResponse.includes(phrase));

  return !(hasSpecificTerm || hasActionVerb || hasCausalLanguage);
}

function getReflectionFeedbackContext({
  moduleSlug,
  response,
}: ReflectionFeedbackRequest): Result<ReflectionFeedbackContext> {
  const moduleContent = moduleContentBySlug[moduleSlug];

  if (!moduleContent) {
    return { ok: false, error: { message: "Module not found.", status: 400 } };
  }

  const reflectionPrompt = moduleContent.reflection?.prompt;

  if (!reflectionPrompt) {
    return {
      ok: false,
      error: { message: "Reflection prompt is unavailable.", status: 400 },
    };
  }

  const moduleTitle =
    modules.find((module) => module.slug === moduleSlug)?.title ?? moduleSlug;

  return {
    ok: true,
    data: {
      moduleSlug,
      moduleTitle,
      reflectionPrompt,
      response,
    },
  };
}

export async function generateReflectionFeedback(
  request: ReflectionFeedbackRequest,
): Promise<Result<ReflectionFeedback>> {
  const context = getReflectionFeedbackContext(request);

  if (!context.ok) {
    return context;
  }

  const messages = buildReflectionFeedbackMessages(context.data);
  const completion = await createChatCompletionJson(messages);

  if (!completion.ok) {
    return completion;
  }

  return parseReflectionFeedback(completion.data);
}
