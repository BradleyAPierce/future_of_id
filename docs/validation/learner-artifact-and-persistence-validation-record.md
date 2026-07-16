# Learner-Artifact and Persistence Validation Record

## Record context

- **Work order:** `IWO-5-001`
- **Source:** `docs/experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md`
- **Implementation state:** Exact commit `03542c78fbea090b092b9e7aa8f15a165f49c5db` on `codex/section-5-learner-artifacts`, parent baseline `72fd487a8840be512e39a488fda2012030ede7d8`
- **Evidence/closure state:** Evidence commit `8fedeb8ff51afab949226e471bedfcdcee2e5d5b`; bounded Section 5 status `Complete and Approved`; Bradley Pierce; July 15, 2026
- **Environment/date/testers:** Automated/static — Codex, macOS 26.3, July 15, 2026. Manual — Bradley Pierce, available macOS browser environment and VoiceOver, July 15, 2026.
- **Browser/viewport/zoom/AT:** Bradley exercised 320 CSS pixels, 200% zoom where supported, reduced motion, and VoiceOver. Exact macOS/browser/VoiceOver versions were not captured. Windows 11 browsers, NVDA, physical iOS/Android, and deployed preview remain Blocked under `IWO5-VAL-002`.
- **Method:** Vitest/jsdom store/parser/adapter tests, TypeScript, build, static export/field inspection, local route markup check, and Bradley's written exact-commit manual attestation. No screenshots or recordings were supplied.

## Technical criterion record

