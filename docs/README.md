# Future of ID Documentation Hub

## Documentation Hub

This folder contains the strategy, architecture, experience, implementation, validation, and governance documentation for Future of ID.

This README is the main navigation hub for internal documentation. It does not replace the root `README.md`, and it is not intended to be a full architecture manual.

Use this file to decide where to start and which documents to read before making product, design, content, AI, or implementation decisions.

## Public Launch Readiness Authority

`strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` is the authoritative execution checklist for all work required before Future of ID's first public introduction. It controls launch-readiness scope, execution order, evidence requirements, gates, and final approval.

The product roadmap describes long-term product evolution. Architecture and experience documents define how approved work should be designed and implemented. Claude reviews, Grok reviews, and other external evaluations provide advisory evidence only. They may inform Bradley's decisions, but they do not override the launch checklist, replace it, or create separate official launch gates.

Bradley evaluates external recommendations against the product philosophy, current architecture, learner experience, and professional integrity standard. When launch-readiness guidance conflicts, follow `strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` and request Bradley's decision where that checklist requires approval.

## Recommended Reading Path

1. Product overview: start with the root `README.md`.
2. Documentation architecture: read `DOCUMENTATION_ARCHITECTURE.md`.
3. Documentation inventory: read `DOCUMENTATION_INVENTORY.md`.
4. Public launch-readiness work: read `strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` before planning or executing any launch task.
5. Current strategy docs: read `strategy/BLUEPRINT.md`, `strategy/FUTURE_READY_CAPABILITY_MODEL.md`, `strategy/DECISIONS.md`, and `strategy/ROADMAP.md`.
6. Architecture docs: read `architecture/TECH_ARCHITECTURE.md`, `architecture/CONTENT_ARCHITECTURE.md`, and `architecture/SITE_MAP.md`.
7. Experience docs: read `experience/EXPERIENCE_PHILOSOPHY.md`, `experience/REVERSE_BUILD_EXPERIENCE.md`, and `experience/VISUAL_COMMUNICATION_SYSTEM.md`; for approved implementation work, also read `experience/REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md`, `experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md`, `experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md`, and `experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md` as applicable.
8. Design system docs: read `architecture/DESIGN_SYSTEM.md`, `COMPONENT_ARCHITECTURE_V1.md`, and `architecture/DESIGN_SYSTEM_CHANGELOG.md`.
9. Validation and AI docs: read `validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md`, `decisions/ADR-009-ai-feedback-engines.md`, and `validation/scenario-engine-validation-log.md`; exact future AI regression evidence belongs under `validation/ai-feedback-regression/`.
10. Implementation / contributor guidance: read `SYSTEM-INSTRUCTIONS.md` and `COPILOT-INSTRUCTIONS.md`.
11. Decisions and validation: read `decisions/` and `validation/` for rationale, audits, QA notes, and evidence.
12. Historical context: consult documents such as `strategy/STRATEGY.md`, `strategy/PROJECT-BRAIN.md`, and retained alternate README drafts only when historical planning context is useful; they are not current implementation or launch sources of truth.

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

After Bradley approval, `validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` is the controlling Section 4.5 specification for acceptance-criteria traceability, environments, automated and manual validation, accessibility verification, evidence records, defect severity, retesting, and completion decisions. Its approval defines validation governance; it does not mean unimplemented features or acceptance criteria have passed.

### External Review Evidence

Claude and Grok review folders preserve external analysis, findings, scorecards, proposed plans, and suggested checklists. These artifacts are advisory evidence, not active governance or official launch gates.

Current locations: `claudefeedback/` and `grokfeedback/`

### Documentation Governance

Planning documents that define how documentation is organized, inventoried, and safely reorganized.

Current files: `DOCUMENTATION_ARCHITECTURE.md` and `DOCUMENTATION_INVENTORY.md`.

### Archive / Reference

Historical, superseded, or reference-only documents may later live in `archive/` or `reference/`.

