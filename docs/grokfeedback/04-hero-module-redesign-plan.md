# Grok Feedback 04 — Hero Module Redesign Plan (AI Literacy + Performance Consulting)

**Date:** 2026-07-10  
**Reviewer:** Grok (Grok Build / xAI)  
**Scope:** Concrete redesign plan for two hero modules — **AI Literacy** (entry hero) and **Performance Consulting** (credibility hero)  
**Status:** Design/planning document only — no code was changed in this session  
**Depends on:**  
- `docs/grokfeedback/02-deep-product-honesty-review.md`  
- `docs/grokfeedback/03-module-excellence-scorecard.md`  
- `docs/experience/MODULE_EXCELLENCE_STANDARD.md`  
- `docs/experience/REVERSE_BUILD_EXPERIENCE.md`  

---

## 1. Purpose

Build **two undeniable modules** instead of polishing all seven evenly.

| Hero | Module | Primary job |
|------|--------|-------------|
| **Entry hero** | AI Literacy | First-click proof that Future of ID is a real judgment product, not a content site |
| **Credibility hero** | Performance Consulting | Expert stress-test proof for senior L&D / performance leaders |

These two modules should carry:

- homepage → orientation → first practice confidence  
- LinkedIn soft launch quality bar  
- portfolio interview narrative  
- Reverse Build v2 proof pattern for later modules  

This plan deliberately **does not redesign all seven modules**.

---

## 2. North Star for Both Heroes

A hero module is successful only if a skeptical professional can complete **one continuous loop in under 20 minutes** and walk away thinking:

> “I practiced real judgment, got useful critique, and then inspected *why that experience was designed that way*.”

### Required end-to-end loop (both heroes)

```text
Problem framing
  → Mental model
  → Practice object (not freewrite alone)
  → Design decision
  → AI design review
  → Optional one-line revision
  → Reverse Build using learner artifacts
  → Reflection + transfer
  → Earned completion
```

### Excellence targets after redesign

| Criterion | Current (approx) | Target |
|-----------|------------------|--------|
| Design Practice | 4.0 / 4.5 | **≥ 4.5–5.0** |
| Reverse Build | 3.5 | **≥ 4.5** |
| Overall module avg | 4.57 / 4.43 | **≥ 4.7 (true A)** |

Shared platform work that lifts both:

1. Learner artifact capture for practice + AI feedback  
2. Reverse Build v2 surface that consumes those artifacts  
3. Earned completion gated on practice + reflection  

(Reverse Build v2 interaction details are expanded further in the next feedback doc planned as item 3.)

---

## 3. Shared Architecture Changes (Build Once, Use Twice)

These are **product infrastructure** changes, not module-specific prose edits.

### 3.1 Practice artifact model

Introduce a lightweight, module-configurable practice object.

Recommended type direction (conceptual):

```ts
type PracticeArtifact =
  | {
      kind: "ai-draft-review";
      draft: AiDraftDocument;
      reviewChecklist: ChecklistItem[];
      learnerDecision: AiOwnershipDecision;
    }
  | {
      kind: "course-request-triage";
      request: StakeholderRequest;
      evidenceChecklist: ChecklistItem[];
      learnerDecision: DiagnosisDecision;
    };
```

Store learner outputs client-side first (sessionStorage or existing progress store extension). Supabase later.

Minimum fields to capture for Reverse Build v2:

| Field | Why |
|-------|-----|
| `moduleSlug` | Scope |
| `practiceKind` | Which UI/RB reconstruction |
| `scenarioId` (optional) | Which decision path |
| `artifactSnapshot` | What learner saw |
| `learnerResponse` | What they decided / wrote |
| `structuredChoices` | Checklist / ownership / diagnosis selections |
| `aiFeedback` | Summary, strengths, gap, nextStep |
| `revisionNote` (optional) | One-line apply-the-feedback |
| `completedAt` | Earned progress |

### 3.2 Shared UI building blocks (reuse across both heroes)

