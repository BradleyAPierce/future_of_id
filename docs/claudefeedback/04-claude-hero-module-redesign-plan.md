# 04 — Hero Module Strategy

**Purpose:** Identify the highest-leverage module-level investment. `BLUEPRINT.md`'s own MVP scope calls for "1 fully polished interactive experience" — that experience does not yet exist in a way that lives up to the product's claims. This report identifies which module should carry that weight, and why the other six should not be touched yet.

This report does not recommend rebuilding all seven modules. It recommends one deliberate, disproportionate investment.

## Best Entry Module: AI Literacy

AI Literacy should remain the recommended first module, and the product already treats it that way — Orientation's final CTA defaults to it. This is the right call and does not need to change:

- It matches the learner's most likely pre-arrival anxiety (`FIRST_FIVE_MINUTES.md`: "This is probably another AI course"), and immediately subverts it by treating AI as a judgment problem rather than a tool tutorial.
- It directly extends Act 1 of Orientation ("The Profession Has Changed"), so the transition from Orientation into the first module is coherent rather than a topic jump.
- Its memorable takeaway ("AI accelerates design work. Judgment protects quality.") is the thesis statement for the entire product, not just the module. Starting here means the learner's first module reinforces the product's core argument before they've even reached module two.

No structural change is needed here. Its Design Practice layer has the same shared-architecture ceiling as every other module (Report 03), and that ceiling is a systemic issue, not an AI Literacy–specific one.

## Best Credibility Module: Performance Consulting

If the goal is to convince a skeptical senior instructional designer or L&D leader that this product understands real practice — not just AI trends — **Performance Consulting** is the strongest single module to point them to:

- It is one of only three modules with documented, live-tested AI feedback validation (`scenario-engine-validation-log.md`), including a specific fix for a real failure mode (the engine initially pushed strong diagnosis-first answers back toward premature training recommendations, and was corrected).
- Its professional problem framing ("What problem are we actually solving?") and takeaway ("Better diagnosis leads to better learning solutions.") are the most immediately recognizable pain point for any experienced ID — the stakeholder who arrives already certain the answer is a course.
- It has the strongest reflection prompt in the set: it asks the learner to name an assumption they'd challenge and evidence they'd still need, which is a genuinely higher-order ask than "what did you learn."

**Human-Centered Change** is the close second choice for credibility, and worth naming explicitly: it's the module least likely to be built by a purely AI-trend-chasing competitor, and its takeaway ("Trust is designed.") signals maturity beyond hype. If the product ever needs two credibility anchors (e.g., for a portfolio walkthrough with two audiences), pair Performance Consulting with Human-Centered Change.

## What Should Be Redesigned First: Simulation Design's Experience Layer

This is the single highest-leverage change available at the module level, for three converging reasons:

1. **It is the module most likely to be checked first by the exact audience the product needs to convince.** Any experienced instructional designer or learning architect evaluating this product will recognize "Scenario, Simulation, and Conversation Design" as a claim they can immediately test. It is the module where the product's credibility is most directly on trial.
2. **It currently fails on its own terms** (Report 03): the module that teaches branching, consequence, and decision pressure contains none of those things in its own practice mechanic. This is not a subtle gap — it is the most exposed, specific inconsistency in the whole product.
3. **Fixing it creates a reusable proof of concept**, not a one-off. Building one real branching interaction here produces a pattern (and likely a reusable component) that could later be selectively applied to other modules where it earns its complexity — without requiring all seven modules to be rebuilt at once. `EXPERIENCE_ARCHITECTURE.md`'s own filter applies directly: "Does this make the learner think differently? ... If the answer is 'no,' the feature should be reconsidered." A real branching scenario passes that filter for Simulation Design specifically; it would not automatically pass it for, say, Content Systems, which is well-served by its current judgment-in-text format.

### What Practice Artifact Would Create the Strongest Experience

Do not build a general-purpose simulation engine. Build one specific, well-scoped artifact:

**A single three-decision-point branching scenario**, replacing (or supplementing) Simulation Design's current three independent free-text scenarios:

- **Decision 1:** A realistic workplace moment requiring a choice among 3–4 plausible options (not open text — actual selectable choices, matching what the module's own theory content argues for).
- **Consequence text:** Each choice reveals a distinct, specific consequence — not "correct/incorrect" feedback, but a realistic downstream effect, matching the module's own stated design philosophy of consequences over correctness.
- **Decision 2:** Builds on the state created by Decision 1's choice — the scenario should visibly remember what the learner chose.
- **Decision 3 or a synthesis prompt:** A final judgment call, then the existing AI-feedback critique layer reviews the learner's full path (not just their last free-text answer) — this is where the current `ScenarioDecisionAI` + prompt-engineering investment is preserved and extended, not replaced.
- **A short free-text justification** at the end, still AI-reviewed with the existing rubric infrastructure — so the module keeps everything that currently works (the calibrated prompt, the tiered feedback) while adding the one thing it's missing: a decision that visibly branches.

This is deliberately scoped to be buildable without new backend infrastructure — it's a state machine in the client component plus 2–3 new content fields per decision point, not a new AI system.

### Why Not Redesign Reverse Build Here First

Reverse Build's problem (Report 02, Report 05) is systemic — it affects all seven modules identically and is a component-level fix, not a module-level one. Fixing it once benefits every module simultaneously, so it competes for the same engineering time as this recommendation. If forced to sequence: **fix Simulation Design's Experience layer first**, because it is the more visible, more specific, more easily-tested-by-a-skeptic gap, and because a branching decision structure in Simulation Design gives Reverse Build something much richer to reconstruct once that fix does happen (a decision path, not just a paragraph of free text). Building the simulation first makes the Reverse Build fix more valuable when it lands.

## What Not To Do

- Do not rebuild the other six modules' Design Practice layers to match. Most of them (Performance Consulting, Adaptive Learning, Content Systems, Human-Centered Change, AI Literacy) are judgment-in-ambiguity problems where a well-prompted free-text critique is a legitimate and sufficient practice format — the philosophy documents do not require every module to be a simulation, only the module that is *specifically about* simulation to actually contain one.
- Do not invest further in visual polish, homepage refinement, or new modules before this fix. Per `EXPERIENCE_PHILOSOPHY.md`'s own decision filter, none of that "makes the learner think differently" the way a real decision point in Simulation Design would.
- Do not build a generalized simulation authoring system. One well-built scenario, done once, well, is more convincing than a flexible-but-shallow framework for building many mediocre ones.
