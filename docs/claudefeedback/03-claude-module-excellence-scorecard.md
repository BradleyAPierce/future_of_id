# 03 — Module Excellence Scorecard

> **Advisory external review:** This document preserves Claude's analysis and recommendations as evidence. It is not an official launch gate or execution authority. `../strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` is the authoritative public launch-readiness process; Bradley decides whether and how external recommendations are adopted.

**Method:** Each of the seven capability modules scored 1–5 against the seven criteria in `MODULE_EXCELLENCE_STANDARD.md`. Scores are based on direct inspection of module content files (`web/content/modules/*.ts`), the shared rendering components, the AI prompt rubrics, and — where available — the live validation evidence in `docs/validation/scenario-engine-validation-log.md`.

Two structural facts apply to every module and are not repeated in each row: **Design Practice** and **Reverse Build** use identical shared components across all seven modules (`ScenarioDecisionAI`, `ReverseBuildModalCards`). This means their ceiling is set by the shared architecture, not by individual module authoring — a module cannot out-author a structural limitation shared by all seven. This is why AI Design Review and Reverse Build scores cluster tightly across the table.

## Scoring Legend

1 = Missing or contradicts the standard · 2 = Present but weak · 3 = Adequate, unremarkable · 4 = Strong, on-standard · 5 = Exceptional, differentiated

## Scorecard

| Module | Professional Problem | Mental Model | Design Practice | AI Design Review | Reverse Build | Reflection & Transfer | Memorable Takeaway |
|---|---|---|---|---|---|---|---|
| AI Literacy | 4 | 4 | 3 | 4 | 2 | 4 | 5 — "AI accelerates design work. Judgment protects quality." |
| Performance Consulting | 5 | 4 | 4 | 5 | 2 | 5 | 5 — "Better diagnosis leads to better learning solutions." |
| Learning Analytics | 4 | 4 | 3 | 4 | 2 | 4 | 5 — "Evidence should guide decisions, not decorate reports." |
| Scenario/Simulation Design | 5 | 3 | **2** | 5 | 2 | 4 | 5 — "Meaningful practice begins with meaningful decisions." |
| Adaptive Learning | 4 | 4 | 3 | 4 | 2 | 4 | 5 — "Complexity should be earned." |
| Content Systems | 4 | 4 | 3 | 3 | 2 | 4 | 4 |
| Human-Centered Change | 5 | 4 | 3 | 5 | 2 | 5 | 5 — "Trust is designed." |

**Column averages:** Professional Problem 4.3 · Mental Model 3.9 · Design Practice 3.0 · AI Design Review 4.3 · Reverse Build 2.0 · Reflection & Transfer 4.3 · Memorable Takeaway 4.9

## Rationale by Column

### Professional Problem — strong system-wide (avg 4.3)
Every module opens with a real `learnerQuestion` that names a dilemma, not a topic ("What problem are we actually solving?" for Performance Consulting; "How do I design learning experiences people can trust?" for Human-Centered Change). This is a genuinely well-executed pattern applied with discipline across all seven — no module falls back to a bare topic label.

### Mental Model — strong, slightly uneven (avg 3.9)
Four modules (Adaptive Learning, Content Systems, Learning Analytics, Performance Consulting) ship a dedicated Situational Mental Model diagram (e.g., Evidence → Interpretation → Decision → Measurement). Three (AI Literacy, Simulation Design, Human-Centered Change) rely on a Learning Framework Library panel instead. Simulation Design scores lower here specifically because it has neither a Situational Mental Model nor a strongly distinct framework of its own — it borrows framing rather than offering a compact decision tool for "how do I know a decision point is meaningful," which is exactly the kind of practical aid `SITUATIONAL_MENTAL_MODELS.md` describes as a good candidate and this module is the most obvious place for one that doesn't yet exist.

### Design Practice — the weakest column, and Simulation Design is the sharpest failure (avg 3.0)
All seven modules use the identical mechanic: choose 1 of 3 scenarios, write ≥20 characters of free text, get AI critique. This is scored 3 ("adequate, unremarkable") for most modules because the scenarios themselves are well-written and the judgment being asked for is real. It is scored **2** specifically for Simulation Design, because that module's entire subject matter — designing decision points, consequences, and branching feedback — is exactly the thing its own practice mechanic fails to demonstrate. A learner completes "Scenario, Simulation, and Conversation Design" without ever encountering a consequence tied to a choice. This is not a generic critique of the shared architecture; it is a specific, findable contradiction between what one module teaches and how that same module lets you practice.

