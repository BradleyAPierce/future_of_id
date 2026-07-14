# Module 4 Simulation Implementation Brief

## Document Status and Authority

- **Status:** Proposed for Bradley approval under Section 4.2 of `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`
- **Current implementation status:** Not implemented
- **Authority after approval:** Controlling implementation specification for the Module 4 branching simulation

This brief defines the product behavior that later artifact-architecture, implementation, content-alignment, validation, and launch-verification work must satisfy. It does not authorize coding. The launch checklist continues to control execution order, and `REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md` continues to control the shared Reverse Build v2 contract.

Claude, Grok, and other external reviews are advisory evidence only. They may inform Bradley's decision, but they do not create requirements or override this brief, the launch checklist, or approved repository sources.

This document distinguishes:

- **Observed current behavior:** behavior visible in the repository now
- **Approved target behavior:** the bounded branching simulation proposed for later implementation
- **Later governed work:** artifact persistence, privacy disclosure, code, content alignment, tests, and launch verification controlled by later checklist sections
- **Excluded behavior:** behavior outside the Module 4 launch scope

The scenario and branch design in this brief are Bradley's professional implementation decisions. Established experiential-learning, deliberate-practice, and scenario-design principles support practice with decisions, consequences, feedback, and opportunities to refine judgment; they do not independently determine this exact scenario or branch structure.

## 1. Purpose and Current Mismatch

Module 4 teaches scenario, simulation, conversation design, branching, consequences, realism, and professional judgment. Its current Design Practice remains valuable: learners select one of three professional design tensions, write a response, and may request structured AI critique.

The current interaction is not the target simulation:

- learners write about scenario design rather than move through a stateful scenario
- there are no selectable professional decisions inside one focal simulation
- one choice does not change a later decision
- no observable consequence or deterministic final pathway state is produced
- no simulation artifact is persisted
- changing prompts clears the component-local response and AI feedback
- some authored Module 4 language describes branches and consequences as if they already exist

The existing written-response activity and shared written-response AI engine remain legitimate professional-practice infrastructure. They must not be misrepresented as a branching simulation, and they do not define the target behavior below.

## 2. Intended Learner Experience

The approved target is one bounded, stateful branching experience. The learner:

1. enters one focal professional scenario
2. reviews the workplace context, constraints, and competing pressures
3. makes a first meaningful design decision
4. observes the distinct consequence of that choice
5. encounters a second decision whose context, options, and pressure depend on the first choice
6. makes the second decision
7. reaches a deterministic final design state
8. explains the professional judgment behind the completed pathway
9. may request optional AI critique of the validated pathway and rationale
10. may capture a distinct revised rationale after critique
11. can later inspect the completed or partial pathway through Reverse Build v2
12. reaches Reflection separately after Reverse Build

The experience practices professional judgment. It does not test factual recall, accumulate points, rank choices, score mastery, or diagnose the learner.

## 3. Focal Professional Scenario

### Scenario identity

- **Module identifier:** `simulation-design`
- **Simulation identifier:** `sales-conversation-practice-design`
- **Content/schema version:** `1`
- **Learner role:** Lead instructional designer responsible for the first release of a sales-onboarding practice experience

### Workplace context

New sales representatives know the approved product information but struggle when an early customer conversation becomes uncertain. A customer may say that changing an established process feels risky, ask for a claim the representative cannot safely make, or respond in an unexpected way.

Sales leadership wants realistic practice that improves judgment and transfer. Subject-matter experts and legal and brand partners need the experience to remain accurate and reviewable. The delivery timeline is short, facilitator capacity is limited, and the team cannot responsibly build an unrestricted conversation simulator for the first release.

### Instructional and performance challenge

The learner must decide how the first release will let representatives practice responding to an uncertain customer cue. The design needs enough consequence and variation to expose judgment while remaining credible, governable, maintainable, and proportionate to the target skill.

### Competing pressures

- realism versus review control
- variation versus maintainability
- scalable independent practice versus human facilitation
- speed to launch versus evidence from piloting
- conversational flexibility versus legal and brand safeguards
- useful complexity versus decorative complexity

### Professional judgment practiced

The learner practices selecting an appropriate simulation approach, interpreting the consequence of that design choice, and making a second scope or governance decision under changed conditions.

### Why this scenario fits Module 4

The scenario makes the module's own principles observable: the learner makes consequential design choices about fidelity, branching, feedback, facilitation, AI, safeguards, and transfer. Each option is professionally defensible, but each exposes a different trade-off that requires a branch-specific follow-up decision.

The scenario is specific enough to produce meaningful consequences because the audience, customer cue, governance concerns, delivery constraints, and transfer goal are defined. It remains transferable because designers in other domains also balance realism, scale, control, facilitation, risk, and maintenance when choosing a practice format.

## 4. First Meaningful Decision

### Decision contract

- **Decision identifier:** `d1-release-approach`
- **Decision question:** Which practice approach should anchor the first release?
- **Information available:** learner audience, uncertain customer cue, transfer goal, short timeline, limited facilitator capacity, SME review needs, and legal/brand constraints
- **Pressure and uncertainty:** The team needs useful practice soon, but it does not yet have evidence that added fidelity or AI will improve the focal decision enough to justify the operational risk.

