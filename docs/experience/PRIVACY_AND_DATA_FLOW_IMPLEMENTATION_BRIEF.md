# Privacy and Data-Flow Implementation Brief

## Document Status and Authority

- **Status:** Proposed for Bradley approval under Section 4.4 of `docs/strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`
- **Current implementation status:** Documentation only; the disclosures and controls defined here are not implemented
- **Authority after approval:** Controlling Section 4.4 product-disclosure and data-flow specification

This brief defines disclosure meaning, data-flow boundaries, retention classifications, provider-verification rules, prohibited claims, accessibility requirements, and acceptance criteria. It does not authorize application implementation and is not a complete legal privacy policy.

`REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md`, `MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md`, and `LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md` remain controlling within their approved scopes. This brief supplies the privacy and disclosure contract they defer. The public launch-readiness checklist controls execution order. Claude, Grok, and other external reviews remain advisory evidence only.

This document distinguishes:

- **Verified current repository behavior:** behavior supported by code inspection
- **Approved future behavior:** behavior approved in earlier briefs but not implemented
- **Deployment-specific facts:** facts requiring evidence from the deployed environment
- **Externally governed provider behavior:** provider terms and defaults that may change
- **Learner-facing disclosure requirements:** meaning and placement later implementation must provide
- **Legal or organizational questions:** matters outside this product brief's authority
- **Prohibited claims:** statements that cannot be made without the required evidence

## 1. Purpose and Current Disclosure Gap

Course-completion progress is currently stored in browser `localStorage`. Current Design Practice responses, Reflection responses, and AI feedback are held in React component state and are not locally persisted. Design Practice and Reflection text leave the browser only when the learner requests AI feedback.

For an AI request, the application server validates learner input and identifiers, reconstructs relevant repository-owned context, and sends the required request to OpenAI. Structured feedback returns through the application server and is held in component state. No current repository implementation writes submitted learner text or AI feedback to a learner database or other server-side artifact store.

Repository inspection cannot establish deployed hosting logs, runtime or infrastructure logs, observability behavior, request-body capture, or OpenAI organization and project settings. Those facts remain unverified until deployment-specific evidence is recorded.

No adequate learner-facing disclosure currently explains local course-progress persistence or AI transmission and provider processing. Existing internal documentation is not a substitute for disclosure at the relevant learner moment. Until implementation occurs, the product must preserve its current restraint against unsupported privacy, anonymity, deletion, training, or retention claims.

## 2. Disclosure Principles

Future of ID disclosure must:

- appear before or at the moment the described behavior matters
- use concise, plain language
- distinguish browser-local storage from external AI transmission
- distinguish Future of ID repository behavior from hosting, infrastructure, and provider behavior
- distinguish verified current behavior from approved but unimplemented behavior
- state unknown or deployment-dependent behavior honestly
- avoid legal guarantees not supported by applicable review
- minimize learner data and explain meaningful boundaries
- preserve optional AI use wherever the approved experience permits it
- avoid dark patterns or forced acknowledgment unless later legal, organizational, or usability review requires one
- remain available and accessible rather than relying only on transient messages

Disclosure should explain product meaning without exposing secrets, raw prompts, chain of thought, storage keys, stack traces, or unnecessary implementation detail.

## 3. Current Data Inventory

The following inventory is authoritative for current repository behavior. It does not describe approved future artifact fields as currently stored.

| Data | Source | Current location | Persistence | Leaves the browser | Clearing or loss behavior |
|---|---|---|---|---|---|
| Completed module and Orientation identifiers | Learner completion action and repository module identity | Browser `localStorage` under the current course-progress implementation | Persists until changed or browser storage is cleared | No current repository code transmits it | Browser controls may remove it; no in-product progress reset exists |
| Design Practice response | Learner-authored text | React component state | Not locally persisted | Only when the learner requests AI feedback | Normally lost on navigation, refresh, component unmount, or prompt/scenario change |
| Design Practice identifiers | Repository and interaction state | Browser request, application validation, repository lookup | No approved learner-record persistence | Required identifiers reach the application server; selected context is used for provider processing | Request-scoped |
| Design Practice context | Repository-authored scenario, prompt, system instruction, and review criteria | Reconstructed by application server | Repository source persists; request copy is not a learner artifact | Sent to OpenAI with learner text as required for feedback | Request-scoped subject to unverified infrastructure and provider handling |
| Reflection response | Learner-authored text | React component state | Not locally persisted | When the learner requests AI feedback | Normally lost on navigation, refresh, or component unmount |
| Reflection context | Module identifier, module title, and repository-authored Reflection prompt | Reconstructed by application server | Repository source persists; request copy is not a learner artifact | Sent to OpenAI with learner text as feedback context | Request-scoped subject to unverified infrastructure and provider handling |
| AI feedback | OpenAI-generated structured content | Application response and React component state | No current browser or repository server persistence is visible | Returns from OpenAI through the application server | Normally lost on navigation, refresh, unmount, or relevant response change |
| Application status and errors | Application and provider response handling | Component state or HTTP response | No approved persistent learner record | Request and response status crosses the application boundary | Cleared by retry, state change, or navigation |
| Logging and infrastructure metadata | Hosting, platform, security, or observability systems | Not established by repository code | Unverified | Deployment-dependent | Retention and deletion are unverified |

