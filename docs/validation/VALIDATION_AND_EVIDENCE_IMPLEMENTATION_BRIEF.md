# Validation and Evidence Implementation Brief

## Document Status and Authority

- **Checklist scope:** Section 4.5 of `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`
- **Current implementation status:** Documentation only; this brief does not execute or certify acceptance criteria
- **Authority after approval:** Controlling specification for launch-validation execution, evidence, defects, retesting, and completion decisions
- **Product meaning remains controlled by:** the applicable `RB2-*`, `M4SIM-*`, `LAP-*`, and `PDF-*` implementation briefs

Approval of this brief establishes how validation must be performed. It does not mean that a feature is implemented, a criterion is executable, or any criterion has passed.

## 1. Purpose and Current Validation Gap

Future of ID has 265 unique approved acceptance criteria:

- `RB2-*`: 36
- `M4SIM-*`: 69
- `LAP-*`: 80
- `PDF-*`: 80

The repository already uses linting, TypeScript checks, production builds, repository-language searches, checklist-isolation reviews, and selected validation records. The only current formal validation log is `docs/validation/scenario-engine-validation-log.md`.

These practices are useful but do not provide:

- a controlling map from every criterion to its validation methods
- an approved browser, viewport, screen-reader, or accessibility matrix
- shared pass, failure, blocker, defect-severity, retest, exception, or waiver rules
- a launch-level validation record
- the required AI-feedback regression evidence structure

Most approved criteria describe future behavior and are not currently executable. Their existence is a product contract, not evidence of implementation or passage.

## 2. Validation Principles

Launch validation must:

- validate observable behavior rather than intention
- trace every result to a criterion identifier and controlling brief
- separate automated checks from manual professional judgment
- distinguish not implemented, not yet executable, blocked, failed, and passed states
- retain enough evidence for independent later review
- treat automated accessibility scanning as supplemental rather than conclusive
- avoid inferring privacy, infrastructure logging, or provider configuration from repository code alone
- distinguish verified current behavior from approved target behavior
- avoid certifying a feature from lint, type checking, or build success alone
- require retesting after material implementation, content, environment, provider, or requirement changes
- preserve open access, learner control, current-versus-future accuracy, and product-honesty boundaries

No result may be broadened beyond the exact route, state, environment, configuration, and criterion represented by its evidence.

## 3. Acceptance-Criteria Inventory

### Reverse Build v2

- **Prefix:** `RB2-*`
- **Total:** 36
- **Controlling source:** `docs/experience/REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md`

### Module 4 simulation

- **Prefix:** `M4SIM-*`
- **Total:** 69
- **Controlling source:** `docs/experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md`

### Learner artifact and persistence

- **Prefix:** `LAP-*`
- **Total:** 80
- **Controlling source:** `docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md`

### Privacy and data flow

- **Prefix:** `PDF-*`
- **Total:** 80
- **Controlling source:** `docs/experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md`

The 265 identifiers are unique across the four families. Each criterion remains governed by its controlling brief. Section 4.5 governs execution and evidence, not product meaning. Changing a criterion requires an approved change to its controlling brief and a traceable governance record; a validation record must never silently redefine it.

## 4. Criterion Execution Status

Every criterion uses one status from the authoritative definitions in Section 27. This section describes the lifecycle only; it does not create a second status vocabulary.

Typical progression is:

**Not implemented → Not yet executable → Ready for validation → In validation → Passed or Failed**

**Blocked**, **Not applicable**, and **Passed with approved exception** are governed outcomes, not shortcuts around implementation or evidence. **Superseded through approved governance** may be used only when the controlling brief and approval history identify the replacement requirement. Section 27 controls whenever another section, template, or historical record uses inconsistent status language.

## 5. Validation Method Classification

A criterion may require one or more of these methods:

- static code inspection
- linting
- TypeScript checking
- production build
- unit test
- schema/parser test
- integration test
- API-contract test
- end-to-end browser test
- deterministic fixture test
- live-provider AI test
- manual functional test
- manual keyboard test
- manual screen-reader test
- responsive and zoom review
- privacy and data-flow inspection
- deployment-configuration verification
- provider-source verification
- editorial or claim audit
- governance-document review
- legal or organizational review

The criterion mapping must name every required method. One successful method does not satisfy a criterion that requires additional methods.

## 6. Automated Acceptance-Check Mapping

Every automatable criterion must be entered in the applicable feature record with:

- criterion identifier
- controlling brief
- implementation area
- automation type
- test or script name
- command
- fixture or mock dependency
- expected result
- environment
- evidence output
- current execution status

Automation is appropriate for deterministic, repeatable behavior such as validation, parsing, schema handling, migrations, identifier reconstruction, state transitions, isolation, reset scope, and stable route behavior. Not every criterion should be automated. Accessibility automation is supplemental. Live-provider behavior must not be the sole basis for deterministic tests, and mocks or fixtures must not conceal untested deployment or provider integration.

An automated mapping must point to an existing test or remain **Not yet executable**. A planned test name is not evidence that automation exists.

The initial authoritative range-level mapping is recorded in Section 34. In summary:

| Family | Criteria expected to use automation | Typical automated methods |
|---|---|---|
| `RB2-*` | `RB2-SEQ-*`, `RB2-ART-*`, `RB2-AUTH-01`–`02`, `RB2-STATE-*`, `RB2-PRIV-*`, `RB2-FAIL-*`, `RB2-OPEN-*`, and deterministic portions of `RB2-A11Y-*` and `RB2-HONEST-*` | component/integration tests, artifact fixtures, code inspection, browser tests, automated accessibility scans, and claim searches |
| `M4SIM-*` | `M4SIM-STATE-*`, `M4SIM-D1-*`, `M4SIM-D2-*`, `M4SIM-OUT-*`, `M4SIM-RAT-*`, `M4SIM-AI-*`, `M4SIM-SRV-*`, `M4SIM-RB-*`, `M4SIM-PERSIST-*`, `M4SIM-FAIL-*`, and deterministic portions of `M4SIM-A11Y-*` and `M4SIM-HONEST-*` | state-transition, schema/parser, API-contract, server-authority, persistence, reset, fixture, browser, and scan tests |
| `LAP-*` | `LAP-MODEL-*`, `LAP-WRITE-*`, `LAP-AI-*`, `LAP-M4-*`, `LAP-RB-*`, `LAP-REF-*`, `LAP-RESET-*`, `LAP-PROG-*`, `LAP-VER-*`, `LAP-FAIL-*`, `LAP-PRIV-*`, and deterministic portions of `LAP-A11Y-*` and `LAP-HONEST-*` | unit, parser, migration, record-isolation, storage-failure, event, reset, integration, browser, and claim-search tests |
| `PDF-*` | code-observable portions of `PDF-DATA-*`, `PDF-LOCAL-*`, `PDF-AI-*`, `PDF-REF-*`, `PDF-APP-*`, `PDF-RESET-*`, `PDF-FAIL-*`, `PDF-MIN-*`, `PDF-A11Y-*`, and `PDF-HONEST-*` | storage/network inspection, code inspection, browser tests, automated scans, prohibited-claim searches, and configuration evidence checks |

Automation never replaces the manual or external methods assigned in Sections 7 and 34.

## 7. Manual Acceptance-Check Mapping

Every criterion requiring manual validation must record:

- criterion identifier
- scenario or task
- prerequisites
- route or feature state
- environment
- browser or device
- viewport or zoom
- assistive technology where required
- tester instructions
- expected result
- required evidence
- retest status

Manual validation is required where applicable for:

- professional product-honesty judgment
- keyboard behavior
- screen-reader interpretation
- focus behavior
- responsive layout and long-content usability
- reduced motion
- notice placement and comprehension
- error wording
- destructive-action clarity
- public-claim accuracy

Manual observations must be criterion-specific. General statements such as “looks good” or “accessibility checked” are insufficient.

The initial authoritative range-level mapping is recorded in Section 34. In summary:

| Family | Criteria expected to use manual, external, or governance validation | Typical non-automated methods |
|---|---|---|
| `RB2-*` | `RB2-AUTH-03`, all `RB2-A11Y-*`, all `RB2-HONEST-*`, and learner-facing portions of `RB2-STATE-*`, `RB2-PRIV-*`, `RB2-FAIL-*`, and `RB2-OPEN-*` | functional review, keyboard, screen reader, zoom/reflow, reduced motion, and product-honesty audit |
| `M4SIM-*` | learner-facing portions of `M4SIM-D1-*`, `M4SIM-D2-*`, `M4SIM-OUT-*`, `M4SIM-RAT-*`, `M4SIM-RB-*`, `M4SIM-FAIL-*`, all `M4SIM-A11Y-*`, and all `M4SIM-HONEST-*` | consequence-comprehension review, keyboard, screen reader, focus/announcement review, mobile pathway review, AI-quality review, and claim audit |
| `LAP-*` | learner-facing portions of `LAP-REF-*`, `LAP-RESET-*`, `LAP-FAIL-*`, `LAP-PRIV-*`, all `LAP-A11Y-*`, and all `LAP-HONEST-*` | save/reset/recovery walkthroughs, disclosure comprehension, keyboard, screen reader, mobile/zoom, shared-computer review, and claim audit |
| `PDF-*` | all learner-facing disclosure criteria plus `PDF-PROV-*`, deployment-dependent `PDF-APP-*`, and legal or governance-dependent `PDF-HONEST-*` | data-flow inspection, editorial review, screen reader/keyboard review, deployment logging inspection, OpenAI project verification, provider-source verification, claim audit, and legal or organizational status review |

A criterion assigned to both tables requires both forms of evidence. External or governance verification is not converted into a manual product test merely to make it executable.

## 8. Baseline Commands

| Command | Working directory | Validates | Does not validate | Successful result and retained evidence |
|---|---|---|---|---|
| `npm run lint` | `web/` | Configured ESLint and Next.js static rules | Runtime behavior, learner experience, accessibility completion, privacy, or AI quality | Exit code 0; retain command, date, commit, environment, and output or durable run reference |
| `npx tsc --noEmit` | `web/` | TypeScript type checking without emitted output | Runtime integration, browser behavior, accessibility, persistence failures, or content accuracy | Exit code 0; retain command, date, commit, environment, and output or durable run reference |
| `npm run build` | `web/` | Production compilation and build-time failures | Complete production runtime behavior, provider configuration, accessibility, or acceptance-criteria completion | Exit code 0; retain command, date, commit, environment, and build output or durable run reference |
| `git diff --check` | Repository root | Whitespace errors in the current diff | Product correctness, complete repository formatting, tests, or launch readiness | Exit code 0; retain command, date, commit or working-tree reference, and result |

If a baseline command is unavailable or changes, the validation record must document the approved replacement. Passing all baseline commands never closes a feature, accessibility, privacy, AI-quality, or launch gate by itself.

## 9. Validation Environments

### Local development

Use for rapid technical checks, deterministic tests, and focused manual inspection. Local success does not prove deployed behavior.

### Production build

Use to verify compilation, production bundling, and production-only build failures. When runtime inspection is required, use the built application rather than treating compilation alone as evidence.