| Component (proposed) | Responsibility |
|----------------------|----------------|
| `PracticeArtifactPanel` | Renders the object under review (draft or request) |
| `DecisionChecklist` | Structured judgment checks before freewrite |
| `DesignDecisionComposer` | Free-response + guidance + submit |
| `AIFeedbackPanel` | Existing; keep |
| `LearnerArtifactTrail` | Compact “what you just did” strip |
| `ReverseBuildV2` | Reconstructs experience from trail + design rationale content |
| `EarnedCompletionGate` | Enables complete only after practice + reflection |

Do **not** invent a new AI engine per module. Keep shared scenario + reflection engines; feed richer context into prompts.

### 3.3 Scenario engine prompt upgrades (hero-only first)

When a structured practice object exists, prompt input should include:

- artifact summary (draft excerpt / request text)  
- learner structured choices  
- free-text rationale  
- module-specific criteria (already present)

This reduces generic feedback and increases “you chose X about Y” specificity.

### 3.4 Theory compression rule (both heroes)

Theory remains, but hero pages must not open with accordion fatigue.

Rule:

- Keep full theory available  
- Default above-the-fold theory to **3 high-value sections open/closed intentionally**  
- Move lower-priority theory into secondary accordion after practice is introduced, or keep collapsed by default  

Goal: learner reaches practice object quickly without losing substance.

### 3.5 Earned completion rule (both heroes)

Mark complete only when:

1. At least **one** primary practice submission with AI feedback received  
2. Reflection submitted with AI feedback received  

Optional later: require opening at least one Reverse Build layer.

Self-click completion without practice should not count as module completion for hero modules.

---

## 4. Hero A — AI Literacy (Entry Hero)

### 4.1 Role in the product

- First module after Orientation (recommended path)  
- Proves the product thesis: **AI accelerates; judgment protects quality**  
- Closest alignment to homepage / orientation frameworks  

### 4.2 Transformation goal

Learner leaves able to:

1. Separate AI-supportable work from human-owned judgment  
2. Spot overuse and underuse patterns  
3. Name at least one safeguard they will keep in real work  

**Takeaway to protect:**  
> AI accelerates design work. Judgment protects quality.

### 4.3 Current gap (why redesign is needed)

Copy already says:

> “Review a draft AI-assisted learning activity…”

But the product currently only provides freewrite scenarios about AI use.  
The promised draft object is missing. That is the primary Design Practice gap.

### 4.4 Signature practice: AI Draft Ownership Review

#### Practice name
**AI Draft Ownership Review**

#### Learner question
How can I use AI without giving up professional judgment?

#### Practice object (what they see)

A deliberately **imperfect** AI-generated onboarding microlearning draft, e.g.:

- Title + objective (slightly vague)  
- 4–6 bullet “content blocks” (some accurate, some generic, one risky/wrong workflow claim)  
- A quiz item that tests recall instead of decision quality  
- A note: “Generated from SME docs in 90 seconds under tight deadline pressure”

This artifact should be content-driven JSON, not hardcoded UI prose.

#### Structured decision (before freewrite)

Learner marks each draft part as one of:

| Label | Meaning |
|-------|---------|
| **Keep as-is** | Acceptable with light polish |
| **AI-assisted revise** | AI can help rewrite under human direction |
| **Human rewrite required** | Too risky / shallow / inaccurate for AI ownership |
| **Reject / remove** | Should not ship |

Plus a short checklist:

- [ ] Instructional purpose is clear  
- [ ] Learner/context fit is adequate  
- [ ] Accuracy risk identified  
- [ ] Practice quality is more than passive reading  
- [ ] Human validation step defined  

#### Free-text decision (kept, but grounded)

Prompt becomes:

> Based on this draft, what would you let AI support, what must remain human-owned, what risk matters most, and what safeguard would you require before release?

This replaces generic “describe your design decision” with artifact-grounded judgment.

#### Primary scenario path (simplify hero flow)

For hero clarity, use **one primary practice path** first:

1. **Primary:** Draft Ownership Review (new artifact practice)  
2. **Secondary (optional):** keep existing 2–3 free-response scenarios as “Deeper practice” collapsed or after primary  

Do not force three long freewrites on first visit. Entry hero should respect professional time.

