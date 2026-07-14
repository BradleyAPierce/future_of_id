# Implementation Work Order Standard

## Document Status and Authority

- **Section:** Public Launch Readiness 4.6
- **Status:** Corrective documentation remediation complete; controlling after Bradley approval
- **Owner:** Bradley Pierce
- **Applies to:** implementation assignments for Future of ID
- **Does not authorize:** product implementation, validation execution, deployment, or launch

After Bradley approval, this document is the controlling Section 4.6 standard for implementation work orders. It governs how approved specifications are translated into bounded coding assignments. Product meaning remains controlled by the applicable launch, strategy, architecture, experience, privacy, validation, and decision sources.

## 1. Purpose

An implementation work order converts an approved specification into bounded implementation work. It defines what may change, what must remain unchanged, how architectural decisions are made, which acceptance criteria apply, what stops the work, and what evidence is required before completion can be claimed.

The standard prevents:

- silent scope expansion
- undocumented architecture changes
- one-off module implementations
- product-contract drift
- unrelated visual or content changes
- target behavior being reported as implemented prematurely
- implementation being mistaken for authority to change public claims
- incomplete validation and closure reporting
- failed, blocked, unavailable, not-run, or not-applicable checks being omitted or misrepresented
- documentation approval being mistaken for implementation approval

An approved brief describes the product contract. An approved work order authorizes a specific implementation slice. Validation, retained evidence, and reviewer approval determine whether that slice is accepted.

## 2. Applicability

Use this standard for work that changes or may affect:

- product behavior
- application architecture or shared abstractions
- shared components or module interactions
- learner state, data, or persistence
- AI contracts, prompts, parsers, routes, or provider integration
- API routes
- privacy or data-flow disclosures
- accessibility behavior
- validation tooling or evidence generation
- public product claims
- content structures that affect rendering or behavior

A clearly trivial maintenance task may use the reduced format in Appendix D only when it does not affect an approved product contract, observable behavior, architecture, state, accessibility, privacy, security, validation, or public claim. Bradley Pierce, or a specifically delegated governance approver, must approve the reduced format before the task begins.

## 3. Work Order Identity and Status

Every work order records:

- work-order identifier and title
- checklist section or implementation phase
- status
- requester, approver, and approval date
- implementation owner
- controlling branch or target
- related issue, task, decision, or approval reference where applicable

Approved work-order status values are:

- **Draft**
- **Under Review**
- **Approved for Implementation**
- **In Progress**
- **Blocked**
- **Implementation Complete — Validation Pending**
- **Complete and Approved**
- **Superseded**
- **Cancelled**

Coding must not begin while a work order is **Draft** or **Under Review**. Implementation must not continue while it is **Blocked**, **Superseded**, or **Cancelled**. **Implementation Complete — Validation Pending** does not mean acceptance criteria passed. **Complete and Approved** requires every applicable closure condition in Section 32.

Work-order status is separate from command-result status, criterion-execution status, validation status, acceptance status, and defect severity.

## 4. Objective and Observable Outcome

Every work order states:

- the product or architecture problem being addressed
- the approved target outcome
- what a learner, contributor, or system should observe after implementation
- what behavior must remain unchanged
- the difference between verified current behavior, approved target behavior, and target behavior still unimplemented

Objectives must be observable. Phrases such as “improve,” “clean up,” “modernize,” or “make better” are insufficient unless the work order defines the exact behavior, structure, quality, or evidence change. The objective must not imply that target behavior already exists.

## 5. Controlling Source-of-Truth Documents

Every work order inventories its controlling sources. As applicable, include the launch-checklist section, approved implementation brief, strategy source, architecture source, experience source, ADR or approved decision, content source, privacy and data-flow brief, validation and evidence brief, and applicable acceptance criteria.

For every source, record:

| Field | Requirement |
|---|---|
| Path | Exact repository-relative path |
| Section or criterion | Exact heading, decision, criterion, or range |
| Authority level | Position in the authority order below |
| Role | Product, architecture, content, privacy, validation, evidence, or local-decision authority |
| Conflict-resolution rule | Why this source controls or how an apparent conflict must be escalated |

For implementation work, use this authority order:

1. Public Launch Readiness Checklist where it establishes launch requirements or approval status
2. approved implementation brief controlling the feature
3. approved implementation work order
4. approved validation and evidence brief for validation meaning
5. Tier 1 canonical strategy and architecture sources
6. Tier 2 supporting documentation
7. ADRs and approved local decisions within their scope
8. architectural preference only when no controlling decision exists

Contributors must not choose a lower-authority source over a higher-authority approved source. Advisory, historical, draft, or superseded material cannot override approved sources. A material conflict not resolved by this hierarchy triggers Section 26; the contributor must not choose whichever interpretation is most convenient.

## 6. Applicable Acceptance Criteria

Every work order lists the criteria affected by the implementation. Current supported families include:

| Family | Controlling source |
|---|---|
| `RB2-*` | `docs/experience/REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md` |
| `M4SIM-*` | `docs/experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md` |
| `LAP-*` | `docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md` |
| `PDF-*` | `docs/experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md` |
| `VE-*` | `docs/validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` |
| `IWO-*` | This standard |

For each criterion or meaningful criterion group, record:

- identifier and controlling brief
- implementation responsibility
- executability state
- validation method and environment
- evidence location

The work order may classify criteria as planned for validation, but it cannot mark them passed unless validation occurred and the required evidence exists. Missing implementation, unavailable environments, incomplete evidence, and not-yet-executable criteria remain visible under the Section 4.5 model. Section 4.6 does not silently rewrite criteria controlled by another brief.

## 7. Current Behavior

Every work order provides a concise, evidence-grounded current-state description. Include as applicable:

- learner sequence
- component or route behavior
- state ownership and persistence behavior
- AI request and response flow
- server-authoritative context or state
- accessibility behavior
- failure and fallback behavior
- public claims
- known limitations and defects

Support the description with repository paths, observable behavior, or retained evidence. Do not describe approved target behavior as current.

## 8. Authorized Scope

Every work order declares exact scope across applicable product behavior, files, components, routes, APIs, services, hooks, types, utilities, data sources, content, persistence domains, tests, evidence records, documentation, and public copy.

The work order distinguishes:

1. **Required changes** — necessary to produce the approved outcome.
2. **Permitted supporting changes** — allowed only because they directly support required changes.
3. **Prohibited changes** — outside the authorized assignment.

An implementation assignment authorizes only the listed scope. General repository access is not authorization to refactor, redesign, rewrite, upgrade, reorganize, or remediate unrelated areas.

## 9. Affected Files and Components

Every work order contains an initial affected-file inventory.

| Path or bounded file group | Expected change type | Purpose | Planned or amendment-added |
|---|---|---|---|
| Exact repository-relative path or bounded group | Create, update, move, or remove | Why the change is necessary and what it owns | Planned or approved amendment ID |

Identify, when applicable, shared components, module-specific content, services, hooks, utilities, routes, API routes, types, schemas, persistence adapters or keys, tests, fixtures, validation records, documentation, generated files, and public-copy surfaces.

The inventory may be expanded only through Section 25. Reading an additional file for context does not itself expand implementation scope.

## 10. Explicit Non-Goals

Every work order lists what it will not do. Applicable exclusions may include:

- unrelated redesign or content rewriting
- dependency upgrades or route restructuring
- database introduction, accounts, authentication, or cloud synchronization
- analytics or tracking
- scoring, mastery assessment, diagnosis, recommendations, or personalization
- additional modules or capability areas
- visual-system or token changes
- new provider or model selection
- public-claim expansion or legal-compliance claims
- implementation owned by a later checklist phase

“No unrelated changes” is required but is not sufficient alone. Name the most likely forms of scope drift for the assignment.

## 11. Content and Logic Separation

The work order explains how implementation preserves separation among:

- presentation and reusable UI
- structured content and configuration
- interaction and domain logic
- learner state and persistence
- server-authoritative data and client requests
- provider integration and learner-facing behavior
- validation logic and product logic

Route files should primarily compose data and components. Reusable components must not embed unrelated module-specific instructional content. Domain rules, validators, parsers, migrations, and storage behavior belong in appropriate shared services or libraries. Any deliberate exception requires documented rationale, risk, scope, and approval.

## 12. Reusable Components and Shared Models

Before creating a component, hook, service, type, utility, storage pattern, or interaction engine, the work order identifies existing patterns reviewed for reuse.

The work order states:

- what is reused
- what must be extended
- what new abstraction is justified
- why reuse is based on an actual shared responsibility
- how module-specific content stays separate from reusable behavior

Creating duplicate storage, AI, validation, reset, or interaction systems is prohibited without explicit approval. Reuse does not require speculative generalization; module-specific presentation is acceptable when it has no credible shared responsibility and remains within scope.

## 13. Hardcoding Boundaries

The work order records every material hardcoding decision and its authority. It must not:

- copy shared interaction logic into one module
- hardcode authoritative module identifiers, pathway text, scenario outcomes, or acceptance rules when a shared or repository-authoritative model should own them
- embed instructional copy inside generic UI
- duplicate provider, persistence, validation, or reset contracts
- conceal configuration or approved content in component conditionals
- build a generic abstraction only for hypothetical future use

Allowed module-specific constants must be scoped, named, traceable to an approved source, and kept outside reusable behavior where appropriate. A one-off branch requires an explanation of why the shared model does not apply and whether an ADR or approved amendment is needed.

## 14. Architecture Decision Record

Every material structural decision records:

- decision being made
- options and alternatives considered
- selected approach and reason
- trade-offs
- affected contracts and criteria
- migration or compatibility impact
- ADR trigger
- ADR path and status, or the reason no ADR is required

Use an ADR when a decision changes a durable cross-feature architecture, provider contract, persistence boundary, public interface, or accepted project pattern. A work order cannot use implementation convenience to supersede an approved brief or ADR silently.

## 15. Data and Persistence Impact

When applicable, the work order identifies:

- data read, written, transmitted, cleared, and reconstructed
- state owner and repository-authoritative inputs
- persistence domain, storage key ownership, and browser-local boundary
- schema version and migration behavior
- reset and clearing scope
- separation among course progress, module artifacts, and Reflection
- failure, corruption, quota, unavailable-storage, and recovery behavior