### Selectable options

| Option identifier | Learner-facing option | Professional rationale |
|---|---|---|
| `d1-authored-branch` | Build a bounded authored branch with reviewed response options, consequences, and feedback. | This prioritizes consistency, reviewability, and maintainability while still allowing choices to matter. Its primary risk is predictable practice that may not transfer to unexpected language. |
| `d1-facilitated-roleplay` | Use facilitated role-play with a structured observer guide and decision rubric. | This supports nuance, probing, and human adjustment without requiring complex software. Its primary risks are scheduling, observer consistency, and limited scale. |
| `d1-bounded-ai` | Use a bounded AI conversation constrained by approved customer intents, response rules, and escalation safeguards. | This can add conversational variation and independent practice. Its primary risks are inconsistent language, governance load, review complexity, and false confidence in realism. |

All three options are serious professional approaches. None is labeled universally correct. The learner may review and change the first decision before selecting **Continue and reveal consequence**. Once continued, the first choice becomes the active pathway state. Changing it afterward requires an explicit **Restart simulation** action so consequences and later decisions cannot become mismatched.

## 5. First-Choice Consequences

### Authored-branch consequence

- **Consequence identifier:** `c1-authored-predictability`
- **Triggered by:** `d1-authored-branch`
- **Learner-facing consequence:** SMEs and legal approve the first release quickly because every option and feedback response is reviewable. In pilot practice, however, several representatives begin recognizing the option pattern instead of interpreting the customer's cue, and transfer weakens when the customer uses unfamiliar language.
- **Changed state:** governance risk decreases; pattern-matching and transfer risk increase
- **Shifted pressure:** leadership asks for more variation without losing the approved structure
- **Visible trade-off:** reviewability and maintenance versus authentic variation
- **New information:** pilot observation shows that learners can choose the expected option but struggle to explain or adapt it
- **Remaining uncertainty:** whether added variation or deeper rationale practice will best improve transfer
- **Preparation for decision two:** the learner must strengthen transfer while preserving bounded scope

### Facilitated-role-play consequence

- **Consequence identifier:** `c1-roleplay-inconsistency`
- **Triggered by:** `d1-facilitated-roleplay`
- **Learner-facing consequence:** Pilot conversations surface realistic hesitation and give facilitators useful opportunities to probe learner reasoning. Results vary sharply, however, because observers interpret the rubric differently, and the available facilitator schedule cannot support every new representative.
- **Changed state:** realism and diagnostic observation increase; consistency and scalability decrease
- **Shifted pressure:** sales leadership wants the quality of the discussion without an unsustainable delivery model
- **Visible trade-off:** human nuance versus repeatability and reach
- **New information:** recurring decision patterns are visible, but observer calibration is weak
- **Remaining uncertainty:** whether the team should standardize human judgment or convert repeated moments into reusable authored practice
- **Preparation for decision two:** the learner must choose how to stabilize and scale the useful practice

### Bounded-AI consequence

- **Consequence identifier:** `c1-ai-governance-risk`
- **Triggered by:** `d1-bounded-ai`
- **Learner-facing consequence:** Pilot learners value the varied conversation and can practice independently. Reviewers find two generated customer responses that imply an unapproved product expectation, and the team cannot yet explain consistently how the AI stayed within the approved scenario boundaries.
- **Changed state:** variation and availability increase; governance and trust risk increase
- **Shifted pressure:** legal and brand partners require a demonstrably controlled release before launch
- **Visible trade-off:** conversational flexibility versus auditable behavior
- **New information:** variation is engaging, but current safeguards do not make every response reviewable or defensible
- **Remaining uncertainty:** whether tighter AI boundaries will be sufficient for launch
- **Preparation for decision two:** the learner must reduce governance risk without assuming that AI fidelity is inherently more effective

Consequences reveal implications; they are not correctness feedback. Each consequence changes the context and allowed options of the next decision.

## 6. Second Decision Point

The second decision is represented by one of three branch-specific decision records. Only the decision derived from the first option is valid.

### After the authored branch

- **Decision identifier:** `d2-authored-transfer`
- **Required prior option:** `d1-authored-branch`
- **Question:** How will you address pattern-matching while keeping the first release bounded and reviewable?
- **Changed context:** the authored branch passed governance review but exposed weak transfer to unfamiliar wording
- **Increased tension:** variation is needed, but added branches can increase maintenance without improving the focal judgment

| Option identifier | Learner-facing option |
|---|---|
| `d2-authored-cue-variation` | Add a small set of reviewed cue variations and one recovery decision, then test whether learners still recognize the underlying customer need. |
| `d2-authored-rationale` | Keep the branch structure narrow and require learners to explain the cue, trade-off, and reason for their selected response before feedback. |

### After facilitated role-play

- **Decision identifier:** `d2-roleplay-scale`
- **Required prior option:** `d1-facilitated-roleplay`
- **Question:** How will you preserve the useful judgment practice while improving consistency and reach?
- **Changed context:** role-play produced rich evidence but inconsistent observation and insufficient capacity
- **Increased tension:** standardization can improve reliability but may remove the human responsiveness that made the practice valuable