No explicit request-body analytics, application logging, learner analytics profile, attempt history, diagnostic record, or longitudinal learner record was found in current repository code.

## 4. Approved Future Data Inventory

The following target is approved by Section 4.3 but remains unimplemented. It must not be described as current retention until implementation and validation pass.

### Course progress

The course-progress domain contains completion state only. It does not establish that Design Practice, AI Review, Reverse Build evidence, Reflection, mastery, or capability growth exists.

### Module learner artifacts

A future browser-local module artifact may contain:

- the latest written Design Practice response for each authoritative prompt
- AI Review state and feedback associated with the exact response reviewed
- Module 4 validated decision, option, consequence, pathway, final-state, and rationale identifiers or fields approved by the Module 4 brief
- distinct original and revised rationale only where explicitly approved
- bounded status, schema-version, and technically necessary metadata

The target stores one current artifact per module and no attempt history, portfolio, longitudinal record, analytics profile, diagnostic label, or cloud-synchronization record.

### Reflection

A future separate browser-local Reflection domain may contain:

- the current Reflection response
- AI feedback associated with the exact current Reflection response
- bounded status, version, clearing, and migration information

Reflection creates no attempt history, remains separately clearable, must not automatically resurface elsewhere, and is strictly excluded from Reverse Build.

## 5. Current Data-Flow Contract

### Course-progress flow

1. The learner marks Orientation or a module complete.
2. The application writes the authoritative identifier to browser `localStorage`.
3. Browser events update course-progress displays in the same tab and other tabs where supported.
4. No current repository behavior sends course progress to an application server.

### Design Practice AI flow

1. The learner enters text in the browser.
2. The learner explicitly requests AI feedback.
3. The browser sends learner text and required identifiers to a Future of ID API route.
4. The application validates the request and identifiers.
5. The server reconstructs repository-owned scenario and review context.
6. The application sends the required learner text and context to OpenAI.
7. OpenAI returns structured feedback.
8. The application validates or parses the response and sends feedback to the browser.
9. Current feedback remains component-local.

### Reflection AI flow

1. The learner enters Reflection text in the browser.
2. The learner explicitly requests AI feedback.
3. The browser sends the module identifier and learner response to a Future of ID API route.
4. The application validates the request.
5. The server reconstructs the repository-owned module title and Reflection prompt.
6. The application sends the required learner text and context to OpenAI.
7. OpenAI returns structured feedback.
8. The application returns feedback to the browser, where it remains component-local.

AI-submitted text does not remain only in the browser. Local storage and AI processing are separate concepts. These flows introduce no learner account, cloud artifact store, or cross-device synchronization. Repository code does not currently implement server-side learner-submission persistence, but application code alone cannot establish deployed logging behavior.

## 6. Future Data-Flow Contract

### Future module-artifact flow

- Approved module work is stored locally in the current browser.
- Latest-only replacement applies within each approved prompt or activity scope.
- Local saving does not transmit learner text by itself.
- Optional AI Review transmits the minimum required learner text and validated identifiers or state.
- Browser-local retention and provider processing have different retention and clearing boundaries.
- Local clearing must not be presented as provider-side deletion.

### Future Reflection flow

- Reflection is stored in a separate local domain only after the learner reaches Reflection.
- Reflection remains inaccessible to Reverse Build.
- Reflection text leaves the browser when the learner requests AI feedback.
- Local Reflection clearing affects the local Reflection domain and does not establish deletion of previously transmitted data.

### Future Module 4 flow

- Deterministic decisions, consequences, pathways, and final states remain repository-authoritative.
- The server validates identifiers and reconstructs authoritative state.
- Only minimum validated state and learner rationale are transmitted for optional AI critique.
- AI does not select, alter, or invalidate deterministic branch state.
- Local simulation persistence and provider AI processing remain separate data events.

## 7. Local Browser-Persistence Disclosure

The current course-progress disclosure must tell learners that:

- course-completion progress is saved in the current browser
- no account is required
- progress is not backed up to a learner account
- progress is not synchronized across devices or browser profiles
- clearing browser storage may remove progress
- private or incognito browsing may shorten or prevent retention
- browser settings, security restrictions, or unavailable storage may prevent saving
- no in-product progress-reset control currently exists
- progress may remain visible to another person using the same shared browser profile until browser data is cleared