Recommended primary mapping:

| Focus | Existing scenario energy to preserve |
|-------|--------------------------------------|
| Ownership under time pressure | `ai-use-decision` |
| Over-reliance / false completeness | `ai-overreliance-risk` |
| Workflow standards | `ai-integration-strategy` as optional deeper path |

### 4.5 AI Design Review behavior (AI Literacy)

AI should evaluate:

- whether learner separated generation from validation  
- whether risk was concrete (accuracy, learner fit, false completeness, brand/workflow fidelity)  
- whether safeguard is operational (SME review, pilot, source check, rejection criteria)  
- whether they avoided both “AI is magic” and “AI is useless”  

Feedback should reference **specific draft parts the learner marked**, not generic AI literacy praise.

### 4.6 Mental model packaging

Keep:

- Framework: `human-judgment-in-the-age-of-ai` after intro  

Add:

- Situational Mental Model for practice, e.g. **AI Ownership Ladder**  
  `Generate → Evaluate → Constrain → Validate → Own`

Place SMM immediately before the draft artifact.

### 4.7 Theory trim for hero flow

Priority theory (keep prominent):

1. Capability definition  
2. Why it matters / overuse-underuse  
3. Instructional design implications / judgment ownership  
4. L&D theory bridge (compact)

Secondary (collapse by default):

- Demand signals  
- Long trend exposition if redundant with overview  

### 4.8 Reverse Build content emphasis (AI Literacy)

RB content is already strong. Reframe order around the lived loop:

1. **Your experience trail** (artifact + marks + response + AI feedback)  
2. Problem: overuse vs underuse under time pressure  
3. Design decisions: imperfect draft, time pressure, visible human review  
4. Foundations: ADDIE / evaluation / learner-centered quality  
5. AI collaboration in the *module build* (not only topic content)  
6. Trade-offs and where it breaks  
7. Transfer / what another designer can reuse  

### 4.9 Reflection (keep, slightly tighten)

Current reflection is strong. Keep core:

> Where would AI most responsibly support your current workflow, what human review step would you keep, and what judgment remains yours?

Optional micro-add: require naming one real project/context.

### 4.10 Success criteria — AI Literacy hero

Pass only if all are true:

- [ ] Learner sees an imperfect AI draft object (not only scenario text)  
- [ ] Learner makes ownership marks on draft parts  
- [ ] AI feedback references those marks/risks specifically  
- [ ] Reverse Build shows learner’s decision + AI critique before design notes  
- [ ] Completion requires practice + reflection  
- [ ] First meaningful practice reachable in ≤ 8 minutes from module open  
- [ ] Skeptical ID can explain the takeaway without reopening theory  

---

## 5. Hero B — Performance Consulting (Credibility Hero)

### 5.1 Role in the product

- Expert credibility module for senior practitioners and hiring managers  
- Proves Future of ID is about **performance systems**, not course production speed  
- Best existing AI calibration story (diagnosis before intervention)  

### 5.2 Transformation goal

Learner leaves able to:

1. Treat a course request as a symptom  
2. Separate knowns / assumptions / unknowns  
3. Protect diagnosis under stakeholder pressure  
4. Recommend next step without premature training solutioning  

**Takeaway upgrade recommendation:**  
Current: “Better diagnosis leads to better learning solutions.”  
Stronger hero line:  
> **A course request is a signal, not a solution.**

(Keep current as supporting line if needed; use stronger line as primary memorable takeaway.)

### 5.3 Current gap

Copy says “Course Request Triage” and “review a stakeholder request,” but the request object is not presented as a realistic artifact. Scenarios are excellent freewrites; they still ask learners to imagine the whole context.

### 5.4 Signature practice: Course Request Triage Desk

#### Practice name
**Course Request Triage Desk**

#### Learner question
What problem are we actually solving?

#### Practice object (what they see)

A realistic stakeholder request packet, content-driven:

**Request message (example shape):**

> “Sales dropped last quarter. We need a process training course live in two weeks. Reps aren’t following the playbook. Please build a 30-minute eLearning and a quiz. Leadership already announced the training.”

