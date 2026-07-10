# Grok Feedback 06 — Public-Readiness Checklist (Pass/Fail Before LinkedIn Launch)

**Date:** 2026-07-10  
**Reviewer:** Grok (Grok Build / xAI)  
**Scope:** Pass/fail criteria for public sharing — from process posts to product soft launch  
**Status:** Checklist / governance record — no code was changed in this session  
**Depends on:**  
- `docs/grokfeedback/02-deep-product-honesty-review.md`  
- `docs/grokfeedback/03-module-excellence-scorecard.md`  
- `docs/grokfeedback/04-hero-module-redesign-plan.md`  
- `docs/grokfeedback/05-reverse-build-v2-interaction-spec.md`  
- `docs/strategy/STRATEGY.md`  
- `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md`  

---

## 1. Purpose

Protect first impression with a skeptical L&D / learning-architect audience.

This checklist defines **what kind of public sharing is allowed at which product quality bar**. It replaces vague “ready enough” judgment with pass/fail gates.

### Core rule

| If the post implies… | Then the product must… |
|----------------------|------------------------|
| “I’m building / learning in public” | Be honest about incompleteness; no overclaim |
| “Go try this product” | Pass **Soft Product Launch** gates |
| “This is the future of ID / research-backed system” | Pass **Broad Credibility Launch** gates (higher bar) |

Losing the first impression moment is expensive. Process posts are cheap and valuable. Premature product claims are costly.

---

## 2. Three Launch Tiers

Do not treat “LinkedIn launch” as one thing. Use tiers:

| Tier | Name | Intent | Audience promise |
|------|------|--------|------------------|
| **T0** | Process sharing | Build audience; show craft | “I’m designing/building this in public” |
| **T1** | Soft product launch | Invite exploration of a proof path | “Try this guided loop; tell me what breaks” |
| **T2** | Broad credibility launch | Position as serious public learning product | “This is a credible professional learning product” |

**Default recommendation today (pre-hero redesign):**  
- **T0 allowed** with disciplined language  
- **T1 not yet** until heroes + Reverse Build v2 pass  
- **T2 not yet** until heroes pass + claim hygiene + multi-module confidence  

---

## 3. How to Use This Checklist

1. Pick the tier you want to post at.  
2. Run every required gate for that tier.  
3. Any **FAIL** blocks that tier.  
4. Record date + tester + notes at the bottom (or in a new grokfeedback validation note).  
5. Do not “average” passes — critical gates are binary.

### Severity labels

| Label | Meaning |
|-------|---------|
| **CRITICAL** | Any fail blocks the tier |
| **HIGH** | Fail blocks T1/T2; may allow T0 with disclosure |
| **MED** | Should fix soon; disclose if shipping T1 |
| **LOW** | Polish; does not block soft launch if disclosed |

---

## 4. Tier T0 — Process Sharing (LinkedIn / communities)

### Intent

Share thinking, screenshots of work-in-progress, design decisions, AI prompt lessons, Reverse Build philosophy, capability model reasoning — **without** implying a finished product.

### Allowed

- “Here’s what I’m building and why”  
- “Here’s a design tension I hit”  
- “Here’s how I’m validating AI feedback quality”  
- Screenshots clearly framed as WIP  
- Asking for practitioner critique on a specific decision  

### Not allowed (T0 language fails)

- “Launching today — go enroll / take the full course”  
- “Research-validated seven capabilities” (without bibliography)  
- “Full AI learning platform / adaptive engine / simulation suite” as if complete  
- “All modules ready” if experience depth is still template-level  
- Soft paywall / premium teaser that oversells current interactivity  

### T0 pass/fail gates

| ID | Gate | Sev | Pass criteria | Current baseline (2026-07-10) |
|----|------|-----|---------------|-------------------------------|
| T0-1 | Honest framing | CRITICAL | Post states WIP / building-in-public / not final | **PASS** if author is careful |
| T0-2 | No fake completeness | CRITICAL | Does not claim finished product or full adaptive/simulation platform | **PASS** if author is careful |
| T0-3 | No research overclaim | CRITICAL | Avoids “research-backed/validated” without source trail | **PASS** if author is careful |
| T0-4 | Visual honesty | HIGH | Screenshots labeled WIP if unfinished UI | Contextual |
| T0-5 | Single insight focus | MED | One idea per post; not a manifesto dump | Process choice |
| T0-6 | CTA quality | MED | CTA is comment/discuss/follow process — not “complete the course now” | Process choice |

### T0 verdict rule

**T0 is APPROVED by default** as long as T0-1, T0-2, and T0-3 pass in the actual post copy.

You do **not** need hero redesign complete to post process content. Strategy already endorses this.

### Suggested T0 post angles (safe now)

