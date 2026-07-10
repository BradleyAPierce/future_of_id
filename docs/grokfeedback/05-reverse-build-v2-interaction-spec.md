# Grok Feedback 05 — Reverse Build v2 Interaction Spec (Learner Artifacts)

**Date:** 2026-07-10  
**Reviewer:** Grok (Grok Build / xAI)  
**Scope:** Interaction, data, UX, and acceptance specification for Reverse Build v2  
**Status:** Spec only — no code was changed in this session  
**Depends on:**  
- `docs/experience/REVERSE_BUILD_EXPERIENCE.md` (philosophy source of truth)  
- `docs/grokfeedback/02-deep-product-honesty-review.md`  
- `docs/grokfeedback/03-module-excellence-scorecard.md`  
- `docs/grokfeedback/04-hero-module-redesign-plan.md`  

---

## 1. Purpose

Close the largest product honesty gap in Future of ID:

> Reverse Build currently *says* it reconstructs the learner’s experience, but mostly shows static design-rationale cards.

**Reverse Build v2** makes the philosophy true:

1. Reconnect the learner to **what they just did** using real artifacts  
2. Then progressively reveal **why the experience was designed that way**  
3. Preserve apprenticeship tone — mentorship, not a code tour or topic recap  

This spec is the acceptance layer for the dual hero redesign (AI Literacy + Performance Consulting) and the reusable pattern for later modules.

---

## 2. Product Principle (Non-Negotiable)

### What we reverse build

The **learning experience the learner just completed** — not the module topic, not the whole course, not the repository.

### Signature line (keep)

> You just experienced this as a learner. Now let’s inspect it as an instructional designer.

### Apprentice principle (keep)

Standing beside an experienced instructional designer reconstructing their thinking aloud.

### What Reverse Build v2 is not

- Module summary  
- Developer walkthrough / code explanation  
- Generic design notes detached from the learner’s attempt  
- A second theory dump  
- A required linear gate that blocks content access (open-access product stays open)  
- Auto-generated “why you were wrong” grading theater  

---

## 3. Current State → Target State

| Dimension | v1 (current) | v2 (target) |
|-----------|--------------|-------------|
| Opening trail | 4 static labels | Live artifact trail from learner session |
| Decision shown | None | Learner response + structured choices |
| AI critique shown | None | Actual feedback object returned to learner |
| Practice object | Not referenced | Snapshot of draft / request packet / scenario |
| Design rationale | Modal cards from content | Same content, *after* trail, explicitly linked |
| Empty state | Looks complete even with no practice | Honest empty / partial states |
| Reflection | Not wired into RB | Optional trail item when present |
| Completion coupling | None | Can inform earned completion (heroes) |

---

## 4. Experience Architecture

### 4.1 Two-zone model

Reverse Build v2 has exactly two zones, always in this order:

```text
ZONE A — Lived Experience Trail (learner artifacts)
ZONE B — Design Reasoning Layers (authored Reverse Build content)
```

**Rule:** Zone B must not appear to be “the whole Reverse Build” if Zone A is empty. If artifacts are missing, Zone A shows an honest empty/partial state first.

### 4.2 Progressive psychological sequence

```text
1. Reconnect (“this is what you did”)
2. Name the design problem the experience targeted
3. Reveal foundations
4. Reveal design decisions
5. Reveal AI collaboration in the build
6. Reveal trade-offs
7. Transfer / what to reuse
```

This maps to `REVERSE_BUILD_EXPERIENCE.md` layers 1–7.

### 4.3 Placement in module page flow

```text
... Experience practice + AI feedback
→ Reverse Build v2
→ Reflection (+ AI feedback)
→ Earned completion
```

**Note on reflection in trail:** Philosophy includes reflection in the reconstructed experience. Implementation options:

| Option | Behavior | Recommendation |
|--------|----------|----------------|
| **A (preferred for heroes)** | RB appears after primary practice AI feedback; trail includes practice artifacts immediately; reflection appears as trail item once submitted (RB trail updates) | Best apprenticeship loop |
| **B** | RB only after reflection | Stronger completeness, higher drop-off risk |
| **C** | RB before practice | Reject — violates “reconstruct what you just did” |

**Hero default:** Option A.

Reflection remains a separate module section after Reverse Build for writing affordance, but Reverse Build trail can update when reflection completes (soft enhancement).

Minimum v2 ship requirement: trail includes **challenge + decision + AI critique**. Reflection in trail is phase-1.5 if timing is tight.

---

## 5. Data Model

### 5.1 Session artifact store (client-first)

