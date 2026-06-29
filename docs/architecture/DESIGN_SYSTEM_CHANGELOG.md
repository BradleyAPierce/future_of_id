# Future of ID — Design System Changelog

## Purpose

This changelog tracks major design-system decisions, milestones, and architectural changes for Future of ID.

It is a governance record for the design system. It should capture changes that affect tokens, component architecture, Figma libraries, React implementation alignment, or reusable page patterns.

## How To Use This Changelog

Add an entry when a design-system decision changes how Future of ID components should be designed, generated, implemented, or maintained.

Use this changelog to record:

- Token additions or changes
- Component architecture milestones
- Figma library generation and hardening work
- Implementation-driven architecture refinements
- Planned design-system expansions
- Decisions that affect Figma-to-React alignment

Keep entries clear, practical, and concise. This is a design governance document, not a marketing document.

## Version History

### v1.0 — Design System Established

**Date:** June 2026

Future of ID Design System v1.0 is considered implementation-ready.

Major milestones:

- Design tokens established
- Typography system established
- Spacing, radius, and elevation system established
- Batch 1A primitive components created and hardened
- Batch 1B learning components created
- Page pattern architecture created
- Documentation alignment completed
- Future of ID Design System v1.0 considered implementation-ready

### v1.0.1 — Surface Promoted To Foundational Primitive

**Date:** June 2026

Surface is officially recognized as the foundational UI primitive for Future of ID.

Architectural updates:

- Surface owns background, border, radius, spacing, elevation, and tone
- Card now composes Surface instead of redefining those primitives
- Higher-order components should compose Surface/Card patterns
- This change came from implementation learning during Sprint 2 / Sprint 2.5

### Planned v1.1 — Token Expansion

**Status:** Proposed

Planned additions:

- Overlay/inverse-on-image tokens
- Inverse text tokens
- Translucent inverse surface and border tokens
- Pill/full radius token
- Possible PageBanner hardening

### Planned v1.2 — React Implementation Alignment

**Status:** Proposed

Planned work:

- Map Figma components to React props
- Confirm component naming between Figma and `web/components/*`
- Decide which Figma-only components need React extraction
- Begin dashboard/module page refactor from component architecture

### v1.0.2 — React Implementation Begins

Introduced the first shared React component (SectionHeader) aligned directly with the Future of ID Design System. This marks the transition from documenting the design system to implementing it in production.
