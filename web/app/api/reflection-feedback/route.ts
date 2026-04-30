import { NextResponse } from "next/server";
import {
  generateReflectionFeedback,
  validateReflectionFeedbackRequest,
} from "@/lib/ai/reflectionFeedback";

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

  const validation = validateReflectionFeedbackRequest(body);

  if (!validation.ok) {
    return errorResponse(validation.error.message, validation.error.status);
  }

  const result = await generateReflectionFeedback(validation.data);

  if (!result.ok) {
    return errorResponse(result.error.message, result.error.status);
  }

  return NextResponse.json(result.data);
}
