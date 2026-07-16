# Accessibility Validation Record

## Section 5 context

- **Work order:** `IWO-5-001`
- **Applicable sources:** `LAP-A11Y-*`, `PDF-A11Y-*`, applicable `VE-A11Y-*`
- **Implementation/build:** Uncommitted working tree based on `72fd487`; production build passed July 15, 2026
- **Tester/environment:** Codex; macOS 26.3

## Progress reset control

| Check | Route | Browser/OS | Viewport/zoom/AT | Expected | Observed | Status | Evidence/defect/retest |
|---|---|---|---|---|---|---|---|
| Native semantics and labels | `/course/dashboard` | Server-rendered markup/local HTTP | N/A | Explicitly labeled native controls and scoped copy | Native buttons; reset label; inline confirmation; completion-only and preserved-domain text; text status/alert roles | In validation | Component/static markup; interaction still required |
| Target sizing | `/course/dashboard` | Static source | N/A | At least 44 CSS px intended target | Reset, cancel, and confirm buttons add `min-h-11` | In validation | Source inspection only; rendered measurement pending |
| Keyboard confirmation/cancel | `/course/dashboard` | Browser unavailable | Required desktop matrix | Open, cancel/Escape, reopen, confirm without keyboard trap | Native buttons and Escape cancellation are implemented; interaction not executed | Blocked | `IWO5-VAL-001`, retest when browser tooling works |
| Focus placement/restoration | `/course/dashboard` | Browser unavailable | Required desktop matrix | Focus moves into confirmation; cancel returns to the enabled reset control; success/failure moves to a stable result | Closure audit found the former success target became disabled; `IWO5-REM-003` now focuses the programmatically focusable result and keeps cancel/Escape restoration on the initiating control; not manually observed | Blocked | Static/type/build retest passed; interactive `IWO5-VAL-001` remains |
| Status announcement | `/course/dashboard` | Browser/AT unavailable | VoiceOver and NVDA | Success/error/unreadable/session states announced once and remain understandable | `status`/`alert` roles and visible text implemented; no AT observation | Blocked | `IWO5-VAL-002` |
| Reflow/zoom/mobile | `/course/dashboard` | Environments unavailable | 320px, 400% zoom, mobile devices | No clipping/overlap; controls remain usable | Not executed | Blocked | `IWO5-VAL-002` |
| Reduced motion | `/course/dashboard` | Browser unavailable | Reduced-motion preference | No motion dependency | Focus scheduling is not animation-dependent; visual behavior not observed | Blocked | `IWO5-VAL-001` |
| Completion-save result | `/course/orientation`; `/course/module/ai-literacy` | Production route markup only | Required desktop/mobile/AT matrix | Durable failure is not silent; session-only state is qualified and retryable; access stays open | Amendment A1 adds bounded `status`/`alert` text and keeps session-only completion controls enabled; routes/build pass; failure interaction not executed | Blocked | `IWO5-REM-002` static retest passed; `IWO5-VAL-001`/`002` manual retest pending |

## Later feature families

Design Practice persistence, Reflection persistence, Reverse Build v2, Module 4 simulation, and contextual AI disclosures have no authorized visible Section 5 integration. Their `LAP-A11Y-*`, `RB2-A11Y-*`, `M4SIM-A11Y-*`, and `PDF-A11Y-*` rows remain **Not implemented** or **Not yet executable** and cannot be passed by store tests.

## Conclusion

Static semantics support later validation, but accessibility acceptance is incomplete. Automated, source, or SSR inspection does not replace keyboard, VoiceOver, NVDA, viewport, zoom, and device evidence.

The earlier disabled-focus-target finding is preserved in the focus row and `IWO5-REM-003`; it is remediated in source but remains unaccepted until interactive focus and announcement behavior is observed.
