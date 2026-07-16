# Accessibility Validation Record

## Section 5 context

- **Work order:** `IWO-5-001`
- **Applicable sources:** `LAP-A11Y-*`, `PDF-A11Y-*`, applicable `VE-A11Y-*`
- **Implementation/build:** Exact commit `03542c78fbea090b092b9e7aa8f15a165f49c5db` on `codex/section-5-learner-artifacts`, parent `72fd487a8840be512e39a488fda2012030ede7d8`; production build passed July 15, 2026
- **Testers/environments:** Codex automated/static checks on macOS 26.3; Bradley Pierce manual checks in his available macOS browser environment with VoiceOver on July 15, 2026. Exact macOS, browser, and VoiceOver versions were not captured; evidence is a written attestation with no screenshots or recordings.

## Progress reset control

| Check | Route | Browser/OS | Viewport/zoom/AT | Expected | Observed | Status | Evidence/defect/retest |
|---|---|---|---|---|---|---|---|
| Native semantics and labels | `/course/dashboard` | Available macOS browser | VoiceOver | Explicitly labeled native controls and scoped copy | Bradley passed the reset/status review; static evidence confirms native buttons, scoped text, and status/alert roles | Passed | Limited to available macOS/VoiceOver; written attestation; exact versions not captured |
| Target sizing | `/course/dashboard` | Static source | N/A | At least 44 CSS px intended target | Reset, cancel, and confirm buttons add `min-h-11` | In validation | Source inspection only; rendered measurement pending |
| Keyboard confirmation/cancel | `/course/dashboard` | Available macOS browser | Keyboard | Open, cancel/Escape where supported, reopen, and confirm without trap | Bradley passed keyboard operation, cancellation, and Escape behavior where supported | Passed | Limited to available macOS; Windows/browser matrix remains Blocked |
| Focus placement/restoration | `/course/dashboard` | Available macOS browser | Keyboard and VoiceOver | Cancel returns to initiating control; success/failure moves to a stable result | Bradley passed focus after cancellation, success, and failure | Passed | Limited to available macOS; `IWO5-REM-003` manually retested; no recording supplied |
| Status announcement | Current progress/completion surfaces | Available macOS browser | VoiceOver | Status meaning is announced and understandable without color | Bradley passed VoiceOver review of reset and status messaging | Passed | Limited to VoiceOver/macOS; NVDA and iOS VoiceOver remain Blocked under `IWO5-VAL-002` |
| Reflow/zoom/mobile | Current progress/completion surfaces | Available macOS browser | 320 CSS px; 200% zoom where supported | Essential controls and statuses remain usable | Bradley reported the performed 320px and 200% checks passed | Passed | Limited to recorded conditions; 400%/text-only zoom, physical iOS/Android, and exact browser matrix were not captured |
| Reduced motion | Current progress/completion surfaces | Available macOS browser | Reduced-motion preference | No motion dependency blocks use | Bradley reported the reduced-motion check passed | Passed | Limited to available macOS; external browser/device matrix remains Blocked |
| Completion-save result | `/course/orientation`; `/course/module/ai-literacy` | Available macOS browser | Keyboard and VoiceOver | Durable failure is not silent; session-only state is qualified and retryable; access stays open | Bradley passed blocked-write status, open access, focus, VoiceOver review, recovery, and retry | Passed | Limited to available macOS/VoiceOver; `IWO5-REM-002` manually retested; NVDA/mobile/deployed preview remain Blocked |

## External matrix status

| Environment | Status | Closure interpretation |
|---|---|---|
| Windows 11 browsers with NVDA | Blocked | No result inferred; remains a launch/accessibility dependency |
| Physical iOS and Android | Blocked | No result inferred; remains a launch/device dependency |
| Deployed preview and provider/infrastructure context | Blocked | No local result is promoted to deployed behavior |

## Later feature families

Design Practice persistence, Reflection persistence, Reverse Build v2, Module 4 simulation, and contextual AI disclosures have no authorized visible Section 5 integration. Their `LAP-A11Y-*`, `RB2-A11Y-*`, `M4SIM-A11Y-*`, and `PDF-A11Y-*` rows remain **Not implemented** or **Not yet executable** and cannot be passed by store tests.

## Conclusion

Bradley's exact-commit attestation closes the available macOS keyboard, focus, VoiceOver, responsive, zoom, reduced-motion, and failure-state retest for the current Section 5 surfaces. The earlier disabled-focus-target finding remains preserved as `IWO5-REM-003` and is now manually retested for that environment.

The complete `LAP-A11Y-*` and `PDF-A11Y-*` families remain In validation because later feature controls and the external matrix are absent. This record makes no WCAG conformance or full accessibility claim and does not make broader Phase 5 complete.