| Option identifier | Learner-facing option |
|---|---|
| `d2-roleplay-calibrate` | Retain facilitated role-play, calibrate observers with anchored examples, and limit it to the highest-risk customer decision. |
| `d2-roleplay-convert` | Convert the recurring decision moments into a bounded authored branch and reserve facilitator review for selected debriefs. |

### After bounded AI

- **Decision identifier:** `d2-ai-control`
- **Required prior option:** `d1-bounded-ai`
- **Question:** How will you respond to the governance failure before the first release?
- **Changed context:** independent varied practice showed promise, but the pilot produced language outside approved expectations
- **Increased tension:** the team must protect trust and accuracy without treating prior AI investment as a reason to accept uncontrolled behavior

| Option identifier | Learner-facing option |
|---|---|
| `d2-ai-constrain` | Keep bounded AI only after adding approved intent boundaries, blocked claims, deterministic escalation, and a documented review test set. |
| `d2-ai-defer` | Defer generative conversation, launch a reviewed authored branch, and retain AI only for post-pathway critique. |

The dependency is testable: `d1-authored-branch` permits only `d2-authored-transfer`; `d1-facilitated-roleplay` permits only `d2-roleplay-scale`; and `d1-bounded-ai` permits only `d2-ai-control`. Options belonging to any other branch are invalid.

## 7. Deterministic Pathways and Final Design States

Every valid two-decision sequence maps to one pathway and one final state. Outcomes describe the chosen design direction and its remaining trade-off; they do not grade or diagnose the learner.

| Pathway identifier | Valid sequence | Outcome identifier | Immediate result | Professional strength | Unresolved risk or trade-off |
|---|---|---|---|---|---|
| `p-authored-variation` | `d1-authored-branch` → `d2-authored-cue-variation` | `o-reviewed-variable-branch` | The first release remains authored but adds reviewed cue variation and one recovery decision. | Variation is tied to the focal judgment while the pathway remains auditable. | Additional content increases review and maintenance; testing must show that variation improves transfer rather than recognition. |
| `p-authored-rationale` | `d1-authored-branch` → `d2-authored-rationale` | `o-rationale-centered-branch` | The narrow branch is retained and learner explanation becomes the main mechanism for exposing judgment. | Complexity stays low while feedback can address reasoning rather than option recognition alone. | The experience may still underrepresent spontaneous conversation; rationale quality requires careful feedback criteria. |
| `p-roleplay-calibrated` | `d1-facilitated-roleplay` → `d2-roleplay-calibrate` | `o-calibrated-human-practice` | Facilitated practice is limited to the highest-risk moment with anchored observer calibration. | Human probing and nuance are preserved where they add the most value. | Capacity remains constrained, and observer consistency must be demonstrated rather than assumed. |
| `p-roleplay-hybrid` | `d1-facilitated-roleplay` → `d2-roleplay-convert` | `o-hybrid-authored-debrief` | Recurring decision moments become reusable authored practice with selected facilitated debriefs. | Reach and consistency improve while targeted human interpretation remains available. | Authored cases may flatten nuance, and the handoff between independent practice and debrief must remain coherent. |
| `p-ai-governed` | `d1-bounded-ai` → `d2-ai-constrain` | `o-governed-ai-pilot` | Generative practice remains in scope only behind explicit intent, claim, escalation, and test-set controls. | Variation is retained with a more auditable governance model. | Bounded controls may still fail, maintenance is higher, and launch requires evidence that safeguards work. |
| `p-ai-deferred` | `d1-bounded-ai` → `d2-ai-defer` | `o-authored-launch-ai-review` | The launch interaction becomes deterministic authored branching; AI is limited to optional critique after the pathway. | Authoritative state and claims remain reviewable while AI contributes without controlling the experience. | Conversational variation is deferred, so the team must be honest about the narrower practice fidelity. |

For every outcome, human judgment remains necessary to determine whether the design fits the organization, risk level, audience, resources, and performance context. No outcome implies mastery, a capability gap, or a universally preferred simulation approach.

## 8. Authoritative Branching State Model

Later implementation must represent the following repository-owned concepts without changing the meanings approved here:

- simulation identifier and version
- ordered decision records
- stable option records
- first-choice consequence records
- allowed transition rules
- deterministic pathway derivation
- final-state records
- display ordering
- learner-facing wording owned by those records

### Authority rules

- Client-written pathway prose is never authoritative state.
- The client submits validated identifiers plus learner-authored rationale.
- The server loads the simulation version from repository-owned data.
- The server derives the first consequence, valid second decision, pathway, and final state from the submitted decision and option identifiers.
- The server reconstructs all decision, option, consequence, pathway, and outcome language from repository-owned data.
- Impossible, cross-branch, unknown, version-mismatched, or internally inconsistent sequences are rejected.
- AI receives server-reconstructed authoritative state, not client-written summaries of what occurred.
- Display order comes from repository data rather than client order.

This brief does not define TypeScript types, storage schemas, component props, or database models. Section 4.3 and later architecture work will define those implementation details while preserving this authority contract.

## 9. Learner Rationale and Judgment Refinement

