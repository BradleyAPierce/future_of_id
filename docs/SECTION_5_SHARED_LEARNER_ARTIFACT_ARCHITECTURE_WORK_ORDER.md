# Implementation Work Order: Section 5 Shared Learner-Artifact Architecture

## Identity and Approval

- **Work-order ID:** IWO-5-001
- **Title:** Section 5 Shared Learner-Artifact Architecture
- **Checklist phase:** `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`, Section 5
- **Status:** Complete and Approved
- **Requester:** Bradley Pierce
- **Approver:** Bradley Pierce
- **Approval date:** July 15, 2026
- **Implementation owner:** Codex
- **Branch/target:** `codex/section-5-learner-artifacts`, based on approved planning baseline `72fd487`
- **Exact implementation commit:** `03542c78fbea090b092b9e7aa8f15a165f49c5db`, parent `72fd487a8840be512e39a488fda2012030ede7d8`
- **Evidence commit:** `8fedeb8ff51afab949226e471bedfcdcee2e5d5b`, parent `03542c78fbea090b092b9e7aa8f15a165f49c5db`
- **Related issue/task/decision:** Phase 4 completion approval dated July 13, 2026; Section 5 implementation planning request dated July 15, 2026
- **Planning baseline:** Clean working tree observed on July 15, 2026 before this work-order document was created
- **Authorization boundary:** Bradley approved implementation on July 15, 2026, only within the required, permitted, prohibited, and affected-file boundaries of this work order. Section 6–8 feature integrations remain excluded.

### Approval record

- Bradley approved the architectural direction, ADR gate, minimal Vitest/jsdom tooling, and Section/phase closure interpretation stated in this work order.
- ADR-010 must be created and reviewed against this work order before store implementation begins.
- Section 5 may reach technical completion with later feature-specific criteria still explicitly `Not implemented` or `Not yet executable`; broader Phase 5 completion must remain open when later learner-facing disclosure evidence is still required.
- Any file or system outside the approved inventory requires the amendment or blocking procedure before work continues.

### Closure approval record

- **Closure decision:** Section 5 Complete and Approved with documented external blockers
- **Closure approver:** Bradley Pierce
- **Closure approval date:** July 15, 2026
- **Approved baseline:** `72fd487a8840be512e39a488fda2012030ede7d8`
- **Implementation commit:** `03542c78fbea090b092b9e7aa8f15a165f49c5db`
- **Evidence commit:** `8fedeb8ff51afab949226e471bedfcdcee2e5d5b`
- **Approved amendment:** `IWO-5-001-A1`

Bradley approves the bounded Section 5 Shared Learner-Artifact Architecture under `IWO-5-001` and Amendment `IWO-5-001-A1`. The approved architecture includes three independent versioned persistence domains; safe injected storage and event adapters; deterministic migration and authoritative validation; record and domain isolation; opaque revision association and stale-feedback invalidation; non-destructive unreadable-record handling; baseline-aware session-only fallback and coherent retry; structural Reflection exclusion; scoped clearing and reset behavior; hardened course progress; accessible current progress controls; honest completion-save results; automated validation; and Bradley's available macOS/VoiceOver manual validation.

The bounded Passed scope is the scope recorded as Passed in the criterion records: `LAP-MODEL-01`–`06`; authorized Section 5 portions of `LAP-RESET-01`–`07`, `LAP-PROG-01`–`06`, `LAP-VER-01`–`07`, and `LAP-FAIL-01`–`07`; `LAP-PRIV-01`–`05`; `LAP-HONEST-01`–`03` and `05`; `PDF-DATA-01`–`06`; Section 5 persistence portions of `PDF-MIN-03`–`04`; the technical clear-boundary portion of `PDF-REF-06`; authorized Section 5 portions of `PDF-RESET-01`–`07` and `PDF-FAIL-01`–`03`, `06`–`07`; `PDF-HONEST-01`–`06` for changed Section 5 surfaces; and applicable bounded `VE-*` and `IWO-*` implementation/evidence criteria.

Windows/NVDA, physical iOS/Android, deployed-preview, provider, and infrastructure validation remain external blockers. Complete `LAP-A11Y-*`, `PDF-A11Y-*`, `PDF-LOCAL-*`, and external-environment validation remain In validation or Blocked as recorded. Design Practice persistence UI, Reflection persistence UI, Reverse Build v2, Module 4, rendered feature-specific AI association, and later contextual local-storage and AI-transmission disclosures remain Not implemented or Not yet executable under their later owners. Broader Phase 5 remains incomplete. The pre-existing Next.js/PostCSS advisories remain a separately governed repository-level security and launch dependency.

This closure does not constitute broader Phase 5 completion, accessibility conformance, security approval, provider verification, production readiness, or public-launch approval.

## Objective

- **Problem:** Future of ID currently persists only an unversioned array of completion slugs. Design Practice responses, AI Review feedback, and Reflection are component-local; Reverse Build receives no learner artifacts; browser-storage failures can escape; and there is no shared model for versioning, migration, isolation, reset scope, or exact response-to-feedback association.
- **Observable target:** After an approved implementation, the repository has one reusable, typed, browser-local persistence architecture with three independently owned domains: course progress, module learner artifacts, and Reflection. The architecture safely validates, versions, migrates, reads, writes, subscribes, resets, and clears each domain; prevents cross-module and cross-domain leakage; preserves exact feedback association; supports current written-response entries and the approved future Module 4 structured state; and fails without gating course access or in-session work.
- **Behavior that must remain unchanged:** Open access; direct module access; Theory → Experience → Reverse Build → Reflection structure; Design Practice → AI Review → Reverse Build → Reflection order; authored Reverse Build content; current server-side reconstruction for existing AI routes; optional AI use; repository-authoritative content and identifiers; deterministic Module 4 state independent of AI; and the absence of accounts, authentication, databases, cloud persistence, cross-device synchronization, attempt history, analytics, scoring, diagnosis, recommendations, and personalization.

## Current and Target Behavior

### Current observed behavior

Repository inspection at `72fd487` established the following:

| Area | Current observable behavior | Repository evidence |
|---|---|---|
| Course progress | `useCourseProgress` stores a JSON array under `course-progress`, filters array values to strings, emits a same-tab custom event, and listens for browser `storage` events. | `web/lib/useCourseProgress.ts` |
| Progress failure handling | `JSON.parse`, `localStorage.getItem`, and `localStorage.setItem` are not guarded. Malformed JSON, blocked storage, quota failure, or security exceptions can escape. | `web/lib/useCourseProgress.ts` |
| Progress integrity | Progress has no schema version, migration, authoritative-slug validation, reset API, operation result, or bounded failure state. Unknown strings can inflate dashboard counts. | `web/lib/useCourseProgress.ts`, `web/data/modules.ts`, `web/app/course/dashboard/page.tsx` |
| Open access | Modules and Orientation remain directly reachable; completion is not a prerequisite. | `web/app/course/module/[slug]/page.tsx`, `web/app/course/orientation/page.tsx`, `web/app/course/dashboard/page.tsx` |
| Written Design Practice | Scenario choice, response, feedback, error, and pending state live only in React state. Switching scenario clears response and feedback; navigation, refresh, or unmount loses them. | `web/components/course/ScenarioDecisionAI.tsx` |
| Stale feedback | Editing response text after feedback does not invalidate or hide the existing feedback, so feedback may remain visible beneath changed text until another submission or scenario switch. No persisted response identity exists. | `web/components/course/ScenarioDecisionAI.tsx` |
| Reflection | Reflection response and feedback live only in React state and are lost on navigation, refresh, or unmount. Editing after feedback has no exact-association mechanism. | `web/components/course/ReflectionFeedbackAI.tsx` |
| Reverse Build | Reverse Build receives authored intro and section data only. It does not receive module artifacts or Reflection, but current copy can imply learner-specific reconstruction. | `web/components/course/ModuleLayerRenderer.tsx`, `web/components/course/ReverseBuildModalCards.tsx` |
| Existing AI flow | Existing scenario and Reflection requests validate identifiers and learner text, reconstruct repository-owned context server-side, call OpenAI, parse structured feedback, and return it to component state. No learner-artifact persistence is implemented in these routes. | `web/app/api/scenario-feedback/route.ts`, `web/app/api/reflection-feedback/route.ts`, `web/lib/ai/scenarioFeedback.ts`, `web/lib/ai/reflectionFeedback.ts` |
| Module 4 | Module 4 uses the same written-response activity as other modules. The approved deterministic branching simulation and its structured artifact do not exist. | `web/data/scenarioDecisions.ts`, `web/content/modules/simulation-design.ts`, `web/components/course/ScenarioDecisionAI.tsx` |
| Test infrastructure | `web/package.json` exposes lint, build, dev, and start scripts only. No unit, integration, or end-to-end test harness or matching test files were found. | `web/package.json`; repository file inventory |

### Approved target behavior

The implementation must:

1. Preserve three separate domains with independent read, write, version, validation, event, reset, and clear boundaries.
2. Store at most one current module artifact per authoritative module, with independent current prompt entries and no attempt history.
3. Store Reflection only in its separate domain after the Reflection experience reaches that lifecycle point.
4. Make it structurally impossible for the module-artifact reader supplied to Reverse Build to return Reflection fields or Reflection feedback.
5. Use discriminated TypeScript models for written-response and branching-simulation entries.
6. Validate stored shapes and every repository-owned identifier before rendering or using state.
7. Associate AI feedback with the exact current response or validated simulation review subject and invalidate it on relevant revision.
8. Preserve valid sibling prompts, modules, and domains when one record is malformed, stale, unsupported, or unavailable.
9. Harden progress while preserving same-tab and cross-tab updates and open access.
10. Return explicit operation results so failed save, reset, clear, or migration is never announced as successful.
11. Retain valid in-memory work when browser persistence fails and prevent unbounded retries or repeated notices.
12. Provide scoped reset and clearing APIs whose names and results expose exactly what changed and what was preserved.
13. Expose integration contracts for later learner-facing notices and controls without making unimplemented persistence or provider claims.
14. Add architecture-level automated coverage and retain evidence under the Section 4.5 contract.

