# Learner Artifact and Persistence Implementation Brief

## Document Status and Authority

- **Status:** Proposed for Bradley approval under Section 4.3 of `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`
- **Current implementation status:** Not implemented
- **Authority after approval:** Controlling product specification for learner artifacts, local persistence, updates, resets, versioning, and recovery

This brief defines product behavior that Section 5 technical architecture, Section 6 reference implementation, later Module 4 implementation, privacy disclosure, validation, and launch QA must satisfy. It does not authorize implementation or prescribe TypeScript types, storage keys, hooks, components, or migration functions.

`REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md` and `MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md` remain controlling specifications within their approved scopes. This brief supplies the shared artifact and persistence behavior they defer. Claude, Grok, and other external reviews remain advisory evidence only. Older recommendations that place Reflection inside Reverse Build are explicitly rejected because they conflict with the approved Reflection boundary.

This document distinguishes:

- **Current observable behavior:** behavior implemented in the repository now
- **Approved product target:** behavior proposed here for later implementation
- **Section 5 implementation decisions:** technical mechanisms chosen after approval
- **Later disclosure work:** exact learner-facing privacy and AI-processing language governed by Section 4.4
- **Excluded capabilities:** behavior outside public-launch scope

## 1. Purpose and Current Problem

The current local course-progress implementation is useful and should be preserved as a foundation. It stores course-completion slugs in the current browser and supports same-tab and cross-tab updates without requiring accounts or cloud infrastructure.

It is not a learner-artifact system:

- only course-completion slugs persist today
- written Design Practice responses remain component-local
- AI feedback remains component-local
- changing prompts clears the current response and feedback
- navigation, unmounting, and refresh erase learner work
- Reflection responses and Reflection AI feedback do not persist
- Module 4's approved branching simulation is not implemented
- no shared artifact model, version policy, reset contract, or malformed-data recovery policy exists
- existing course-progress parsing and browser-storage access are not fully hardened against malformed JSON, blocked storage, quota failures, or other storage exceptions

The approved target adds one current learner artifact per module while keeping course progress, module work, and Reflection as separate persistence domains. Target behavior must not be described as implemented until Section 5 and later implementation and verification work pass.

## 2. One Current Artifact per Module

Each module may have one current learner artifact. That artifact represents the learner's latest valid Design Practice and simulation work for that module.

One current module artifact:

- may contain multiple independently identified prompt or activity entries
- contains only current state for each entry
- does not contain attempt history
- does not contain learner-visible version history
- is not a portfolio
- is not a longitudinal learner record
- is not synchronized across devices
- is not tied to an account

“Current” means:

- a valid saved response replaces the prior current response for the same prompt
- an updated structured simulation state replaces the prior current simulation state
- replacement does not create an accessible archive of earlier attempts
- resetting an active practice removes only the current entry or simulation state in its defined scope
- clearing module work removes the current module learner artifact and its practice AI state
- explicitly cleared work must not be silently restored
- unrelated prompt entries remain current unless their own scope is reset or the module artifact is cleared

An empty module does not require an empty artifact record. Absence of an artifact is a valid no-work state and must not affect access or course completion.

## 3. Artifact Domains

The launch architecture has three conceptually and operationally separate persistence domains.

### Course progress

Contains only approved course-completion state. It does not contain learner responses, AI feedback, Reflection, simulation pathways, or evidence of mastery.

### Module learner artifact

May contain:

- current written Design Practice prompt entries
- current Module 4 structured simulation state
- AI Review state and bounded feedback associated with those entries
- original and revised learner responses only where an approved interaction explicitly requires both

### Reflection

Contains the current Reflection response and associated Reflection feedback only after the learner reaches the separate Reflection layer.

Domain rules:

- the domains must not be silently merged
- course completion is not proof that learner work exists
- learner work is not required for course completion or access
- Reflection remains outside Reverse Build access
- a reset in one domain must not silently clear another domain
- any broader clear action must name every affected domain and require explicit learner intent
- physical storage design may use separate or safely partitioned records, but Section 5 must preserve independent validation, access, and reset boundaries

## 4. Module Artifact Identity

One current module artifact is conceptually identified by:

