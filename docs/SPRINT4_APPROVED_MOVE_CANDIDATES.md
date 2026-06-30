# Sprint 4 Approved Move Candidates

## Purpose

This file is the official approved move list for Sprint 4 Controlled Migration.

No documentation file should be moved during Sprint 4 unless it appears in this document as approved. This document authorizes only the listed moves; it does not execute migration.

## Approval Rule

No files may be moved unless they are listed in the Approved Move Candidates table with `Approved = Yes`.

Files not listed in that table are not approved for movement during Sprint 4.

## Approved Move Candidates

| File | Current Path | Target Path | Domain | Move Group | Risk Level | Reference Updates Required | Approved |
|---|---|---|---|---|---|---|---|
| `LANDING_PAGE_STRATEGY.md` | `docs/strategy/LANDING_PAGE_STRATEGY.md` | `docs/strategy/LANDING_PAGE_STRATEGY.md` | Strategy | Strategy | Low | Yes. Update references in docs hub, governance docs, migration docs, readiness/checklist docs, and root README if present. | Yes |

## Recommended Low-Risk Candidates

Based on `DOCUMENTATION_INVENTORY.md`, `DOCUMENT_DOMAIN_AUDIT.md`, `DOCUMENTATION_MIGRATION_BLUEPRINT.md`, and `SPRINT4_READINESS_REPORT.md`, the only low-risk file currently recommended for Sprint 4 movement is:

- `docs/strategy/LANDING_PAGE_STRATEGY.md` → `docs/strategy/LANDING_PAGE_STRATEGY.md`

Rationale:

- It is a root-level strategy document.
- Its proposed domain is already clear.
- Its target folder already exists.
- It is not a high-risk instruction file.
- It is not part of a move-together group.
- Reference updates appear manageable.

No design-system, AI, README, implementation-instruction, `web/*.md`, archive/reference, or tool/internal files are approved for movement in this candidate list.

## Deferred Files

| File | Current Path | Reason Deferred | Future Sprint / Action |
|---|---|---|---|
| `README.md` | `README.md` | Root README consolidation is out of Sprint 4 scope. | Dedicated README consolidation sprint. |
| `READMEV2.md` | `READMEV2.md` | README variant archiving depends on approved consolidation. | Archive only after final root README preserves useful content. |
| `READMEV3.md` | `READMEV3.md` | README variant archiving depends on approved consolidation. | Archive only after final root README preserves useful content. |
| `SYSTEM-INSTRUCTIONS.md` | `docs/SYSTEM-INSTRUCTIONS.md` | High blast radius for AI assistant behavior and source-of-truth references. | Dedicated implementation-guidance sprint. |
| `COPILOT-INSTRUCTIONS.md` | `docs/COPILOT-INSTRUCTIONS.md` | High blast radius and tightly coupled to system instructions. | Dedicated implementation-guidance sprint with `SYSTEM-INSTRUCTIONS.md`. |
| `web/README.md` | `web/README.md` | App-specific contributor guide requires a rewrite plan, not migration. | Future web README rewrite sprint. |
| `PRODUCT_ARCHITECTURE.md` | `web/PRODUCT_ARCHITECTURE.md` | Discovered `web/*.md` doc requiring domain review. | Review before move/merge/archive decision. |
| `AI_INTERACTION_TAXONOMY.md` | `web/AI_INTERACTION_TAXONOMY.md` | AI/Experience ownership is not finalized. | Review in AI documentation sprint. |
| `AI_TEAM_OPERATING_MODEL.md` | `web/AI_TEAM_OPERATING_MODEL.md` | Could be active implementation guidance or historical/reference material. | Review before move/merge/archive decision. |
| `DESIGN_SYSTEM_STRATEGY.md` | `web/DESIGN_SYSTEM_STRATEGY.md` | May overlap current design-system docs. | Compare with design-system sources before moving. |
| `COMPONENT_ARCHITECTURE_V1.md` | `docs/COMPONENT_ARCHITECTURE_V1.md` | Design-system move group is not approved for Sprint 4. | Move only with design-system group in a later approved sprint. |
| `DESIGN_SYSTEM.md` | `docs/architecture/DESIGN_SYSTEM.md` | Design-system move group is not approved for Sprint 4. | Move only with component architecture and changelog. |
| `DESIGN_SYSTEM_CHANGELOG.md` | `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md` | Design-system move group is not approved for Sprint 4. | Move only with component architecture and design system doc. |
| `ADR-009-ai-feedback-engines.md` | `docs/decisions/ADR-009-ai-feedback-engines.md` | AI decision doc is already in a valid domain and should remain stable. | Link from future AI docs rather than move now. |
| `scenario-engine-validation-log.md` | `docs/validation/scenario-engine-validation-log.md` | Validation doc is already in a valid domain and should remain stable. | Link from future AI docs rather than move now. |
| `INITIAL_REPO_STRUCTURE.md` | `docs/reference/INITIAL_REPO_STRUCTURE.md` | Archive/reference content movement is deferred. | Archive/reference sprint after strategy is approved. |
| `PROJECT-BRAIN.md` | `docs/strategy/PROJECT-BRAIN.md` | Historical/superseded status needs careful handling. | Archive/reference sprint after useful context is preserved. |
| `DECISIONS.md` | `docs/strategy/DECISIONS.md` | Decision-log migration may require split or legacy labeling. | Decisions sprint or later migration pass. |
| AI docs requiring classification | Various | Ownership between `docs/ai/`, `docs/experience/`, and decisions/validation is not fully resolved. | AI documentation architecture sprint. |
| Archive/reference content movement | Various | Folder creation does not authorize archive/reference migration. | Later archive/reference execution sprint. |

## Not In Scope

The following are not in scope for Sprint 4 movement:

- application code
- package files
- build/config files
- implementation files under `web/` other than reviewed documentation files
- tool-generated artifacts such as `.kilo/plans/*.md`
- `.DS_Store` cleanup
- unrelated repository hygiene
- README consolidation
- README variant archiving
- AI docs with unclear ownership
- design-system group migration

## Reference Update Notes

For the approved Strategy move group, search and update references in the same execution pass.

Minimum files to check:

- `docs/README.md`
- `docs/DOCUMENTATION_ARCHITECTURE.md`
- `docs/DOCUMENTATION_INVENTORY.md`
- `docs/DOCUMENT_DOMAIN_AUDIT.md`
- `docs/DOCUMENTATION_MIGRATION_BLUEPRINT.md`
- `docs/SPRINT4_EXECUTION_CHECKLIST.md`
- `docs/SPRINT4_READINESS_REPORT.md`
- root `README.md`, if it references the old path

Required searches before and after movement:

- `docs/strategy/LANDING_PAGE_STRATEGY.md`
- `LANDING_PAGE_STRATEGY.md`
- `docs/strategy/LANDING_PAGE_STRATEGY.md`

If any reference is unclear, stop the migration and record the issue before proceeding.

## Execution Guidance

- Move only approved files.
- Update references atomically in the same pass as the move.
- Validate after each move group.
- Stop if any path/reference is unclear.
- Do not expand scope mid-sprint.
- Do not move deferred files.
- Do not treat folder creation as approval to move files into those folders.
- Do not make README consolidation part of Sprint 4.

## Final Recommendation

Approved Candidate List Ready for Review

This candidate list approves one low-risk Sprint 4 move:

- `docs/strategy/LANDING_PAGE_STRATEGY.md` → `docs/strategy/LANDING_PAGE_STRATEGY.md`

All other meaningful movement remains deferred until a later approved sprint or a more specific review.