### Section 5 implementation boundary

The authorized architecture-level behavior above is implemented and remains **In validation**. Reverse Build v2 integration belongs to Section 6; the concrete Module 4 simulation belongs to Section 7; remaining module rollout belongs to Section 8; full AI regression and transparency work belongs to Section 9; and public-claim rollout remains governed by later checklist phases. This work order does not report those later feature criteria as passed.

## Controlling Sources

| Path | Section/criterion | Authority level | Role | Conflict-resolution rule |
|---|---|---:|---|---|
| `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` | Phase 4 Completion Record; Section 5; Phase 5 completion evidence | 1 | Launch scope, order, approved three-domain boundary, Section 5 outcome | Controls launch sequencing and Section 5 scope. A material conflict with a brief pauses work for Bradley rather than being resolved by preference. |
| `docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md` | Sections 1–27; all `LAP-*` | 2 | Primary product contract for domains, lifecycle, versioning, failure, reset, and handoff | Controls learner-artifact product meaning. The work order chooses mechanisms only. |
| `docs/experience/REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md` | Sections 3, 5, 8–13, 16; all `RB2-*` | 2 | Reverse Build input, strict Reflection exclusion, fallback, and artifact association | Controls what later Reverse Build may receive and display. Section 5 must expose a safe module-artifact-only contract. |
| `docs/experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md` | Sections 7–17, 24; all `M4SIM-*` | 2 | Future structured simulation state, authority, persistence, reset, and AI independence | Controls the meanings and relationships Section 5 types must be able to represent. Section 5 cannot invent or implement simulation content. |
| `docs/experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md` | Sections 3–24, 28–30; all `PDF-*` | 2 | Data minimization, local/AI distinction, disclosure dependencies, failure honesty, claims | Controls data fields and disclosure meaning. Provider defaults never become deployment facts. |
| `docs/IMPLEMENTATION_WORK_ORDER_STANDARD.md` | Sections 1–35; Appendices A–F; applicable `IWO-*` | 3 after approval; governance source now | Work-order structure, scope, blocking, evidence, result, and closure | This full-format Draft must be approved before coding. It cannot alter higher-authority product contracts. |
| `docs/validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` | Sections 1–35; Appendices C–E; all `VE-*` | 4 | Validation methods, environments, status, evidence, defects, retest, completion | Controls validation meaning. Planned tests and this work order are not passing evidence. |
| `docs/architecture/TECH_ARCHITECTURE.md` | Current Launch Architecture → Persistence | 5 | Browser-local, no-account technical boundary | Applies where the checklist and briefs do not prescribe a mechanism. Future cloud options are non-authoritative for launch. |
| `docs/architecture/CONTENT_ARCHITECTURE.md` | Standard Module Structure; Assessment / Reflection Pattern | 5 | Learning-layer and content separation | Preserves structured content and Reflection as a distinct closure layer. |
| `docs/SYSTEM-INSTRUCTIONS.md` | Sections 2, 5–10 | 6 | Contributor, architecture, and authority guidance | Supports, but cannot override, the approved checklist and briefs. |
| `docs/COPILOT-INSTRUCTIONS.md` | Implementation Work Order Compliance; architecture and state guidance | 6 | Implementation discipline | Supports reuse and separation; conflicts escalate through the governing hierarchy. |
| `docs/decisions/ADR-009-ai-feedback-engines.md` | Current AI feedback-engine decisions | 7 | Existing AI decision context | Applies only within its scope and cannot authorize Module 4 branching or persistence changes. |

Advisory Claude/Grok files, historical README variants, and future architecture options may be read for context but may not override the sources above.

## Acceptance Criteria

The tables below are planning mappings, not execution results. `Not implemented` and `Not yet executable` use the Section 4.5 meanings. No criterion is passed by this work order.

### Learner-artifact and persistence criteria

| Identifier(s) | Implementation responsibility | Executability after Section 5 | Validation method | Evidence location |
|---|---|---|---|---|
| `LAP-MODEL-01`–`06` | Implement three domains, one current artifact per module, discriminated entry categories, authoritative identity, and open-access absence behavior. | Ready for architecture-level validation; rendered integration portions remain later. | Schema/parser, store-isolation, identifier-fixture, and access regression tests. | `docs/validation/learner-artifact-and-persistence-validation-record.md`; IWO evidence index. |
| `LAP-WRITE-01`–`06` | Implement latest-only replacement, sibling preservation, authoritative ordering seam, entry isolation, and approved original/revised exception. | Ready for service-level validation; UI prompt switching remains Section 6/8. | Unit/integration tests with multiple prompts and revision fixtures. | Same as above. |
| `LAP-AI-01`–`06` | Implement exact review-subject association, stale invalidation, bounded review states, and safe feedback persistence. | Ready for service-level validation; visible AI integration remains later. | Association, mutation, cross-module, malformed-feedback, and failure-state tests. | Same as above; future AI regression records where applicable. |
| `LAP-M4-01`–`07` | Define the branching artifact type and injected authoritative-validation boundary; preserve original/revised rationale semantics and scoped restart. Do not implement Module 4 content or UI. | Type/store portions ready; repository-specific path coverage remains Not implemented until Section 7. | Type fixtures, generic state validator tests, invalid-sequence isolation, reset-scope tests. | Same as above; later `module-4-simulation-validation-record.md`. |
| `LAP-RB-01`–`05` | Expose a module-artifact-only read model; preserve honest partial/invalid states and structural Reflection exclusion. | Architecture portion ready; rendered Reverse Build behavior remains Not implemented until Section 6. | Export-boundary inspection, fixtures, store fault tests, later runtime instrumentation. | Same as above; later `reverse-build-v2-validation-record.md`. |
| `LAP-REF-01`–`06` | Implement a separate Reflection store, exact feedback association, latest-only update, independent clear, and no aggregate resurfacing API. | Store-level validation ready; Reflection UI integration remains later. | Reflection store, revision, cross-domain clear, and import-boundary tests. | Same as above; privacy record. |
| `LAP-RESET-01`–`07` | Implement typed active-practice reset, module clear, Reflection clear, and progress reset with explicit operation results and cache/event invalidation. | API tests ready; learner-facing control and wording checks remain later where no control exists. | Reset matrix, failure injection, stale-cache, and domain-preservation tests; later manual control review. | Same as above; accessibility and privacy records. |
| `LAP-PROG-01`–`06` | Harden current progress parsing, authoritative slugs, versioning, events, reset, and failure behavior. | Ready for automated and current-surface manual validation. | Legacy/current parser tests, bad storage tests, same/cross-tab tests, dashboard walkthrough. | Same as above. |
| `LAP-VER-01`–`07` | Implement versioned envelopes, deterministic migrations, unsupported-version handling, non-destructive migration failure, and record isolation. | Ready for automated validation. | Parser/migration matrices and raw-record preservation tests. | Same as above. |
| `LAP-FAIL-01`–`07` | Implement injectable storage faults, in-memory preservation, bounded failure notices/results, atomic record writes, and retry suppression. | Service behavior ready; full learner-visible notice behavior remains later. | Exception/quota/security/read/write/interruption fixtures and manual browser failure walkthroughs. | Same as above; privacy record. |
| `LAP-PRIV-01`–`05` | Enforce minimized fields, no history/profile/identity/cloud data, repository-prose exclusion, truthful state, and local-versus-AI separation. | Static/storage inspection ready; public wording remains later. | Persisted-field snapshots, prohibited-field search, network/storage inspection, claim audit. | Privacy record; public-claim audit. |
| `LAP-A11Y-01`–`07` | Define accessible status and control contracts; implement only controls explicitly authorized in this inventory. | API semantics partly ready; complete family Not yet executable until visible integrations exist. | Automated semantics where available plus manual keyboard, focus, announcements, 320px, zoom, and target-size checks. | `docs/validation/accessibility-validation-record.md`. |
| `LAP-HONEST-01`–`05` | Preserve current-versus-target wording and operation-result truthfulness. | Static review ready; feature claims remain dependent on later integrations. | Claim search, storage-failure walkthrough, operation-result assertions. | Public-claim audit; privacy record. |

### Reverse Build v2 criteria affected by the architecture

| Identifier(s) | Section 5 responsibility | Executability/owner | Validation/evidence |
|---|---|---|---|
| `RB2-SEQ-01`–`02` | Preserve sequence and create no Reflection-capable Reverse Build reader. | `SEQ-02` structural inspection after Section 5; runtime evidence later Section 6. `SEQ-01` regression-preserve only. | Import/export inspection and later route instrumentation in Reverse Build record. |
| `RB2-ART-01`–`05` | Supply correctly isolated prompt entries and exact matching feedback; no rendering implementation. | Service fixtures after Section 5; visible criteria remain Not implemented until Section 6/8. | Artifact association tests plus later component/browser evidence. |
| `RB2-AUTH-01`–`03` | Do not edit or overwrite authored reasoning; no generic storage code may contain authored instructional content. | Regression inspection now; visual/semantic distinction later. | Diff/content inspection and later UI evidence. |
| `RB2-STATE-01`–`04` | Return honest absence, partial, failed, cleared, and unavailable read states without throwing. | Store/read-model portions ready; rendered portions later. | Fault and partial-state fixtures plus later screenshots. |
| `RB2-PRIV-01`–`05` | Module/browser isolation, clear semantics, strict Reflection exclusion, no internal data, and no browser-only AI claim. | Technical portions ready; disclosure portions later. | Storage inspection, forbidden-field tests, later privacy/claim audit. |
| `RB2-FAIL-01`–`04` | Ensure store failures and invalid sibling entries do not block or contaminate recoverable data. | Service portion ready; authored-content rendering later. | Fault/isolation tests and later browser review. |
| `RB2-A11Y-01`–`07` | Define status values and subscription behavior that later UI can announce; do not alter current modal under Section 5. | Not yet executable as a complete family; Section 6 owns. | Later accessibility record under required matrix. |
| `RB2-OPEN-01`–`02` | Persistence state must never become an access gate. | Open-access regression test/check after Section 5; full Reverse Build later. | Direct-route/browser regression. |
| `RB2-HONEST-01`–`04` | Do not claim dynamic reconstruction or review when data is absent/stale; do not add diagnosis. | Static/data contract portions ready; UI/claims later. | Claim search and later rendered-state review. |