Data impact must preserve approved minimization, domain separation, latest-only behavior where specified, safe parsing, version handling, and scoped clearing. Clearing browser-local data must not be described as deleting data already transmitted externally.

## 16. AI Impact

When implementation affects AI, the work order identifies:

- route and provider
- request contract and validated identifiers
- repository-owned context reconstructed server-side
- output contract, parsing, and bounded error behavior
- optionality and deterministic non-AI behavior
- failure, timeout, malformed-output, quota, and provider-unavailable behavior
- disclosure dependency
- provider and deployment-verification dependency

Learner-facing requests must transmit only approved minimum data. AI must not silently control deterministic Module 4 branching, score mastery, diagnose capability, personalize pathways, or expose hidden prompts, chain of thought, secrets, or provider internals.

## 17. Privacy and Disclosure Impact

Every applicable work order records:

- browser-local storage impact
- AI-transmission impact
- Reflection impact
- shared-computer exposure
- reset and deletion language
- required notices and their surfaces
- provider-default versus deployment-fact distinction
- legal or organizational dependency

Disclosure must occur before or at the approved transmission moment. The work order must preserve data minimization, separate local domains, optional AI use, honest retention and deletion language, and the prohibition against treating local clearing as external deletion. Provider defaults do not establish deployment facts; categorical provider claims require the verification specified by the privacy brief.

## 18. Accessibility Impact

Every work order identifies affected accessibility behavior and applicable criteria. Address as relevant:

- keyboard operation
- focus order, containment, Escape, and focus return
- semantics and accessible names
- dynamic announcements
- error association and recovery
- non-color-only meaning
- mobile behavior and touch targets
- 320 CSS-pixel reflow
- 200% browser zoom and supported text-only zoom
- reduced motion
- screen-reader coverage and combinations

Automated scanning is supplemental. Accessibility cannot be declared complete when required manual keyboard, screen-reader, zoom, reflow, mobile, or reduced-motion checks remain unexecuted.

## 19. Public-Claim Impact

Every work order identifies:

- current public claims affected
- new claims the implementation may support after validation
- claims that must remain qualified
- target-state language prohibited until implementation and validation
- surfaces requiring review: homepage, About, Orientation, module content, Reverse Build, Reflection, AI controls, privacy notices, README, metadata, and architecture and experience documentation
- required post-implementation claim audit
- applicable `PDF-*`, `VE-*`, or feature-specific criteria
- whether provider or deployment verification is required before wording changes
- whether a claim change requires legal or organizational review

Implementation does not automatically authorize public copy changes. Target behavior must not be presented as current before implementation and validation. Unsupported privacy, retention, scoring, diagnosis, personalization, validation, or universal-framework claims remain prohibited.

Claim review must compare the final observable implementation and retained evidence with every affected surface. A technically working feature does not authorize broader claims than the controlling criteria and evidence support.

## 20. Validation Plan

Before implementation begins, map applicable criteria to validation methods, environments, and evidence. Include as applicable static inspection, baseline commands, unit or schema tests, API and integration tests, deterministic fixtures and mocks, limited live-provider verification, manual functional review, accessibility review, responsive and reduced-motion review, privacy and network inspection, public-claim audit, and deployment, provider, legal, or governance verification.

For each method, record:

- command or procedure
- working directory and environment
- route, browser/OS, viewport/zoom, and assistive technology where applicable
- expected result
- evidence location
- owner
- criterion mapping

Lint, TypeScript, build success, documentation review, or a plan alone cannot establish feature completion.

## 21. Required Baseline Commands

Unless the approved work order establishes that a command is not applicable through governance, report these baselines:

- `npm run lint` from `web/`
- `npx tsc --noEmit` from `web/`
- `npm run build` from `web/`
- the applicable automated, integration, and end-to-end test commands from their documented working directories
- `git diff --check` from the repository root

For every baseline, separately report command availability, command result, expected result, observed result, evidence, defect, and retest status. If a command cannot run because a dependency, environment, credential, hardware path, or access path is unavailable, do not mark it passed. Baselines verify bounded technical properties; they are not substitutes for criterion execution or manual validation.

## 22. Manual Validation Requirements

The work order defines applicable manual checks for:

- learner sequence and functional behavior
- empty, loading, pending, failure, unavailable, reset, and recovery states
- keyboard and focus behavior
- screen-reader output and announcements
- responsive layouts, mobile behavior, zoom, reflow, and reduced motion
- privacy notices, transmission timing, network behavior, and provider-dependent facts
- public claims and current-versus-target wording

Each check records route, environment, browser/OS, viewport or zoom, assistive technology, expected result, observed result, status, evidence, defect, owner, and retest status. A manual check is not complete because an automated scanner or code inspection found no issue.

## 23. Evidence Requirements

Evidence must follow the Section 4.5 record contract and identify the work-order ID, implementation commit or build, environment, date, tester, method, expected result, observed result, status, defect references, retest state, and unresolved uncertainty where applicable.

Evidence must be attributable, reproducible enough for review, proportionate to risk, and linked to the applicable criterion. The work order is planning and approval evidence; it is not execution evidence. An evidence plan is not a completed evidence record.

Do not retain credentials, confidential learner data, production learner conversations, hidden prompts, chain of thought, raw provider internals, or unnecessary personal data.

