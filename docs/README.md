# Future of ID Documentation Hub

## Documentation Hub

This folder contains the strategy, architecture, experience, implementation, validation, and governance documentation for Future of ID.

This README is the main navigation hub for internal documentation. It does not replace the root `README.md`, and it is not intended to be a full architecture manual.

Use this file to decide where to start and which documents to read before making product, design, content, AI, or implementation decisions.

## Recommended Reading Path

1. Product overview: start with the root `README.md`.
2. Documentation architecture: read `DOCUMENTATION_ARCHITECTURE.md`.
3. Documentation inventory: read `DOCUMENTATION_INVENTORY.md`.
4. Strategy docs: read `strategy/BLUEPRINT.md`, `strategy/FUTURE_READY_CAPABILITY_MODEL.md`, and `strategy/ROADMAP.md`.
5. Architecture docs: read `architecture/TECH_ARCHITECTURE.md`, `architecture/CONTENT_ARCHITECTURE.md`, and `architecture/SITE_MAP.md`.
6. Experience docs: read `experience/EXPERIENCE_PHILOSOPHY.md` and `experience/VISUAL_COMMUNICATION_SYSTEM.md`.
7. Design system docs: read `architecture/DESIGN_SYSTEM.md`, `COMPONENT_ARCHITECTURE_V1.md`, and `architecture/DESIGN_SYSTEM_CHANGELOG.md`.
8. AI docs: read `decisions/ADR-009-ai-feedback-engines.md` and `validation/scenario-engine-validation-log.md` until dedicated `docs/ai/` docs exist.
9. Implementation / contributor guidance: read `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md`.
10. Decisions and validation: read `decisions/` and `validation/` for rationale, audits, QA notes, and evidence.

## Documentation Domains

### Strategy

Product vision, roadmap, capability model, positioning, and long-range direction.

Current location: `strategy/`

### Architecture

Technical architecture, content architecture, site map, system structure, and implementation boundaries.

Current location: `architecture/`

### Experience

Learner experience philosophy, visual communication, page experience direction, motion principles, AI experience standards, and signature moments.

Current location: `experience/`

### Design System

Design tokens, UI principles, component standards, reusable component architecture, and Figma-to-React alignment.

Current status: transitional. Some design-system documents currently live at `docs/` and `docs/architecture/`.

### AI

Prompt architecture, AI service behavior, response contracts, validation, safety, and implementation behavior.

Current status: transitional. Dedicated `docs/ai/` docs do not exist yet.

### Implementation / Contributor Guidance

Repository working rules, AI assistant instructions, engineering constraints, file organization expectations, and contributor guidance.

Current files: `SYSTEM-INSTRUCTIONS.md`, `COPILOT-INSTRUCTIONS.md`, and `../web/README.md`.

### Decisions

Decision logs, ADRs, rationale, tradeoffs, and outcomes.

Current location: `decisions/`

### Validation

Audits, QA notes, review findings, external critiques, validation logs, and readiness assessments.

Current location: `validation/`

### Documentation Governance

Planning documents that define how documentation is organized, inventoried, and safely reorganized.

Current files: `DOCUMENTATION_ARCHITECTURE.md` and `DOCUMENTATION_INVENTORY.md`.

### Archive / Reference

Historical, superseded, or reference-only documents may later live in `archive/` or `reference/`.

Current status: final archive/reference strategy is not decided yet.

## Source of Truth Guide

| Decision Type | Start Here |
|---|---|
| Product vision | `strategy/BLUEPRINT.md` |
| Product strategy | `strategy/STRATEGY.md` |
| Roadmap and phase planning | `strategy/ROADMAP.md` |
| Capability model | `strategy/FUTURE_READY_CAPABILITY_MODEL.md` |
| Content model | `architecture/CONTENT_ARCHITECTURE.md` |
| Technical direction | `architecture/TECH_ARCHITECTURE.md` |
| Site and route structure | `architecture/SITE_MAP.md` |
| Learner experience | `experience/EXPERIENCE_PHILOSOPHY.md` |
| Visual communication | `experience/VISUAL_COMMUNICATION_SYSTEM.md` |
| Design system | `architecture/DESIGN_SYSTEM.md` |
| Component architecture | `COMPONENT_ARCHITECTURE_V1.md` |
| AI feedback engine decisions | `decisions/ADR-009-ai-feedback-engines.md` |
| AI validation evidence | `validation/scenario-engine-validation-log.md` |
| Implementation guidance | `SYSTEM-INSTRUCTIONS.md` |
| AI assistant guidance | `COPILOT-INSTRUCTIONS.md` |
| Documentation structure | `DOCUMENTATION_ARCHITECTURE.md` |
| File migration planning | `DOCUMENTATION_INVENTORY.md` |

## Current Documentation Status

The documentation ecosystem is in a transitional state.

Some files are already in their intended domain folders. Others still live in transitional locations and should not be moved until the migration plan is executed.

In particular:

- Do not move design-system files until `DESIGN_SYSTEM.md`, `DESIGN_SYSTEM_CHANGELOG.md`, and `COMPONENT_ARCHITECTURE_V1.md` can move together or intentionally remain in place.
- Do not move files referenced by `SYSTEM-INSTRUCTIONS.md` or `COPILOT-INSTRUCTIONS.md` until a link/reference update pass is planned.
- Do not consolidate root README variants until the README strategy is finalized.
- Do not create archive or reference folders until the archive/reference strategy is approved.

## Guidance for AI Assistants

AI assistants should:

- read the root `README.md` first for project context
- read this `docs/README.md` for documentation navigation
- use the source-of-truth guide before editing
- avoid inventing new patterns when an existing doc applies
- avoid moving files unless specifically instructed
- preserve historical context where documents are marked transitional, historical, or superseded
- update documentation links deliberately when files eventually move

## Related Governance Docs

- `DOCUMENTATION_ARCHITECTURE.md`
- `DOCUMENTATION_INVENTORY.md`