After learner-artifact implementation, expanded disclosure must accurately state that current Design Practice work and associated AI feedback, Module 4 simulation state, and separate Reflection work may be saved locally. Locally saved work may remain until replaced, reset, cleared, removed through browser controls, or rejected under approved version-handling rules. No permanent backup, recovery, or cross-device access may be promised. Scoped clearing controls must exist before those controls are claimed.

Final UI copy is implementation work. The required meaning above is controlling.

## 8. AI-Processing Disclosure

A disclosure must be available before or at each learner AI-submission action. It must communicate that:

- requesting AI feedback sends learner-entered text outside the browser
- the text is sent first to a Future of ID application server
- relevant repository-owned context is added for the feedback task
- OpenAI processes the request
- AI Review is optional wherever the approved experience permits it
- learners should not enter confidential, proprietary, regulated, personally identifying, or sensitive workplace information
- AI feedback may be incomplete or incorrect and requires professional judgment
- AI feedback does not score mastery, diagnose capability gaps, or personalize the learner's professional pathway
- hidden prompts and internal model reasoning are not displayed
- provider handling depends on current verified provider terms and deployment settings

The notice must not imply that all processing remains on the learner's device or that local clearing affects provider handling.

## 9. Disclosure Timing and Placement

### General local-storage disclosure

The local-storage explanation must remain available through an appropriate persistent public or product-information surface.

### First-use or contextual persistence disclosure

When future persisted learner artifacts are first introduced or activated, a contextual disclosure must explain the local scope before the product represents the work as saved.

### Design Practice AI disclosure

The AI-processing notice must be programmatically associated with the relevant response input or AI-submission control and available before submission.

### Reflection disclosure

Reflection requires:

- a concise persistent notice near the Reflection input
- an AI-processing notice adjacent to the AI-submission action
- guidance not to enter confidential or sensitive workplace information
- future clearing information near the relevant Reflection controls

### Reset and clearing disclosure

Every reset or clear action must name what it affects and what it preserves. A blocking modal is not required unless later legal, organizational, usability, or accessibility review approves that pattern.

## 10. Reflection-Specific Privacy Contract

Reflection may contain personal professional observations and therefore receives stronger contextual disclosure than ordinary practice text.

- Reflection remains separate from course progress and module learner artifacts.
- Reflection remains inaccessible to Reverse Build.
- Reflection must not automatically resurface on the dashboard, in another module, in Reverse Build, or in unrelated product areas.
- Learners must be advised not to include confidential employer, client, colleague, patient, student, customer, or personally identifying information.
- Requesting Reflection AI feedback transmits Reflection text to the application server and OpenAI.
- Current Reflection is not persisted by repository application code.
- Approved future Reflection persistence is browser-local and remains unimplemented.
- Future Reflection requires a separate clearing control.
- Clearing local Reflection must not be described as deleting previously transmitted external data.
- Shared-computer exposure must be disclosed when local Reflection persistence exists.

## 11. What the Future of ID Application Retains

Based on current repository behavior, the product may accurately state, with appropriate qualification:

- course-completion identifiers are persisted in browser local storage
- current Design Practice responses, Reflection responses, and AI feedback are not persisted by the browser application
- no learner account, authentication system, or cloud learner-artifact store is implemented
- repository application code does not write submitted learner responses or AI feedback to a learner database
- repository application code does not implement attempt history, analytics profiles, diagnostic records, or longitudinal learner tracking

Required qualifications:

- deployed hosting, runtime, infrastructure, platform, security, and observability logs are not established by repository code alone
- “not stored in a learner database” does not mean that no transient copy, log, or metadata exists anywhere
- Future of ID must not claim to retain absolutely nothing without deployment-level verification
- approved future retention statements remain labeled as future until corresponding behavior is implemented and validated

## 12. Application Logging and Infrastructure Verification

Before public launch, deployment verification must examine:

- hosting provider and environment
- runtime, edge, access, and function logs
- request and error logging
- security monitoring and observability tools
- analytics tools
- whether request bodies or learner text are captured
- log and metadata retention
- access controls
- deletion, expiration, or rotation behavior

Absence of explicit repository logging is not proof that deployed infrastructure logs nothing. The verification record must identify the date, environment, reviewer, evidence source, findings, and unresolved uncertainty. Learner-facing language should not overdescribe internal implementation, but it must match verified deployment behavior.

This documentation pass does not configure or audit external infrastructure.

## 13. External AI-Provider Verification Record

### Current record

