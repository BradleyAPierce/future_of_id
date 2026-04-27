export type ModuleLayerSection = {
  id: string;
  title: string;
  description?: string;
  items?: {
    label: string;
    description?: string;
  }[];
};

export type ModuleLayer = {
  title: string;
  badge?: string;
  intro?: string;
  sections: ModuleLayerSection[];
};

export type ModuleContent = {
  slug: string;
  intro: {
    overview: string;
    outcomes?: string[];
  };
  layers: {
    theory: ModuleLayer;
    experience: ModuleLayer;
    reverseEngineering: ModuleLayer;
  };
  reflection?: {
    title: string;
    prompt: string;
  };
};

export const moduleContentBySlug: Record<string, ModuleContent> = {
  "ai-literacy": {
    slug: "ai-literacy",
    intro: {
      overview:
        "AI literacy is the ability to understand what AI systems can do, where they fail, and how to use them responsibly in learning design work. This module focuses on AI as a design partner, not a replacement for instructional judgment.",
      outcomes: [
        "Explain how AI is changing instructional design workflows.",
        "Identify appropriate and inappropriate uses of AI in learning design.",
        "Connect AI-enabled design work to familiar L&D frameworks.",
        "Evaluate an AI-supported learning activity for instructional quality and risk.",
      ],
    },
    layers: {
      theory: {
        title: "Theory",
        badge: "Layer 1",
        intro:
          "This layer establishes the core concepts behind AI literacy for instructional designers: capability, limits, workflow impact, and responsible judgment.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "AI literacy means knowing how to work with AI systems critically and intentionally. For instructional designers, this includes understanding how AI can support analysis, ideation, drafting, feedback, personalization, and evaluation while recognizing that design accountability remains human.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "Instructional designers are increasingly expected to move faster, work across more systems, and create learning that responds to changing business needs. AI can accelerate parts of that work, but only when designers can judge quality, reduce bias, protect learner trust, and connect outputs to real performance goals.",
          },
          {
            id: "industry-trends",
            title: "Industry Trends",
            description:
              "AI is shifting learning design from static content production toward workflow orchestration, rapid prototyping, adaptive support, and AI-assisted analysis. The most valuable skill is not simply prompting a tool; it is knowing how to frame the problem, evaluate the output, and integrate AI into an instructional system.",
          },
          {
            id: "demand-signals",
            title: "Demand Signals",
            description:
              "Organizations are looking for learning professionals who can use AI responsibly to improve speed, scale, personalization, and evidence-based design. Roles increasingly reference AI fluency, data-informed decision-making, automation awareness, and the ability to guide stakeholders through responsible adoption.",
          },
          {
            id: "instructional-design-implications",
            title: "Instructional Design Implications",
            description:
              "AI changes the designer's workflow, but it does not remove the need for analysis, sequencing, learner empathy, accessibility, assessment strategy, or evaluation. Strong designers use AI to expand options and reduce production friction while preserving instructional intent.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "ADDIE",
                description:
                  "AI can support each phase of ADDIE, especially analysis, design alternatives, draft development, and evaluation review. The model still provides the human decision structure for when and why AI is used.",
              },
              {
                label: "Bloom's Taxonomy",
                description:
                  "AI can generate examples and explanations, but learners still need opportunities to analyze, evaluate, and create. AI literacy helps designers avoid mistaking generated content for higher-order learning.",
              },
              {
                label: "Learner-Centered Design",
                description:
                  "AI should serve learner needs rather than tool novelty. Designers must consider learner context, accessibility, trust, privacy, and the support learners need to use AI-generated guidance productively.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer asks learners to examine an AI-supported design scenario and practice deciding where AI adds value, where it introduces risk, and where human design judgment is required.",
        sections: [
          {
            id: "activity",
            title: "Interactive Activity",
            description:
              "Review a draft AI-assisted learning activity and identify which parts are useful, incomplete, or risky. Focus on instructional purpose, learner fit, accuracy, accessibility, and whether the activity supports meaningful practice rather than passive content consumption.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description:
              "Decide which design tasks should be handled by AI, which should be reviewed by a designer, and which require direct stakeholder or learner input. The goal is to practice using AI as part of a controlled design workflow instead of accepting outputs at face value.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description:
              "Use feedback prompts to compare your decisions against instructional design criteria. Strong decisions should explain both the benefit of AI support and the safeguard needed to protect learning quality.",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro:
          "This layer makes the design logic visible so learners can see how the module models responsible AI use rather than treating AI as a generic productivity shortcut.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description:
              "The module moves from conceptual understanding to judgment-based practice. Learners first build a shared vocabulary, then apply that vocabulary to a realistic design decision, and finally inspect the structure behind the activity.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "The structure aligns with ADDIE by separating analysis, design decisions, and evaluation. It also uses Bloom's Taxonomy by asking learners to evaluate AI-supported outputs rather than only recall definitions.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "The content is split into modular sections so each concept can be reused or expanded later. Theory explains the capability, experience creates a practice moment, and reverse engineering reveals the instructional rationale.",
          },
          {
            id: "prompt-architecture",
            title: "Prompt Architecture",
            description:
              "The implied prompt pattern is: define the learning goal, describe the learner context, constrain the AI task, request multiple options, and evaluate outputs against instructional criteria. This keeps AI use grounded in design intent.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description:
              "The module content is stored as structured data rather than embedded UI text. This keeps the route and components reusable while allowing each module to provide its own instructional content.",
          },
          {
            id: "design-rationale",
            title: "Design Rationale",
            description:
              "The activity emphasizes evaluation because AI literacy is demonstrated through judgment, not tool usage alone. Learners should leave with a repeatable way to decide when AI improves a learning design and when it weakens it.",
          },
        ],
      },
    },
    reflection: {
      title: "Reflection",
      prompt:
        "Where would AI most responsibly support your current learning design workflow, and what human review step would you keep in place to protect instructional quality?",
    },
  },
  "performance-consulting": {
    slug: "performance-consulting",
    intro: {
      overview: "Placeholder overview for this module.",
      outcomes: ["Placeholder outcome 1", "Placeholder outcome 2"],
    },
    layers: {
      theory: {
        title: "Theory",
        badge: "Layer 1",
        intro: "Placeholder framing for the theory layer.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description: "Placeholder content.",
          },
          {
            id: "business-alignment",
            title: "Business Alignment",
            description: "Placeholder content.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "HPI / performance improvement",
                description: "Placeholder theory connection.",
              },
              {
                label: "Kirkpatrick",
                description: "Placeholder theory connection.",
              },
              {
                label: "Needs analysis",
                description: "Placeholder theory connection.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro: "Placeholder framing for the experience layer.",
        sections: [
          {
            id: "activity",
            title: "Interactive Activity",
            description: "Placeholder content.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description: "Placeholder content.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description: "Placeholder content.",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro: "Placeholder framing for the reverse engineering layer.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description: "Placeholder content.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description: "Placeholder content.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description: "Placeholder content.",
          },
        ],
      },
    },
    reflection: {
      title: "Reflection",
      prompt: "Placeholder reflection prompt.",
    },
  },
};
