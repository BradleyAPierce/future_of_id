import type { OpenAIMessage } from "./reflectionFeedbackPrompt";

type ServiceError = {
  message: string;
  status: number;
};

type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: ServiceError };

type ChatCompletionJsonOptions = {
  maxTokens?: number;
};

async function getOpenAIErrorMessage(response: Response): Promise<string> {
  if (response.status === 429) {
    try {
      const errorBody = await response.json();
      const errorCode = errorBody?.error?.code;

      if (errorCode === "insufficient_quota") {
        return "OpenAI rejected this API key with insufficient_quota. Check that the key belongs to the funded API project and that billing or credits are active.";
      }
    } catch {
      return "OpenAI rejected this API key with insufficient_quota. Check that the key belongs to the funded API project and that billing or credits are active.";
    }

    return "AI feedback is temporarily rate-limited. Try again shortly.";
  }

  return "AI feedback failed.";
}

export async function createChatCompletionJson(
  messages: OpenAIMessage[],
  options: ChatCompletionJsonOptions = {},
): Promise<Result<string>> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return {
      ok: false,
      error: { message: "AI feedback is not configured.", status: 500 },
    };
  }

  try {
    const openAIResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          temperature: 0.2,
          max_tokens: options.maxTokens ?? 150,
          response_format: { type: "json_object" },
          messages,
        }),
      },
    );

    if (!openAIResponse.ok) {
      return {
        ok: false,
        error: {
          message: await getOpenAIErrorMessage(openAIResponse),
          status: 502,
        },
      };
    }

    const completion = await openAIResponse.json();
    const content = completion?.choices?.[0]?.message?.content;

    if (typeof content !== "string") {
      return { ok: false, error: { message: "AI feedback failed.", status: 502 } };
    }

    return { ok: true, data: content };
  } catch {
    return { ok: false, error: { message: "AI feedback failed.", status: 502 } };
  }
}