- **Provider:** OpenAI
- **Current repository endpoint:** `POST https://api.openai.com/v1/chat/completions`
- **Current repository model:** `gpt-4o-mini`
- **Verification date:** July 13, 2026
- **Approved learner-facing wording status:** Not approved; deployment-specific settings remain unverified

### Official sources reviewed

1. **Data controls in the OpenAI platform:** `https://developers.openai.com/api/docs/guides/your-data`
2. **How your data is used to improve model performance:** `https://help.openai.com/en/articles/5722486-api-data-usage-policies`
3. **Sharing feedback, evaluation and fine-tuning data, and API inputs and outputs with OpenAI:** `https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai`

### Provider defaults supported by those sources on the verification date

Subject to OpenAI's current terms, documented exceptions, and future change:

- OpenAI states that API inputs and outputs are not used for model training by default unless an API organization explicitly opts in to share data.
- OpenAI states that default abuse-monitoring logs may contain customer content such as prompts and responses and are generally retained for up to 30 days, subject to stated exceptions.
- OpenAI documents endpoint-specific application-state behavior and organization or project retention controls.
- OpenAI documents that Zero Data Retention and Modified Abuse Monitoring require eligibility or approval and explicit configuration.

These are provider-default statements, not verified facts about the Future of ID deployment. The record must be reverified before launch.

## 14. Deployment-Specific Provider Settings

Before categorical provider wording is approved, an authorized reviewer must verify:

- the OpenAI organization and project used by Future of ID
- whether input/output sharing or model-improvement opt-in is enabled
- whether default abuse monitoring, Modified Abuse Monitoring, or Zero Data Retention applies
- whether organization defaults or project overrides control the deployed API key
- whether the endpoint and model have documented retention exceptions
- whether prompt caching or any additional OpenAI feature introduces relevant application-state behavior
- who performed the verification and when
- what evidence was retained
- the exact learner-facing wording approved from those facts

No repository evidence currently establishes these private project settings. Until verification is complete, Future of ID must not claim that training is disabled for this deployment, that Zero Data Retention applies, that provider retention is a particular duration, or that submitted content is immediately deleted.

## 15. Provider-Language Reverification Policy

Provider wording must be checked:

- immediately before public launch
- whenever the provider, endpoint, model, organization, project, API key scope, or data-control setting changes
- whenever official provider data-control terms materially change
- whenever Future of ID changes its AI architecture
- at least every six months after launch while external AI processing remains available

Each verification record must contain:

- verification date
- official source title and URL
- endpoint and model
- organization and project setting checked
- reviewer
- evidence location
- approved wording
- unresolved uncertainty
- next scheduled review date

If verification expires or relevant facts change, categorical provider language must be withdrawn or qualified until reverified.

## 16. Retention Classification

Every retention statement must belong to one of these classes:

### Verified current application behavior

Examples include local course-progress persistence, component-local learner text and feedback, and absence of repository database writes for learner submissions.

### Approved future local behavior

Examples include latest-only module artifacts, separate Reflection persistence, schema/version handling, and scoped clearing. These are not current claims.

### Verified provider defaults

These are dated statements from official provider sources. They are not deployment guarantees.

### Verified deployment configuration

This class requires evidence from the actual deployed hosting environment and OpenAI organization or project. No such record is currently available.

### Unknown or unverified

Current examples include hosting request-body logs, observability retention, the deployed OpenAI project's data controls, and provider deletion behavior for this deployment.

The product must not collapse these categories into a single broad statement such as “we do not store your data.”

## 17. Reset, Clearing, and Deletion Language

Use the following meanings:

- **Reset active practice:** clears only the approved active local prompt, scenario, or simulation artifact and associated local AI state.
- **Clear module work:** clears approved local practice and simulation data for one module only.
- **Clear Reflection:** clears approved local Reflection data only.
- **Reset course progress:** clears local completion markers only.
- **Clear browser storage:** may remove locally stored Future of ID data according to browser controls.
- **Delete transmitted AI data:** must not be implied by a local action.
- **Delete all Future of ID data:** must not be claimed unless every relevant local, application, infrastructure, and provider system is in verified scope.

Use “clear local work” instead of “delete everything” when only browser-local data is affected. Destructive actions must identify preserved domains, require confirmation where meaningful saved work exists, report failure honestly, and prevent successfully cleared local records from silently reappearing.

## 18. Shared-Computer and Private-Browsing Disclosure

Disclosure must explain that:

- locally saved progress or future learner work may be visible to another person using the same browser profile
- learners should clear local work when using shared or public computers once the relevant controls exist
- private or incognito mode may not retain work after the session
- browser storage controls may remove work
- Future of ID cannot recover locally cleared data under the current no-account architecture
- no account-based backup exists

The warning should be proportionate and available with persistence and clearing information. It must not imply that shared-computer privacy is automatic.

## 19. Storage-Failure Disclosure

