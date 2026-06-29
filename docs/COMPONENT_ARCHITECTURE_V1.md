# Future of ID — Component Architecture v1.0

## Purpose

This document defines the reusable component system for **Future of ID**. It connects the product strategy, instructional architecture, Figma design tokens, and future React implementation into one shared UI blueprint.

The goal is not to create decorative screens. The goal is to create a scalable product system that can support the full guided learning experience: landing pages, course dashboard, module pages, reflections, AI feedback, progress tracking, and future expansion.

---

## 1. Foundation Status

The foundation layer is considered stable and should be treated as the source of truth for all components.

### 1.1 Typography

| Token | Size / Weight | Primary Use |
|---|---:|---|
| Display | 64 / Bold | Hero statements, major marketing emphasis |
| H1 | 40 / Bold | Page titles |
| H2 | 32 / Bold | Major sections |
| H3 | 24 / Semibold | Cards, panels, sub-sections |
| Body Large | 20 / Regular | Important explanatory content |
| Body | 18 / Regular | Standard reading content |
| Body Small | 16 / Regular | Supporting content |
| Caption | 14 / Regular | Metadata, helper text, labels |
| Eyebrow | 12 / Semibold | Categories, labels, section markers |

### 1.2 Color Roles

| Token | Value | Role |
|---|---|---|
| Background | `#F8FAFC` | App background |
| Surface | `#FFFFFF` | Default surface/card background |
| Surface Elevated | `#F1F5F9` | Secondary surfaces, subtle panels |
| Text Primary | `#0F172A` | Main text |
| Text Secondary | `#475569` | Supporting text |
| Border | `#D6DCE5` | Dividers, card borders, input borders |
| Primary | `#0F766E` | Primary actions, selected states |
| Primary Hover | `#115E59` | Primary hover/active states |
| Accent | `#2563EB` | Links, secondary emphasis, AI/system cues |
| Accent Hover | `#1D4ED8` | Accent hover/active states |
| Success | `#3F7D58` | Completion, correct, positive feedback |
| Success Hover | `#2F6244` | Success hover/active states |
| Danger | `#DC2626` | Errors, destructive actions |
| Danger Hover | `#B91C1C` | Danger hover/active states |

### 1.3 Spacing Scale

| Token | Size | Use |
|---|---:|---|
| XS | 4px | Tight spacing |
| SM | 8px | Small gaps |
| MD | 16px | Default spacing |
| LG | 24px | Section spacing |
| XL | 32px | Large content spacing |
| 2XL | 48px | Major section spacing |
| 3XL | 64px | Page spacing |
| 4XL | 96px | Hero spacing |

### 1.4 Radius Scale

| Token | Size | Use |
|---|---:|---|
| Small | 4px | Inputs, small controls |
| Medium | 8px | Buttons, compact cards |
| Large | 16px | Cards, panels, module blocks |
| Extra Large | 24px | Hero panels, large feature containers |

### 1.5 Elevation Scale

| Token | Purpose | Use |
|---|---|---|
| Flat | Background | App/page surfaces |
| Card | Default content card | Cards, content blocks |
| Elevated | Important surfaces | Active cards, priority panels |
| Overlay | Modals, drawers | Dialogs and layered UI |

---

## 2. Component Design Principles

Every component should follow these principles:

1. **Instruction before decoration** — visual choices must support learning clarity.
2. **Reusable before bespoke** — components should scale across all modules.
3. **Calm, premium, professional** — avoid flashy AI/SaaS clichés.
4. **Token-driven** — colors, spacing, type, radius, and elevation must use established tokens.
5. **Composable** — complex learning screens should be assembled from smaller components.
6. **Accessible by default** — semantic structure, readable contrast, visible focus states.
7. **React-ready** — Figma components should map cleanly to future React components.
8. **Content-aware** — components should support instructional content, not force content into rigid layouts.

---

## 3. Component Tiers

The system is organized into five tiers:

1. **Core UI Components** — generic primitives used everywhere.
2. **Layout Components** — structure pages and sections.
3. **Learning Components** — unique instructional design components.
4. **AI Components** — AI-assisted reflection, feedback, and coaching patterns.
5. **Dashboard Components** — learner progress and course-state components.