### Original rationale

- The deterministic pathway completes when the learner makes the valid second decision and the final state is derived.
- After seeing the final state, the learner is invited to explain why the chosen pathway is appropriate for the stated constraints and which unresolved trade-off still needs human judgment.
- The rationale is required before AI Review can be requested or the artifact can be labeled **pathway with rationale**.
- The rationale is not required to see the deterministic outcome, inspect authored content, navigate elsewhere, or retain open access.
- Required length: 40–800 trimmed characters.
- The prompt is bounded to the selected pathway, evidence, trade-off, and next validation need; it is not an unrestricted essay.

### Optional revised rationale

- After valid AI critique, the learner may save one revised rationale of 20–800 trimmed characters.
- The interface must capture the revision in a distinct field; it must not merely suggest revision in prose.
- Original and revised rationales remain distinguishable in the current artifact.
- The revised rationale does not alter the decisions, pathway, consequence, or final state.
- No attempt or revision history beyond the current original/revised pair is required for launch.

The simulation remains usable and deterministically complete if AI is unavailable or the learner declines AI Review.

## 10. AI Review Contract

AI Review is an optional critique layer after a valid pathway and original rationale exist.

AI Review may:

- summarize the learner's stated design reasoning without grading it
- identify one specific strength connected to the validated pathway
- identify one overlooked or underdeveloped trade-off or risk
- provide one focused refinement question or next consideration

The future structured output shape is conceptually:

```text
summary: string
strength: string
overlookedTradeoff: string
refinementQuestion: string
```

All fields are required, bounded strings. Later implementation must define and validate exact length limits.

AI Review must not:

- determine transitions, consequences, pathways, or final states
- invent authoritative decision, consequence, or outcome wording
- override or modify the completed deterministic state
- score mastery or diagnose professional gaps
- infer hidden learning or professional traits
- personalize or recommend the learner's broader capability pathway
- use Reflection data
- expose prompts, chain of thought, hidden model reasoning, or internal configuration
- be required for simulation completion

The existing written-response AI engine remains a separate contract for current module prompts. The branching request must use a distinct request type, validator, and service boundary. Shared OpenAI-client or presentation infrastructure may be reused only where contracts remain explicit and compatible.

## 11. Branching-Simulation Request Contract

The future branching-review request is conceptually identified by:

- **Request type:** `module4-branching-review`
- **Request version:** `1`

The client may submit:

| Field | Client role | Server treatment |
|---|---|---|
| `requestType` | Required discriminator | Must exactly match the branching contract. |
| `requestVersion` | Required contract version | Must be supported. |
| `moduleId` | Required identifier | Must equal `simulation-design`. |
| `simulationId` | Required identifier | Must identify the approved simulation. |
| `simulationVersion` | Required version | Must identify a supported repository record. |
| `firstDecisionId` | Required identifier | Must match `d1-release-approach`. |
| `firstOptionId` | Required identifier | Must belong to the first decision. |
| `firstConsequenceId` | Optional assertion only | If present, it must equal the server-derived consequence; it is never trusted. |
| `secondDecisionId` | Required identifier | Must equal the decision derived from the first option. |
| `secondOptionId` | Required identifier | Must belong to the derived second decision. |
| `finalStateId` | Optional assertion only | If present, it must equal the server-derived final state; it is never trusted. |
| `learnerRationale` | Required for AI Review | Validate as learner-authored text under Section 9. |
| `revisedRationale` | Not used to request initial critique | If later transmitted for another approved purpose, validate separately; it never changes state. |

The client must not establish authority by submitting pathway descriptions, option prose, consequence prose, outcome prose, scenario text, prompt text, or reconstructed summaries. Such fields must be rejected or ignored according to the later approved validator; they must never replace repository data.

## 12. Server Reconstruction and Validation

For a branching-review request, the future server must:

1. validate request type and version
2. validate module, simulation, and simulation version
3. load the authoritative simulation record from the repository
4. validate the first decision identifier and option membership
5. derive the first consequence
6. derive the only valid second decision for the resulting state
7. validate the submitted second decision and option membership
8. derive the pathway and final state
9. reject unknown, impossible, tampered, cross-branch, or version-mismatched sequences
10. reconstruct all learner-facing scenario, decision, option, consequence, pathway, and outcome language
11. validate and minimize learner rationale
12. send only the minimum validated state and rationale required for critique to the AI provider
13. validate the structured AI response
14. return deterministic state separately from optional structured critique

The server must never use client-authored pathway prose to establish what happened. A failed AI call may return an AI failure state, but it must not invalidate, replace, or alter the already derived deterministic pathway.

## 13. Reverse Build v2 Reconstruction Contract

For Module 4, Reverse Build v2 must eventually receive:

- simulation identifier and version
- first decision and selected option identifiers
- derived first consequence identifier
- derived second decision and selected option identifiers
- derived pathway and final-state identifiers
- original learner rationale, if available
- revised rationale, if available
- AI Review state and valid feedback, if available
- simulation completion and partial-completion state

Using repository-owned language and the learner artifact, Reverse Build reconstructs:

- the professional challenge
- the decisions made
- the consequence encountered after the first decision
- how the first choice changed the second decision
- the final pathway and design state
- the learner's stated rationale and distinct revision, when present
- matching AI critique, when valid and available
- authored design reasoning, instructional foundations, constraints, and trade-offs

Reverse Build must not:

- receive, read, display, summarize, or depend on Reflection
- infer hidden learner growth, mastery, motivation, or capability gaps
- invent missing decision, consequence, pathway, outcome, rationale, or AI state
- replace authored reasoning with AI-generated interpretation
- merge partial state into a falsely completed pathway

This contract specializes, but does not silently change, `REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md`.

## 14. Learning-Layer Boundaries

The approved sequence remains:

```text
Design Practice → AI Review → Reverse Build → Reflection
```

### Design Practice owns

- decisions and branching
- consequences
- deterministic pathway and final state
- original rationale
- optional revised rationale

### AI Review owns

- bounded critique of validated state and learner rationale

### Reverse Build owns

- reconstruction of completed or partial simulation artifacts beside authored design reasoning

### Reflection owns

- later transfer to another professional situation

Reflection must remain separate. The simulation and Reverse Build must not receive, display, or analyze Reflection responses or feedback. Course progress remains separate from simulation state unless a later approved architecture decision explicitly connects them. Simulation decisions must not diagnose, recommend, generate, or alter the learner's professional capability pathway.

## 15. Empty, Partial, Fallback, and Failure States

| State | Required behavior |
|---|---|
| Not started | Show scenario context and the first decision. Do not imply progress or an outcome. |
| First option selected but not continued | Preserve the reviewable selection in the current session; no consequence or pathway is yet established. |
| First consequence shown; second decision incomplete | Show the authoritative first decision, consequence, and valid branch-specific second decision. Label the artifact partial. |
| Pathway complete; rationale absent | Show the deterministic final state and invite bounded rationale. Do not label AI Review available. |
| Pathway and rationale complete; AI not requested | Preserve the completed deterministic artifact and label AI Review not requested. |
| AI pending | Keep deterministic state visible and announce a bounded pending status. |
| AI failed or unavailable | Keep the pathway and rationale valid; show clear retry or continue-without-AI guidance without raw technical details. |
| Revision absent | Preserve original rationale and AI critique; label refinement optional and not completed. |
| Valid partial persisted state | Restore only the validated portion and show the correct next action. |
| Missing or malformed state | Do not render untrusted data. Preserve authored content and provide restart or safe recovery guidance. |
| Invalid or impossible sequence | Reject it as invalid state, do not derive an outcome, and offer a safe restart. |
| Incompatible version | Do not reinterpret it under the current model. Apply later approved migration behavior or offer clearing/restart guidance. |
| Persistence unavailable | Keep the simulation usable for the current session, disclose that progress may not survive navigation or refresh, and do not block access. |

Deterministic branching must never depend on AI. AI failure must not erase or invalidate completed pathway state. Valid partial progress must remain distinguishable from failure. No raw errors, prompts, stack traces, storage keys, provider internals, or hidden reasoning may be exposed.

## 16. Persistence and Reset Boundaries

Section 4.3 or the appropriate shared artifact-architecture section must later define implementation that satisfies these product expectations:

- preserve the current first selection before continuation where appropriate
- preserve the committed first decision, consequence, valid second decision, second selection, pathway, final state, rationale, revision, and AI state at their appropriate completion points
- preserve valid state across approved navigation and refresh behavior
- do not erase valid state merely because the learner changes a view or opens another learning layer
- require an explicit simulation reset before changing a committed first decision
- explain what reset will clear and obtain intentional learner action
- clear only the intended Module 4 simulation artifact and associated AI Review data
- prevent cleared state from reappearing
- handle schema/content versions, unsupported versions, partial records, and migrations safely
- keep Reflection data outside the simulation artifact and Reverse Build input
- keep general course progress separate unless later architecture explicitly approves a connection
- require no account, authentication, Supabase dependency, or cloud synchronization for launch

This brief does not implement persistence or choose storage keys, hooks, or services.

## 17. Privacy and Data Minimization

- Learner simulation artifacts remain local to the current browser under the approved launch architecture.
- No account, publishing, sharing, or cloud synchronization is implied.
- Only the learner's own locally available artifacts are displayed.
- Learner responses are not published or shared with other learners.
- AI Review transmits the minimum validated pathway state and learner rationale needed for processing through the server and AI provider.
- Product copy must not claim that AI processing occurs only in the browser.
- Repository-owned scenario, option, consequence, pathway, and outcome language must not be redundantly accepted as authoritative client data.
- Reflection responses and feedback remain outside simulation and Reverse Build data boundaries.
- Raw prompts, hidden model reasoning, secrets, and provider internals are never displayed.
- Learner-initiated reset and clearing must be respected.

Section 4.4 will define the final disclosure and provider-retention language using current authoritative sources. This brief does not make provider-retention claims.

## 18. Accessibility Requirements

Later implementation and validation must prove all of the following:

- every decision, rationale, review, restart, retry, and continue action is keyboard operable
- visible focus is present at every interactive control
- each decision uses a semantic group with an accessible name and instructions
- selected state is programmatically communicated
- consequence changes are announced after commitment
- focus moves to, or is deliberately managed at, the new consequence or branch context
- screen readers receive the changed context, current decision, and relevant pressure in logical order
- AI loading, success, and error states are announced without stealing focus unnecessarily
- color is never the only indicator of selection, completion, consequence, pathway, or error
- the completed pathway can be reviewed nonvisually in its authoritative order
- decision, consequence, final-state, rationale, and AI Review headings form a meaningful hierarchy
- the experience reflows without clipped choices or horizontal page scrolling at a 320 CSS-pixel viewport and larger approved widths
- no content or control is lost at 200% browser zoom or 200% text-only zoom
- primary decision and action touch targets are at least 44 by 44 CSS pixels
- animated transitions respect reduced-motion preferences
- deterministic completion remains possible when AI is unavailable
- automated accessibility scanning is supplemented by manual keyboard and screen-reader verification

The current written-response component is not evidence that the final simulation meets these requirements.

## 19. Mobile and Responsive Behavior

- Decision options remain fully readable and selectable at a 320 CSS-pixel viewport and wider.
- Consequences and changed context appear immediately after the decision that produced them in a logical document order.
- Learners can review prior committed decisions without losing current state.
- No essential comparison requires a side-by-side desktop presentation.
- Final pathway review uses a coherent stacked sequence on small screens.
- AI critique is visually and semantically distinct from deterministic simulation state.
- Long rationale and feedback text wraps naturally and remains readable.
- Fixed-height containers must not trap, clip, or obscure choices, consequences, rationale, outcomes, or feedback.
- Any horizontal treatment used at larger widths must have an equivalent ordered, nonhorizontal mobile presentation.

## 20. Existing Behavior to Preserve

- open access and direct module exploration
- professional judgment rather than factual recall
- credible tensions involving realism, governance, scale, feedback, and transfer
- server-side request validation
- repository-owned scenario context
- bounded structured AI output
- compatible shared AI client and presentation infrastructure
- separation among Theory, Design Practice, AI Review, Reverse Build, and Reflection
- no accounts, authentication, Supabase, or cloud persistence for launch
- evidence-governance distinctions among established principles, current evidence, pathway selection, and Bradley's interpretation
- human judgment, practitioner-created pathways, and non-universal positioning

The shared written-response engine may continue to support other modules and any retained written-response activities. It is not replaced by this brief.

## 21. Later Module Content Alignment

When the simulation is implemented, later authorized content work must:

- remove or qualify claims that branching exists before observable implementation and verification
- align authored Module 4 Reverse Build descriptions with the implemented scenario, choices, consequences, pathway, and constraints
- rename or reposition the authored Reverse Build subsection currently titled and identified as `Reflection` so it does not blur the approved Reflection boundary
- preserve useful theory bridges, evidence notes, and the principle that complexity must improve the focal decision
- distinguish authored implementation reasoning from learner decisions and pathway data

No Module 4 content is changed by this Section 4.2 documentation remediation.

## 22. Supported Public Claims After Implementation

Only after implementation and verification may public or learner-facing copy claim that:

- Module 4 includes a bounded branching simulation.
- The learner makes two connected professional design decisions.
- The first decision changes the context and available choices of the second.
- Choices lead to observable consequences and a deterministic final design state.
- The learner explains and may refine the professional judgment behind the pathway.
- Optional AI Review critiques the validated pathway and learner rationale without controlling the branch.
- Reverse Build reconstructs the learner's decisions, consequence, pathway, final state, rationale, AI Review when available, and authored design reasoning.

These claims describe the bounded approved implementation, not an unrestricted simulation platform.

## 23. Prohibited and Premature Claims

Until implementation and verification, public and authored copy must remain limited to observable written scenario-design practice and AI critique. It must not claim that the branching simulation currently exists.

The completed simulation must not be described as:

- automatically adapting to the learner
- personalizing or generating a professional capability pathway
- diagnosing capability gaps or professional needs
- scoring mastery or proving learning occurred
- using AI to determine authoritative branch state
- revealing hidden prompts, model reasoning, or chain of thought
- analyzing Reflection
- preserving artifacts in accounts or cloud storage
- providing an unlimited chatbot, role-play engine, or conversational simulation
- representing a universally correct approach to simulation design

## 24. Acceptance Criteria

Every criterion has a binary pass or fail result. Evidence must identify the tested route, simulation version, starting state, submitted identifiers where applicable, observed result, and relevant browser, viewport, or assistive technology.

### Scenario and authoritative state

- **M4SIM-STATE-01:** Exactly one focal Module 4 simulation with identifier `sales-conversation-practice-design` and version `1` loads from repository-owned data.
- **M4SIM-STATE-02:** Every decision, option, consequence, pathway, and final state used by the simulation has the stable identifier approved in this brief.
- **M4SIM-STATE-03:** Each of the six allowed two-decision pathways derives exactly one approved final state.
- **M4SIM-STATE-04:** Unknown, cross-branch, impossible, or version-mismatched sequences are rejected without an outcome.
- **M4SIM-STATE-05:** Client-authored scenario, pathway, consequence, or outcome prose is never used as authoritative state.
- **M4SIM-STATE-06:** Server and rendered display ordering come from repository-owned simulation data.