Learner communication must address blocked storage, browser security restrictions, quota limits, failed writes, malformed or unreadable data, and failed supported migrations.

- Never show a saved state unless the relevant write succeeds.
- Explain when work may remain available only during the current session.
- Preserve open access and usable in-session learning where possible.
- Provide the narrowest safe recovery or reset guidance.
- Distinguish unreadable or incompatible work from no work where feasible.
- Use accessible status communication that remains available long enough to understand and act on.
- Do not expose raw JSON, storage-key names, stack traces, browser exception details, or internal migration data.

## 20. AI Failure and Operational Error Language

AI failure communication must:

- explain that AI feedback is unavailable
- preserve learner-entered work where possible
- preserve deterministic Module 4 state when applicable
- provide bounded retry or continue-without-AI guidance
- avoid exposing API keys, billing, funded-project status, provider account status, quota internals, stack traces, or provider response bodies
- avoid implying that the learner caused an operational failure
- keep AI failure distinct from local-save failure

The current insufficient-quota message can expose API-key, billing, and funded-project details to the learner. Later implementation must replace that learner-visible behavior with bounded product language while preserving useful operational diagnostics only in an appropriately controlled channel.

## 21. Privacy and Data-Minimization Rules

Store and transmit only approved minimum data required by the learning experience.

Do not unnecessarily store or transmit:

- hidden prompts or chain of thought
- provider internals or API keys
- raw server or provider errors
- unrelated repository content
- attempt histories or cross-module behavior profiles
- demographic, identity, or account data
- analytics histories
- diagnostic, mastery, or capability labels
- Reflection content outside the approved Reflection flow

Repository-owned scenarios, prompts, pathways, and other authoritative context must be reconstructed server-side rather than accepted from the client as authoritative. AI feedback must remain bounded to critique and must not diagnose, score, personalize, recommend a capability pathway, or alter deterministic Module 4 state.

## 22. Prohibited Claims

Unless the exact statement is supported by current implementation and the required verification record, Future of ID must not say:

- “Your work always stays in your browser.”
- “Your response never leaves your device.”
- “Your data is completely private.”
- “Your response is anonymous.”
- “Future of ID stores nothing.”
- “OpenAI does not retain your data.”
- “OpenAI immediately deletes your data.”
- “OpenAI will never use your data for training.”
- “This deployment uses Zero Data Retention.”
- “Clearing local work deletes provider data.”
- “Your work is permanently deleted.”
- “Your work is backed up.”
- “Your work syncs across devices.”
- “Your data is encrypted” without verified scope and evidence.
- “The product is legally compliant” without applicable review.
- “AI feedback is confidential” without accurate qualification.

Carefully qualified statements are permitted only when they match observable behavior, the current evidence class, and the latest verification record.

## 23. Supported Product Statements

Subject to final implementation verification, current supportable meanings are:

- course progress is saved in the current browser
- no learner account is required
- current Design Practice and Reflection responses are sent for AI processing only when the learner requests feedback
- Future of ID repository application code currently does not persist learner responses or AI feedback in a learner database
- AI feedback is optional in the approved experiences
- AI feedback does not score mastery, diagnose capability gaps, or personalize the learner's professional pathway
- clearing local work affects local browser data only

The following statements become supportable only after implementation and validation:

- module learner work is saved locally
- Reflection is saved locally in a separate domain
- saved learner work reconnects with Reverse Build
- scoped reset and clearing controls are available

Provider handling statements additionally require a current provider-source record and deployment-specific verification.

## 24. Accessibility of Disclosures

Later implementation and validation must prove that:

- notices use plain language and appropriate semantic headings or grouping
- the AI-processing notice is programmatically associated with the relevant input and submission control
- disclosure and clearing controls are keyboard operable
- screen readers can identify notice purpose, affected data, and action scope
- essential notices are available without hover and are not toast-only
- disclosure content reflows at a 320 CSS-pixel viewport, 200% browser zoom, and 200% text-only zoom without horizontal page scrolling
- status meaning does not rely on color alone
- focus remains predictable after confirmation, cancellation, failure, reset, or clearing
- save, failure, reset, and clearing results are announced programmatically
- destructive controls have accessible names that identify their exact scope
- approved provider or privacy links have descriptive accessible names
- no learner is forced through an inaccessible modal

This brief does not claim that these notices or controls currently exist.

## 25. Product Disclosure Versus Legal Policy

### This brief governs

- product data inventory
- current and approved future data flows
- product disclosure meaning
- timing and placement principles
- provider-verification rules
- prohibited claims
- disclosure accessibility
- binary acceptance criteria

### Separate legal or organizational review governs

