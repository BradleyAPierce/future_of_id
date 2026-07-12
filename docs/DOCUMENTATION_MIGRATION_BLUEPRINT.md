# Documentation Migration Blueprint

## Purpose

This blueprint defines the future Future of ID documentation migration before any migration occurs.

It identifies planned file movement, link-update requirements, move-together groups, web documentation review needs, README consolidation dependencies, and archive/reference decisions.

This document does not move, delete, rename, merge, archive, consolidate, or rewrite files. It is the execution plan that should be reviewed before Sprint 4 begins.

## Proposed Target Folder Structure

Intended target structure:

```text
docs/
  README.md
  DOCUMENTATION_ARCHITECTURE.md
  DOCUMENTATION_INVENTORY.md
  DOCUMENT_DOMAIN_AUDIT.md
  DOCUMENTATION_MIGRATION_BLUEPRINT.md
  README_CONSOLIDATION_PLAN.md
  strategy/
  architecture/
  experience/
  design-system/
  ai/
  implementation/
  decisions/
  validation/
  reference/
  archive/   # do not create until approved migration execution
```

Notes:

- `docs/README.md` remains the documentation hub.
- Governance/planning files may remain at `docs/` root for visibility.
- `docs/design-system/`, `docs/ai/`, and `docs/implementation/` do not exist yet and should be created only during an approved migration sprint.
- `docs/reference/` already exists.
- `docs/archive/` does not exist yet and should not be created until approved migration execution.
- `docs/reference/` should hold useful historical/contextual documents that may still help explain project evolution.
- `docs/archive/` should hold superseded inactive documents that should no longer guide decisions.
- Tool-generated internal planning artifacts such as `.kilo/plans/*.md` are outside this migration scope unless explicitly reviewed later.

## Source-to-Target Migration Table

