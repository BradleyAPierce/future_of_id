# Documentation Domain Audit

## Purpose

This audit validates document ownership and responsibility before any Future of ID documentation migration happens.

It evaluates whether existing documentation files belong in the correct proposed domain, whether each document has a clear responsibility, and whether each should be kept, moved, merged, archived, renamed, reviewed, or consolidated later.

This document does not move, delete, rename, merge, archive, or rewrite files. It is an architecture audit for planning Sprint 3.

## Audit Criteria

Each document is evaluated against these questions:

- Does it still need to exist?
- Does it have a single responsibility?
- Is it a source of truth, supporting reference, planning doc, or superseded artifact?
- Does another document already cover the same purpose?
- Should it be kept, moved, merged, archived, renamed, or reviewed?
- Would a human know when to read it?
- Would an AI assistant know when to read it?

Recommended actions are planning labels only. They do not authorize file movement or deletion.

## Domain Audit Table

| Document | Current Location | Proposed Domain | Document Role | Responsibility Clarity | Recommended Action | Rationale | Follow-Up Needed |
|---|---|---|---|---|---|---|---|
| `README.md` | Root | Root README | Transitional | Medium | Consolidate Later | Best current public entry point, but too long and partly overlaps with docs navigation. | Use `README_CONSOLIDATION_PLAN.md` before rewriting. |
| `READMEV2.md` | Root | Archive / Reference | Historical / Superseded | Medium | Merge | Contains useful earlier positioning and audience language, but should not remain a competing README. | Extract strongest language, then archive/remove later if approved. |
| `READMEV3.md` | Root | Archive / Reference | Historical / Superseded | Medium | Merge | Contains strong tagline and feature framing, but has stale terminology and malformed Markdown. | Extract strongest language, update terminology, then archive/remove later if approved. |
| `web/README.md` | `web/` | Implementation / Contributor Guidance | Transitional | Low | Review | Currently generic Next.js boilerplate rather than Future of ID-specific app guidance. | Rewrite later as app-specific setup, scripts, env, validation, and deployment guide. |
| `DOCUMENTATION_ARCHITECTURE.md` | `docs/` | Documentation Governance | Planning / Governance | High | Keep | Defines the documentation domain model and migration principles. | Link from docs hub and use as Sprint 3 input. |
| `DOCUMENTATION_INVENTORY.md` | `docs/` | Documentation Governance | Planning / Governance | High | Keep | Inventories existing docs and identifies target domains. | Update after any future migration. |
| `DOCUMENT_DOMAIN_AUDIT.md` | `docs/` | Documentation Governance | Planning / Governance | High | Keep | Domain-level audit for migration readiness. | Use as input to Sprint 3 Migration Blueprint. |
| `README_CONSOLIDATION_PLAN.md` | `docs/` | Documentation Governance | Planning / Governance | High | Keep | Plans README consolidation without editing README files. | Use before root README rewrite. |
| `README.md` | `docs/` | Documentation Hub | Supporting Reference | High | Keep | Main navigation hub for documentation ecosystem. | Update after files move. |
| `SYSTEM-INSTRUCTIONS.md` | `docs/` | Implementation / Contributor Guidance | Contributor Guidance | High | Keep | Source-of-truth hierarchy and operating rules for AI/contributors. | Do not move referenced docs until link update pass is planned. |
| `COPILOT-INSTRUCTIONS.md` | `docs/` | Implementation / Contributor Guidance | Contributor Guidance | High | Keep | Detailed coding assistant implementation guidance. | Keep aligned with `SYSTEM-INSTRUCTIONS.md`. |
| `COMPONENT_ARCHITECTURE_V1.md` | `docs/` | Design System | Source of Truth | High | Move | Governs component inventory, variants, states, and React/Figma mapping. | Move only with `DESIGN_SYSTEM.md` and `DESIGN_SYSTEM_CHANGELOG.md`, or not yet. |
| `LANDING_PAGE_STRATEGY.md` | `docs/` | Strategy | Supporting Reference | Medium | Move | Landing strategy belongs with product/strategy docs if current. | Review for currency before moving to `docs/strategy/`. |
| `CONTENT_ARCHITECTURE.md` | `docs/architecture/` | Architecture | Source of Truth | High | Keep | Authoritative content model and module structure guidance. | Cross-link later with future page experience patterns. |
| `DESIGN_SYSTEM.md` | `docs/architecture/` | Design System | Source of Truth | High | Move | Governs visual/UX principles and tokens; current location is transitional. | Move only with component architecture and changelog. |
| `DESIGN_SYSTEM_CHANGELOG.md` | `docs/architecture/` | Design System | Supporting Reference | High | Move | Tracks design-system milestones and architectural changes. | Move only with `DESIGN_SYSTEM.md` and `COMPONENT_ARCHITECTURE_V1.md`. |
| `SITE_MAP.md` | `docs/architecture/` | Architecture | Supporting Reference | High | Keep | Defines page structure, routes, and module page flow. | Validate against current routes before migration. |
| `TECH_ARCHITECTURE.md` | `docs/architecture/` | Architecture | Source of Truth | High | Keep | Authoritative technical direction and stack guidance. | Cross-link with implementation guidance and AI docs later. |
| `ADR-009-ai-feedback-engines.md` | `docs/decisions/` | Decisions | Source of Truth | High | Keep | Captures AI feedback engine decision history and reopen criteria. | Link from future `docs/ai/` docs. |
| `EXPERIENCE_PHILOSOPHY.md` | `docs/experience/` | Experience | Source of Truth | High | Keep | Defines product feel, learner agency, learning loop, and experience standards. | Link future motion, page pattern, signature moments, and AI experience docs. |
| `VISUAL_COMMUNICATION_SYSTEM.md` | `docs/experience/` | Experience | Source of Truth | High | Keep | Defines learner-facing visual communication standards. | Clarify relationship with future design-system docs. |
| `INITIAL_REPO_STRUCTURE.md` | `docs/reference/` | Archive / Reference | Historical / Superseded | High | Archive | Useful initial structure snapshot, but not current source of truth. | Mark historical or move after archive/reference strategy is finalized. |
| `BLUEPRINT.md` | `docs/strategy/` | Strategy | Source of Truth | High | Keep | Primary product vision and learning architecture source. | Preserve as top-level strategy authority. |
| `DECISIONS.md` | `docs/strategy/` | Decisions | Transitional | Medium | Move | Decision log content belongs in Decisions, though some content overlaps strategy. | Decide whether to move as-is or split stable decisions from strategy notes. |
| `FUTURE_READY_CAPABILITY_MODEL.md` | `docs/strategy/` | Strategy | Source of Truth | High | Keep | Canonical capability development system philosophy, current-pathway positioning, and capability rationale. | Product vision and public content should derive positioning from this source rather than duplicate the canonical definition. |
| `PROJECT-BRAIN.md` | `docs/strategy/` | Archive / Reference | Historical / Superseded | Medium | Archive | Broad project brain overlaps strategy, architecture, AI, coding standards, and system instructions. | Preserve historical context; do not treat as active authority unless refreshed. |
| `ROADMAP.md` | `docs/strategy/` | Strategy | Source of Truth | High | Keep | Current roadmap and phase planning. | Review after major documentation migration. |
| `STRATEGY.md` | `docs/strategy/` | Strategy | Supporting Reference | Medium | Review | Contains valuable strategy notes and a dated historical snapshot. | Clarify current vs historical sections later. |
| `scenario-engine-validation-log.md` | `docs/validation/` | Validation | Validation / Review | High | Keep | Evidence and validation log for scenario engine behavior. | Link from future AI documentation. |
| `.DS_Store` | `docs/` | Archive / Reference | Historical / Superseded | Low | Archive | System artifact, not documentation. | Remove only in approved cleanup pass. |
| `AI_INTERACTION_TAXONOMY.md` | `web/` | AI / Experience | Transitional | Medium | Review | Defines AI interaction levels and public-facing AI language, but lives inside app folder. | Decide whether to move to `docs/ai/` or `docs/experience/` during migration blueprint. |
| `AI_TEAM_OPERATING_MODEL.md` | `web/` | Implementation / Contributor Guidance | Contributor Guidance | Medium | Review | Defines AI-assisted team roles and lifecycle; likely belongs outside app code. | Decide whether it belongs in implementation guidance, AI, or archive/reference. |
| `DESIGN_SYSTEM_STRATEGY.md` | `web/` | Design System | Transitional | Medium | Review | Design-system strategy doc discovered under app folder. | Compare against `DESIGN_SYSTEM.md` and component architecture before moving/merging. |
| `PRODUCT_ARCHITECTURE.md` | `web/` | Strategy / Architecture | Transitional | Medium | Review | Product architecture doc overlaps strategy, content architecture, and experience docs. | Decide whether to move, merge, or archive after content comparison. |