### Production-equivalent deployed preview

Use for browser behavior, responsive review, runtime APIs, environment variables, provider integration, deployment logging, storage behavior, navigation, refresh, and accessibility validation. This is the primary environment for launch-level experience evidence.

### Public production

Use only for final smoke checks and verified launch evidence. Public production must not be the first environment in which major defects are sought.

Every environment-dependent record must identify:

- environment URL or identifier
- commit or build
- date
- tester
- relevant configuration
- whether live-provider access was enabled

Secrets and sensitive configuration values must not be copied into evidence.

## 10. Route and Experience Coverage

The master launch record must inventory and validate, as applicable, these exact current routes:

- `/`
- `/about`
- `/course`
- `/course/orientation`
- `/course/dashboard`
- `/course/module/ai-literacy`
- `/course/module/performance-consulting`
- `/course/module/learning-analytics`
- `/course/module/simulation-design`
- `/course/module/adaptive-learning`
- `/course/module/content-systems`
- `/course/module/human-centered-change`
- `/api/scenario-feedback`
- `/api/reflection-feedback`

Coverage also includes:

- direct module access and deep links
- Design Practice
- AI Review
- Reverse Build
- Reflection
- completion controls
- implemented reset and privacy surfaces
- API routes
- required error, empty, partial, fallback, and recovery states

Validation must confirm open access without prerequisite completion. Future routes, controls, or states remain **Not implemented** until observable and must not be included as passed coverage.

## 11. Browser Coverage

Practical launch coverage uses the current stable release available at validation time, or an explicitly approved equivalent policy, for:

| Browser | Minimum platform coverage |
|---|---|
| Chrome desktop | Current stable on an approved desktop operating system |
| Safari desktop | Current stable on macOS |
| Firefox desktop | Current stable on an approved desktop operating system |
| Edge desktop | Current stable on Windows |
| Safari mobile | Current stable on iOS |
| Chrome mobile | Current stable on Android |

The record must capture the actual browser and operating-system versions. Exhaustive device certification is not required. Platform-specific defects must be documented. Critical functionality or accessibility may not be waived solely because one browser differs without an explicit approved exception.

## 12. Viewport and Responsive Coverage

Validate at these baseline CSS viewport sizes unless a criterion requires an additional state-specific size:

- 320 × 568 — minimum-width mobile
- 375 × 667 — representative small mobile
- 768 × 1024 — tablet or intermediate layout
- 1280 × 800 — desktop
- 1440 × 900 — wide desktop where layout behavior materially changes

Review horizontal overflow, clipped content, touch-target size, modal and dialog scrolling, long learner responses, long AI feedback, long notices, stacked pathway review, and orientation changes where relevant. Record exact viewport dimensions and device-pixel behavior when it affects the result.

## 13. Zoom and Reflow

Validate at 200% browser zoom, 200% text-only zoom where supported, and browser text enlargement where applicable. Confirm:

- no loss of content or function
- no essential horizontal scrolling
- visible and usable focus
- reachable controls
- readable notices and errors
- navigable dialogs and long content

Unsupported text-only zoom must be recorded as not applicable for that browser, not silently omitted from the overall matrix.

## 14. Reduced Motion

With reduced-motion preferences enabled, verify that:

- essential meaning does not depend on animation
- motion is reduced or removed where required
- state transitions remain understandable
- focus and announcements still communicate changes

Record the operating-system or browser setting and the states inspected.

## 15. Keyboard Validation

Relevant criteria require manual keyboard-only testing of:

- Tab and Shift+Tab order
- activation with Enter and Space
- dialog opening and closing
- Escape behavior
- initial focus
- focus containment
- focus return
- decision selection
- reset and clear confirmation
- error recovery
- AI submission
- pathway review
- absence of keyboard traps

Evidence must identify the criterion, route, starting state, keyboard sequence, expected result, and observed result.

## 16. Screen-Reader Validation

The practical launch matrix must include:

- VoiceOver with Safari on macOS
- VoiceOver with Safari on iOS
- NVDA with Chrome or Firefox on Windows

If a required Windows environment is unavailable, affected criteria are **Blocked** until approved access exists; they may not be silently skipped.

Validate headings, landmarks, dialog semantics, accessible names and descriptions, selected state, consequence and context announcements, AI loading/success/error states, save and persistence states, stale/partial/malformed/cleared states, destructive-action scope, pathway review, and the distinction among learner content, AI feedback, and authored reasoning.

These combinations provide practical coverage; they do not by themselves establish WCAG conformance.

## 17. Automated Accessibility Scanning

Use `axe-core` through an approved browser runner, or a documented equivalent, against the approved routes and material interactive states. Before execution, the feature record must identify the tool and version, routes, states, command, environment, and output location.

Serious or critical findings are launch blockers unless resolved or governed through an explicit exception that does not undermine an approved requirement. Retain machine-readable or durable scan output, review false positives, document false negatives found manually, and rerun affected scans after changes.

> Automated accessibility scans do not replace manual keyboard, screen-reader, zoom, reflow, or reduced-motion testing.

## 18. AI Validation Strategy

### Deterministic request validation

Use deterministic tests for payload types, authoritative identifiers, response-length boundaries, meaningful-response rules, invalid requests, and bounded request errors.

### Repository-authoritative reconstruction

Confirm that server-owned prompts, scenarios, simulation state, consequences, pathways, and other authoritative context are reconstructed from validated identifiers rather than trusted client prose.

### Structured output validation

Test output schemas, parsers, missing fields, wrong types, malformed JSON, empty or unsafe values, and bounded learner-facing errors with deterministic fixtures.

### Live-provider validation

