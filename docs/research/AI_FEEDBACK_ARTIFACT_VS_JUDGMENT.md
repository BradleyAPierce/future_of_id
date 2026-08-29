# Research Design Record: AI Feedback, Artifact Quality, and Professional Judgment

**Project:** Future of Instructional Design  
**Status:** Accepted project evidence and design constraint  
**Captured:** August 29, 2026  
**Relevant work:** Reverse Build v2, AI Review, ReflectionFeedbackAI, ScenarioDecisionAI, AI Interaction Taxonomy, launch validation

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

This directly supports the approved Reverse Build v2 sequence:

**Design Practice → AI Review → Reverse Build → Reflection**

The sequence is valuable because it can preserve the learner’s authored reasoning, expose what the AI suggested, and require the learner to explain how and why the design changed. Reflection remains outside the Reverse Build boundary, consistent with the controlling specification.

## Project decision

Future of ID will treat **artifact quality** and **evidence of professional judgment** as separate evaluation dimensions.

| Dimension | Core question | Possible evidence |
| --- | --- | --- |
| Artifact quality | Did the learner produce a stronger design? | Alignment, clarity, usability, evidence, completeness, and quality of the revised artifact |
| Professional judgment | Can the learner explain and defend the decisions? | Accepted, modified, and rejected recommendations; rationale; trade-offs; contextual constraints; transfer to a new case |

Improvement in the first dimension must not be presented as proof of the second.

## Design requirements

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

## Acceptance criteria

- [ ] Artifact-quality evidence and judgment evidence are stored and evaluated separately.
- [ ] The original learner response remains recoverable after AI Review and revision.
- [ ] Material AI recommendations can be marked accepted, modified, or rejected.
- [ ] The learner provides a rationale for consequential decisions.
- [ ] Reverse Build uses the correct learner artifact and its exact associated AI Review.
- [ ] A polished AI-assisted artifact is never labeled as demonstrated expertise without independent judgment evidence.
- [ ] Regression tests include learners who accept, modify, reject, or partially act on AI feedback.
- [ ] Launch claims remain qualified until these behaviors are implemented and validated.

## Evidence strength and limits

This is useful supporting evidence, not universal proof. The reported study is small, involves pre-service teachers in one context, and may depend on how both artifact quality and broader competencies were measured. Its strongest contribution to Future of ID is therefore not a claim that AI feedback is equivalent to teacher feedback. It is the demonstrated need to distinguish **better work produced with feedback** from **stronger professional capability demonstrated by the learner**.

## Recommended project use

Use this record as:

1. A research rationale for Reverse Build v2.
2. A source for the AI Interaction Taxonomy’s human-judgment boundary.
3. A basis for AI-feedback regression tests and launch acceptance criteria.
4. A guardrail for public claims about learner capability and AI-assisted artifact quality.