## Domain-Level Findings

### Root README

Current state: The root README is the best public entry point but still mixes public positioning with internal architecture details.

Gaps: Final concise README has not been written. README variants still compete with it.

Risks: Keeping multiple README versions too long creates confusion for humans and AI assistants.

Recommended next action: Use `README_CONSOLIDATION_PLAN.md` to draft the final root README before archiving alternates.

### Documentation Hub

Current state: `docs/README.md` now exists and gives a usable navigation path.

Gaps: It will need link updates after any migration. Folder-level README files do not exist yet.

Risks: If the hub becomes too detailed, it could duplicate domain docs.

Recommended next action: Keep it stable until migration blueprint defines exact target paths.

### Documentation Governance

Current state: Architecture, inventory, README consolidation, and this audit now create a strong planning layer.

Gaps: No migration blueprint yet.

Risks: Too much governance without action could slow cleanup, but the current level is justified before moving files.

Recommended next action: Sprint 3 should create a migration blueprint with exact source-to-target paths and link updates.

### Strategy

Current state: Strong strategy base exists in `BLUEPRINT.md`, `FUTURE_READY_CAPABILITY_MODEL.md`, `ROADMAP.md`, and `STRATEGY.md`.

Gaps: `STRATEGY.md` has historical sections that may need clearer labeling. `LANDING_PAGE_STRATEGY.md` lives at docs root.

