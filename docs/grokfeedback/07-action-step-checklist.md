# Grok Feedback 07 — Action Step Checklist

**Date:** 2026-07-10  
**Reviewer:** Grok (Grok Build / xAI)  
**Purpose:** Convert reviews `01`–`06` into an ordered, executable work plan toward an honest soft product launch (T1)  
**Status:** Living action checklist — update checkboxes as work completes; do not rewrite history in `01`–`06`  
**Primary goal:** Ship one undeniable hero loop, then a second credibility hero, then pass T1 public-readiness gates  

---

## How to use this checklist

1. Work **top to bottom by phase**. Do not skip Phase 0–2 to “polish all modules.”  
2. Mark items `[x]` only when the **acceptance note** is truly met.  
3. Prefer vertical slices that learners can feel over documentation expansion.  
4. Default rule from reviews: **systems over snippets, but ship learning not only infrastructure.**  
5. Launch language must follow `06-public-readiness-checklist.md`.

### Success north star

A skeptical instructional designer can complete this in one sitting:

```text
Homepage → (Orientation) → AI Literacy
  → practice object
  → judgment
  → AI critique
  → Reverse Build with their artifacts
  → reflection
  → earned completion
```

…and say: *“I was not tricked. This is real professional practice.”*

---

## Sources consolidated

| Doc | What it contributed |
|-----|---------------------|
| `01` | Thesis, dual purpose, systems discipline |
| `02` | Honesty gaps: RB, practice sameness, progress, launch risk |
| `03` | Module scores; AI Literacy + PC as heroes; Simulation irony |
| `04` | Dual hero redesign (draft ownership + triage desk) |
| `05` | Reverse Build v2 artifact trail spec |
| `06` | T0/T1/T2 launch gates |

---

## Current launch posture (update when it changes)

| Tier | Status | Notes |
|------|--------|-------|
| T0 Process sharing | **GO** | Allowed now with disciplined WIP language |
| T1 Soft product launch | **NO-GO** | Blocked until Phase 5 sign-off |
| T2 Broad credibility launch | **NO-GO** | Needs dual heroes + external validation |

---

## Phase 0 — Decisions lock (do first, ~0.5 day)

Lock these before building so work does not thrash.

- [ ] **0.1** Confirm entry hero = **AI Literacy**
- [ ] **0.2** Confirm credibility hero = **Performance Consulting**
- [ ] **0.3** Confirm primary PC takeaway line: *“A course request is a signal, not a solution.”* (or explicitly keep old line)
- [ ] **0.4** Confirm Reverse Build v2: Zone A artifacts → Zone B rationale; no new LLM call in RB
- [ ] **0.5** Confirm earned completion for heroes: practice AI feedback + reflection AI feedback required
- [ ] **0.6** Confirm T1 proof path URL sequence (Homepage → Orientation or AI Literacy)
- [ ] **0.7** Confirm out-of-scope until T1: Supabase/auth, Storyline library, all-seven unique builders, new AI vendor

**Phase 0 done when:** decisions written here or in a short note you will not reopen weekly.

---

## Phase 1 — Shared learner artifact infrastructure (~1–2 days)

Build once; use for all modules, then enrich for heroes.

### 1A. Data + persistence

- [ ] **1.1** Define TypeScript types for practice/reflection artifacts (see `05` data model)
- [ ] **1.2** Implement client store (localStorage/session strategy) with `version: 1`
- [ ] **1.3** Implement `useLearnerArtifacts(moduleSlug)` (read + subscribe to updates)
- [ ] **1.4** Implement `savePracticeAttempt(...)` on successful scenario feedback
- [ ] **1.5** Implement `saveReflectionAttempt(...)` on successful reflection feedback
- [ ] **1.6** Ensure no cross-module leakage (artifacts keyed by `moduleSlug`)
- [ ] **1.7** Ensure failed AI calls do **not** write fake critique artifacts

**Acceptance:** After one scenario feedback, refresh page → decision + critique still available to read from store.

### 1B. Capture wiring (compatibility mode for all modules)

- [ ] **1.8** Wire `ScenarioDecisionAI` success path to save:
  - challenge (scenario text/title/focus)
  - decision free-text
  - AI critique payload (summary, strengths, gap, nextStep)
