# 05 — Reverse Build Deep Evaluation and Future-State Model

## Does Reverse Build Fulfill Its Promise?

**No, not currently.** This is the clearest, most confidently answerable finding in this entire review, because `REVERSE_BUILD_EXPERIENCE.md` is unusually explicit about what it must do and must not become — and the shipped implementation lands on the "must not" side of nearly every line.

The document's own words, checked directly against `ReverseBuildModalCards.tsx`:

| Document says Reverse Build must... | Shipped reality |
|---|---|
| "First reconnect with the learning experience they just completed" — showing "the decision they made, the AI-supported critique they received, their reflection" | Shows four static label chips ("The decision you practiced," etc.) with no learner-specific content behind them |
| Be anchored to "the experience the learner just completed" | Anchored to the module topic in general; identical output regardless of what the learner did |
| Not be "a summary of the module topic... generic design notes... a post-lesson recap" | Is, functionally, generic design notes about the module topic — well-written, but generic in exactly the sense the document warns against |
| "Show AI collaboration honestly, including where human judgment overrode, refined, or rejected AI suggestions" | Shows this about how the *module* was built (real, good content) but never connects it to the specific AI critique the learner personally just received |

The authored content inside Reverse Build is genuinely strong (Report 01, Report 03) — the writing about design trade-offs, AI collaboration during the module's own construction, and what another designer could reuse is honest and specific. The problem is not quality of prose. The problem is that the mechanism is architecturally incapable of doing the one thing the document says must happen first: reconnect the learner to *their own* experience before revealing the reasoning behind it.

## Should Reverse Build Reconstruct Learner Artifacts?

**Yes — and this is achievable without new backend infrastructure.** The learner's scenario response, the structured AI feedback object (`summary`, `strengths`, `gap`, `nextStep`), and their reflection response already exist as React state inside `ScenarioDecisionAI` and `ReflectionFeedbackAI` during the session. They are simply never lifted anywhere the Reverse Build section can read them, and never persisted, so they vanish the moment the learner scrolls past or the component unmounts.

This is the single most valuable engineering fix available to the product, because it is the fix that makes the product's most-differentiated claim (Report 02) actually true.

## Should Reverse Build Connect AI Feedback?

**Yes, and it should go further than just displaying it back — it should use the learner's own AI critique as the bridge into the "AI Collaboration" layer.** Right now, "AI Collaboration" explains how AI supported the *module's construction* (drafting scenario variations, testing prompts). That content is honest and worth keeping. But there is a much stronger available move that the product isn't making: showing the learner the actual `gap` and `nextStep` text the AI just gave them, and then explaining — using the real rubric logic from `scenarioFeedbackPrompt.ts` and the real tuning history from `scenario-engine-validation-log.md` — *why* the critique engine is built to notice that specific kind of gap. That turns Reverse Build from "here's how we built the module" into "here's how we built the very feedback you just personally received," which is a categorically more convincing demonstration of design transparency than anything currently shipped.

## Should Reverse Build Reveal Design Decisions Afterward?

**Yes, and the current sequencing (Design Practice happens before Reverse Build is reachable in the page flow) is already correct and should be preserved.** The problem is not sequencing. It's that "afterward" currently reveals the same content whether or not the learner actually did the practice, or what they did in it. The fix is not about reordering sections — it's about making the first section within Reverse Build state-aware.

## Future-State Interaction Model

Keep the existing seven-layer structure (Report 02 confirmed the authored content for layers 2–7 — Problem, Instructional Foundations, Design Decisions, AI Collaboration, Trade-offs, Learning Science & Transfer — is genuinely good). Change only how Layer 1 ("The Experience") is generated, and add one new connective moment inside Layer 5 ("AI Collaboration").

### 1. Persist the learner's session artifact per module

Mirror the existing `useCourseProgress` pattern exactly — same `localStorage`-first philosophy, same graceful degradation if cleared, no account or database required for this to work. Store, keyed by module slug:

```text
{
  scenarioId: string,
  scenarioResponse: string,
  scenarioFeedback: { summary, strengths, gap, nextStep },
  reflectionResponse: string,
  reflectionFeedback: { summary, strengths, nextStep }
}
```

This is not a new persistence system — it's the same mechanism the product already trusts for progress tracking, applied to one more piece of state. It fully respects `EXPERIENCE_ARCHITECTURE.md`'s MVP rule that "the platform should remain fully usable" if storage is cleared (see fallback below).

### 2. Make Layer 1 ("The Experience") dynamic

Replace the current static four-chip block with a component that reads the stored artifact:

- **If present:** Show the actual scenario title the learner chose, a quoted excerpt of their real response, their real AI feedback (strengths/gap/nextStep), and their real reflection — framed as "Here is what you just did" rather than generic category labels.
- **If absent** (learner arrived at Reverse Build via open exploration without completing the practice — a use case `REVERSE_BUILD_EXPERIENCE.md` explicitly protects: "should support open exploration and not imply a required sequence"): show a clearly-labeled generic walkthrough example instead of the learner's own data, with a visible, low-friction link back to the practice ("Complete the practice above to see your own decision reconstructed here"). This preserves full functionality for non-linear exploration while making the personalized version the default, earned path.

### 3. Add one connective moment inside "AI Collaboration"

When a learner-specific artifact exists, insert one additional card before the existing AI-collaboration content: "Here's the feedback you received — and why the critique engine is built to respond that way." Pull the learner's actual `gap` text and pair it with a one-sentence explanation drawn from the module's rubric intent (e.g., for Performance Consulting: "This module's AI reviewer is specifically instructed not to reward jumping straight to a training solution — it's checking whether you diagnosed before prescribing"). This does not require exposing the raw system prompt (which `REVERSE_BUILD_EXPERIENCE.md` correctly says to avoid — "Reverse Build generally avoids exposing... API architecture"); it requires one authored sentence per module translating the existing rubric intent into learner-facing language, which the module content files already contain the raw material for.

### 4. Leave Layers 2, 3, 4, 6, 7 unchanged

The Problem, Instructional Foundations, Design Decisions, Trade-offs, and Learning Science & Transfer layers are already good and are legitimately about the module's design, not the individual learner's path. They do not need to become dynamic. Changing them would be scope creep against Report 04's leverage principle — the fix is concentrated, not comprehensive.

## Why This Is the Right Scope

- It touches one component's data source, not the seven modules' authored content.
- It reuses the existing `localStorage` pattern rather than introducing a new persistence layer, keeping the product's no-account, no-database MVP posture intact.
- It converts the product's most-repeated, most-checked claim ("this reconstructs the experience you just had") from aspirational to literally true, for the cost of lifting state that already exists one level up the component tree.
- It does not require rebuilding Reverse Build's tone, structure, or the "mentorship, not documentation" voice the current implementation already gets right (the modal framing, the "mentorship lens" callouts, and the closing "professional judgment is learnable" framing in `ReverseBuildModalCards.tsx` are well-executed and should be preserved).

This is the second-highest-leverage fix in the product, after — and complementary to — the Simulation Design practice redesign in Report 04. Together they are the two changes that would most directly close the gap identified in Report 02.
