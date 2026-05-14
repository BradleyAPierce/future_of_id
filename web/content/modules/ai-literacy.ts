import type { ModuleContent } from "@/types/moduleContent";

export const aiLiteracyContent: ModuleContent = {
  slug: "ai-literacy",
  intro: {
    overview:
      "AI literacy means knowing what AI can do, where it fails, and how to use it responsibly in design work. This module treats AI as a design partner, not a replacement for instructional judgment.",
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
        "This layer explains the core ideas behind AI literacy for instructional designers: what AI does well, where it fails, how it changes your workflow, and where your judgment matters.",
      sections: [
        {
          id: "definition",
          title: "Capability Definition",
          description:
            "AI literacy means using AI while actively checking its accuracy, usefulness, and risk. For instructional designers, AI can support analysis, ideation, drafting, feedback, personalization, and evaluation, but designers remain responsible for the final decisions.",
        },
        {
          id: "why-it-matters",
          title: "Why It Matters",
          description:
            "Instructional designers are expected to deliver faster, work across multiple systems, and create learning that improves job performance. AI can speed up parts of the work, but designers still need to judge quality, reduce bias, protect trust, and tie outputs to real performance.",
        },
        {
          id: "industry-trends",
          title: "How the Work Is Changing",
          description:
            "AI reduces time spent creating content and increases time spent testing ideas, supporting your learners, and analyzing results. The most valuable skill is framing the problem, evaluating AI output, and deciding how to use it in your workflow.",
        },
        {
          id: "demand-signals",
          title: "Demand Signals",
          description:
            "Organizations expect learning teams to use AI to work faster without lowering quality. Many roles now expect you to use AI, work with data, understand automation, and guide teams in using these tools responsibly.",
        },
        {
          id: "instructional-design-implications",
          title: "Instructional Design Implications",
          description:
            "AI changes the workflow, but designers still handle analysis, sequencing, accessibility, assessment, and evaluation. Strong designers use AI to explore ideas faster and reduce production time without losing focus on learning outcomes.",
        },
        {
          id: "theory-bridge",
          title: "L&D Theory Bridge",
          items: [
            {
              label: "ADDIE",
              description:
                "Use AI to support analysis, explore design options, draft content, and review evaluation data. ADDIE still guides when and why you use AI.",
            },
            {
              label: "Bloom's Taxonomy",
              description:
                "AI can generate examples, but your learners still need to analyze, evaluate, and create. AI literacy prevents designers from confusing generated content with real learning.",
            },
            {
              label: "Learner-Centered Design",
              description:
                "Use AI to support the end learner, not to showcase the tool. Designers must consider learner context, accessibility, trust, and privacy, and ensure learners can actually use the guidance provided.",
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
      title: "Reverse Build",
      badge: "Layer 3",
      intro:
        "Most instructional designers don't struggle with understanding what AI is. They struggle with deciding how to use it without lowering quality. AI-supported design work often falls into two patterns: overuse, where designers accept outputs too quickly and replace thinking with generation; or underuse, where designers avoid AI entirely or use it only for surface-level drafting. This module was built to address that gap. The goal is not to teach AI terminology or tools. The goal is to help designers decide when AI helps, when it adds risk or noise, how to evaluate what it produces, and how to keep design judgment in place.",
      sections: [
        {
          id: "what-this-module-is-solving",
          title: "What This Module Is Solving",
          description:
            "Most instructional designers don't struggle with understanding what AI is. They struggle with deciding how to use it without lowering quality. Early AI-supported design work often falls into two patterns: overuse, where designers accept outputs too quickly and replace thinking with generation; or underuse, where designers avoid AI entirely or use it only for surface-level drafting. This module focuses on practical judgment under real constraints, not conceptual understanding.",
        },
        {
          id: "key-design-decisions",
          title: "Key Design Decisions",
          description:
            "The module was structured to interrupt passive acceptance of AI output.",
          items: [
            {
              label: "Move quickly into a design decision",
              description:
                "Instead of leading with definitions or tool explanations, the module moves quickly into a realistic decision scenario. If learners stay in theory too long, they may overestimate their ability to use AI effectively.",
            },
            {
              label: "Use time pressure as the context",
              description:
                "The scenario centers on tight timelines and pressure to move faster because that is where AI is most likely to be misused.",
            },
            {
              label: "Position AI as draft support",
              description:
                "AI is framed as a tool for drafting, variation, and exploration, not as a source of final instructional content.",
            },
            {
              label: "Keep human review visible",
              description:
                "The activity asks learners to identify what AI can reasonably produce, what needs validation, and what should not be delegated.",
            },
            {
              label: "Avoid perfect AI outputs",
              description:
                "Slight ambiguity and incompleteness are left in place so learners have to evaluate, not just recognize.",
            },
          ],
        },
        {
          id: "proven-practice-vs-new-approach",
          title: "Proven Practice vs New Approach",
          description:
            "This module builds on familiar instructional design practice but applies it to AI-supported workflows.",
          items: [
            {
              label: "Proven practice: define the goal",
              description:
                "Designers still need to define the learning goal before using AI to generate or refine anything.",
            },
            {
              label: "Proven practice: understand the learner context",
              description:
                "AI output only becomes useful when it fits the learner, performance context, and instructional need.",
            },
            {
              label: "Proven practice: evaluate quality before delivery",
              description:
                "AI increases the need for review because outputs can look complete even when they are shallow or inaccurate.",
            },
            {
              label: "New pressure: instant generation",
              description:
                "Content can be generated quickly, which reduces the natural pause for design thinking.",
            },
            {
              label: "New approach: evaluate and shape outputs",
              description:
                "The designer's role shifts from only creating content to guiding, constraining, testing, and refining AI-supported outputs.",
            },
          ],
        },
        {
          id: "tradeoffs-and-constraints",
          title: "Tradeoffs and Constraints",
          items: [
            {
              label: "Speed vs quality",
              description:
                "AI makes it easy to move faster, but faster output often reduces scrutiny. The module slows learners down at key points to force evaluation before acceptance.",
            },
            {
              label: "Exploration vs control",
              description:
                "AI is useful for generating options, but too much openness leads to vague or generic outputs.",
            },
            {
              label: "Automation vs judgment",
              description:
                "Some tasks can be delegated, such as drafting, variation, and examples. Others cannot, including accuracy, sequencing, learner fit, and final design decisions.",
            },
            {
              label: "Clarity vs realism",
              description:
                "Real AI-supported work is messy. The module keeps the scenario realistic but slightly simplified so learners can focus on decision-making.",
            },
            {
              label: "Variability of outputs",
              description:
                "AI outputs are inconsistent. The activity is designed so learners evaluate the type of output, not a single correct version.",
            },
          ],
        },
        {
          id: "how-ai-supported-the-build",
          title: "How AI Supported the Build",
          description:
            "AI was used during development, but in a controlled way.",
          items: [
            {
              label: "Scenario and example variation",
              description:
                "AI helped generate early variations of scenarios and examples.",
            },
            {
              label: "Prompt testing",
              description:
                "AI helped test how different prompt structures affected output quality.",
            },
            {
              label: "Failure pattern identification",
              description:
                "AI helped identify common failure patterns, such as generic responses, overconfident tone, and missing context.",
            },
            {
              label: "Prompt design as instructional design",
              description:
                "Prompts were treated as part of the design process, not a shortcut. Each prompt had to reflect a real design situation, constrain the task, and leave room for evaluation.",
            },
            {
              label: "Human review remained central",
              description:
                "AI did not define the learning goal, decide what the learner needed to practice, or determine what counted as a good decision. Outputs were reviewed, trimmed, and sometimes rejected.",
            },
          ],
        },
        {
          id: "what-another-designer-can-reuse",
          title: "What Another Designer Can Reuse",
          items: [
            {
              label: "Use AI for variation, not final answers",
              description:
                "Generate multiple drafts or examples, then evaluate and combine them.",
            },
            {
              label: "Design prompts around decisions, not content",
              description:
                "Instead of asking AI to create training, frame prompts around specific design needs, such as generating options, identifying risks, or suggesting variations.",
            },
            {
              label: "Build evaluation into the workflow",
              description:
                "Do not treat AI output as complete. Define what needs to be checked, including accuracy, relevance, learner fit, and instructional usefulness.",
            },
            {
              label: "Limit where AI is used",
              description:
                "Not every step benefits from AI. Use it where it adds speed or perspective, not where it replaces judgment.",
            },
            {
              label: "Keep scenarios grounded in real constraints",
              description:
                "Time pressure, incomplete information, and stakeholder expectations should shape how AI is used.",
            },
          ],
        },
        {
          id: "where-this-could-break",
          title: "Where This Could Break",
          description:
            "This design depends on learners engaging with the activity as intended.",
          items: [
            {
              label: "Learners skip evaluation",
              description:
                "The activity breaks if learners assume AI output is inherently correct and accept it too quickly.",
            },
            {
              label: "The scenario feels too simple",
              description:
                "If the scenario feels too clean, learners may not transfer the judgment to real work.",
            },
            {
              label: "Learners focus only on tool use",
              description:
                "The point is not just to use AI. The point is to decide when AI helps and when it should not be used.",
            },
            {
              label: "Prompts become copy-paste templates",
              description:
                "Prompts should be adapted to the design problem, not copied as fixed scripts.",
            },
            {
              label: "Learners overcorrect",
              description:
                "Some learners may leave thinking AI is unreliable and avoid using it entirely. The goal is balanced use, not avoidance.",
            },
          ],
        },
        {
          id: "reflection-question",
          title: "Reflection Question",
          description:
            "Where in your current workflow are you using AI to move faster without fully evaluating the output—and what would you change if you had to defend that decision to a stakeholder or SME?",
        },
      ],
    },
  },
  reflection: {
    title: "Reflection",
    prompt:
      "Where would AI most responsibly support your current learning design workflow, and what human review step would you keep in place to protect instructional quality?",
  },
};