- whether a formal public privacy policy is required
- jurisdiction-specific obligations
- age or audience requirements
- legal bases and consent terminology
- controller, processor, or service-provider terminology
- privacy contact information and rights workflows
- formal policy effective dates
- contractual commitments
- whether external provider terms should be linked directly

This brief makes no claim of legal compliance and does not replace legal advice or organizational policy review.

## 26. Documentation and Evidence Record

Launch evidence must include:

- the approved current and future data inventory
- current and future flow review
- screenshots or implementation references for disclosure placement
- dated official provider-source record
- deployment-specific OpenAI setting verification
- application and infrastructure logging review
- accessibility validation
- public and internal claim audit
- legal or organizational review status
- approval date, approver, and unresolved items

Section 4.5 controls the exact evidence format, validation environments, defect handling, and retest requirements.

## 27. Public and Internal Claim Governance

Before launch, review:

- root README and documentation hub
- landing and About content
- Orientation
- Design Practice and Reflection copy
- AI controls and error states
- progress, save, reset, and clearing controls
- public metadata
- implementation and architecture documentation
- any public privacy or policy surface

Classify every material claim as:

- verified current
- approved target
- verified provider default
- verified deployment-specific
- unknown or unverified
- prohibited

Approved target behavior must not be presented as current. Historical and advisory material must not override current authoritative sources.

## 28. Acceptance Criteria

Every criterion below has a binary pass or fail result. Evidence must identify the tested environment, initial state, learner action, observed application and disclosure behavior, relevant verification record, accessibility context, and reviewer.

### Data inventory

- **PDF-DATA-01:** Every current learner-related data category created, entered, displayed, stored, or transmitted by repository code appears in the approved current data inventory.
- **PDF-DATA-02:** Every future learner-artifact category is labeled unimplemented until corresponding implementation and validation pass.
- **PDF-DATA-03:** Current and future data fields are not combined in a way that implies future retention exists today.
- **PDF-DATA-04:** Data source, location, persistence, transmission trigger, and clearing or loss behavior are recorded for each current category.
- **PDF-DATA-05:** Hosting, infrastructure, observability, and provider handling not proven by repository code are labeled unverified.
- **PDF-DATA-06:** Course progress, module artifacts, and Reflection remain distinguishable data domains.

### Local persistence

- **PDF-LOCAL-01:** Learner-facing information accurately states that current course progress is stored in the current browser.
- **PDF-LOCAL-02:** No current disclosure claims that Design Practice, Module 4 artifacts, Reflection, or AI feedback persist before implementation and validation.
- **PDF-LOCAL-03:** Local persistence is not described as account storage, cloud backup, cross-device synchronization, permanent retention, or guaranteed recovery.
- **PDF-LOCAL-04:** Browser-storage clearing and its effect on locally saved work are disclosed.
- **PDF-LOCAL-05:** Shared-computer exposure is disclosed wherever locally saved learner work may remain visible.
- **PDF-LOCAL-06:** Private or incognito browsing limitations are disclosed.
- **PDF-LOCAL-07:** Browser restrictions and storage failure are disclosed without claiming successful saving.
- **PDF-LOCAL-08:** Future artifact-persistence disclosure becomes active only with the corresponding implemented and verified behavior.

### AI submission

- **PDF-AI-01:** The learner can access the AI-processing notice before or at each submission action.
- **PDF-AI-02:** The notice states that learner-entered text leaves the browser.
- **PDF-AI-03:** The notice identifies the Future of ID application server and OpenAI processing in understandable language.
- **PDF-AI-04:** The notice explains that relevant repository-owned context is added for feedback.
- **PDF-AI-05:** AI Review optionality is clear wherever the approved experience permits continuation without AI.
- **PDF-AI-06:** The notice advises against submitting confidential, proprietary, regulated, personally identifying, or sensitive workplace information.
- **PDF-AI-07:** The notice states that AI feedback may be incomplete or incorrect.
- **PDF-AI-08:** AI feedback is not described as scoring mastery, diagnosing capability gaps, or personalizing a pathway.
- **PDF-AI-09:** No disclosure implies that AI processing remains only on the learner's device.
- **PDF-AI-10:** Hidden prompts, chain of thought, secrets, and provider internals are neither displayed nor promised as learner-visible information.

### Reflection

- **PDF-REF-01:** Reflection has a persistent contextual privacy notice near its input.
- **PDF-REF-02:** Reflection AI transmission is disclosed adjacent to the submission action.
- **PDF-REF-03:** Reflection guidance warns against confidential or identifying employer, client, colleague, patient, student, or customer information.
- **PDF-REF-04:** Code inspection and runtime evidence confirm Reverse Build cannot access Reflection.
- **PDF-REF-05:** Future Reflection persistence is described as local and separate only after implementation and validation.
- **PDF-REF-06:** Future Reflection clearing preserves course progress and module artifacts unless an explicitly broader confirmed action states otherwise.
- **PDF-REF-07:** Clearing local Reflection is never described as deleting previously transmitted external data.

