# Future of ID AI Interaction Taxonomy

This document defines how Future of ID describes AI-related learning interactions. Use these levels in product planning, public copy, implementation notes, and QA reviews so the platform does not overstate what an interaction does.

## Level 1 — Interactive Learning Experience

A Level 1 interaction lets the learner do something inside the course experience.

Examples:
- Select a scenario or decision point.
- Move through guided module sections.
- Complete a reflection prompt.
- Mark a module complete.
- Review prewritten explanations, examples, or design notes.

Feedback at this level may be static, prewritten, or rule-based. Level 1 is valuable, but it is not necessarily AI-powered.

## Level 2 — AI-Assisted Feedback Experience

A Level 2 interaction sends learner input to an actual AI/LLM service and returns generated feedback based on that input.

Requirements:
- The learner submits open-ended input.
- The app sends that input to an AI provider or model API.
- The learner receives generated, personalized feedback or coaching.

Current Future of ID examples:
- Scenario decision feedback.
- Reflection feedback.

The current implementation uses API routes that call OpenAI chat completions with `gpt-4o-mini` through direct `fetch`.

## Level 3 — AI-Driven Simulation Experience

A Level 3 interaction uses AI as an active part of the learning experience, not only as a feedback reviewer.

Examples:
- AI customer.
- AI stakeholder.
- AI coach.
- Adaptive simulator.
- Dynamic conversation partner.
- Real-time role-play or branching experience driven by model responses.

Level 3 experiences adapt during the activity. They are not limited to static scenario prompts followed by generated feedback.

## Current Future of ID Classification

Future of ID is currently best described as:

**Level 1 interactive learning plus Level 2 AI-assisted feedback.**

The platform is not currently a Level 3 AI-driven simulation platform.

## Module-by-Module Classification

| Course step | Current classification | Notes |
| --- | --- | --- |
| Orientation | Level 1 only | Guided orientation experience; no AI feedback call. |
| AI Literacy and Agent-Enabled Learning Design | Level 1 + Level 2 | Scenario interaction and reflection feedback call OpenAI. |
| Performance Consulting and Business Alignment | Level 1 + Level 2 | Scenario interaction and reflection feedback call OpenAI. |
| Learning Analytics and Evidence-Based Design | Level 1 + Level 2 | Scenario interaction and reflection feedback call OpenAI. |
| Scenario, Simulation, and Conversation Design | Level 1 + Level 2 | Scenario interaction and reflection feedback call OpenAI; no live AI role-play yet. |
| Adaptive and Personalized Learning Architecture | Level 1 + Level 2 | Scenario interaction and reflection feedback call OpenAI; no adaptive simulator yet. |
| Content Systems Thinking and Workflow Automation | Level 1 + Level 2 | Scenario interaction and reflection feedback call OpenAI. |
| Human-Centered Change, Ethics, and Trust | Level 1 + Level 2 | Scenario interaction and reflection feedback call OpenAI. |

## What Currently Exists

- A course orientation experience.
- Seven non-orientation modules.
- Scenario-based interactions in the seven non-orientation modules.
- Reflection interactions in the seven non-orientation modules.
- API routes for scenario feedback and reflection feedback.
- Direct `fetch` calls from the server to OpenAI chat completions.
- Use of the `gpt-4o-mini` model for generated feedback.
- Structured feedback responses for learner scenario decisions and reflections.

## What Does Not Yet Exist

- No Level 3 role-play experience.
- No AI stakeholder.
- No AI customer.
- No AI coach acting as a live conversation partner.
- No adaptive simulator.
- No live AI conversation loop.
- No model-driven branching experience that changes the activity in real time.

Some module content discusses AI-driven conversations or adaptive simulations as design topics. Those topics are not the same as implemented Level 3 interactions.

## Recommended Public-Facing Language

Use language like:
- "AI-assisted feedback on scenario decisions and reflections."
- "Guided modules with AI-supported practice."
- "Scenario-based learning activities with generated coaching feedback."
- "A practical learning platform that demonstrates AI-assisted instructional design workflows."

Avoid language like:
- "AI-driven simulation platform."
- "Live AI role-play."
- "AI customer simulation."
- "Adaptive AI simulator."
- "Dynamic AI conversation partner."

Those descriptions should be reserved for future Level 3 implementations.

## Recommended Next Step for Level 3

If Future of ID pursues Level 3 later, start with one narrow pilot in the Scenario, Simulation, and Conversation Design module.

A good first pilot would be an AI stakeholder or AI customer role-play with clear constraints:
- One defined learner role.
- One defined AI role.
- A short conversation window.
- Explicit success criteria.
- Guardrails for tone, scope, and factual behavior.
- A debrief step that separates the simulation output from instructional feedback.

The goal should be to prove that a dynamic AI role adds learning value beyond the current Level 2 feedback pattern before expanding it across the course.