- [ ] **1.9** Wire `ReflectionFeedbackAI` success path to save prompt + response + critique
- [ ] **1.10** Optional: save one-line revision note if/when that field is collected

**Acceptance:** Any module with scenarios can populate a basic artifact trail.

---

## Phase 2 — Reverse Build v2 shell (~1–2 days)

Makes the product’s signature claim true in compatibility mode first.

- [ ] **2.1** Create `ReverseBuildV2` (or upgrade existing component in place)
- [ ] **2.2** Zone A: Lived Experience Trail cards
  - [ ] Challenge
  - [ ] Decision
  - [ ] AI critique
  - [ ] Empty state + CTA to Design Practice
  - [ ] Partial state (decision without critique)
  - [ ] Complete state banner
- [ ] **2.3** Zone B: existing design-reasoning modal layers (reuse content mapping)
- [ ] **2.4** Enforce Zone A above Zone B
- [ ] **2.5** Enforce Zone B layer order per philosophy (Problem → Foundations → Decisions → AI Collaboration → Trade-offs → Transfer)
- [ ] **2.6** Never fabricate critique; never second AI call for RB render
- [ ] **2.7** Swap `ModuleLayerRenderer` reverseBuild path to v2
- [ ] **2.8** Accessibility: keyboard CTA, modal focus behavior retained
- [ ] **2.9** Mobile stack check for trail cards

**Acceptance:**  
Tester completes any module scenario → Reverse Build shows **their** text and **their** feedback → then rationale cards.

**Scoreboard impact:** Criterion 5 moves up course-wide even before heroes.

---

## Phase 3 — AI Literacy entry hero (~2–4 days)

Highest priority product slice for T1.

### 3A. Content / instructional design

- [ ] **3.1** Author imperfect AI draft artifact (JSON/TS content, not hardcoded in random UI)
- [ ] **3.2** Define draft parts + ownership marks: keep / ai-revise / human-rewrite / reject
- [ ] **3.3** Define short quality checklist (purpose, fit, accuracy risk, practice quality, validation)
- [ ] **3.4** Add Situational Mental Model: **AI Ownership Ladder** (`Generate → Evaluate → Constrain → Validate → Own`)
- [ ] **3.5** Compress theory: priority sections prominent; secondary collapsed by default
- [ ] **3.6** Keep framework `human-judgment-in-the-age-of-ai`
- [ ] **3.7** Keep core takeaway: *“AI accelerates design work. Judgment protects quality.”*
- [ ] **3.8** Reframe Reverse Build authored intros to speak to “the draft you reviewed”
- [ ] **3.9** Make existing free-response scenarios **optional deeper practice** (not three mandatory essays)

### 3B. Experience UI

- [ ] **3.10** Build **AI Draft Ownership Review** practice UI
- [ ] **3.11** Render draft object + part marking + checklist
- [ ] **3.12** Free-text decision grounded in the draft
- [ ] **3.13** Submit → existing scenario feedback API (or thin extension) with structured context
- [ ] **3.14** Persist structured marks/checklist into artifact `structured` + `structuredSummary`
- [ ] **3.15** Ensure first meaningful practice reachable in **≤ 8 minutes** from module open

### 3C. AI quality

- [ ] **3.16** Pass structured marks into scenario prompt context
- [ ] **3.17** Validate weak / medium / strong answers (log results)
- [ ] **3.18** Confirm feedback references specific marks/risks (not generic praise)

### 3D. Completion

- [ ] **3.19** Earned completion on AI Literacy: require practice feedback + reflection feedback before complete
- [ ] **3.20** Disable vanity self-complete without practice (hero only is enough for T1)

**AI Literacy hero acceptance (all must be true):**

- [ ] Learner sees imperfect draft object  
- [ ] Learner marks ownership on parts  
- [ ] AI critique references those choices  
- [ ] Reverse Build shows decision + critique before rationale  
- [ ] Completion is earned  
- [ ] ≤ 8 minutes to practice  
- [ ] Skeptical ID can state takeaway without rereading all theory  

---

