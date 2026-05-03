# Scenario Engine Validation Log

## Purpose

This log records why the shared scenario-feedback engine was tested, what failed, what was changed, and why the engine is now considered credible enough to lock.

## Initial Problem

Early live testing showed:

- weak, medium, and strong scenario answers produced feedback that was too similar
- strong answers were sometimes misread as if basic design elements were missing
- feedback often collapsed into generic praise, a generic gap, and a generic next step
- this created a credibility risk for experienced instructional designers

## UX Consistency Fix

A user-facing mismatch was fixed first:

- `ScenarioDecisionAI` client minimum response length changed from 10 to 20
- `ReflectionFeedbackAI` was already aligned at 20
- visible character counter text was updated to show the minimum
- no AI engine logic changed in that fix
- `npm run build` passed

## Shared Scenario Prompt Calibration Timeline

### Phase 1: Initial Rubric Upgrade

`scenarioFeedbackPrompt.ts` was updated to:

- distinguish weak, medium, and strong responses
- recognize specific decisions, options, consequences, constraints, safeguards, feedback logic, and evaluation criteria
- avoid generic praise
- avoid inventing gaps when the learner already addressed an issue
- push strong responses toward refinement rather than missing basics

### Phase 2: Silent Inventory and Invented-Gap Prevention

The prompt was strengthened to silently check for:

- real decision point
- realistic context or role details
- plausible response options or choices
- consequences tied to choices
- feedback logic
- constraints, safeguards, criteria, or review rules

Hard rule added:

- do not identify an element as missing if it is already present in a meaningful way

### Phase 3: Output Compression Fix

The scenario engine was too compressed:

- old prompt required total response under 90 words
- `openAIClient` default `max_tokens` was 150

Changes made:

- scenario prompt limit changed from under 90 words to under 125 words
- `createChatCompletionJson` gained optional `maxTokens` support
- scenario feedback now uses `maxTokens: 240`
- reflection feedback still uses the default 150-token budget
- scenario strengths must reference at least one concrete learner detail
- strong-response gaps must focus on refinement, tradeoffs, realism under pressure, failure modes, calibration, transfer, or operational follow-through

### Phase 4: Performance Consulting Calibration

Module 2 testing showed a strong diagnosis-first answer was still being pushed toward premature training standardization.

Rule added:

- in performance consulting, business alignment, or system-performance scenarios, evaluate diagnosis before intervention
- when the learner resists premature solutioning, identifies environmental or system causes, or recommends diagnosis first, treat that as strong reasoning
- do not recommend standardization or rollout unless enough evidence already exists
- strong diagnosis-first answers should be pushed toward evidence plans, comparison methods, stakeholder alignment, decision criteria, or cause validation

### Phase 5: Final Anti-Premature-Solutioning Rule

Final micro-fix:

- for strong diagnosis-first responses, do not frame the gap as considering whether standardized training might still help
- instead focus on how to test whether training contributes to the problem, what evidence would justify training versus non-training action, how to compare environmental causes with skill or knowledge causes, or how to brief leadership without prescribing a solution too early

## Validation Evidence by Module

### Module 4 - Scenario Realism / Simulation Design

- weak answer eventually produced a foundational realism gap
- medium answer produced more specific critique than before
- strong answer was initially misread
- after prompt and budget changes, the engine improved enough to recognize stronger scenario design and move toward refinement-level critique

### Module 2 - Performance Systems

- weak answer correctly challenged the assumption that retraining everyone would solve the problem
- medium answer was acceptable and pushed toward stronger measurement and diagnosis
- strong answer initially failed by drifting back toward standardized intervention recommendations
- after the performance-consulting calibration rules, the strong answer correctly stayed inside diagnosis, evidence, and cause validation

### Module 7 - Ethics and Governance

- weak answer received a foundational governance gap
- medium answer received a meaningful design-tension critique
- strong answer received refinement-level critique around learner rights, appeal path, and governance detail
- this confirmed the scenario engine could handle a trust and ethics context credibly

## Final Scenario-Engine Decision

The shared scenario-feedback engine is now credible enough to lock for soft launch.

It distinguishes weak, medium, and strong answers more reliably than the initial version. It recognizes strong scenario design and diagnosis-first performance consulting instead of pushing every response toward generic solution design. Future changes should require new live output evidence plus a confirmed architecture reason to reopen the shared engine.

## Retest Guidance

If the scenario engine is reopened, retest at least three modules before changing shared prompt logic:

- Module 4 for scenario realism, options, consequences, and feedback logic
- Module 2 for diagnosis-first performance consulting and resistance to premature solutioning
- Module 7 for ethics, trust, governance, and learner agency

For each module, test weak, medium, and strong answers against the same scenario prompt. Preserve the response text and AI output so future changes are based on evidence, not impressions.