## 24. Unrelated-Change Prohibition

Implementation must not introduce unrelated visual redesign, design-token changes, content rewriting, routes, architecture refactors, dependencies, formatting churn, file movement, feature additions, analytics, accounts, cloud storage, scoring, diagnosis, or personalization.

Before implementation, record relevant working-tree state. Existing or unrelated changes belong to their current owner and must be preserved. Avoid destructive reset or checkout operations, distinguish pre-existing changes from work-order changes, avoid overwriting overlapping edits, and use isolation when required. An unrelated improvement may be recorded as future work but must not be implemented under the current work order.

## 25. Scope Amendment Procedure

Before changing an unlisted file, component, route, API, data domain, dependency, public claim, or architectural boundary, the owner must:

1. pause the out-of-scope change
2. describe the discovery and reason
3. identify affected sources, criteria, files, systems, risk, and validation impact
4. classify the change as required, permitted supporting, or separate future work
5. create an amendment ID and update the affected-file inventory
6. obtain dated approval from the original approver or explicitly delegated authority

Approval must occur before expanded work begins. A final report cannot retroactively authorize scope expansion. If the discovery changes product meaning or an approved criterion, reopen the controlling brief rather than amending only the work order.

## 26. Work Order Blocking Conditions

Implementation must pause and the work order must become **Blocked** when:

- controlling sources conflict materially
- the authority hierarchy does not resolve a conflict
- a required product decision is missing
- proposed work would violate approved acceptance criteria
- implementation would silently redefine an approved brief
- privacy, sensitive-data, security, or learner-control risk remains unresolved
- required provider or deployment facts are unavailable
- a required dependency, environment, hardware, credential, or access path is unavailable
- scope expansion requires approval
- a new route, API, persistence domain, provider, shared abstraction, or architecture pattern is needed outside approved scope
- an approved brief must be reopened
- a Critical defect is discovered
- required validation cannot be executed and the missing validation affects safe implementation or approval
- unrelated working-tree changes create risk of overwrite or contamination

The blocked report must include:

- reason
- affected source or criterion
- current risk
- work completed so far
- files touched
- required decision or dependency
- owner
- next action
- whether rollback is needed

Implementation must not continue while the work order is **Blocked**, **Superseded**, or **Cancelled**. A blocked work order cannot be reported as complete. Bypassing a blocking condition requires explicit governance approval recorded in the work order; informal consent or implementation convenience is insufficient.

## 27. Implementation Completion Report

Every implementation assignment ends with a structured report containing:

- work-order ID and implemented commit, build, or working-tree reference
- whether the objective was achieved
- observable behavior implemented and behavior intentionally unchanged
- architecture decisions, ADR references, and trade-offs
- deviations and approved amendments
- criteria implemented, criteria not executable, and current criterion statuses
- known defects and retest status
- public-claim impact and audit status
- remaining concerns, dependencies, and follow-up owner
- confirmation that no unrelated changes were introduced
- confirmation that target behavior is not reported as current beyond verified implementation

The report must distinguish implementation completion from validation approval. A report does not cure unapproved scope, missing evidence, failed validation, or a blocking condition.

## 28. File Change Summary

The completion record contains an exact final file inventory:

| Path | Change type | Purpose | Criterion or contract | Planned or amended | Generated-file status |
|---|---|---|---|---|---|

List every created, updated, moved, removed, and generated file. The final inventory must reconcile with the initial inventory and approved amendments. Identify pre-existing changes that remain in the same working tree and distinguish them from work-order changes. A directory summary is insufficient when exact files can be identified.

## 29. Build, Lint, Type, and Test Results

Use only these result statuses:

- **Passed**
- **Failed**
- **Blocked**
- **Not run**
- **Not applicable through approved governance**

Every command, automated test, and manual check has distinct fields for:

- check or exact command
- working directory and environment
- command availability or applicability
- expected result
- observed result
- result summary
- result status
- evidence location
- related defect
- retest status

Do not:

- call lint or TypeScript “tests”
- say “all tests passed” when no test infrastructure exists
- treat an unavailable check as passed
- omit blocked, failed, not-run, unavailable, or not-applicable checks
- mark a criterion passed without retained evidence

Command availability, command result, criterion execution status, validation status, and work-order status are separate concepts. A passing command does not automatically pass a criterion or close a work order.

## 30. Honest Test Availability Reporting

Before reporting a test result, inspect the repository or controlling test configuration and record whether an applicable command or harness exists.

- If an applicable command exists and runs, report its observed result.
- If it exists but cannot run, report **Blocked** or **Not run** as appropriate, state the availability constraint, retain the risk, and identify the next action.
- If no applicable test infrastructure exists, state **Command availability: unavailable — no applicable automated test command exists**. Use **Not run** unless approved governance has determined the check is not applicable.
- Use **Not applicable through approved governance** only with the approving authority, rationale, and date recorded.
- Never translate unavailable, deferred, omitted, or not-yet-executable coverage into **Passed**.

Automated-test availability does not remove required manual, accessibility, privacy, provider, or claim validation.

## 31. Final Validation and Evidence Status

Track these milestones without collapsing them into a single “done” state:

- **Implementation Complete — Validation Pending** — authorized implementation has ended and its report exists, but required validation remains; this is a work-order status and not acceptance.
- **Validation Ready** — implementation, environment, plan, and evidence locations are ready for applicable validation.
- **Validation In Progress** — applicable validation is being executed and results remain open.
- **Validation Failed** — one or more required checks or criteria failed; return the work order to remediation or **Blocked** status based on risk and required decisions.
- **Validation Blocked** — required validation cannot be executed; the blocker and missing coverage remain visible.
- **Acceptance Complete** — all applicable criteria were executed under the Section 4.5 contract and required evidence was retained; reviewer closure approval is still separate.
- **Complete and Approved** — the closure reviewer approved the completed work order under Section 32; this is a work-order and closure outcome, not a command or criterion status.

Implementation completion does not imply validation completion. Failed validation returns the work order to remediation or blocked status. Blocked validation remains visible. **Acceptance Complete** requires applicable criteria to be executed and evidence retained. **Complete and Approved** requires reviewer approval.

Command-result status, criterion status, defect severity, validation status, acceptance status, and work-order status remain separate concepts and must be reported in their controlling fields.

## 32. Work Order Approval and Closure

A work order may close only when:

- the final implementation report is complete
- the exact final file inventory is complete
- approved amendments are recorded
- architecture decisions and ADR references are complete
- required commands are reported
- automated and manual checks are reported
- accessibility checks are reported
- privacy and provider checks are reported where applicable
- public-claim review is complete
- evidence references exist
- defects and retests are recorded
- criterion statuses are visible
- failed, blocked, not-run, and not-applicable checks are not omitted
- remaining gaps are assigned
- final validation status is recorded
- closure reviewer and approval date are recorded

Allowed closure outcomes are:

- **Complete and Approved**
- **Implementation Complete — Validation Pending**
- **Blocked**
- **Superseded**
- **Cancelled**

Only **Complete and Approved** represents successful acceptance closure. **Implementation Complete — Validation Pending** closes the implementation activity only and preserves outstanding validation and approval work. **Blocked**, **Superseded**, and **Cancelled** prohibit continued implementation. Validation failure cannot close as **Complete and Approved**. Unimplemented or not-yet-executable criteria cannot support successful closure. Implementation completion alone cannot close the work order as accepted.

## 33. Standard Work Order Template

Every full work order uses the following fields. Equivalent formatting is allowed only when all fields and tables remain distinct.

```markdown
# Implementation Work Order: <title>

## Identity and Approval
- Work-order ID:
- Title:
- Checklist phase:
- Status:
- Requester:
- Approver:
- Approval date:
- Owner:
- Branch/target:
- Related issue/task/decision:

## Objective
- Problem:
- Observable target:
- Behavior that must remain unchanged:

## Current and Target Behavior
- Current observed behavior:
- Approved target behavior:
- Known target behavior still unimplemented:

## Controlling Sources
| Path | Section/criterion | Authority level | Role | Conflict-resolution rule |
|---|---|---|---|---|

## Acceptance Criteria
| Identifier | Controlling brief | Implementation responsibility | Executability | Validation method | Evidence location |
|---|---|---|---|---|---|

## Scope
### Required changes
### Permitted supporting changes
### Prohibited changes
### Explicit non-goals

## Affected Files
| Initial file inventory | Expected change type | Purpose | Planned or amendment-added |
|---|---|---|---|

## Architecture
- Content/logic separation:
- Reuse decisions:
- Hardcoding decisions:
- Selected approach:
- Alternatives:
- Trade-offs:
- ADR trigger:
- ADR path/status:

## Data and Persistence
- Data read:
- Data written:
- Data transmitted:
- Data cleared:
- Data reconstructed:
- Persistence domain:
- Reset scope:
- Version/migration impact:
- Failure handling:

## AI
- Route/provider:
- Request contract:
- Server reconstruction:
- Output contract:
- Optionality:
- Failure behavior:
- Disclosure dependency:
- Provider-verification dependency:

## Privacy and Disclosure
- Local-storage impact:
- AI-transmission impact:
- Reflection impact:
- Shared-computer impact:
- Reset/deletion language:
- Required notices:
- Legal/organizational dependency:

## Accessibility
- Keyboard:
- Focus:
- Semantics:
- Announcements:
- Errors:
- Non-color meaning:
- Mobile:
- Zoom/reflow:
- Reduced motion:
- Screen-reader coverage:

## Public Claims
- Claims supported after implementation:
- Claims requiring qualification:
- Claims prohibited until validation:
- Surfaces requiring audit:

## Validation Plan
| Command/process | Working directory | Environment | Route | Browser/OS | Viewport/zoom | Assistive technology | Expected result | Evidence location | Owner |
|---|---|---|---|---|---|---|---|---|---|

## Blocking Conditions
- Current blockers:
- Reason:
- Affected source or criterion:
- Current risk:
- Work completed so far:
- Files touched:
- Required decision/dependency:
- Owner:
- Next step:
- Rollback needed:

## Scope Amendments
| Amendment ID | Discovery | Reason | Files/systems | Criteria impact | Validation impact | Approval | Date |
|---|---|---|---|---|---|---|---|

## Implementation Completion Report
- Objective achieved:
- Behavior implemented:
- Behavior unchanged:
- Architecture decisions:
- Deviations:
- Criteria implemented:
- Criteria not executable:
- Known defects:
- Public-claim impact:
- Follow-up owner:

## Final File Inventory
| Path | Change type | Purpose | Criterion/contract | Planned or amended | Generated-file status |
|---|---|---|---|---|---|

## Results Table
| Check or command | Working directory | Availability/applicability | Status | Expected result | Observed result | Result summary | Evidence location | Related defect | Retest status |
|---|---|---|---|---|---|---|---|---|---|
| Lint | | | | | | | | | |
| TypeScript | | | | | | | | | |
| Production build | | | | | | | | | |
| Automated tests | | | | | | | | | |
| Integration tests | | | | | | | | | |
| End-to-end tests | | | | | | | | | |
| Manual functional checks | | | | | | | | | |
| Keyboard checks | | | | | | | | | |
| Screen-reader checks | | | | | | | | | |
| Responsive/zoom checks | | | | | | | | | |
| Privacy/provider checks | | | | | | | | | |
| Public-claim audit | | | | | | | | | |

Allowed Status values: Passed; Failed; Blocked; Not run; Not applicable through approved governance.
Availability/applicability and result summary are required fields and remain separate from Status.

## Remaining Issues
| Defect | Severity | Owner | Workaround | Retest | Launch impact |
|---|---|---|---|---|---|

## Final Status and Closure
- Implementation status:
- Validation status:
- Acceptance status:
- Closure decision:
- Closure reviewer:
- Approval date:
- Evidence-record location:
```