1. Reverse Build as apprenticeship, not design notes  
2. Why shared AI engines beat one-off module gimmicks  
3. Diagnosis-before-intervention calibration lessons  
4. Why free forever is a career strategy, not a pricing failure  
5. Module Excellence Standard as your quality bar  
6. “Complexity should be earned” / “Trust is designed” takeaways as thinking tools  

---

## 5. Tier T1 — Soft Product Launch (“Go try this”)

### Intent

Invite real users down a **controlled proof path** without claiming the entire seven-module system is equally excellent.

### Required proof path (minimum)

```text
Homepage
  → Orientation (optional but recommended)
  → AI Literacy hero loop
     (practice object → AI critique → Reverse Build v2 → reflection → earned completion)
  → Optional: Performance Consulting hero loop
```

Users may wander. The **advertised path** must work.

### T1 critical product gates

| ID | Gate | Sev | Pass criteria | Notes |
|----|------|-----|---------------|-------|
| T1-01 | Homepage exists and orients | CRITICAL | Visitor understands what it is, who it’s for, and how to start in ≤ 60 seconds | Largely present today |
| T1-02 | Primary CTA works | CRITICAL | Main CTA lands on Orientation, Dashboard, or AI Literacy without 404/dead end | Verify live deploy |
| T1-03 | AI is real | CRITICAL | Scenario and/or reflection feedback returns live model output in production | Must work with funded key + error states |
| T1-04 | AI failure is graceful | CRITICAL | Missing key / rate limit / API fail shows clear human message, not silent break | Partially present in client |
| T1-05 | AI Literacy hero practice object | CRITICAL | Imperfect AI draft (or equivalent object) exists; not freewrite-only | **FAIL today** — redesign pending |
| T1-06 | AI Literacy AI critique quality | CRITICAL | Weak/medium/strong manual validation passes; no generic praise collapse | Engine exists; re-validate after hero context |
| T1-07 | Reverse Build v2 trail | CRITICAL | Shows learner decision + AI critique before design rationale | **FAIL today** — static labels |
| T1-08 | Reverse Build honesty | CRITICAL | Empty state honest if no practice; never fabricates critique | Spec’d; not shipped |
| T1-09 | Reflection works | CRITICAL | Reflection AI returns useful transfer-oriented feedback | Present; quality secondary to scenario |
| T1-10 | Earned completion (hero) | HIGH | Complete requires practice + reflection on hero module | **FAIL today** — self-click |
| T1-11 | Time-to-practice | HIGH | Meaningful practice reachable in ≤ 8 minutes on AI Literacy | Needs theory compression + object |
| T1-12 | Mobile usable | HIGH | Hero loop usable on phone; no broken artifact panels | Test required |
| T1-13 | Production hygiene | HIGH | No default Next.js public junk as “brand”; critical images load | Improve before T1 |
| T1-14 | Claim/product match | CRITICAL | Homepage/Orientation claims match what 15-min click-through finds | **FAIL for “experience” depth claims today** |
| T1-15 | Open access preserved | HIGH | No accidental auth wall; modules open | Currently OK (local progress) |

### T1 strong-recommended gates (not all critical, but soft launch quality)

| ID | Gate | Sev | Pass criteria |
|----|------|-----|---------------|
| T1-16 | Performance Consulting hero ready **or** clearly secondary | HIGH | Either PC hero also passes object+RB loop, or public path does not lead with it |
| T1-17 | Dashboard doesn’t overpromise | HIGH | Module cards don’t imply equal polish if only one hero is excellent |
| T1-18 | About page trust | MED | Who built this + why free + what stage (beta/soft) is clear |
| T1-19 | Feedback channel | HIGH | Users know how to report issues (form, email, LinkedIn DM) |
| T1-20 | Analytics minimum | MED | At least basic page/module start events (can be lightweight) |
| T1-21 | Privacy basics | HIGH | If AI sends text to OpenAI, say so simply on practice UI or About |
| T1-22 | Cost controls awareness | MED | You can survive a small traffic spike (caps, monitoring, key limits) |

### T1 click-through test (human, 15–20 minutes)

Tester profile: skeptical instructional designer or LXD, not your co-builder.

**Script:**

1. Land on homepage cold (no briefing)  
2. Say out loud: What is this? Would I trust it?  
3. Follow primary CTA  
4. Complete AI Literacy primary practice once  
5. Open Reverse Build  
6. Complete reflection  
7. Mark/earn completion  
8. Optionally open one non-hero module for 2 minutes  

**Pass only if tester agrees with all:**

