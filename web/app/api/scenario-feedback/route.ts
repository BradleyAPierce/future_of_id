import { NextResponse } from "next/server";
import {
  generateScenarioFeedback,
  validateScenarioFeedbackRequest,
} from "@/lib/ai/scenarioFeedback";

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return errorResponse("Invalid request body.", 400);
  }

  const validation = validateScenarioFeedbackRequest(body);

  if (!validation.ok) {
    return errorResponse(validation.error.message, validation.error.status);
  }

  const result = await generateScenarioFeedback(validation.data);

  if (!result.ok) {
    return errorResponse(result.error.message, result.error.status);
  }

  return NextResponse.json(result.data);
}