### Module 4 criteria affected by the architecture

| Identifier(s) | Section 5 responsibility | Executability/owner | Validation/evidence |
|---|---|---|---|
| `M4SIM-STATE-01`–`06`, `M4SIM-D1-01`–`05`, `M4SIM-D2-01`–`05`, `M4SIM-OUT-01`–`05` | Provide a typed persistence envelope and authoritative-validator port; never persist client prose as authority. Do not create scenario records, transitions, outcomes, or UI. | Architecture shape/invalid-state fixtures only; criteria remain Not implemented until Section 7. | Generic schema tests now; later Module 4 state/route evidence. |
| `M4SIM-RAT-01`–`05` | Represent original and optional revised rationale distinctly; associate critique with deterministic state plus original rationale, not the later revision. | Type/store fixtures after Section 5; interaction criteria later Section 7. | Serialization and association tests; later UI evidence. |
| `M4SIM-AI-01`–`07`, `M4SIM-SRV-01`–`05` | Keep deterministic state independent of AI and define a separate branching review-state shape; do not change current APIs or implement the branching API. | Persistence independence testable; request/server criteria remain Not implemented until Section 7. | Store mutation/failure tests; later API-contract evidence. |
| `M4SIM-RB-01`–`05` | Expose validated partial/completed simulation artifact data through the module-artifact read model; exclude Reflection. | Structural portions after Section 5; rendered reconstruction later Sections 6/7. | Read-model fixtures and later runtime instrumentation. |
| `M4SIM-PERSIST-01`–`05` | Direct responsibility for persistence, scoped reset, no stale restore, and domain separation. | Generic architecture ready; concrete Module 4 paths remain Not implemented until Section 7. | Persistence/reset/isolation fixtures and later browser evidence. |
| `M4SIM-FAIL-01`–`05` | Model partial/review states, isolate invalid versions/sequences, preserve in-session and deterministic state, and hide internals. | Generic service portions ready; complete experience later. | Fault and state fixtures; later manual recovery evidence. |
| `M4SIM-A11Y-01`–`10` | Provide predictable state/result contracts for later announcements; no simulation controls are implemented here. | Not implemented until Section 7. | Later accessibility record; not passed by Section 5 tests. |
| `M4SIM-HONEST-01`–`06` | Preserve open access, AI independence, local-only scope, no prohibited profiling, Reflection exclusion, and current-browser isolation. | Technical boundaries partly ready; claims/UI later Section 7. | Static/storage tests and later privacy/claim evidence. |

### Privacy and data-flow criteria affected by the architecture

| Identifier(s) | Section 5 responsibility | Executability/owner | Validation/evidence |
|---|---|---|---|
| `PDF-DATA-01`–`06` | Keep implemented fields aligned with the approved inventory and the three domains. | Repository/storage inspection after Section 5; inventory approval remains privacy owner. | Privacy record with field and flow inventory. |
| `PDF-LOCAL-01`–`08` | Enforce local-only storage behavior and expose integration state; do not activate future claims before observable integration. | Technical portions after Section 5; learner-facing disclosure rollout later. | Storage inspection and later editorial/manual review. |
| `PDF-AI-01`–`10` | Preserve optional AI/data-minimization dependencies; no current API or notice change is authorized here. | Not implemented as notice criteria; Section 6/7/privacy rollout. | Later network, notice, accessibility, and claim evidence. |
| `PDF-REF-01`–`07` | Separate Reflection technically; expose no Reflection through Reverse Build; local clear cannot imply external deletion. | Technical separation/clear after Section 5; contextual notice later. | Import/storage tests plus later privacy/accessibility evidence. |
| `PDF-APP-01`–`06` | Update current data inventory only after implementation; do not infer infrastructure behavior. | Repository portions inspectable; deployment claims blocked pending authorized verification. | Privacy and deployment records. |
| `PDF-PROV-01`–`09` | Record as external dependency only. Section 5 must not change provider wording or settings. | Blocked/not yet executable until authorized deployment verification; not a Section 5 implementation deliverable. | Provider verification record required before dependent copy. |
| `PDF-RESET-01`–`07` | Typed scoped APIs and honest results; later controls must name affected/preserved domains and local-only effect. | API behavior ready; UI wording/accessibility later where controls do not yet exist. | Reset tests and later manual disclosure evidence. |
| `PDF-FAIL-01`–`07` | Honest storage results, open access, distinct AI/storage errors, state preservation, bounded recovery, no internals. | Service portions ready; learner-visible error language later. | Fault tests and manual recovery record. |
| `PDF-MIN-01`–`06` | Persist only approved minimum fields, preserve server-authoritative boundaries, no hidden/internal data, no profile/history, Reflection isolation, AI-independent Module 4 state. | Storage/static portions ready; network portions later. | Field snapshots, prohibited-field searches, and later network evidence. |
| `PDF-A11Y-01`–`08` | Define accessible operation/status contracts; visible notices/controls require later integration and manual validation. | Not yet executable as a complete family. | Accessibility record. |
| `PDF-HONEST-01`–`06` | Prohibit unsupported browser-only, deletion, retention, provider, backup, synchronization, recovery, and legal claims. | Static audit after every implementation; provider/legal portions external. | Public-claim audit and privacy record. |

### Validation-governance criteria

| Identifier(s) | Work-order application | Evidence |
|---|---|---|
| `VE-INV-01`–`02`, `VE-MAP-01`–`02` | Preserve the approved 265-feature-criterion inventory; keep planned automation visibly distinct from existing tests and results. | Work order, feature validation record, test inventory. |
| `VE-ENV-01`, `VE-ROUTE-01`, `VE-BROWSER-01`, `VE-VIEW-01` | Use the exact environments, current routes, browser policy, viewports, zoom, and reduced-motion matrix below. | IWO evidence index and feature records. |
| `VE-A11Y-01`–`03` | Automated scanning is supplemental; keyboard and VoiceOver/NVDA evidence remains mandatory and unavailable required environments are blocked. | Accessibility record. |
| `VE-AI-01`–`02` | Separate deterministic association/state tests from future request/parser/live-provider review; store no production learner conversations or hidden prompts. | Test logs and future AI regression records. |
| `VE-PERSIST-01` | Execute the parser, version, migration, isolation, storage-failure, stale-feedback, reset, domain-separation, and cleared-data plan below. | Learner-artifact validation record. |
| `VE-PRIV-01`–`02`, `VE-CLAIM-01` | Keep technical, editorial, provider, governance, and legal evidence distinct; fail target-as-current or unsupported claims. | Privacy record and public-claim audit. |
| `VE-EVID-01`–`02`, `VE-SEV-01`, `VE-RETEST-01`, `VE-EXC-01` | Use complete criterion records, append-only evidence history, Critical/High/Medium/Low defects, required retests, and governed exceptions. | Consolidated evidence index and linked records. |
| `VE-LAUNCH-01`, `VE-STATUS-01`, `VE-COMP-01`–`02` | Do not count unimplemented/blocked/missing evidence as passed; do not close from lint/type/build/docs alone. | Completion and closure sections. |
| `VE-ALIGN-01`, `VE-HIER-01`, `VE-GOV-01` | Preserve approved boundaries and source hierarchy; make no WCAG, privacy, provider-setting, or legal-compliance claim without authority. | Source table, boundary audit, closure review. |

### Implementation-work-order criteria

All full-format criteria are applicable except `IWO-ID-03`, which governs use of the reduced format and is not invoked.

| Identifier(s) | Work-order application |
|---|---|
| `IWO-ID-01`–`02` | Identity, valid Draft status, and no coding before approval are explicit. |
| `IWO-OBJ-01`–`02`, `IWO-CURRENT-01` | Observable target, unchanged behavior, current evidence, and unimplemented target are distinct. |
| `IWO-SOURCE-01`–`03`, `IWO-CRIT-01`–`03` | Sources and all affected criterion families are mapped without marking any criterion passed. |
| `IWO-SCOPE-01`–`02`, `IWO-FILE-01`–`02`, `IWO-CHANGE-01`–`02`, `IWO-UNRELATED-01` | Required/permitted/prohibited scope, initial/final files, amendments, and unrelated-change prohibition are explicit. |
| `IWO-SEP-01`, `IWO-REUSE-01`–`03`, `IWO-HARD-01`, `IWO-ARCH-01`–`02` | Separation, reuse, hardcoding, alternatives, trade-offs, and ADR need are recorded. |
| `IWO-DATA-01`, `IWO-AI-01`, `IWO-AI-03`, `IWO-PRIV-01`, `IWO-A11Y-01`–`02`, `IWO-CLAIM-01`–`03` | Data lifecycle, AI independence, privacy, accessibility, and claims are explicitly mapped. |
| `IWO-VAL-01`–`05`, `IWO-BLOCK-01`–`02`, `IWO-EVID-01`–`03` | Exact commands, environments, manual scenarios, blockers, and evidence rules are specified. |
| `IWO-REPORT-01`, `IWO-FINALFILE-01`, `IWO-RESULT-01`–`02`, `IWO-TEST-01`, `IWO-STATUS-01`–`02`, `IWO-CLOSE-01`–`02`, `IWO-TEMPLATE-01`, `IWO-HONEST-01` | Completion, results, test availability, state separation, closure, template fields, and honest reporting remain mandatory. |

## Scope

### Required changes after approval

