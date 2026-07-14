# Reverse Build v2 Implementation Brief

## Document Status and Authority

- **Status:** Proposed for Bradley approval under Section 4.1 of `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`
- **Current implementation status:** Not implemented
- **Authority after approval:** Controlling implementation specification for Reverse Build v2

This brief defines the product contract that later artifact-architecture, implementation, and validation work must satisfy. `REVERSE_BUILD_EXPERIENCE.md` remains the experience-philosophy source, and `INSTRUCTIONAL_ARCHITECTURE.md` remains the instructional-sequence source. Where implementation details for Reverse Build v2 are concerned, this brief controls after Bradley approves it.

Claude, Grok, and other external reviews are advisory evidence only. They do not create requirements or override this brief, the launch checklist, or Bradley's decisions.

This document distinguishes:

- **Current observed behavior:** behavior visible in the repository now
- **Reverse Build v2 target:** behavior approved for later implementation
- **Later implementation work:** types, persistence, hooks, services, components, and validation governed by later checklist sections
- **Excluded behavior:** behavior that is not part of Reverse Build v2 launch scope

## 1. Purpose and Current Problem

Reverse Build is the Future of ID mechanism for making capability development and professional reasoning visible. The current authored experience already provides useful Problem, Instructional Foundations, Design Decisions, AI Collaboration, Trade-offs, and Transfer content in an apprenticeship-oriented presentation. That authored reasoning is valuable and must be preserved.

The current implementation does not yet fulfill the learner-specific reconstruction implied by some copy:

- Reverse Build currently renders authored module reasoning.
- Design Practice responses and AI Review feedback remain component-local.
- Reverse Build does not currently receive or display the learner's actual work.
- Existing learner-facing copy can imply learner-specific reconstruction that is not yet observable.
- No approved artifact, fallback, privacy, failure, accessibility, or multi-prompt contract currently governs Reverse Build.

The current authored Reverse Build is not a failed experience. It is the stable professional-reasoning foundation on which v2 will add a truthful learner-artifact comparison.

## 2. Intended Learner Experience

Reverse Build v2 will reconnect the learner with available evidence from Design Practice and AI Review, then place that evidence beside authored reasoning about how and why the experience was designed. This reconstruction makes capability development inspectable without claiming to prove learning or infer the learner's private internal state.

When corresponding evidence exists, the learner should be able to reconnect with:

- the professional challenge or capability need
- what needed to be learned, investigated, or practiced
- the learner's Design Practice decision or response
- the AI Review feedback associated with that response
- how relevant concepts were applied
- authored implementation decisions
- design constraints and trade-offs
- where professional judgment remained necessary
- how practice and feedback may change understanding
- transferable lessons for future work

Bradley's demonstrated capability-development journey provides authored context for why a capability mattered, what he investigated, and what design reasoning shaped the implemented experience. The learner's artifact provides evidence of the learner's own practice. Reverse Build may compare those sources, but it must not imply that the learner shares Bradley's pathway, needs the same capabilities, or should reach the same professional conclusions.

## 3. Instructional Sequence and Reflection Boundary

Reverse Build v2 preserves this sequence:

```text
Design Practice → AI Review → Reverse Build → Reflection
```

- Reverse Build occurs after Design Practice and its AI Review opportunity in the module flow.
- Reflection remains a separate, subsequent transfer activity.
- Reverse Build must not receive, display, require, summarize, infer from, or depend on Reflection responses or Reflection feedback.
- Reverse Build may prepare learners for Reflection by surfacing decisions, evidence, and transferable questions, but it must not absorb Reflection into the reconstruction experience.
- A learner may open Reverse Build without completing Design Practice or requesting AI Review; sequence describes instructional placement, not an access gate.

## 4. Scope Boundaries

Reverse Build v2 focuses on:

- transferable capability development
- professional reasoning
- instructional and product-design decisions
- constraints and trade-offs
- human judgment
- comparison among learner practice, AI Review, and authored reasoning

Reverse Build v2 is not:

- journaling or a personal diary
- autobiography or a founder story
- raw development history
- prompt exposure or a prompt library
- chain-of-thought exposure
- an AI transcript viewer
- a source-code walkthrough
- a developer implementation tour
- a completion gate
- an assessment, grading, or scoring engine
- automatic capability diagnosis or recommendation
- automatic personalization or pathway generation