- an authoritative module identifier or slug
- an artifact schema version
- one or more supported activity categories
- independently identified prompt or simulation entries
- a truthful artifact state such as empty, partial, current, stale, unavailable, invalid, or cleared
- an optional updated timestamp only when needed to explain current saved state or resolve deterministic write behavior
- local-only browser scope

Module, prompt, scenario, simulation, decision, and option identifiers must come from repository-authoritative content. Unknown identifiers do not become valid because they appear in stored JSON. A stored module artifact must never grant access, create content, or establish authoritative scenario state.

Section 5 will define exact record shapes, keys, namespaces, and whether timestamps are technically necessary.

## 5. Written Design Practice Entries

Each authoritative written prompt entry conceptually supports:

- prompt or scenario identifier
- current learner response
- response state
- AI Review state
- associated bounded AI feedback when available
- optional revised response only where the approved interaction explicitly captures one
- error, stale, cleared, or unavailable state where needed
- no attempt history

Multiple prompt entries within one module remain independent:

- switching prompts must not erase valid work for another prompt
- feedback must remain attached to the exact prompt and current response it reviewed
- one invalid prompt entry must not invalidate another valid prompt entry
- prompt display order comes from repository content rather than stored client order
- missing optional entries must not invalidate the module artifact

## 6. Latest-Response Replacement Semantics

When a learner saves or submits a revised response for an existing prompt:

- the revised response becomes the current response
- the previous response is not retained as attempt history
- feedback produced for the previous response becomes stale immediately
- stale feedback must not be presented as current feedback for the revised response
- the stale feedback may be discarded under the latest-only model or represented only as a non-content stale state until a new review is available
- a later successful AI Review replaces the stale state with feedback associated with the current response

The artifact system must be able to establish that feedback belongs to the exact response instance it reviewed. Section 5 may choose a deterministic revision marker, response identity, or equivalent mechanism. The product requirement is exact association; this brief does not prescribe hashing or an internal key algorithm.

Original and revised responses remain separately stored only when another approved contract explicitly requires both. Module 4's original and revised rationale is the approved launch example. Ordinary written Design Practice remains latest-only unless separately approved.

## 7. AI Review Association

Each written prompt or structured activity distinguishes these AI Review states:

- **not requested:** valid learner work exists, but no request was made
- **ready to request:** current learner work meets the approved request requirements
- **pending:** a request is in progress
- **available:** valid bounded feedback is associated with the current response or validated simulation state
- **failed:** the request failed or returned invalid feedback
- **stale:** feedback no longer matches current learner work
- **cleared:** learner work or its associated review was intentionally removed

Association rules:

- AI feedback remains attached to the exact prompt and response or validated simulation state it reviewed
- feedback from one prompt or module must never appear under another
- missing or failed feedback does not invalidate valid learner work
- AI Review remains optional unless a separately approved contract explicitly states otherwise
- clearing a response clears or invalidates its associated feedback
- changing authoritative simulation state invalidates feedback for the previous state
- pending state must not be persisted indefinitely as if a request were still running after restart; Section 5 must recover it to an honest retryable state
- raw prompts, hidden model reasoning, provider internals, stack traces, and server errors must not be persisted or displayed as learner feedback

## 8. Module 4 Structured Simulation Artifact

The Module 4 entry within its current module artifact conceptually supports:

- simulation identifier
- simulation schema or content version
- current simulation state
- first decision and selected option identifiers
- server-derived consequence identifier
- dependent second decision and selected option identifiers
- server-derived pathway identifier
- server-derived final-state identifier
- original learner rationale
- optional revised rationale
- AI Review state and bounded feedback
- partial or completed status
- reset or unavailable state

The approved `MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md` controls the meanings and valid relationships of these values.

Artifact rules:

- decisions, consequences, pathways, and final states remain repository-authoritative
- client-written pathway, consequence, or outcome prose is never authoritative
- deterministic simulation state remains independent of AI
- valid partial progress may be retained
- one current simulation state replaces earlier current state rather than creating attempt history
- original and revised rationale remain distinct as approved
- changing deterministic state invalidates AI feedback tied to the prior state
- invalid, impossible, cross-branch, unknown, or incompatible stored sequences fail validation safely
- an AI failure never invalidates valid deterministic state

## 9. Reverse Build v2 Artifact Requirements