1. Add pure TypeScript domain models and discriminated unions for course progress, written prompt entries, branching-simulation entries, AI Review states, and separate Reflection records.
2. Add stable storage-key ownership, versioned envelopes, safe serializers/parsers, deterministic migrations, and authoritative-identifier validation ports.
3. Add an injectable browser-storage adapter that catches read/write/remove exceptions and returns typed results without logging or exposing learner data.
4. Add independent stores and subscriptions for course progress, module artifacts, and Reflection; do not add an aggregate API that returns all three to every consumer.
5. Add exact feedback association and stale invalidation using current-revision identities without retaining superseded content.
6. Add scoped reset/clear operations, cache invalidation, and same-tab/cross-tab event behavior.
7. Harden `useCourseProgress` through the new progress store while preserving its current consumer contract where feasible.
8. Add a learner-controlled, accessible course-progress reset on an existing progress surface, with accurate local-only scope and failure reporting. This is the only learner-facing control directly authorized by this architecture slice unless an amendment is approved.
9. Add architecture-level unit and integration tests and the minimum test tooling required to execute them.
10. Add the ADR and validation/evidence records required by the standard when implementation begins; retain results without sensitive learner text or internal prompts.

### Permitted supporting changes

- A minimal Vitest plus `jsdom` development-only harness, scripts, configuration, and lockfile changes, solely for Section 5 unit/integration coverage.
- Small compatibility changes to current progress consumers needed to surface typed progress status and reset results.
- Documentation updates limited to the ADR, work-order evidence index, and Section 5 feature validation records listed below.
- Imports from current authoritative module/scenario registries for validation. Those content/data files remain read-only in this work order.
- A narrowly scoped reusable status presentation for the progress-reset surface if required for accessible result announcements; it must not claim artifact or Reflection persistence before integration.

### Prohibited changes

- Reverse Build v2 rendering or Module 2 reference integration.
- Module 4 scenario content, transition rules, branching UI, branching API, or AI contract implementation.
- Persistence integration into current Design Practice or Reflection UI; those integrations remain later feature work unless a dated amendment is approved.
- Changes to `/api/scenario-feedback`, `/api/reflection-feedback`, OpenAI prompts, provider configuration, model selection, or provider error behavior.
- Changes to module instructional content, identifiers, scenario prose, pathway prose, routes, navigation structure, design tokens, visual redesign, or approved Phase 4 briefs.
- Public copy expansion beyond the narrowly required current course-progress reset disclosure.
- Unrelated refactors, dependency upgrades, file moves, formatting churn, or cleanup.

### Explicit non-goals

- Accounts, authentication, identity profiles, databases, Supabase, server-side learner-artifact storage, cloud persistence, backup, publishing, export, or cross-device synchronization.
- Attempt history, learner-visible version history, longitudinal tracking, timelines, portfolios, analytics, telemetry, behavioral profiles, or event tracking.
- Scoring, grading, mastery assessment, capability diagnosis, recommendations, pathway generation, adaptation, or personalization.
- Automatic expiration, retention timestamps, last-active tracking, or analytics metadata.
- Treating completion as evidence that learner work, AI Review, or Reflection exists.
- Making AI mandatory or allowing AI to select or alter deterministic Module 4 state.
- Exposing raw prompts, chain of thought, provider internals, secrets, storage keys, raw JSON, stack traces, or raw browser exceptions.
- Claiming privacy, anonymity, confidentiality, provider retention/deletion/training behavior, Zero Data Retention, WCAG conformance, security compliance, or legal compliance.
- Creating a clear-all-data action. The minimum scope is active-practice reset API, per-module artifact clear API, per-module Reflection clear API, and course-progress reset.

## Affected Files

This is the initial authorized implementation inventory. Reading other files does not authorize changing them. Exact new filenames may change only through the amendment procedure.

| Initial file inventory | Expected change type | Purpose | Planned or amendment-added |
|---|---|---|---|
| `docs/SECTION_5_SHARED_LEARNER_ARTIFACT_ARCHITECTURE_WORK_ORDER.md` | Create/update | Governing work order, planning baseline, approval, amendments, completion, results, and closure record. | Planned |
| `docs/decisions/ADR-010-shared-learner-artifact-persistence.md` | Create | Durable decision for domains, keys, per-module records, revision identities, events, migrations, and timestamps. | Planned |
| `web/lib/persistence/browserStorage.ts` | Create | Injectable safe get/set/remove adapter and typed operation results. | Planned |
| `web/lib/persistence/storageEvents.ts` | Create | Domain-scoped same-tab event helpers and cross-tab subscription filtering. | Planned |
| `web/lib/learnerArtifacts/types.ts` | Create | Versioned domain models and written/simulation discriminated unions. | Planned |
| `web/lib/learnerArtifacts/keys.ts` | Create | Stable key namespace and legacy progress-key ownership. | Planned |
| `web/lib/learnerArtifacts/validation.ts` | Create | Runtime shape and identifier validation with record-level isolation. | Planned |
| `web/lib/learnerArtifacts/migrations.ts` | Create | Explicit deterministic migrations and unsupported-version handling. | Planned |
| `web/lib/learnerArtifacts/revisionIdentity.ts` | Create | Injectable opaque revision-ID generation and feedback-subject matching. | Planned |
| `web/lib/learnerArtifacts/moduleArtifactStore.ts` | Create | Read/write/update/reset/clear/subscribe for per-module artifacts. | Planned |
| `web/lib/learnerArtifacts/reflectionStore.ts` | Create | Separate Reflection read/write/update/clear/subscribe API. | Planned |
| `web/lib/learnerArtifacts/index.ts` | Create | Deliberate public exports; no combined reader and no Reflection export through the Reverse Build-facing module entry point. | Planned |
| `web/lib/courseProgress/courseProgressStore.ts` | Create | Versioned progress parsing, migration, authoritative slug filtering, reset, events, and failures. | Planned |
| `web/lib/useCourseProgress.ts` | Update | Adapt existing hook to hardened store and expose status/reset without breaking open access. | Planned |
| `web/lib/useModuleLearnerArtifact.ts` | Create | `useSyncExternalStore` consumer for one named module artifact. | Planned |
| `web/lib/useReflectionPersistence.ts` | Create | Separate module-scoped Reflection hook; never imported by Reverse Build code under this work order. | Planned |
| `web/components/course/CourseProgressResetControl.tsx` | Create | Accessible, confirmed course-completion-only reset and result status. | Planned |
| `web/app/course/dashboard/page.tsx` | Update | Render current-browser progress scope and the course-progress reset control without claiming artifact persistence. | Planned |
| `web/lib/learnerArtifacts/*.test.ts` | Create bounded group | Schema, association, migration, isolation, reset, failure, and event tests. | Planned |
| `web/lib/courseProgress/*.test.ts` | Create bounded group | Legacy/current parsing, authoritative slugs, reset, and subscriptions. | Planned |
| `web/vitest.config.ts` | Create | Minimal unit/integration test configuration. | Planned |
| `web/test/setup.ts` | Create | Bounded browser/storage test setup; no production learner data. | Planned |
| `web/package.json` | Update | Add exact test scripts and minimum development-only test packages. | Planned |
| `web/package-lock.json` | Update | Lock approved test dependencies. | Planned |
| `docs/validation/work-orders/IWO-5-001.md` | Create | Consolidated evidence index required by Section 34 of the standard. | Planned |
| `docs/validation/learner-artifact-and-persistence-validation-record.md` | Create | Criterion-level Section 5 technical and manual evidence. | Planned |
| `docs/validation/privacy-and-data-flow-validation-record.md` | Create/update only Section 5 rows | Technical storage/minimization/reset evidence; no provider or legal conclusion. | Planned |
| `docs/validation/accessibility-validation-record.md` | Create/update only applicable rows | Progress reset and failure/status accessibility evidence. | Planned |
| `docs/validation/public-claim-audit.md` | Create/update only applicable rows | Current-versus-target audit after implementation. | Planned |

### Read-only/protected implementation context

The following are expected to be read but not changed: `web/data/modules.ts`, `web/data/scenarioDecisions.ts`, `web/content/modules/**`, `web/components/course/ScenarioDecisionAI.tsx`, `web/components/course/ReflectionFeedbackAI.tsx`, `web/components/course/ReverseBuildModalCards.tsx`, `web/app/api/**`, `web/lib/ai/**`, all approved Phase 4 briefs, and all unrelated application files. A required change to any protected path triggers an amendment or reopening of the controlling later-phase work.

## Architecture

### Content/logic separation

- Structured module, prompt, scenario, decision, consequence, pathway, and outcome authority remains in repository content/data, never in storage components or generic validators.
- Domain types, parsers, migrations, association rules, and stores live under `web/lib/`; presentation consumes typed results but does not parse raw storage.
- Browser I/O is isolated behind `browserStorage.ts`; services do not call `localStorage` directly.
- Validation tests exercise product-independent persistence rules. Feature-specific rendering and accessibility remain in their feature phases.
- API/provider behavior remains separate from local persistence. A local save is not an AI submission, and a local clear is not external deletion.

### Reuse decisions

- Preserve the existing `useSyncExternalStore` approach and same-tab/cross-tab subscription concept from `useCourseProgress`.
- Reuse authoritative `modules` and current interaction registries as read-only validation inputs rather than duplicating slugs or prose.
- Reuse existing `Result`-style success/failure conventions conceptually, but define a persistence-specific result type that cannot leak provider/server details.
- Do not reuse the current combined component state as a persistence model; it lacks versions, exact association, isolation, and failure semantics.

### Hardcoding decisions

- Allowed constants: schema versions, stable namespace strings, domain event names, and legacy key `course-progress`, all owned by the ADR and key module.
- Prohibited constants in generic persistence code: module lists, prompt prose, Module 4 transitions/outcomes, public disclosure copy, model/provider details, and acceptance rules.
- Authoritative identifiers must be supplied by a typed catalog/validator dependency. Unknown stored identifiers remain invalid.

### Selected approach

Use three independent versioned storage families with a stable namespace and payload-level schema versions:

| Domain | Proposed stable key | Record granularity |
|---|---|---|
| Course progress | `future-of-id:course-progress` | One completion-only envelope |
| Module learner artifact | `future-of-id:module-artifact:<moduleSlug>` | One record per authoritative module |
| Reflection | `future-of-id:reflection:<moduleSlug>` | One separate record per authoritative module |