| Current Path | Proposed Target Path | Domain | Action | Move Group | Link Update Risk | Notes |
|---|---|---|---|---|---|---|
| `README.md` | `README.md` | Root README | Keep | README | High | Rewrite later from consolidation plan; do not move. |
| `READMEV2.md` | `docs/reference/READMEV2.md` or `docs/archive/READMEV2.md` | Archive / Reference | Merge Later | README | Medium | Extract strongest content first; do not archive until root README is rewritten. |
| `READMEV3.md` | `docs/reference/READMEV3.md` or `docs/archive/READMEV3.md` | Archive / Reference | Merge Later | README | Medium | Extract tagline/feature/contributor language first; malformed Markdown should not be preserved as active guidance. |
| `web/README.md` | `web/README.md` | Implementation / Contributor Guidance | Keep / Rewrite Later | Implementation | Medium | Remain in place until there is a concrete app-specific contributor guidance rewrite plan. |
| `docs/README.md` | `docs/README.md` | Documentation Hub | Keep | Governance | High | Update after file moves. |
| `docs/DOCUMENTATION_ARCHITECTURE.md` | `docs/DOCUMENTATION_ARCHITECTURE.md` | Documentation Governance | Keep | Governance | Medium | Update if target domains change. |
| `docs/DOCUMENTATION_INVENTORY.md` | `docs/DOCUMENTATION_INVENTORY.md` | Documentation Governance | Keep | Governance | Medium | Update after migration. |
| `docs/DOCUMENT_DOMAIN_AUDIT.md` | `docs/DOCUMENT_DOMAIN_AUDIT.md` | Documentation Governance | Keep | Governance | Low | Keep as Sprint 2 audit record. |
| `docs/DOCUMENTATION_MIGRATION_BLUEPRINT.md` | `docs/DOCUMENTATION_MIGRATION_BLUEPRINT.md` | Documentation Governance | Keep | Governance | Low | Keep as Sprint 3 migration plan. |
| `docs/README_CONSOLIDATION_PLAN.md` | `docs/README_CONSOLIDATION_PLAN.md` | Documentation Governance | Keep | Governance | Low | Keep until README consolidation is complete. |
| `docs/SYSTEM-INSTRUCTIONS.md` | `docs/SYSTEM-INSTRUCTIONS.md` for Sprint 4; future `docs/implementation/SYSTEM-INSTRUCTIONS.md` only if approved | Implementation / Contributor Guidance | Keep for Sprint 4 | Implementation | High | High blast radius for AI assistant behavior and references. Move only in a dedicated implementation-guidance sprint. |
| `docs/COPILOT-INSTRUCTIONS.md` | `docs/COPILOT-INSTRUCTIONS.md` for Sprint 4; future `docs/implementation/COPILOT-INSTRUCTIONS.md` only if approved | Implementation / Contributor Guidance | Keep for Sprint 4 | Implementation | High | High blast radius for AI assistant behavior and references. Move only in a dedicated implementation-guidance sprint with `SYSTEM-INSTRUCTIONS.md`. |
| `docs/COMPONENT_ARCHITECTURE_V1.md` | `docs/design-system/COMPONENT_ARCHITECTURE_V1.md` | Design System | Move | Design System | High | Move only with `DESIGN_SYSTEM.md` and `DESIGN_SYSTEM_CHANGELOG.md`. |
| `docs/strategy/LANDING_PAGE_STRATEGY.md` | `docs/strategy/LANDING_PAGE_STRATEGY.md` | Strategy | Review Before Move | Strategy | Medium | Confirm currency before moving. |
| `docs/architecture/CONTENT_ARCHITECTURE.md` | `docs/architecture/CONTENT_ARCHITECTURE.md` | Architecture | Keep | Architecture | Medium | Keep in place; update cross-links after page-pattern docs exist. |
| `docs/architecture/DESIGN_SYSTEM.md` | `docs/design-system/DESIGN_SYSTEM.md` | Design System | Move | Design System | High | Move only with component architecture and changelog. |
| `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md` | `docs/design-system/DESIGN_SYSTEM_CHANGELOG.md` | Design System | Move | Design System | High | Move only with `DESIGN_SYSTEM.md` and component architecture. |
| `docs/architecture/SITE_MAP.md` | `docs/architecture/SITE_MAP.md` | Architecture | Keep | Architecture | Medium | Validate current routes before any later content updates. |
| `docs/architecture/TECH_ARCHITECTURE.md` | `docs/architecture/TECH_ARCHITECTURE.md` | Architecture | Keep | Architecture | Medium | Keep in place; update links if implementation docs move. |
| `docs/decisions/ADR-009-ai-feedback-engines.md` | `docs/decisions/ADR-009-ai-feedback-engines.md` | Decisions | Keep | AI / Decisions | Medium | Keep as ADR; link from future AI folder. |
| `docs/experience/EXPERIENCE_PHILOSOPHY.md` | `docs/experience/EXPERIENCE_PHILOSOPHY.md` | Experience | Keep | Experience | Low | Already in correct domain. |
| `docs/experience/VISUAL_COMMUNICATION_SYSTEM.md` | `docs/experience/VISUAL_COMMUNICATION_SYSTEM.md` | Experience | Keep | Experience | Low | Already in correct domain. |
| `docs/reference/INITIAL_REPO_STRUCTURE.md` | `docs/reference/INITIAL_REPO_STRUCTURE.md` or `docs/archive/INITIAL_REPO_STRUCTURE.md` | Archive / Reference | Archive Later | Archive | Low | Mark historical later; final archive/reference decision needed first. |
| `docs/strategy/BLUEPRINT.md` | `docs/strategy/BLUEPRINT.md` | Strategy | Keep | Strategy | Medium | Primary strategy source of truth. |
| `docs/strategy/DECISIONS.md` | `docs/decisions/DECISIONS.md` | Decisions | Review Before Move | Decisions | High | Decide whether to move as legacy decision log or split stable/open decisions. |
| `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md` | `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md` | Strategy | Keep | Strategy | Low | Canonical capability development system philosophy and current-pathway positioning source. |
| `docs/strategy/PROJECT-BRAIN.md` | `docs/reference/PROJECT-BRAIN.md` or `docs/archive/PROJECT-BRAIN.md` | Archive / Reference | Archive Later | Archive | Medium | Historical broad project brain; preserve context but avoid active authority. |
| `docs/strategy/ROADMAP.md` | `docs/strategy/ROADMAP.md` | Strategy | Keep | Strategy | Low | Keep as roadmap source. |
| `docs/strategy/STRATEGY.md` | `docs/strategy/STRATEGY.md` | Strategy | Review Before Move | Strategy | Low | Keep for now; later clarify historical/current sections. |
| `docs/validation/scenario-engine-validation-log.md` | `docs/validation/scenario-engine-validation-log.md` | Validation | Keep | AI / Validation | Medium | Link from future AI docs. |
| `docs/.DS_Store` | None | Repository Hygiene | Cleanup Only | Cleanup | Low | Not part of documentation migration. Handle only as repository hygiene in an approved cleanup pass. |
| `web/PRODUCT_ARCHITECTURE.md` | `docs/strategy/PRODUCT_ARCHITECTURE.md` or `docs/architecture/PRODUCT_ARCHITECTURE.md` | Strategy / Architecture | Review Before Move | Web Docs | High | Overlaps product vision, content architecture, and experience docs; compare before moving. |
| `web/AI_INTERACTION_TAXONOMY.md` | `docs/ai/AI_INTERACTION_TAXONOMY.md` or `docs/experience/AI_INTERACTION_TAXONOMY.md` | AI / Experience | Review Before Move | AI | High | Decide whether this is learner-facing AI experience or AI behavior taxonomy. |
| `web/AI_TEAM_OPERATING_MODEL.md` | `docs/implementation/AI_TEAM_OPERATING_MODEL.md` or `docs/reference/AI_TEAM_OPERATING_MODEL.md` | Implementation / Contributor Guidance | Review Before Move | Implementation | Medium | Could be active contributor guidance or historical operating model. |
| `web/DESIGN_SYSTEM_STRATEGY.md` | `docs/design-system/DESIGN_SYSTEM_STRATEGY.md` | Design System | Review Before Move | Design System | High | Compare against current design-system docs before moving or merging. |
| `docs/design-system/README.md` | `docs/design-system/README.md` | Design System | Create Later | Design System | Medium | Create when design-system folder is created. |
| `docs/ai/README.md` | `docs/ai/README.md` | AI | Create Later | AI | Medium | Create when AI folder scope is approved. |
| `docs/implementation/README.md` | `docs/implementation/README.md` | Implementation / Contributor Guidance | Create Later | Implementation | Medium | Create if system/Copilot docs move into implementation folder. |
| `docs/decisions/README.md` | `docs/decisions/README.md` | Decisions | Create Later | Decisions | Low | Add when decision docs grow or `DECISIONS.md` moves. |
| `docs/validation/README.md` | `docs/validation/README.md` | Validation | Create Later | Validation | Low | Add if validation docs expand. |

