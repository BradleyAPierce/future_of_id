# Documentation Architecture

## Purpose

This document defines the intended documentation architecture for Future of ID before files are moved, consolidated, renamed, or retired.

It is a planning document. Its role is to make the documentation system clear before reorganizing it, so future changes can be intentional rather than reactive.

## Documentation Philosophy

Documentation is part of the Future of ID product experience. It should help humans and AI coding assistants understand the product, make good decisions, and preserve architectural continuity as the platform grows.

Good documentation should be:

- clear enough to orient a new contributor quickly
- navigable enough to answer common questions without hunting
- maintainable enough to stay current as the product changes
- structured enough for AI coding assistants to follow without guessing
- practical enough to support real design, content, engineering, and product decisions

Documentation should not become a pile of isolated files. It should work as a connected system.

## Current Issue

Future of ID has evolved beyond a single README.

The project now includes strategy, architecture, content, design system, AI, validation, and product experience documentation. As a result, the root `README.md` should not try to carry the full weight of the product and technical architecture.

The root README should become the public front door:

- what the project is
- why it matters
- how to run it locally
- where to go next

Detailed architecture and planning should live inside `docs/`, where it can be organized by domain and maintained over time.

## Documentation Domains

### Root README

The root `README.md` is the public-facing project entry point. It should introduce Future of ID clearly, explain why it exists, provide local setup instructions, and point readers into the documentation system.

### docs/README.md

`docs/README.md` should be the documentation hub. It should provide the documentation map, recommended reading order, domain descriptions, and links to major documentation areas.

### Documentation Governance

Documentation governance documents define how the documentation system is organized, audited, and changed. `DOCUMENTATION_ARCHITECTURE.md` and `DOCUMENTATION_INVENTORY.md` are governance and planning documents, not the documentation hub itself.

This category answers: How should the documentation system be maintained?

### docs/strategy/

The strategy domain should contain product strategy, roadmap, decisions, positioning, vision, capability model, and long-range product direction.

This domain answers: What are we building, why does it matter, and where is it going?

### docs/architecture/

The architecture domain should contain technical architecture, content architecture, site map, system structure, implementation boundaries, and core platform organization.

This domain answers: How is the system structured?

### docs/experience/

The experience domain should contain learner experience philosophy, visual communication standards, page patterns, motion principles, AI experience direction, signature moments, and product feel.

`docs/experience/` defines what the product should feel like. It owns learner-facing AI feel, interaction expectations, trust cues, and product experience standards.

This domain answers: What should the product feel like for the learner?

### docs/design-system/

The design-system domain should contain design tokens, component standards, UI primitives, reusable component guidance, visual UI system decisions, and Figma-to-React alignment.

`docs/design-system/` defines the UI primitives, tokens, components, and implementation standards that make the intended experience repeatable. It should translate experience direction into reusable interface rules.

This domain answers: How should the interface be built and kept consistent?

### docs/ai/

The AI domain should contain prompt architecture, AI service behavior, response contracts, validation, safety, implementation behavior, and AI system notes.

`docs/ai/` owns how AI works under the surface and how AI behavior is governed. Learner-facing AI experience standards may be introduced in `docs/experience/`, but prompt, service, validation, and safety details belong here.

This domain answers: How should AI behave and be implemented inside the product?

### docs/decisions/

The decisions domain should contain decision logs and architectural or product decisions with rationale, tradeoffs, and outcomes.

This domain answers: What did we decide, and why?

### docs/validation/

The validation domain should contain reviews, audits, QA notes, design critiques, external AI critiques, implementation reviews, and readiness assessments.

This domain answers: How do we know the product and documentation are improving?

### Implementation / Contributor Guidance

The implementation and contributor guidance domain should contain instructions for humans and AI coding assistants working in the repository. This includes `SYSTEM-INSTRUCTIONS.md`, `COPILOT-INSTRUCTIONS.md`, `web/README.md`, and future contributor-facing implementation standards.

This domain answers: How should contributors and AI assistants work safely inside the repo?

### Archive / Reference