## Phase 4 — Performance Consulting credibility hero (~2–4 days)

Do after AI Literacy hero is demoable. Required for T2; strongly recommended before broad T1 promotion beyond a single proof path.

### 4A. Content

- [ ] **4.1** Author course-request packet artifact (pressure + incomplete evidence)
- [ ] **4.2** Define tag taxonomy: known / assumption / unknown / non-training
- [ ] **4.3** Define diagnosis stance choices
- [ ] **4.4** Provide discovery question bank (select up to 3 + optional custom)
- [ ] **4.5** Upgrade primary takeaway if approved in Phase 0
- [ ] **4.6** Make SMM steps operational in UI (Request → Problem → Evidence → Root Cause → Recommendation)
- [ ] **4.7** Compress theory for faster path to triage desk
- [ ] **4.8** RB authored bridges reference “the packet you triaged”
- [ ] **4.9** Optional deeper scenarios remain optional

### 4B. Experience UI + AI

- [ ] **4.10** Build **Course Request Triage Desk** UI
- [ ] **4.11** Structured tags + stance + discovery selections + free-text
- [ ] **4.12** Persist structured summary into artifacts
- [ ] **4.13** Feed packet + structure into scenario prompt context
- [ ] **4.14** Re-validate diagnosis-first weak/medium/strong (especially strong diagnosis not pushed into premature training)
- [ ] **4.15** Earned completion rules for PC hero

**PC hero acceptance:** all success criteria in `04` section 5.10.

---

## Phase 5 — Soft launch readiness (T1) (~1–2 days)

Only after Phase 2 + Phase 3 (Phase 4 preferred).

### 5A. Product honesty + hygiene

- [ ] **5.1** Homepage claim audit against `06` allowlist/blocklist
- [ ] **5.2** Orientation claim audit (promises match proof path)
- [ ] **5.3** About page states stage (soft/beta), free, builder identity
- [ ] **5.4** Dashboard does not imply all seven modules are equally deep (copy or badges if needed)
- [ ] **5.5** Production hygiene: critical images load; remove “default Next” feel from public surfaces where user-facing
- [ ] **5.6** Privacy note near AI practice: learner text sent to model provider
- [ ] **5.7** Feedback channel visible (email / form / LinkedIn)
- [ ] **5.8** AI error states verified in production/staging

### 5B. Proof path QA

- [ ] **5.9** Production smoke checklist in `06` section 8 (all critical rows)
- [ ] **5.10** Mobile 390px proof path pass
- [ ] **5.11** Desktop proof path pass
- [ ] **5.12** External or proxy skeptical click-through (target 6/6 Yes in `06`)
- [ ] **5.13** Cost/rate-limit awareness for small traffic spike

### 5C. Launch decision

- [ ] **5.14** Fill `06` sign-off sheet for **T1**
- [ ] **5.15** GO only if all T1 CRITICAL gates pass
- [ ] **5.16** Draft T1 LinkedIn post using soft-launch template (not T2 language)
- [ ] **5.17** CTA points to proof path (AI Literacy), not “all modules equal”

**Phase 5 done when:** T1 sign-off = **GO**.

---

## Phase 6 — After T1 (do not start early)

These are important but **secondary to the hero loop**.

### 6A. Toward T2

- [ ] **6.1** Finish PC hero if not done pre-T1
- [ ] **6.2** External testers n≥3; majority would recommend to a colleague
- [ ] **6.3** Simulation Design: mini builder **or** public relabel to remove environment overclaim
- [ ] **6.4** Non-hero modules: add missing practice objects where copy claims them (dashboard, messy inventory, trust feature card) **or** soften copy
- [ ] **6.5** Full public claim audit (homepage, about, orientation, README, LinkedIn)
- [ ] **6.6** Optional short “foundations & sources” spine before any “research-grounded” upgrade
- [ ] **6.7** T2 sign-off sheet = GO

### 6B. Platform later

- [ ] **6.8** Supabase persistence for progress/artifacts
- [ ] **6.9** Auth / saved accounts
- [ ] **6.10** Analytics event pipeline (module started, practice submitted, RB opened, completed)
- [ ] **6.11** Reflection engine quality pass (closer to scenario engine rigor)
- [ ] **6.12** AI prompt regression harness (weak/medium/strong fixtures)

