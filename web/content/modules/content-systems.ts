import type { ModuleContent } from "@/types/moduleContent";

export const contentSystemsContent: ModuleContent = {
  slug: "content-systems",
  intro: {
    overview:
      "Content systems thinking moves you from one-off course builds to structured content you can reuse and update across programs. This module covers modular content design, content architecture, workflow automation, and separating content from presentation. The goal is to scale content without duplicating it or breaking it when it changes.",
    outcomes: [
      "Explain how modular content design supports scalable learning production.",
      "Identify reusable learning objects and content patterns within a course workflow.",
      "Evaluate where workflow automation can reduce production friction without weakening instructional quality.",
      "Connect content architecture decisions to reuse, maintenance, governance, and separation of content from UI.",
    ],
  },
  layers: {
    theory: {
      title: "Theory",
      badge: "Layer 1",
      intro:
        "This layer shows how to structure learning content so you can reuse, update, publish, and scale it across modules and formats.",
      sections: [
        {
          id: "definition",
          title: "Capability Definition",
          description:
            "Content systems thinking means designing instructional content as structured, reusable data instead of isolated page copy. For learning teams, this means defining content types, fields, and reuse rules so you don't rewrite the same content for every course.",
        },
        {
          id: "why-it-matters",
          title: "Why It Matters",
          description:
            "As your learning library grows, one-off content makes updates, localization, personalization, and measurement harder to manage. A content system preserves instructional quality while reducing duplication, version drift, manual handoffs, and UI-specific copy you can't reuse.",
        },
        {
          id: "modular-content-design",
          title: "Modular Content Design",
          description:
            "Modular content design breaks learning material into purposeful chunks such as overviews, outcomes, explanations, examples, practice prompts, feedback, reflections, and reverse engineering notes. Make each module complete enough to stand on its own, but structured so you can reuse or rearrange it.",
        },
        {
          id: "reusable-learning-objects",
          title: "Reusable Learning Objects",
          description:
            "Design reusable learning objects so you can use them in more than one context. Define clear boundaries, labels, dependencies, and metadata so teams know what the object teaches, where it fits, and what changes when you update it.",
        },
        {
          id: "content-architecture",
          title: "Content Architecture",
          description:
            "Content architecture defines how your content is structured: content types, fields, relationships, naming conventions, and governance rules. It separates what the content means from how a page or component displays it.",
        },
        {
          id: "workflow-automation",
          title: "Workflow Automation",
          description:
            "Use workflow automation for drafting, review routing, version checks, publishing, tagging, QA, and localization prep. Use automation where it removes repeatable work while keeping human review for instructional quality and context.",
        },
        {
          id: "theory-bridge",
          title: "L&D Theory Bridge",
          items: [
            {
              label: "Reusable learning objects",
              description:
                "Reusable learning objects let you use the same instructional content across modules and formats without rewriting it.",
            },
            {
              label: "Information architecture",
              description:
                "Information architecture helps you organize content so teams can find it, use it, and update it without guessing.",
            },
            {
              label: "Single source of truth",
              description:
                "Single-source content keeps core material in one place so you don't update the same content across multiple versions.",
            },
            {
              label: "Workflow design",
              description:
                "Workflow design defines how content moves from request to draft, review, approval, publication, and revision. It reduces reliance on memory and manual coordination to maintain quality.",
            },
          ],
        },
      ],
    },
    experience: {
      title: "Experience",
      badge: "Layer 2",
      intro:
        "This layer gives you practice turning a messy course asset into a modular content system that can be reused and maintained.",
      sections: [
        {
          id: "activity",
          title: "Content Workflow Mapping",
          description:
            "Review a course section that contains repeated explanations, prompts, examples, and UI-specific copy. Identify which pieces should become structured content fields, reusable learning objects, metadata, or presentation-only elements.",
        },
        {
          id: "decision-making",
          title: "Applied Decision-Making",
          description:
            "Decide what should be standardized, what should remain module-specific, and what could be automated. Focus on practical workflow improvements: reducing duplicate edits, clarifying review ownership, separating content from UI, and making future updates easier to manage.",
        },
        {
          id: "feedback",
          title: "Feedback and Insight",
          description:
            "Evaluate the proposed content system against working criteria: content is modular, fields are meaningful, reuse does not remove necessary context, automation supports rather than replaces review, and UI components remain presentation-focused.",
        },
      ],
    },
    reverseEngineering: {
      title: "Reverse Build",
      badge: "Layer 3",
      intro:
        "Most learning teams don't struggle to create content; they struggle to update it without breaking everything. This module was built to address a common pattern: the same explanations, examples, and prompts get rewritten across courses, slightly differently each time. That leads to version drift, inconsistent quality, and slow updates when something changes. The goal here is not to teach systems thinking as a concept. It is to show how to stop rewriting the same content, make updates in one place instead of five, and reduce manual coordination across reviewers and stakeholders. This module focuses on reducing rework and making content maintainable, not building a perfect system.",
      sections: [
        {
          id: "what-this-module-is-solving",
          title: "What This Module Is Solving",
          description:
            "Most learning teams don't struggle to create content; they struggle to update it without breaking everything. This module addresses a common pattern: the same explanations, examples, and prompts get rewritten across courses, slightly differently each time. That leads to version drift, inconsistent quality, and slow updates when something changes. The goal is not to teach systems thinking as a concept. It is to make content easier to reuse, update, and maintain across real production constraints.",
        },
        {
          id: "key-design-decisions",
          title: "Key Design Decisions",
          items: [
            {
              label: "Start with duplication, not architecture",
              description:
                "Instead of introducing content models first, the module starts with repeated content patterns. If you don't see the duplication, structure feels unnecessary.",
            },
            {
              label: "Keep content chunks practical and recognizable",
              description:
                "Content is broken into real instructional pieces: explanations, prompts, examples, and feedback, not abstract content entities. This makes reuse easier to spot and apply.",
            },
            {
              label: "Separate content from UI early",
              description:
                "The module reinforces that instructional meaning should exist independently from how it is displayed. This prevents content from being locked into a single format.",
            },
            {
              label: "Limit how much gets structured",
              description:
                "Not everything becomes a reusable object. The focus is on structuring content that actually repeats or changes often.",
            },
            {
              label: "Keep automation in the background",
              description:
                "Automation is introduced only where it removes obvious friction, such as review routing, tagging, or version checks. It is not treated as the center of the design.",
            },
          ],
        },
        {
          id: "proven-practice-vs-new-approach",
          title: "Proven Practice vs New Approach",
          items: [
            {
              label: "Proven practice: Build courses page by page",
              description:
                "Most teams build one course at a time, copy and tweak content across modules, and rely on memory to track what changed where.",
            },
            {
              label: "Proven practice: Treat each course as standalone",
              description:
                "This works for one-off delivery, but it creates problems when content needs to scale, repeat, or stay aligned across multiple experiences.",
            },
            {
              label:
                "New approach: Identify repeated content before building",
              description:
                "This module pushes designers to find repeated explanations, prompts, examples, and feedback before creating more content.",
            },
            {
              label:
                "New approach: Define reusable chunks with clear boundaries",
              description:
                "Content can live beyond a single course when designers define what it means, where it belongs, and when it should be reused.",
            },
            {
              label: "New approach: Manage content over time",
              description:
                "This is not a replacement for instructional design fundamentals. It is a shift in how content is managed and maintained after the first build.",
            },
          ],
        },
        {
          id: "tradeoffs-and-constraints",
          title: "Tradeoffs and Constraints",
          description: "This approach comes with real tradeoffs.",
          items: [
            {
              label: "Slower upfront, faster later",
              description:
                "Defining reusable content takes more time at the beginning, but reduces rework during updates.",
            },
            {
              label: "Reuse vs context",
              description:
                "Over-reusing content can strip away necessary context. Some content should stay specific.",
            },
            {
              label: "Structure vs flexibility",
              description:
                "More structure improves consistency, but too much structure makes content rigid and harder to adapt.",
            },
            {
              label: "Automation vs quality control",
              description:
                "Automation can speed up workflows, but it cannot evaluate instructional quality. Human review remains essential.",
            },
            {
              label: "Simplicity vs scalability",
              description:
                "A lightweight system is easier to adopt, but may need refinement as content volume grows.",
            },
          ],
        },
        {
          id: "how-ai-supported-the-build",
          title: "How AI Supported the Build",
          description: "AI was used as a support tool, not a decision-maker.",
          items: [
            {
              label: "Pattern identification",
              description:
                "AI helped surface repeated content structures across modules, such as explanations, prompts, examples, and feedback types.",
            },
            {
              label: "Drafting and variation",
              description:
                "AI assisted in generating variations of reusable content blocks, which were then reviewed and refined.",
            },
            {
              label: "Workflow acceleration",
              description:
                "AI reduced time spent on early drafts and formatting, allowing more focus on structure and clarity.",
            },
            {
              label: "Where AI did not replace judgment",
              description:
                "AI did not decide what should be reusable, define content boundaries, evaluate instructional quality, or determine where automation belongs. Those decisions remained human-driven.",
            },
          ],
        },
        {
          id: "what-another-designer-can-reuse",
          title: "What Another Designer Can Reuse",
          description: "You don't need a full system to apply this approach.",
          items: [
            {
              label: "Reusable content patterns",
              description:
                "Identify repeatable elements like explanations, prompts, feedback, and examples.",
            },
            {
              label: "A simple rule",
              description:
                "If you've written it twice, consider structuring it.",
            },
            {
              label: "Basic content separation",
              description:
                "Keep instructional content independent from layout, slide design, or page design when possible.",
            },
            {
              label: "Lightweight workflow improvements",
              description:
                "Clarify who owns drafting, review, and updates. Reduce handoffs that rely on memory.",
            },
            {
              label: "A reuse filter",
              description:
                "Ask: Does this appear in more than one place? Will this need to change later? Would updating this in one place save time?",
            },
          ],
        },
        {
          id: "where-this-could-break",
          title: "Where This Could Break",
          items: [
            {
              label: "Everything gets over-structured",
              description:
                "Trying to turn all content into reusable objects creates complexity without value.",
            },
            {
              label: "Teams don't adopt shared rules",
              description:
                "Without agreement on naming, structure, and ownership, reuse breaks down quickly.",
            },
            {
              label: "Content loses context",
              description:
                "Reused content that is not adapted properly can feel generic or disconnected.",
            },
            {
              label: "Automation replaces review",
              description:
                "Skipping human checks leads to quality issues, even if the workflow is efficient.",
            },
            {
              label: "The system outgrows its simplicity",
              description:
                "What works for a small set of courses may need to evolve as scale increases.",
            },
          ],
        },
        {
          id: "reflection-question",
          title: "Reflection Question",
          description:
            "Think of one course you've updated more than once. What content did you rewrite each time, and how would you structure it so you only have to update it once going forward?",
        },
      ],
    },
  },
  reflection: {
    title: "Reflection",
    prompt:
      "Where does your current learning content workflow create duplication or manual rework, and what content structure or automation step would reduce that friction without reducing quality?",
  },
};