| # | Statement | Required answer |
|---|-----------|-----------------|
| 1 | “This does not feel like a generic course site.” | Yes |
| 2 | “I practiced a real professional judgment, not a quiz.” | Yes |
| 3 | “AI feedback felt specific, not empty praise.” | Yes |
| 4 | “Reverse Build showed my attempt, then design reasoning.” | Yes |
| 5 | “I understand the takeaway without rereading everything.” | Yes |
| 6 | “I would not feel tricked by the homepage claims.” | Yes |

Any **No** = T1 FAIL.

### T1 language allowlist / blocklist

**Allowed at T1:**

- “Soft launch / early access / guided beta”  
- “Start with AI Literacy”  
- “Practice judgment with AI critique and Reverse Build”  
- “Free professional learning product in active development”  
- “I’d love critique from IDs and LXDs”  

**Blocked at T1:**

- “Complete future-of-ID curriculum fully built”  
- “Adaptive learning platform” (as product category claim)  
- “Simulation platform” / “conversation simulator” as if shipped broadly  
- “Research-validated” / “peer-reviewed framework”  
- “Enterprise-ready” / “replaces your LMS”  
- Guarantees about career outcomes  

### T1 verdict rule

**T1 APPROVED only if:**

- All **CRITICAL** T1 gates pass  
- T1-10, T1-11, T1-12, T1-13 are PASS or explicitly waived with public “beta rough edges” note  
- Click-through test scores 6/6 Yes  
- Post CTA sends people to the **proof path**, not “browse all seven as equal”  

**Current projected verdict (2026-07-10):** **T1 FAIL** — hero practice objects + Reverse Build v2 + earned completion still outstanding.

---

## 6. Tier T2 — Broad Credibility Launch

### Intent

Position Future of ID as a serious public professional product and career-defining artifact — not merely a soft beta.

### Additional gates beyond T1

| ID | Gate | Sev | Pass criteria |
|----|------|-----|---------------|
| T2-01 | Two heroes excellent | CRITICAL | AI Literacy **and** Performance Consulting both pass hero success criteria |
| T2-02 | Non-hero honesty | CRITICAL | Non-hero modules either meet B+ practice honesty or are labeled “guided practice / expanding” in product UI |
| T2-03 | Simulation irony resolved or relabeled | CRITICAL | Simulation Design either has mini practice builder **or** public naming/description doesn’t overclaim simulation environment |
| T2-04 | Claim hygiene pass | CRITICAL | Full public copy audit (homepage, about, orientation, README, LinkedIn) against blocklist |
| T2-05 | Source language discipline | CRITICAL | Capability model public language = practice/theory-grounded; no fake research validation |
| T2-06 | Multi-device smoke test | HIGH | Desktop + mobile hero loops pass |
| T2-07 | Fresh-user test (n≥3) | CRITICAL | At least 3 external IDs/LXDs complete proof path; majority would recommend to a colleague |
| T2-08 | Performance basics | HIGH | Hero pages load acceptably; images not broken; AI p95 feedback not absurdly slow for demos |
| T2-09 | Support posture | HIGH | Known issues list + how to report bugs |
| T2-10 | Portfolio narrative ready | MED | You can tell the story in 3 minutes: problem → system → hero loop → Reverse Build → what you’d hire me to do |
| T2-11 | Optional bibliography spine | MED | Short public “foundations & sources” page or doc if using stronger evidence language |
| T2-12 | No critical docs/code contradiction in public surfaces | HIGH | User-facing routes and claims match product (internal docs drift OK if not public-facing) |

### T2 verdict rule

**T2 APPROVED only if T1 is approved AND all T2 CRITICAL gates pass.**

**Current projected verdict:** **T2 FAIL** (expected until dual heroes + claim hygiene + external testers).

---

## 7. Public Claim Audit Checklist

Run this against homepage, About, Orientation, LinkedIn post, pinned comment, and README if linked.

| Claim type | Status rule |
|------------|-------------|
| Free / open access | OK if true |
| Guided professional learning product | OK if T1 heroes work |
| Real AI feedback | OK only if production AI works |
| Reverse Build reconstructs experience | OK only if v2 trail ships |
| Seven capabilities | OK as framework map; not as “all equally deep experiences” until true |
| Research-grounded / research-backed | **FAIL** until source trail rebuilt; use “practice- and theory-grounded” |
| Adaptive learning (product feature) | **FAIL** as platform claim; OK as capability topic |
| Simulation / conversation design (product feature) | **FAIL** as environment claim until builder exists; OK as design judgment practice |
| Portfolio-grade / production-quality | OK at T1 with beta framing; careful at T2 |
| Career outcome guarantees | **FAIL** always |

---

## 8. Pre-Post Technical Smoke Checklist (T1/T2)

Run on **production URL**, not only localhost.