Key suggestion: `future-of-id:learner-artifacts:v1`  
(or extend course progress store — either is fine if schema is explicit)

```ts
type LearnerArtifactStore = {
  version: 1;
  byModule: Record<string, ModuleLearnerArtifacts>;
};

type ModuleLearnerArtifacts = {
  moduleSlug: string;
  updatedAt: string; // ISO
  primaryPractice?: PracticeAttemptArtifact;
  additionalPractices?: PracticeAttemptArtifact[];
  reflection?: ReflectionAttemptArtifact;
};

type PracticeAttemptArtifact = {
  attemptId: string;
  practiceKind:
    | "ai-draft-review"
    | "course-request-triage"
    | "scenario-freewrite"
    | string;
  scenarioId?: string;
  scenarioTitle?: string;
  focus?: string;
  /** What the learner saw */
  challenge: {
    headline: string;
    body: string;
    artifactSummary?: string; // short text snapshot of draft/packet
    artifactRef?: {
      type: string;
      id: string;
    };
  };
  /** What the learner decided */
  decision: {
    freeText: string;
    structured?: Record<string, unknown>;
    /** human-readable chips for UI */
    structuredSummary?: string[];
  };
  /** AI critique returned to learner */
  aiCritique?: {
    summary: string;
    strengths: string[];
    gap?: string;
    nextStep: string;
    receivedAt: string;
  };
  revisionNote?: string;
  completedAt: string;
};

type ReflectionAttemptArtifact = {
  prompt: string;
  freeText: string;
  aiCritique?: {
    summary: string;
    strengths: string[];
    nextStep: string;
    receivedAt: string;
  };
  completedAt: string;
};
```

### 5.2 Capture points (when to write artifacts)

| Event | Write |
|-------|--------|
| Practice AI feedback success | Upsert `primaryPractice` (or push additional) with challenge, decision, aiCritique |
| One-line revision submitted | Update `revisionNote` |
| Reflection AI feedback success | Upsert `reflection` |
| Scenario switch without submit | Do not invent critique artifacts |
| Failed AI call | Do not store fake critique; may store draft decision as incomplete |

### 5.3 Structured decision shapes (heroes)

**AI Literacy — `ai-draft-review`**

```ts
structured: {
  partMarks: Array<{
    partId: string;
    partLabel: string;
    mark: "keep" | "ai-revise" | "human-rewrite" | "reject";
  }>;
  checklist: Record<string, boolean>;
}
```

`structuredSummary` examples:

- `Intro: human-rewrite`
- `Quiz: reject`
- `Safeguard checklist: 4/5`

**Performance Consulting — `course-request-triage`**

```ts
structured: {
  tags: Array<{
    claimId: string;
    claimLabel: string;
    tag: "known" | "assumption" | "unknown" | "non-training";
  }>;
  diagnosisStance:
    | "training-justified"
    | "evidence-incomplete"
    | "non-training-primary"
    | "hybrid";
  discoveryQuestionIds: string[];
  customDiscoveryQuestion?: string;
}
```

`structuredSummary` examples:

- `Stance: evidence-incomplete`
- `Tagged 2 assumptions, 1 non-training factor`
- `Selected 3 discovery questions`

### 5.4 Authored content remains separate

Existing module content field:

- `moduleContent.layers.reverseEngineering`

v2 does **not** replace authored RB content.  
v2 **orders and frames** it after the lived trail.

Keep section id mapping used by v1 where possible:

| Content section id | RB layer label |
|--------------------|----------------|
| `what-this-module-is-solving` | The Problem |
| `proven-practice-vs-new-approach` | Instructional Foundations |
| `key-design-decisions` | Design Decisions |
| `how-ai-supported-the-build` | AI Collaboration |
| `tradeoffs-and-constraints` / `where-this-could-break` | Design Trade-offs |
| `what-another-designer-can-reuse` / `reflection-question` / `reflection` | Learning Science & Transfer |

---

## 6. UI Specification

### 6.1 Component tree (proposed)

```text
ReverseBuildV2
├── ReverseBuildHeader (signature line + purpose)
├── LivedExperienceTrail (Zone A)
│   ├── TrailStatusBanner (complete | partial | empty)
│   ├── TrailCardChallenge
│   ├── TrailCardDecision
│   ├── TrailCardAiCritique
│   ├── TrailCardRevision (optional)
│   └── TrailCardReflection (optional / when present)
├── ReasoningBridge (“Now inspect the design choices…”)
└── DesignReasoningLayers (Zone B)
    ├── LayerCard[] (existing modal pattern OK)
    └── ReverseBuildModal (existing pattern OK)
```