Risks: `BLUEPRINT.md`, `PROJECT-BRAIN.md`, `STRATEGY.md`, and `PRODUCT_ARCHITECTURE.md` can all appear authoritative for product direction.

Recommended next action: Preserve `BLUEPRINT.md` and capability model as source of truth; classify or archive overlapping strategy artifacts later.

### Architecture

Current state: Technical, content, and site architecture docs are clearly organized under `docs/architecture/`.

Gaps: Some architecture-like docs are discovered under `web/`, especially `PRODUCT_ARCHITECTURE.md`.

Risks: Technical architecture and implementation guidance can overlap if contributors use `PROJECT-BRAIN.md` or web docs as current authority.

Recommended next action: Keep core architecture docs in place until the migration blueprint maps discovered `web/` docs.

### Experience

Current state: Experience philosophy and visual communication docs are strong and clearly scoped.

Gaps: Future page patterns, motion, AI experience, and signature moments docs are not created yet.

Risks: Learner-facing AI guidance may overlap with future `docs/ai/` unless ownership remains clear.

Recommended next action: Keep current docs; define future experience docs after migration blueprint.

### Design System

Current state: Design-system authority exists but is split between `docs/architecture/`, `docs/`, and discovered `web/` docs.

Gaps: `docs/design-system/` folder and folder README do not exist yet.

Risks: Moving one design-system doc without the others will break mental model and links.

Recommended next action: Move `DESIGN_SYSTEM.md`, `DESIGN_SYSTEM_CHANGELOG.md`, and `COMPONENT_ARCHITECTURE_V1.md` together or leave all in place.

### AI

Current state: AI decisions and validation evidence exist, and `web/AI_INTERACTION_TAXONOMY.md` adds useful taxonomy content.

Gaps: Dedicated `docs/ai/` folder and AI source-of-truth docs do not exist yet.

Risks: AI behavior could be split across experience, decisions, validation, and web docs with unclear authority.

Recommended next action: Sprint 3 should map AI docs carefully before creating/moving `docs/ai/` content.

### Implementation / Contributor Guidance

Current state: `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md` are strong active guidance docs. `web/README.md` is not yet useful project guidance.

Gaps: `web/README.md` needs a Future of ID-specific rewrite later. `web/AI_TEAM_OPERATING_MODEL.md` may belong here or in archive/reference.

Risks: Moving docs referenced by system/Copilot instructions before link updates would confuse future agent work.