Historical, superseded, or reference-only documents may later live in `docs/archive/` or `docs/reference/`. The final choice should happen before migration so old material is preserved without being mistaken for current source of truth.

This domain answers: What context should be preserved, but not treated as active guidance?

## README Responsibilities

### Root README.md

The root `README.md` should explain:

- what Future of ID is
- why the project matters
- how to run it locally
- where to go next in the documentation

It should be concise, public-facing, and useful as the first file someone reads.

### docs/README.md

`docs/README.md` should provide:

- a documentation map
- recommended reading order
- domain descriptions
- links to major documentation areas
- guidance for contributors and AI coding assistants

It should function as the front door to the internal documentation system.

### Folder-Level README.md Files

Folder-level README files should explain:

- the purpose of the folder
- the documents inside it
- the recommended reading order
- how the folder connects to the larger project

They should help readers understand why a documentation domain exists and how to use it.

## Proposed Folder Structure

The intended documentation structure is:

```text
docs/
  README.md
  DOCUMENTATION_ARCHITECTURE.md
  strategy/
  architecture/
  experience/
  design-system/
  ai/
  decisions/
  validation/
  reference/ or archive/   # final historical-doc location to be decided before migration
```

This structure is proposed as the target direction. It does not mean files should be moved immediately or that every possible folder should be created now.

## README Version Handling

The repository currently has multiple README versions. These should be handled carefully in a later consolidation pass.

Long-term direction:

- `README.md` should likely become the root public-facing README.
- `READMEV2.md` and `READMEV3.md` should not remain as competing root README files long term.
- The strongest content from alternate README versions should be consolidated into either the root `README.md` or `docs/README.md`.
- Any consolidation should preserve useful context rather than deleting content casually.

No README consolidation should happen until the documentation architecture is accepted and the existing README content has been audited.

## Documentation Decision Rules

Use these rules when deciding where documentation belongs:

- If the content explains product vision, it belongs in `docs/strategy/`.
- If the content explains system structure, it belongs in `docs/architecture/`.
- If the content explains learner feel, interaction, visuals, motion, learner-facing AI experience, or trust cues, it belongs in `docs/experience/`.
- If the content explains UI primitives, design tokens, reusable components, or visual UI standards, it belongs in `docs/design-system/`.
- If the content explains prompt architecture, AI service behavior, response contracts, validation, safety, or implementation behavior, it belongs in `docs/ai/`.
- If the content captures a choice and rationale, it belongs in `docs/decisions/`.
- If the content evaluates quality, readiness, risk, or alignment, it belongs in `docs/validation/`.
- If the content guides contributors or AI coding assistants on how to work in the repo, it belongs in Implementation / Contributor Guidance.
- If the content is historical, superseded, or reference-only, it belongs in the future archive/reference location after that strategy is finalized.

When a document seems to fit multiple domains, place it where its primary decision value lives and link to it from related domains.

## Future Reorganization Plan

### Phase 1: Define Documentation Architecture

Create and approve the intended documentation architecture before moving files.

### Phase 2: Audit Existing Docs

Inventory current documentation files, README versions, stale references, duplicate guidance, and domain overlap.

### Phase 3: Decide Target Location For Each File

Assign each document to a target domain. Mark files that should be preserved, consolidated, renamed, or treated as historical.

### Phase 4: Move Or Consolidate Files

Move files only after the target structure is clear. Consolidate competing documents carefully and preserve important historical context where useful.

### Phase 5: Update Links And References

Update links, file references, system instructions, Copilot instructions, README navigation, and any documentation maps affected by the reorganization.

### Phase 6: Review For Duplication And Stale Content

After reorganization, review the documentation system for duplicate guidance, outdated references, terminology drift, and unclear ownership.

## Non-Goals

This document does not:

- reorganize files yet
- delete files yet
- rewrite all docs yet
- consolidate competing README versions yet
- turn the root README into a giant documentation manual
- replace existing strategy, architecture, design system, or experience documents

Its purpose is to define the target documentation system so future cleanup can happen with less ambiguity.