### First decision and consequence

- **M4SIM-D1-01:** The learner can select exactly one of the three approved first-decision options before continuing.
- **M4SIM-D1-02:** Before continuation, the learner can review and change the first selection without creating a committed pathway.
- **M4SIM-D1-03:** Continuing each first option produces only its approved consequence.
- **M4SIM-D1-04:** Each consequence communicates changed context, shifted pressure, visible trade-off, new information, and remaining uncertainty.
- **M4SIM-D1-05:** The consequence is perceivable visually and nonvisually.

### Second-decision dependency

- **M4SIM-D2-01:** `d1-authored-branch` produces only `d2-authored-transfer` and its two approved options.
- **M4SIM-D2-02:** `d1-facilitated-roleplay` produces only `d2-roleplay-scale` and its two approved options.
- **M4SIM-D2-03:** `d1-bounded-ai` produces only `d2-ai-control` and its two approved options.
- **M4SIM-D2-04:** A second option belonging to another branch is rejected by server validation.
- **M4SIM-D2-05:** The learner can review how the first decision produced the consequence and changed the second decision.

### Final state

- **M4SIM-OUT-01:** Each valid second option produces the pathway and final state specified in Section 7.
- **M4SIM-OUT-02:** Final-state language is reconstructed from repository-owned data.
- **M4SIM-OUT-03:** The final state states an immediate result, professional strength, and unresolved risk or trade-off.
- **M4SIM-OUT-04:** No final state scores, ranks, diagnoses, or labels the learner.
- **M4SIM-OUT-05:** Changing a committed first decision requires explicit reset and cannot leave a mismatched final state.

### Learner rationale

- **M4SIM-RAT-01:** After a valid final state, the learner can save one original rationale of 40–800 trimmed characters.
- **M4SIM-RAT-02:** AI Review cannot be requested until the original rationale passes validation.
- **M4SIM-RAT-03:** Missing rationale does not prevent deterministic outcome display, open access, or navigation.
- **M4SIM-RAT-04:** After completed AI Review, the learner can save one optional revised rationale of 20–800 trimmed characters.
- **M4SIM-RAT-05:** Original and revised rationales remain separately identifiable, and revision does not alter deterministic state.

### Branching AI Review

- **M4SIM-AI-01:** Branching AI Review uses a contract distinguishable from the existing written-response request form.
- **M4SIM-AI-02:** The server validates and reconstructs state before any AI request is created.
- **M4SIM-AI-03:** AI receives only the minimum server-validated pathway state and learner rationale required for critique.
- **M4SIM-AI-04:** AI output is rejected unless it matches the approved `summary`, `strength`, `overlookedTradeoff`, and `refinementQuestion` contract.
- **M4SIM-AI-05:** AI critique does not change the consequence, pathway, or final state.
- **M4SIM-AI-06:** AI failure leaves the deterministic pathway and rationale intact and provides bounded recovery guidance.
- **M4SIM-AI-07:** No prompt, chain of thought, hidden reasoning, or internal provider detail is displayed.

### Server authority and validation

- **M4SIM-SRV-01:** Server validation rejects an unknown module, simulation, simulation version, decision, option, or request version.
- **M4SIM-SRV-02:** The server derives the first consequence, second decision, pathway, and final state rather than trusting client assertions.
- **M4SIM-SRV-03:** If optional client consequence or final-state assertions are present and mismatched, the request is rejected.
- **M4SIM-SRV-04:** Client-submitted pathway, consequence, outcome, scenario, or prompt prose cannot replace repository wording.
- **M4SIM-SRV-05:** Deterministic state and optional AI critique are returned as distinguishable structures.

### Reverse Build

- **M4SIM-RB-01:** Reverse Build receives the correct simulation version, decisions, selected options, consequence, pathway, final state, completion state, and available rationale and AI Review.
- **M4SIM-RB-02:** Reverse Build shows how the first decision changed the second without inventing missing state.
- **M4SIM-RB-03:** Partial artifacts remain labeled partial and are not presented as completed pathways.
- **M4SIM-RB-04:** Authored design reasoning remains distinct from learner artifact data and optional AI critique.
- **M4SIM-RB-05:** Code inspection and runtime verification confirm that Reflection responses and feedback are never accessed by the simulation or Reverse Build.

### Persistence and reset

- **M4SIM-PERSIST-01:** Valid committed progress survives the navigation and refresh behavior approved by the later artifact architecture.
- **M4SIM-PERSIST-02:** Changing views or opening another learning layer does not silently erase valid simulation state.
- **M4SIM-PERSIST-03:** Reset clearly identifies and clears only the current Module 4 simulation artifact and associated AI Review data.
- **M4SIM-PERSIST-04:** Cleared state does not reappear.
- **M4SIM-PERSIST-05:** Simulation artifacts remain separate from Reflection and general course-progress data as later approved.

### Empty, partial, and failure states