When present and valid, the module learner-artifact domain must allow Reverse Build v2 to access:

- authoritative prompt, scenario, or simulation identifier
- current learner response or structured decision state
- correctly associated AI Review state and feedback
- partial-completion state
- cleared, stale, invalid, or unavailable state without exposing untrusted content
- Module 4 decisions, consequence, dependent decision, pathway, final state, and rationale

Reverse Build rules:

- Reverse Build may read only the approved module learner-artifact domain
- Reverse Build must not read, display, summarize, transmit, or infer from Reflection
- missing work must not be invented
- stale feedback must not be presented as current
- malformed artifact records must not prevent authored Reverse Build content from remaining available
- learner artifacts must not overwrite, regenerate, or replace authored professional reasoning
- a partial artifact must not be presented as a completed pathway or completed response trail

## 10. Reflection Persistence

Reflection persistence is a separate lifecycle that begins only after the learner reaches the Reflection layer following Reverse Build.

The Reflection domain may conceptually contain:

- authoritative module identifier
- current Reflection response
- Reflection AI-feedback state
- associated bounded Reflection feedback when available
- schema version
- cleared, stale, invalid, or unavailable state

Requirements:

- Reflection is not required for Reverse Build, course completion, or access
- Reverse Build must not read, display, summarize, transmit, or infer from Reflection
- a revised Reflection replaces the current response without creating attempt history
- Reflection feedback remains associated with the exact response it reviewed
- revising Reflection invalidates feedback for the previous response
- Reflection clearing must be respected and must not silently affect Design Practice or course progress
- Reflection receives stronger learner-control consideration because it may contain personal professional reflection
- Reflection must not automatically resurface on the dashboard, in Reverse Build, in another module, or in unrelated product areas
- older advisory recommendations that place Reflection inside a Reverse Build trail are not authoritative and must not be implemented

## 11. Local Persistence Boundaries

Approved launch behavior:

- learner artifacts and Reflection remain in the current browser's local storage
- no account is required
- no cloud synchronization or server-side artifact store is provided
- no cross-device access or backup is implied
- clearing browser storage may remove learner work
- private or incognito browsing may prevent or shorten persistence
- browser policy, blocked storage, security settings, or quota limits may prevent saving
- open access and in-session learning remain available where possible when persistence is unavailable
- when a learner explicitly requests AI Review, the minimum required learner text and validated state are transmitted to the application server and AI provider
- local artifact persistence does not mean AI processing occurs only on the learner's device

Section 4.4 owns exact learner-facing disclosure and verified provider-retention language.

## 12. Retention and Shared-Computer Expectations

- Locally saved current artifacts remain until replaced, reset, cleared, made incompatible by an unsupported version, or removed through browser storage controls.
- No automatic expiration is required for launch.
- The product must not imply permanent retention, backup, or recoverability.
- Learners using shared computers must have a practical way to clear module work, Reflection, and course progress within their separately defined scopes.
- Sensitive Reflection content must not unexpectedly resurface outside its intended module and Reflection context.
- Explicitly cleared data must not be silently restored from a duplicate record, stale cache, or another domain.
- Product language must explain local-only scope without implying that shared-computer privacy is automatic.

This section defines required product behavior, not final notice copy or controls.

## 13. Reset and Clearing Model

### Reset active practice

Reset active practice:

- clears or restarts only the currently active written prompt, scenario entry, or Module 4 simulation activity
- clears or invalidates AI Review associated with that active work
- preserves other prompt entries in the same module
- preserves module Reflection and course progress
- uses clear accessible wording naming the affected activity
- requires confirmation when meaningful saved work would be destroyed

For Module 4, restarting a committed first decision clears the current simulation path, consequence, dependent decision, outcome, rationale, and associated AI state, while leaving other domains intact.

### Clear module work

Clear module work:

- clears all Design Practice and simulation entries in one module
- clears AI Review data associated with those practice entries
- preserves other modules and course progress
- preserves module Reflection by default
- may offer a separately labeled broader module action that explicitly includes Reflection, but that action must name both domains and require confirmation
- never silently clears unrelated module data

### Reset course progress

Reset course progress:

- clears completion markers only
- does not clear module learner artifacts or Reflection
- preserves open access
- names its completion-only scope and requires confirmation when progress exists