The current `course-progress` key is a legacy source only. A successful deterministic migration writes the new envelope and removes the legacy key only after the new write succeeds. A failed migration leaves the original untouched and returns an honest unavailable/invalid result. Reset removes both current and legacy progress representations to prevent stale restoration.

Use pure store factories with injected storage, identifier catalog, revision-ID factory, and event target. React hooks wrap those stores with `useSyncExternalStore`. Stores return typed results such as `available`, `absent`, `invalid`, `unsupported`, `unavailable`, and operation `success`/`failure`; raw exceptions and keys remain internal.

For exact association:

- A written response has one opaque `responseRevisionId`; available feedback records `reviewedResponseRevisionId` and renders as current only on equality.
- A Reflection response uses the same pattern in the separate Reflection domain.
- A simulation critique identifies the validated deterministic state plus the original rationale revision. Saving an optional revised rationale does not change the critique subject or deterministic state. Changing a decision or original rationale invalidates prior critique.
- New current content replaces old content atomically. Superseded learner text and feedback are discarded, not archived.
- Revision IDs are random opaque identifiers from an injected factory; they are not timestamps, analytics identifiers, account identifiers, or cross-session identity.

No timestamp is proposed for version 1. Schema versions, opaque current-revision IDs, deterministic store operations, and browser event ordering satisfy the approved behavior without retaining time metadata. A timestamp requires a later documented need and amendment.

### Alternatives and trade-offs

| Alternative | Decision | Trade-off |
|---|---|---|
| One combined learner record containing progress, artifacts, and Reflection | Rejected | Simpler discovery but violates independent ownership, increases leakage/reset risk, and makes Reflection too easy to expose. |
| One module-artifact map in a single key | Rejected | Fewer keys but every module update rewrites all modules and one corrupt envelope can affect all records. |
| Separate per-module artifact and Reflection keys | Selected | More keys and subscription filtering, but best isolation, narrow clears, and atomic module updates. |
| React Context/global state | Rejected | Adds broad coupling and does not solve external browser events; `useSyncExternalStore` matches the existing pattern. |
| Runtime schema dependency such as Zod | Rejected for v1 | Less handwritten validation but adds runtime dependency and bundle/maintenance cost. Explicit type guards are sufficient for the bounded schemas. |
| Content hash as feedback identity | Rejected | Deterministic but normalization/collision/canonicalization rules can create subtle mismatches and expose derived content identity. |
| Opaque current-revision identity | Selected | Requires ID generation but provides exact equality without retaining history or time. |
| Mandatory timestamps | Rejected | Not needed for target behavior and would add unnecessary retention metadata. |
| Memory-only fallback after storage failure | Selected with limits | Preserves current-session work but cannot promise refresh/navigation survival; UI must report that honestly. |

### ADR trigger

This is a durable cross-feature persistence architecture, public storage namespace, migration boundary, and shared event pattern. `IWO-ARCH-02` therefore requires an ADR.

- **ADR path/status:** `docs/decisions/ADR-010-shared-learner-artifact-persistence.md` — Accepted; recorded as reviewed against this work order before store implementation.
- **ADR must record:** selected keys; legacy migration; record granularity; public exports; revision identity; no-timestamp decision; injected storage/events; exact association; Reflection boundary; reset scopes; and reopen triggers.

## Data and Persistence

- **Data read:** Legacy/current progress; current module artifact for an explicitly named authoritative module; current Reflection for an explicitly named authoritative module; repository-owned identifier catalogs used only for validation/reconstruction.
- **Data written:** Completion slugs only; current prompt response/simulation entry and bounded AI state; current Reflection response and bounded Reflection AI state; schema version and opaque current-revision identities.
- **Data transmitted:** None by the persistence services. Existing AI transmission remains unchanged and outside this code slice.
- **Data cleared:** Exact active prompt/simulation and its review; all practice/simulation entries for one module; Reflection for one module; or course completion markers. Each is a separate operation.
- **Data reconstructed:** Display order and repository-authored context from current repository sources; never from stored client prose.
- **Persistence domain:** Current browser only. No account, server learner store, backup, sync, or recovery promise.
- **Reset scope:** Active practice preserves sibling prompts, Reflection, and progress; module clear preserves other modules, Reflection, and progress; Reflection clear preserves artifacts/progress; progress reset preserves artifacts/Reflection.
- **Version/migration impact:** New version `1` envelopes; deterministic legacy progress array migration; no invented content; unsupported future versions remain unread; failed migration preserves raw source.
- **Failure handling:** Catch read/write/remove/event failures; preserve valid in-memory state; retain last valid stored record on failed updates; report failure; no unbounded retry; isolate per record/domain; keep modules accessible.
- **Atomicity:** Each record is fully serialized and validated before one `setItem`; no multi-domain operation is presented as atomic. A broader action is outside scope.
- **Pending recovery:** A persisted `pending` review cannot be restored as an active request after reload; reading normalizes it to an honest retryable state without inventing feedback.
- **Cleared-data behavior:** Current and legacy keys, in-memory caches, and subscriptions for the exact scope are invalidated together only after successful removal. Failure remains visible and data is not announced cleared.

## AI

- **Route/provider:** Existing `/api/scenario-feedback` and `/api/reflection-feedback` using OpenAI remain unchanged. The future Module 4 branching route is not created here.
- **Request contract:** Section 5 persists bounded review state/feedback only after a caller supplies a validated current review subject. It does not validate or send provider requests.
- **Server reconstruction:** Existing routes continue reconstructing repository context. Future Module 4 state must be reconstructed server-side under Section 7.
- **Output contract:** Only existing bounded parsed fields or future approved branching fields may be stored; raw provider bodies, prompts, hidden reasoning, and operational errors are prohibited.
- **Optionality:** Learner work and deterministic state remain valid without AI Review.
- **Failure behavior:** AI failure is distinct from local save failure and never erases valid learner text or deterministic state.
- **Deterministic state:** Module 4 choices, consequences, pathway, and final state remain repository-authoritative and independent of AI, satisfying `IWO-AI-03`.
- **Disclosure dependency:** Later integrations must show the approved notice before or at submission. Local storage disclosure cannot imply local-only AI processing.
- **Provider-verification dependency:** No provider-retention wording may be added until authorized deployment and official-source verification is complete.

## Privacy and Disclosure

- **Local-storage impact:** New current-only browser records are added after implementation; they may be visible to others using the same browser profile and may disappear through browser controls or private browsing.
- **AI-transmission impact:** No new transmission in this slice. Persistence must remain conceptually and technically distinct from existing optional AI submission.
- **Reflection impact:** Reflection has a separate key, schema, parser, store, event, hook, and clear operation. There is no all-domain read model, and Reverse Build-facing exports exclude Reflection.
- **Shared-computer impact:** Later artifact/Reflection UI must expose proportionate shared-computer and private-browsing guidance and scoped clearing. Section 5 may not claim those controls exist until integrated.
- **Reset/deletion language:** Use reset/clear local scope, never “delete all data” or external/provider deletion. Failed clears are failures.
- **Required notices:** Current progress reset must state current-browser completion-only scope and preserved domains. Design Practice/Reflection AI notices and artifact-persistence notices remain Section 6/7/8 integration dependencies.
- **Application-retention impact:** After implementation, data inventories must be updated from observable code without inferring hosting logs or provider settings.
- **Legal/organizational dependency:** This work order creates no legal policy or compliance conclusion.

## Accessibility

- **Keyboard:** The authorized progress reset and confirmation must support Tab/Shift+Tab, Enter/Space, cancel, and Escape if a dialog is used; no traps.
- **Focus:** Initial focus, containment, cancellation, confirmation, failure, and return must be predictable; programmatic state changes must not steal input focus.
- **Semantics:** Controls and status outputs must name exact domain/scope; statuses use text and programmatic semantics, not color alone.
- **Announcements:** Save/reset/clear success and failure, unavailable storage, stale, invalid, and recovery states need appropriately scoped live announcements when integrated.
- **Errors:** Associate errors with the affected control/domain and retain them long enough to understand; do not expose internals.
- **Non-color meaning:** Missing, partial, stale, invalid, unsupported, failed, and cleared states require text/semantic distinctions.
- **Mobile:** Authorized controls require at least 44 × 44 CSS-pixel targets and usable layout at 320 × 568.
- **Zoom/reflow:** Validate 200% browser zoom and 200% text-only zoom where supported without lost content/function or essential horizontal page scrolling.
- **Reduced motion:** No persistence behavior may depend on motion; any status transition must respect reduced-motion settings.
- **Screen-reader coverage:** VoiceOver/Safari on macOS and iOS; NVDA with Chrome or Firefox on Windows. Missing required access is Blocked, not passed.
- **Scope note:** Headless service tests cannot pass learner-facing accessibility criteria. Full module artifact, Reflection, Reverse Build, and Module 4 accessibility remains with later integrations.

## Public Claims

- **Claims supported after implementation and validation:** Course progress uses a safe versioned local store and can be reset within a completion-only scope. Shared artifact/Reflection persistence claims require their later visible integrations and cannot be activated from architecture code alone.
- **Claims requiring qualification:** Browser-local persistence; no account; no backup/sync; storage may fail; browser clearing may remove work; AI-submitted text leaves the browser.
- **Claims prohibited until validation:** Saved module work, saved Reflection, Reverse Build reconnection, Module 4 retained pathway, successful clearing, or recovery unless that exact observable behavior has passed validation.
- **Always prohibited without separate evidence/authority:** browser-only AI processing, anonymity, complete privacy, confidentiality, permanent/immediate/provider deletion, particular provider retention/training/ZDR behavior, guaranteed recovery, WCAG/privacy/security/legal compliance, scoring, diagnosis, or personalization.
- **Surfaces requiring audit:** `/`, `/about`, `/course`, Orientation, dashboard, all module routes, Reverse Build, Reflection, AI controls, README, metadata, architecture/experience docs, and any privacy surface.
- **Copy authorization:** This work order authorizes only current-browser course-progress reset wording needed by the listed control. Other public copy requires its later work order or an amendment.