## 34. Work Order Evidence Record

Maintain one consolidated evidence record proving work-order compliance. It must contain or link:

- approved work order and approval metadata
- controlling-source inventory and criterion inventory
- initial affected-file inventory
- approved scope amendments
- final affected-file inventory
- architecture decision record and ADR references
- data, AI, privacy, accessibility, and claim-impact review
- validation plan
- command results and automated-test results
- manual functional results
- accessibility results
- privacy and provider results
- public-claim audit
- defect and retest records
- implementation completion report
- final validation status
- final reviewer decision

The record identifies:

- work-order ID
- implementation commit or build
- environment
- date range
- owner and reviewer
- unresolved uncertainty
- linked evidence files

The consolidated record may be an index to bounded evidence artifacts; it need not duplicate large outputs. Links must be stable and reviewable. An evidence plan is not equivalent to a completed evidence record.

## 35. Non-Goals

Approval of this standard does not:

- authorize or begin Section 5 implementation
- implement Reverse Build v2, Module 4, learner-artifact persistence, or disclosures
- modify application code
- add tests, CI, scripts, components, routes, APIs, services, hooks, types, or product behavior
- create tests or CI
- execute any `RB2-*`, `M4SIM-*`, `LAP-*`, or `PDF-*` feature criteria
- execute any `VE-*` validation-governance criteria
- execute any `IWO-*` acceptance criteria
- approve any individual work order automatically
- fix current product defects
- change OpenAI or other provider settings
- perform deployment or infrastructure verification
- draft legal policy
- certify privacy, accessibility, security, provider, legal, or public-claim compliance
- close or approve implementation features
- mark acceptance criteria passed
- modify or reopen approved Section 4.1–4.5 briefs
- mark Phase 4 complete or authorize public launch

## Approved Section 4.1–4.5 Boundary Alignment

All approved Section 4.1–4.5 contracts remain controlling and unchanged. Every work order must preserve, as applicable:

- Design Practice → AI Review → Reverse Build → Reflection
- Reflection exclusion from Reverse Build
- deterministic Module 4 behavior independent of AI
- repository-authoritative Module 4 state
- one current artifact per module
- independent prompt entries
- latest-only replacement
- exact response/feedback association
- separate course-progress, module-artifact, and Reflection domains
- browser-local persistence
- no accounts or cloud synchronization
- AI disclosure before or at transmission
- provider defaults separated from deployment verification
- open access
- no scoring, diagnosis, personalization, external validation, or unsupported universal claims

Work orders execute approved contracts; they cannot silently reinterpret or replace them. Section 4.6 governs implementation control, not product meaning.

## Appendix A. Implementation Work Order Acceptance Criteria

### Identity and authority

- **IWO-ID-01:** The work order has a unique ID, title, checklist phase, requester, owner, approver, approval date, branch or target, related reference, and valid status.
- **IWO-ID-02:** Coding does not begin while the work order is Draft or Under Review and does not continue while it is Blocked, Superseded, or Cancelled.
- **IWO-ID-03:** Use of the reduced format has explicit Bradley or delegated-governance approval and satisfies Appendix D.

### Objective and current state

- **IWO-OBJ-01:** The objective defines an observable outcome and behavior that must remain unchanged.
- **IWO-OBJ-02:** Current behavior, approved target behavior, and target behavior still unimplemented are visibly distinct.
- **IWO-CURRENT-01:** Current behavior is supported by repository paths, observable behavior, or retained evidence.

### Source and criterion traceability