Recommended next action: Do not move linked docs until Sprint 3 includes reference update steps.

### Decisions

Current state: ADR-009 is clearly placed and useful. `docs/strategy/DECISIONS.md` is transitional.

Gaps: Folder-level decisions README does not exist.

Risks: Older `DECISIONS.md` may conflict with ADR-style decision records if both are treated as equally current.

Recommended next action: Decide whether `DECISIONS.md` moves as a legacy decision log or is split later.

### Validation

Current state: Scenario engine validation log is clear and correctly placed.

Gaps: Folder-level validation README does not exist. More audits may need consistent naming.

Risks: Validation docs may become hard to scan as more reviews accumulate.

Recommended next action: Add validation README later, after migration path is approved.

### Archive / Reference

Current state: `docs/reference/INITIAL_REPO_STRUCTURE.md` exists, but archive/reference strategy is not finalized.

Gaps: No `docs/archive/` decision yet. Several superseded docs need a safe future home.

Risks: Historical documents may be mistaken for current guidance.

Recommended next action: Sprint 3 should decide between `docs/reference/`, `docs/archive/`, or both.

## Overlap and Duplication Findings

- `README.md`, `READMEV2.md`, and `READMEV3.md` overlap heavily on project purpose, audience, learning model, tech stack, and local setup. Sprint 1 planning already covers consolidation.
- `BLUEPRINT.md`, `PROJECT-BRAIN.md`, `STRATEGY.md`, and `web/PRODUCT_ARCHITECTURE.md` may all appear to define product direction. `BLUEPRINT.md` should remain primary; the others should be supporting, historical, or reviewed.
- `CONTENT_ARCHITECTURE.md` defines current module/content structure. Future `PAGE_EXPERIENCE_PATTERNS.md` should not duplicate it; it should translate content architecture into reusable page experience patterns.
- `TECH_ARCHITECTURE.md`, `SYSTEM-INSTRUCTIONS.md`, `COPILOT-INSTRUCTIONS.md`, and `PROJECT-BRAIN.md` overlap on implementation expectations. `TECH_ARCHITECTURE.md` should own system structure; system/Copilot docs should own contributor behavior.
- `EXPERIENCE_PHILOSOPHY.md`, `web/AI_INTERACTION_TAXONOMY.md`, and future `AI_EXPERIENCE_SYSTEM.md` may overlap on learner-facing AI expectations. Experience should own feel and interaction; AI docs should own behavior/contracts.
- `VISUAL_COMMUNICATION_SYSTEM.md`, `DESIGN_SYSTEM.md`, `COMPONENT_ARCHITECTURE_V1.md`, and `web/DESIGN_SYSTEM_STRATEGY.md` may overlap on visual/UI standards. Visual communication should own learner-facing visual explanation; design-system docs should own UI primitives and implementation standards.

## Source-of-Truth Conflicts

Potential conflicts to resolve before migration:

- Product vision: `BLUEPRINT.md` vs `STRATEGY.md` vs `PROJECT-BRAIN.md` vs `web/PRODUCT_ARCHITECTURE.md`.
- Learning architecture: `BLUEPRINT.md` vs `CONTENT_ARCHITECTURE.md` vs `web/PRODUCT_ARCHITECTURE.md`.
- Technical architecture: `TECH_ARCHITECTURE.md` vs `PROJECT-BRAIN.md` vs `SYSTEM-INSTRUCTIONS.md`.
- Design system: `DESIGN_SYSTEM.md` vs `COMPONENT_ARCHITECTURE_V1.md` vs `web/DESIGN_SYSTEM_STRATEGY.md`.
- AI behavior: ADR-009 vs validation log vs `web/AI_INTERACTION_TAXONOMY.md` vs future AI docs.
- Decision history: `docs/strategy/DECISIONS.md` vs ADR records.

These are manageable, but Sprint 3 should explicitly assign source-of-truth ownership before files move.

## AI Assistant Reading Path

Before changing product strategy, read:

- `README.md`
- `docs/README.md`
- `docs/strategy/BLUEPRINT.md`
- `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md`
- `docs/strategy/ROADMAP.md`
- `docs/strategy/STRATEGY.md`

Before changing learning/content structure, read:

- `docs/README.md`
- `docs/strategy/BLUEPRINT.md`
- `docs/architecture/CONTENT_ARCHITECTURE.md`
- `docs/strategy/FUTURE_READY_CAPABILITY_MODEL.md`
- `docs/architecture/SITE_MAP.md`

Before changing technical architecture, read:

- `docs/README.md`
- `docs/architecture/TECH_ARCHITECTURE.md`
- `docs/SYSTEM-INSTRUCTIONS.md`
- `docs/COPILOT-INSTRUCTIONS.md`

Before changing UI/design system, read:

- `docs/README.md`
- `docs/architecture/DESIGN_SYSTEM.md`
- `docs/COMPONENT_ARCHITECTURE_V1.md`
- `docs/architecture/DESIGN_SYSTEM_CHANGELOG.md`
- `docs/experience/VISUAL_COMMUNICATION_SYSTEM.md`

Before changing learner experience, read:

- `docs/README.md`
- `docs/experience/EXPERIENCE_PHILOSOPHY.md`
- `docs/experience/VISUAL_COMMUNICATION_SYSTEM.md`
- `docs/architecture/CONTENT_ARCHITECTURE.md`
- `docs/strategy/BLUEPRINT.md`

Before changing AI behavior, read:

- `docs/README.md`
- `docs/decisions/ADR-009-ai-feedback-engines.md`
- `docs/validation/scenario-engine-validation-log.md`
- `docs/experience/EXPERIENCE_PHILOSOPHY.md`
- `web/AI_INTERACTION_TAXONOMY.md` if still present before migration

Before changing documentation structure, read:

- `docs/README.md`
- `docs/DOCUMENTATION_ARCHITECTURE.md`
- `docs/DOCUMENTATION_INVENTORY.md`
- `docs/README_CONSOLIDATION_PLAN.md`
- `docs/DOCUMENT_DOMAIN_AUDIT.md`

## Migration Readiness by Domain

| Domain | Readiness | Reason | Required Before Migration |
|---|---|---|---|
| Root README | Ready After Minor Cleanup | Consolidation plan exists, but final rewrite has not happened. | Draft final README and decide fate of README variants. |
| Documentation Hub | Ready After Minor Cleanup | Hub exists and is usable, but paths are transitional. | Update after file moves. |
| Documentation Governance | Ready | Architecture, inventory, README plan, and audit now exist. | Use governance docs to create migration blueprint. |
| Strategy | Ready After Minor Cleanup | Core docs are strong, but overlaps exist. | Decide status of `PROJECT-BRAIN.md`, `STRATEGY.md`, `LANDING_PAGE_STRATEGY.md`, and `web/PRODUCT_ARCHITECTURE.md`. |
| Architecture | Ready After Minor Cleanup | Core docs are organized, but discovered web docs overlap. | Map `web/PRODUCT_ARCHITECTURE.md` and update links. |
| Experience | Ready | Experience docs are clear and correctly located. | Future docs can wait until after migration blueprint. |
| Design System | Not Ready Yet | Docs are split across root, architecture, and web locations. | Move design-system docs together or leave them until target folder is ready. |
| AI | Not Ready Yet | AI docs are split across decisions, validation, experience, and web. | Decide `docs/ai/` scope and target files before moving. |
| Implementation / Contributor Guidance | Ready After Minor Cleanup | System/Copilot docs are strong; web README is generic. | Plan web README rewrite and link updates. |
| Decisions | Ready After Minor Cleanup | ADR is well placed; older decisions doc is transitional. | Decide whether to move or split `docs/strategy/DECISIONS.md`. |
| Validation | Ready After Minor Cleanup | Validation log is clear but domain lacks README. | Add folder-level README later if validation docs grow. |
| Archive / Reference | Not Ready Yet | Reference folder exists but archive strategy is undecided. | Decide archive vs reference model before moving superseded docs. |

## Recommended Next Sprint

Sprint 3 should be a Migration Blueprint, not the migration itself.

Recommended Sprint 3 outputs:

- exact source-to-target path map for each document
- files that must move together
- files that should remain in place for now
- files that need merge/archive decisions before movement
- link/reference update checklist
- source-of-truth ownership table after migration
- rollback-safe migration order
- docs that should be marked historical rather than rewritten

Migration should begin only after the blueprint is reviewed and approved.