Use limited live calls in the deployed preview to verify integration and representative feedback quality. Record the endpoint, model, environment, contract or prompt version, and reviewer without storing secrets.

Across these layers, validation must cover deterministic mocks, malformed-output fixtures, timeouts, network failures, insufficient quota, provider unavailability, no hidden-prompt or chain-of-thought exposure, bounded learner errors, non-diagnostic and non-personalization boundaries, optional AI use, and deterministic Module 4 completion without AI after that feature is implemented.

Live-provider results supplement deterministic tests; they do not replace them.

## 19. AI Feedback Regression Evidence Directory

`docs/validation/ai-feedback-regression/` is the authoritative location for exact AI validation inputs, observed structured outputs, verdicts, reasons, tuning changes, and rerun evidence.

The directory currently contains documentation scaffolding only. When AI regression execution is authorized, it will contain:

- a README defining purpose and format
- dated validation records
- representative test cases without unnecessary sensitive data
- expected feedback characteristics
- observed structured output
- pass/fail verdict and rationale
- model and endpoint
- environment
- prompt or contract version
- reviewer
- defects and retest references

It must not contain API keys, confidential learner data, chain of thought, hidden system prompts, unnecessary full provider payloads, or personal data. It stores validation evidence, not production learner conversations.

## 20. AI Regression Case Categories

AI regression coverage must include, where applicable:

- valid strong response
- valid weak response
- vague but meaningful response
- minimum-length boundary
- maximum-length boundary
- invalid or trivial response
- malformed provider output
- provider timeout
- provider unavailable
- quota or billing failure
- module-specific reasoning
- Reflection-specific reasoning
- future Module 4 validated-pathway critique
- no diagnosis, scoring, or personalization
- no prompt or hidden-reasoning exposure

Cases for unimplemented contracts remain **Not implemented** or **Not yet executable**.

## 21. Persistence Validation Strategy

Validation must cover:

- safe course-progress parsing
- authoritative slug validation
- same-tab and cross-tab synchronization
- schema versions and migrations
- unsupported versions
- malformed JSON and invalid individual records
- record and domain isolation
- blocked storage, security exceptions, and quota failure
- interrupted writes
- stale feedback and exact response association
- partial prompt state
- Module 4 partial and completed state
- Reflection separation
- reset scopes
- cleared data not returning
- open access during failures

Section 5 owns unit and integration tests for shared types, parsers, migrations, persistence services, isolation, synchronization, and reset APIs. Later feature implementation owns browser-level and end-to-end verification of observable behavior. A technical unit-test pass does not replace browser evidence where the criterion concerns learner experience.

## 22. Privacy and Data-Flow Validation

The privacy record must validate:

- current and future data inventories
- observed network requests
- local-storage contents and behavior
- absence of unapproved data fields
- AI disclosure before submission
- Reflection disclosure
- shared-computer and private-browsing notices
- reset-versus-deletion terminology
- storage-failure honesty
- current-versus-future claims
- infrastructure logging review
- OpenAI provider-source record
- actual OpenAI project-setting verification
- the six-month reverification rule
- legal or organizational review status

Evidence must distinguish:

- **Technical verification:** repository behavior, browser storage, network behavior, deployment, and logging
- **Editorial verification:** wording, placement, association, comprehension, and claim scope
- **Provider verification:** official sources and actual project settings
- **Governance verification:** reviewer, date, approval, uncertainty, and next review
- **Legal or organizational review:** formal policy and jurisdictional decisions outside product validation

Repository inspection alone cannot prove deployment logging or provider settings.

## 23. Public-Claim Audit

Before launch approval, audit:

- homepage
- About
- Orientation
- module content
- Reverse Build
- Reflection
- AI controls
- privacy disclosures
- README
- metadata
- architecture documentation
- experience documentation

Classify each material claim as:

- verified current
- approved target
- provider default
- verified deployment-specific
- unknown
- prohibited

Any approved target claim presented publicly as current behavior is a failure. Historical or advisory content must remain qualified and non-authoritative.

## 24. Evidence Record Format

Every criterion-level record must contain:

- criterion identifier
- controlling brief
- feature or route
- implementation version or commit
- environment
- browser and operating system
- viewport and zoom
- assistive technology where applicable
- date
- tester
- validation method
- prerequisites
- expected result
- observed result
- status
- evidence links or file references
- defect identifier
- retest reference
- notes and uncertainty

Use `Not applicable` only with a reason. Empty fields do not constitute complete evidence.

## 25. Feature Validation Records

Create separate records before executing each applicable program:

- `docs/validation/reverse-build-v2-validation-record.md`
- `docs/validation/module-4-simulation-validation-record.md`
- `docs/validation/learner-artifact-and-persistence-validation-record.md`
- `docs/validation/privacy-and-data-flow-validation-record.md`
- dated records under `docs/validation/ai-feedback-regression/`
- `docs/validation/accessibility-validation-record.md`
- `docs/validation/public-claim-audit.md`

These records feed the phase-level and launch-level evidence matrix. They are created when the corresponding implementation and validation work is authorized; listing them here does not imply they exist or contain results.

## 26. Launch-Validation Record

Create `docs/validation/PUBLIC_LAUNCH_VALIDATION_RECORD.md` only after the relevant implementation and validation work has occurred. It must include:

- release, commit, or build identifier
- deployed environment
- validation date range
- total applicable criteria
- passed criteria
- failed criteria
- blocked criteria
- not-applicable criteria approved through governance
- approved exceptions
- unresolved launch blockers
- browser coverage
- mobile and responsive coverage
- accessibility coverage
- AI validation coverage
- persistence and recovery coverage
- privacy and provider-verification status
- public-claim audit status
- legal or organizational review status
- defect summary
- retest summary
- unresolved uncertainty
- final launch recommendation
- final decision
- approver
- approval date

