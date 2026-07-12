# Future of ID — Product Experience Map

## Purpose

This document maps how learners experience Future of ID over time, across pages, modules, interactions, and return visits.

It is not a technical architecture document and not a UI specification. It connects the learner journey, product psychology, page purpose, and signature learning moments so future Figma, React, AI, and Reverse Build decisions can support a coherent product experience.

## Document Ownership

This document owns experience sequencing and key learner moments.

It bridges `docs/strategy/EXPERIENCE_ARCHITECTURE.md` and `docs/experience/EXPERIENCE_PHILOSOPHY.md` by translating learner journey principles and product feel standards into concrete moments across the product.

Use this document when deciding what a learner should understand, feel, notice, practice, or choose at major points in the experience.

## Core Assumption

Future of ID is self-led, self-directed, and open access.

Learners may explore pages and modules in any order. Nothing is locked, hidden, or gated by completion.

Modules are internally guided, but the overall course path is open.

Progress may help learners understand where they have been and what they may want to do next, but progress must never control access to content, capabilities, interactions, or return visits.

## The First Five Minutes

The first five minutes should communicate that Future of ID is not another static course or traditional LMS. The learner should quickly understand that this is a guided professional learning product built around exploration, practice, transparency, and applied instructional design judgment.

1. First Impression — "This does not feel like another online course."
2. Curiosity — "What kind of product is this?"
3. Credibility — "This was built by someone who understands instructional design."
4. Participation — "I can start exploring immediately."
5. Commitment — "I want to see what is inside the next capability."

This arc applies to the entire product, not only Module 1. A learner may enter through the homepage, dashboard, orientation, a module, or a shared resource and should still be able to orient quickly.

## Primary Entry Points

Each major page has a psychological job. The page does not need to answer every question; it needs to help the learner understand why this surface matters and what they can do next.

- Homepage: Why should I care?
- About: Why should I trust this?
- Dashboard: Where do I want to go?
- Orientation: How does this experience work?
- Module Page: What capability am I exploring?
- Experience Page: Can I apply this?
- Reverse Build Page: Why was this designed this way?
- Resources Page: What can I take with me?
- Completion Page: What changed in how I think?

## Key Learner Journey Moments

### First Homepage Visit

- Learner question: What is Future of ID, and why does it matter now?
- Desired feeling: Interested, oriented, and reassured that this is a credible professional learning product.
- Product responsibility: Establish the capability development system, Bradley's current seven-capability demonstration, and the value of learning by experiencing and inspecting the architecture.
- Design implication: The homepage should create a clear reason to begin without overwhelming the learner with every module detail.

### First Dashboard Scan

- Learner question: Where can I go, and what looks useful to me right now?
- Desired feeling: In control, not managed.
- Product responsibility: Show the capability landscape, progress awareness, and available next steps without implying that access depends on completion.
- Design implication: The dashboard should support scanning, comparison, and immediate entry into any capability.

### First Orientation Visit

- Learner question: How does this experience work?
- Desired feeling: Grounded and ready to explore.
- Product responsibility: Explain the reusable method, Bradley's current seven-capability pathway, the role of progress, and how Theory, Experience, Reverse Build, and Reflection work together.
- Design implication: Orientation should clarify the product without becoming a gate or prerequisite.

### First Module Entry

- Learner question: What capability am I exploring, and why does it matter?
- Desired feeling: Focused, curious, and professionally respected.
- Product responsibility: Establish the capability, its relevance to modern instructional design, and the path through the module.
- Design implication: Module pages should be internally guided with clear progression, but should not assume the learner arrived from a previous module.

### First AI Interaction

- Learner question: Can AI help me think more clearly about this decision?
- Desired feeling: Challenged in a useful way.
- Product responsibility: Provide specific, grounded feedback that expands the learner's judgment without replacing it.
- Design implication: AI feedback should feel like a thoughtful instructional design review, not a generic chatbot response or motivational message.

### First Reverse Build

- Learner question: Why was this designed this way?
- Desired feeling: Insightful and invited behind the curtain.
- Product responsibility: Reveal the instructional strategy, content structure, prompt logic, design rationale, and implementation tradeoffs behind the experience.
- Design implication: Reverse Build should make the product more trustworthy by exposing reasoning, not by adding technical noise.

### First Reflection

- Learner question: What does this mean for my own work?
- Desired feeling: Personally connected and ready to transfer the idea into practice.
- Product responsibility: Help the learner convert understanding into future design decisions.
- Design implication: Reflection prompts should encourage action, judgment, and professional transfer rather than private journaling alone.

### First Artifact Or Takeaway

- Learner question: What can I use after I leave this page?
- Desired feeling: Equipped.
- Product responsibility: Offer a practical insight, framework, decision prompt, example, or artifact the learner can carry into work.
- Design implication: Takeaways should be lightweight, useful, and connected to the capability rather than added as decorative downloads.

### Revisiting A Favorite Module

- Learner question: Can I return to the part that helps me solve a current problem?
- Desired feeling: Welcomed back and immediately reoriented.
- Product responsibility: Make repeat visits useful even when progress is already complete or irrelevant.
- Design implication: Modules should support revisit behavior with clear structure, reusable insights, and easy access to experiences and Reverse Build content.

### Returning After Local Progress Is Cleared

- Learner question: Did I lose access or break the experience?
- Desired feeling: Unbothered and still in control.
- Product responsibility: Keep the full product usable without saved state, login, database persistence, or permanent local storage.
- Design implication: Progress reset should never block access, hide capabilities, remove AI interactions, or make the product feel broken.

### Completing Bradley's Current Seven-Capability Pathway

- Learner question: What changed in how I think about instructional design?
- Desired feeling: More capable, not merely finished.
- Product responsibility: Help the learner synthesize Bradley's current seven capabilities, then consider how their own professional context may call for a different pathway.
- Design implication: Completion should emphasize growth, synthesis, reflection, and next actions rather than gamified reward.

## Signature Experience Opportunities

Early candidate signature moments include:

- First AI critique that challenges an assumption
- First Reverse Build reveal
- First practical artifact
- First "I can use this at work" moment
- First comparison between traditional ID and future-ready ID
- First return visit driven by curiosity, not obligation

These moments should be memorable because they change how the learner thinks, not because they add spectacle.

## Design Rules

- Do not assume linear navigation.
- Do not depend on login, database persistence, or permanent local storage.
- Do not lock modules.
- Do not hide content based on completion.
- Progress should inform, not restrict.
- Every major page should create a reason to continue.
- Every interaction should produce insight, practice, or a useful takeaway.
- If a feature only works when saved history exists, it does not belong in the MVP experience.

## Relationship To Other Documents

- `EXPERIENCE_ARCHITECTURE.md` defines the learner journey principles.
- `EXPERIENCE_PHILOSOPHY.md` defines the product feel and quality bar.
- `PRODUCT_EXPERIENCE_MAP.md` translates those ideas into learner moments and page-level journey design.
- `CONTENT_ARCHITECTURE.md` defines the instructional structure.
- `SITE_MAP.md` defines the route structure.

## Success Criteria

Future of ID succeeds when a learner can enter from any major page, understand where they are, find something valuable, and choose their next step without needing a locked sequence or account-based progress system.