A future **clear all local work** action is outside the minimum Section 4.3 scope. If separately approved, it must enumerate course progress, module artifacts, and Reflection, require explicit confirmation, and report failure honestly.

## 14. Course-Progress Hardening Expectations

Section 5 must harden the existing progress store so that:

- stored data is parsed safely
- browser-storage reads and writes are caught and handled
- completion slugs are validated against authoritative course identifiers
- unknown entries are rejected or isolated and do not inflate progress
- the persisted progress format has an identifiable schema or storage version
- absent, invalid, or unreadable data produces a predictable empty fallback
- malformed JSON cannot break navigation, dashboard rendering, or module access
- reset-course-progress behavior is learner-controlled and accessible
- same-tab and cross-tab update behavior remains usable without allowing synchronization failure to block access
- course progress remains separate from module artifacts and Reflection
- clearing or persistence failure never locks content

This brief does not prescribe hook internals, event names, or storage keys.

## 15. Schema Versioning Policy

Every persisted domain or independently parsed record format must have an identifiable schema version.

- Supported current versions are parsed and validated before use.
- Unsupported future versions are not interpreted as current data.
- Older supported versions may be migrated only through explicit deterministic migration logic.
- Migration must not invent learner responses, decisions, feedback, Reflection, or completion.
- Migration must preserve authoritative identifier validation.
- Migration failure must not destroy the original raw record before safe recovery behavior is determined.
- Incompatible records are isolated rather than allowed to crash the application.
- One incompatible prompt, module, Reflection, or progress record must not invalidate unrelated valid domains or records.
- Version handling remains local and requires no account or server migration.

Section 5 will define exact version values, validators, migration functions, and safe write mechanics.

## 16. Stale and Unsupported Data

### Stale AI data

AI feedback is stale when it no longer matches the current learner response or validated simulation state.

- It must not be presented as current.
- Under the latest-only model, feedback content may be discarded while retaining only the state needed to explain that a new review is required.
- Stale content must not become visible attempt history.

### Stale repository identifiers

When stored module, prompt, scenario, simulation, decision, option, consequence, pathway, or outcome identifiers no longer exist in authoritative content:

- unknown identifiers must not be treated as valid
- the affected entry is isolated
- unrelated valid entries remain usable
- learner-facing state provides honest restart or recovery guidance
- stored client prose must not be used to reconstruct missing authoritative content

### Unsupported schema version

- Unknown structure is not partially interpreted.
- The rest of the product remains accessible.
- The learner may clear or restart the affected artifact.
- Internal schema, key, or raw-storage details are not exposed.

## 17. Partial-Data Behavior

Valid partial states include:

- response saved without AI Review
- AI Review pending, failed, stale, or not requested
- only some module prompts containing learner work
- Module 4 first decision committed with the second decision incomplete
- Module 4 deterministic outcome complete without rationale or AI Review
- original Module 4 rationale present without optional revised rationale
- Reflection response present without Reflection feedback

Requirements:

- partial states remain distinguishable from errors and completed states
- valid partial data remains usable
- missing optional fields do not invalidate the entire artifact
- invalid fields are isolated where safe without fabricating completion
- Reverse Build receives only the honest partial state it is permitted to display
- course access remains open
- AI is never required to preserve valid deterministic or learner-authored state

## 18. Malformed-Data Isolation and Recovery

The product must handle JSON parse failure, wrong record types, missing required identifiers, corrupt prompt entries, corrupt module artifacts, malformed Reflection, and incomplete writes.

- The product must not crash.
- Valid unrelated records and domains remain usable.
- Authored module and Reverse Build content remain available.
- Malformed content is not displayed as learner work.
- Missing work and unreadable work are distinguished where feasible.
- Recovery guidance offers the narrowest appropriate reset or clear action.
- Raw JSON, stack traces, storage keys, internal types, and implementation details are not shown.
- The system does not invent replacement learner content or authoritative state.
- A corrupt prompt entry does not require clearing valid sibling prompt entries unless Section 5 proves safe isolation impossible and the learner explicitly approves a broader clear.

## 19. Storage Failure Behavior

Storage may be unavailable because of blocked access, security exceptions, quota limits, read failures, write failures, or browser policy.

