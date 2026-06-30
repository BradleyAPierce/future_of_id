# HOMEPAGE_IMPLEMENTATION_AUDIT.md

## 1. Purpose

This audit compares the current Future of ID homepage implementation to the approved homepage experience, content, layout, and component plans.

It identifies what can be preserved, what should be adapted, what should be replaced by new visual explanation patterns, and what should be deferred until later implementation slices.

This is an audit document only. It does not authorize application-code changes, CSS changes, component creation, file movement, or commits.

## 2. Current Homepage Structure

The current homepage is implemented in `web/app/page.tsx` as a composition of landing components and structured content from `web/content/landing.ts`.

Current structure:

```text
Home
├── LandingHeader
├── LandingHero
├── LandingSection: What Future of ID Is
│   └── LandingCardGrid
├── LandingSection: What Future of ID Is Not
│   └── LandingCardGrid
├── LandingSection: Different Paths
│   └── LandingCardGrid
├── LandingSection: Why This Exists
│   └── LandingCardGrid
├── LandingSection: Seven Capabilities
│   └── LandingCapabilityPreview
├── LandingSection: Platform Principles
│   └── LandingCardGrid
├── LandingSection: Inside the Platform
│   └── LandingCardGrid
└── LandingFinalCta
```

The current implementation is clean and readable. The page is already a composition layer rather than one large inline component. The main issue is not code quality; it is that the current composition does not yet match the approved Module -1 experience structure.

## 3. Current Content Model

Homepage content currently lives in `web/content/landing.ts`.

The current content model includes:

- `header`: nav items and header CTA
- `hero`: hero eyebrow, title, description, support text, image URL, CTAs, proof points
- `whatIs`: positioning cards
- `whatIsNot`: contrast cards
- `paths`: different practitioner path cards
- `whyExists`: rationale cards
- `principles`: platform principle cards
- `inside`: course structure cards
- `capabilities`: seven capability preview data
- `finalCta`: orientation CTA content

The content is structured and easy to consume, but it reflects the current section/card-grid model rather than the approved experience-moment model.

Target data that does not yet clearly exist:

- learning loop steps
- guided path steps
- experience journey steps
- comparison pairs
- Reverse Build preview items
- capability relationship/grouping metadata

## 4. Current Component Reuse

| Component | Current Use | Classification | Notes |
| --- | --- | --- | --- |
| `LandingHeader` | Sticky public homepage navigation and Start Orientation CTA. | Keep as-is | Likely reusable unless anchors change. |
| `LandingHero` | Current image-backed hero with CTAs and proof badges. | Adapt | Useful foundation, but target `HomepageHero` needs stronger Module -1 positioning and possibly a more product/learning-system visual. |
| `LandingSection` | Generic wrapper around `SectionHeader` and children. | Adapt | Good simple wrapper, but too uniform for the target varied homepage rhythm. |
| `LandingCardGrid` | Repeated explanation pattern for most homepage sections. | Retire later / reduce use | Useful as a supporting pattern, but should not drive most homepage communication. |
| `LandingCapabilityPreview` | Two-column capability card/list preview. | Replace | Should evolve into or be replaced by `CapabilityMap`. |
| `LandingFinalCta` | Final CTA to orientation/dashboard. | Adapt | Useful foundation for `HomepageCTA`, but should be reviewed against final CTA strategy. |
| `Surface` | Used inside card grid and CTA. | Keep as-is | Strong foundational primitive. |
| `Button` | Used in hero, header, and CTA. | Keep as-is | Preserves route behavior and CTA consistency. |
| `Badge` | Used for hero proof points and card labels. | Keep as-is | Useful for labels and capability/focus tags. |
| `SectionHeader` | Used by `LandingSection`. | Keep as-is | Strong reusable section-heading primitive. |
| `Card` | Not directly used by current homepage. | Keep as-is | May not be needed for first homepage slice if `Surface` is enough. |
| `PageBanner` | Not used by current homepage. | No change | Keep separate from homepage unless later visual strategy calls for it. |

## 5. Gap Analysis