The record summarizes and links criterion-level and feature-level evidence; it never replaces that evidence. Unimplemented criteria cannot be counted as passed. Missing evidence cannot be treated as passing evidence. Blocked criteria remain visibly blocked unless resolved or governed through an approved Section 31 exception. The record must remain incomplete until all required evidence and external verification are available.

## 27. Pass and Failure Definitions

This section is authoritative for criterion execution status. Section 4 and all evidence templates defer to these definitions.

### Not implemented

The required behavior does not exist.

### Not yet executable

The behavior may exist partially or a required test dependency is unavailable, so validation cannot yet be meaningfully performed.

### Ready for validation

The implementation and required environment are available.

### In validation

Execution is underway and no final result has been recorded.

### Passed

Observed behavior matches the criterion and all required evidence is retained.

### Failed

Observed behavior contradicts the criterion or required evidence demonstrates a defect.

### Blocked

Validation cannot be completed because implementation, environment, access, dependency, hardware, provider configuration, or external verification is unavailable.

### Not applicable

Allowed only through an approved product or governance decision explaining why the criterion no longer applies.

### Passed with approved exception

Allowed only through a documented exception satisfying Section 31.

**Superseded through approved governance** is a historical traceability label, not a passing result. It requires a linked replacement criterion and approved change to the controlling brief.

## 28. Defect Severity

Severity describes learner and launch impact, not remediation effort.

### Critical

Examples include learner-data exposure; exposed secrets, API keys, hidden prompts, or private configuration; destructive data corruption; an unsupported or materially false privacy claim; server-authoritative state bypass; an inaccessible core experience with no workaround; or a launch-breaking route or API failure.

Critical defects are launch blocking.

### High

Examples include a failed core acceptance criterion; lost valid learner work; AI feedback associated with the wrong response; Reflection appearing in Reverse Build; acceptance of an invalid Module 4 path; AI submission without required disclosure; or a major keyboard or screen-reader blocker.

High defects are normally launch blocking.

### Medium

Examples include meaningful functional, usability, accessibility, responsive, disclosure, or clarity degradation with a practical workaround; an isolated but material status or recovery ambiguity; or a non-critical current-versus-target claim inconsistency.

An unresolved Medium defect requires an explicit launch decision.

### Low

Examples include a cosmetic issue, minor wording issue, or small presentation inconsistency without material effect on learning, privacy, accessibility, data integrity, or core function.

Low defects are not automatically launch blocking.

The previous S0/S1/S2/S3 terminology is retired for Section 4.5 evidence. Historical records using it must map S0 to Critical, S1 to High, S2 to Medium, and S3 to Low and retain the original label for audit history.

## 29. Retest Rules

Every resolved Critical, High, and Medium defect must be retested. Retesting requires:

- preserving the original failure evidence
- linking retest evidence to the defect and original criterion record
- rerunning the exact failing criterion
- rerunning related regression criteria
- triggering cross-feature regression after shared architecture changes
- rerunning artifact, Reflection, progress, reset, migration, and recovery coverage after persistence changes
- performing manual keyboard and relevant screen-reader retesting after accessibility changes
- reviewing placement, wording, accessibility, data flow, and prohibited claims after privacy or disclosure changes
- rerunning AI regression and provider-verification review after provider, endpoint, model, prompt-contract, or parser changes
- rerunning public-claim auditing after public-copy changes

A retest pass never erases the original failure record. Evidence must identify the new implementation commit or build, validation environment, observed result, related regressions, and defect disposition.

## 30. Evidence History

Validation evidence is append-oriented.

- Failed evidence is never silently overwritten.
- Retest evidence is appended and linked.
- Corrections to factual mistakes use an explicit amendment.
- An amendment identifies the original record, correction, reason, editor, and date.
- Superseded evidence remains identifiable, and the reason for supersession is documented.
- Evidence history preserves the sequence: original result → defect → remediation → retest → final result.
- The final approved result remains linked to its complete supporting history.
- Sensitive data, credentials, hidden prompts, chain of thought, and unnecessary learner content are excluded.

Factual corrections do not rewrite the observed outcome of an earlier implementation. If the earlier evidence was valid at the time but no longer controls, mark it superseded and link the replacement evidence.

## 31. Waiver and Exception Governance

Every exception or waiver must include:

- affected criterion identifier
- controlling brief
- defect identifier
- defect severity
- observed behavior
- learner, accessibility, privacy, security, data-integrity, or launch risk
- reason remediation is deferred
- available workaround
- owner
- remediation or review date
- exception expiry date where applicable
- approver
- approval date
- public-claim impact
- disclosure impact where applicable
- required retest
- conditions that automatically reopen the exception

Exceptions cannot convert unimplemented behavior into passed behavior, conceal unsupported claims, or silently weaken open access, privacy, Reflection separation, deterministic Module 4 behavior, artifact integrity, or accessibility requirements.

Critical privacy, security, data-integrity, unsupported-claim, secret-exposure, and core-accessibility failures cannot receive routine waivers. They require explicit senior governance approval and a documented launch-risk decision. If product meaning changes, update the controlling brief and approval history before superseding the criterion.

## 32. Completion Rules

A feature may be marked complete only when:

- required behavior is implemented
- all applicable criteria are executed
- all required evidence is retained
- all Critical and High defects are resolved
- unresolved Medium defects have an explicit approved launch decision
- blocked criteria have a documented resolution plan and do not conceal missing core validation
- not-applicable criteria have approved governance rationale
- every approved exception satisfies Section 31
- required automated checks pass
- required manual validation is complete
- required keyboard and screen-reader validation is complete
- privacy and provider checks are complete where applicable
- public claims match verified behavior
- target behavior is no longer represented as current unless implemented
- completion is formally approved and recorded

`Not implemented`, `Not yet executable`, and `In validation` are never completion-supporting statuses. `Blocked` never counts as passed. Lint, TypeScript, build success, or documentation completion alone cannot establish feature completion.

## 33. Section and Phase Ownership

### Section 4.5 owns

- validation strategy
- criterion traceability
- evidence formats
- validation environments
- status definitions
- severity
- retest
- exception governance
- completion rules
- launch-validation record requirements

### Section 5 owns

- architecture-level unit and integration tests
- persistence parsing and validation tests
- migration tests
- storage-failure tests
- reset API tests
- progress-store hardening tests

### Section 6 owns

- written-response reference implementation QA
- prompt-artifact persistence
- exact AI-feedback linkage
- stale-feedback invalidation
- Reverse Build connection
- initial privacy-notice integration
- reference accessibility validation

### Reverse Build v2 implementation owns

- execution and evidence for applicable `RB2-*` criteria

### Module 4 implementation owns

- execution and evidence for applicable `M4SIM-*` criteria

### Learner-artifact architecture and rollout own

- execution and evidence for applicable `LAP-*` criteria

### Privacy, deployment, and provider verification own

- technical, editorial, infrastructure, provider, and governance evidence for applicable `PDF-*` criteria

### Legal or organizational review owns

- formal policy and jurisdictional questions outside product validation authority

### Final launch governance owns

- consolidated launch-validation record
- unresolved-risk decision
- final launch approval

## 34. Current Executability Classification

This is an initial range-level classification of all 265 approved criteria. It assigns dependencies and likely methods without marking any criterion passed. A row may name multiple dependencies because implementation, deployed behavior, accessibility, provider verification, and governance evidence can all be required for one criterion.

| Criteria or range | Controlling brief | Current state | Dependency | Likely automated method | Likely manual/external method | Required environment | Required evidence | Owner |
|---|---|---|---|---|---|---|---|---|
| `RB2-SEQ-*`, `RB2-AUTH-*`, `RB2-OPEN-*`, `RB2-HONEST-*` | Reverse Build v2 | Current static behavior partly inspectable; v2 criteria not yet executable | Section 6 and Reverse Build v2 implementation | code inspection, component/E2E tests, claim searches | functional sequence and product-honesty review | local plus deployed preview | criterion records and screenshots | Section 6 / Reverse Build v2 |
| `RB2-ART-*`, `RB2-STATE-*`, `RB2-PRIV-*`, `RB2-FAIL-*` | Reverse Build v2 | Not implemented | Section 5, Section 6, learner-artifact rollout, Reverse Build v2 | artifact fixtures, association, malformed-state, reset, and failure tests | empty/partial/failure and privacy review | unit/integration plus deployed preview | logs, screenshots, and criterion records | Section 5 / Section 6 / Reverse Build v2 |
| `RB2-A11Y-*` | Reverse Build v2 | Not yet executable as a complete family | Reverse Build v2 implementation and deployed preview | automated accessibility scan and deterministic semantics checks | keyboard, VoiceOver, NVDA, zoom, reflow, reduced motion | deployed preview | scans, notes, criterion records, and recordings where appropriate | Reverse Build v2 / accessibility validation |
| `M4SIM-STATE-*`, `M4SIM-D1-*`, `M4SIM-D2-*`, `M4SIM-OUT-*`, `M4SIM-SRV-*` | Module 4 simulation | Not implemented | Module 4 implementation | transition, invalid-path, server-reconstruction, and fixture tests | consequence comprehension and pathway review | unit/API/E2E plus deployed preview | fixtures and criterion records | Module 4 implementation |
| `M4SIM-RAT-*`, `M4SIM-AI-*` | Module 4 simulation | Not implemented | Module 4 implementation, deployed preview, provider access | request/schema/parser, failure-fixture, and association tests | rationale usability and live-provider quality review | test environment plus deployed preview | structured outputs, regression records, and criterion records | Module 4 / AI validation |
| `M4SIM-RB-*`, `M4SIM-PERSIST-*`, `M4SIM-FAIL-*` | Module 4 simulation | Not implemented | Section 5, Reverse Build v2, learner-artifact rollout, Module 4 | artifact, persistence, reset, isolation, and failure tests | partial/recovery and reconstructed-pathway review | integration/E2E plus deployed preview | state evidence, screenshots, and criterion records | Section 5 / Module 4 / Reverse Build v2 |
| `M4SIM-A11Y-*`, `M4SIM-HONEST-*` | Module 4 simulation | Not implemented | Module 4 implementation, disclosure UI, deployed preview | scans, semantics checks, prohibited-claim searches | keyboard, screen reader, mobile, zoom, reduced motion, disclosure and claim audit | deployed preview | scan output, manual evidence, and criterion records | Module 4 / accessibility / privacy |
| `LAP-MODEL-*`, `LAP-WRITE-*`, `LAP-AI-*`, `LAP-M4-*`, `LAP-RB-*`, `LAP-REF-*` | Learner artifact and persistence | Not implemented | Section 5 and Section 6; Module 4 and Reverse Build dependencies where applicable | type/parser, association, stale-feedback, domain-separation, and integration tests | learner-state and boundary walkthroughs | local unit/integration plus deployed preview | test logs and criterion records | Section 5 / Section 6 / later feature owners |
| `LAP-RESET-*`, `LAP-PROG-*`, `LAP-VER-*`, `LAP-FAIL-*` | Learner artifact and persistence | Not implemented except current unhardened progress behavior | Section 5 and learner-artifact rollout | reset, parsing, migration, corruption, storage-failure, and synchronization tests | destructive-action, recovery, and failure-message review | local fixtures plus deployed browser states | logs, screenshots, and criterion records | Section 5 / rollout |
| `LAP-PRIV-*`, `LAP-A11Y-*`, `LAP-HONEST-*` | Learner artifact and persistence | Not implemented | learner-artifact rollout, disclosure UI, deployed preview | minimization inspection, scans, and claim searches | keyboard, screen reader, mobile/zoom, shared-computer and product-honesty review | deployed preview | storage/network inspection, manual evidence, and criterion records | rollout / privacy / accessibility |
| `PDF-DATA-*`, `PDF-APP-*` | Privacy and data flow | Documentation/governance testable now; deployment claims blocked | deployed preview and logging/infrastructure verification | repository/data-flow inspection and network tests | editorial, infrastructure, and governance review | repository plus deployed preview | inventory, logging, and criterion evidence | privacy / deployment verification |
| `PDF-LOCAL-*`, `PDF-RESET-*`, `PDF-FAIL-*` | Privacy and data flow | Current progress wording partly testable; target UI not implemented | Section 5, Section 6, disclosure UI, deployed preview | storage, reset, failure, and prohibited-claim tests | notice placement, reset-scope, private/shared-browser and failure-honesty review | deployed preview | screenshots, network/storage evidence, and criterion records | Section 6 / privacy rollout |
| `PDF-AI-*`, `PDF-REF-*` | Privacy and data flow | Current transmission flow inspectable; required notices not implemented | Section 6, disclosure UI, deployed preview | network inspection, association checks, and claim searches | notice comprehension, Reflection privacy, keyboard and screen-reader review | deployed preview with AI enabled | network evidence, manual evidence, and criterion records | Section 6 / privacy rollout |
| `PDF-PROV-*` | Privacy and data flow | Provider-default sources testable; deployment settings blocked | OpenAI project-setting verification and pre-launch reverification | configuration evidence checks where available | authorized provider/project and governance review | production-equivalent OpenAI project | dated official sources, setting evidence, and criterion records | provider/project verification |
| `PDF-MIN-*` | Privacy and data flow | Repository behavior partly inspectable; target flows not implemented | Section 5, Section 6, Module 4, deployed preview | payload, server-authority, persistence-field, and claim tests | data-minimization review | repository plus deployed preview | network/storage evidence and criterion records | architecture / privacy |
| `PDF-A11Y-*` | Privacy and data flow | Not implemented | disclosure UI and deployed preview | automated scan and semantic association checks | keyboard, VoiceOver, NVDA, mobile, zoom, focus and announcement review | deployed preview | scan output, manual evidence, and criterion records | privacy rollout / accessibility |
| `PDF-HONEST-*` | Privacy and data flow | Documentation/governance testable now; deployment-specific portions blocked | disclosure UI, claim audit, deployment verification, and legal or organizational review where required | prohibited-claim search | editorial, provider, deployment, and legal-status review | repository plus deployed preview and authorized external review | claim matrix, verification evidence, and approval record | privacy / final governance |