- **IWO-SOURCE-01:** Every controlling source is listed with path, section or criterion, authority level, role, and conflict-resolution rule.
- **IWO-SOURCE-02:** The work order follows the authority order defined in Section 5 of this Implementation Work Order Standard.
- **IWO-SOURCE-03:** Advisory, historical, draft, or superseded material does not override an approved source.
- **IWO-CRIT-01:** Every affected acceptance criterion or meaningful range is identified with its controlling brief.
- **IWO-CRIT-02:** Each criterion has implementation responsibility, executability, validation method, and evidence location.
- **IWO-CRIT-03:** No criterion is marked passed without completed validation and retained evidence.

### Scope and files

- **IWO-SCOPE-01:** Required, permitted supporting, and prohibited changes are separately stated.
- **IWO-SCOPE-02:** Explicit non-goals are sufficient to prevent likely scope drift.
- **IWO-FILE-01:** Every anticipated changed file or bounded group is listed with change type, purpose, and planned or amendment-added status.
- **IWO-FILE-02:** The exact final file inventory reconciles with the initial inventory and approved amendments.
- **IWO-CHANGE-01:** Unlisted implementation changes do not begin before a Section 25 amendment is approved.
- **IWO-CHANGE-02:** Product-contract or criterion changes reopen the controlling governance source rather than relying only on a work-order amendment.
- **IWO-UNRELATED-01:** The final diff contains no unrelated visual, content, architecture, dependency, route, formatting, or feature change.

### Architecture, reuse, and hardcoding

- **IWO-SEP-01:** Presentation, content, behavior, state, persistence, provider integration, and validation remain separated under the approved architecture.
- **IWO-REUSE-01:** Existing components, services, hooks, types, utilities, and patterns are reviewed before new ones are created.
- **IWO-REUSE-02:** Reusable components and shared logic do not contain unjustified module-specific content or authoritative hardcoding.
- **IWO-REUSE-03:** New abstractions are justified by an actual shared responsibility rather than speculative generalization.
- **IWO-HARD-01:** Module identifiers, pathway content, scenario outcomes, and rules remain in their approved authoritative model rather than being duplicated in component logic.
- **IWO-ARCH-01:** Every material architecture decision records alternatives, selection, rationale, trade-offs, and contract impact.
- **IWO-ARCH-02:** A durable cross-feature architecture change receives an ADR or approved governing-source update when required.

### Data, AI, privacy, accessibility, and claims

- **IWO-DATA-01:** Data read, written, transmitted, cleared, reconstructed, persisted, reset, versioned, and failed is explicitly documented.
- **IWO-AI-01:** Applicable AI route, request, server reconstruction, output, optionality, failure, disclosure, and provider-verification dependencies are documented.
- **IWO-AI-03:** Every applicable work order affecting AI-supported behavior explicitly confirms that deterministic product state remains independent of AI where required by the controlling brief, or cites an approved controlling source that explicitly authorizes AI-dependent state; this criterion fails when a work order silently allows AI to control authoritative or deterministic product state.
- **IWO-PRIV-01:** Applicable disclosure, minimization, retention, provider-verification, shared-computer, and prohibited-claim requirements are included.
- **IWO-A11Y-01:** Applicable keyboard, focus, semantics, announcement, error, reflow, zoom, mobile, screen-reader, and reduced-motion validation is mapped.
- **IWO-A11Y-02:** Automated accessibility scanning is not used as the sole evidence when manual checks apply.
- **IWO-CLAIM-01:** Current, newly supportable, qualified, and prohibited claims and every affected public surface are inventoried.
- **IWO-CLAIM-02:** Public copy is not changed merely because implementation occurred; required validation, provider facts, and legal or organizational review are complete first.
- **IWO-CLAIM-03:** A post-implementation audit verifies claims against observable behavior and retained evidence.

### Validation, blocking, and evidence

- **IWO-VAL-01:** Every applicable criterion maps to approved validation methods, environments, expected results, owners, and evidence outputs.
- **IWO-VAL-02:** Baseline commands state their working directories, availability, results, and limits and are not treated as complete product validation.
- **IWO-VAL-03:** Manual functional, accessibility, privacy/provider, and claim checks remain visible and distinct from automated commands.
- **IWO-VAL-04:** Every applicable work order lists exact required browsers, relevant operating systems, viewports, browser zoom, supported text-only zoom, keyboard-only operation, screen readers or other assistive technologies, and relevant reduced-motion coverage; generic directions such as “test accessibility,” “test responsiveness,” or “manual QA” fail this criterion.
- **IWO-VAL-05:** Every applicable work order lists exact manual-validation scenarios, expected results, environments, and evidence requirements; generic manual-validation language fails this criterion.
- **IWO-BLOCK-01:** Every Section 26 condition pauses implementation and creates the required blocked report.
- **IWO-BLOCK-02:** A blocked work order is not reported complete and cannot resume without resolution or explicit governance approval.
- **IWO-EVID-01:** Evidence follows the Section 4.5 record contract and excludes credentials, hidden prompts, chain of thought, and unnecessary sensitive data.
- **IWO-EVID-02:** One consolidated record links approval, sources, criteria, scope, decisions, results, defects, retests, reports, and reviewer decisions.
- **IWO-EVID-03:** An evidence plan is never represented as a completed evidence record.

### Completion, results, and closure