## Validation Plan

### Automated strategy and commands

| Command/process | Working directory | Environment | Route | Browser/OS | Viewport/zoom | Assistive technology | Expected result | Evidence location | Owner |
|---|---|---|---|---|---|---|---|---|---|
| `npm run lint` | `web/` | Local | N/A | N/A | N/A | N/A | Exit 0. | IWO evidence index/command log. | Implementer |
| `npx tsc --noEmit` | `web/` | Local | N/A | N/A | N/A | N/A | Exit 0. | Same. | Implementer |
| `npm run build` | `web/` | Production build | All compiled routes | N/A | N/A | N/A | Exit 0; route manifest includes existing routes and no unapproved route. | Same. | Implementer |
| `npm run test:persistence` | `web/` | Local Vitest + jsdom | N/A | Simulated browser APIs | N/A | N/A | All parser/store/migration/association/reset/event/failure tests pass. Command does not exist before implementation. | Test report plus feature record. | Implementer |
| `npm run test:persistence -- --coverage` | `web/` | Local | N/A | Simulated browser APIs | N/A | N/A | Coverage report retained as supplemental evidence; no numerical target alone closes criteria. | IWO evidence directory. | Implementer |
| `git diff --check` | Repository root | Local working tree | N/A | N/A | N/A | N/A | Exit 0. | IWO evidence index. | Implementer |
| Protected-file and prohibited-pattern audit using `git diff --name-only` and `rg` | Repository root | Local | N/A | N/A | N/A | N/A | Only authorized files changed; no accounts/cloud/history/analytics/profile/timestamp/prohibited provider claims introduced. | Final file inventory and audit output. | Implementer/reviewer |

Required automated cases include:

- legacy progress array, current version, malformed JSON, wrong type, missing value, unknown slug, unsupported future version, deterministic migration, failed migration, read/write/remove exception, same-tab event, cross-tab event, event failure, and reset
- written first save, replacement, sibling prompt preservation, cross-module isolation, exact feedback match, response revision staleness, pending recovery, malformed sibling entry, unsupported record, and failed atomic write
- separate Reflection first save, replacement, exact feedback match, stale invalidation, clear, module-artifact preservation, progress preservation, and absence from module-artifact exports
- generic simulation partial/completed serialization, invalid identity rejection through injected authority, original/revised rationale separation, deterministic-state preservation when AI fails, critique association to original rationale, and scoped restart
- cache invalidation and cleared-data non-restoration for current/legacy keys

### Exact manual scenarios

All manual results record route, commit/build, environment, actual browser/OS version, viewport/zoom, assistive technology, start state, steps, expected/observed result, status, evidence, defect, and retest.

| Scenario | Route/environment | Required procedure | Expected result | Evidence |
|---|---|---|---|---|
| Progress legacy migration | `/course/dashboard`, production-equivalent preview | Seed valid legacy `course-progress`; load; mark another module complete; reload and open second tab. | Valid authoritative slugs migrate once, unknown slugs do not count, current key is coherent, updates synchronize, access remains open. | Storage screenshots/redacted value shape, UI screenshots, criterion record. |
| Malformed progress | Dashboard and direct module URL | Seed malformed JSON, wrong type, unsupported version, then simulate read failure. | Dashboard/module remain usable; safe empty/unavailable state; no raw error; no access gate. | Screenshot and storage/failure notes. |
| Progress write/reset failure | Dashboard | Inject quota/security/remove failure; mark complete/reset. | Failure is not announced successful; last valid data/in-session UI remains coherent; retry is bounded. | Screenshot/video where useful and record. |
| Progress reset success | Dashboard | With completion state present, keyboard-open confirmation, cancel, reopen, confirm, reload, second tab. | Copy names completion-only scope and preserved artifacts/Reflection; successful reset does not reappear; focus and announcement are correct. | Keyboard sequence, screenshots, screen-reader notes. |
| Module-record isolation | Technical harness or later designated module integration | Seed two modules and multiple prompts; corrupt one prompt and one module record. | Valid sibling prompt/module remains available; invalid data is not rendered/trusted. | Test output plus manual state inspection. |
| Exact written feedback association | Later Section 6 integration; mark Not yet executable here if absent | Save response, obtain/store feedback, edit response, navigate/reload. | Old feedback is stale/hidden before revised text is presented as reviewed; no history is available. | Later feature record. |
| Reflection boundary | Technical inspection plus later runtime instrumentation | Save Reflection; read module artifact and Reverse Build-facing API; clear module work; clear Reflection. | Reflection is absent from module read model; module clear preserves Reflection; Reflection clear preserves progress/artifacts. | Import graph/test output; later runtime evidence. |
| Storage unavailable | Direct module and dashboard, preview | Block local storage before load and during write. | Content and in-session interaction remain available; current work may not persist notice is bounded; no retry loop. | Browser notes/screenshots. |
| Shared/private browser disclosure dependency | Existing progress surface and later artifact surfaces | Review in normal shared profile and private mode. | Current claims match implemented scope; no account/sync/recovery promise; later artifact claims remain absent until integration. | Privacy record and screenshots. |
| Open-access regression | Every current public course/module route | Clear/block all storage and deep-link directly. | All modules, Orientation, authored content, Reverse Build triggers, and navigation remain accessible without completion or AI. | Route checklist. |

### Required browser, viewport, and assistive-technology matrix

- Desktop current stable at validation time: Chrome on macOS or Windows, Safari on macOS, Firefox on macOS or Windows, and Edge on Windows.
- Mobile current stable: Safari on iOS and Chrome on Android.
- Baseline viewports: 320 × 568, 375 × 667, 768 × 1024, 1280 × 800, and 1440 × 900 CSS pixels where the surface materially changes.
- Zoom: 200% browser zoom; 200% text-only zoom in Firefox/Safari where supported; unsupported combinations are recorded, not omitted.
- Keyboard-only: Tab, Shift+Tab, Enter, Space, Escape, confirmation/cancellation, error recovery, and absence of traps.
- Screen readers: VoiceOver + Safari on macOS; VoiceOver + Safari on iOS; NVDA + Chrome or Firefox on Windows.
- Reduced motion: operating-system/browser reduce-motion enabled for every changed interactive state.
- Automated accessibility scan: axe-core or documented equivalent on changed routes/states, supplemental only.

## Blocking Conditions

### Current blockers

1. **ADR gate:** ADR-010 must be written and reviewed against this approved work order before store code begins because the decision changes durable cross-feature persistence architecture.

The work-order approval gate, test-tooling approval, branch decision, and Section/phase closure interpretation were resolved by Bradley's July 15, 2026 approval. Later environment, assistive-technology, provider, infrastructure, or feature-integration dependencies remain visible in their applicable validation and criterion fields; they do not authorize scope expansion.

### Required blocked report fields

- **Reason:** Name the exact condition from Section 26 of the standard.
- **Affected source or criterion:** Cite the controlling path and identifiers.
- **Current risk:** State learner/data/access/architecture/validation impact.
- **Work completed so far:** List implementation and evidence state without implying completion.
- **Files touched:** Exact paths, including pre-existing changes.
- **Required decision/dependency:** Name approval, access, environment, or contract decision.
- **Owner:** Bradley, implementer, provider/deployment reviewer, or other named owner.
- **Next step:** Resolution required before resumption.
- **Rollback needed:** Yes/no with scope; do not use destructive Git operations without authorization.

All other Section 26 conditions also apply, including source conflict, missing product decision, criterion violation, privacy/security risk, unavailable required environment, scope expansion, critical defect, required validation gap, and overlapping unrelated changes.

## Scope Amendments

| Amendment ID | Discovery | Reason | Files/systems | Criteria impact | Validation impact | Approval | Date |
|---|---|---|---|---|---|---|---|
| `IWO-5-001-A1` | Closure-readiness audit found that current completion callers discard the typed `markComplete` result, so a failed durable write can appear as ordinary successful completion. | Authorize the smallest current-consumer changes required to surface a bounded session-only/save-failed result without gating course access or changing the completion interaction's product meaning. | `web/app/course/module/[slug]/page.tsx`; `web/app/course/orientation/page.tsx` | `LAP-PROG-*`, `LAP-FAIL-*`, `LAP-HONEST-*`, `PDF-FAIL-*`, applicable `LAP-A11Y-*`/`PDF-A11Y-*`, `IWO-CHANGE-*` | Add store/result regression coverage and manual completion-surface checks for durable success, session-only failure, announcements, retry, keyboard, and screen reader behavior. | Bradley Pierce, supplied by the targeted remediation authorization | July 15, 2026 |

An amendment cannot change product meaning or criteria. Such a discovery reopens the controlling brief/checklist decision.

## Test Strategy

The approved minimal Vitest/jsdom harness now exposes `npm run test:persistence` for the pure TypeScript parsers, migrations, stores, storage adapters, and subscriptions that can be validated deterministically without a running provider.

Test layers:

1. **Pure unit tests:** validators, discriminated unions, response/review identity, version dispatch, migrations, identifier-catalog behavior, and state normalization.
2. **Store integration tests:** injected storage/events, per-module records, independent domains, atomic update behavior, cache invalidation, same-tab/cross-tab notifications, reset scopes, and failure injection.
3. **Static boundary tests/inspection:** public exports, no combined domain reader, no Reflection in module artifact shapes, no content prose or forbidden fields, no timestamp fields.
4. **Manual browser checks:** actual storage blocking/quota behavior, cross-tab updates, progress reset, open access, disclosure accuracy, keyboard/focus/announcements, zoom/reflow, mobile, reduced motion, and screen readers.
5. **Later feature evidence:** Section 6/7/8 must execute browser-level written-response, Reverse Build, Reflection, and Module 4 criteria. Section 5 fixtures cannot substitute for those integrations.

Tests use synthetic non-sensitive text and repository identifiers. They must not retain credentials, production learner responses, hidden prompts, chain of thought, or provider payloads.

## Evidence Requirements and Locations