---

## 4. Core UI Components

### 4.1 Button

**Purpose:** Represents actions and decisions.

**React Mapping:** `<Button />`

**Variants:**
- Primary
- Secondary
- Ghost
- Text
- Danger
- Success
- Icon Only

**States:**
- Default
- Hover
- Focus
- Pressed
- Disabled
- Loading

**Properties:**
- `variant`
- `size`
- `iconLeft`
- `iconRight`
- `loading`
- `disabled`

**Design Notes:**
- Primary buttons should use `Primary` and `Primary Hover`.
- Secondary buttons should use `Surface`, `Border`, and `Text Primary`.
- Danger buttons are reserved for destructive actions only.
- Button radius should generally use `Medium`.

---

### 4.2 Card

**Purpose:** Groups related content into a reusable surface.

**React Mapping:** `<Card />`

**Variants:**
- Default
- Elevated
- Interactive
- Selected
- Disabled

**Properties:**
- `variant`
- `padding`
- `interactive`
- `selected`

**Design Notes:**
- Default cards use `Surface` with `Border`.
- Elevated cards may use `Surface` plus elevation.
- Radius should generally use `Large`.
- Cards should not become visual noise; use only when grouping helps understanding.

---

### 4.3 Badge

**Purpose:** Communicates status, category, level, or metadata.

**React Mapping:** `<Badge />`

**Variants:**
- Neutral
- Primary
- Accent
- Success
- Danger
- Locked
- Complete
- In Progress

**Design Notes:**
- Use Eyebrow or Caption text.
- Keep badges short.
- Avoid overusing color; status badges should be meaningful.

---

### 4.4 Input

**Purpose:** Captures short learner input.

**React Mapping:** `<Input />`

**Variants:**
- Default
- Error
- Success
- Disabled

**States:**
- Default
- Focus
- Filled
- Error
- Disabled

**Design Notes:**
- Use `Surface`, `Border`, and visible focus ring.
- Radius should use `Small` or `Medium`.

---

### 4.5 Textarea

**Purpose:** Captures longer reflections, scenario responses, or learner explanations.

**React Mapping:** `<Textarea />`

**Use Cases:**
- Reflection responses
- Scenario decisions
- AI coaching prompts
- Notes

**Design Notes:**
- Must feel comfortable for writing.
- Provide clear placeholder copy.
- Should support helper text and character guidance when needed.

---

### 4.6 Tabs

**Purpose:** Switches between related content views without leaving the page.

**React Mapping:** `<Tabs />`

**Use Cases:**
- Theory / Experience / Reverse Engineering
- Overview / Activity / Reflection
- Prompt / Feedback / Notes

**Design Notes:**
- Selected tab should be clear but not visually heavy.
- Use `Primary` for active state.

---

### 4.7 Modal

**Purpose:** Presents focused information or actions above the current page.

**React Mapping:** `<Modal />`

**Use Cases:**
- Confirmation
- Expanded explanation
- Resource preview
- Completion summary

**Design Notes:**
- Use overlay elevation.
- Avoid using modals for long instructional content unless necessary.

---

### 4.8 Alert

**Purpose:** Communicates important system or learning-state messages.

**React Mapping:** `<Alert />`

**Variants:**
- Info
- Success
- Warning
- Danger
- AI Note

**Design Notes:**
- Use sparingly.
- Should support title, body, optional action.

---

### 4.9 Tooltip

**Purpose:** Provides brief supplemental explanation.

**React Mapping:** `<Tooltip />`

**Use Cases:**
- Technical terms
- Icons
- Progress labels
- AI confidence explanations

**Design Notes:**
- Keep text short.
- Do not hide critical learning content in tooltips.

---

### 4.10 Skeleton / Loading

**Purpose:** Shows loading state while content or AI feedback is generated.

**React Mapping:** `<Skeleton />`, `<LoadingState />`

**Use Cases:**
- AI feedback generation
- Dashboard loading
- Module data loading

**Design Notes:**
- Should feel calm and lightweight.
- Avoid distracting animation.

---

## 5. Layout Components

### 5.1 App Shell

**Purpose:** Provides the overall application frame.

**React Mapping:** `<AppShell />`