### Application retention

- **PDF-APP-01:** Current application-retention statements match repository code and observable behavior.
- **PDF-APP-02:** Absence of a learner database write is not described as proof that no transient copy, log, or metadata exists anywhere.
- **PDF-APP-03:** Deployment logging and request-body capture are verified before categorical application-retention wording is approved.
- **PDF-APP-04:** No “Future of ID retains nothing” statement appears without complete relevant evidence.
- **PDF-APP-05:** No attempt history, analytics profile, diagnostic record, or longitudinal learner record is introduced by Section 4.4.
- **PDF-APP-06:** Approved future local persistence remains visibly separate from current application behavior.

### Provider verification

- **PDF-PROV-01:** Provider name, endpoint, model, official source titles, URLs, and verification date are recorded.
- **PDF-PROV-02:** Official provider defaults are not described as Future of ID deployment guarantees.
- **PDF-PROV-03:** The deployed OpenAI organization and project are identified by an authorized reviewer before categorical wording is approved.
- **PDF-PROV-04:** Input/output data-sharing and model-improvement settings are verified and evidenced.
- **PDF-PROV-05:** Default abuse monitoring, Modified Abuse Monitoring, or Zero Data Retention status is verified and evidenced.
- **PDF-PROV-06:** Project overrides, endpoint/model exceptions, and relevant additional features are checked.
- **PDF-PROV-07:** Provider language is reverified immediately before launch and on each defined change trigger.
- **PDF-PROV-08:** Each provider record names its reviewer, evidence location, approved wording, unresolved uncertainty, and next review date.
- **PDF-PROV-09:** No unverified provider retention, deletion, training, or Zero Data Retention claim appears in learner-facing or internal current-state copy.

### Reset and deletion

- **PDF-RESET-01:** Every reset or clear control names the exact local domain and activity it affects.
- **PDF-RESET-02:** Every reset or clear disclosure identifies material domains it preserves.
- **PDF-RESET-03:** Local clearing is never described as provider-side or infrastructure-wide deletion.
- **PDF-RESET-04:** “Delete all data” is not used unless all relevant systems are verified within scope.
- **PDF-RESET-05:** A successful local clear does not silently restore data from stale or duplicate local records.
- **PDF-RESET-06:** A failed local clear is not announced as successful.
- **PDF-RESET-07:** No reset or clearing control is claimed before it is implemented and validated.

### Failure honesty

- **PDF-FAIL-01:** Storage failure is not represented as successful saving.
- **PDF-FAIL-02:** Storage failure preserves open access and in-session learning where browser execution remains possible.
- **PDF-FAIL-03:** Storage messages distinguish blocked, failed, unreadable, incompatible, and cleared states where technically distinguishable.
- **PDF-FAIL-04:** AI failure remains distinct from local-save failure.
- **PDF-FAIL-05:** AI failure does not erase valid learner work or deterministic Module 4 state where preservation is possible.
- **PDF-FAIL-06:** Learner-facing errors do not expose API keys, billing, funded-project status, quota internals, provider response bodies, stack traces, storage keys, or raw exceptions.
- **PDF-FAIL-07:** Failure communication provides bounded retry, continue, recovery, or reset guidance appropriate to the affected scope.

### Privacy and minimization

- **PDF-MIN-01:** Only approved minimum learner text, validated identifiers, and required repository context are transmitted for AI Review.
- **PDF-MIN-02:** Repository-owned authoritative context is reconstructed server-side rather than trusted from client-authored prose.
- **PDF-MIN-03:** Hidden prompts, chain of thought, provider internals, API keys, and raw errors are not persisted as learner data.
- **PDF-MIN-04:** No account, demographic profile, analytics history, attempt history, diagnostic label, scoring, or personalization is introduced.
- **PDF-MIN-05:** Reflection content is transmitted, stored, and displayed only within its approved separate flow.
- **PDF-MIN-06:** Deterministic Module 4 state remains independent of AI availability or output.

### Accessibility

- **PDF-A11Y-01:** Disclosure and clearing controls are keyboard operable and use explicit accessible names.
- **PDF-A11Y-02:** The AI-processing notice is programmatically associated with the relevant learner input or submission control.
- **PDF-A11Y-03:** Essential notices remain available without hover and are not provided only through transient toasts.
- **PDF-A11Y-04:** Notice and control meaning does not rely on color alone.
- **PDF-A11Y-05:** Save, failure, reset, and clearing outcomes are announced programmatically.
- **PDF-A11Y-06:** Focus remains predictable after confirmation, cancellation, failure, reset, and clearing.
- **PDF-A11Y-07:** At 320 CSS pixels, 200% browser zoom, and 200% text-only zoom, essential notice content and controls remain readable without horizontal page scrolling.
- **PDF-A11Y-08:** Any approved provider or privacy link and any destructive action communicate descriptive purpose and scope to screen readers.

