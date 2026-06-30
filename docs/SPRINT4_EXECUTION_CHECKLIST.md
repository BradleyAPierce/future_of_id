# Sprint 4 Execution Checklist

## Purpose

This checklist controls Sprint 4 migration execution for the Future of ID documentation refactor.

It translates `DOCUMENTATION_MIGRATION_BLUEPRINT.md` into a narrow, phased, checkable execution plan. Its purpose is to prevent broad, risky file movement and ensure every approved move includes link/reference updates in the same pass.

This is not the migration itself. This is the final execution checklist before migration.

## Sprint 4 Scope

Sprint 4 is the minimum safe migration pass.

In scope:

- [ ] Create approved domain folders.
- [ ] Move only low-risk documentation files approved by the migration blueprint.
- [ ] Update links in the same pass as each move group.
- [ ] Validate navigation after each phase.
- [ ] Keep the working tree easy to reason about.

Out of scope:

- [ ] README consolidation.
- [ ] `READMEV2.md` / `READMEV3.md` archiving.
- [ ] `SYSTEM-INSTRUCTIONS.md` movement.
- [ ] `COPILOT-INSTRUCTIONS.md` movement.
- [ ] `web/README.md` rewrite.
- [ ] AI docs migration unless clearly classified and low-risk.
- [ ] Tool/internal artifacts such as `.kilo/plans/*.md`.
- [ ] `.DS_Store` cleanup, except as separate repository hygiene.
- [ ] Application code edits.

## Sprint 4 Approved Move Candidates

No files may be moved unless they are explicitly listed in this section before execution.

| File | Current Path | Target Path | Move Group | Link Update Required | Approved? Yes/No |
|---|---|---|---|---|---|
| _To be filled before execution_ | _TBD_ | _TBD_ | _TBD_ | _Yes/No_ | _No_ |

Rules:

- [ ] Any moved file must appear in this table before execution.
- [ ] Files not listed here are not approved move candidates.
- [ ] Link updates must be planned before approval changes to `Yes`.
- [ ] High-risk deferred files must not be added without a separate sprint approval.

## Pre-Flight Checks

Complete before any migration action:

- [ ] Confirm clean git working tree or intentionally note current uncommitted documentation changes.
- [ ] Read `docs/DOCUMENTATION_MIGRATION_BLUEPRINT.md`.
- [ ] Read `docs/DOCUMENT_DOMAIN_AUDIT.md`.
- [ ] Confirm no application files will be edited.
- [ ] Confirm high-risk docs are deferred.
- [ ] Confirm link-update strategy is ready.
- [ ] Confirm move groups are understood.
- [ ] Confirm every planned file move appears in the Sprint 4 Approved Move Candidates section.
- [ ] Confirm README consolidation is not part of Sprint 4.
- [ ] Confirm `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md` will not move.
- [ ] Confirm `web/README.md` will not be rewritten.

## Phase A — Create Approved Domain Folders

Create folders only. Do not move files in Phase A.

- [ ] Confirm `docs/strategy/` exists.
- [ ] Confirm `docs/architecture/` exists.
- [ ] Create `docs/design-system/` if approved.
- [ ] Create `docs/ai/` only if approved and scope is clear. Folder creation does not approve moving AI docs.
- [ ] Create `docs/implementation/` only if approved, even though system/Copilot docs are deferred. Folder creation does not approve moving implementation docs.
- [ ] Confirm `docs/decisions/` exists.
- [ ] Confirm `docs/validation/` exists.
- [ ] Confirm `docs/reference/` exists. Folder existence does not approve moving historical docs.
- [ ] Create `docs/archive/` only if approved. Folder creation does not approve archiving README variants or historical documents during Sprint 4.
- [ ] Run `git status`.
- [ ] Stop if folder creation reveals unexpected files or conflicts.

## Phase B — Low-Risk Documentation Moves

