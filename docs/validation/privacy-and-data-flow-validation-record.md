# Privacy and Data-Flow Validation Record

## Section 5 record context

- **Work order/source:** `IWO-5-001`; `docs/experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md`
- **Implementation state:** Exact commit `03542c78fbea090b092b9e7aa8f15a165f49c5db` on `codex/section-5-learner-artifacts`, parent `72fd487a8840be512e39a488fda2012030ede7d8`
- **Evidence/closure state:** Evidence commit `8fedeb8ff51afab949226e471bedfcdcee2e5d5b`; bounded Section 5 status `Complete and Approved`; Bradley Pierce; July 15, 2026
- **Date/testers/environments:** July 15, 2026; Codex automated/static checks on macOS 26.3; Bradley Pierce manual checks in his available macOS browser environment with VoiceOver
- **Manual evidence limits:** Exact macOS/browser/VoiceOver versions were not captured; no screenshots or recordings were supplied. Shared-profile/private-mode, Windows/NVDA, physical mobile, deployed preview, and provider/infrastructure checks remain Blocked.

## Data-flow inventory

| Domain | Source | Destination | Persistence/retention | Clear boundary | AI/network use |
|---|---|---|---|---|---|
| Course progress | Learner completion action and legacy local array | Versioned browser-local progress key; baseline-aware in-memory fallback only after a coherent valid/absent read | Current completion slugs only; no timestamps/history | Progress reset removes current and legacy progress only; ordinary updates cannot replace unreadable/future data | None |
| Module learner artifact | Later learner feature integrations | One versioned browser-local record per authoritative module; baseline-aware in-memory fallback after coherent write failure | Current written/simulation entries and matching review only | Active reset or module clear; preserves Reflection/progress; explicit clear is required before replacing invalid/future raw data | Store performs no network call; later optional AI submission remains a distinct flow |
| Reflection | Later Reflection integration | Separate versioned browser-local key per module; baseline-aware in-memory fallback after coherent write failure | Current Reflection and matching review only | Reflection clear; preserves artifacts/progress; explicit clear is required before replacing invalid/future raw data | Store performs no network call; never exposed by module-artifact public index |

## Criteria and findings