| Criteria | Prerequisite | Expected | Observed | Status | Evidence | Defect/retest/uncertainty |
|---|---|---|---|---|---|---|
| `LAP-MODEL-01`–`06` | Approved ADR and types | Three isolated versioned domains; per-module current records; discriminated entries; open absence | Separate progress/module/Reflection stores and keys; written/branching union; absent/unavailable snapshots do not gate routes | Passed | 34-test report; `types.ts`, keys/store tests; Bradley open-route check | Passed only for the authorized Section 5 architecture; visible integrations still require owner-phase validation |
| `LAP-WRITE-01`–`06` | Authoritative written fixture | Latest-only update; sibling/module isolation; no attempt history | Replacement discards superseded text/feedback, preserves sibling and other module keys, rejects unknown identifiers | In validation | `moduleArtifactStore.test.ts` | Prompt-switch UI remains Sections 6/8 |
| `LAP-AI-01`–`06` | Current revision identities | Exact association; stale callback rejected; pending recoverable | Written, Reflection, and branching subjects use opaque equality tokens; old callbacks return `stale-subject`; restored pending becomes failed | In validation | Association and pending-recovery tests | Live request/parser/provider evidence remains later |
| `LAP-M4-01`–`07` | Injected authority fixture | Generic structured shape without inventing content/logic | Discriminated branching entry, identifier-only deterministic state, original/revised rationale, exact critique subject, scoped reset seam | Not yet executable | Branching serialization/association tests | Repository Module 4 authority returns false until Section 7; concrete paths remain Not implemented |
| `LAP-RB-01`–`05` | Module-artifact public entry point | Reflection structurally absent; honest partial states | Public module-artifact index exports no Reflection store/type; malformed siblings isolate | Not yet executable | Static export test and malformed-entry fixture | Reverse Build runtime/rendering remains Section 6 |
| `LAP-REF-01`–`06` | Separate Reflection fixture | Latest-only Reflection, exact feedback, independent clear, no aggregate reader | Separate key/store/hook/event; stale callback rejected; one shared fixture proves Reflection clear preserves module work/progress and module clear preserves Reflection/progress | In validation | `reflectionStore.test.ts` remediation fixtures | Reflection UI persistence remains later |
| `LAP-RESET-01`–`07` for authorized service APIs and the current progress control | Stored multi-domain fixtures and current progress UI | Scoped operations and explicit outcomes preserve unrelated domains | Automated domain-preservation/failure cases pass; Bradley passed progress reset, cancellation/Escape, refresh non-restoration, focus, and cross-tab synchronization | Passed | Expanded store tests and Bradley attestation | Future learner-artifact/Reflection controls are Not implemented and require owner-phase validation before this result can be extended to them |
| `LAP-PROG-01`–`06` | Legacy/current progress fixtures and current routes | Authoritative migration, versioning, filtering, reset, events, failure containment | Automated migration/failure cases pass; Bradley passed durable refresh, dashboard accuracy, cross-tab completion/reset, failure honesty, recovery, and retry | Passed | `courseProgressStore.test.ts`; route markup; Bradley attestation | External browser/device matrix remains `IWO5-VAL-002` |
| `LAP-VER-01`–`07` | Malformed/current/future fixtures | Deterministic version dispatch and narrow isolation | Version 1 envelopes and non-destructive malformed/wrong-type/future handling pass direct tests | Passed | Direct progress/module/Reflection unreadable and migration tests; ADR | Passed for the authorized Section 5 parsers/migrations; later integrations must not bypass them |
| `LAP-FAIL-01`–`07` for authorized stores and current progress/completion consumers | Injected failures and current completion surfaces | No throw/access gate/data erasure/false success/retry loop | Automated faults pass; Bradley passed blocked-write open access, exact session-only notice, recovery, and coherent durable retry | Passed | Expanded tests; amended source/build; Bradley attestation | AI-specific and later-feature notices are Not yet executable and do not inherit this result |
| `LAP-PRIV-01`–`05`, `LAP-HONEST-01`–`03`, `05` | Field/claim inspection and current routes | Minimal local records and truthful results; no prohibited product meaning | No timestamps, identity/profile/history/cloud fields, network calls, scoring, diagnosis, analytics, or personalization; Bradley observed open access and bounded session-only language without internals | Passed | Privacy record, public-claim audit, Bradley attestation | Passed for authorized Section 5 scope; `LAP-HONEST-04` remains Not yet executable with Reverse Build; later disclosures/provider evidence remain open |
| `LAP-A11Y-01`–`07` | Visible controls and AT environments | Keyboard/focus/status/reflow/targets pass | Bradley passed current progress/completion controls with keyboard, focus, VoiceOver, 320px, 200% zoom where supported, and reduced motion | In validation as a complete family; current macOS/VoiceOver slice Passed | Accessibility record and Bradley attestation | NVDA, physical mobile, deployed preview, exact version metadata, and later feature controls remain Blocked/not executable |

## Persisted-field inventory

- Progress: `domain`, `schemaVersion`, `completedModuleSlugs`.
- Written entry: activity/interaction/context identifiers, current response, current opaque revision, bounded review state and feedback.
- Branching entry: activity/interaction/simulation identifiers and version, completion state, deterministic-state revision, repository-owned decision/consequence/pathway/final-state identifiers, original/optional revised rationale, bounded review state and feedback.
- Reflection: domain/version/module, current response, current opaque revision, bounded review state and feedback.

No timestamp, account, profile, attempt array, prompt prose, scenario prose, provider details, stack trace, hidden reasoning, score, diagnosis, analytics marker, or personalization field is present.

## Conclusion

The authorized Section 5 architecture, current progress integration, automated checks, and available macOS/VoiceOver manual scenarios pass within the bounded scope recorded above. Bradley approved Section 5 as `Complete and Approved` with documented external blockers on July 15, 2026. Later feature families, complete accessibility coverage, and broader Phase 5 remain incomplete; this closure does not equal launch readiness.

## Closure-readiness audit remediation

The earlier audit found destructive unreadable-record updates, silent completion-result handling, disabled-target focus, missing material tests, and overclaimed evidence. The findings remain indexed as `IWO5-REM-001`–`004`. The corrections passed the expanded 34-test suite, and Bradley's attestation supplies the available macOS browser/VoiceOver retest. Unavailable platforms remain Blocked and did not inherit that result.
