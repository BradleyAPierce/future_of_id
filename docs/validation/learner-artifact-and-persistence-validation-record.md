# Learner-Artifact and Persistence Validation Record

## Record context

- **Work order:** `IWO-5-001`
- **Source:** `docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md`
- **Implementation baseline:** Uncommitted working tree on `codex/section-5-learner-artifacts`, based on `72fd487`
- **Environment/date/tester:** macOS 26.3; July 15, 2026; Codex
- **Browser/viewport/zoom/AT:** Not applicable to pure tests; required manual matrix is blocked in `IWO5-VAL-001` and `IWO5-VAL-002`
- **Method:** Vitest/jsdom store/parser/adapter tests, TypeScript, build, static export/field inspection, and local route markup check

## Technical criterion record

| Criteria | Prerequisite | Expected | Observed | Status | Evidence | Defect/retest/uncertainty |
|---|---|---|---|---|---|---|
| `LAP-MODEL-01`–`06` | Approved ADR and types | Three isolated versioned domains; per-module current records; discriminated entries; open absence | Separate progress/module/Reflection stores and keys; written/branching union; absent/unavailable snapshots do not gate routes | In validation | 34-test report; `types.ts`, keys/store tests | Visible feature integration remains later; manual route matrix blocked |
| `LAP-WRITE-01`–`06` | Authoritative written fixture | Latest-only update; sibling/module isolation; no attempt history | Replacement discards superseded text/feedback, preserves sibling and other module keys, rejects unknown identifiers | In validation | `moduleArtifactStore.test.ts` | Prompt-switch UI remains Sections 6/8 |
| `LAP-AI-01`–`06` | Current revision identities | Exact association; stale callback rejected; pending recoverable | Written, Reflection, and branching subjects use opaque equality tokens; old callbacks return `stale-subject`; restored pending becomes failed | In validation | Association and pending-recovery tests | Live request/parser/provider evidence remains later |
| `LAP-M4-01`–`07` | Injected authority fixture | Generic structured shape without inventing content/logic | Discriminated branching entry, identifier-only deterministic state, original/revised rationale, exact critique subject, scoped reset seam | Not yet executable | Branching serialization/association tests | Repository Module 4 authority returns false until Section 7; concrete paths remain Not implemented |
| `LAP-RB-01`–`05` | Module-artifact public entry point | Reflection structurally absent; honest partial states | Public module-artifact index exports no Reflection store/type; malformed siblings isolate | Not yet executable | Static export test and malformed-entry fixture | Reverse Build runtime/rendering remains Section 6 |
| `LAP-REF-01`–`06` | Separate Reflection fixture | Latest-only Reflection, exact feedback, independent clear, no aggregate reader | Separate key/store/hook/event; stale callback rejected; one shared fixture proves Reflection clear preserves module work/progress and module clear preserves Reflection/progress | In validation | `reflectionStore.test.ts` remediation fixtures | Reflection UI persistence remains later |
| `LAP-RESET-01`–`07` | Stored multi-domain fixtures | Scoped operations and explicit outcomes preserve unrelated domains | Direct active-practice, module, Reflection, and progress reset/clear fixtures preserve named sibling/module/domain state; remove failures retain cache/data and are not success | In validation | Expanded store reset/clear/cache tests | Learner-visible controls beyond progress remain later; interactive progress check blocked |
| `LAP-PROG-01`–`06` | Legacy/current progress fixtures | Authoritative migration, versioning, filtering, reset, events, failure containment | Unknown/duplicate legacy entries filtered; current unknown isolated; unsupported version rejected; session-only fallback and exact-key events tested | In validation | `courseProgressStore.test.ts`; dashboard HTTP markup | Cross-tab actual-browser walkthrough blocked |
| `LAP-VER-01`–`07` | Malformed/current/future fixtures | Deterministic version dispatch and narrow isolation | Version 1 envelopes; ordinary writes block and preserve raw malformed/wrong-type/future records; failed new progress-envelope write preserves legacy source; failed legacy cleanup is flagged without remigration | In validation | Direct progress/module/Reflection unreadable and migration tests; ADR | Full raw browser migration walkthrough blocked |
| `LAP-FAIL-01`–`07` | Injected read/write/remove/event failures | No throw/access gate/data erasure/false success/retry loop | Exceptions become bounded results; valid-baseline write failures retain honest session values; retries recheck the raw baseline; event failure does not change write success; completion consumers show bounded failure state | In validation | Expanded fault/event/result tests; amended consumer source/build | Browser quota/security and interactive notice walkthrough blocked |
| `LAP-PRIV-01`–`05`, `LAP-HONEST-01`–`05` | Field/claim inspection | Minimal local records and truthful results; no prohibited product meaning | No timestamps, identity/profile/history/cloud fields, network calls, scoring, diagnosis, analytics, or personalization; session-only failures are explicit | In validation | Privacy record and public-claim audit | Later disclosures/provider evidence remain open |
| `LAP-A11Y-01`–`07` | Visible controls and AT environments | Keyboard/focus/status/reflow/targets pass | Progress reset uses native buttons, inline confirmation, result-focus destination, cancel/Escape initiating-control restoration, text status, and `min-h-11`; completion failure notices use status/alert roles; no interaction was manually exercised | Not yet executable | Static component, type/lint/build, and rendered-markup review | `IWO5-VAL-001`, `IWO5-VAL-002`; manual behavior and later feature controls absent |

## Persisted-field inventory

- Progress: `domain`, `schemaVersion`, `completedModuleSlugs`.
- Written entry: activity/interaction/context identifiers, current response, current opaque revision, bounded review state and feedback.
- Branching entry: activity/interaction/simulation identifiers and version, completion state, deterministic-state revision, repository-owned decision/consequence/pathway/final-state identifiers, original/optional revised rationale, bounded review state and feedback.
- Reflection: domain/version/module, current response, current opaque revision, bounded review state and feedback.

No timestamp, account, profile, attempt array, prompt prose, scenario prose, provider details, stack trace, hidden reasoning, score, diagnosis, analytics marker, or personalization field is present.

## Conclusion

Architecture-level automated checks pass. The feature remains **In validation**, not accepted, because required manual environments and later feature integrations are absent. Section 5 technical implementation does not make Phase 5 complete.

## Closure-readiness audit remediation

The earlier audit found destructive unreadable-record updates, silent completion-result handling, disabled-target focus, missing material tests, and overclaimed evidence. The findings remain indexed as `IWO5-REM-001`–`004`. The corrections above were retested in the expanded 34-test suite; manual browser/AT conclusions remain blocked and were not inferred from automation.
