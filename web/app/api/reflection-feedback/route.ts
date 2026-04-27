import { NextResponse } from "next/server";
import { moduleContentBySlug } from "@/data/moduleContent";

const AI_LITERACY_SLUG = "ai-literacy";
const MIN_RESPONSE_LENGTH = 20;
const MAX_RESPONSE_LENGTH = 1200;

type ReflectionFeedback = {
  summary: string;
  strengths: string[];
  nextStep: string;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

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

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return errorResponse("AI feedback is not configured.", 500);
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return errorResponse("Invalid request body.", 400);
  }

  const { moduleSlug, response } = body as {
    moduleSlug?: unknown;
    response?: unknown;
  };

  if (moduleSlug !== AI_LITERACY_SLUG) {
    return errorResponse("Reflection feedback is only available for AI Literacy.", 400);
  }

  if (typeof response !== "string") {
    return errorResponse("Reflection response is required.", 400);
  }

  const trimmedResponse = response.trim();

  if (
    trimmedResponse.length < MIN_RESPONSE_LENGTH ||
    trimmedResponse.length > MAX_RESPONSE_LENGTH
  ) {
    return errorResponse(
      `Reflection response must be between ${MIN_RESPONSE_LENGTH} and ${MAX_RESPONSE_LENGTH} characters.`,
      400,
    );
  }

  const moduleContent = moduleContentBySlug[AI_LITERACY_SLUG];
  const reflectionPrompt = moduleContent.reflection?.prompt;

  if (!reflectionPrompt) {
    return errorResponse("Reflection prompt is unavailable.", 500);
  }

  try {
    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.2,
        max_tokens: 150,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "system",
            content:
              "You are an instructional design coach reviewing a learner reflection for an AI literacy module. Return ONLY valid JSON with this exact shape: {\"summary\": string, \"strengths\": string[], \"nextStep\": string}. Rules: keep the total response under 90 words; use exactly 2 strengths; avoid generic praise like \"good job\" or \"clear understanding\"; reference a specific idea or phrase from the learner response; make feedback practical and grounded in real instructional design work; the summary should restate the learner's idea in clearer or more precise terms; strengths should highlight what the learner did well in thinking, not just content; the nextStep should push the learner one level deeper, not repeat the prompt; be supportive, practical, and concise; do not grade the learner; do not mention that you are an AI model; do not include markdown; do not add keys beyond summary, strengths, nextStep.",
          },
          {
            role: "user",
            content: `Module: AI Literacy and Agent-Enabled Learning Design\nReflection prompt: ${reflectionPrompt}\nLearner response: ${trimmedResponse}\n\nProvide short structured feedback.`,
          },
        ],
      }),
    });

    if (!openAIResponse.ok) {
      return errorResponse("AI feedback failed.", 502);
    }

    const completion = await openAIResponse.json();
    const content = completion?.choices?.[0]?.message?.content;

    if (typeof content !== "string") {
      return errorResponse("AI feedback failed.", 502);
    }

    let feedback: unknown;

    try {
      feedback = JSON.parse(content);
    } catch {
      return errorResponse("AI feedback failed.", 502);
    }

    if (!isReflectionFeedback(feedback)) {
      return errorResponse("AI feedback failed.", 502);
    }

    return NextResponse.json({
      summary: feedback.summary.trim(),
      strengths: feedback.strengths.map((strength) => strength.trim()),
      nextStep: feedback.nextStep.trim(),
    });
  } catch {
    return errorResponse("AI feedback failed.", 502);
  }
}
