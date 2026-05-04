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
  },
  "performance-consulting": {
    slug: "performance-consulting",
    intro: {
      overview:
        "Performance consulting means you don't take course requests at face value. You investigate the business problem, define the performance gap, and identify the conditions influencing behavior. In this module, you'll ask targeted questions, align work to measurable outcomes, and decide when training is not the solution.",
      outcomes: [
        "Distinguish a course request from an underlying performance problem.",
        "Use stakeholder discovery questions to clarify business goals and constraints.",
        "Identify performance gaps, root causes, and non-training factors that affect results.",
        "Connect performance consulting work to HPI, needs analysis, Kirkpatrick, and ROI thinking.",
      ],
    },
    layers: {
      theory: {
        title: "Theory",
        badge: "Layer 1",
        intro:
          "This layer shows how to diagnose the real problem before you design a learning solution.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "In practice, performance consulting means you define the business result, identify the required performance, and decide whether learning, process changes, tools, incentives, or environment will drive that result. Your role shifts from building content to improving the conditions that drive performance.",
          },
          {
            id: "business-alignment",
            title: "Business Alignment",
            description:
              "Start with the operational goal. Then connect your work directly to the result it must support. Don't start with a course request. Clarify what needs to change, who must perform differently, what success looks like, and how it will be measured.",
          },
          {
            id: "stakeholder-discovery",
            title: "Stakeholder Discovery",
            description:
              "Use discovery questions to understand the business context behind the request. Ask about the current state, desired state, audience, constraints, consequences, prior attempts, and available evidence. Then ask what decisions stakeholders are willing to make if training won't solve the problem.",
          },
          {
            id: "needs-analysis",
            title: "Needs Analysis",
            description:
              "Use needs analysis to separate symptoms from root causes. A training request might point to a knowledge gap or to unclear expectations, broken workflows, weak manager support, poor tools, misaligned incentives, or missing feedback loops.",
          },
          {
            id: "performance-gaps",
            title: "Performance Gaps",
            description:
              "A performance gap is the difference between current behavior and the behavior required to achieve the desired result. Define the gap in observable terms so you avoid vague goals and design for real workplace behavior.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "HPI / performance improvement",
                description:
                  "Use Human Performance Improvement to examine factors beyond training, including environment, process, information, tools, motivation, and feedback. This approach expands your solution options beyond instruction.",
              },
              {
                label: "Kirkpatrick",
                description:
                  "Use Kirkpatrick to connect learning decisions to behavior and results. Performance consulting makes evaluation stronger because you define the outcome before choosing the solution.",
              },
              {
                label: "Needs analysis",
                description:
                  "Use needs analysis to keep discovery focused. Check whether the gap comes from knowledge, skill, motivation, process, tools, expectations, or other workplace conditions.",
              },
              {
                label: "ROI thinking",
                description:
                  "Use ROI thinking to evaluate value, cost, evidence, and business impact. Not every project needs a financial calculation, but every project needs a clear definition of what improvement is worth pursuing.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer gives learners practice reframing a stakeholder's course request into a performance consulting conversation.",
        sections: [
          {
            id: "activity",
            title: "Course Request Triage",
            description:
              "Review a stakeholder request for a new training course and identify what is known, what is assumed, and what still needs to be discovered. The goal is to avoid jumping directly from request to deliverable.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description:
              "Choose the discovery questions that would best clarify the business goal, target audience, current performance, desired behavior, operational constraints, and evidence of the gap. Then decide whether the likely solution is training, performance support, manager enablement, process improvement, or a blend.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description:
              "Compare the selected questions against performance consulting criteria. Strong responses focus on outcomes, behavior, root causes, and evidence rather than only content topics or preferred delivery formats.",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Build",
        badge: "Layer 3",
        intro:
          "Most training requests do not start with a clear performance problem. They start with a symptom: sales are down, people are not following the process, or someone believes a refresher is needed. By the time the request reaches L&D, the solution is often already assumed to be training. This module was built to interrupt that pattern. The goal is not to teach a perfect consulting process. The goal is to help designers slow down just enough to ask better questions, clarify what is actually happening, and determine whether training will improve performance at all.",
        sections: [
          {
            id: "what-this-module-is-solving",
            title: "What This Module Is Solving",
            description:
              "Most training requests do not start with a clear performance problem. They start with a symptom, and the solution is often already assumed to be training. This module is designed to interrupt that pattern. It helps designers slow down just enough to ask better questions, clarify what is actually happening, and determine whether training will improve performance at all. This reflects real work: incomplete information, unclear causes, and pressure to move quickly.",
          },
          {
            id: "key-design-decisions",
            title: "Key Design Decisions",
            description:
              "We made a deliberate choice to start with a flawed request instead of a clean problem statement.",
            items: [
              {
                label: "Start with an assumed solution",
                description:
                  "Learners are not given full context, complete data, or a well-defined gap. They have to work from assumptions and decide what to ask next.",
              },
              {
                label: "Make clarity something learners build",
                description:
                  "Stakeholder conversations rarely arrive fully formed. The module shows that clarity is created through questioning, not handed to the designer.",
              },
              {
                label: "Avoid a fixed intake template",
                description:
                  "The experience focuses on selecting and prioritizing questions instead of following a rigid checklist.",
              },
              {
                label: "Focus on observable performance",
                description:
                  "The scenario and feedback keep learners focused on behavior and results, not content topics or delivery formats.",
              },
              {
                label: "Force judgment before solution design",
                description:
                  "Learners have to decide what information matters before recommending training, coaching, process support, or another intervention.",
              },
            ],
          },
          {
            id: "proven-practice-vs-new-approach",
            title: "Proven Practice vs New Approach",
            items: [
              {
                label: "Proven practice: needs analysis",
                description:
                  "Needs analysis helps designers gather information before designing a solution, but it can feel too clean if the request already assumes training.",
              },
              {
                label: "Proven practice: performance consulting",
                description:
                  "Performance consulting asks designers to understand the business outcome, current performance, desired performance, and possible causes before building.",
              },
              {
                label: "New approach: messy intake practice",
                description:
                  "This module keeps the core idea—diagnose before designing—but removes the assumption that learners will have clean inputs.",
              },
              {
                label: "New approach: stakeholder response variation",
                description:
                  "AI can help simulate different stakeholder responses and feedback, but it does not replace the consulting process.",
              },
              {
                label: "New approach: assumptions become visible",
                description:
                  "The experience helps learners identify what is assumed, what is known, and what still needs to be confirmed.",
              },
            ],
          },
          {
            id: "tradeoffs-and-constraints",
            title: "Tradeoffs and Constraints",
            description:
              "This design prioritizes diagnosis over speed, which creates tension.",
            items: [
              {
                label: "Diagnosis vs stakeholder momentum",
                description:
                  "In real environments, slowing down a request can be seen as resistance. This module exposes that tension instead of pretending it does not exist.",
              },
              {
                label: "Partial evidence vs perfect analysis",
                description:
                  "Access to data may be limited, stakeholders may disagree, and root causes may never be fully confirmed.",
              },
              {
                label: "Depth vs usability",
                description:
                  "A fully realistic consulting simulation would be slower and harder to navigate. We chose a focused experience that highlights key decision points and compresses the timeline.",
              },
              {
                label: "Relationship management vs challenge",
                description:
                  "Designers need to ask better questions without making stakeholders feel blocked or corrected.",
              },
              {
                label: "Training request vs performance problem",
                description:
                  "The module helps learners separate the requested solution from the underlying performance issue, even when the organization wants quick delivery.",
              },
            ],
          },
          {
            id: "how-ai-supported-the-build",
            title: "How AI Supported the Build",
            description:
              "AI helped expand the range of stakeholder scenarios and feedback, but it did not determine the right answer.",
            items: [
              {
                label: "Stakeholder scenario variation",
                description:
                  "AI helped generate varied stakeholder requests, assumptions, and response patterns.",
              },
              {
                label: "Discovery question refinement",
                description:
                  "AI helped test different ways to phrase consulting questions so they sounded helpful rather than resistant.",
              },
              {
                label: "Feedback drafting",
                description:
                  "AI helped draft feedback that connects the learner's question choice to the quality of diagnosis.",
              },
              {
                label: "Interpretation support",
                description:
                  "AI helped surface different possible explanations for a vague request, but those possibilities still needed human review.",
              },
              {
                label: "Human judgment remains central",
                description:
                  "AI cannot verify whether a performance gap is real, whether evidence is reliable, or whether a stakeholder assumption is valid.",
              },
            ],
          },
          {
            id: "what-another-designer-can-reuse",
            title: "What Another Designer Can Reuse",
            description:
              "The most reusable element is the consulting pattern.",
            items: [
              {
                label: "Define the business outcome",
                description:
                  "Name the outcome in observable terms before accepting the training request.",
              },
              {
                label: "Compare current and required performance",
                description:
                  "Clarify what people are doing now and what they need to do differently.",
              },
              {
                label: "Identify evidence of the gap",
                description:
                  "Ask what data, observation, or stakeholder input supports the problem.",
              },
              {
                label: "Test assumptions before accepting the request",
                description:
                  "Separate what is known from what is assumed.",
              },
              {
                label: "Recommend the smallest useful intervention",
                description:
                  "Training may be part of the answer, but the best response may be coaching, workflow support, communication, job aids, or process change.",
              },
              {
                label: "Reuse the scenario structure",
                description:
                  "Start with a request that assumes a solution, limit the available information, and require the learner to ask better questions before moving forward.",
              },
            ],
          },
          {
            id: "where-this-could-break",
            title: "Where This Could Break",
            description:
              "This approach depends on the designer's ability to navigate stakeholder conversations.",
            items: [
              {
                label: "Questions sound like pushback",
                description:
                  "If questions are framed poorly, they can reduce trust instead of building it.",
              },
              {
                label: "No access to evidence",
                description:
                  "In some environments, decisions are made without data, and designers may be expected to proceed anyway.",
              },
              {
                label: "Organization rewards output over impact",
                description:
                  "Some teams value rapid delivery more than careful diagnosis. The designer has to balance better questioning with practical constraints.",
              },
              {
                label: "Stakeholders disagree on the problem",
                description:
                  "Different leaders may describe the same issue differently, which makes diagnosis harder.",
              },
              {
                label: "The designer over-consults",
                description:
                  "Too much analysis can slow the work down and make L&D seem difficult to partner with.",
              },
            ],
          },
          {
            id: "reflection-question",
            title: "Reflection Question",
            description:
              "Think of a recent training request you received. What assumption was built into that request? What would you need to know to confirm whether the problem was performance, knowledge, or something else—and how would you ask for that information without slowing the work down so much that you lose stakeholder support?",
          },
        ],
      },
    },
    reflection: {
      title: "Reflection",
      prompt:
        "Think of a recent or realistic course request. What performance question would you ask first, and how would the answer change the solution you recommend?",
    },
  },
  "learning-analytics": {
    slug: "learning-analytics",
    intro: {
      overview:
        "Learning analytics helps instructional designers replace assumptions with evidence. This module shows how to use data to understand your learners' behavior, evaluate design decisions, and make improvements tied to performance and business outcomes.",
      outcomes: [
        "Explain how learning analytics supports evidence-based design decisions.",
        "Distinguish useful learning measures from vanity metrics.",
        "Interpret dashboard signals in relation to learner outcomes and business goals.",
        "Use analytics evidence to recommend targeted design iterations.",
      ],
    },
    layers: {
      theory: {
        title: "Theory",
        badge: "Layer 1",
        intro:
          "This layer shows how to use evidence to evaluate impact and improve the learning experiences you design over time.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Learning analytics involves collecting, interpreting, and applying data about your learners' activity, performance, behavior, and outcomes. For instructional designers, the goal is to use evidence to improve decisions about content, practice, support, assessment, and performance outcomes.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "Modern L&D teams need to show whether learning experiences are working and where they should improve. Analytics helps designers identify friction, validate assumptions, prioritize revisions, and connect learning activity to measurable performance instead of relying only on completion rates or satisfaction scores.",
          },
          {
            id: "measurement-strategy",
            title: "Measurement Strategy",
            description:
              "A measurement strategy defines what evidence you need before you build the experience. Strong strategies connect business goals, performance expectations, learning objectives, practice, assessment, and post-launch data so you can make better design decisions.",
          },
          {
            id: "dashboard-interpretation",
            title: "Dashboard Interpretation",
            description:
              "Dashboards only matter when you know what decisions they support. Completion, time spent, quiz scores, drop-off points, practice attempts, confidence ratings, and performance metrics each show only part of what is happening. Your job is to compare multiple signals before deciding whether the design is working.",
          },
          {
            id: "evidence-based-iteration",
            title: "Evidence-Based Iteration",
            description:
              "Analytics is valuable only when it leads to better design decisions. The data may show that instructions need clarification, practice is too easy or too difficult, feedback lacks specificity, your learners need job support, or the assessment does not match the target performance.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "Kirkpatrick",
                description:
                  "Use Kirkpatrick to sort evidence across reaction, learning, behavior, and results. It reminds designers to look beyond whether learners liked the experience and toward whether behavior and outcomes changed.",
              },
              {
                label: "Evaluation strategy",
                description:
                  "An evaluation strategy defines what evidence you will collect, when you will collect it, and how you will use it to make decisions. It keeps analytics focused on decisions instead of producing disconnected reports.",
              },
              {
                label: "Evidence-based iteration",
                description:
                  "Use data to continuously improve your learning design. Data shows where your design supports your learners, where it creates friction, and which changes are most likely to improve performance.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer gives you practice reading analytics evidence and turning it into a focused design recommendation.",
        sections: [
          {
            id: "activity",
            title: "Dashboard Signal Review",
            description:
              "Review a simple learning dashboard that includes completion, assessment performance, confidence, practice attempts, and drop-off patterns. Identify which signals are meaningful, which require more context, and which should not drive a design decision on their own.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description:
              "Choose the most defensible design action based on the evidence. The decision should connect the data pattern to a learner need, instructional objective, or business outcome rather than defaulting to adding more content.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description:
              "Compare the recommendation against evidence-based design criteria. Strong recommendations explain what the data suggests, what remains uncertain, what design change is proposed, and how success would be measured after the change.",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Build",
        badge: "Layer 3",
        intro:
          "Most teams already have data. That's not the problem. The problem is that the data doesn't lead to better decisions. Designers see completion rates, quiz scores, and satisfaction feedback, but still don't know what to fix or why performance isn't improving. This module was built to address a common failure point: collecting more data than you can interpret, and reacting to signals that don't actually connect to behavior or outcomes. The goal is not to teach analytics. The goal is to help designers decide what evidence actually matters, what can be trusted, and what should change because of it.",
        sections: [
          {
            id: "what-this-module-is-solving",
            title: "What This Module Is Solving",
            description:
              "Most teams already have data. The problem is that the data does not always lead to better decisions. This module focuses on the gap between reporting and action. Designers may see completion rates, quiz scores, and satisfaction feedback, but still not know what to fix or why performance is not improving. The goal is to help designers use evidence to make better design decisions, not collect more metrics.",
          },
          {
            id: "key-design-decisions",
            title: "Key Design Decisions",
            items: [
              {
                label: "We started with a decision, not a dashboard",
                description:
                  "The module forces a design recommendation before explaining whether it is correct. This reveals how people interpret evidence under pressure.",
              },
              {
                label: "We limited the number of signals on purpose",
                description:
                  "Instead of showing a full dataset, we constrained the scenario to a small set of metrics: completion, performance, confidence, attempts, and drop-off. This keeps the focus on judgment, not exploration.",
              },
              {
                label: "We designed for conflicting signals",
                description:
                  "High completion, positive feedback, and no performance improvement are intentional. The mix prevents easy conclusions and forces deeper interpretation.",
              },
              {
                label: "We did not define metrics upfront",
                description:
                  "Explaining metrics first leads to passive reading. Instead, learners encounter the data in context and have to decide what it means.",
              },
              {
                label: "We prioritized behavior over activity",
                description:
                  "The scenario pushes beyond \"did they finish?\" toward \"did anything change on the job?\"",
              },
            ],
          },
          {
            id: "proven-practice-vs-new-approach",
            title: "Proven Practice vs New Approach",
            items: [
              {
                label: "What most teams do",
                description:
                  "Track completion, scores, and satisfaction, review dashboards after launch, and add more content when results are unclear.",
              },
              {
                label: "Start with the decision",
                description:
                  "Before reviewing data, define what decision the evidence needs to support.",
              },
              {
                label: "Use fewer signals more deliberately",
                description:
                  "The point is not to replace common metrics. It is to avoid treating every metric as equally useful.",
              },
              {
                label: "Ignore metrics that do not connect to behavior",
                description:
                  "A metric only matters if it helps explain what learners are doing, not doing, or struggling to transfer.",
              },
              {
                label: "Treat data as incomplete",
                description:
                  "Data can inform a decision, but it rarely tells the whole story.",
              },
            ],
          },
          {
            id: "tradeoffs-and-constraints",
            title: "Tradeoffs and Constraints",
            items: [
              {
                label: "Less data vs more clarity",
                description:
                  "We reduced the number of metrics to make interpretation possible. In real environments, you may have more data, but not more clarity.",
              },
              {
                label: "Speed vs precision",
                description:
                  "Designers rarely have time for deep analysis. This module reflects that reality by asking for a defensible decision with limited evidence.",
              },
              {
                label: "Signal vs noise",
                description:
                  "Some metrics look useful but do not support a decision on their own. Completion and satisfaction are included to show how easy it is to overvalue them.",
              },
              {
                label: "Incomplete data",
                description:
                  "You often will not have direct performance data or clean attribution. This module keeps that constraint visible instead of assuming perfect measurement.",
              },
              {
                label: "Stakeholder pressure",
                description:
                  "High completion and positive feedback often get interpreted as success. This scenario challenges that assumption without ignoring why it happens.",
              },
            ],
          },
          {
            id: "how-ai-supported-the-build",
            title: "How AI Supported the Build",
            description:
              "AI supported the build, but it did not decide what the right answer was.",
            items: [
              {
                label: "Controlled data patterns",
                description:
                  "AI helped generate realistic but controlled data patterns that could create useful interpretation challenges.",
              },
              {
                label: "Scenario variation",
                description:
                  "AI helped create variations of common analytics situations without turning the activity into a dashboard exercise.",
              },
              {
                label: "Evidence-to-decision checks",
                description:
                  "AI helped evaluate whether a recommendation connected evidence to a design decision.",
              },
              {
                label: "Guardrails for feedback",
                description:
                  "The feedback looks for whether the learner identified meaningful signals, avoided overreacting to weak indicators, and tied the recommendation back to performance or behavior.",
              },
              {
                label: "Human judgment remains central",
                description:
                  "AI supports consistency and scale. It does not replace the designer's responsibility to interpret evidence and make a defensible recommendation.",
              },
            ],
          },
          {
            id: "what-another-designer-can-reuse",
            title: "What Another Designer Can Reuse",
            items: [
              {
                label: "Start with the decision you need to make",
                description:
                  "Before reviewing any data, ask: What am I trying to decide?",
              },
              {
                label: "Limit the signals",
                description:
                  "Choose a small number of metrics that could actually influence that decision.",
              },
              {
                label: "Compare signals, don't isolate them",
                description:
                  "Look at patterns across metrics instead of reacting to one number.",
              },
              {
                label: "Connect evidence to behavior",
                description:
                  "If a metric does not help explain what learners are doing differently, it may not be useful.",
              },
              {
                label: "State what you don't know",
                description:
                  "A strong recommendation includes uncertainty, not just conclusions.",
              },
            ],
          },
          {
            id: "where-this-could-break",
            title: "Where This Could Break",
            description:
              "This is not a replacement for a full measurement strategy. It is a way to make better decisions with the data you actually have.",
            items: [
              {
                label: "Weak connection to performance",
                description:
                  "This approach depends on having at least some connection between learning activity and performance outcomes.",
              },
              {
                label: "Single-metric thinking",
                description:
                  "It breaks when teams expect one metric to define success.",
              },
              {
                label: "Data too limited to support inference",
                description:
                  "Sometimes the available evidence is too thin to justify a design change.",
              },
              {
                label: "Defaulting to more content",
                description:
                  "Designers may add content when the better move is diagnosing the real barrier.",
              },
              {
                label: "Treating AI feedback as the answer",
                description:
                  "AI feedback should be treated as critique, not decision-making authority.",
              },
            ],
          },
          {
            id: "reflection-question",
            title: "Reflection Question",
            description:
              "Think about a recent learning experience you worked on. What metric did you rely on most, and did it actually help you decide what to change? If not, what evidence would have been more useful?",
          },
        ],
      },
    },
    reflection: {
      title: "Reflection",
      prompt:
        "What is one learning design decision you would want evidence for before revising a course, and what data would help you make that decision responsibly?",
    },
  },
  "simulation-design": {
    slug: "simulation-design",
    intro: {
      overview:
        "Scenario, simulation, and conversation design helps instructional designers create realistic practice environments where your learners can make decisions, receive feedback, and experience consequences before applying skills in higher-stakes settings. This module shows you how to design realistic practice where decisions matter, constraints are visible, and feedback helps people improve before the stakes are real.",
      outcomes: [
        "Explain how scenario-based learning, simulations, and conversation design support skill transfer.",
        "Shape decision points that reflect realistic constraints, consequences, and learner judgment.",
        "Evaluate fidelity, branching complexity, and feedback choices in a practice experience.",
        "Decide when AI-driven conversation adds value, and when simpler scenario design is enough.",
      ],
    },
    layers: {
      theory: {
        title: "Theory",
        badge: "Layer 1",
        intro:
          "This layer shows how realistic practice helps your learners build judgment, not just consume information about what they should do.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Scenario, simulation, and conversation design is how you build practice around real decisions where your learners have to choose what to do, see what happens, and adjust. The designer defines the context, decision points, constraints, feedback, and consequences so your learners can practice how they will think and act in real work.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "Most workplace skills aren't about knowing; they require making the right call in the moment, often with incomplete information. Realistic practice lets your learners make decisions, see the consequences, and adjust before those decisions affect customers, teams, or revenue.",
          },
          {
            id: "scenario-based-learning",
            title: "Scenario-Based Learning",
            description:
              "Scenario-based learning places your learners in a meaningful role and asks them to make decisions in context. Strong scenarios include a clear situation, relevant pressure, plausible options, and consequences that reveal why one response is more effective than another.",
          },
          {
            id: "branching-logic",
            title: "Branching Logic",
            description:
              "Branching logic lets choices influence what happens next. Don't build endless branches. Focus on the few decisions that actually change the outcome, where a choice exposes a mistake, creates a consequence, or forces the learner to recover.",
          },
          {
            id: "conversation-design",
            title: "Conversation Design",
            description:
              "Conversation design focuses on how your learners practice dialogue, questioning, coaching, negotiation, empathy, or de-escalation. AI-driven conversations can react to what the learner says, but they only work if you define what a strong response looks like and how feedback should be applied.",
          },
          {
            id: "fidelity-tradeoffs",
            title: "Fidelity Tradeoffs",
            description:
              "Choose fidelity based on what the learner needs to practice. Use low-fidelity practice to isolate a decision. Use higher fidelity only when context and pressure actually affect the outcome.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "Experiential learning",
                description:
                  "Scenarios give your learners something to act on first, so reflection and application come from experience, not explanation.",
              },
              {
                label: "Deliberate practice",
                description:
                  "Simulation design supports deliberate practice when you focus on a specific decision, define what good looks like, and give feedback the learner can use to improve.",
              },
              {
                label: "Bloom's application/evaluation",
                description:
                  "Use scenarios when your learners need to apply a concept, compare options, justify a choice, or adapt after seeing a consequence.",
              },
              {
                label: "Scenario-based learning",
                description:
                  "Build the scenario around the moment where the knowledge matters: the role, pressure, tradeoffs, and decision your learners need to handle.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer gives your learners practice shaping a realistic scenario or AI-driven conversation around a workplace decision that matters.",
        sections: [
          {
            id: "activity",
            title: "Practice Environment Design",
            description:
              "Start with a real workplace decision. Then define the role, situation, pressure, available information, and what happens when the learner responds.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description:
              "Decide where the experience needs branching, where a linear scenario is enough, and where an AI-driven conversation would add value. Only add branching or AI conversation when it changes how the learner practices the decision. If it doesn't, keep it simple.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description:
              "Check your design: Is this a real decision? Would someone actually consider these options? Does the feedback explain what happens and why it matters?",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Build",
        badge: "Layer 3",
        intro:
          "We focused this module on one problem: new sales reps don't struggle because they lack knowledge; they struggle because they don't know what to say next. You see it in the first few minutes of a customer conversation. They hesitate, over-explain, or go in the wrong direction. So instead of trying to cover the full sales process, we kept this tight. This module is about practicing that moment where a rep has to make a call and move the conversation forward.",
        sections: [
          {
            id: "key-design-decisions",
            title: "Key Design Decisions",
            description:
              "A few decisions shaped everything here. We did consider building a full end-to-end simulation, but it added complexity without improving the core skill, so we cut it.",
            items: [
              {
                label: "Narrow the scope",
                description:
                  "We stayed in the early conversation instead of building a full simulation. That's where most breakdowns happen.",
              },
              {
                label: "Build around one decision at a time",
                description:
                  "Not a full conversation tree. Just moments where the learner has to decide what to do next.",
              },
              {
                label: "Keep branching limited",
                description:
                  "We only added branches where a choice actually changes what happens. Anything else just adds noise.",
              },
              {
                label: "Keep it realistic, not dramatic",
                description:
                  "No over-the-top scenarios. Just situations that feel like something a rep would actually run into.",
              },
            ],
          },
          {
            id: "proven-practice-vs-new-approach",
            title: "Proven Practice vs New Approach",
            description:
              "There's nothing new about scenario-based learning. This is built on practices that already work: scenarios, decision points, and feedback tied to consequences. The difference is we cut everything that didn't force a real decision. Instead of trying to build something immersive, we focused on making sure the learner has to make a decision and see what happens next. AI is optional here. You don't need it to do this well. In a lot of cases, solid scenario design gets you most of the way there.",
          },
          {
            id: "tradeoffs-and-constraints",
            title: "Tradeoffs and Constraints",
            description:
              "This didn't come together in a clean sequence. Most of the work was going back and fixing weak decisions after we saw how the scenario actually played out. The first version of this didn't work. The decisions were too obvious, so there was nothing to actually think through.",
            items: [
              {
                label: "No full conversation simulation",
                description:
                  "Too much complexity, not enough added value.",
              },
              {
                label: "Limited number of decisions",
                description:
                  "More choices can feel realistic, but they make feedback harder to follow. If we added more branches, the feedback would get messy fast and the build time would spike.",
              },
              {
                label: "Controlled fidelity",
                description:
                  "Enough detail to feel real, but not so much that it slows everything down.",
              },
              {
                label: "Buildable structure",
                description:
                  "Most teams don't have time to create large simulations, so we kept the structure simple enough to reuse.",
              },
            ],
          },
          {
            id: "how-ai-supported-the-build",
            title: "How AI Supported the Build",
            description:
              "AI helped in a few specific ways. But the first outputs were generic. Most of the real work was rewriting choices and consequences so they sounded like something a real customer would actually say, and making sure the feedback explained what changed. AI didn't decide what a good response looks like. That still comes from the designer and the SME.",
            items: [
              {
                label: "Scenario drafts",
                description:
                  "AI helped draft early versions of scenarios.",
              },
              {
                label: "Response options",
                description:
                  "AI helped generate different response options.",
              },
              {
                label: "Realism checks",
                description:
                  "AI helped stress-test whether choices felt realistic.",
              },
            ],
          },
          {
            id: "what-another-designer-can-reuse",
            title: "What Another Designer Can Reuse",
            description:
              "If you're building something like this, you don't need to overcomplicate it. You can do a lot with just a few moves.",
            items: [
              {
                label: "Start with one decision that actually matters.",
              },
              {
                label: "Build the scenario around that moment.",
              },
              {
                label: "Only branch when the outcome changes.",
              },
              {
                label:
                  "Write feedback that explains what happens, not just what's correct.",
              },
            ],
          },
          {
            id: "where-this-could-break",
            title: "Where This Could Break",
            description:
              "This approach doesn't work everywhere. This starts to fall apart if the decision isn't real, the scenario doesn't feel believable, or the learner already knows how to handle the situation. It also breaks if you overbuild it. More branching, more AI, and more realism can sound better, but they can make the experience harder to follow and harder to maintain.",
          },
          {
            id: "reflection",
            title: "Reflection",
            description:
              "What's one decision you keep explaining in your training—but never actually let people practice? And what's stopping you from building that experience?",
          },
        ],
      },
    },
    reflection: {
      title: "Reflection",
      prompt:
        "What is one workplace conversation or decision that would benefit from safe practice, and what feedback would help learners improve before they face it in real life?",
    },
  },
  "adaptive-learning": {
    slug: "adaptive-learning",
    intro: {
      overview:
        "Adaptive and personalized learning lets you design experiences that respond to your learners' readiness, progress, and context. This module focuses on the decisions behind adaptation: what to change, why it matters, what evidence supports that decision, and whether the added complexity is actually worth it.",
      outcomes: [
        "Explain how adaptive learning and personalization differ from static course design.",
        "Identify learner variables that can inform pathways, support, recommendations, or practice.",
        "Evaluate when adaptation adds instructional value and when it creates unnecessary complexity.",
        "Connect adaptive design choices to mastery learning, differentiated instruction, and learner variability.",
      ],
    },
    layers: {
      theory: {
        title: "Theory",
        badge: "Layer 1",
        intro:
          "This layer treats adaptive learning as a design problem: define rules, evidence, pathways, and supports that help your learners progress without breaking the flow of the experience.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Adaptive and personalized learning means designing experiences that adjust based on your learners' performance, progress, and context. Don't try to make every experience unique. Provide the right support, challenge, or pathway when your evidence shows your learners need it.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "Your learners enter with different levels of prior knowledge, confidence, role context, goals, and performance gaps. Adaptive design reduces friction by directing your learners to the right practice, remediation, or support while keeping everyone focused on the same outcomes.",
          },
          {
            id: "learner-variability",
            title: "Learner Variability",
            description:
              "Learner variability includes differences in prior knowledge, skill level, role context, language, accessibility needs, motivation, confidence, and available time. Start by identifying which differences actually affect the learning goal and ignore the ones that don't need separate pathways.",
          },
          {
            id: "diagnostics-and-learner-state",
            title: "Diagnostics and Learner State",
            description:
              "You need clear evidence of where your learners are right now. That evidence might come from diagnostic questions, self-assessment, role selection, confidence ratings, quiz performance, practice behavior, or prior completion data. Decide which signals you trust enough to shape the experience.",
          },
          {
            id: "pathways-and-recommendations",
            title: "Pathways and Recommendations",
            description:
              "Pathways sequence learning based on gaps or readiness, while recommendations point your learners to their next step. Define clear rules: what triggers the change, what changes for your learners, and how you prevent over-personalization that hides essential content or reinforces weak assumptions.",
          },
          {
            id: "adaptation-tradeoffs",
            title: "Adaptation Tradeoffs",
            description:
              "Adaptation adds real complexity: more design work, more content, more data, and more maintenance. Adaptation works best when your learners differ in meaningful ways, when the stakes justify extra support, and when you have enough evidence to make a better decision than a strong common path.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "Mastery learning",
                description:
                  "Mastery learning emphasizes reaching a defined level of competence before moving on. Use adaptive pathways to support mastery by directing your learners to remediation, additional practice, or enrichment based on their progress.",
              },
              {
                label: "Differentiated instruction",
                description:
                  "Differentiated instruction adjusts content, practice, or support based on what your learners actually need. Adaptive design turns that idea into clear rules and pathways you can actually build.",
              },
              {
                label: "Learner variability",
                description:
                  "Learner variability reminds designers that one-size-fits-all experiences often create unnecessary barriers. The design challenge is deciding which differences matter enough to inform the learning path.",
              },
              {
                label: "Learner-centered design",
                description:
                  "Focus adaptation on your learners' progress, not on adding technical novelty. Personalization should make the experience clearer, more relevant, or better supported.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer gives learners practice designing a simple adaptive pathway from a real learner need instead of adding personalization as a decorative feature.",
        sections: [
          {
            id: "activity",
            title: "Adaptive Pathway Design",
            description:
              "Review a learning goal and a set of learner profiles with different readiness levels, roles, confidence, or performance gaps. Identify which learner differences should change the experience and which should not.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description:
              "Choose the adaptation point, the diagnostic signal, and the pathway response. Decide whether learners should receive remediation, extra practice, a role-specific example, a recommendation, or a standard path with optional support.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description:
              "Evaluate the adaptive design against practical criteria: the trigger is meaningful, the evidence is reliable, the pathway supports the learning goal, the learner experience remains clear, and the added complexity is justified.",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Build",
        badge: "Layer 3",
        intro:
          "Most teams ask for \"adaptive learning\" without being able to define what should actually change, or why. The result is usually one of two extremes: a single static path that ignores real learner differences, or an overbuilt experience with unnecessary branching, weak logic, and no clear evidence behind it. This module was designed to correct that problem. Instead of teaching adaptive learning as a feature or system, it focuses on the core design work: deciding which learner differences matter, what evidence you trust, and when a change in the experience is actually justified. The goal is not to make every experience personalized. The goal is to make better decisions about when adaptation improves learning, and when it doesn't.",
        sections: [
          {
            id: "what-this-module-is-solving",
            title: "What This Module Is Solving",
            description:
              "This module was built to correct a common mistake: teams jump to tools and pathways before defining what should actually change. Instead of building a full adaptive system, we focused on the decision work: what triggers a change, what changes, and why it is justified.",
          },
          {
            id: "key-design-decisions",
            title: "Key Design Decisions",
            items: [
              {
                label: "Focus on decisions, not systems",
                description:
                  "We did not simulate a full adaptive platform. Most designers don't struggle with tools; they struggle with defining rules. This module centers on decision points: what triggers a change, what changes, and why.",
              },
              {
                label: "Start with learner variability, not pathways",
                description:
                  "Designers often jump straight to branching. We intentionally start with identifying meaningful learner differences so adaptation is grounded in real needs, not assumptions.",
              },
              {
                label: "Treat diagnostics as design choices",
                description:
                  "We frame evidence, such as quiz performance, self-assessment, or role selection, as something you choose and justify, not something the system magically provides.",
              },
              {
                label: "Keep a shared core experience",
                description:
                  "Not everything changes. Some content should remain consistent to protect clarity, alignment, and shared outcomes.",
              },
              {
                label: "Build in evaluation criteria",
                description:
                  "Every adaptive decision is tested against practical questions: Is the trigger meaningful? Is the evidence reliable? Does this actually improve the learner's path?",
              },
            ],
          },
          {
            id: "proven-practice-vs-new-approach",
            title: "Proven Practice vs New Approach",
            items: [
              {
                label: "Mastery learning -> Used to support progress",
                description:
                  "Instead of just referencing mastery, we show how learners might receive remediation or additional practice based on evidence of progress.",
              },
              {
                label: "Differentiated instruction -> Turned into rules",
                description:
                  "Differentiation often stays conceptual. Here, it becomes concrete: define what changes, when, and for whom.",
              },
              {
                label: "Learner variability -> Prioritized, not expanded",
                description:
                  "We narrow the focus to differences that directly affect the learning goal. Not every variable needs a pathway.",
              },
              {
                label: "New approach: constraint-driven adaptation",
                description:
                  "The shift is not toward more personalization. It is toward more disciplined decisions. Adaptation is treated as something you justify, not something you assume.",
              },
            ],
          },
          {
            id: "tradeoffs-and-constraints",
            title: "Tradeoffs and Constraints",
            items: [
              {
                label: "We did not build a fully adaptive system",
                description:
                  "No dynamic content rendering, no AI-driven personalization engine, no complex branching trees. That level of build introduces significant overhead and often fails without strong underlying logic.",
              },
              {
                label: "We simplified diagnostic signals",
                description:
                  "Real environments rarely have perfect data. We focused on signals designers can realistically use: performance, self-assessment, and role context.",
              },
              {
                label: "We constrained pathway complexity",
                description:
                  "More paths are not better. Each added pathway increases design, content, and maintenance cost. This module forces designers to evaluate whether the added complexity is worth it.",
              },
              {
                label: "We prioritized clarity over customization",
                description:
                  "Too much personalization can fragment the experience or hide essential content. We intentionally keep a strong common path with targeted adaptation.",
              },
            ],
          },
          {
            id: "how-ai-supported-the-build",
            title: "How AI Supported the Build",
            description:
              "AI was useful in specific parts of the process, but it did not drive the design. It helped generate variations quickly, but many of the initial outputs were too generic or unrealistic. Most of the work was refining those outputs into decisions that actually reflected meaningful learner differences.",
            items: [
              {
                label: "Helpful for generating variations",
                description:
                  "AI supported rapid generation of learner profiles, example pathways, and alternative responses. This made it easier to explore options quickly.",
              },
              {
                label: "Useful for structuring decision logic",
                description:
                  "Prompts helped organize thinking into patterns: learner variable -> evidence -> trigger -> response.",
              },
              {
                label: "Not reliable for determining what matters",
                description:
                  "AI cannot decide which learner differences are instructionally meaningful. That required human judgment tied to the learning goal.",
              },
              {
                label: "Not used to automate adaptation decisions",
                description:
                  "The module avoids suggesting that AI should control the learning path. It reinforces that designers define the rules first.",
              },
            ],
          },
          {
            id: "what-another-designer-can-reuse",
            title: "What Another Designer Can Reuse",
            items: [
              {
                label: "A simple adaptive design pattern",
                description:
                  "Define the goal -> identify meaningful learner differences -> select evidence -> define trigger -> specify response -> evaluate the tradeoff.",
              },
              {
                label: "A constraint mindset",
                description:
                  "Treat adaptation as something you earn through evidence, not something you apply everywhere.",
              },
              {
                label: "Practical diagnostic signals",
                description:
                  "Use inputs you can actually collect: performance, confidence, and role.",
              },
              {
                label: "Decision-based practice",
                description:
                  "Instead of building full adaptive systems, create scenarios where designers practice making adaptation decisions.",
              },
            ],
          },
          {
            id: "where-this-could-break",
            title: "Where This Could Break",
            items: [
              {
                label: "Weak or unreliable data",
                description:
                  "If your diagnostic signals don't reflect real learner needs, your pathways will misdirect learners.",
              },
              {
                label: "Overestimating learner differences",
                description:
                  "Not all variability matters. Designing for the wrong differences adds complexity without improving outcomes.",
              },
              {
                label: "Stakeholder pressure for full personalization",
                description:
                  "This breaks when stakeholders push for personalization without defining what should actually change. Without clear rules, the design becomes complex without improving outcomes.",
              },
              {
                label: "Maintenance and scalability",
                description:
                  "Every adaptive pathway adds ongoing cost. If the system can't be maintained, it won't hold up over time.",
              },
            ],
          },
          {
            id: "reflection-question",
            title: "Reflection Question",
            description:
              "Where in your current work would a change in the learning path actually improve outcomes—and what evidence would you require before justifying that change?",
          },
        ],
      },
    },
    reflection: {
      title: "Reflection",
      prompt:
        "Where would adaptation genuinely improve a learning experience you know, and what learner evidence would you trust before changing the path?",
    },
  },
  "content-systems": {
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
                label: "New approach: Identify repeated content before building",
                description:
                  "This module pushes designers to find repeated explanations, prompts, examples, and feedback before creating more content.",
              },
              {
                label: "New approach: Define reusable chunks with clear boundaries",
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
            description:
              "This approach comes with real tradeoffs.",
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
            description:
              "AI was used as a support tool, not a decision-maker.",
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
            description:
              "You don't need a full system to apply this approach.",
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
  },
  "human-centered-change": {
    slug: "human-centered-change",
    intro: {
      overview:
        "Human-centered change, ethics, and learner trust focus on how you design learning experiences people are willing to use, question, and rely on. In this module, you make design decisions about transparency, bias, psychological safety, and AI support so your learners understand what is happening, why it matters, and how you protect their trust.",
      outcomes: [
        "Explain why adoption depends on learner trust, not only system capability.",
        "Identify ethical design decisions in AI-enabled and data-informed learning environments.",
        "Evaluate transparency, bias, privacy, and psychological safety tradeoffs in a learning experience.",
        "Connect change management principles to responsible implementation of modern learning systems.",
      ],
    },
    layers: {
      theory: {
        title: "Theory",
        badge: "Layer 1",
        intro:
          "This layer shows how to design for trust: your learners are more likely to adopt a learning experience when it is transparent, fair, safe, and clearly connected to their goals.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Design for human-centered change, ethics, and trust by creating learning experiences people can understand, question, use safely, and choose to adopt. As an instructional designer, you need to consider how AI, analytics, automation, and organizational change affect people before you launch the experience.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "A technically capable learning system will still fail if your learners do not trust it. People adopt a learning experience when they believe it is useful, fair, respectful, safe, and worth changing their behavior for. Design choices build trust. Messaging alone does not.",
          },
          {
            id: "change-management",
            title: "Change Management in Learning Systems",
            description:
              "Learning experiences often ask people to change how they work, decide, practice, or use tools. Human-centered change design clarifies what is changing, who is affected, what support they need, and what resistance to expect. It also shows how the learning experience supports real adoption, not just awareness.",
          },
          {
            id: "learner-trust-ai",
            title: "Learner Trust in AI-Enabled Environments",
            description:
              "When you use AI in a learning experience, you need to show clear boundaries. Your learners should know when AI is used, what it can and cannot do, how it generates recommendations or feedback, when a human reviews the output, and what choices they have if something feels wrong or unclear.",
          },
          {
            id: "ethical-design-decisions",
            title: "Ethical Design Decisions",
            description:
              "When you design for ethics, you decide what data to collect, how to interpret performance, how to check for bias, how to phrase feedback, how much to automate, and how to avoid penalizing your learners for context the system does not understand.",
          },
          {
            id: "psychological-safety",
            title: "Psychological Safety",
            description:
              "Design for psychological safety so your learners can practice, make mistakes, ask questions, and receive feedback without unnecessary shame or surveillance. Designers create safety through clear expectations, respectful feedback, opt-out paths, visible support, and careful handling of sensitive performance data.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "Change management",
                description:
                  "Use change management to plan communication, readiness, stakeholder support, reinforcement, and the gap between a new capability and actual behavior change.",
              },
              {
                label: "Ethical instructional design",
                description:
                  "When you design instruction, you need to decide who benefits, who could be harmed, what assumptions you are making, and how you protect learner agency, dignity, privacy, and fairness.",
              },
              {
                label: "Psychological safety",
                description:
                  "Design for psychological safety when your learners need to try, fail, reflect, and improve, especially when they are practicing judgment, using AI feedback, or exposing performance gaps.",
              },
              {
                label: "Responsible AI use",
                description:
                  "Use AI responsibly: be transparent, keep humans involved where judgment matters, check for bias, limit data collection, and stay accountable for outcomes. The designer must decide where AI support is helpful and where human judgment must remain central.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer gives you practice reviewing an AI-enabled learning experience for trust, ethics, and adoption risks before release.",
        sections: [
          {
            id: "activity",
            title: "Trust and Ethics Review",
            description:
              "Review a proposed AI-supported learning feature and identify where your learners may need more transparency, choice, context, or human support. Focus on what the learner sees, what the system infers, and what happens when the learner disagrees with the feedback or recommendation.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description:
              "Decide which design safeguards are necessary: a disclosure, a human review step, a bias check, a data minimization choice, a manager communication plan, an opt-out path, or revised feedback language. The goal is to improve adoption by making the system more trustworthy, not just more powerful.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description:
              "Check the design against trust criteria: your learners understand how the system works, sensitive data is handled carefully, feedback supports psychological safety, AI limits are visible, and communication supports the change.",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Build",
        badge: "Layer 3",
        intro:
          "Most learning about ethics, trust, or change sounds right but does not change behavior. Designers explain principles, but they do not always help learners understand what the system is actually doing, what to trust, or when to question it. This module was built around a practical problem: AI-supported learning experiences fail when learners are confused, skeptical, or overconfident, and the design does not address that directly. The goal is not to convince learners to trust the system. The goal is to design an experience that earns trust, or makes its limits clear enough that learners can decide how to use it.",
        sections: [
          {
            id: "what-this-module-is-solving",
            title: "What This Module Is Solving",
            description:
              "AI-supported learning experiences fail when learners are confused, skeptical, or overconfident, and the design does not address that directly. This module focuses on making system behavior visible instead of implied, reducing avoidable confusion and misuse, designing for real learner reactions instead of ideal adoption, and clarifying where human judgment still matters. The goal is not to convince learners to trust the system. The goal is to design an experience that earns trust, or makes its limits clear enough that learners can decide how to use it.",
          },
          {
            id: "key-design-decisions",
            title: "Key Design Decisions",
            items: [
              {
                label: "We moved quickly from concept to decision-making",
                description:
                  "Instead of teaching ethics or change frameworks, we pushed designers into evaluating a real scenario. Trust breaks in implementation, not theory.",
              },
              {
                label: "We focused on what the learner sees",
                description:
                  "Designers often think about models, data, and outputs. Learners experience messaging, feedback, and consequences. We kept the lens on the learner-facing experience.",
              },
              {
                label: "We made boundaries explicit",
                description:
                  "The module emphasizes when AI is used, what it can and cannot do, when a human is involved, and what options learners have if they disagree.",
              },
              {
                label: "We treated skepticism as expected",
                description:
                  "Some learners will question the system. Others will trust it too quickly. The design accounts for both.",
              },
              {
                label: "We avoided full governance or compliance models",
                description:
                  "Those matter, but they do not help a designer make day-to-day decisions about feedback, transparency, or support. We kept the focus on choices that affect behavior directly.",
              },
            ],
          },
          {
            id: "proven-practice-vs-new-approach",
            title: "Proven Practice vs New Approach",
            items: [
              {
                label: "Proven practice: change management",
                description:
                  "Change management focuses on communication, readiness, and reinforcement. This module uses that lens to ask whether the learner understands what the system is doing and why.",
              },
              {
                label: "Proven practice: ethical design",
                description:
                  "Ethical design focuses on fairness, bias, and responsible use. This module asks where the learner could experience the system as unfair, unclear, or intrusive.",
              },
              {
                label: "Proven practice: psychological safety",
                description:
                  "Psychological safety focuses on safe practice and feedback. This module asks what happens when the learner makes a mistake or disagrees with the feedback.",
              },
              {
                label: "New approach: principles become design choices",
                description:
                  "The shift is from explaining ethics and trust to making learner-facing decisions about transparency, feedback, safeguards, and human review.",
              },
            ],
          },
          {
            id: "tradeoffs-and-constraints",
            title: "Tradeoffs and Constraints",
            description:
              "This module is built around tradeoffs that designers actually face.",
            items: [
              {
                label: "Transparency vs simplicity",
                description:
                  "More explanation can build trust, but too much overwhelms the learner. We focused on the minimum information needed to understand and question the system.",
              },
              {
                label: "Automation vs human judgment",
                description:
                  "Automation increases scale and speed. Human review increases trust in high-stakes moments. The module pushes designers to decide where human involvement is non-negotiable.",
              },
              {
                label: "Adoption vs control",
                description:
                  "Strict guardrails reduce risk but can frustrate learners. Flexible systems increase adoption but allow misuse. Both risks must be managed, not eliminated.",
              },
              {
                label: "Speed vs governance",
                description:
                  "Teams often need to launch quickly, and full governance is rarely in place at launch. The module reflects this reality instead of assuming ideal conditions.",
              },
              {
                label: "Confidence vs skepticism",
                description:
                  "Too much confidence leads to overtrust. Too much skepticism leads to avoidance. The design aims to keep learners appropriately critical.",
              },
            ],
          },
          {
            id: "how-ai-supported-the-build",
            title: "How AI Supported the Build",
            description:
              "AI helped expand the design space, but it did not replace judgment.",
            items: [
              {
                label: "Scenario variation",
                description:
                  "AI helped generate scenario variations and alternative learner reactions.",
              },
              {
                label: "Trust-risk pressure testing",
                description:
                  "AI helped pressure-test where trust might break, where instructions felt unclear, and where feedback could be misread.",
              },
              {
                label: "Misuse pattern exploration",
                description:
                  "AI helped identify common patterns of confusion, overtrust, distrust, or misuse.",
              },
              {
                label: "Feedback language drafts",
                description:
                  "AI helped draft alternative feedback language, which still needed human review for tone, clarity, and fairness.",
              },
              {
                label: "Human judgment remained central",
                description:
                  "AI did not decide what risks matter most, where human judgment is required, what level of transparency is appropriate, or how much complexity learners can handle.",
              },
            ],
          },
          {
            id: "what-another-designer-can-reuse",
            title: "What Another Designer Can Reuse",
            description:
              "You can reuse this approach before launching any AI-supported learning experience.",
            items: [
              {
                label: "A simple trust review pattern",
                description:
                  "Ask: What does the learner see? What is the system inferring or deciding? Where could this feel unclear, unfair, or intrusive? What happens if the learner disagrees?",
              },
              {
                label: "Boundary-setting decisions",
                description:
                  "Decide where to disclose AI use, what limitations to state clearly, when to require human review, and what choices the learner has.",
              },
              {
                label: "Safeguard types",
                description:
                  "Consider clear disclosures, feedback phrasing that avoids overconfidence, opt-out or alternative paths, and manager or stakeholder communication.",
              },
              {
                label: "A practical misuse lens",
                description:
                  "Design for misuse, not just correct use. Assume mixed reactions such as trust, skepticism, and confusion.",
              },
              {
                label: "Moments where trust is gained or lost",
                description:
                  "Focus on the moments where feedback, automation, or lack of transparency could change how the learner uses the system.",
              },
            ],
          },
          {
            id: "where-this-could-break",
            title: "Where This Could Break",
            description:
              "This module simplifies a complex problem. It helps designers see risks early, but it does not remove the need for ongoing design decisions after release.",
            items: [
              {
                label: "Stakeholder pressure overrides design decisions",
                description:
                  "If leadership pushes for full automation or minimal transparency, trust risks increase regardless of design intent.",
              },
              {
                label: "Learners do not have real choice",
                description:
                  "If the system is mandatory and cannot be questioned, transparency alone will not build trust.",
              },
              {
                label: "Feedback feels misaligned with real performance",
                description:
                  "Even well-explained systems lose credibility if outputs feel wrong or unfair.",
              },
              {
                label: "The experience is over-engineered",
                description:
                  "Too many safeguards, disclosures, or steps can slow adoption and frustrate users.",
              },
              {
                label: "Teams assume trust is solved at launch",
                description:
                  "Trust changes over time. It requires monitoring, feedback, and iteration.",
              },
            ],
          },
          {
            id: "reflection-question",
            title: "Reflection Question",
            description:
              "Where in your current or upcoming learning experience could a learner reasonably think: \"I don't understand what this system is doing,\" \"This feels unfair or inaccurate,\" or \"I'm not sure how much I should trust this\"? What is one design change you would make before launch to address that moment?",
          },
        ],
      },
    },
    reflection: {
      title: "Reflection",
      prompt:
        "Where could an AI-enabled learning experience lose learner trust, and what design safeguard would you add before asking learners to rely on it?",
    },
  },
};