### Product honesty

- **PDF-HONEST-01:** Browser-only, device-only, anonymous, completely private, confidential, and “stores nothing” claims are absent unless their exact scope is verified.
- **PDF-HONEST-02:** Immediate-deletion, permanent-deletion, provider-deletion, training, retention, and Zero Data Retention claims are absent unless specifically verified.
- **PDF-HONEST-03:** Backup, synchronization, permanent retention, and recovery claims are absent under the current local-only architecture.
- **PDF-HONEST-04:** Current behavior, approved future behavior, provider defaults, deployment facts, and unknowns remain visibly distinct.
- **PDF-HONEST-05:** Every learner-facing disclosure statement matches observable implementation and the latest applicable verification record.
- **PDF-HONEST-06:** No product or documentation surface claims legal compliance without applicable legal or organizational approval.

## 29. Non-Goals and Explicit Exclusions

Section 4.4 does not authorize or include:

- implementing disclosure UI
- writing a complete legal privacy policy
- claiming legal compliance
- configuring OpenAI project settings
- auditing private deployment infrastructure without access
- implementing local artifact persistence
- implementing reset or clearing controls
- implementing Module 4
- creating learner accounts, authentication, or cloud synchronization
- adding analytics, scoring, diagnosis, or personalization
- promising provider deletion or anonymous use
- requiring AI Review
- exposing internal prompts, chain of thought, or model reasoning
- changing approved Reverse Build v2, Module 4, or learner-artifact product contracts

## 30. Ownership and Handoff

### Section 4.4 owns

- disclosure requirements and placement principles
- current and future data-flow definitions
- retention classifications
- provider-verification and reverification rules
- prohibited and supportable claim boundaries
- disclosure accessibility requirements
- `PDF-*` acceptance criteria

### Section 5 owns

- storage implementation and safe persistence
- concrete data models, serializers, validators, and migrations
- reset and clearing APIs
- progress-store hardening
- technical enforcement of local data domains
- storage and operational error-state behavior

### Section 6 owns

- reference implementation of local persistence and approved AI notices in the designated module
- integration of the response, AI Review, and Reverse Build reference path

### Later Module 4 implementation owns

- simulation-specific AI and local-artifact disclosures under this contract

### Section 4.5 owns

- validation environments and commands
- browsers, viewports, and assistive technologies
- evidence records, defect severity, retest, and completion rules

### Public-copy rollout owns

- implementation of approved notices and public privacy-information surfaces

### Provider and project verification owns

- confirmation of deployed OpenAI settings
- current official-source review
- approval of provider-specific learner wording

### Legal or organizational review owns

- formal policy and jurisdictional requirements
- consent and legal terminology
- privacy contacts, rights workflows, and contractual commitments

## Section 4.4 Requirement Coverage

| Section 4.4 checklist requirement | Controlling coverage |
|---|---|
| Define the local browser-persistence disclosure. | Sections 3–7, 9, 17–19, and `PDF-LOCAL-*` |
| Define the disclosure shown before or when learner input is transmitted for AI processing. | Sections 5, 8–10, and `PDF-AI-*` and `PDF-REF-*` |
| Define what the Future of ID application itself retains. | Sections 3, 11–12, 16, and `PDF-APP-*` |
| Verify any provider-retention statement against current authoritative sources before using it. | Sections 13–16 and `PDF-PROV-*` |
| Prohibit claims that learner work remains only in the browser when AI feedback is requested. | Sections 5–8, 22, and `PDF-AI-02`, `PDF-AI-09`, and `PDF-HONEST-01` |
| Prohibit unverified statements about OpenAI retention behavior. | Sections 13–16, 22–23, and `PDF-PROV-*` and `PDF-HONEST-02` |

## Approval and Handoff

Before Section 4.4 can be marked complete, Bradley must approve this brief and confirm that it addresses all six checklist requirements. Approval establishes the product disclosure and data-flow specification; it does not implement notices, persistence, resets, provider settings, infrastructure verification, or legal policy.

After approval:

1. Section 4.5 defines validation execution and evidence records.
2. Section 5 implements safe local architecture and reset behavior under the approved artifact and privacy contracts.
3. Section 6 integrates the reference persistence and disclosure experience.
4. Later Module 4 work applies the same boundaries to deterministic simulation and optional AI critique.
5. Provider and deployment verification must occur before categorical provider wording is approved.
6. Public claims remain limited to verified current behavior until future behavior is implemented and validated.
