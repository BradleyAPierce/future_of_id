# 06 — Public Readiness Evaluation

**Frame:** This report is written as if a skeptical senior L&D leader or hiring manager is about to click a shared link. It evaluates readiness for a broad public/professional share (LinkedIn, L&D communities, a hiring manager following a portfolio link) — not readiness for continued private iteration, which is already happening successfully.

Notably, the project's own `docs/strategy/ROADMAP.md` places "public narrative and sharing readiness" in the **Later Phase**, after persistence and analytics work — meaning the project's own planning does not yet consider itself launch-ready. This review agrees with that self-assessment and adds specifics.

## What Can Be Shared Now

- **The writing and instructional thinking.** Theory content, reflection prompts, and memorable takeaways (Report 03) are publication-quality and would survive scrutiny from an experienced ID reviewer today.
- **The AI feedback engine, framed accurately.** The scenario and reflection critique engines are real, module-specific, and evidence-tuned (Report 01, ADR-009). Sharing *this specific mechanism* — e.g., a LinkedIn post walking through the module-specific rubric logic and the validation log — is safe and would land well with a technical L&D audience, because it's true and it's differentiated.
- **The open-access philosophy.** "No account, no paywall, no locked content" is implemented as documented and is safe to state publicly.
- **Orientation**, as a standalone experience, is polished enough to share on its own — it faithfully executes its storyboard and doesn't overclaim anything the rest of the product hasn't earned yet.
- **The About page's honest positioning** (dual-purpose project, career context) is a reasonable thing to be transparent about publicly; the strategy docs already model this candor internally, and it doesn't need to be hidden externally either.

## What Requires More Work Before Broad Sharing

1. **Reverse Build must actually reconstruct the learner's experience before it is described that way publicly.** As shipped, describing it as "inspect the design behind *your* experience" is inaccurate (Report 02, Report 05). This is the single largest gap between current state and safe public claim.
2. **Simulation Design's practice mechanic should contain an actual decision tree before the module is highlighted in any public demo.** Any experienced reviewer testing this specific module first (a likely scenario, per Report 04) will find the mismatch immediately.
3. **Image hosting on `raw.githubusercontent.com` should move to a proper asset pipeline** (Next.js `public/`, or an actual CDN/image host) before wide sharing. It works today, but it is a single point of failure a technically literate visitor could stumble into (broken image, rate limiting), and it currently sits next to unused default Next.js boilerplate SVGs still living in `web/public/` — a detail that undercuts "premium software product" framing if noticed.
4. **A real external source trail for the seven-capability framework should exist before "research-backed" language is used anywhere public-facing.** `FUTURE_READY_CAPABILITY_MODEL.md` already flags this internally. External sharing is exactly the condition that document warns needs to wait.
5. **The Adaptive Learning module should not be positioned as evidence that the platform itself adapts.** The module *teaches* adaptive learning theory well, but the platform delivers the same static content and sequence to every learner regardless of behavior or performance — the roadmap itself lists "adaptive sequencing" as a future-phase item, not a shipped one. This is a smaller version of the Simulation Design problem: a capability the product teaches about, but does not yet practice itself. It is lower-severity than Simulation Design (the module doesn't promise the *platform* is adaptive, only that the *learner* should understand when adaptation is justified) but is worth being precise about in any public description — say "teaches adaptive learning design," not "adaptive learning experience."

## Safe Launch Claims

These are accurate today and can be stated publicly without risk:

- "AI-powered feedback that critiques your specific written reasoning against module-specific instructional design rubrics — not generic praise."
- "Free, permanently, with no account required and nothing locked behind completion."
- "Built end-to-end by one person combining instructional design expertise with full-stack AI-integrated software development."
- "Seven capability areas grounded in instructional design practice and established learning science foundations" (safe because it doesn't claim a formal external literature review — it claims practice-grounding, which is true and defensible).
- "A guided course you can enter at any point — module completion never gates access to other modules."

## Claims That Would Damage Credibility If Made Today

- "Reverse Build shows you why *your* experience was designed the way it was" — false as currently implemented; it shows generic design notes about the module, identical for every learner.
- "Research-backed" / "backed by ATD and Learning Guild research" / "industry-validated seven-capability framework" — no external source trail currently exists; the project's own documentation admits this. A single pointed question from a skeptical reviewer ("which studies?") would expose this immediately.
- "Practice realistic simulations with consequences" as a whole-product claim — true for the product's *ambition*, not yet true for any shipped module, including the one named for it.
- "Adaptive learning experience" (describing the platform, not the module topic) — the platform does not currently adapt to any learner signal.
- Any claim implying the product has been used, tested, or validated by outside instructional designers — there is no evidence in the repository of external user testing; all validation evidence found (ADR-009, the scenario validation log) is the creator's own testing.

## Recommended Minimum Bar Before a Broad Public Push

This aligns closely with what `docs/strategy/STRATEGY.md` already concluded independently, and this review confirms it as still the right bar:

1. Reverse Build reconstructs the learner's actual scenario response, AI feedback, and reflection (Report 05) — at minimum for the module used as the flagship link.
2. Simulation Design's Experience layer contains one real branching decision (Report 04).
3. Images move off `raw.githubusercontent.com` and unused boilerplate SVGs are removed from `web/public/`.
4. Public copy avoids "research-backed" and "adaptive learning experience" language until the underlying claims are true, per the sections above.

None of these require months of work — they are the same two structural fixes recommended in Reports 04 and 05, plus a small asset/copy cleanup pass. This is a materially smaller gap than the size of the documentation set might suggest.