- **M4SIM-FAIL-01:** Not-started, selection-only, consequence-visible, pathway-complete, rationale-complete, AI-not-requested, AI-pending, AI-failed, and revision-absent states are distinguishable.
- **M4SIM-FAIL-02:** Malformed, impossible, and incompatible-version state is not rendered as valid and receives safe recovery or restart guidance.
- **M4SIM-FAIL-03:** Persistence failure preserves current-session use where possible and does not block authored Module 4 content.
- **M4SIM-FAIL-04:** AI or storage failure does not expose raw errors, prompts, stack traces, storage keys, or provider internals.
- **M4SIM-FAIL-05:** AI failure never invalidates a completed deterministic pathway.

### Accessibility and responsive behavior

- **M4SIM-A11Y-01:** All simulation controls are operable in logical order with a keyboard alone.
- **M4SIM-A11Y-02:** Every interactive control has visible focus, an accessible name, and appropriate instructions.
- **M4SIM-A11Y-03:** Decision options are semantically grouped and selected state is programmatically communicated.
- **M4SIM-A11Y-04:** Consequences and changed branch context are announced and focus is managed deliberately after transition.
- **M4SIM-A11Y-05:** AI pending, success, and failure states are announced accessibly.
- **M4SIM-A11Y-06:** Selection, consequence, pathway, completion, and error state never rely on color alone.
- **M4SIM-A11Y-07:** The complete or partial pathway can be reviewed nonvisually in authoritative order.
- **M4SIM-A11Y-08:** At a 320 CSS-pixel viewport, 200% browser zoom, and 200% text-only zoom, the experience has no clipped content, lost controls, or horizontal page scrolling.
- **M4SIM-A11Y-09:** Primary decision and action touch targets are at least 44 by 44 CSS pixels, and motion respects reduced-motion preferences.
- **M4SIM-A11Y-10:** Automated scanning and the approved manual keyboard and screen-reader checks pass.

### Open access, privacy, and product honesty

- **M4SIM-HONEST-01:** No account, authentication, prerequisite, or prior completion is required to enter the simulation.
- **M4SIM-HONEST-02:** The deterministic simulation remains completable without AI.
- **M4SIM-HONEST-03:** Product and public claims match observable implemented behavior and remain within Sections 22 and 23.
- **M4SIM-HONEST-04:** No diagnosis, personalization, scoring, professional-pathway change, or Reflection analysis is introduced.
- **M4SIM-HONEST-05:** Learner artifacts remain local under the launch architecture, while AI disclosures accurately acknowledge server and provider processing.
- **M4SIM-HONEST-06:** Only the current learner's locally available Module 4 artifact is displayed or cleared.

## 25. Non-Goals

Section 4.2 does not authorize:

- implementing the simulation
- replacing the shared written-response engine for other modules
- building an unrestricted chatbot, role-play engine, or conversation simulator
- adding more scenarios or branches beyond this bounded first implementation
- creating accounts, authentication, Supabase persistence, or cloud synchronization
- adding analytics, event tracking, learner scoring, or mastery assessment
- diagnosing capability needs
- recommending, personalizing, or generating professional pathways
- allowing AI to control branching or authoritative state
- displaying, transmitting, or analyzing Reflection
- exposing prompts, chain of thought, hidden reasoning, secrets, or provider internals
- implementing learner-artifact persistence before its governing section
- silently changing the approved Reverse Build v2 contract
- treating this target behavior as currently implemented

## Section 4.2 Requirement Coverage

| Section 4.2 requirement | Controlling brief coverage |
|---|---|
| Define the current mismatch between topic and interaction. | Section 1 |
| Define the professional decision the learner will practice. | Sections 2–3 |
| Define the first meaningful choice. | Section 4 |
| Define distinct consequences for each first choice. | Section 5 |
| Define the second decision point. | Section 6 |
| Define how the first choice changes the second decision. | Sections 5–6 |
| Define the final outcome or design state. | Section 7 |
| Define how the learner explains or refines judgment. | Section 9 |
| Define how AI critique connects to the interaction. | Section 10 |
| Define what Reverse Build will reconstruct. | Sections 13–14 |
| Define mobile and accessibility behavior. | Sections 18–19 |
| Define acceptance criteria. | Section 24 |
| Define what public claims the completed simulation will support. | Sections 22–23 |
| Define a validated branching-simulation request contract separate from the written-response request form. | Sections 10–12 |
| Define the authoritative repository data used by the server to reconstruct decision, consequence, and pathway language. | Sections 8 and 11–12 |
| Prohibit client-written pathway descriptions from being treated as authoritative state. | Sections 8 and 11–12 plus `M4SIM-STATE-05` and `M4SIM-SRV-04` |

## Approval and Handoff

Before Section 4.2 can be marked complete, Bradley must approve this brief and confirm that it addresses all 16 checklist requirements. Approval of the brief will not mean the simulation has been implemented.

After approval:

1. Section 4.3 defines shared learner-artifact and persistence behavior consistent with this simulation state.
2. Section 4.4 defines privacy and data-flow disclosure.
3. Section 4.5 defines validation records and environments.
4. Section 5 defines the reusable artifact architecture.
5. Section 7 or the checklist's approved implementation phase builds and validates Module 4.
6. Public and authored claims remain limited to current written scenario-design practice until implementation and verification pass.
