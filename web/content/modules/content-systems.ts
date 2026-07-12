import type { ModuleContent } from "@/types/moduleContent";

export const contentSystemsContent: ModuleContent = {
  slug: "content-systems",
  intro: {
    learnerQuestion: "How can learning content scale without losing quality?",
    takeaway:
      "Reusable content works when structure protects context and quality.",
    overview:
      "Learning content should not be treated as a set of one-off deliverables. Content systems thinking helps instructional designers structure, reuse, govern, and maintain learning content without losing context or quality. This module is about systems thinking for instructional work: deciding what should become reusable, what needs protection, and how workflows keep content reliable as it scales.",
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
        {
          id: "evidence-and-source-notes",
          title: "Evidence and Source Notes",
          description:
            "Established learning-object and structured-authoring sources support reuse concepts; Bradley's interpretation governs how those concepts are applied in this project.",
          items: [
            {
              label: "Established learning-object source — Wiley (2000)",
              description:
                "Connecting Learning Objects to Instructional Design Theory: A Definition, a Metaphor, and a Taxonomy, in The Instructional Use of Learning Objects, 2000, supports examining learning-object definitions and reuse at an instructional level.",
            },
            {
              label: "Established technical standard — OASIS (2018)",
              description:
                "Darwin Information Typing Architecture (DITA) Version 1.3, Approved Errata 02, 2018, demonstrates structured authoring and content reuse. It is a technical reference, not evidence that every learning team should adopt DITA.",
            },
            {
              label: "Bradley interpretation",
              description:
                "The principle that reusable content works when structure protects instructional context and quality is Bradley's professional design philosophy for this system.",
            },
          ],
        },
      ],
    },
    experience: {
      title: "Experience",
      badge: "Layer 2",
      intro:
        "This layer gives you practice turning a messy course asset into a modular content system that can be reused and maintained. Before proposing reuse or automation, decide what should be structured, what context must stay protected, what governance prevents quality drift, and what workflow choices make updates sustainable.",
      situationalMentalModel: {
        title: "Content System Decisions",
        steps: [
          "Messy Content",
          "Structured Objects",
          "Reuse Rules",
          "Governance",
        ],
      },
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
        "Bradley's professional observation is that repeated learning content can create update, consistency, and governance problems when teams copy and revise it across experiences. This module applies a content-system lens: messy content, structured objects, reuse rules, and governance. It does not claim that every team has the same workflow; it demonstrates Bradley's design principle that reuse is valuable only when structure protects context and quality.",
      sections: [
        {
          id: "what-this-module-is-solving",
          title: "What This Module Is Solving",
          description:
            "This module addresses an update and governance problem Bradley has observed in repeated learning content. The goal is not to prescribe one content system, but to make content easier to reuse and maintain while protecting the instructional context that makes it useful.",
        },
        {
          id: "key-design-decisions",
          title: "Key Design Decisions",
          items: [
            {
              label: "Start with duplication, not architecture",
              description:
                "Instead of introducing content models first, the module starts with messy repeated content patterns. If you don't see the duplication, structure feels unnecessary.",
            },
            {
              label: "Keep content chunks practical and recognizable",
              description:
                "Content is broken into real instructional pieces: explanations, prompts, examples, and feedback, not abstract content entities. These become structured objects only when reuse preserves their instructional purpose.",
            },
            {
              label: "Separate content from UI early",
              description:
                "The module reinforces that instructional meaning should exist independently from how it is displayed. This protects context so content can move across formats without losing intent.",
            },
            {
              label: "Limit how much gets structured",
              description:
                "Not everything becomes a reusable object. Reuse rules define what can repeat, what must stay specific, and what needs review before it moves.",
            },
            {
              label: "Keep automation in the background",
              description:
                "Automation is introduced only where it removes obvious friction, such as review routing, tagging, or version checks. Governance stays visible so speed does not weaken quality.",
            },
          ],
        },
        {
          id: "proven-practice-vs-new-approach",
          title: "Proven Practice vs New Approach",
          items: [
            {
              label: "Common practice observed by Bradley: Build courses page by page",
              description:
                "In Bradley's professional experience, teams may build one course at a time, copy and adjust content across modules, and rely on manual coordination to track changes.",
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
                "This module pushes designers to find messy or duplicated explanations, prompts, examples, and feedback before creating more content.",
            },
            {
              label:
                "New approach: Define reusable chunks with clear boundaries",
              description:
                "Content can live beyond a single course when designers define what it means, where it belongs, when it should be reused, and what context must travel with it.",
            },
            {
              label: "New approach: Manage content over time",
              description:
                "This is not a replacement for instructional design fundamentals. It is a shift in how reuse rules and governance preserve quality after the first build.",
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
                "Defining structured objects and reuse rules takes more time at the beginning, but reduces rework during updates.",
            },
            {
              label: "Reuse vs context",
              description:
                "Over-reusing content can strip away necessary context. Some content should stay specific, and some reusable content needs context attached to it.",
            },
            {
              label: "Structure vs flexibility",
              description:
                "More structure improves consistency, but too much structure makes content rigid and harder to adapt. The system has to remain maintainable.",
            },
            {
              label: "Automation vs quality control",
              description:
                "Automation can speed up workflows, but it cannot evaluate instructional quality, context, or intent. Human review remains part of governance.",
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
          description:
            "AI was used as a support tool, not a decision-maker. It helped surface patterns, but it did not decide what should become reusable, what context needed protection, or what governance would preserve quality.",
          items: [
            {
              label: "Pattern identification",
              description:
                "AI helped surface messy repeated content structures across modules, such as explanations, prompts, examples, and feedback types.",
            },
            {
              label: "Drafting and variation",
              description:
                "AI assisted in generating variations of reusable content blocks, which were then reviewed and refined against instructional context.",
            },
            {
              label: "Workflow acceleration",
              description:
                "AI reduced time spent on early drafts and formatting, allowing more focus on structure and clarity.",
            },
            {
              label: "Where AI did not replace judgment",
              description:
                "AI did not decide what should be reusable, define content boundaries, write reuse rules, evaluate instructional quality, or determine where automation belongs. Those decisions remained human-driven.",
            },
          ],
        },
        {
          id: "what-another-designer-can-reuse",
          title: "What Another Designer Can Reuse",
          description:
            "You don't need a full system to apply this approach. Start with the pattern: messy content, structured objects, reuse rules, and governance.",
          items: [
            {
              label: "Reusable content patterns",
              description:
                "Identify repeatable instructional assets like explanations, prompts, feedback, and examples.",
            },
            {
              label: "A simple reuse rule",
              description:
                "If you've written it twice, consider structuring it, but only reuse it when the instructional context still holds.",
            },
            {
              label: "Basic content separation",
              description:
                "Keep instructional content independent from layout, slide design, or page design when possible so meaning is not trapped in presentation.",
            },
            {
              label: "Lightweight workflow improvements",
              description:
                "Clarify who owns drafting, review, updates, and reuse decisions. Reduce handoffs that rely on memory.",
            },
            {
              label: "A reuse filter",
              description:
                "Ask: Does this appear in more than one place? What context must stay attached? Who governs updates? Would updating this in one place preserve quality?",
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
                "Trying to turn all content into reusable objects creates complexity without value and can make the system harder to maintain.",
            },
            {
              label: "Teams don't adopt shared rules",
              description:
                "Without agreement on naming, structure, reuse rules, and ownership, reuse breaks down quickly.",
            },
            {
              label: "Content loses context",
              description:
                "Reused content that is not adapted properly can feel generic, disconnected, or instructionally weaker than the original.",
            },
            {
              label: "Automation replaces review",
              description:
                "Skipping human checks leads to quality issues, even if the workflow is efficient. Automation cannot replace governance.",
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
            "Think of one course you've updated more than once. What messy content could become a structured object, what reuse rules would protect context, and what governance would keep quality intact over time?",
        },
      ],
    },
  },
  reflection: {
    title: "Reflection",
    prompt:
      "What content in your current workflow should become reusable, what context must be protected as it scales, and what governance or workflow decision remains yours as the instructional designer?",
  },
};