## Atomic Move And Link-Update Rule

Each move group must include link/reference updates in the same execution pass. Do not move a group first and update links later.

For every approved move group:

- search for current path references before moving
- move only the approved files in that group
- update references in the same pass
- re-run path searches immediately after the move
- verify `docs/README.md`, `SYSTEM-INSTRUCTIONS.md`, and `COPILOT-INSTRUCTIONS.md` still point to the right source-of-truth docs

## Move-Together Groups

### Design System Group

Move together or not at all:

- `docs/architecture/DESIGN_SYSTEM.md`
- `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md`
- `docs/COMPONENT_ARCHITECTURE_V1.md`

Recommended target:

- `docs/design-system/DESIGN_SYSTEM.md`
- `docs/design-system/DESIGN_SYSTEM_CHANGELOG.md`
- `docs/design-system/COMPONENT_ARCHITECTURE_V1.md`

Reason: these files jointly define visual/UX principles, design-system history, and component architecture. Partial movement would create unclear ownership and broken references.

### AI Group

Review together before movement:

- `docs/decisions/ADR-009-ai-feedback-engines.md`
- `docs/validation/scenario-engine-validation-log.md`
- `web/AI_INTERACTION_TAXONOMY.md`
- future `docs/ai/README.md`

Recommended approach: keep ADR and validation files in their current domains, but create `docs/ai/README.md` later to link to them and define AI behavior ownership. Move `web/AI_INTERACTION_TAXONOMY.md` only after deciding whether it is AI implementation guidance or learner-facing AI experience.