**Includes:**
- Top navigation
- Optional sidebar
- Main content region
- Footer or secondary navigation

**Use Cases:**
- Course pages
- Dashboard
- Module routes

---

### 5.2 Top Navigation

**Purpose:** Provides global navigation and identity.

**React Mapping:** `<TopNav />`

**Elements:**
- Logo / product name
- Course navigation
- Dashboard link
- Progress or account area

---

### 5.3 Sidebar Navigation

**Purpose:** Supports module navigation and course progression.

**React Mapping:** `<SidebarNav />`

**Use Cases:**
- Dashboard
- Module pages
- Course overview

**States:**
- Current
- Complete
- Locked
- Available

---

### 5.4 Page Header

**Purpose:** Introduces a page or major experience.

**React Mapping:** `<PageHeader />`

**Supports:**
- Eyebrow
- Title
- Description
- Metadata
- Primary CTA
- Secondary CTA

---

### 5.5 Section Header

**Purpose:** Introduces major content sections.

**React Mapping:** `<SectionHeader />`

**Supports:**
- Eyebrow
- Heading
- Supporting copy
- Optional action

---

### 5.6 Content Container

**Purpose:** Controls readable page width and vertical rhythm.

**React Mapping:** `<Container />`

**Variants:**
- Narrow
- Standard
- Wide
- Full

---

### 5.7 Card Grid

**Purpose:** Displays repeatable cards in responsive layouts.

**React Mapping:** `<CardGrid />`

**Use Cases:**
- Module cards
- Capability cards
- Resource cards
- Dashboard widgets

---

## 6. Learning Components

### 6.1 Module Card

**Purpose:** Represents one course module in a dashboard, map, or overview.

**React Mapping:** `<ModuleCard />`

**Content:**
- Module number
- Title
- Capability category
- Short description
- Completion status
- Estimated time
- CTA

**States:**
- Locked
- Available
- In Progress
- Complete
- Recommended

**Design Notes:**
- This is one of the most important reusable components.
- Should make the learning path feel structured and achievable.

---

### 6.2 Capability Card

**Purpose:** Explains one of the seven future-facing capabilities.

**React Mapping:** `<CapabilityCard />`

**Content:**
- Capability title
- Description
- Why it matters
- Related module
- Optional icon

**Use Cases:**
- Landing page
- Course overview
- Orientation

---

### 6.3 Lesson Section

**Purpose:** Structures instructional content inside a module.

**React Mapping:** `<LessonSection />`

**Content:**
- Heading
- Body content
- Callout
- Optional media
- Optional activity link

**Design Notes:**
- Must support long-form reading without feeling like a blog article.
- Should preserve hierarchy and flow.

---

### 6.4 Reflection Panel

**Purpose:** Prompts learners to think, write, and apply ideas.

**React Mapping:** `<ReflectionPanel />`

**Content:**
- Prompt
- Context
- Textarea
- Submit action
- Optional guidance

**States:**
- Empty
- Drafting
- Submitted
- AI Feedback Available

**Design Notes:**
- This component is central to the instructional identity of Future of ID.
- It should feel thoughtful and low-pressure, not like a test.

---

### 6.5 Knowledge Check

**Purpose:** Assesses understanding through lightweight checks.

**React Mapping:** `<KnowledgeCheck />`

**Types:**
- Multiple choice
- Scenario judgment
- True/false
- Matching, later if needed

**States:**
- Not started
- Answer selected
- Correct
- Incorrect
- Try again
- Complete

---

### 6.6 Scenario Card

**Purpose:** Presents realistic applied situations for learner decision-making.

**React Mapping:** `<ScenarioCard />`

**Content:**
- Scenario setup
- Role/context
- Decision prompt
- Choices or open response
- Feedback area

**Use Cases:**
- Simulation Design module
- Performance Consulting module
- Human-Centered Change module

---

### 6.7 Reverse Engineering Panel

**Purpose:** Explains how a learning experience was designed and built.

**React Mapping:** `<ReverseEngineeringPanel />`

**Content Areas:**
- Instructional strategy
- Learning theory alignment
- Prompt architecture
- Technical implementation notes
- Design rationale

**Design Notes:**
- This is a signature component for Future of ID.
- It helps the course teach by making the design process visible.