| Criteria | Expected | Observed | Status | Evidence | Uncertainty/retest |
|---|---|---|---|---|---|
| `PDF-DATA-01`–`06` | Approved current/future inventory and three distinguishable domains | Inventory matches the approved Section 5 architecture; future categories remain labeled unimplemented and external handling remains unverified | Passed | Data-flow/persisted-field inventory and prohibited-pattern audit | Later implementation must update the inventory before claims change |
| Applicable Section 5 persistence portions of `PDF-MIN-03`–`04` | No hidden/provider/internal data or prohibited profiles/history in persistence | No timestamps, history, identity/profile, hidden prompt/server data, raw errors, scoring, diagnosis, analytics, or personalization | Passed | Persisted-field inventory, 34 tests, and prohibited-pattern audit | Result is limited to Section 5 persistence |
| `PDF-MIN-01`–`02`, `05`–`06` | AI transmission, server reconstruction, Reflection flow, and deterministic Module 4 behavior | Section 5 did not implement or alter these feature flows | Not implemented/Not yet executable | Changed-file audit | Sections 6–9 and owner-phase validation; no Passed status inferred from persistence tests |
| `PDF-LOCAL-01`–`08` | Local/browser scope stated only where observable | Current progress disclosure says local browser, no account/backup/sync, possible browser-data/private-mode loss; Bradley passed normal persistence, refresh, and blocked-write honesty | In validation as a complete family; current normal-browser progress slice Passed | Dashboard source/markup and Bradley attestation | Shared-profile/private-mode and external browser/device matrix remain Blocked |
| Technical clear-boundary portion of `PDF-REF-06` | Reflection clearing preserves progress and module artifacts | Separate key/store/hook/event and direct multi-domain clear fixtures preserve both other domains | Passed | Expanded Reflection boundary/clear tests | Learner-facing Reflection clear control is Not implemented and does not inherit this result |
| `PDF-REF-01`–`05`, `07` and runtime remainder of `PDF-REF-06` | Contextual notice, transmission, runtime Reverse Build exclusion, active local disclosure, and clearing language | No authorized Reflection UI or Reverse Build v2 integration exists | Not implemented/Not yet executable | Changed-file audit and reflection-free public contract | Sections 6–8 owner-phase runtime and disclosure evidence |
| `PDF-RESET-01`–`07` | Scoped truthful results and preserved unrelated state | Automated domain-preservation cases pass; Bradley passed cancellation/Escape, completion-only reset, cross-tab sync, refresh non-restoration, focus, and status meaning | Passed | Expanded tests, current UI, and Bradley attestation | Passed for Section 5 APIs/current control; later artifact/Reflection controls require owner-phase validation |
| Applicable `PDF-FAIL-01`–`03`, `06`–`07` | Honest storage results, open access, state preservation, bounded recovery, no internals | Automated faults pass; Bradley observed the approved session-only message, open access, no internals, recovery, and durable retry | Passed | Fault/result tests and Bradley attestation | Passed for current Section 5 storage surfaces; AI-specific `PDF-FAIL-04`–`05` remain Not yet executable; external failure matrix remains Blocked |
| `PDF-HONEST-01`–`06` | No unsupported privacy/provider/deletion/recovery claims | Changed public copy makes no anonymity, confidentiality, provider, deletion, recovery, compliance, or local-only AI claim; Bradley observed no raw errors, keys, stack traces, or internals | Passed | Public-claim audit and Bradley attestation | Passed for changed Section 5 surfaces; full product/deployment claim audit remains broader launch work |
| `PDF-AI-01`–`10`, `PDF-PROV-01`–`09` | No inference from architecture/provider defaults | No AI route, prompt, provider, model, or notice changed | Not implemented/Blocked | Changed-file and network-call audit | Provider/infrastructure verification not authorized or available |
| `PDF-A11Y-01`–`08` | Contextual notices and controls pass manual matrix | Bradley passed the current progress/completion slice with keyboard, focus, VoiceOver, 320px, 200% where supported, and reduced motion | In validation as a complete family; current macOS/VoiceOver slice Passed | Accessibility record and Bradley attestation | NVDA/mobile/deployed preview and later contextual notices remain Blocked/not executable |

## Static network and prohibited-data audit

No `fetch`, `XMLHttpRequest`, `WebSocket`, `sendBeacon`, or API route reference exists in the new persistence stores/hooks. The words “account” and “synced” appear only in progress disclosure that explicitly denies those capabilities. No architecture field or behavior creates accounts, authentication, databases, cloud storage, cross-device sync, attempt history, analytics, scoring, diagnosis, or personalization.

## Conclusion

Section 5 technical privacy boundaries and the available current-surface manual scenarios pass within their recorded bounded scope. Bradley approved Section 5 as `Complete and Approved` with documented external blockers on July 15, 2026. This record does not establish provider settings, legal compliance, complete privacy, anonymity, deletion guarantees, broader Phase 5 completion, or launch readiness.

## Remediation and dependency note

The closure audit's privacy/data-integrity findings are retained under `IWO5-REM-001`, `002`, and `004`. Direct unreadable-record, raw-preservation, clear-boundary, and session-retry tests pass; Bradley's attestation supplies the available current-browser failure/retry retest. `npm audit --omit=dev` continues to report one high and one moderate advisory in the Next.js 16.1.6/nested PostCSS baseline dependency tree. They are present at `72fd487`, Section 5 did not introduce or worsen them, no production version changed, and no automatic or forced audit fix was performed. They require a separate security/launch risk disposition but do not block closure of the bounded Section 5 architecture.