- Open access and in-session learning remain available where possible.
- The learner receives an honest accessible notice that current work may not persist.
- A failed write is never represented as successfully saved.
- Valid in-memory work is not erased solely because persistence failed.
- AI availability remains a separate concern.
- A repeated failing write loop must not block interaction or flood the learner with notices.
- Recovery or retry actions must have bounded, understandable behavior.
- Failure notices must identify the affected domain without exposing internal details.

Section 5 owns exact retry and in-memory fallback mechanics.

## 20. Write Consistency and Atomicity Expectations

- An artifact update must not leave the current record in a knowingly half-updated state.
- The latest valid response and its AI state remain internally coherent.
- A failed write must not silently replace a valid stored artifact with invalid partial content.
- Feedback association and response replacement must be committed coherently.
- Reset and clear actions complete predictably or report failure.
- One module update must not corrupt another module artifact.
- Progress, module artifact, and Reflection writes must not silently overwrite one another.
- Section 5 must choose browser-storage mechanics that satisfy these outcomes.

## 21. Privacy and Data Minimization

Persist only what the approved learning experience requires:

- current learner responses or approved original/revised fields
- validated repository-authoritative identifiers
- bounded structured AI feedback
- truthful current states
- necessary schema/version information
- timestamps only when technically or experientially necessary

Do not persist:

- hidden prompts or chain of thought
- AI-provider internals
- raw server errors or stack traces
- analytics or behavioral histories
- diagnostic or mastery labels
- unnecessary copies of repository-authored scenario, decision, consequence, pathway, or outcome prose
- past response attempts
- cross-module behavioral profiles
- account, identity, or demographic data not required by the current product

Section 4.4 owns exact disclosure and AI data-flow language.

## 22. Learner Visibility and Control

Learners must be able to understand:

- whether current work is saved locally, not saved, or may not persist
- whether work is missing, partial, stale, unreadable, incompatible, or cleared
- what each reset or clear action affects
- that course completion is separate from saved practice and Reflection
- that requesting AI feedback transmits required data beyond the browser for processing
- that no account, cloud backup, or cross-device synchronization exists
- that clearing browser storage can remove local work

The product must not imply successful persistence without a successful write. This brief defines required meaning and state communication, not final interface copy.

## 23. Accessibility Requirements

Later implementation and validation must prove:

- all artifact, save, retry, reset, clear, confirmation, and recovery controls have explicit accessible labels
- all controls are fully keyboard operable
- focus moves logically after save, reset, clear, cancellation, or recovery and is never unexpectedly lost
- destructive actions use confirmation when required by Section 13
- accessible names identify the exact deletion scope
- save success, save failure, reset, cleared, stale, partial, invalid, incompatible, and recovery states are announced appropriately
- errors are programmatically associated with the affected artifact or control
- state is communicated through text or semantics in addition to color
- screen readers can distinguish stored, missing, partial, stale, invalid, incompatible, unavailable, and cleared states
- layouts remain readable at a 320 CSS-pixel viewport, 200% browser zoom, and 200% text-only zoom without clipped essential controls or horizontal page scrolling
- primary save, reset, clear, and confirmation touch targets are at least 44 by 44 CSS pixels
- dynamic state updates do not unexpectedly move focus or obscure current learner input

These controls and status presentations do not currently exist and are not certified by this brief.

## 24. Current and Future Public Claims

### Currently supportable claims

- Course-completion progress persists locally in the current browser.
- Design Practice and AI Review operate during the active session.
- Reflection is a separate activity.
- The experience remains open without accounts.

### Supportable only after implementation and verification

- Learner Design Practice work is saved locally.
- AI feedback remains attached to the response or validated state it reviewed.
- Current learner work survives supported navigation and refresh.
- Reverse Build reconnects with available saved learner work.
- Module 4 pathway state is retained locally.
- Reflection is saved locally after Reverse Build.
- Learners can reset or clear local work within defined scopes.

### Prohibited claims

Do not claim:

- attempt or version history
- longitudinal tracking
- portfolio management
- cloud backup or cross-device synchronization
- accounts, permanent retention, or guaranteed recovery
- analytics, scoring, diagnosis, or automatic personalization
- recovery after browser storage is cleared
- server-side learner-artifact persistence unless separately implemented and approved
- browser-only processing when AI Review is requested