### Implementation / Contributor Guidance Group

Keep in place for Sprint 4. Move together or not at all only in a later dedicated implementation-guidance sprint:

- `docs/SYSTEM-INSTRUCTIONS.md`
- `docs/COPILOT-INSTRUCTIONS.md`

Review with:

- `web/README.md`
- `web/AI_TEAM_OPERATING_MODEL.md`
- future `docs/implementation/README.md`

Reason: system and Copilot instructions reference active documentation paths and define AI assistant behavior. Moving them without coordinated reference updates would create high risk. They should not move during the minimum Sprint 4 execution scope.

### README Group

Consolidate before archive:

- `README.md`
- `READMEV2.md`
- `READMEV3.md`
- `web/README.md`
- `docs/README_CONSOLIDATION_PLAN.md`

Reason: root README strategy determines what becomes public-facing, what becomes docs-hub content, and what becomes historical.

## README Consolidation Plan

`docs/README_CONSOLIDATION_PLAN.md` remains the source plan for README consolidation.

Intended future:

- Root `README.md` becomes the public-facing project front door.
- `docs/README.md` remains the documentation hub.
- `READMEV2.md` and `READMEV3.md` are merged and archived later, after their strongest content is preserved.
- `web/README.md` becomes app-specific contributor guidance focused on scripts, environment variables, local workflow, validation, and deployment.

Do not rewrite README files during migration blueprint work. README consolidation should happen as its own approved execution step.

## Web Documentation Review

The audit discovered several Markdown files under `web/` that behave like documentation rather than application code.

| File | Recommended Target Domain | Recommendation | Reason |
|---|---|---|---|
| `web/PRODUCT_ARCHITECTURE.md` | Strategy / Architecture | Review before move | It overlaps product vision, content architecture, learning architecture, and experience docs. Determine whether to merge into strategy, keep as architecture reference, or archive. |
| `web/AI_INTERACTION_TAXONOMY.md` | AI / Experience | Review before move | It defines AI interaction levels and public-facing AI language. Decide whether it belongs in `docs/ai/` or `docs/experience/`. |
| `web/AI_TEAM_OPERATING_MODEL.md` | Implementation / Contributor Guidance | Review before move | It describes AI-assisted team roles and development lifecycle. Decide whether it remains active guidance or becomes historical/reference. |
| `web/DESIGN_SYSTEM_STRATEGY.md` | Design System | Review before move or merge | It may overlap `DESIGN_SYSTEM.md`, `COMPONENT_ARCHITECTURE_V1.md`, and design-system changelog. Compare before moving. |

Do not migrate `web/*.md` docs without checking whether they are referenced by app code, tooling, README files, or AI instructions.

## Link and Reference Update Checklist

Before and after migration, check references in:

- `docs/SYSTEM-INSTRUCTIONS.md`
- `docs/COPILOT-INSTRUCTIONS.md`
- `docs/README.md`
- `docs/DOCUMENTATION_ARCHITECTURE.md`
- `docs/DOCUMENTATION_INVENTORY.md`
- `docs/DOCUMENT_DOMAIN_AUDIT.md`
- `docs/DOCUMENTATION_MIGRATION_BLUEPRINT.md`
- root `README.md`
- `web/README.md`
- any docs that reference old root-level paths such as `docs/COMPONENT_ARCHITECTURE_V1.md` or `docs/strategy/LANDING_PAGE_STRATEGY.md`
- any docs that reference `docs/architecture/DESIGN_SYSTEM.md` or `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md`
- any docs that reference `docs/strategy/DECISIONS.md`
- any docs that reference discovered `web/*.md` documentation files

