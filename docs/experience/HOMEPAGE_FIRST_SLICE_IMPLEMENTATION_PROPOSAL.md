# HOMEPAGE_FIRST_SLICE_IMPLEMENTATION_PROPOSAL.md

## 1. Purpose

This proposal defines the first safe implementation slice for the Future of ID homepage redesign before code changes begin.

It translates the approved homepage planning stack into a narrow implementation plan that adds the missing learning-loop model while preserving current homepage behavior, existing routes, CTAs, and section structure.

This is not implementation. It does not authorize React changes, CSS changes, file movement, or commits by itself.

## 2. Slice Goal

The first implementation slice should add the missing learning-loop model:

```text
Theory -> Experience -> Reverse Build -> Reflection
```

The goal is to help visitors understand how Future of ID teaches before they encounter the seven-capability preview or the existing repeated explanatory sections.

This slice should make the homepage more clearly function as Module -1 without attempting a full homepage redesign.

## 3. Files Likely to Change

Likely implementation files for the first slice:

- `web/content/landing.ts`
- `web/components/landing/LearningLoopSection.tsx`
- `web/components/landing/LearningLoopVisual.tsx`
- `web/app/page.tsx`

Possible additional file only if the type shape becomes shared:

- `web/types/landing.ts` or another existing type location

Prefer keeping the first slice local to landing content and landing components unless reuse outside the homepage is implemented in the same approved sprint.

## 4. Proposed Content Data Shape

Add a structured `learningLoop` object to the homepage content model.

Proposed shape:

```ts
learningLoop: {
  eyebrow: string;
  title: string;
  intro: string;
  steps: Array<{
    label: string;
    meaning: string;
    description: string;
    icon?: string;
    order: number;
  }>;
}
```

Field responsibilities:

- `label`: the learner-facing step name, such as Theory, Experience, Reverse Build, or Reflection
- `meaning`: the concise instructional purpose, such as explain, apply, reveal, or transfer
- `description`: a short explanation of what the learner does in that step
- `icon`: optional symbolic reference if an existing icon pattern is used later
- `order`: explicit sequence order for stable rendering

Final copy should stay concise. The section should explain the model, not become another long text block.

## 5. Proposed Component Responsibilities

### `LearningLoopVisual`

#### Responsibility

Display the four-part learning loop as a clear visual model.

It should make the relationship between Theory, Experience, Reverse Build, and Reflection visible at a glance.

#### Props / Data Needs

Likely props:

- `steps`
- optional `className`

Each step should include:

- `label`
- `meaning`
- `description`
- optional `icon`
- `order`

#### Reusable vs Landing-Specific

Reusable.

`LearningLoopVisual` is likely useful beyond the homepage in orientation, module pages, dashboard onboarding, Reverse Build sections, and future portfolio/case-study pages.

#### Accessibility Considerations

- The visual must be understandable in text, not only through shape or color.
- Step labels and meanings should be readable by assistive technology.
- Sequence should be clear in DOM order.
- Do not convey sequence or meaning by color alone.
- If icons are used, they should be decorative unless they add distinct meaning.

#### Mobile Considerations

- The loop should stack or simplify cleanly on narrow screens.
- Labels must remain readable without horizontal scrolling.
- The visual should not depend on hover.
- The mobile layout should preserve the sequence from Theory to Reflection.

### `LearningLoopSection`

#### Responsibility

Frame the learning-loop visual within the homepage narrative.

It should introduce the model, render `LearningLoopVisual`, and explain why the loop matters for the learner's first understanding of Future of ID.

#### Props / Data Needs

Likely props:

- `content`
  - `eyebrow`
  - `title`
  - `intro`
  - `steps`
- optional `className`

#### Reusable vs Landing-Specific

Partially reusable.

The section wrapper may remain landing-specific at first because the homepage context is Module -1. The visual itself should be designed for broader reuse.

#### Accessibility Considerations

- Use a semantic section with an accessible heading.
- Ensure the section heading and visual explanation work together.
- Avoid hidden-only explanations that make the visual unclear for sighted users or assistive technology users.

#### Mobile Considerations

- Section intro should stay short.
- Visual should follow or sit near the explanatory text.
- The section should not create a dense block between hero and later homepage content.

## 6. Integration Plan

Insert the learning-loop section after the hero and before the capability preview or repeated card sections.

Recommended first placement:

```text
LandingHeader
LandingHero
LearningLoopSection
Existing homepage sections remain unchanged
LandingFinalCta
```

This placement allows the homepage to explain how the platform teaches before visitors scan deeper positioning, capability, or platform-detail sections.

The first slice should not reorder all existing sections. It should add the missing model in a low-risk location and preserve the rest of the page.

## 7. Scope Limits

Explicitly defer:

- `CapabilityMap`
- `ExperienceJourney`
- `DifferenceComparison`
- `ReverseBuildPreview`
- `HomepageHero` redesign
- `HomepageCTA` redesign
- full homepage restructure
- replacement of existing `LandingCardGrid` sections
- route or navigation changes beyond any required anchor update for the new section
- global CSS or token changes

## 8. Validation Plan

Run or perform:

- focused lint on changed files if available
- full lint
- production build
- route and CTA behavior check
- confirm Start Orientation still routes to `/course/orientation`
- confirm View Course Dashboard still routes to `/course/dashboard`
- confirm existing sections still render
- mobile readability review for the learning-loop visual
- accessibility review for diagram labels, heading order, focus behavior, and color-independent meaning
- check that no unrelated application files changed

## 9. Risks and Mitigations

### Diagram too dense on mobile

Mitigation: keep step copy short and allow the visual to stack vertically on small screens.

### Hardcoded content

Mitigation: drive labels, meanings, and descriptions from `landingContent.learningLoop` rather than hardcoding content inside the component.

### Over-styling

Mitigation: use existing design-system primitives and tokens. Avoid new colors, shadows, or decorative effects.

### Section feels bolted on

Mitigation: place the section immediately after the hero and write the section framing as a natural explanation of how the platform teaches.

### Reusable component depends on homepage-specific language

Mitigation: keep homepage-specific framing inside `LearningLoopSection`; keep `LearningLoopVisual` data-driven and context-neutral.

## 10. Implementation Readiness

**Ready to implement.**

The first slice is narrow, low risk, and directly addresses the most important missing homepage model identified in the implementation audit.

Implementation should remain limited to the learning-loop data, visual, section wrapper, and homepage integration point.

## 11. Recommended Next Codex Action

Proceed with the first implementation slice only after this proposal is approved.

Recommended next prompt:

Create the homepage learning-loop implementation slice by adding `landingContent.learningLoop`, creating `LearningLoopVisual` and `LearningLoopSection`, integrating the section after `LandingHero`, and running lint/build validation. Preserve all existing routes, CTAs, and homepage sections.
