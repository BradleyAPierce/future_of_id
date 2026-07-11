# 07 — Ordered Execution Checklist

> **Advisory external review:** This document preserves Claude's proposed sequence as historical recommendation evidence. It is not an official launch gate, approved execution order, or active checklist. `../strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` is the sole authoritative public launch-readiness process; Bradley decides whether and how external recommendations are adopted.

This checklist converts Reports 01–06 into an ordered sequence. It intentionally contains few items. The findings across this review point at two structural fixes and a short cleanup pass — not a long backlog.

## Tier 1 — Build First (Launch Gates)

These two items are the actual product. Everything else in this review is commentary on a product that is already, in its current form, one honest architectural fix away from matching its own philosophy.

- [ ] **Make Reverse Build's "Experience" layer read the learner's actual session artifact** (scenario response, AI feedback, reflection) instead of showing static category labels. Persist via `localStorage`, mirroring the existing `useCourseProgress` pattern exactly. Fall back gracefully to a generic example when no artifact exists, preserving open, non-linear exploration. *(Full spec: Report 05.)*
- [ ] **Give Simulation Design's Experience layer one real branching decision** — a scenario with selectable choices, distinct consequence text per choice, and a second decision point that reflects the first choice's state — feeding into the existing AI-critique infrastructure rather than replacing it. *(Full spec: Report 04.)*

Both are scoped to avoid new backend infrastructure, new AI systems, or rebuilding other modules. Ship both before any public push.

## Tier 2 — Do Before Any Broad Public Share

- [ ] Move hero/framework images off `raw.githubusercontent.com` into a real asset pipeline; remove unused default Next.js SVGs from `web/public/`.
- [ ] Audit all public-facing and About-page copy for "research-backed" / "industry-validated" language and remove it until an external source trail exists, per `FUTURE_READY_CAPABILITY_MODEL.md`'s own admission.
- [ ] Ensure no copy describes the platform itself as "adaptive" — the Adaptive Learning module teaches the concept; the platform does not yet practice it. Scope language to "teaches adaptive learning design."
- [ ] Add the connective moment inside Reverse Build's "AI Collaboration" layer that shows the learner their own AI critique alongside a one-line explanation of the rubric intent behind it. *(This is the smaller half of Report 05's spec — do it once Tier 1's persistence work is in place, since it depends on the same stored artifact.)*

## Tier 3 — Worth Doing, Not Urgent

- [ ] Surface the AI validation/tuning story (ADR-009, the scenario validation log) somewhere learner- or reviewer-facing — it is a genuine credibility asset currently buried in internal docs. A short "How the AI feedback was built and tested" section on the About page would do this without overengineering.
- [ ] Add a Situational Mental Model to Simulation Design once its Experience layer is redesigned — the redesigned decision structure will make an obvious compact decision aid ("what makes a decision point meaningful") much easier to author well.
- [ ] Begin (not necessarily finish) the external source trail for the seven-capability framework — even a partial bibliography materially changes what claims become safe.

## Explicitly Delay

- [ ] Supabase-backed persistence / accounts — the roadmap already places this correctly in a later phase; nothing in this review changes that sequencing.
- [ ] Adaptive sequencing, richer AI coaching, code-snippet library, community features — all correctly deferred already; do not pull any of these forward ahead of Tier 1.
- [ ] Rebuilding Design Practice for the other six modules to match Simulation Design's new branching format — most of them are legitimately well-served by the current free-text-critique format (Report 04). Do not generalize a fix that was scoped for one module's specific mismatch.
- [ ] Further documentation governance work (migration blueprints, sprint reports, inventory audits) — the documentation layer is already more mature than the product surface it describes. More planning documents right now would widen that gap, not close it.

## Do Not Expand Scope

Nothing in this review should be read as license to touch visual design, add new modules, or rebuild the homepage. The homepage, dashboard, and design system are functioning at or above the bar the philosophy documents set for them. The leverage is entirely in the two Tier 1 items.

---

## Final Judgment

**Is Future of ID becoming the kind of product it claims to represent?**

Yes, more than most solo portfolio projects ever get to — and not yet, on the two dimensions that matter most.

The instructional thinking is real. The AI integration is real and unusually well-engineered for a solo build — the module-specific rubrics and the documented, evidence-based tuning cycle in ADR-009 are the kind of artifact that actually proves the "rare combination of ID expertise and software engineering" the project is trying to demonstrate. The documentation is coherent with itself in a way that most growing projects lose within months. None of that is aspirational; it is checkable, and it checks out.

But the product's central promise — that it doesn't just talk about modern instructional design, it *is* an example of it, and then *reveals its own reasoning* — currently fails at exactly the two places a sophisticated reviewer would test first: whether Reverse Build actually reconstructs what you personally just did (it doesn't, yet), and whether the module about simulation design contains an actual simulation (it doesn't, yet). These are not vague quality complaints. They are specific, findable, and both traceable to the product's own governing documents, which describe the correct behavior in detail and simply haven't been built yet.

The smallest number of changes that would create the largest increase in product quality is exactly two: **make Reverse Build read the learner's own artifact, and give Simulation Design one real branching decision.** Both are scoped, both reuse existing infrastructure, and both are achievable without touching the other six modules, the design system, or the homepage. Ship those two things, and the gap between what this product claims and what it delivers — currently its single biggest credibility risk — closes almost entirely. Everything else in this review is refinement around a product that, at its foundation, is already better built than it currently appears.