Reverse Build may describe prompt intent, rubric purpose, or technical constraints when those details explain an instructional decision. It must not expose raw internal prompts, hidden model reasoning, secrets, implementation internals, or irrelevant code.

## 5. Required Input Contract

Section 5 will define implementation types and persistence. Reverse Build v2 must eventually receive the following conceptual information without requiring unnecessary personal data.

| Information | Requirement | Purpose |
|---|---|---|
| Module identifier or slug | Required | Isolate artifacts and authored reasoning to the correct module. |
| Design Practice prompt or scenario identifier | Required for every prompt entry | Bind responses and feedback to an authoritative prompt. |
| Authored prompt context | Required | Give the learner enough context to interpret the saved response without storing redundant sensitive text. |
| Prompt label and authoritative order | Required | Present multiple prompts consistently. |
| Learner response or structured decision | Optional | Display only when a corresponding artifact exists. |
| AI Review state | Required | Distinguish not requested, pending, complete, failed, and unavailable states. |
| AI Review feedback | Optional | Display only when valid feedback exists for the current response. |
| Prompt-level completion state | Required | Distinguish incomplete, response-only, reviewed, and unavailable states. |
| Module-level artifact availability | Required | Select the truthful complete, partial, empty, cleared, or unavailable presentation. |
| Multiple-prompt grouping | Required when more than one prompt exists | Keep each response and review attached to the correct prompt. |
| Minimal display metadata | Optional | Use labels or timestamps only when necessary to identify the current artifact accurately. |

The contract must not require a learner name, email address, account identifier, demographic profile, inferred capability score, or Reflection content. Learner text should not be duplicated when an authoritative artifact reference is sufficient.

## 6. Dynamic and Authored Content Boundaries

### Dynamic learner-artifact content

The following may become dynamic when valid artifacts exist:

- learner Design Practice response or structured decision
- AI Review state and feedback
- prompt-level completion state
- partial-completion indicators
- contextual prompt or scenario labels tied to the authoritative artifact

Dynamic content must be rendered as learner work or AI Review, never as authored Future of ID reasoning.

### Authored professional reasoning

These existing module-controlled layers remain authored content:

- Problem or professional challenge
- Instructional Foundations
- Design Decisions
- AI Collaboration
- Design Constraints or Trade-offs
- Transfer or reusable lessons
- other approved professional reasoning already present in structured module content

Dynamic learner artifacts must not overwrite, rewrite, generate, or silently alter authored professional reasoning. Authored content remains available when learner artifacts are empty, partial, invalid, cleared, or unavailable.

## 7. Capability-Development Reconstruction

Reverse Build v2 reconstructs capability development through explicit evidence sources:

| Reconstruction question | Source and treatment |
|---|---|
| 1. What capability need or professional challenge existed? | Authored by Future of ID from Bradley's documented professional context and the experience's target problem. Do not present it as a universal need. |
| 2. What needed to be learned, investigated, or practiced? | Authored by Future of ID as the knowledge, decision, or practice need that shaped the experience. |
| 3. How were concepts applied? | Compare authored foundations and intended practice with the learner's available response and AI Review. Do not claim application when no artifact exists. |
| 4. What implementation decisions were made? | Preserve authored Design Decisions describing scope, sequence, interaction, feedback, and implementation choices. |
| 5. What trade-offs existed? | Preserve authored constraints and trade-offs, including rejected complexity and competing design priorities. |
| 6. Where was professional judgment necessary? | Use authored reasoning and bounded comparison with learner work and AI Review. AI feedback does not establish a single correct professional judgment. |
| 7. How may practice and feedback change understanding? | Invite comparison between the learner's response, AI feedback, and authored reasoning. Describe observable differences; never assert hidden growth, comprehension, or belief. |
| 8. What transfers to another context? | Preserve authored reusable lessons and invite the learner to consider relevance to another role or project without prescribing Bradley's pathway. |

Evidence roles remain distinct:

- Future of ID supplies the professional challenge, foundations, implementation decisions, constraints, and reusable lessons.
- The learner supplies the Design Practice response or decision.
- AI Review supplies bounded feedback associated with that response.
- Reverse Build supplies the comparison structure; it does not turn comparison into a factual diagnosis of internal learning.

## 8. Multiple Design Practice Prompts

Reverse Build v2 must support modules with one or more Design Practice prompts or scenarios.

- Each prompt is identified by an authoritative, stable interaction identifier and module identifier.
- Each prompt appears as an individual entry within an ordered module artifact trail. A grouped summary may orient the learner, but it must not merge distinct responses or feedback.
- Completed, response-only, reviewed, failed-review, and incomplete prompts use explicit text labels in addition to any visual indicator.
- AI Review feedback remains associated with the exact prompt identifier and learner response that produced it.
- Revising or switching prompts must not erase valid artifacts belonging to other prompts.
- A partially completed module shows the valid completed entries and neutral states for incomplete entries.
- No response text or AI Review is invented for an incomplete prompt.
- Authored Reverse Build reasoning remains available regardless of prompt completion.

Later artifact architecture must prevent stale feedback for an earlier response from appearing as feedback for a revised response.

## 9. Empty and Fallback States

Reverse Build remains accessible in every state.

| State | Required presentation |
|---|---|
| No learner artifact | State neutrally that no Design Practice response is available for comparison. Keep authored reasoning visible and offer an optional path to Design Practice without blocking Reverse Build. |
| Response exists; AI Review not requested | Show the response with a clear “AI Review not requested” state. Do not imply critique exists. |
| Response exists; AI Review pending or temporarily unavailable | Show the response and an accurate pending or unavailable label. Keep authored reasoning available. |
| AI Review failed | Show the response, state that review is unavailable, and avoid raw technical details. Do not convert failure into learner nonparticipation. |
| Only some prompts are complete | Show valid prompt entries independently and label remaining prompts as incomplete. |
| Artifacts intentionally cleared | Respect the cleared state and show the no-artifact presentation. Do not silently reconstruct prior work. |

Fallback language must be neutral, non-shaming, and honest. Learners are never forced backward or required to complete practice before inspecting authored reasoning.

## 10. Failure and Data-Integrity Behavior

| Failure condition | Required behavior |
|---|---|
| Local persistence unavailable | Continue with authored Reverse Build content and an unavailable-artifact explanation. |
| Artifact retrieval fails | Fail safely, preserve authored content, and avoid treating the failure as learner nonparticipation. |
| Malformed or incompatible stored data | Treat only the invalid record as unavailable unless later migration rules can recover it safely. Do not render untrusted shapes. |
| Learner response exists but feedback is missing | Show the response and an accurate no-feedback state. |
| AI feedback contains an error state | Do not display it as completed critique; show a bounded unavailable message. |
| One prompt artifact fails | Preserve unrelated valid prompt artifacts and authored content. |

Failure states must not expose raw errors, stack traces, storage keys, internal prompts, model chain of thought, secrets, or implementation internals. A failed dynamic layer must never prevent access to recoverable authored content.

## 11. Privacy and Learner Control

- Persisted learner artifacts remain local to the current browser under the approved launch architecture; there is no account, database, publishing, or cloud-synchronization requirement.
- Requesting AI Review transmits the learner response through the application's AI-feedback flow for processing. The product must not claim that work remains only in the browser when AI Review is requested.
- Reverse Build displays only artifacts stored for the current learner in the current browser and correct module context.
- Learner content is not published, shared with other learners, or exposed as a public artifact.
- Learner artifacts are optional and never required for access to Reverse Build.
- Later reset or clear controls defined by the shared artifact architecture must be respected. Cleared artifacts must not reappear from a duplicate Reverse Build record.
- Missing artifacts must not be fabricated, regenerated, or inferred from unrelated data.
- Sensitive learner text must not be unnecessarily duplicated across storage records.
- Reverse Build must not access Reflection responses or Reflection feedback.

Later implementation must provide the artifact reset behavior approved under Section 5. This brief does not add accounts, export, sharing, history, or portfolio-management controls.

## 12. Accessibility Requirements

If the modal pattern remains, Reverse Build v2 must satisfy all of the following:

- use semantic dialog structure with an accessible name and description
- support full keyboard access to triggers, content, and close controls
- close on Escape unless doing so would discard unsaved input; Reverse Build itself contains no required input
- move initial focus to a logical control or heading when opened
- contain focus within the open dialog
- return focus to the triggering element on close
- provide a reachable, clearly labeled close control
- maintain meaningful heading hierarchy
- label learner response, AI Review, and authored reasoning distinctly for screen readers
- announce meaningful dynamic state changes after opening
- use text or semantic indicators in addition to color for complete, partial, missing, pending, and error states
- provide usable scrolling without trapping page or dialog content
- respect reduced-motion preferences whenever motion is used
- remain usable at supported mobile widths and at 200% browser zoom without loss of content or controls
- preserve readable labels and relationships when content reflows

Existing Escape handling, initial focus, focus return, and dialog semantics are useful foundations, not proof that the complete v2 accessibility standard is satisfied. Automated scans alone cannot close these requirements.

## 13. Technical Constraints

Reverse Build v2 must preserve:

- Next.js App Router
- React and TypeScript
- the current open-access experience
- no account requirement
- no database requirement for launch
- local browser persistence for saved learner artifacts
- structured instructional content separated from presentation
- no dependency on Reflection
- no automatic personalization, diagnosis, recommendation, or pathway generation
- no exposure of hidden AI reasoning or internal prompts

Section 5 will define the shared learner-artifact types, persistence service or hook, schema-version behavior, safe parsing, and reset behavior. Section 6 will implement Module 2 as the Reverse Build v2 reference. This brief defines the product contract without prescribing component names, storage keys, or unnecessary implementation details.

## 14. Existing Behavior to Preserve

- mentorship and apprenticeship framing
- authored Problem, Foundations, Design Decisions, AI Collaboration, Trade-offs, and Transfer layers
- accessible progressive reveal
- open access
- Design Practice → AI Review → Reverse Build → Reflection order
- human-judgment framing
- structured module content separated from presentation
- useful dialog behavior such as keyboard dismissal and focus return, subject to the complete v2 accessibility standard

The current authored content should not be rewritten merely to add learner artifacts. Later implementation should add the dynamic comparison layer while preserving valid authored reasoning.

## 15. Public Claims Supported After Implementation

Only after the corresponding behavior is implemented and validated may public copy claim that:

- Reverse Build reconnects learners with their available Design Practice response.
- Reverse Build surfaces the AI Review associated with that response when valid feedback exists.
- Reverse Build compares learner practice with authored design reasoning, trade-offs, and professional judgment.
- Reverse Build makes capability development more visible through a structured reconstruction of available practice, feedback, and design reasoning.

Reverse Build must not be claimed to:

- prove learning, comprehension, growth, or transfer occurred
- diagnose capability gaps
- read or reconstruct Reflection
- reveal hidden AI reasoning or chain of thought
- automatically personalize or recommend a pathway
- reconstruct learner artifacts that do not exist
- retain work in an account or cloud service

Until v2 is implemented, current copy must describe Reverse Build as exposing authored design reasoning, constraints, trade-offs, AI collaboration, and learning foundations. Copy must not imply that the current feature displays the learner's actual decision or AI Review. In particular, learner-specific “reconstructs your experience” language in the current presentation remains a known claim to qualify or replace during the later implementation pass.

## 16. Acceptance Criteria

Each criterion has a binary pass or fail outcome. Evidence must include the tested state, route or module, observed result, and any relevant assistive-technology or viewport context.

### Core sequence

- **RB2-SEQ-01:** On a module page, Reverse Build appears after Design Practice and its AI Review opportunity and before Reflection.
- **RB2-SEQ-02:** Instrumentation or code inspection confirms Reverse Build neither reads nor renders Reflection responses or Reflection feedback.

### Learner artifacts

- **RB2-ART-01:** A valid completed response is displayed under the exact authoritative prompt that produced it.
- **RB2-ART-02:** Valid AI Review feedback is displayed only with the response and prompt that produced it.
- **RB2-ART-03:** An artifact from one prompt or module never appears under another prompt or module.
- **RB2-ART-04:** Multiple prompt artifacts remain independently available after the learner switches prompts.
- **RB2-ART-05:** Feedback for an earlier response is not presented as feedback for a revised response.