Move only files classified as low-risk by the blueprint and explicitly listed in the Sprint 4 Approved Move Candidates section. Do not include high-risk files in this phase.

Strategy moves:

- [ ] Do not move strategy docs unless the specific file is listed in Sprint 4 Approved Move Candidates.
- [ ] Confirm proposed strategy move is low-risk and approved.
- [ ] Move approved strategy doc listed in the move-candidates table.
- [ ] Update links immediately in the same pass.
- [ ] Search for old path references.
- [ ] Validate links.
- [ ] Run `git status`.

Architecture moves:

- [ ] Do not move architecture docs unless the specific file is listed in Sprint 4 Approved Move Candidates.
- [ ] Confirm proposed architecture move is low-risk and approved.
- [ ] Move approved architecture doc listed in the move-candidates table.
- [ ] Update links immediately in the same pass.
- [ ] Search for old path references.
- [ ] Validate links.
- [ ] Run `git status`.

Experience docs:

- [ ] Keep `docs/experience/` files in place unless no movement is needed.
- [ ] Confirm `EXPERIENCE_PHILOSOPHY.md` remains reachable from `docs/README.md`.
- [ ] Confirm `VISUAL_COMMUNICATION_SYSTEM.md` remains reachable from `docs/README.md`.

Do not move in Phase B:

- [ ] `SYSTEM-INSTRUCTIONS.md`.
- [ ] `COPILOT-INSTRUCTIONS.md`.
- [ ] README variants.
- [ ] `web/README.md`.
- [ ] `web/*.md` docs requiring review.
- [ ] AI docs requiring classification.

## Phase C — Design System Move Group

Guarded move group. Execute only if explicitly approved for Sprint 4.

- [ ] Confirm all three design-system files are listed in Sprint 4 Approved Move Candidates.
- [ ] Confirm the design-system group is approved for Sprint 4.
- [ ] Confirm `docs/design-system/` exists.
- [ ] Move `docs/architecture/DESIGN_SYSTEM.md`.
- [ ] Move `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md`.
- [ ] Move `docs/COMPONENT_ARCHITECTURE_V1.md`.
- [ ] Update all references in the same pass.
- [ ] Search for old references to `docs/architecture/DESIGN_SYSTEM.md`.
- [ ] Search for old references to `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md`.
- [ ] Search for old references to `docs/COMPONENT_ARCHITECTURE_V1.md`.
- [ ] Validate `docs/README.md` links.
- [ ] Validate governance docs links.
- [ ] Validate source-of-truth references.
- [ ] Run `git status`.
- [ ] Stop if any unclear references exist.

Rule: move `DESIGN_SYSTEM.md`, `DESIGN_SYSTEM_CHANGELOG.md`, and `COMPONENT_ARCHITECTURE_V1.md` together or not at all.

## Phase D — Deferred Items

Explicitly deferred from Sprint 4:

- [ ] README consolidation.
- [ ] README variant archiving.
- [ ] `READMEV2.md`.
- [ ] `READMEV3.md`.
- [ ] `SYSTEM-INSTRUCTIONS.md`.
- [ ] `COPILOT-INSTRUCTIONS.md`.
- [ ] `web/README.md`.
- [ ] `web/PRODUCT_ARCHITECTURE.md`.
- [ ] `web/AI_INTERACTION_TAXONOMY.md`.
- [ ] `web/AI_TEAM_OPERATING_MODEL.md`.
- [ ] `web/DESIGN_SYSTEM_STRATEGY.md`.
- [ ] AI docs requiring classification.
- [ ] Archive/reference cleanup.
- [ ] `.DS_Store` cleanup.
- [ ] `.kilo/plans/*.md` and similar tool/internal artifacts.

## Atomic Move Rule

No move group may be executed unless link/reference updates are handled in the same pass.

Required for every move group:

- [ ] Search for existing references before moving.
- [ ] Move only approved files in the group.
- [ ] Update links immediately.
- [ ] Search for old paths after moving.
- [ ] Confirm every moved file appears in Sprint 4 Approved Move Candidates.
- [ ] Validate navigation before continuing.
- [ ] Record any unresolved references before proceeding.

Do not move first and plan to fix links later.

## Validation Checklist

Run after each phase and after each move group:

- [ ] Run `git status`.
- [ ] Search for old paths.
- [ ] Search for `docs/COMPONENT_ARCHITECTURE_V1.md`.
- [ ] Search for `docs/architecture/DESIGN_SYSTEM.md`.
- [ ] Search for `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md`.
- [ ] Search for `docs/strategy/LANDING_PAGE_STRATEGY.md`.
- [ ] Check `docs/README.md` links.
- [ ] Check governance docs links.
- [ ] Check source-of-truth references.
- [ ] Confirm no app files changed.
- [ ] Confirm no high-risk files moved.
- [ ] Confirm README variants remain in place.
- [ ] Confirm `READMEV2.md` remains at `READMEV2.md`.
- [ ] Confirm `READMEV3.md` remains at `READMEV3.md`.
- [ ] Confirm `docs/SYSTEM-INSTRUCTIONS.md` remains at `docs/SYSTEM-INSTRUCTIONS.md`.
- [ ] Confirm `docs/COPILOT-INSTRUCTIONS.md` remains at `docs/COPILOT-INSTRUCTIONS.md`.
- [ ] Confirm `web/README.md` remains at `web/README.md`.
- [ ] Confirm `web/PRODUCT_ARCHITECTURE.md` remains at `web/PRODUCT_ARCHITECTURE.md`.
- [ ] Confirm `web/AI_INTERACTION_TAXONOMY.md` remains at `web/AI_INTERACTION_TAXONOMY.md`.
- [ ] Confirm `web/AI_TEAM_OPERATING_MODEL.md` remains at `web/AI_TEAM_OPERATING_MODEL.md`.
- [ ] Confirm `web/DESIGN_SYSTEM_STRATEGY.md` remains at `web/DESIGN_SYSTEM_STRATEGY.md`.
- [ ] Confirm any moved file appears in Sprint 4 Approved Move Candidates.
- [ ] Confirm no unapproved move candidates were moved.
- [ ] Record issues before proceeding.

## Stop Conditions

Stop immediately if:

- [ ] A referenced file path is unclear.
- [ ] A high-risk file appears necessary to move.
- [ ] README consolidation becomes tempting mid-sprint.
- [ ] A link update affects application code unexpectedly.
- [ ] A move group cannot be completed atomically.
- [ ] The working tree becomes hard to reason about.
- [ ] A `web/*.md` doc appears necessary to move before review.
- [ ] An AI doc target domain is ambiguous.
- [ ] A tool/internal artifact appears in migration scope accidentally.

## Sprint 4 Completion Criteria

Sprint 4 is complete only when:

- [ ] Approved folders exist.
- [ ] Folder creation did not trigger movement of AI docs, implementation docs, README variants, or historical docs.
- [ ] Only approved low-risk files moved.
- [ ] Any moved file appears in the Sprint 4 Approved Move Candidates section.
- [ ] No unapproved move candidates were moved.
- [ ] Links updated in the same pass as moved files.
- [ ] No high-risk files moved.
- [ ] Git status reviewed.
- [ ] Documentation navigation still makes sense.
- [ ] Source-of-truth references still make sense.
- [ ] `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md` remain stable.
- [ ] All deferred items remain at their original paths.
- [ ] Sprint 5 validation can begin.

## Recommended Sprint 5

Sprint 5 should be validation.

Recommended Sprint 5 checks:

- [ ] Broken-link search.
- [ ] Source-of-truth consistency check.
- [ ] AI assistant reading-path check.
- [ ] Documentation navigation check.
- [ ] Domain ownership check.
- [ ] Git diff review.
- [ ] Review whether any deferred items are ready for their own sprint.
