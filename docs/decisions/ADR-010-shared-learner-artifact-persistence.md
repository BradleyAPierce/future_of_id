# ADR-010: Shared Learner-Artifact Persistence

## Status

- **Decision status:** Accepted for IWO-5-001 implementation
- **Decision date:** July 15, 2026
- **Owner:** Bradley Pierce
- **Implementation owner:** Codex
- **Controlling work order:** `docs/SECTION_5_SHARED_LEARNER_ARTIFACT_ARCHITECTURE_WORK_ORDER.md`
- **Planning baseline:** `72fd487`
- **Implementation branch:** `codex/section-5-learner-artifacts`

## Context

Future of ID currently stores only an unversioned JSON array of course-completion slugs under `course-progress`. Written Design Practice responses, AI Review feedback, and Reflection remain in component state. The existing progress store has useful same-tab and cross-tab subscriptions, but raw JSON parsing and browser-storage operations can fail without a bounded result.

The approved Phase 4 contracts require a reusable browser-local architecture with three separate domains:

1. course progress;
2. module learner artifacts; and
3. Reflection.

The architecture must support multiple independent written prompts, a future structured Module 4 branching artifact, exact learner-response and AI-feedback association, latest-only replacement, stale-feedback invalidation, safe parsing, schema migrations, malformed-record isolation, scoped clearing, storage failure, and open access. Reflection must remain structurally excluded from Reverse Build-facing contracts. Version 1 must not create timestamps, history, accounts, cloud state, analytics, scoring, diagnosis, or personalization.

This ADR chooses technical mechanisms only. Product meaning remains controlled by the Public Launch Readiness Checklist and approved Phase 4 briefs.

## Decision

### 1. Preserve three independent storage families

Use stable browser-local key families with schema versions inside their payloads:

| Domain | Key | Record granularity |
|---|---|---|
| Course progress | `future-of-id:course-progress` | One completion-only record |
| Module learner artifact | `future-of-id:module-artifact:<moduleSlug>` | One record per authoritative module |
| Reflection | `future-of-id:reflection:<moduleSlug>` | One separate record per authoritative module |

The stable key remains unchanged when a payload schema changes. Parsers inspect `schemaVersion` and either accept, migrate, reject, or isolate the payload. Key-version suffixes are not used because they make old-record discovery and cleared-data non-restoration harder to govern.

No API returns all three domains as one learner record. Consumers request only the domain and authoritative module they require.

### 2. Use one current record with independently keyed entries

A module artifact contains only current Design Practice or simulation work for one authoritative module. Written entries are keyed by authoritative interaction identifier. Switching or updating one entry preserves valid siblings. Replacing a response removes the prior current response and does not create history.

Reflection has its own record and lifecycle. It is not a property of the module-artifact type, store, hook, event, or Reverse Build-facing export.

### 3. Use discriminated TypeScript models

Module entries use an `activityType` discriminator:

- `written-response`; or
- `branching-simulation`.

The branching model stores identifiers and approved rationale fields, never client-authored pathway, consequence, outcome, scenario, or prompt prose as authority. Repository-specific Module 4 transition validation remains a later feature responsibility supplied through an authoritative validation port.

### 4. Use opaque revision identities for exact feedback association

Each current written response and Reflection response has one opaque revision identity. Available feedback stores the exact revision identity it reviewed and is current only when the identities match.

A branching critique is associated with:

- the current deterministic-state revision; and
- the current original-rationale revision.

The optional revised rationale remains distinct and does not change deterministic state or retroactively change the subject of the original critique.

Revision identities are generated through an injected factory. They are current-record integrity tokens, not account identifiers, timestamps, analytics identifiers, or retained version history. Replacing current content discards superseded learner content and feedback.

### 5. Omit timestamps from schema version 1

Version 1 contains no created, updated, last-accessed, submitted, or cleared timestamps. Schema versions, revision identities, deterministic writes, and event-driven snapshots satisfy the approved requirements without time metadata.

A future timestamp requires a documented product, migration, validation, stale-state, conflict-resolution, or display need; data-minimization rationale; approved scope amendment or governing-source update; and explicit confirmation that it creates no history or analytics profile.

### 6. Isolate browser I/O and events behind injected adapters

Pure stores receive injected dependencies:

- browser storage with safe `getItem`, `setItem`, and `removeItem` results;
- an event source/target for same-tab notifications;
- authoritative identifier validation; and
- revision identity generation.

Production adapters wrap `localStorage`, `window` custom events, and browser `storage` events. Tests use deterministic fakes. Store code does not call raw browser APIs directly.

Every read, write, migration, reset, clear, and subscription operation catches browser exceptions and produces a typed result. Raw errors, JSON, keys, stack traces, and browser exception details do not cross the service boundary.

### 7. Use independent stores and subscriptions

Provide separate course-progress, module-artifact, and Reflection stores and hooks. React hooks use `useSyncExternalStore` to preserve the existing observable-store pattern.