### Authored reasoning

- **RB2-AUTH-01:** Existing approved authored Problem, Foundations, Decisions, AI Collaboration, Trade-offs, and Transfer content remains available.
- **RB2-AUTH-02:** Learner and AI artifacts do not overwrite or generate authored professional reasoning.
- **RB2-AUTH-03:** Visual and semantic labels distinguish learner work, AI Review, and Future of ID authored reasoning.

### Empty and partial states

- **RB2-STATE-01:** Reverse Build opens and authored content remains available when no learner artifact exists.
- **RB2-STATE-02:** Response-only, response-plus-feedback, pending-review, failed-review, cleared, and partially completed states use accurate distinguishable labels.
- **RB2-STATE-03:** Incomplete prompts do not display invented responses or feedback.
- **RB2-STATE-04:** Every recoverable state preserves access to authored reasoning.

### Privacy and control

- **RB2-PRIV-01:** Reverse Build displays only locally available artifacts for the current module and learner browser context.
- **RB2-PRIV-02:** After approved artifact clearing or reset, cleared learner work does not reappear.
- **RB2-PRIV-03:** Reverse Build does not access Reflection data.
- **RB2-PRIV-04:** No raw prompts, chain of thought, secrets, stack traces, or storage internals appear in the experience.
- **RB2-PRIV-05:** Product disclosure does not imply browser-only processing when AI Review is requested.

### Failure behavior

- **RB2-FAIL-01:** Storage or artifact-read failure does not block authored Reverse Build content.
- **RB2-FAIL-02:** Malformed or incompatible records fail safely and are not rendered as valid learner work.
- **RB2-FAIL-03:** One invalid prompt artifact does not invalidate unrelated valid prompt artifacts.
- **RB2-FAIL-04:** Missing or failed AI feedback is not represented as completed critique.

### Accessibility

- **RB2-A11Y-01:** All Reverse Build controls and content are operable by keyboard.
- **RB2-A11Y-02:** If a dialog is used, it has an accessible name and description, logical initial focus, focus containment, Escape behavior, a labeled close control, and focus return.
- **RB2-A11Y-03:** Screen readers can distinguish learner response, AI Review, authored reasoning, and dynamic status.
- **RB2-A11Y-04:** Completion, missing, pending, partial, and failure states do not rely on color alone.
- **RB2-A11Y-05:** Meaningful dynamic changes are announced appropriately.
- **RB2-A11Y-06:** The experience remains usable at supported mobile widths and 200% zoom.
- **RB2-A11Y-07:** Motion, when present, respects reduced-motion preferences.

### Open access

- **RB2-OPEN-01:** A learner can open Reverse Build without completing Design Practice or requesting AI Review.
- **RB2-OPEN-02:** No completion gate or prerequisite is introduced.

### Product honesty

- **RB2-HONEST-01:** Learner-specific reconstruction copy appears only when the corresponding learner artifact is visibly rendered.
- **RB2-HONEST-02:** Missing AI feedback is never labeled or described as completed AI Review.
- **RB2-HONEST-03:** Public claims map to observable implemented behavior and remain within Section 15 boundaries.
- **RB2-HONEST-04:** Comparison language does not claim to infer hidden learner growth or diagnose capability needs.

## 17. Non-Goals

Section 4.1 does not authorize:

- implementing Reverse Build v2
- building cloud accounts or synchronization
- creating analytics or event tracking
- scoring learner performance
- automated capability diagnosis
- adaptive pathway generation
- displaying or reading Reflection
- exposing model chain of thought or internal prompts
- rewriting all module-authored Reverse Build content
- replacing the shared artifact-architecture work governed by Section 5
- creating attempt history, version history, longitudinal tracking, or portfolio management

## Approval and Handoff

Before Section 4.1 can be marked complete, Bradley must approve this brief and confirm that it addresses every Reverse Build v2 checklist requirement. Approval of the brief does not mean v2 has been implemented.

After approval:

1. Section 5 defines the reusable learner-artifact architecture consistent with this contract.
2. Section 6 implements Module 2 as the reference Reverse Build v2 experience.
3. Later rollout and validation sections apply the approved pattern and retain test evidence.
