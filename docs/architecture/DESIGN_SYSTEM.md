# DESIGN_SYSTEM.md

## 1. Purpose

This document defines the visual and UX direction for the `future_of_id` app before broader UI improvements begin.

It should guide future design-system, dashboard, module page, and component work so the product remains consistent, credible, and easy to extend.

This is not a component inventory or a final UI audit. It is the shared design contract for how future UI work should feel, function, and fit the architecture.

This document governs visual/UX principles, tokens, typography, spacing, surfaces, and interaction feel. `docs/COMPONENT_ARCHITECTURE_V1.md` governs reusable component inventory, variants, states, and Figma-to-React mapping.

---

## 2. Design System Philosophy

The design system should support the instructional experience first.

The app should feel:

- premium without feeling flashy
- modern without feeling trendy
- polished without looking like a generic SaaS template
- structured without feeling heavy
- calm, readable, and credible for busy L&D professionals

Design decisions should make instructional content easier to scan, compare, revisit, and apply. Visual polish is important, but it should never compete with learning clarity.

The system should favor reusable patterns over one-off visual fixes. If a UI pattern appears on the dashboard, module pages, or future home page, it should be designed as a reusable pattern unless there is a clear reason not to.

---

## 3. Visual Direction

The product should feel like a polished learning product, not a content dump, slide deck, or admin dashboard.

Use visual design to create:

- a clear learning path
- strong section hierarchy
- readable instructional content
- confident but restrained calls to action
- consistent cards, surfaces, and content groups
- enough whitespace to reduce cognitive load

The visual style should be clean, intentional, and grounded. Avoid decoration that does not help the learner understand where they are, what matters, or what to do next.

---

## 4. Core UI Principles

### Clarity Before Decoration

Every visual element should help the learner understand content, navigation, status, or action.

### Instructional Content Stays Central

UI should support the course content. It should not bury copy inside dense cards, excessive chrome, or decorative containers.

### Reusable Patterns Over One-Off Styling

Prefer shared cards, section containers, buttons, banners, and interaction patterns over local visual patches.

### Calm Interaction Design

Interactions should feel predictable. Use modals, accordions, buttons, and progress states where they reduce effort or scroll depth.

### Professional Warmth

The app should feel human and approachable without becoming casual to the point of losing credibility.

---

## 5. Typography Guidance

Typography should create a clear hierarchy for busy readers.

Use type to distinguish:

- page titles
- module titles
- layer headings
- section headings
- body copy
- supporting labels
- calls to action

Avoid oversized type inside dense learning sections. Large display type should be reserved for page-level moments such as the home page hero, major course entry points, or module banners.

Body copy should remain readable and comfortable. Instructional content should use enough line height and spacing to support scanning without turning every sentence into a separate visual block.

Do not use typography tricks that reduce clarity, such as tight letter spacing, excessive uppercase text, or many competing heading sizes.

---

## 6. Spacing and Layout Guidance

Spacing should help learners understand relationships between content.

Use spacing to show:

- what belongs together
- where a section begins and ends
- which actions belong to which content
- how the learner should move through the page

Module pages should avoid long uninterrupted vertical stacks when content can be grouped, collapsed, or opened intentionally. The Reverse Build modal-card pattern is a good example: it preserves content while reducing scroll depth.

Layouts should be responsive and stable. Content should not feel cramped on mobile or overly stretched on desktop.

---

## 7. Card and Surface Patterns

Cards and surfaces should organize learning content, not decorate the page.

Use cards for:

- module summaries
- repeated content groups
- compact entry points
- decision notes
- feedback blocks
- modal content

Avoid cards inside cards unless there is a clear hierarchy and the nested structure improves readability.

Card styling should remain restrained:

- consistent border radius
- clear but subtle borders
- limited shadow use
- strong internal spacing
- readable headings
- predictable action placement

Surfaces should communicate purpose. A module card, feedback panel, reflection block, and dashboard status area should not all feel identical if they serve different jobs.

---

## 8. Button and CTA Patterns

Buttons should use clear action language.

Good button labels should tell the learner what happens next:

- Start Module
- Continue Course
- View Design Notes
- Get AI Feedback
- Mark Module Complete

Avoid vague labels such as "Learn More" when a more specific label would help.

Primary CTAs should be used sparingly. Secondary actions should be visually quieter but still easy to find.

Button styling should be consistent across the app:

- predictable shape
- clear hover and focus states
- accessible contrast
- no layout shift when labels are longer
- mobile-safe widths and wrapping

---

## 9. Dashboard Design Guidance

The dashboard should help learners quickly understand:

- where they are in the course
- what module comes next
- what they have completed
- what each module is about
- how to re-enter completed or in-progress work

The dashboard should feel more like a guided course hub than a generic analytics dashboard.

Prioritize:

- module sequence clarity
- progress visibility
- practical module descriptions
- readable cards
- clear next-step CTAs
- calm density

Avoid turning the dashboard into a marketing page or a decorative card grid that makes the learning path harder to understand.

---

## 10. Module Page Design Guidance

Module pages should make the learning structure obvious.

A learner should be able to identify:

- what the module is about
- what they will be able to do
- where Theory starts
- where Experience starts
- where Reverse Build starts
- where reflection and completion actions live

The page should support a clear progression without forcing unnecessary scrolling.

Use collapsible, modal, or compact patterns when they improve navigation and reduce cognitive load. Do not hide essential instructional flow just to make the page look shorter.

The current layered model should remain visible:

1. Theory
2. Experience
3. Reverse Build
4. Reflection

Reverse Build is the learner-facing name for the layer that exposes the reverse engineering, design rationale, and implementation choices behind the experience.

The UI should help these layers feel connected rather than like unrelated content blocks.

---

## 11. Color and Token Usage

Use existing CSS variables and theme tokens whenever possible.

Color should communicate structure and state:

- primary color for main course flow and key actions
- accent color for Reverse Build, design notes, and reflective/supporting surfaces
- success color for completion and positive status
- danger color for errors or gaps
- muted color for supporting text

Do not introduce new colors directly into components unless the design system has been intentionally extended.

Avoid one-off color patches. If a new color role is needed, define the role first, then apply it consistently.

---

## 12. Motion and Interaction Guidance

Motion should be subtle and purposeful.

Use motion for:

- hover feedback
- focus feedback
- modal open/close clarity
- accordion state changes
- small progress or completion cues

Avoid motion that slows down the learner, distracts from instructional content, or makes the product feel gimmicky.

Interactions should be keyboard-accessible and predictable. Modal, accordion, and feedback patterns should preserve focus behavior and close behavior.

---

## 13. Accessibility Expectations

Accessibility is part of product quality.

UI work should support:

- semantic HTML
- readable contrast
- visible focus states
- keyboard navigation
- accessible names for buttons and controls
- responsive layouts
- text that does not overflow or overlap
- modal and dialog behavior that can be closed predictably

Do not rely on color alone to communicate status or meaning.

Do not sacrifice accessibility for visual polish.

---

## 14. What to Avoid

Avoid:

- generic SaaS dashboard templates
- decorative complexity that weakens readability
- excessive animation
- vague CTA labels
- one-off styling patches
- hardcoded visual exceptions without a system reason
- UI cards that bury the learning content
- overly dense page sections
- trendy AI or futurist visual language
- shadcn/ui-specific assumptions before the UI audit is complete
- adding component libraries without a clear architecture decision
- design changes that require rewriting content to make the layout work

Shadcn/ui may be considered later, but this document does not require it.

---

## 15. Definition of Success

UI work is successful when:

- the product feels premium, clean, intentional, modern, and credible
- instructional content is easier to navigate and understand
- dashboard and module pages feel like one coherent learning product
- components are reusable rather than one-off patches
- spacing, typography, cards, and CTAs follow consistent patterns
- busy instructional designers can quickly understand where they are and what to do next
- visual polish strengthens instructional credibility
- accessibility and responsive behavior are preserved
- the design system supports future growth without forcing a redesign each time a new module or page is added
- component-level variants, states, and Figma-to-React mapping are handled in `docs/COMPONENT_ARCHITECTURE_V1.md`