---

### 6.8 Learning Path

**Purpose:** Shows the learner's journey through the course.

**React Mapping:** `<LearningPath />`

**States:**
- Locked
- Available
- Current
- Complete

**Use Cases:**
- Course overview
- Dashboard
- Orientation

---

### 6.9 Progress Timeline

**Purpose:** Shows progress across a module or sequence.

**React Mapping:** `<ProgressTimeline />`

**Use Cases:**
- Module page
- Activity flow
- Reflection sequence

---

### 6.10 Resource Card

**Purpose:** Links to supporting materials, references, or downloads.

**React Mapping:** `<ResourceCard />`

**Content:**
- Title
- Type
- Description
- Source/metadata
- CTA

---

## 7. AI Components

### 7.1 AI Coach Panel

**Purpose:** Provides guided support, suggestions, and coaching.

**React Mapping:** `<AICoachPanel />`

**Content:**
- Coach message
- Suggested next steps
- Prompt input or CTA
- Context label

**Design Notes:**
- Should feel helpful, not magical or gimmicky.
- Use Accent carefully to signal AI assistance.

---

### 7.2 AI Feedback Panel

**Purpose:** Displays AI-generated feedback on learner input.

**React Mapping:** `<AIFeedbackPanel />`

**Content:**
- Summary
- Strengths
- Suggestions
- Next step
- Optional confidence note

**States:**
- Generating
- Complete
- Error
- Empty

**Design Notes:**
- Must reinforce reflection and learning, not grade the learner harshly.
- Should clearly separate AI feedback from authoritative course content.

---

### 7.3 Conversation Thread

**Purpose:** Displays back-and-forth AI interaction.

**React Mapping:** `<ConversationThread />`

**Use Cases:**
- AI tutor
- Scenario simulation
- Coaching dialogue

**Elements:**
- User message
- AI response
- Timestamp/metadata optional
- Loading response

---

### 7.4 Prompt Composer

**Purpose:** Allows learners to ask or submit prompts.

**React Mapping:** `<PromptComposer />`

**Use Cases:**
- Ask AI Coach
- Submit reflection
- Explore a scenario

**Design Notes:**
- Should support placeholder guidance.
- Should not feel like a generic chat box when the context is structured learning.

---

### 7.5 Suggested Actions

**Purpose:** Gives learners clear next-step options after AI feedback.

**React Mapping:** `<SuggestedActions />`

**Examples:**
- Revise response
- Continue to next lesson
- Review concept
- Try another scenario

---

### 7.6 AI Insight Card

**Purpose:** Highlights a concise AI-generated insight.

**React Mapping:** `<AIInsightCard />`

**Use Cases:**
- Dashboard recommendation
- Reflection summary
- Module recap

---

## 8. Dashboard Components

### 8.1 Current Module Widget

**Purpose:** Highlights where the learner should resume.

**React Mapping:** `<CurrentModuleWidget />`

**Content:**
- Current module
- Progress
- Last activity
- CTA

---

### 8.2 Capability Progress

**Purpose:** Shows progress across the seven capabilities.

**React Mapping:** `<CapabilityProgress />`

**Display Options:**
- List
- Progress bars
- Compact grid

---

### 8.3 Completion Ring

**Purpose:** Gives a high-level course completion snapshot.

**React Mapping:** `<CompletionRing />`

**Use Cases:**
- Dashboard hero
- Completion page
- Module summary

---

### 8.4 Recommendation Card

**Purpose:** Suggests the learner's next best action.

**React Mapping:** `<RecommendationCard />`

**Inputs:**
- Progress state
- Module status
- Reflection status
- AI feedback status

---

### 8.5 Activity Feed

**Purpose:** Shows recent learner actions.

**React Mapping:** `<ActivityFeed />`

**Examples:**
- Completed Module 1
- Submitted reflection
- Viewed AI feedback
- Started scenario activity

---

### 8.6 Achievement Badge

**Purpose:** Marks meaningful milestones.

**React Mapping:** `<AchievementBadge />`

**Use Cases:**
- Module completion
- First reflection submitted
- All capabilities completed

**Design Notes:**
- Keep restrained. Avoid heavy gamification in MVP.

---

## 9. Recommended Build Order