Current status: final archive/reference strategy is not decided yet.

## Source of Truth Guide

| Decision Type | Start Here |
|---|---|
| Public launch-readiness scope, order, gates, and approval | `strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` |
| Product vision | `strategy/BLUEPRINT.md` |
| Current product strategy and locked decisions | `strategy/BLUEPRINT.md` and `strategy/DECISIONS.md` |
| Long-term product roadmap and phase planning | `strategy/ROADMAP.md` |
| Canonical capability development system philosophy and current-pathway positioning | `strategy/FUTURE_READY_CAPABILITY_MODEL.md` |
| Content model | `architecture/CONTENT_ARCHITECTURE.md` |
| Technical direction | `architecture/TECH_ARCHITECTURE.md` |
| Site and route structure | `architecture/SITE_MAP.md` |
| Learner experience | `experience/EXPERIENCE_PHILOSOPHY.md` |
| Reverse Build experience philosophy | `experience/REVERSE_BUILD_EXPERIENCE.md` |
| Reverse Build v2 implementation contract after Bradley approval | `experience/REVERSE_BUILD_V2_IMPLEMENTATION_BRIEF.md` |
| Module 4 branching-simulation implementation contract after Bradley approval | `experience/MODULE_4_SIMULATION_IMPLEMENTATION_BRIEF.md` |
| Learner-artifact and local-persistence product contract after Bradley approval | `experience/LEARNER_ARTIFACT_AND_PERSISTENCE_IMPLEMENTATION_BRIEF.md` |
| Privacy and data-flow product-disclosure contract after Bradley approval | `experience/PRIVACY_AND_DATA_FLOW_IMPLEMENTATION_BRIEF.md` |
| Validation execution, evidence, defect, and retest contract after Bradley approval | `validation/VALIDATION_AND_EVIDENCE_IMPLEMENTATION_BRIEF.md` |
| AI feedback regression evidence format and future case records | `validation/ai-feedback-regression/README.md` |
| Visual communication | `experience/VISUAL_COMMUNICATION_SYSTEM.md` |
| Design system | `architecture/DESIGN_SYSTEM.md` |
| Component architecture | `COMPONENT_ARCHITECTURE_V1.md` |
| AI feedback engine decisions | `decisions/ADR-009-ai-feedback-engines.md` |
| Historical scenario-engine validation evidence | `validation/scenario-engine-validation-log.md` |
| Implementation guidance | `SYSTEM-INSTRUCTIONS.md` |
| AI assistant guidance | `COPILOT-INSTRUCTIONS.md` |
| Documentation structure | `DOCUMENTATION_ARCHITECTURE.md` |
| File migration planning | `DOCUMENTATION_INVENTORY.md` |
| Historical product strategy context | `strategy/STRATEGY.md` — historical reference only, not current-state authority |

## Current Documentation Status

The documentation ecosystem is in a transitional state.

Some files are already in their intended domain folders. Others still live in transitional locations and should not be moved until the migration plan is executed.

Documents explicitly labeled historical, superseded, under evaluation, or retained as drafts preserve decision history. Their retained language does not describe current implementation unless a current source of truth adopts it. For current launch work, use the launch checklist and the current sources identified above.

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
- read `strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md` before planning or executing launch-readiness work
- treat the launch checklist as authoritative over unrelated roadmap initiatives and external review recommendations during launch readiness
- treat Claude, Grok, and other external reviews as advisory evidence that requires evaluation rather than automatic implementation
- avoid inventing new patterns when an existing doc applies
- avoid moving files unless specifically instructed
- preserve historical context where documents are marked transitional, historical, or superseded
- update documentation links deliberately when files eventually move

## Related Governance Docs

- `strategy/PUBLIC_LAUNCH_READINESS_CHECKLIST.md`
- `DOCUMENTATION_ARCHITECTURE.md`
- `DOCUMENTATION_INVENTORY.md`