Recommended checks:

- Search for old paths before moving files.
- Move files only after the update list is known.
- Update links in the same execution pass as each move group.
- Re-run path search after each move group.
- Confirm `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md` still point to the right source-of-truth docs.
- Exclude `.kilo/plans/*.md` and similar tool-generated internal planning artifacts unless they are explicitly brought into scope.

## Archive vs Reference Decision

Recommendation: use both `docs/reference/` and `docs/archive/`, with different responsibilities. Do not create either folder during blueprint revision work.

Use `docs/reference/` for historical context that may still be useful, such as:

- initial repo structure snapshots
- older product architecture context
- useful planning notes that should remain readable

Use `docs/archive/` for superseded documents that should no longer be treated as active guidance, such as:

- alternate README versions after consolidation
- broad project-brain docs that have been replaced by more specific source-of-truth docs
- stale drafts preserved only for history

Do not create `docs/archive/` yet. Do not move files into `docs/reference/` or `docs/archive/` until migration execution is approved.

## Migration Execution Sequence

Safest sequence:

1. Finalize README strategy.
2. Create missing domain folders.
3. Move low-risk docs first.
4. Move strategy docs.
5. Move architecture docs.
6. Move experience docs only if needed.
7. Move design-system docs as a group.
8. Review and move AI docs.
9. Review and move implementation guidance.
10. Update links in the same pass as each move group.
11. Archive or merge README variants only after README consolidation is approved.
12. Validate navigation and AI instructions.

Detailed execution guidance:

- Start with documents that are clearly misplaced and low-risk.
- Do not move `SYSTEM-INSTRUCTIONS.md` or `COPILOT-INSTRUCTIONS.md` in Sprint 4; defer them to a dedicated implementation-guidance sprint.
- Do not move design-system docs one at a time.
- Do not archive README variants until the final root README has incorporated their useful content.
- Validate links and source-of-truth guidance immediately after each move group.
- Treat `.DS_Store` as repository hygiene, not documentation migration.
- Exclude `.kilo/plans/*.md` and similar tool/internal artifacts unless explicitly reviewed later.

## Risks and Guardrails

- Do not partially move move-together groups.
- Do not move files referenced by AI/system instructions without updating references in the same execution pass.
- Do not leave competing source-of-truth documents active.
- Do not bury the root README value proposition.
- Do not make `docs/README.md` too vague.
- Do not migrate `web/*.md` docs without checking whether paths are referenced from app code, tooling, README files, or AI instructions.
- Do not migrate `.kilo/plans/*.md` or similar tool-generated internal planning artifacts unless explicitly reviewed later.
- Do not create `docs/ai/` without deciding what belongs in AI versus Experience.
- Do not create `docs/design-system/` and move only part of the design-system group.
- Do not treat archived or reference docs as active guidance.
- Do not rewrite foundational strategy during migration.

## Sprint 4 Minimum Safe Scope

The narrow first execution pass should be intentionally conservative:

- Create approved domain folders.
- Move low-risk docs only.
- Update links in the same pass for moved files.
- Defer README variant archiving and consolidation.
- Defer AI doc migration unless the target domain is already clearly classified.
- Defer `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md`.
- Defer `web/README.md` changes.
- Defer `.kilo/plans/*.md` and similar tool/internal artifacts.
- Treat `.DS_Store` as cleanup only, not documentation migration.

## Sprint 4 Recommendation

Sprint 4 should be Migration Execution only after this blueprint is reviewed and hardened.

Recommended Sprint 4 scope:

- create approved missing folders
- execute only approved low-risk moves first
- update links in the same pass as each moved group
- keep README consolidation as a separate controlled step unless explicitly approved
- verify navigation through `docs/README.md`
- verify AI assistant guidance through `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md`

Sprint 4 should not expand scope into content rewrites, design-system revisions, app code changes, or README consolidation unless explicitly approved.