Each domain has a distinct same-tab event name, and storage-event handlers filter exact keys or owned key prefixes. A failed event dispatch cannot make a successful storage write false, gate access, or create an unbounded loop.

Snapshots are cached by raw storage value and scoped key so repeated reads are referentially stable for React.

### 8. Validate before use and isolate the narrowest record

All persisted input begins as `unknown`. Parsers verify:

- record type and schema version;
- authoritative module and interaction identity;
- discriminated entry shape;
- bounded learner and feedback fields;
- allowed AI Review states;
- required revision associations; and
- branching identifier structure through the supplied authority port.

An invalid prompt entry is removed from the usable view while valid sibling entries remain available. An invalid module record does not affect other modules. Invalid Reflection does not affect module artifacts or progress. Unsupported future versions are never partially interpreted.

Stored client order never establishes prompt display order. Later consumers reconstruct order and authored context from repository sources.

### 9. Use explicit deterministic migrations

The first migration reads legacy `course-progress` only when the new progress key is absent. It accepts only an array, keeps unique strings that match the authoritative module catalog, and produces the version 1 progress envelope.

Migration order is:

1. read legacy raw value safely;
2. parse and validate without mutation;
3. serialize the complete current record;
4. write the new key;
5. confirm the write result;
6. remove the legacy key; and
7. dispatch the progress event.

If the new write fails, the legacy record remains untouched. A failed legacy removal after a successful new write does not cause duplicate merging: the new key is authoritative. Course-progress reset attempts to remove both keys and reports failure honestly if either owned representation cannot be cleared.

No migration invents learner responses, feedback, Reflection, completion, identifiers, or deterministic state.

### 10. Make writes coherent and preserve valid in-memory work

Stores construct and validate a complete next record before one `setItem`. A failed write leaves the previous valid stored value unchanged and returns failure. Callers may keep current in-memory input and disclose that it may not survive navigation or refresh.

Ordinary updates first require an `absent` or valid current record. `unavailable`, `invalid`, and `unsupported` records are never treated as empty: the operation returns a bounded typed failure and preserves the raw stored representation until an explicit scoped clear/reset. When a write fails after a valid or absent baseline was read, the store may expose the complete next record as `session-only`, retains the baseline raw value, and rechecks that baseline before a later explicit retry. A changed baseline returns `stored-record-changed` instead of overwriting or merging against an invented empty record.

There is no automatic unbounded retry. Retry is explicit and scoped. A persisted `pending` AI state is normalized on read to an honest retryable failure state because a browser reload cannot prove an old request is still running.

AI failure and storage failure remain separate states. Neither invalidates valid learner work or deterministic simulation state.

A successfully written current progress envelope remains authoritative if legacy-key cleanup fails. The snapshot or successful operation reports `legacy-cleanup-failed`/cleanup-pending metadata; it does not remigrate, claim the cleanup succeeded, or downgrade the durable current write to session-only.

### 11. Define scoped reset and clearing operations

The technical API exposes separate operations:

- reset one active written prompt or simulation and its AI state;
- clear all Design Practice/simulation work for one module;
- clear Reflection for one module; and
- reset course completion markers.

Active reset preserves sibling entries, Reflection, and progress. Module clear preserves other modules, Reflection, and progress. Reflection clear preserves module artifacts and progress. Progress reset preserves module artifacts and Reflection.

The architecture does not implement a clear-all action. Success invalidates the exact cache and notifies subscribers. Failure is returned and must not be announced as success. Current and legacy representations in the affected scope cannot silently restore successfully cleared data.

### 12. Preserve open access and narrow public exports

Missing, malformed, unsupported, unreadable, blocked, or cleared storage never gates module access, course completion, authored content, navigation, or in-session work where browser execution remains possible.

Public module-artifact exports contain no Reflection types or store functions. Reflection APIs are exported from a separate entry point. Later Reverse Build code may consume only the module-artifact read contract.

## Alternatives Considered

### One combined progress/artifact/Reflection record

Rejected. It makes domain-independent reset and malformed-data isolation weaker and makes Reflection leakage through broad consumers more likely.

### One artifact map containing every module

Rejected. A single corrupt envelope can affect all modules, every update rewrites unrelated learner work, and module-level atomicity is weaker.

### React Context or a global state library

Rejected. It adds broad coupling and does not replace browser `storage` event handling. The existing external-store pattern is sufficient.

### A runtime schema library

Rejected for version 1. The bounded schema can use explicit validators without a new production dependency. Vitest and jsdom are approved as development-only test dependencies.

### Content hashes for response association

Rejected. Canonicalization and normalization rules add ambiguity. Opaque equality tokens provide exact current-record association without retaining content-derived identity.

### Timestamp-based association or ordering

Rejected. Time is not required for the approved observable behavior and would add unnecessary retention metadata.

### Persisting only one current prompt per module