- **IWO-REPORT-01:** The implementation completion report contains every field required by Section 27.
- **IWO-FINALFILE-01:** The final change summary contains every field required by Section 28 and distinguishes pre-existing changes.
- **IWO-RESULT-01:** Every command or check reports availability, expected result, observed result, summary, governed status, evidence, defect, and retest status.
- **IWO-RESULT-02:** Result status is one of Passed, Failed, Blocked, Not run, or Not applicable through approved governance.
- **IWO-TEST-01:** Lint and TypeScript are not called tests, and absent automated-test infrastructure is reported as unavailable rather than passed.
- **IWO-STATUS-01:** Command, criterion, defect, validation, acceptance, and work-order statuses remain separate.
- **IWO-STATUS-02:** Validation failure returns the work order to remediation or Blocked and blocked validation remains visible.
- **IWO-CLOSE-01:** Complete and Approved is used only when every Section 32 closure condition is satisfied and reviewer approval is recorded.
- **IWO-CLOSE-02:** Implementation completion, unimplemented criteria, or not-yet-executable criteria cannot support successful closure.
- **IWO-TEMPLATE-01:** The full work order includes every planning, implementation, validation, result, evidence, and closure field in Section 33.
- **IWO-HONEST-01:** Target behavior is not reported as implemented or current beyond observable verified behavior.

These `IWO-*` criteria govern work-order completeness. Their existence does not mean an implementation assignment or product criterion has passed.

## Appendix B. Ownership and Handoff

### Section 4.6 owns

- work-order structure and status
- source and criterion traceability
- scope, affected-file declarations, and amendments
- architecture reasoning
- blocking, completion, result, evidence-record, and closure reporting
- `IWO-*` criteria

### Approved Section 4.1–4.4 product briefs own

- product behavior and instructional sequence
- artifact, simulation, Reverse Build, privacy, disclosure, and public-claim contracts
- feature acceptance criteria

### Section 4.5 owns

- criterion execution status
- validation methods and environments
- evidence meaning and records
- defect severity, retest, exceptions, and acceptance governance

### Section 5 and later implementation phases own

- authorized code, type, service, hook, persistence, component, route, API, and test changes

### Final launch governance owns

- consolidated evidence review
- unresolved-risk decisions
- final launch approval

## Appendix C. Approval and Governance

Before Section 4.6 can be marked complete, Bradley must approve this standard and confirm that it addresses the launch-checklist requirements.

After approval:

1. Every non-trivial implementation assignment uses this standard.
2. Its work order is approved before coding begins.
3. Approved briefs and criteria are cited rather than duplicated or rewritten.
4. Section 4.5 rules govern validation meaning and evidence.
5. Changes to status values, required fields, authority, scope control, blocking, result reporting, evidence records, closure, or `IWO-*` criteria require explicit governance approval.

Approval establishes implementation-control governance. It does not mean a product feature has been implemented or validated.

## Appendix D. Reduced Work Order Format

An approved trivial-maintenance exception may contain:

- work-order ID, title, approver, and approval date
- objective and observable result
- controlling source and exact files
- confirmation that no product contract, behavior, architecture, accessibility, privacy, validation, or public claim is affected
- applicable validation commands or checks
- exact final file and result summary

If implementation reveals broader impact, the reduced exception ends and a full work order is required before continuing.

## Appendix E. Required Implementation Sequence

1. Draft the work order.
2. Review controlling sources and current behavior.
3. Map criteria, validation, and evidence.
4. Obtain **Approved for Implementation** status.
5. Implement only authorized scope.
6. Pause for blockers or apply approved amendments when necessary.
7. Run planned technical and manual checks.
8. Record every result, defect, blocker, and retest honestly.
9. Produce the completion report, final file inventory, and evidence record.
10. Record the final validation state and obtain the applicable closure decision.

## Appendix F. Section 4.6 Requirement Coverage

| Section 4.6 requirement | Controlling coverage |
|---|---|
| Identify relevant source-of-truth documents. | Sections 5–6 and `IWO-SOURCE-*`, `IWO-CRIT-*` |
| Identify affected files and components. | Sections 8–9, 25, and 28 plus `IWO-FILE-*` |
| Preserve content and logic separation. | Section 11 and `IWO-SEP-01` |
| Use reusable components and shared models. | Section 12 and `IWO-REUSE-*` |
| Avoid one-off hardcoded module logic. | Section 13 and `IWO-HARD-01` |
| Explain architectural decisions. | Section 14 and `IWO-ARCH-*` |
| Include validation requirements. | Sections 20–23 and 29–31 plus `IWO-VAL-*` |
| Control claims and blocking conditions. | Sections 19 and 26 plus `IWO-CLAIM-*`, `IWO-BLOCK-*` |
| Prohibit unrelated changes and govern scope expansion. | Sections 24–25 and `IWO-UNRELATED-01`, `IWO-CHANGE-*` |
| Require final implementation and file summaries. | Sections 27–28 and `IWO-REPORT-01`, `IWO-FINALFILE-01` |
| Require honest result reporting. | Sections 29–30 and `IWO-RESULT-*`, `IWO-TEST-01` |
| Separate validation, acceptance, and closure. | Sections 31–32 and `IWO-STATUS-*`, `IWO-CLOSE-*` |
| Require a complete template and evidence record. | Sections 33–34 and `IWO-TEMPLATE-01`, `IWO-EVID-*` |