**Attached “knowns” (partial, messy on purpose):**

- Completion of prior product training: 92%  
- Manager note: “Tools are slow; CRM steps changed last month.”  
- One top rep quote: “I know the process; I don’t have time.”  
- Stakeholder constraint: “No more discovery meetings; just build.”  

This is the Performance Consulting equivalent of the imperfect AI draft: a **deliberately incomplete case file**.

#### Structured decision (before freewrite)

**A. Tag each claim/request element:**

| Tag | Meaning |
|-----|---------|
| Known | Supported by evidence in packet |
| Assumption | Stated as fact without evidence |
| Unknown | Needs discovery |
| Non-training factor | Environment/tools/incentives/process/manager support |

**B. Diagnosis stance (forced choice):**

1. Training is likely justified now  
2. Training may help, but evidence is incomplete  
3. Non-training factors are primary; pause course build  
4. Hybrid: limited enablement + deeper diagnosis  

**C. Discovery shortlist**

Learner selects up to 3 highest-value discovery questions from a provided set (or writes one custom).

#### Free-text decision

> What is the stakeholder’s stated request, what performance problem may sit beneath it, what evidence is still missing, which non-training factors matter, and what next step would you defend?

This matches current practiceGuidance — now grounded in a packet.

#### Scenario strategy for hero flow

Primary path:

1. **Triage Desk packet** (new)  
2. Optional deeper free-response scenarios: stakeholder pressure, system-level inconsistency  

Same rule as AI Literacy: one undeniable primary practice, not three mandatory essays.

### 5.5 AI Design Review behavior (Performance Consulting)

Preserve and strengthen existing anti-premature-solution rules.

AI must:

- reward diagnosis-first reasoning  
- challenge order-taking  
- avoid recommending standardized training when learner correctly resists  
- push strong answers toward evidence plans, cause comparison, and stakeholder briefing without over-promising  

Prompt context should include:

- packet summary  
- learner tags  
- diagnosis stance  
- selected discovery questions  
- free-text rationale  

### 5.6 Mental model packaging

Keep SMM:

`Stakeholder Request → Performance Problem → Evidence → Root Cause → Recommendation`

Make it operational in the practice UI (steps highlight as learner moves through triage), not only a static strip.

Optional later: register a Learning Framework for performance diagnosis if you want homepage/orientation symmetry. Not required for hero launch if SMM is interactive.

### 5.7 Theory trim for hero flow

Priority theory:

1. Capability definition (course request ≠ automatic training)  
2. Business alignment  
3. Needs analysis / performance gaps  
4. Theory bridge (HPI, needs analysis, Kirkpatrick) compact  

Secondary collapse:

- Redundant explanatory sections that restate overview  

### 5.8 Reverse Build content emphasis (Performance Consulting)

RB should reconstruct:

1. The request packet the learner triaged  
2. Their tags / stance / discovery choices  
3. AI critique they received  
4. Why the experience used pressure + incomplete evidence  
5. Why diagnosis-before-intervention is the instructional target  
6. Trade-off: speed vs credibility with stakeholders  
7. Transfer: how to run this conversation Monday morning  

Existing RB content on order-taking and over-consulting should be preserved; connect it explicitly to the packet design choice.

### 5.9 Reflection

Current reflection is strong. Keep:

> Challenge an assumption, name needed evidence, own the diagnosis before recommending a solution.

Hero tweak: require the reflection to reference either the packet case or a real request from their workplace.

### 5.10 Success criteria — Performance Consulting hero

Pass only if all are true:

- [ ] Learner sees a realistic request packet (not only scenario paragraph)  
- [ ] Learner tags known/assumption/unknown/non-training factors  
- [ ] Learner selects a diagnosis stance before/with rationale  
- [ ] AI feedback does not collapse strong diagnosis into “maybe still build training”  
- [ ] Reverse Build shows learner triage + AI critique first  
- [ ] Completion requires practice + reflection  
- [ ] Senior practitioner recognizes real consulting tension, not textbook advice  
- [ ] Takeaway is memorable under pressure (“signal, not solution”)  

---

## 6. Side-by-Side Hero Comparison