Rejected. It would erase independent prompt work and violate multiple-prompt requirements.

### Memory fallback that pretends saving succeeded

Rejected. In-memory preservation is allowed only with an explicit persistence-failure result and no refresh/navigation promise.

## Consequences

### Positive

- Domain ownership is explicit and testable.
- Reflection is excluded by type, store, hook, key, event, and export boundaries.
- Per-module records improve isolation and narrow clearing.
- Exact feedback association does not require history or timestamps.
- Safe injected adapters make storage failures and subscriptions deterministic to test.
- Legacy progress can migrate without inventing or losing valid completion state.
- Later written-response, Reverse Build, Reflection, and Module 4 integrations share one architecture without being implemented prematurely.

### Costs and trade-offs

- More keys, adapters, validators, and tests exist than in a single `localStorage` hook.
- Explicit validators require maintenance when approved schemas evolve.
- Per-module subscriptions require exact key/prefix filtering.
- In-memory fallback cannot preserve work across refresh and must be disclosed honestly.
- Feature-specific acceptance criteria remain unexecutable until Sections 6–8 integrate the stores.

## Compatibility and Migration

- Current course consumers continue through `useCourseProgress`; the hook adapts to the new store and keeps `completedModules`, `markComplete`, and `isCompleted` where compatible.
- `course-progress` is legacy input only after successful migration.
- New module-artifact and Reflection domains have no legacy learner records to migrate.
- Unsupported future versions remain isolated and clearable; they are not downgraded.
- No current AI route, request, prompt, provider, model, content module, or route changes are part of this ADR.

## Security, Privacy, and Accessibility Implications

- Persist only approved current learner text, bounded feedback, validated identifiers, states, schema versions, and opaque revision identities.
- Do not persist raw errors, secrets, prompts, hidden reasoning, provider internals, accounts, demographics, analytics, histories, scores, diagnoses, or personalization data.
- Local clearing never implies provider or infrastructure deletion.
- Failure results support accessible, non-color-only statuses without exposing internals.
- The course-progress reset UI must name completion-only scope, confirm destructive action when progress exists, report success/failure programmatically, preserve predictable focus, support keyboard-only operation, reflow at 320 CSS pixels and 200% zoom, and provide 44 × 44 CSS-pixel primary targets.

## Validation

Implementation must provide:

- parser and migration tests for missing, malformed, wrong-type, legacy, current, unsupported, and failed-migration records;
- authoritative identifier filtering;
- written, Reflection, and branching-model serialization and isolation fixtures;
- exact feedback association and stale invalidation;
- reset and clearing scope tests;
- storage read/write/remove, quota, security, and event failure tests;
- same-tab and cross-tab subscription tests;
- no-timestamp, no-history, prohibited-field, and Reflection-export inspections;
- course-progress reset manual keyboard, focus, announcement, mobile, zoom, screen-reader, storage-failure, cross-tab, and open-access checks; and
- full lint, TypeScript, production build, test, diff, privacy, and public-claim result reporting under IWO-5-001.

## Reopen Triggers

Reopen this ADR through approved governance before:

- combining persistence domains;
- changing stable key ownership or record granularity;
- adding timestamps, history, analytics, identity, accounts, cloud state, or synchronization;
- exposing Reflection through a module-artifact or Reverse Build-facing contract;
- replacing opaque revision association;
- adopting a new runtime schema or global state dependency;
- adding server-side learner-artifact persistence;
- adding a clear-all operation; or
- changing reset, migration, authoritative-state, or failure semantics.

## Boundary Confirmation

ADR-010 records the architectural direction approved in IWO-5-001. It does not change product meaning, acceptance criteria, phase ownership, or authorized files. Reverse Build v2 rendering, Design Practice/Reflection persistence integration, the Module 4 simulation and branching AI contract, AI route changes, content changes, provider claims, and later-phase disclosure UI remain outside Section 5.

## IWO-5-001 Review Record

- **Review date:** July 15, 2026
- **Reviewer:** Codex, implementation owner
- **Review result:** Conforms to the approved work order; store implementation may begin.
- **Three-domain boundary:** Confirmed.
- **Per-module artifact and Reflection records:** Confirmed.
- **Opaque exact-association identities:** Confirmed.
- **No timestamps in schema version 1:** Confirmed.
- **Injected storage/event adapters and independent stores/hooks/subscriptions:** Confirmed.
- **Legacy progress migration and authoritative-slug filtering:** Confirmed.
- **Reflection exclusion from Reverse Build-facing contracts:** Confirmed.
- **Open-access and in-memory failure behavior:** Confirmed.
- **Scoped reset/clear behavior:** Confirmed.
- **Prohibited accounts, cloud state, history, analytics, scoring, diagnosis, and personalization:** Confirmed.
- **Later Section 6–8 feature boundaries:** Confirmed.
- **Scope or product-contract expansion found:** None.