| Target Component / Pattern | Current Status | Gap | Recommended Direction |
| --- | --- | --- | --- |
| `HomepageHero` | Partial | `LandingHero` exists but is general landing hero behavior, not yet Module -1 specific. | Adapt current hero later after content model updates. |
| `GuidedPathSection` | Missing | Current `paths` section is a card grid, not a guided path graphic. | Create later after structured path data is approved. |
| `LearningLoopVisual` | Missing | The homepage mentions modules and Reverse Builds but does not visually show Theory -> Experience -> Reverse Build -> Reflection. | Safest first new visual component. |
| `CapabilityMap` | Partial | `LandingCapabilityPreview` lists capabilities in surfaces but does not show them as a connected system. | Replace later with map or system visual. |
| `ExperienceJourney` | Missing | `inside` explains course structure through cards, but does not show the learner journey. | Create after learning loop and capability map foundations. |
| `DifferenceComparison` | Partial | `whatIs` and `whatIsNot` exist as separate card grids. | Merge later into a concise comparison pattern. |
| `ReverseBuildPreview` | Missing | Reverse Build appears in copy and proof points but has no preview or rationale/implementation visual. | Create after core visual model patterns are proven. |
| `HomepageCTA` | Partial | `LandingFinalCta` exists and preserves route behavior. | Adapt later; low risk but should wait until section sequence is clearer. |

## 6. Card/Grid Dependency Review

The current homepage uses repeated card grids for most explanatory work:

- `whatIs` uses four cards to explain product identity.
- `whatIsNot` uses four cards to explain contrast and boundaries.
- `paths` uses five cards to explain practitioner path variation.
- `whyExists` uses three cards to explain field rationale.
- `principles` uses four cards to explain positioning principles.
- `inside` uses four cards to explain the learning experience.

These are readable, but they create a repeated rhythm that conflicts with the approved experience framework.

Recommended replacements over time:

- `whatIs` + `whatIsNot` -> `DifferenceComparison`
- `paths` -> `GuidedPathSection` or pathway graphic
- `whyExists` + `principles` -> trust/difference moment
- `inside` -> `ExperienceJourney`
- `capabilities` -> `CapabilityMap`

`LandingCardGrid` should remain available as a supporting component, but it should no longer be the main homepage communication strategy.

## 7. Data Model Opportunities

Before implementation, the homepage content model should be extended or reorganized around the approved experience moments.

Recommended structured data:

### Learning Loop Steps

Needed for `LearningLoopVisual`.

Fields likely needed:

- label
- meaning
- description
- sequence order
- optional icon name

### Capabilities

Current capability data exists, but may need relationship metadata for `CapabilityMap`.

Fields likely needed:

- number
- title
- short title
- focus
- short description
- optional grouping or relationship metadata

### Journey Steps

Needed for `ExperienceJourney`.

Fields likely needed:

- label
- description
- sequence order
- optional route or related action

### Comparison Pairs

Needed for `DifferenceComparison`.

Fields likely needed:

- positive framing
- contrast framing
- explanation

### Reverse Build Preview Items

Needed for `ReverseBuildPreview`.

Fields likely needed:

- design rationale
- implementation decision
- tradeoff or constraint
- optional annotation label

### CTA Metadata

Current CTA metadata exists and should be preserved.

Fields likely needed:

- label
- href
- priority
- variant
- optional accessibility label

## 8. Safe First Implementation Slice

The smallest useful implementation slice should be:

1. Update or extend homepage content data to include `learningLoop` steps.
2. Introduce `LearningLoopVisual` as the first platform-wide visual explanation component.
3. Add a `LearningLoopSection` or equivalent section composition to the homepage.
4. Preserve existing homepage route behavior, header, hero CTAs, and final CTA.
5. Leave other sections intact until the first visual pattern is validated.

Why this slice is safest:

- It directly addresses the largest conceptual gap: the homepage does not yet explain how the platform teaches.
- It creates a reusable component likely needed in orientation, modules, dashboard, and Reverse Build sections.
- It avoids rewriting the entire homepage at once.
- It reduces risk by preserving current content, navigation, and CTAs.
- It establishes the visual-pattern quality bar before replacing more card grids.

Do not begin with a full homepage rewrite. Do not build all proposed components in one pass.

## 9. Risks

- Overbuilding too many visual components before validating the first pattern.
- Breaking route behavior for Start Orientation or dashboard links.
- Hardcoding content inside reusable components instead of using structured content data.
- Creating one giant homepage component that hides section responsibilities.
- Changing too many sections at once and making regressions hard to isolate.
- Introducing unrelated styling churn while trying to solve experience structure.
- Replacing clear existing content with visuals that are less accessible or less readable.
- Creating diagrams that do not work on mobile.
- Making platform-wide components depend on homepage-specific copy.

## 10. Recommended Next Codex Action

Create a first-slice implementation proposal before code changes.

The proposal should define:

- exact files likely to change
- proposed `learningLoop` content data shape
- proposed `LearningLoopVisual` API
- proposed `LearningLoopSection` responsibility
- how the section will be integrated into the current homepage without disrupting existing CTAs
- validation steps for lint, build, responsiveness, and accessibility

After that proposal is approved, implementation can begin with the learning-loop slice only.