| Dimension | AI Literacy | Performance Consulting |
|-----------|-------------|------------------------|
| Audience moment | First-timer / LinkedIn click | Expert / hiring manager stress-test |
| Practice object | Imperfect AI draft | Incomplete course-request packet |
| Core judgment | Ownership boundaries | Diagnosis before solution |
| Mental model | Human Judgment framework + Ownership Ladder | Request → Diagnosis SMM |
| AI coach role | Quality/risk safeguard coach | Performance diagnosis coach |
| Failure mode to avoid | Generic AI enthusiasm feedback | Premature training recommendation |
| Primary emotion | Confidence under AI pressure | Professional courage under stakeholder pressure |
| Homepage promise cashed | “AI-enabled learning judgment” | “Not just courses — performance systems” |

Both heroes share infrastructure; they must **feel different** in practice object and judgment type.

---

## 7. Page Flow Blueprint (Both Heroes)

Recommended module narrative order:

```text
1. Banner + learner question + takeaway
2. Short overview (keep tight)
3. Framework / SMM (one primary model)
4. Outcomes (collapsed accordion OK)
5. Theory: 3 priority sections (others collapsed)
6. Experience intro (one sentence)
7. Practice object + structured decision + free-text
8. AI feedback + one-line revision
9. Optional deeper scenarios (collapsed)
10. Reverse Build v2 (artifacts first, then rationale cards)
11. Reflection + AI feedback
12. Earned completion + next CTA
```

This is still one route (`/course/module/[slug]`). No need for separate experience/RB routes for hero launch.

---

## 8. Content vs Engineering Work Breakdown

### Content work (creator-owned)

**AI Literacy**

- Write imperfect draft artifact (JSON)  
- Ownership labels + checklist copy  
- Tighten theory priority order  
- Add Ownership Ladder SMM copy  
- RB intros that reference “the draft you reviewed”  
- Optional deeper-scenario framing  

**Performance Consulting**

- Write request packet artifact (JSON)  
- Tagging taxonomy labels + discovery question bank  
- Upgrade primary takeaway line  
- Make SMM step language match triage UI  
- RB intros that reference “the request packet you triaged”  
- Validate diagnosis-first examples for weak/medium/strong answers  

### Engineering work

- Practice artifact rendering components  
- Structured choice state  
- Persist learner artifacts for RB + completion gate  
- Pass structured context into scenario feedback API  
- Reverse Build v2 trail UI  
- Earned completion logic for hero modules  
- Prompt regression cases for both heroes (weak/medium/strong)  

### Explicit non-goals for this redesign

- Supabase/auth  
- Rebuilding all seven modules  
- Storyline library  
- New AI providers  
- Full adaptive sequencing  
- Separate reverse-engineering routes (unless later desired)  

---

## 9. Phased Delivery Plan

### Phase 0 — Spec lock (0.5–1 day)

- Approve both practice objects and takeaway lines  
- Approve shared artifact data shape  
- Approve earned completion rules  
- Approve hero page flow  

### Phase 1 — Shared infrastructure (1–2 days)

- Artifact state + persistence (client)  
- Practice object panel + checklist UI primitives  
- Completion gate  
- Reverse Build trail shell (even if rationale cards still current)  

### Phase 2 — AI Literacy hero vertical slice (2–4 days)

- Draft artifact content  
- Ownership review UI wired to AI feedback  
- Prompt context includes marks  
- RB trail + existing RB content  
- Manual weak/medium/strong validation  

### Phase 3 — Performance Consulting hero vertical slice (2–4 days)

- Request packet content  
- Triage desk UI  
- Diagnosis-first prompt verification  
- RB trail  
- Manual weak/medium/strong validation (especially strong diagnosis-first)  

### Phase 4 — Polish for soft public proof (1–2 days)

- Theory compression  
- Time-to-practice reduction  
- Mobile readability of artifact panels  
- Copy consistency with homepage claims  
- Capture 3–5 screenshots/clips for LinkedIn process posts  

**Estimated total for both heroes to soft-proof quality:** about **1.5–2 focused weeks**, assuming one builder + existing stack.

