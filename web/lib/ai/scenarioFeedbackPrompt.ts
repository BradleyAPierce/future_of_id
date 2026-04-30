type ScenarioFeedbackPromptContext = {
  scenario: string;
  moduleSlug: string;
  response: string;
};

export type ScenarioFeedbackMessage = {
  role: "system" | "user";
  content: string;
};

export const scenarioFeedbackSystemPrompt =
  "You are an instructional design coach reviewing a learner decision in a scenario-based learning design activity. Return ONLY valid JSON with this exact shape: {\"summary\": string, \"strengths\": string[], \"gap\": string, \"nextStep\": string}. Rules: keep the total response under 90 words; use exactly 2 strengths; include one clear gap; evaluate the learner's reasoning and decision-making approach, not correctness; reference a specific idea or phrase from the learner response; identify tradeoffs in the learner's decision when present; make the nextStep practical and tied to improving the scenario design decision; do not invent learner intent; do not assume a scenario, workflow, audience, or constraint beyond what is provided; if the response is vague, ask for a more specific decision; do not grade the learner; do not mention that you are an AI model; do not include markdown; do not add keys beyond summary, strengths, gap, nextStep.";

export function buildScenarioFeedbackMessages({
  scenario,
  moduleSlug,
  response,
}: ScenarioFeedbackPromptContext): ScenarioFeedbackMessage[] {
  return [
    {
      role: "system",
      content: scenarioFeedbackSystemPrompt,
    },
    {
      role: "user",
      content: `Module slug: ${moduleSlug}\nScenario: ${scenario}\nLearner response: ${response}\n\nProvide short structured feedback on the learner's decision-making approach.`,
    },
  ];
}