Most `RB2-*`, `M4SIM-*`, and `LAP-*` criteria are not currently executable because their required product behavior is not implemented. Disclosure-UI-dependent `PDF-*` criteria are likewise not executable until notices and controls exist. Provider, infrastructure, and legal criteria remain blocked until authorized external verification is available.

## 35. Non-Goals

Section 4.5 corrective remediation does not:

- execute all 265 criteria
- implement automated tests
- configure CI
- certify WCAG conformance
- certify privacy or legal compliance
- approve OpenAI provider or project settings
- implement Reverse Build v2
- implement Module 4
- implement learner-artifact persistence
- implement disclosure UI
- resolve current product defects
- create feature evidence records before the corresponding work is authorized
- mark any acceptance criterion passed
- update the launch checklist
- mark Phase 4 complete

## Appendix A. Section 4.5 Requirement Coverage

| Section 4.5 requirement | Controlling coverage |
|---|---|
| Define which acceptance checks are automated. | Sections 5–6 and 34 |
| Define which acceptance checks require manual review. | Sections 5, 7, 12–16, 22–23, and 34 |
| Define exact commands, environments, routes, browsers, viewport sizes, and assistive-technology checks. | Sections 8–17 |
| Define pass, fail, defect-severity, evidence, and retest rules. | Sections 24 and 27–32 |
| Define the AI-feedback regression evidence location and contents. | Sections 18–20 and the directory README |
| Define the launch-validation record before testing begins. | Sections 25–26 |
| Confirm automated accessibility scanning does not close the accessibility gate. | Sections 15–17 and 32 |

## Appendix B. Approval and Handoff

Before Section 4.5 can be marked complete, Bradley must approve this brief and confirm that it addresses all seven checklist requirements. Approval establishes the validation contract only.

After approval:

1. implementation work creates tests and feature records only when authorized by the relevant checklist phase
2. criteria move from **Not implemented** to executable statuses only when their prerequisites exist
3. full acceptance testing occurs in the checklist's approved validation phase
4. `docs/validation/PUBLIC_LAUNCH_VALIDATION_RECORD.md` is created only after the relevant implementation exists and before formal launch validation is concluded
5. Bradley makes completion and launch decisions from retained evidence

## Appendix C. Documentation Hierarchy

