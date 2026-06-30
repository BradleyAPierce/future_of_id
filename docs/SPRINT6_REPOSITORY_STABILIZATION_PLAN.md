# Sprint 6 Repository Stabilization Plan

## Purpose

Sprint 6 defines the remaining stabilization work after the first controlled documentation migration.

This sprint is not a broad migration pass. Its purpose is to make the repository easier to navigate, clarify transitional documentation, and prepare the next controlled documentation changes without moving files prematurely.

## Current State

- The product experience framework has been added under `docs/experience/`.
- Documentation governance has been added through the documentation architecture, inventory, domain audit, migration blueprint, Sprint 4 checklist, approval list, and Sprint 5 validation report.
- One approved low-risk migration has been completed: `LANDING_PAGE_STRATEGY.md` now lives under `docs/strategy/`.
- Sprint 5 validation passed.
- Many documents remain intentionally transitional while the documentation architecture matures.
- The full documentation migration is not complete.

## Sprint 6 Goals

- Improve documentation navigation.
- Identify folder-level README files needed for stable documentation domains.
- Clarify which docs are still transitional and should not yet be treated as finalized locations.
- Prepare README consolidation without performing it yet.
- Identify lightweight metadata and source-of-truth needs.
- Avoid premature broad migration.

## In Scope

- Review the documentation ecosystem after Sprint 4 and Sprint 5.
- Identify needed folder-level README files.
- Recommend a lightweight documentation metadata standard.
- Recommend the README consolidation sequence.
- Recommend the archive/reference strategy.
- Recommend next approved move candidates, if any.
- Prepare for a future controlled migration pass.

## Out of Scope

- Moving docs without a new approved move-candidate list.
- Consolidating `README.md`, `READMEV2.md`, or `READMEV3.md`.
- Moving `docs/SYSTEM-INSTRUCTIONS.md` or `docs/COPILOT-INSTRUCTIONS.md`.
- Moving `web/*.md` docs.
- Editing application code.
- Pushing commits.

## Folder-Level README Candidates

| README Candidate | Purpose | Priority | Create Now? | Notes |
| --- | --- | --- | --- | --- |
| `docs/strategy/README.md` | Explain product strategy, roadmap, decisions, and future-facing product direction. | High | Yes | `docs/strategy/` already contains strategy files and the migrated landing-page strategy. |
| `docs/architecture/README.md` | Orient readers to technical, content, site, and design architecture docs. | High | Yes | This folder is already established and contains source-of-truth architecture docs. |
| `docs/experience/README.md` | Explain the learner experience framework and how experience docs relate to product, visual, motion, and AI decisions. | High | Yes | This folder is stable and now contains foundational experience docs. |
| `docs/design-system/README.md` | Explain future design-system documentation ownership for tokens, components, variants, and implementation standards. | Medium | No | Create when design-system docs are moved or formally split from `docs/architecture/`. |
| `docs/ai/README.md` | Explain future AI documentation ownership for prompt architecture, AI service behavior, response contracts, validation, and safety. | Medium | No | Create when AI docs are classified and ready to move. |
| `docs/implementation/README.md` | Explain contributor guidance, AI assistant instructions, and implementation standards. | Medium | No | Create during a dedicated implementation-guidance sprint. |
| `docs/validation/README.md` | Explain validation reports, audits, QA notes, and external review artifacts. | Medium | Yes | `docs/validation/` exists and should have navigation before more validation docs accumulate. |
| `docs/reference/README.md` | Explain useful historical/contextual documents that may still inform project understanding. | Low | No | Create when reference candidates are approved. |
| `docs/archive/README.md` | Explain superseded inactive documents that should no longer guide decisions. | Low | No | Create only when archive contents are approved. |

## Documentation Metadata Standard

Major source-of-truth, governance, and durable reference docs should eventually use a lightweight metadata block.

Proposed fields:

```md
---
Status: Draft | Active | Transitional | Historical | Superseded
Version: v0.1
Domain: Strategy | Architecture | Experience | Design System | AI | Implementation | Decisions | Validation | Governance | Reference | Archive
Owner: Future of ID
Source of Truth: Yes | No | Partial
Depends On:
  - path/to/source.md
Extended By:
  - path/to/extension.md
Last Reviewed: YYYY-MM-DD
---
```

Do not apply this metadata broadly yet. First use it on a small set of stable, high-value documents to confirm the format is useful and not noisy.

## Remaining Transitional Docs

The following documents or document groups still need explicit decisions before they are moved, merged, archived, or treated as final:

- `README.md`
- `READMEV2.md`
- `READMEV3.md`
- `docs/SYSTEM-INSTRUCTIONS.md`
- `docs/COPILOT-INSTRUCTIONS.md`
- `web/README.md`
- `web/PRODUCT_ARCHITECTURE.md`
- `web/AI_INTERACTION_TAXONOMY.md`
- `web/AI_TEAM_OPERATING_MODEL.md`
- `web/DESIGN_SYSTEM_STRATEGY.md`
- Design-system docs group:
  - `docs/architecture/DESIGN_SYSTEM.md`
  - `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md`
  - `docs/COMPONENT_ARCHITECTURE_V1.md`
- AI docs group, including current and future AI behavior, prompt, service, and validation docs.
- Archive/reference candidates, including historical or superseded documents that should remain available but not guide active decisions.

## Recommended Stabilization Sequence

1. Create folder-level README files for existing stable folders only.
2. Review `docs/README_CONSOLIDATION_PLAN.md`.
3. Generate approved move candidates for the next controlled migration pass.
4. Execute another narrow controlled migration.
5. Validate the migration.
6. Consolidate or archive README variants only after navigation, source-of-truth guidance, and migration status are stable.

## Risks to Avoid

- Treating Sprint 6 as permission for broad migration.
- Creating empty folders without a clear purpose.
- Adding metadata to every doc too early.
- Moving high-risk instruction files.
- Splitting the design-system move group.
- Mixing README consolidation with domain migration.
- Changing application code during documentation cleanup.

## Recommended Next Action

Create folder-level README files for stable, already-existing documentation folders only:

- `docs/strategy/README.md`
- `docs/architecture/README.md`
- `docs/experience/README.md`
- `docs/validation/README.md`

Do not create README files for future folders until their contents and ownership are approved.