### Sprint 1 — Core Composition System

1. Button
2. Card
3. Badge
4. Page Header
5. Section Header
6. Container
7. Card Grid

**Why first:** These unlock almost every page and component.

---

### Sprint 2 — Learning Foundation

1. Module Card
2. Capability Card
3. Lesson Section
4. Reflection Panel
5. Knowledge Check
6. Reverse Engineering Panel

**Why second:** These define the instructional identity of Future of ID.

---

### Sprint 3 — AI Interaction System

1. AI Coach Panel
2. AI Feedback Panel
3. Prompt Composer
4. Conversation Thread
5. Suggested Actions
6. AI Insight Card

**Why third:** These support the actual AI-enabled learning promise.

---

### Sprint 4 — Dashboard System

1. Current Module Widget
2. Capability Progress
3. Completion Ring
4. Recommendation Card
5. Activity Feed
6. Achievement Badge

**Why fourth:** These assemble the learner dashboard and progress experience.

---

### Sprint 5 — Supporting UI

1. Input
2. Textarea
3. Tabs
4. Modal
5. Alert
6. Tooltip
7. Skeleton / Loading
8. Dropdown / Select

**Why fifth:** These support refinement, interaction, and edge cases.

---

## 10. Figma MCP Build Instructions

When generating components in Figma, AI should follow these rules:

1. Use existing Future of ID color variables.
2. Use existing typography styles.
3. Use the established spacing scale.
4. Use the established radius scale.
5. Use Auto Layout for every component where appropriate.
6. Use component variants for states and sizes.
7. Use component properties for icons, labels, optional descriptions, and states.
8. Name components using clear slash-based conventions.
9. Organize components by tier.
10. Do not invent new colors, type styles, radii, or spacing values without approval.

### Suggested Figma Page Structure

```text
00 — Cover
01 — Foundations
02 — Core Components
03 — Layout Components
04 — Learning Components
05 — AI Components
06 — Dashboard Components
07 — Page Templates
08 — Prototype Flows
09 — Archive
```

### Suggested Naming Convention

```text
Button/Primary/Default
Button/Primary/Hover
Button/Primary/Disabled
Card/Default
Card/Elevated
ModuleCard/InProgress
ModuleCard/Complete
AIFeedbackPanel/Complete
AIFeedbackPanel/Generating
```

---

## 11. React Implementation Mapping

The future React component library should mirror the design system:

```text
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/Badge.tsx
src/components/layout/PageHeader.tsx
src/components/layout/SectionHeader.tsx
src/components/course/ModuleCard.tsx
src/components/course/CapabilityCard.tsx
src/components/course/LessonSection.tsx
src/components/course/ReflectionPanel.tsx
src/components/course/KnowledgeCheck.tsx
src/components/ai/AIFeedbackPanel.tsx
src/components/ai/AICoachPanel.tsx
src/components/dashboard/CurrentModuleWidget.tsx
src/components/dashboard/CapabilityProgress.tsx
```

Implementation should preserve the project architecture principle: route files compose sections; reusable components handle presentation; content and data remain separate from UI logic.

---

## 12. What Not To Build Yet

To keep the system focused, defer these until the core product is stronger:

- Full enterprise settings screens
- Complex account management UI
- Heavy gamification system
- Complex admin dashboard
- Advanced analytics visualizations
- Community/discussion components
- Marketplace/library browsing system
- Overly complex animation system

These may become valuable later, but they are not needed for the MVP component system.

---

## 13. Definition of Done

A component is considered ready when it meets the following criteria:

1. Uses approved tokens only.
2. Has clear variants and states.
3. Uses Auto Layout correctly in Figma.
4. Has a defined React mapping.
5. Supports realistic Future of ID content.
6. Works in desktop and mobile contexts.
7. Does not introduce unnecessary visual complexity.
8. Supports the instructional purpose of the product.

---

## 14. Strategic Summary

Future of ID should not feel like a generic SaaS template. It should feel like a premium, thoughtful, AI-enabled learning platform built by someone who understands instructional design deeply.

The component system should make that identity repeatable.

The foundation is already strong. The next phase is to use AI and Figma MCP to generate the reusable component library, review it carefully, and then map the best patterns into production React components.