- Consolidated work-order index: `docs/validation/work-orders/IWO-5-001.md`.
- Feature record: `docs/validation/learner-artifact-and-persistence-validation-record.md`.
- Privacy technical rows: `docs/validation/privacy-and-data-flow-validation-record.md`.
- Accessibility rows: `docs/validation/accessibility-validation-record.md`.
- Claim review: `docs/validation/public-claim-audit.md`.
- Large bounded outputs, if needed: `docs/validation/work-orders/IWO-5-001/` with an index link; do not commit secrets or unnecessary learner data.

Every criterion-level record must include criterion, source, implementation commit, environment, browser/OS, viewport/zoom, assistive technology, date, tester, method, prerequisites, expected result, observed result, status, evidence, defect, retest, and uncertainty. Evidence is append-oriented; failures are retained and linked to remediation/retest.

## Implementation Completion Report

- **Objective achieved:** Authorized Section 5 architecture and current progress integration are implemented, validated within the approved bounded scope, and formally approved by Bradley Pierce with documented external blockers.
- **Behavior implemented:** Three versioned persistence domains; safe storage/events; module-artifact and Reflection stores/hooks; exact written, Reflection, and branching review association; stale/pending/malformed/failure handling; non-destructive unreadable-record updates; baseline-aware session retry; scoped clears/resets; legacy progress migration and cleanup reporting; dashboard progress disclosure/reset; bounded completion-save failure notices on the amended module and Orientation surfaces; approved Vitest/jsdom coverage.
- **Behavior unchanged:** Course access remains open; current module content, AI routes/prompts/providers/models, Reverse Build rendering, Module 4 content/logic/UI/API, and Design Practice/Reflection UI behavior were not changed.
- **Architecture decisions:** `docs/decisions/ADR-010-shared-learner-artifact-persistence.md` is Accepted and was reviewed against this work order before store implementation.
- **Deviations/amendments:** No unapproved scope deviation. Amendment `IWO-5-001-A1` authorizes only the two current completion-consumer files required for failure honesty. `npx tsc --noEmit --incremental false` was used because the sandbox prevents the incremental cache write; the production build independently ran TypeScript. Coverage output is sent to the operating-system temporary directory so generated reports do not alter the authorized repository inventory.
- **Criteria implemented:** Section 5 technical/current-surface portions under `LAP-MODEL-*`, `LAP-RESET-*`, `LAP-PROG-*`, `LAP-VER-*`, `LAP-FAIL-*`, `LAP-PRIV-*`, applicable `LAP-HONEST-*`, and corresponding data/minimization/reset/current-failure/honesty criteria are approved within the bounded Passed scope recorded above. Service contracts without visible integration remain In validation or Not yet executable. No criterion is promoted solely from commands or this closure decision.
- **Criteria not executable:** Feature-specific `RB2-*`, `M4SIM-*`, learner-facing artifact/Reflection/AI disclosure, and complete accessibility families remain Not implemented or Not yet executable under Sections 6–8 and later validation.
- **Known defects/dependencies:** The closure-readiness findings are retained and remediated. Bradley's attestation supersedes `IWO5-VAL-001` for available local scenarios. Windows/NVDA, physical mobile, deployed preview, and the remaining external matrix stay Blocked under `IWO5-VAL-002`. The pre-existing one-high/one-moderate Next.js/PostCSS advisories require a separate security/launch decision under `IWO5-DEP-001`; neither dependency blocks bounded Section 5 architecture closure.
- **Public-claim impact:** Only current progress disclosure/reset and bounded completion-result copy changed. The audit found no unsupported new claim; broader Phase 5 remains open.
- **Follow-up owner:** Codex completed implementation and evidence preparation; Bradley recorded closure approval; validation environment owners retain external checks, and Bradley retains the separate dependency-security and launch-risk decisions.
- **Unrelated changes:** None made. No dependency upgrade or audit fix was applied beyond the approved development-only Vitest/jsdom/coverage harness.
- **Evidence and closure sequence:** The evidence commit is recorded above and remains separate from the implementation commit. This closure-only documentation update changes no application, test, API, content, dependency, lockfile, or configuration file.

## Final File Inventory

| Path | Change type | Purpose | Criterion/contract | Planned or amended | Generated-file status |
|---|---|---|---|---|---|
| `docs/SECTION_5_SHARED_LEARNER_ARTIFACT_ARCHITECTURE_WORK_ORDER.md` | Create/update | Governance, approval, results, inventory, completion | `IWO-*`, `VE-*` | Planned | Authored source |
| `docs/decisions/ADR-010-shared-learner-artifact-persistence.md` | Create | Durable persistence decision and gate review | `IWO-ARCH-*`, `LAP-*`, `PDF-*` | Planned | Authored source |
| `web/lib/persistence/browserStorage.ts` | Create | Safe injected storage adapter | `LAP-FAIL-*`, `PDF-FAIL-*` | Planned | Authored source |
| `web/lib/persistence/storageEvents.ts` | Create | Safe same/cross-tab event adapter | `LAP-PROG-*`, `LAP-FAIL-*` | Planned | Authored source |
| `web/lib/learnerArtifacts/keys.ts` | Create | Stable domain keys/events | `LAP-MODEL-*`, `LAP-VER-*` | Planned | Authored source |
| `web/lib/learnerArtifacts/revisionIdentity.ts` | Create | Opaque current-revision identity factory | `LAP-AI-*`, `LAP-PRIV-*` | Planned | Authored source |
| `web/lib/learnerArtifacts/types.ts` | Create | Versioned discriminated schemas/states | `LAP-MODEL-*`, `LAP-M4-*`, `LAP-REF-*` | Planned | Authored source |
| `web/lib/learnerArtifacts/validation.ts` | Create | Runtime validation and entry isolation | `LAP-VER-*`, `LAP-FAIL-*`, `M4SIM-STATE-*` | Planned | Authored source |
| `web/lib/learnerArtifacts/migrations.ts` | Create | Deterministic current/legacy migration | `LAP-VER-*`, `LAP-PROG-*` | Planned | Authored source |
| `web/lib/learnerArtifacts/moduleArtifactStore.ts` | Create | Module artifact lifecycle and exact association | `LAP-WRITE-*`, `LAP-AI-*`, `LAP-M4-*`, `LAP-RESET-*` | Planned | Authored source |
| `web/lib/learnerArtifacts/reflectionStore.ts` | Create | Separate Reflection lifecycle | `LAP-REF-*`, `PDF-REF-*` | Planned | Authored source |
| `web/lib/learnerArtifacts/index.ts` | Create | Reflection-free public module contract | `LAP-RB-*`, `RB2-PRIV-*` | Planned | Authored source |
| `web/lib/courseProgress/courseProgressStore.ts` | Create | Versioned progress migration/store/reset | `LAP-PROG-*`, `LAP-RESET-*` | Planned | Authored source |
| `web/lib/useModuleLearnerArtifact.ts` | Create | Module artifact React subscription hook | `LAP-MODEL-*` | Planned | Authored source |
| `web/lib/useReflectionPersistence.ts` | Create | Separate Reflection React hook | `LAP-REF-*` | Planned | Authored source |
| `web/lib/useCourseProgress.ts` | Update | Preserve consumer API over hardened progress store | `LAP-PROG-*` | Planned | Authored source |
| `web/components/course/CourseProgressResetControl.tsx` | Create | Accessible completion-only reset/disclosure | `LAP-RESET-*`, `LAP-A11Y-*`, `PDF-RESET-*` | Planned | Authored source |
| `web/app/course/dashboard/page.tsx` | Update | Place progress reset on current progress surface | Same as above | Planned | Authored source |
| `web/app/course/module/[slug]/page.tsx` | Update | Surface bounded module-completion persistence results and keep session-only retry available | `LAP-PROG-*`, `LAP-FAIL-*`, `LAP-HONEST-*`, `PDF-FAIL-*` | Amendment `IWO-5-001-A1` | Authored source |
| `web/app/course/orientation/page.tsx` | Update | Surface bounded Orientation-completion persistence results and keep session-only retry available | `LAP-PROG-*`, `LAP-FAIL-*`, `LAP-HONEST-*`, `PDF-FAIL-*` | Amendment `IWO-5-001-A1` | Authored source |
| `web/lib/learnerArtifacts/moduleArtifactStore.test.ts` | Create | Module schema/association/isolation/failure/event tests | `LAP-*`, applicable `RB2-*`/`M4SIM-*` | Planned bounded group | Authored test |
| `web/lib/learnerArtifacts/reflectionStore.test.ts` | Create | Reflection replacement/isolation/failure tests | `LAP-REF-*`, `PDF-REF-*` | Planned bounded group | Authored test |
| `web/lib/courseProgress/courseProgressStore.test.ts` | Create | Progress migration/reset/adapter/event tests | `LAP-PROG-*`, `LAP-FAIL-*` | Planned bounded group | Authored test |
| `web/vitest.config.ts` | Create | Scoped jsdom/coverage configuration | `IWO-TEST-*`, `VE-PERSIST-01` | Planned | Authored config; reports go to temp |
| `web/test/setup.ts` | Create | Isolated localStorage cleanup | Same as above | Planned | Authored test setup |
| `web/package.json` | Update | Test script and approved dev dependencies | Same as above | Planned | Authored manifest |
| `web/package-lock.json` | Update | Lock approved test dependencies | Same as above | Planned | Package-manager generated |
| `docs/validation/work-orders/IWO-5-001.md` | Create | Consolidated evidence index | `IWO-EVID-*`, `VE-EVID-*` | Planned | Authored evidence |
| `docs/validation/learner-artifact-and-persistence-validation-record.md` | Create | Section 5 criterion evidence | `LAP-*`, `VE-PERSIST-01` | Planned | Authored evidence |
| `docs/validation/privacy-and-data-flow-validation-record.md` | Create | Technical privacy/data-flow evidence | applicable `PDF-*` | Planned | Authored evidence |
| `docs/validation/accessibility-validation-record.md` | Create | Static and blocked manual accessibility rows | `LAP-A11Y-*`, `PDF-A11Y-*`, `VE-A11Y-*` | Planned | Authored evidence |
| `docs/validation/public-claim-audit.md` | Create | Current/target claim review | `VE-CLAIM-01`, honesty criteria | Planned | Authored evidence |