If only one can ship first: **AI Literacy first** (entry), then Performance Consulting.

---

## 10. Validation Plan (Do Not Skip)

### AI Literacy test set

| Level | Example learner behavior | Expected AI move |
|-------|--------------------------|------------------|
| Weak | “Use AI for everything to save time” | Demand ownership boundaries + safeguards |
| Medium | Delegates drafting, vague review | Push for operational validation step |
| Strong | Clear keep/revise/reject + SME check + risk | Deepen edge cases / false completeness / governance |

### Performance Consulting test set

| Level | Example learner behavior | Expected AI move |
|-------|--------------------------|------------------|
| Weak | “Build the course in two weeks” | Challenge order-taking; demand diagnosis |
| Medium | Asks questions but still defaults to training | Push evidence criteria before solution |
| Strong | Diagnosis-first, non-training factors, evidence plan | Do **not** shove standardized training; deepen validation methods |

Keep a short validation log entry for each hero (same discipline as scenario engine log).

---

## 11. Messaging Alignment (Homepage / Orientation / LinkedIn)

After heroes exist, language can be sharper:

**Safe now (after heroes):**

- “Practice professional judgment with AI critique”  
- “Inspect the design decisions behind the experience”  
- “Start with AI ownership or performance diagnosis”  

**Still avoid until true:**

- “Full simulation environments across every module”  
- “Adaptive learning engine” as if product is adaptive platform  
- “Research-validated seven capabilities” without bibliography  

LinkedIn process posts can show:

1. Imperfect AI draft learners critique  
2. Request packet triage under pressure  
3. Reverse Build revealing design rationale after practice  

---

## 12. Decision Log (Recommended Defaults)

| Decision | Recommendation | Why |
|----------|----------------|-----|
| Which hero first | **AI Literacy** | Entry path, Orientation alignment, homepage thesis |
| How many mandatory practices | **1 primary** per hero | Respect professional time; raise quality |
| Keep old free-response scenarios? | Yes, as optional deeper practice | Don’t throw away calibrated content |
| Auth needed? | No | Not required for hero proof |
| Separate routes? | No for v1 hero | One-page loop is fine |
| Takeaway change for PC | Yes: “signal, not solution” | More memorable and true |
| Shared vs custom AI engines | Shared + richer context | Maintain architecture discipline |

---

## 13. Definition of Done (Dual Hero)

Both heroes are done only when:

1. Each has a **unique practice object** that matches its Experience claims  
2. AI critique is grounded in structured learner choices  
3. Reverse Build opens with **learner artifacts**, then design rationale  
4. Completion is **earned**  
5. Weak/medium/strong validation passes for each  
6. A new user can complete the loop in one sitting without reading the whole docs system  
7. Scorecard projection: both modules **A (≥ 4.7)** with Design Practice and Reverse Build each **≥ 4.5**

Until then, do not claim the product “demonstrates the future of instructional design” as a finished statement. Claim progress and show process.

---

## 14. What This Plan Intentionally Defers

- Simulation Design mini-builder  
- Analytics mini-dashboard  
- Adaptive rule builder  
- Content-systems inventory board  
- Trust feature-spec review object  
- Full Reverse Build v2 for non-hero modules  
- Supabase persistence of artifacts  

Those become follow-ons after the two heroes are undeniable.

---

## 15. Immediate Next Steps After This Doc

1. Review item **#3**: Reverse Build v2 interaction spec (artifact-driven)  
2. Review item **#4**: Public-readiness checklist with pass/fail gates  
3. Then formalize a single **action-step checklist** for execution order  

No implementation should start until Reverse Build v2 and public-readiness criteria are specified, because those define the acceptance tests for this redesign.

---

## Bottom Line

Do not “improve modules.”  
Build two signature professional studios:

1. **AI Draft Ownership Review** (AI Literacy)  
2. **Course Request Triage Desk** (Performance Consulting)  

Wire both into one shared loop:

**object → judgment → AI critique → artifact-aware Reverse Build → transfer → earned completion**

That is how Future of ID stops being a strong content system and becomes an undeniable product.