### 6C. Explicitly later (protect focus)

- [ ] **6.13** Storyline snippet library
- [ ] **6.14** Certificates / badges
- [ ] **6.15** Community features
- [ ] **6.16** Multi-vertical expansion
- [ ] **6.17** Acquisition-oriented product decisions

---

## Parallel track — T0 process content (allowed anytime)

Do these without blocking engineering, and without implying T1.

- [ ] **P1** Post: Reverse Build as apprenticeship (not design notes)
- [ ] **P2** Post: Shared AI feedback engines + calibration lessons
- [ ] **P3** Post: Diagnosis-before-intervention design tension
- [ ] **P4** Post: Why free forever (career ROI)
- [ ] **P5** Post: Module Excellence Standard as personal quality bar
- [ ] **P6** Post: One sticky takeaway (“Trust is designed” / “Complexity should be earned”)
- [ ] **P7** Every T0 post passes claim check: no “research-validated,” no “full platform launch,” no “go complete all modules”

---

## Documentation / repo hygiene (support, not substitute for product)

Do lightly; do not let this become the main project.

- [ ] **D1** Keep adding dated files under `docs/grokfeedback/` for future reviews
- [ ] **D2** When RB v2 ships, optionally promote stabilized spec into `docs/experience/` (after lessons learned)
- [ ] **D3** Fix user-facing contradictions only when they affect T1 claims (internal historical docs can wait)
- [ ] **D4** Avoid new major strategy docs until heroes ship
- [ ] **D5** Update root README “current state” only after Phase 3/5 realities change

---

## Suggested calendar (solo builder, focused)

| Week | Focus | Exit criteria |
|------|--------|---------------|
| **Week 1** | Phase 0–2 | Artifacts capture + RB v2 trail works on existing scenarios |
| **Week 2** | Phase 3 | AI Literacy hero demoable end-to-end |
| **Week 3** | Phase 4 + 5 | PC hero (or clear secondary) + T1 GO/NO-GO |
| **Ongoing** | T0 posts | Audience without burning first impression |

If only one hero fits before soft launch: **ship T1 with AI Literacy only**, and do not lead public narrative with Performance Consulting or Simulation Design.

---

## Priority stack (when overwhelmed)

Do the next item in this order only:

1. Artifact capture  
2. Reverse Build v2 trail  
3. AI Literacy draft ownership practice  
4. Earned completion on AI Literacy  
5. AI Literacy validation (weak/medium/strong)  
6. Production smoke + claim audit  
7. T1 soft launch  
8. Performance Consulting triage desk  
9. Simulation Design honesty fix  
10. Everything else  

If a task is not on this stack, it is probably a distraction until T1.

---

## Definition of done for “this review cycle”

This Grok review cycle is operationally complete when:

- [x] Feedback sessions documented (`01`–`02`)
- [x] Module scorecard documented (`03`)
- [x] Dual hero redesign plan documented (`04`)
- [x] Reverse Build v2 spec documented (`05`)
- [x] Public-readiness checklist documented (`06`)
- [x] Action checklist documented (`07`)
- [ ] Phase 0 decisions locked by you
- [ ] First engineering vertical slice started (Phase 1 or 2)

---

## Immediate next actions (start here)

Copy these to your personal task list:

1. [ ] Lock Phase 0 decisions (15–30 minutes)  
2. [ ] Implement artifact types + store + save on scenario feedback  
3. [ ] Ship Reverse Build v2 empty/partial/complete trail on current modules  
4. [ ] Build AI Literacy draft artifact + ownership UI  
5. [ ] Re-validate AI feedback with structured context  
6. [ ] Gate AI Literacy completion  
7. [ ] Run T1 checklist in `06`  
8. [ ] Soft-launch only after GO  

---

## Bottom line

**Do not polish seven modules.**  
**Do not write more strategy as a substitute for the loop.**  
**Do not soft-launch on architecture reputation alone.**

Execute:

```text
Capture artifacts → Reverse Build tells the truth → AI Literacy becomes undeniable → then invite people
```

That is the action plan.