`docs/README.md` identifies this brief as the controlling Section 4.5 validation and evidence specification after Bradley approval. `docs/validation/ai-feedback-regression/README.md` controls the future AI regression evidence format but is not evidence that regression execution occurred. Neither source replaces the feature acceptance criteria in the four approved implementation briefs.

## Appendix D. Approved-Boundary Alignment

This brief is compatible with:

- `REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md`
- `MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md`
- `LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md`
- `PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md`

Validation must preserve:

- Design Practice → AI Review → Reverse Build → Reflection
- strict Reflection exclusion from Reverse Build
- deterministic Module 4 behavior independent of AI
- one current artifact per module with no attempt history
- separate course-progress, module-artifact, and Reflection domains
- local-browser persistence without accounts or cloud synchronization
- open access
- privacy, provider-verification, documentation, and evidence-governance boundaries

Section 4.5 governs validation and evidence. It does not silently change product meaning in an approved brief.

## Appendix E. Section 4.5 Acceptance Criteria

### Inventory and mapping

- **VE-INV-01:** The validation brief records exactly 265 unique approved feature criteria: 36 `RB2-*`, 69 `M4SIM-*`, 80 `LAP-*`, and 80 `PDF-*`.
- **VE-INV-02:** Every approved criterion family is linked to its controlling brief without redefining product meaning.
- **VE-MAP-01:** Every criterion or meaningful criterion range has an initial automated, manual, both, external/governance, or not-yet-executable classification.
- **VE-MAP-02:** A planned automated check is not represented as an existing test or passing evidence.

### Environments and route coverage

- **VE-ENV-01:** Local, production-build, production-equivalent preview, and public-production environments have distinct approved purposes and evidence fields.
- **VE-ROUTE-01:** The validation contract lists every current public page, module route, and AI API route requiring launch coverage.
- **VE-BROWSER-01:** The browser matrix includes Chrome, Safari, Firefox, Edge, iOS Safari, and Android Chrome under a recorded current-version policy.
- **VE-VIEW-01:** The contract specifies exact baseline viewport sizes, 200% browser zoom, text-only zoom where supported, and reduced-motion validation.

### Accessibility

- **VE-A11Y-01:** Automated accessibility scanning is explicitly supplemental and cannot close the accessibility gate alone.
- **VE-A11Y-02:** Manual keyboard validation has defined tasks, evidence fields, and retest requirements.
- **VE-A11Y-03:** The screen-reader matrix includes VoiceOver on macOS and iOS plus NVDA on Windows, with unavailable required environments recorded as blocked.

### AI, persistence, privacy, and claims

- **VE-AI-01:** AI validation distinguishes deterministic request tests, repository-authoritative reconstruction, structured-output validation, and limited live-provider review.
- **VE-AI-02:** The AI regression directory standard defines non-sensitive case evidence, model/endpoint context, verdicts, defects, and reruns without storing production learner conversations or hidden prompts.
- **VE-PERSIST-01:** The validation strategy covers parsing, versions, migration, isolation, storage failures, stale feedback, reset scopes, domain separation, and cleared-data behavior.
- **VE-PRIV-01:** Privacy validation distinguishes technical, editorial, provider, governance, and legal or organizational evidence.
- **VE-PRIV-02:** Provider defaults are never accepted as deployment-specific facts without verified project-setting evidence.
- **VE-CLAIM-01:** Target behavior presented as current, or any prohibited unsupported claim, produces a failed validation result.

### Evidence, defects, and completion

- **VE-EVID-01:** Every criterion-level record contains the required source, implementation, environment, method, expected, observed, status, evidence, defect, retest, and uncertainty fields.
- **VE-EVID-02:** Evidence history is append-oriented and preserves failure, remediation, retest, amendment, and supersession links.
- **VE-SEV-01:** Defects use only the Critical, High, Medium, and Low severity model defined in Section 28, with historical labels mapped explicitly.
- **VE-RETEST-01:** Every resolved Critical, High, and Medium defect is retested with original failure evidence retained and related regressions rerun.
- **VE-EXC-01:** Every exception contains the complete Section 31 risk, ownership, expiry, claim-impact, approval, and retest record.
- **VE-LAUNCH-01:** The launch-validation record contains every field required by Section 26 and does not count unimplemented, missing-evidence, or blocked criteria as passed.
- **VE-STATUS-01:** Criterion statuses use the authoritative Section 27 definitions without a conflicting parallel vocabulary.
- **VE-COMP-01:** A feature cannot be completed while applicable criteria remain Not implemented, Not yet executable, or In validation.
- **VE-COMP-02:** Lint, type checking, build success, or documentation completion alone cannot establish feature completion.

### Governance integrity

- **VE-ALIGN-01:** Validation evidence preserves every approved boundary listed in Appendix D.
- **VE-HIER-01:** Documentation hierarchy identifies the controlling validation brief and regression evidence standard without implying criteria have passed.
- **VE-GOV-01:** No WCAG, privacy, provider-setting, or legal-compliance claim is approved without the evidence and authority required by this brief.

These `VE-*` criteria define the testability of Section 4.5 governance itself. Their existence does not mean they have been executed or passed.

## Appendix F. Corrective Documentation-Pass Validation

The corrective pass must verify without marking any acceptance criterion passed:

- seven-of-seven Section 4.5 requirement coverage
- exactly 35 numbered primary sections
- 265 feature-criterion definitions and cross-family uniqueness
- automated/manual mapping coverage
- browser, viewport, and assistive-technology coverage
- AI regression directory definition
- evidence-record schema
- severity, retest, history, exception, and completion rules
- current-executability classification
- `VE-*` identifier count and uniqueness
- approved-brief compatibility
- documentation hierarchy
- file-scope isolation
