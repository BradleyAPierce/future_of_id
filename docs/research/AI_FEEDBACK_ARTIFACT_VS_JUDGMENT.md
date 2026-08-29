# Research Design Record: AI Feedback, Artifact Quality, and Professional Judgment

**Project:** Future of Instructional Design  
**Status:** Reference only — non-authoritative and outside current launch scope  
**Captured:** August 29, 2026  
**Possible future relevance:** Post-launch consideration of Reverse Build, AI Review, ReflectionFeedbackAI, ScenarioDecisionAI, and the AI Interaction Taxonomy

> [!IMPORTANT]
> This document is research reference material only. It does not modify, reinterpret, expand, reprioritize, or add requirements to the Public Launch Readiness Checklist, any approved implementation brief, ADR, implementation work order, validation requirement, or current product behavior. It must not be used as authority for current launch planning, implementation, validation, or claims. Any future adoption of an idea from this record requires Bradley's explicit approval and the formal reopening and update of the applicable controlling document through existing project governance.

## Source

Ding, G., Ou, Y., & Li, S. (2026). *ChatGPT-generated feedback versus teacher feedback in pre-service teachers’ instructional design development: A quasi-experimental study*. **Teaching and Teacher Education, 178**. https://doi.org/10.1016/j.tate.2026.105585

## What the study found

The published abstract reports three findings that matter to Future of ID:

1. Both teacher feedback and ChatGPT-generated feedback significantly improved the quality of participants’ instructional-design artifacts.
2. Neither feedback condition produced a significant improvement in broader instructional-design competencies.
3. Participants receiving ChatGPT feedback were more likely to adapt and contextualize suggestions than to apply them directly.

The project research brief reports a sample of 42 pre-service teachers, with 21 participants per condition. Confirm that detail against the full paper before using it in any public-facing claim.

## Why this correlates with Future of ID

Future of ID is intended to develop professional judgment, not merely help a learner produce a polished deliverable. This study provides empirical support for a risk already present in the project architecture:

> **Artifact improvement and capability development are related outcomes, but they are not the same outcome.**

An AI review can improve the visible product while concealing whether the learner understood the problem, evaluated the feedback, made defensible trade-offs, or could transfer the reasoning to a new situation. If Future of ID evaluates only the final artifact, it may overstate what the learner has demonstrated.

This is conceptually consistent with the approved Reverse Build v2 sequence:

**Design Practice → AI Review → Reverse Build → Reflection**

The sequence may help preserve the learner’s authored reasoning and make the relationship between learner work and AI feedback inspectable. Reflection remains outside the Reverse Build boundary, consistent with the controlling specification. This research record does not change that sequence or its approved product contract.

## Research interpretation — not a project decision

The study suggests that a future design review could consider **artifact quality** and **evidence of professional judgment** as separate evaluation dimensions. Future of ID has not adopted the following table as a new launch requirement through this document.

| Dimension | Core question | Possible evidence |
| --- | --- | --- |
| Artifact quality | Did the learner produce a stronger design? | Alignment, clarity, usability, evidence, completeness, and quality of the revised artifact |
| Professional judgment | Can the learner explain and defend the decisions? | Accepted, modified, and rejected recommendations; rationale; trade-offs; contextual constraints; transfer to a new case |

As a research interpretation, improvement in the first dimension should not automatically be treated as proof of the second. Any product requirement or public-claim rule based on this interpretation must be approved in the applicable controlling document.

## Possible post-launch design considerations — not requirements

The ideas below are retained for later evaluation only. They are not approved requirements, do not amend existing acceptance criteria, and must not be added to current launch work unless Bradley explicitly reopens the relevant controlling documentation after the current launch process.

### Reverse Build v2

- Preserve the learner’s original response and authored reasoning.
- Associate the exact AI Review with the artifact it evaluated.
- Record whether the learner **accepted**, **modified**, or **rejected** each material recommendation.
- Require a learner-authored rationale for consequential changes.
- Make the reasoning trail visible without allowing AI feedback to overwrite the learner’s contribution.
- Support partial completion, multiple prompts, repeated submissions, missing artifacts, and corrupted state as already required by the controlling specification.

### ReflectionFeedbackAI

- Evaluate the quality of the learner’s reasoning, not only the polish of the final response.
- Prompt for justification when the learner adopts an AI recommendation without explaining why.
- Recognize a well-defended rejection or modification as legitimate evidence of judgment.
- Keep Reflection data and lifecycle behavior separate from Reverse Build data.

### ScenarioDecisionAI and Module 4

- Capture the learner’s decision and rationale before presenting AI feedback.
- Ask the learner to diagnose consequences and reconsider the reasoning rather than merely revealing the preferred answer.
- Evaluate whether the learner can transfer the reasoning to a changed constraint or follow-up decision.

### AI Interaction Taxonomy

Classify these interactions as:

- **AI may critique or suggest within bounded criteria.**
- **The learner must make, contextualize, and defend the final judgment.**
- **AI output alone cannot serve as evidence of learner competence.**

## Possible future evaluation questions — not acceptance criteria

- Could artifact-quality evidence and judgment evidence be stored and evaluated separately in a future release?
- Should the original learner response remain recoverable after AI Review and revision?
- Would marking material AI recommendations accepted, modified, or rejected improve the reasoning trail?
- When would a learner-authored rationale be appropriate for consequential decisions?
- How should a future implementation ensure that Reverse Build uses the correct learner artifact and its exact associated AI Review?
- What evidence would be needed before describing an AI-assisted artifact as evidence of demonstrated expertise?
- Should future regression tests include learners who accept, modify, reject, or partially act on AI feedback?

These questions create no current launch gate, test obligation, or implementation scope.

## Evidence strength and limits

This is useful supporting evidence, not universal proof. The reported study is small, involves pre-service teachers in one context, and may depend on how both artifact quality and broader competencies were measured. Its strongest contribution to Future of ID is therefore not a claim that AI feedback is equivalent to teacher feedback. It is the demonstrated need to distinguish **better work produced with feedback** from **stronger professional capability demonstrated by the learner**.

## Permitted future use

After the current launch process, this record may be revisited as:

1. Research context during a formally authorized future review of Reverse Build or AI feedback.
2. A possible source for a future review of the AI Interaction Taxonomy’s human-judgment boundary.
3. Input to future regression-test design only if the applicable validation scope is formally reopened and approved.
4. Background for a future discussion of claims about learner capability and AI-assisted artifact quality.

Until that future review is explicitly authorized, this record is not an implementation source, validation source, launch-readiness source, or product decision.