## 25. Acceptance Criteria

Every criterion has a binary pass or fail result. Evidence must identify the tested domain, module or prompt, initial state, action, observed persisted and rendered state, browser/storage condition, and relevant accessibility context.

### Artifact model

- **LAP-MODEL-01:** At most one current learner artifact exists for each authoritative module identifier.
- **LAP-MODEL-02:** One module artifact can represent multiple independently identified prompt entries without merging their responses or feedback.
- **LAP-MODEL-03:** Written-response and branching-simulation entries are distinguishable by validated activity category.
- **LAP-MODEL-04:** Course progress, module learner artifacts, and Reflection are independently readable, writable, and clearable domains.
- **LAP-MODEL-05:** Unknown module, prompt, scenario, or simulation identifiers are not accepted as valid artifact identity.
- **LAP-MODEL-06:** Absence of a module artifact does not affect content access or course completion.

### Written-response updates

- **LAP-WRITE-01:** Saving a revised written response replaces the current response for that prompt.
- **LAP-WRITE-02:** Replacing a response creates no accessible attempt or version history.
- **LAP-WRITE-03:** Switching prompts preserves valid current entries belonging to other prompts.
- **LAP-WRITE-04:** One invalid prompt entry does not invalidate valid sibling entries.
- **LAP-WRITE-05:** Prompt display order is reconstructed from repository content rather than stored client order.
- **LAP-WRITE-06:** Optional original and revised fields coexist only for interactions explicitly approved to retain both.

### AI Review association

- **LAP-AI-01:** Available AI feedback is displayed only with the exact current prompt response or validated simulation state it reviewed.
- **LAP-AI-02:** Revising learner work makes prior feedback stale or removes it before the revised response is presented as current.
- **LAP-AI-03:** Feedback from one prompt or module never appears under another prompt or module.
- **LAP-AI-04:** Not-requested, ready, pending, available, failed, stale, and cleared states are distinguishable.
- **LAP-AI-05:** Missing or failed AI feedback does not invalidate valid learner work or deterministic simulation state.
- **LAP-AI-06:** No raw prompt, hidden reasoning, provider internal, stack trace, or server error is persisted as learner feedback.

### Module 4

- **LAP-M4-01:** The artifact can represent every valid partial and completed Module 4 state approved by the Module 4 brief.
- **LAP-M4-02:** Stored decisions, options, consequences, pathways, and final states validate against repository-authoritative identifiers.
- **LAP-M4-03:** Client-authored pathway prose is never used as authoritative simulation state.
- **LAP-M4-04:** Invalid, impossible, cross-branch, unknown, or incompatible stored sequences are isolated and not rendered as valid.
- **LAP-M4-05:** Deterministic simulation state remains valid when AI Review is not requested or fails.
- **LAP-M4-06:** Original and revised rationale remain distinct without creating broader attempt history.
- **LAP-M4-07:** Restarting the active simulation clears its current path and AI state without clearing Reflection or course progress.

### Reverse Build

- **LAP-RB-01:** Reverse Build receives only current valid or honestly partial module learner-artifact state.
- **LAP-RB-02:** Stale AI feedback is never presented as current in Reverse Build.
- **LAP-RB-03:** Missing or malformed learner work is not invented.
- **LAP-RB-04:** Authored Reverse Build reasoning remains available when artifacts are absent, invalid, incompatible, or unavailable.
- **LAP-RB-05:** Code inspection and runtime verification confirm Reverse Build cannot access the Reflection domain.

### Reflection

- **LAP-REF-01:** Reflection is persisted only in its separate approved domain after the learner reaches Reflection.
- **LAP-REF-02:** Revising Reflection replaces its current response without creating attempt history.
- **LAP-REF-03:** Reflection feedback is displayed only with the exact current Reflection response it reviewed.
- **LAP-REF-04:** Revised Reflection invalidates or removes feedback for the prior response.
- **LAP-REF-05:** Clearing Reflection does not clear Design Practice, simulation state, or course progress.
- **LAP-REF-06:** Reflection does not automatically appear in Reverse Build, the dashboard, another module, or unrelated product areas.

### Reset and clearing