### AI Design Review — strong, and unevenly validated (avg 4.3)
The module-specific rubrics in `scenarioFeedbackPrompt.ts` are genuinely well-built for all seven modules. But live validation evidence (`scenario-engine-validation-log.md`) documents actual weak/medium/strong testing for only three modules: **Simulation Design (Module 4)**, **Performance Consulting (Module 2)**, and **Human-Centered Change (Module 7)** — these three score 5 because they are proven, not just designed. AI Literacy, Learning Analytics, and Adaptive Learning have well-written rubrics but no documented live-testing evidence, so they score 4 (designed well, unconfirmed in practice). Content Systems scores 3 — its rubric exists but is comparatively generic next to the others (it does not distinguish tiers of response quality as explicitly as the validated modules do) and has no validation evidence either.

### Reverse Build — uniformly capped at 2 across all seven modules
This is a structural finding, not a module-quality finding. Every module's Reverse Build content is well-written, specific, and honest about trade-offs (see the AI Literacy example in Report 01) — the *authoring* would score 4–5 on its own. But the shared `ReverseBuildModalCards` component never reads the learner's actual scenario response, AI feedback, or reflection text. Every learner sees the same static cards regardless of what they did. Per `REVERSE_BUILD_EXPERIENCE.md`'s own definition, this is closer to "generic design notes" than genuine reconstruction. Because this ceiling applies identically to all seven modules, no module can score above a 2 here regardless of how good its written content is — the fix is architectural, not editorial (see Report 05).

### Reflection & Transfer — strong system-wide (avg 4.3)
Every reflection prompt follows a disciplined three-part structure: ask what the learner would do in their own context, ask what evidence/safeguard they'd need, and explicitly ask "what judgment remains yours as the instructional designer." That closing clause is repeated, deliberately, in six of seven modules — it is the product's clearest textual reinforcement of its "AI does not replace judgment" thesis, applied with real consistency. Performance Consulting and Human-Centered Change score 5 because their prompts are the most specific to workplace scenarios a working ID would actually recognize.

### Memorable Takeaway — the strongest column in the entire product (avg 4.9)
Every module has a genuinely quotable, one-sentence idea: "Trust is designed." "Complexity should be earned." "Evidence should guide decisions, not decorate reports." These are not generic inspirational lines — each one encodes a specific, defensible instructional-design position that a practitioner could repeat six months later and still find useful. This is the single most consistently excellent element of the module system.

## Strongest Modules

1. **Performance Consulting** and **Human-Centered Change** are the product's best modules. Both have validated AI feedback, the sharpest professional-problem framing, and reflection prompts that feel like they were written by someone who has actually sat across from a stakeholder demanding a course nobody needs.
2. **Learning Analytics** and **Adaptive Learning** are close behind — strong mental models, well-scoped rubrics, but without documented live validation evidence.

## Weakest Module

**Scenario, Simulation, and Conversation Design** is the weakest module in the set, and it is weak in the most consequential possible way: it is weak specifically on the dimension it is supposed to be teaching. This is the highest-priority single-module fix in the entire product (see Report 04).

## System-Wide Patterns

- **The product is better at explaining professional judgment than at making learners exercise it under real stakes.** Theory, Reflection, and AI Design Review are all strong. Design Practice and Reverse Build — the two layers meant to be experiential rather than explanatory — are the two weakest columns, and they're weak for the same underlying reason: both are currently static/generic where the philosophy demands them to be dynamic/personal.
- **Quality is remarkably consistent module-to-module.** There is no "weak module" in the sense of thin or careless content — every module clears a high bar on writing quality, structure, and instructional specificity. The variance in this scorecard comes almost entirely from architecture (shared components) and validation status, not from authoring effort. That's a good sign for how fixable the gaps are: fixing Reverse Build once fixes it for all seven modules simultaneously.