No pre-existing unrelated working-tree change was carried into the implementation branch. Amendment `IWO-5-001-A1` added exactly the two current progress-consumer files listed above; no other amendment-added file was required.

## Results Table

| Check or command | Working directory | Availability/applicability | Status | Expected result | Observed result | Result summary | Evidence location | Related defect | Retest status |
|---|---|---|---|---|---|---|---|---|---|
| `npm run lint` | `web/` | Available | Passed | Exit 0 | Exit 0 | No warnings/errors | IWO evidence index | None | Passed |
| `npx tsc --noEmit --incremental false` | `web/` | Available | Passed | Exit 0 | Exit 0 | Full semantic check without sandbox-blocked cache write | IWO evidence index | None | Passed |
| `npm run build` | `web/` | Available | Passed | Exit 0 | Next production build compiled all routes; closure-audit rerun passed after an initial restricted-sandbox `EPERM` writing `.next/trace-build` | Environmental write denial retained; authorized writable rerun passed; build-only result | IWO evidence index | None | Passed |
| `npm run test:persistence` | `web/` | Available | Passed | Scoped suite passes | 3 files, 34 tests passed | Risk-matrix parser/store/adapter coverage after remediation | Learner-artifact record | `IWO5-REM-001`–`004` | Passed after remediation |
| `npm run test:persistence -- --coverage` | `web/` | Available | Passed | Tests pass and report | 34/34; 85.40% lines, 81.44% statements, supplemental | No numeric threshold controls closure | IWO evidence index | `IWO5-REM-001`–`004` | Passed after remediation |
| End-to-end tests | `web/` | No E2E harness authorized | Not applicable through approved governance | Later feature checks occur in owner phases | No E2E suite added | Manual/browser evidence remains separately required | Accessibility record | None | Not applicable through the approved Section 5 test-infrastructure boundary |
| Dashboard, Orientation, and module route markup | Local production build | Available | Passed | Routes respond and scoped completion/reset controls render | Dashboard reset heading/control, Orientation completion controls, and AI Literacy module completion controls returned in route markup | Non-interactive evidence only; failure state requires browser interaction | Claim/accessibility records | None | Passed after remediation |
| Codex in-app browser check | Local route | Tool runtime unavailable | Blocked | Exact scenarios execute | Tool failed before page access | Historical tool failure retained; no result inferred from that attempt | IWO evidence index | `IWO5-VAL-001` | Superseded for available local scenarios by Bradley's independent attestation |
| Bradley current-surface functional checks | Exact implementation commit; local routes | Available macOS browser | Passed | Persistence/reset/failure/recovery scenarios execute | Bradley attested all performed scenarios passed | Includes refresh, cross-tab sync, reset/cancel/Escape, blocked write, exact session message, recovery, and retry | IWO evidence index | `IWO5-REM-001`–`003` | Passed July 15, 2026 |
| Bradley keyboard/screen-reader/responsive/zoom checks | Current Section 5 routes; available macOS browser/VoiceOver only | Available | Passed | Current controls/status remain operable and understandable | Keyboard/focus/VoiceOver, 320px, 200% where supported, and reduced motion passed | Exact OS/browser/VoiceOver versions and screenshots/recordings not captured | Accessibility record | `IWO5-REM-002`, `003` | Passed for available macOS/VoiceOver |
| Remaining external browser/AT/device/deployment matrix | Windows/NVDA, physical mobile, deployed preview | Environments unavailable | Blocked | Assigned matrix executes | Not executed | No Passed status inherited from macOS | Accessibility/privacy records | `IWO5-VAL-002` | Pending external access |
| Section 5 technical/current-surface privacy checks | Repository and available local browser | Available | Passed | Minimal local data and bounded current claims match behavior | Technical audit and Bradley current-surface checks pass | Does not establish provider/deployment facts or broader privacy claims | Privacy record | None | Passed |
| Provider/deployment privacy verification | External environment | Unavailable | Blocked | Authorized external facts are verified separately | Provider/deployment not verified | No provider claim made | Privacy record | `IWO5-VAL-002` | Pending external authorization/access |
| Public-claim audit | Repository/local route | Available | Passed | No unsupported new claim | Changed progress copy is bounded; later claims absent | Broader launch audit remains open | Public-claim audit | None | Passed for changed files |
| `npm audit --omit=dev` | `web/` | Available | Failed | No production advisory | Next.js 16.1.6/nested PostCSS report high/moderate packages; both versions exist at baseline `72fd487` | Pre-existing, not worsened by Section 5; no automatic/forced fix or production-version change | IWO evidence index | `IWO5-DEP-001` | Pending separate dependency/security work |
| `git diff --check` | Repository root | Available | Passed | Exit 0 | Exit 0 | Tracked-diff whitespace check; untracked authorized files receive a separate explicit scan | IWO evidence index | None | Passed |
| Explicit untracked-file whitespace scan | Repository root | Available | Passed | No trailing whitespace | No matches | Covers the files omitted by unstaged `git diff --check` | IWO evidence index | None | Passed |

### Work-order drafting validation

These checks validate only the clean planning baseline and this documentation task. They do not execute product criteria.

| Check | Working directory | Availability | Status | Observed result | Limit |
|---|---|---|---|---|---|
| `npm run lint` | `web/` | Available | Passed | Exit 0 on July 15, 2026. | Static lint only; not a test. |
| `npx tsc --noEmit` | `web/` | Available | Passed | Exit 0 on July 15, 2026. | Type checking only; not a test. |
| `npm run build` | `web/` | Available | Passed | Exit 0 on July 15, 2026 after sandbox permission allowed `.next` output; all current routes compiled. | Build only; not feature validation. |
| `git diff --check` | Repository root | Available | Passed | Exit 0 on July 15, 2026 after the work-order file was added. | Whitespace only. |

## Remaining Issues

### Closure-readiness audit and remediation history

The July 15, 2026 closure-readiness audit remains part of the append-oriented record. Its findings were not erased when corrected.

| ID | Audit finding | Remediation | Automated retest | Remaining validation |
|---|---|---|---|---|
| `IWO5-REM-001` | Ordinary saves could treat unavailable, invalid, or unsupported records as empty and overwrite unseen data. | Added typed unreadable-record failures, raw preservation, baseline-aware session records, coherent retry checks, and explicit clear/reset recovery. | Direct malformed/future/failure/retry tests pass; Bradley passed available blocked-write recovery/retry scenarios. | External browser fault matrix remains Blocked. |
| `IWO5-REM-002` | Module and Orientation completion callers discarded typed failure results and could display an unqualified complete state. | Amendment `IWO-5-001-A1`; both callers now show bounded session-only or save-failed status and keep session-only completion retryable without gating access. | Tests/build/routes pass; Bradley passed available failure message, open access, VoiceOver/status, recovery, and retry scenarios. | NVDA/mobile/deployed-preview checks remain Blocked. |
| `IWO5-REM-003` | Successful reset attempted to focus the now-disabled reset button. | Result status is programmatically focusable and receives focus after success/failure; cancel/Escape returns focus to the enabled initiating reset control. | Static checks pass; Bradley passed available keyboard/focus/VoiceOver cancellation, success, and failure scenarios. | NVDA/mobile/deployed-preview checks remain Blocked. |
| `IWO5-REM-004` | The 17-test suite omitted material risk cases and evidence overstated active reset, Reflection clear, and migration-failure coverage. | Expanded to 34 tests and corrected criterion/evidence language and stale planning statements. | 34/34 tests pass; coverage is supplemental, not closure by percentage. | External manual and later-feature criteria retain their Blocked/not-implemented statuses. |

| Defect/dependency | Severity | Owner | Workaround | Retest | Launch impact |
|---|---|---|---|---|---|
| `IWO5-VAL-001`: Codex in-app browser runtime cannot initialize (`Cannot redefine property: process`) | Historical tooling dependency | Validation tooling owner | Bradley independently performed the available exact-commit local scenarios | Rerun only if the tool itself requires qualification | Superseded for available macOS scenarios; does not block bounded Section 5 closure. |
| `IWO5-VAL-002`: Windows/NVDA, physical mobile, deployed-preview, and remaining external environments unavailable | External validation dependency | Validation owner | None | Execute assigned matrix when access exists | Keeps affected accessibility/privacy/launch rows Blocked; does not block bounded Section 5 technical closure. |
| `IWO5-DEP-001`: production `npm audit` reports one high and one moderate existing Next.js/PostCSS advisory | High external dependency risk | Bradley/future dependency work order | Do not force-upgrade under this bounded architecture work | Approved dependency remediation and full regression | Separate security/launch risk disposition required; not introduced/worsened by Section 5 and does not block bounded architecture closure. |
| Feature-specific disclosure/control criteria remain assigned to Sections 6–8 | Later-phase dependency, not a Section 5 blocker | Later feature owners | Keep criteria visibly Not implemented/Not yet executable and keep broader Phase 5 completion open as required | Validate in later work orders | Does not block Section 5 technical completion; may block broader Phase 5 completion. |

## Final Status and Closure

- **Implementation status:** Complete and Approved
- **Validation status:** Automated/static checks and all Bradley-performed available macOS/VoiceOver scenarios passed; external platform/deployment checks remain Blocked
- **Acceptance status:** Acceptance Complete for the bounded Section 5 scope; later feature families, external criteria, and broader Phase 5 remain non-passed as recorded
- **Closure decision:** Section 5 Complete and Approved with documented external blockers
- **Closure reviewer:** Bradley Pierce
- **Approval date:** July 15, 2026
- **Evidence-record location:** `docs/validation/work-orders/IWO-5-001.md`

Bradley's dated decision completes the bounded Section 5 work-order closure under Section 32. Blocked, In validation, Not implemented, and Not yet executable work remains visible and cannot support broader Phase 5 or launch closure.