Reuse:

- Accent/amber visual language from current Reverse Build  
- Modal “Reveal the Thinking” pattern can stay for Zone B depth  
- Do not reuse static 4-label grid as if it were the trail  

### 6.2 Zone A — Lived Experience Trail

#### Header copy

**Eyebrow:** Inspect the Build  
**Title:** You just experienced this as a learner. Now let’s inspect it as an instructional designer.  
**Body:** Reverse Build reconstructs *your* learning experience first — the challenge, your decision, and the critique you received — then reveals the design reasoning behind it.

#### Trail cards (order fixed)

##### Card 1 — The learning challenge

| State | Content |
|-------|---------|
| Complete | Headline + body from practice challenge; optional artifact summary excerpt |
| Empty | “No practice challenge yet. Complete the Design Practice above to reconstruct this experience.” + anchor link/button to Experience |

##### Card 2 — The decision you practiced

| State | Content |
|-------|---------|
| Complete | Structured chips (`structuredSummary`) + truncated free-text (expand/collapse) |
| Partial | Free-text only if structured missing |
| Empty | CTA to complete practice |

##### Card 3 — The AI-supported critique

| State | Content |
|-------|---------|
| Complete | Summary; strengths (2); gap (if scenario); next step — same fields learner already saw |
| Empty | “AI critique appears here after you get feedback on your decision.” |
| Error legacy | Never invent critique |

**Important:** This is a **reconstruction**, not a second AI call. Display stored critique only.

##### Card 4 — Optional revision

Show only if `revisionNote` exists.

##### Card 5 — Reflection (optional in v2.0, recommended v2.1)

If reflection artifact exists, show prompt + truncated response + critique summary.  
If not, either hide card or show “Reflection continues below” without shaming.

### 6.3 Trail status banner

| Status | Condition | Message tone |
|--------|-----------|--------------|
| `complete` | decision + aiCritique present | “Experience trail ready. Inspect the design reasoning next.” |
| `partial` | decision without critique, or challenge only | “Partial trail — finish AI feedback to fully reconstruct your experience.” |
| `empty` | no practice attempt | Honest empty state; still allow browsing Zone B, but label it as “design notes without your attempt” |

**Open-access rule:** Never hard-lock Zone B.  
**Honesty rule:** Never pretend Zone A is populated.

### 6.4 Reasoning bridge (between zones)

Short mentor line:

> Now that we’ve reconstructed what you did as a learner, let’s inspect the instructional design decisions that shaped that experience.

Optional micro-prompt:

> As you open each layer, ask: “What judgment was the designer protecting?”

### 6.5 Zone B — Design Reasoning Layers

Behavior can largely match v1 modal cards:

- Grid of layer cards  
- “Reveal the Thinking” opens modal  
- Mentor prompt per layer  
- Authored content sections  

**v2 additions:**

1. **Default sort order** must follow philosophy order (Problem → Foundations → Decisions → AI Collaboration → Trade-offs → Transfer), not raw content file order if they differ.  
2. **Contextual intro line** when trail is complete, e.g.:  
   - AI Literacy: “These decisions explain why you reviewed an imperfect draft under time pressure — not a perfect AI sample.”  
   - Performance Consulting: “These decisions explain why the request packet was incomplete and pressure-heavy on purpose.”  
3. Where possible, **one bridge sentence** in modal that references trail without requiring dynamic NLG:  
   Use authored static bridges per module, not AI generation.

Example static bridge (AI Literacy Design Decisions):

> Notice how the draft you reviewed was intentionally imperfect. That was not a content accident; it was the practice condition.

### 6.6 Empty / first-visit behavior

If learner scrolls to Reverse Build before practice:

1. Show full Reverse Build header  
2. Zone A empty state with CTA “Go to Design Practice”  
3. Zone B visible but secondary: eyebrow “Design reasoning (stronger after you practice)”  
4. Do **not** auto-block reading  

This preserves open exploration while protecting the apprenticeship sequence.

### 6.7 Return-visit behavior

If artifacts exist in local storage:

- Trail hydrates immediately  
- Prefer primary practice attempt; if multiple, show most recent primary, with optional “other attempts” disclosure later  

Clearing site data clears trail (acceptable for client-first).

---

## 7. Interaction Details

### 7.1 No new AI generation inside Reverse Build (v2.0)

Reverse Build v2 is **deterministic reconstruction + authored reasoning**.

Do not call OpenAI to “explain the learner’s attempt” inside RB for v2.0.

Why:

- Credibility and cost control  
- Avoid second-guessing the scenario engine  
- Keep RB as design apprenticeship, not another coach turn  

Future v2.5 optional: “Connect my attempt to a design principle” as explicit opt-in — out of scope now.

### 7.2 Expand/collapse rules

- Free-text decision: show first ~400 chars; expand for full  
- AI strengths: show all (already max 2)  
- Artifact summary: show excerpt; expand for full challenge body  
- Zone B: keep modal for depth to avoid page bloat  

### 7.3 Accessibility

- Trail cards as regions with headings  
- Empty-state CTAs keyboard accessible  
- Modal focus trap retained from v1  
- Don’t rely on color alone for complete/partial/empty status  
- Prefer `aria-live` only for status banner updates after practice completion (polite)  

### 7.4 Mobile

- Trail cards stack single column  
- Structured chips wrap  
- Avoid horizontal label grids that look “complete” without content  
- Sticky “Back to Design Practice” only in empty state (optional)  

### 7.5 Analytics events (optional now, define names)

| Event | When |
|-------|------|
| `rb_v2_viewed` | RB section in view |
| `rb_v2_trail_status` | empty/partial/complete |
| `rb_v2_layer_opened` | Zone B modal open + section id |
| `rb_v2_cta_to_practice` | empty-state CTA click |

No analytics implementation required for hero functional done.

---

## 8. Module Wiring

### 8.1 Hero modules (must implement fully)

#### AI Literacy

| Trail field | Source |
|-------------|--------|
| Challenge | Draft ownership scenario + draft summary |
| Decision | Part marks + checklist + free-text |
| AI critique | Scenario feedback response |
| RB bridges | Emphasize imperfect draft + time pressure + human ownership |

#### Performance Consulting

| Trail field | Source |
|-------------|--------|
| Challenge | Request packet summary + pressure context |
| Decision | Tags + stance + discovery selections + free-text |
| AI critique | Scenario feedback response |
| RB bridges | Emphasize incomplete evidence + anti-order-taking |

### 8.2 Non-hero modules (compatibility mode)

Until unique practice objects exist:

| Trail field | Source |
|-------------|--------|
| Challenge | Selected scenario text |
| Decision | Free-text response (+ empty structured) |
| AI critique | Scenario feedback if present |

This alone is a major honesty upgrade over static labels, even without hero artifacts.

### 8.3 Integration surface in current architecture

Today:

- `ModuleLayerRenderer` → `ReverseBuildModalCards` for `kind === "reverseBuild"`

Target:

- `ModuleLayerRenderer` → `ReverseBuildV2`  
- `ReverseBuildV2` receives:  
  - `intro` + `sections` (authored content)  
  - `moduleSlug`  
  - artifacts from store/hook  

Practice components (`ScenarioDecisionAI` and future hero practice components) write to the same store on successful feedback.

---

## 9. Copy Deck (Canonical)

### Header

- Eyebrow: `Inspect the Build`  
- Title: `You just experienced this as a learner. Now let’s inspect it as an instructional designer.`  
- Body: `First we reconstruct your experience. Then we reveal the design decisions, trade-offs, and judgment behind it.`

### Zone A labels

1. `The learning challenge`  
2. `The decision you practiced`  
3. `The AI-supported critique`  
4. `Your revision` (optional)  
5. `Your reflection` (optional)

### Empty state CTA

- `Complete Design Practice to reconstruct your experience`  
- Button: `Go to Design Practice`

### Partial state

- `You started a decision, but AI critique is not in the trail yet. Submit for feedback to finish reconstruction.`

### Bridge to Zone B

- `Now inspect the instructional design reasoning that shaped this experience.`

### Zone B eyebrow when empty trail

- `Design reasoning (richer after you practice)`

### Zone B eyebrow when complete trail

- `Design reasoning behind your experience`

---

## 10. State Machine (Simplified)

```text
[No artifacts]
  -> show empty trail + Zone B secondary

[Decision saved, no critique]
  -> partial trail

[Decision + critique]
  -> complete trail
  -> Zone B primary framing

[Reflection added later]
  -> append reflection card (does not invalidate complete)

[New practice attempt supersedes primary]
  -> replace primaryPractice
  -> trail updates to latest primary
```

---

## 11. Acceptance Criteria

### 11.1 Must-pass (v2.0)