- **LAP-RESET-01:** Reset active practice clears only the named active prompt, scenario, or simulation and its AI state.
- **LAP-RESET-02:** Reset active practice preserves sibling prompt entries, Reflection, and course progress.
- **LAP-RESET-03:** Clear module work removes all practice and simulation entries for exactly one module and preserves other modules and course progress.
- **LAP-RESET-04:** Clear module work preserves Reflection unless an explicitly broader confirmed action names Reflection.
- **LAP-RESET-05:** Reset course progress clears completion markers only and preserves module artifacts and Reflection.
- **LAP-RESET-06:** Every destructive action accurately names its scope and uses confirmation where meaningful saved work exists.
- **LAP-RESET-07:** Successfully cleared data does not reappear from stale cache, duplicate storage, or another domain.

### Course-progress hardening

- **LAP-PROG-01:** Missing, malformed, wrong-type, or unreadable progress data produces a safe empty fallback without breaking access.
- **LAP-PROG-02:** Progress reads and writes handle browser-storage exceptions without crashing navigation or module pages.
- **LAP-PROG-03:** Unknown completion slugs do not count toward displayed progress.
- **LAP-PROG-04:** Progress data has an identifiable supported version and rejects unsupported structure safely.
- **LAP-PROG-05:** Same-tab and cross-tab progress synchronization failure does not gate access.
- **LAP-PROG-06:** Progress reset remains separate from artifact and Reflection clearing.

### Versioning, stale, and malformed data

- **LAP-VER-01:** Every independently parsed persisted domain or record format exposes an identifiable schema version.
- **LAP-VER-02:** Supported current versions parse and validate before rendering.
- **LAP-VER-03:** Unsupported future versions are not partially interpreted as current data.
- **LAP-VER-04:** Deterministic migration does not invent learner content or authoritative state.
- **LAP-VER-05:** Failed migration does not overwrite the original record with invalid migrated content.
- **LAP-VER-06:** One incompatible or malformed prompt, module, Reflection, or progress record does not invalidate unrelated valid records.
- **LAP-VER-07:** Unknown repository identifiers are isolated and receive honest recovery or restart guidance.

### Storage failure and consistency

- **LAP-FAIL-01:** Blocked or unavailable storage does not gate content or in-session learning where browser execution remains possible.
- **LAP-FAIL-02:** Failed reads and writes produce bounded accessible notices and no raw internal details.
- **LAP-FAIL-03:** Failed writes are never announced or displayed as successful saves.
- **LAP-FAIL-04:** Quota and security exceptions do not erase valid in-memory work solely because persistence failed.
- **LAP-FAIL-05:** A failed update does not replace the last valid stored artifact with knowingly partial or incoherent data.
- **LAP-FAIL-06:** A module write cannot corrupt another module or another persistence domain.
- **LAP-FAIL-07:** Repeated write failure does not block interaction or create an unbounded retry loop.

### Privacy and learner control

- **LAP-PRIV-01:** Persisted records contain only approved current learner content, validated identifiers, bounded feedback, state, and necessary version metadata.
- **LAP-PRIV-02:** No attempt history, portfolio, analytics profile, diagnostic label, account identity, or cloud-sync record is created.
- **LAP-PRIV-03:** Repository-authored scenario and pathway prose is not unnecessarily duplicated as client-authoritative data.
- **LAP-PRIV-04:** Learner-visible state accurately distinguishes local save success, failure, partial, stale, invalid, incompatible, missing, and cleared conditions.
- **LAP-PRIV-05:** Product meaning distinguishes local persistence from AI transmission and from nonexistent cloud backup.

### Accessibility

- **LAP-A11Y-01:** Save, retry, reset, clear, confirmation, cancellation, and recovery controls are keyboard operable and explicitly labeled.
- **LAP-A11Y-02:** Destructive-control accessible names identify the exact domain, module, or activity affected.
- **LAP-A11Y-03:** Save success, failure, partial, stale, invalid, incompatible, reset, cleared, and recovery states are announced appropriately.
- **LAP-A11Y-04:** Errors are programmatically associated with the affected artifact or control, and state does not rely on color alone.
- **LAP-A11Y-05:** Focus remains predictable after save, reset, clear, cancellation, and recovery.
- **LAP-A11Y-06:** At a 320 CSS-pixel viewport, 200% browser zoom, and 200% text-only zoom, no essential artifact control or status is clipped or requires horizontal page scrolling.
- **LAP-A11Y-07:** Primary save, reset, clear, and confirmation targets are at least 44 by 44 CSS pixels.