| # | Check | Pass/Fail |
|---|-------|-----------|
| 1 | `/` loads | |
| 2 | `/about` loads | |
| 3 | `/course/orientation` loads | |
| 4 | `/course/dashboard` loads | |
| 5 | `/course/module/ai-literacy` loads | |
| 6 | Practice feedback returns 200 + structured JSON UI | |
| 7 | Reflection feedback returns 200 + UI | |
| 8 | Reverse Build shows trail after practice | |
| 9 | Completion behaves as earned (hero) | |
| 10 | Local progress persists after refresh | |
| 11 | Mobile width 390px usable | |
| 12 | Console free of breaking errors on proof path | |
| 13 | AI error path tested (optional key revoke in staging) | |
| 14 | Images on homepage proof path load | |

All CRITICAL path rows must pass before T1 post goes live.

---

## 9. LinkedIn Post Templates by Tier

### T0 template (safe now)

> I’m building a free professional learning product on the future of instructional design.  
>  
> Today’s focus: [one idea — e.g., Reverse Build as apprenticeship].  
>  
> Not a launch — a process note.  
>  
> Curious how other IDs/LXDs handle [specific question].

### T1 template (only after T1 gates)

> Soft launching a free guided learning loop for instructional designers:  
>  
> Practice a real design judgment → get AI critique → inspect the design reasoning (Reverse Build).  
>  
> Start here: [proof path URL]  
>  
> It’s early. I want critique from practitioners more than praise.  
>  
> If you try it, tell me where it feels strong and where it breaks.

### T2 template (only after T2 gates)

> Future of ID is live as a free professional learning product for instructional designers and L&D practitioners.  
>  
> It’s built around seven future-ready capabilities, real AI-supported practice, and Reverse Build — so you can experience a design and inspect the judgment behind it.  
>  
> Start with [AI Literacy / proof path].  
>  
> If you lead L&D or hire learning designers, I’d value your stress test.

---

## 10. Decision Matrix: What Should You Do This Week?

| Goal | Do this | Do not do this |
|------|---------|----------------|
| Grow audience now | T0 process posts | “Go take the full product” |
| Maximize career signal soon | Ship AI Literacy hero + RB v2, then T1 | Polish all seven modules equally |
| Impress senior L&D | Add Performance Consulting hero before T2 | Lead with Simulation Design |
| Avoid credibility damage | Use claim audit + click-through test | Use “research-backed / simulation platform” language |

---

## 11. Minimum Path to First “Go Try This” (T1)

Ordered execution checklist (build sequence):

1. [ ] Artifact store + capture from scenario feedback  
2. [ ] Reverse Build v2 shell (trail + existing rationale layers)  
3. [ ] AI Literacy draft ownership practice object  
4. [ ] Prompt context includes structured marks  
5. [ ] Earned completion on AI Literacy  
6. [ ] Theory compression / time-to-practice ≤ 8 min  
7. [ ] Weak/medium/strong re-validation  
8. [ ] Production smoke checklist  
9. [ ] 15–20 min external click-through (at least 1 person if possible; 3 better)  
10. [ ] Claim audit on homepage + post copy  
11. [ ] T1 post with soft-launch framing + feedback CTA  

Only then: public “go try this.”

---

## 12. Sign-Off Sheet

Copy for each attempted launch:

| Field | Value |
|-------|--------|
| Date | |
| Tier attempted | T0 / T1 / T2 |
| Production URL | |
| Tester name(s) | |
| Critical gates result | PASS / FAIL |
| Click-through 6/6 | YES / NO / N/A |
| Claim audit | PASS / FAIL |
| Known issues disclosed? | YES / NO |
| Go / No-Go | **GO** / **NO-GO** |
| Notes | |

### Current official recommendation (2026-07-10)

| Tier | Go / No-Go | Why |
|------|------------|-----|
| **T0 Process sharing** | **GO** | Content + real AI + docs story are enough if language is disciplined |
| **T1 Soft product launch** | **NO-GO** | Missing hero practice object, RB v2 artifact trail, earned completion, claim/product match |
| **T2 Broad credibility launch** | **NO-GO** | Dual heroes + external validation + claim hygiene incomplete |

---

## 13. Relationship to Later Action Checklist

This document defines **launch gates**.  
A separate end-of-day **action-step checklist** should convert build work into ordered tasks (infrastructure → AI Literacy hero → RB v2 → PC hero → T1).

Suggested next file after this review series:

- `docs/grokfeedback/07-action-step-checklist.md` (or similar)

---

## 14. Bottom Line

- **Post process now.**  
- **Do not soft-launch the product yet.**  
- Soft launch becomes honest only when one hero loop is undeniable:  
  **object → judgment → AI critique → artifact-aware Reverse Build → transfer → earned completion**  
- Broad launch needs two heroes and claim hygiene, not seven medium modules.

Protect the first impression. Earn the “go try this” sentence.