1. After successful practice feedback, reloading the module still shows the learner’s decision and AI critique in Reverse Build (same browser, local persistence).  
2. Reverse Build never fabricates AI critique that was not received.  
3. Empty state is honest and offers navigation to Design Practice.  
4. Zone A appears above Zone B.  
5. Zone B layer order matches philosophy order.  
6. No additional LLM call is required to render Reverse Build.  
7. AI Literacy and Performance Consulting trails include structured summaries when hero practices are used.  
8. Non-hero modules still get free-text + critique trail via compatibility mode.  
9. Accessibility: keyboard path for empty CTA + Zone B modals.  
10. Visual design remains “premium product,” not debug dump of JSON.

### 11.2 Hero excellence bar (ties to redesign plan)

Pass only if a tester can say:

> “Reverse Build showed *my* decision and *my* feedback, then explained why the experience was built that way.”

If they only saw design notes, v2 failed.

### 11.3 Explicit fail conditions

- Static four labels with no learner data presented as reconstruction  
- AI re-generated critique that differs from what learner saw  
- Code/repo tour language  
- Blocking open access to Zone B  
- Trail shows another learner’s data / cross-module leakage  

---

## 12. Phased Implementation

### Phase RB-0 — Schema + store hook

- Define types  
- `useLearnerArtifacts(moduleSlug)`  
- write APIs: `savePracticeAttempt`, `saveReflectionAttempt`  

### Phase RB-1 — Capture from existing ScenarioDecisionAI

- On feedback success, persist challenge/decision/critique  
- Compatibility mode for all modules  

### Phase RB-2 — ReverseBuildV2 UI shell

- Replace/wrap `ReverseBuildModalCards`  
- Zone A trail + Zone B existing modals  
- Empty/partial/complete states  

### Phase RB-3 — Hero structured artifacts

- AI draft marks + PC triage structure into `structured` + `structuredSummary`  
- Module-specific bridge intros  

### Phase RB-4 — Reflection trail card + polish

- Add reflection artifact card when present  
- Microcopy, mobile, analytics hooks  

**Suggested order relative to hero plan:**  
RB-0 → RB-1 → RB-2 can ship before full hero objects and already improve honesty site-wide.  
RB-3 lands with hero practices.

---

## 13. Content Authoring Guidelines (Zone B)

When editing Reverse Build content for heroes:

1. Write as if the learner already practiced.  
2. Prefer “the draft you evaluated” / “the request packet you triaged” over generic topic language.  
3. Keep trade-offs honest; do not present one correct design religion.  
4. AI Collaboration layer = how AI helped **build the experience**, not “AI is good.”  
5. Transfer layer should end in a reusable professional move.  

Do not put learner-specific dynamic facts into authored MD/TS content.  
Dynamic facts belong only in Zone A artifacts.

---

## 14. Relationship to Other Docs

| Doc | Relationship |
|-----|--------------|
| `REVERSE_BUILD_EXPERIENCE.md` | Philosophy remains source of truth; this spec implements it |
| Hero redesign plan (`04`) | Heroes supply richer artifacts for Zone A |
| Module Excellence Standard | Directly raises criterion 5 (Reverse Build) |
| ADR-009 / scenario engine | Provides critique payload shape for trail |
| SYSTEM-INSTRUCTIONS route notes | v2 still works on single module page; no new route required |

Optional later: promote a stabilized version of this spec into `docs/experience/REVERSE_BUILD_V2_SPEC.md` after implementation lessons. Until then, keep in `grokfeedback/` as review record + build guide.

---

## 15. Out of Scope (v2.0)

- Server-side persistence / accounts  
- Cross-device sync  
- AI-authored Reverse Build narratives  
- Scoring/grading the learner inside RB  
- Forcing RB completion before later modules  
- Separate `/reverse-engineering` route  
- Rebuilding all Zone B prose for non-hero modules  

---

## 16. Definition of Done

Reverse Build v2 is done when:

1. Philosophy line is operationally true, not decorative  
2. Heroes show structured artifact trails  
3. All modules can show at least free-text + critique trails  
4. Empty states are honest  
5. Zone B remains strong authored mentorship content  
6. Scorecard criterion 5 can move from ~3.5 toward **≥ 4.5** on heroes  
7. A skeptical ID can open RB and immediately recognize their own work  

---

## 17. Bottom Line

**v1 Reverse Build = excellent rationale library with apprenticeship branding.**  
**v2 Reverse Build = apprenticeship that starts from the learner’s actual attempt.**

The product differentiator is not more design notes.  
It is this sequence made real:

```text
Your challenge → your decision → your critique → their design reasoning
```

Ship that, and Reverse Build stops being a claim and becomes the signature.

---

## Next

Proceed to **#4 — Public-readiness checklist with pass/fail criteria before LinkedIn launch**, using this spec + hero plan as gates.
