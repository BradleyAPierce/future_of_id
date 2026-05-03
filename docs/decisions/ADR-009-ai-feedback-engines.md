# ADR-009: Shared AI Feedback Engines and Validation Rules

## Status

Accepted

## Context

The app contains AI-powered instructional interactions. Because credibility is central to the product, the AI layer required architecture auditing and validation before soft launch.

A read-only architecture audit confirmed that the app does not have seven separate AI systems. It has two shared AI feedback engines:

1. Shared scenario-feedback engine
2. Shared reflection-feedback engine

The scenario engine powers the three scenario questions on each module page.
The reflection engine powers the reflection prompt on each module page.

## Scenario Engine Architecture

The shared scenario path is:

```text
ModulePage
-> ScenarioDecisionAI
-> POST /api/scenario-feedback
-> validateScenarioFeedbackRequest
-> generateScenarioFeedback
-> buildScenarioFeedbackMessages
-> createChatCompletionJson
-> parseScenarioFeedback
```

Shared files involved:

- `web/app/course/module/[slug]/page.tsx`
- `web/components/course/ScenarioDecisionAI.tsx`
- `web/app/api/scenario-feedback/route.ts`
- `web/lib/ai/scenarioFeedback.ts`
- `web/lib/ai/scenarioFeedbackPrompt.ts`
- `web/lib/ai/scenarioFeedbackParser.ts`
- `web/lib/ai/openAIClient.ts`
- `web/data/moduleContent.ts`
- `web/data/modules.ts`

## Reflection Engine Architecture

The shared reflection path is:

```text
ModulePage
-> ReflectionFeedbackAI
-> POST /api/reflection-feedback
-> validateReflectionFeedbackRequest
-> generateReflectionFeedback
-> buildReflectionFeedbackMessages
-> createChatCompletionJson
-> parseReflectionFeedback
```

Shared files involved:

- `web/components/course/ReflectionFeedbackAI.tsx`
- `web/app/api/reflection-feedback/route.ts`
- `web/lib/ai/reflectionFeedback.ts`
- `web/lib/ai/reflectionFeedbackPrompt.ts`
- `web/lib/ai/structuredFeedback.ts`
- `web/lib/ai/openAIClient.ts`

## Architecture Findings

- All three scenario questions per module use the same shared scenario engine.
- All modules use the same scenario component, API route, validation path, prompt scaffold, OpenAI client utility, parser, and UI formatter.
- Only scenario metadata and learner response vary.
- Reflection feedback is a separate shared engine with its own prompt, schema, parser, and route.
- Full learner response path was confirmed end-to-end for scenario feedback.
- No truncation or transformation issue was found beyond trimming whitespace and the explicit 1200-character limit.

## Decision

- Freeze the shared scenario engine by default unless validation proves a real quality problem.
- Freeze the reflection engine until separate validation is complete.
- Do not reopen AI logic casually based on page-level impressions alone.
- Require architecture truth plus live output evidence before modifying shared AI logic.

## Reopen Criteria for Scenario Engine

The scenario engine should only be reopened if:

- strong answers receive generic or basic-level critique
- the engine invents missing elements already present in the learner response
- outputs fail to differentiate weak, medium, and strong answers
- outputs repeatedly ignore module-specific reasoning
- real user testing shows trust-breaking feedback quality

## Non-Blocking Technical Notes

- Scenario client/server minimum-length mismatch was fixed. Scenario client changed from 10 to 20 characters to match the server.
- Reflection already matched the 20-character minimum.
- `createChatCompletionJson` now supports an optional `maxTokens` override.
- Reflection still uses the default 150-token output budget.
- Scenario now uses a larger output budget.
- Multiple-lockfile workspace-root warning still appears during build, but build passes.
- Helper naming and message-type import quirks exist but are not current launch blockers.

## Current Status

- Shared scenario engine: locked after validation
- Shared reflection engine: pending validation