### Product honesty

- **LAP-HONEST-01:** Current claims do not describe learner-artifact or Reflection persistence before corresponding behavior is implemented and verified.
- **LAP-HONEST-02:** Local persistence is never described as account storage, cloud backup, cross-device synchronization, or permanent retention.
- **LAP-HONEST-03:** Course completion is never represented as proof that Design Practice, AI Review, or Reflection exists.
- **LAP-HONEST-04:** Reverse Build never represents missing, stale, invalid, or unavailable artifacts as current learner work.
- **LAP-HONEST-05:** No interface claims successful save, reset, clear, or migration unless the operation actually succeeds.

## 26. Non-Goals and Explicit Exclusions

Section 4.3 does not authorize or include:

- attempt history
- learner-visible version history
- longitudinal tracking
- portfolio management
- cross-device synchronization
- accounts or authentication
- Supabase, cloud storage, or server-side learner-artifact persistence
- analytics or behavioral profiling
- learner scoring or mastery assessment
- capability diagnosis
- automated recommendations or pathway personalization
- social sharing or publishing learner work
- implementing Section 5 architecture
- creating TypeScript types, storage keys, hooks, services, components, routes, APIs, migrations, tests, or learner-facing controls
- creating exact privacy-notice language reserved for Section 4.4
- placing Reflection inside Reverse Build
- changing the approved Module 4 simulation or Reverse Build v2 contracts

## 27. Section Ownership and Handoff

### Section 4.3 owns

- product behavior and lifecycle decisions
- artifact-domain boundaries
- update and AI-association semantics
- reset and clearing semantics
- versioning, stale-data, partial-data, and recovery policy
- learner-control expectations
- binary acceptance criteria

### Section 5 owns

- TypeScript interfaces and discriminated unions
- storage keys and namespaces
- serializers, validators, and safe parsers
- migration functions
- persistence services and hooks
- browser event subscriptions
- progress-store hardening
- reset APIs and technical controls
- automated technical tests

### Section 6 owns

- written-response reference implementation
- artifact capture and replacement behavior
- exact response and AI-feedback linkage
- Reverse Build v2 integration in the designated reference module

### Later Module 4 implementation owns

- branching artifact integration under the approved shared architecture

### Section 4.4 owns

- exact learner-facing local-storage, AI-processing, retention, and shared-computer disclosure

### Section 4.5 owns

- validation environments, browsers, assistive technologies, evidence locations, severity, and retest rules

## Section 4.3 Requirement Coverage

| Section 4.3 requirement | Controlling brief coverage |
|---|---|
| Define one current learner artifact per module. | Sections 2–4 |
| Define how the artifact stores the latest response and associated AI feedback for each Design Practice prompt. | Sections 5–7 |
| Define how a revised response updates the current artifact without creating attempt history. | Sections 6–7 |
| Define Module 4's structured decisions, pathway, consequences, and final state. | Section 8 |
| Define how Reflection is persisted after Reverse Build without being displayed inside Reverse Build. | Sections 3, 9–10, and 13 |
| Define course-progress hardening and reset behavior alongside artifact persistence. | Sections 3, 13–14, and 19–20 |
| Define schema-version, unsupported-version, stale-data, partial-data, and migration behavior. | Sections 15–18 |
| Explicitly exclude attempt history, version history, longitudinal tracking, portfolio management, and cross-device synchronization. | Sections 2, 24, and 26 |

## Approval and Handoff

Before Section 4.3 can be marked complete, Bradley must approve this brief and confirm that it addresses all eight checklist requirements. Approval will authorize the product specification, not artifact or persistence implementation.

After approval:

1. Section 4.4 defines exact privacy and data-flow disclosure.
2. Section 4.5 defines validation execution and evidence records.
3. Section 5 implements the shared artifact architecture and hardens course progress under this contract.
4. Section 6 implements and validates the written-response reference integration.
5. Later Module 4 work integrates the approved deterministic simulation artifact.
6. Public claims remain limited to current course-progress persistence until learner-artifact behavior is implemented and verified.
