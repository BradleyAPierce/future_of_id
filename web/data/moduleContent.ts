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
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro:
          "This layer explains how the module is structured to model a consulting mindset instead of a course-building reflex.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description:
              "The module shifts your focus from course design to problem diagnosis, then walks you through how to analyze real requests. You slow down the request, inspect the problem, and make a clear recommendation before designing anything.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "This structure reflects HPI by treating performance as a system shaped by more than knowledge. It uses Kirkpatrick to connect learning decisions to behavior and results, and needs analysis to require evidence before solution design.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "We organize the content around the consulting flow: define the capability, clarify business alignment, investigate stakeholder context, analyze needs, identify performance gaps, practice triage, and reflect on how to respond to future requests.",
          },
          {
            id: "prompt-architecture",
            title: "Prompt Architecture",
            description:
              "The implied consulting prompt pattern is: name the business outcome, describe the current and desired performance, identify evidence of the gap, explore root causes, and recommend the smallest intervention likely to improve results.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description:
              "The module content remains structured as data so the same route and rendering components can support additional modules. Each section provides reusable instructional chunks without embedding content in UI components.",
          },
          {
            id: "design-rationale",
            title: "Design Rationale",
            description:
              "This module prioritizes stakeholder discovery because the quality of your questions determines whether you solve the right problem. This helps you practice the credibility-building behaviors you need in real L&D conversations.",
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
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro:
          "This layer shows how the module turns analytics from passive reporting into an active design decision process.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description:
              "The module moves from reading evidence to choosing a design action. You do not need to become a data analyst. You need to use data responsibly when making instructional design decisions.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "The structure aligns with Kirkpatrick by connecting learning activity to behavior and results. It also reflects evaluation strategy by asking what evidence is needed and evidence-based iteration by using data to improve the design.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "The content is organized around the analytics workflow: define the capability, clarify why evidence matters, establish a measurement strategy, interpret dashboard signals, make an iteration decision, and reflect on what should be measured next.",
          },
          {
            id: "prompt-architecture",
            title: "Prompt Architecture",
            description:
              "The implied analysis prompt pattern is: identify the design question, review the available evidence, separate signal from noise, connect the pattern to learner behavior, recommend a targeted design change, and define how the change will be evaluated.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description:
              "The module content remains structured as data so analytics concepts, dashboard interpretation prompts, and reflection checkpoints can be rendered through the shared module route without embedding instructional copy in UI components.",
          },
          {
            id: "design-rationale",
            title: "Design Rationale",
            description:
              "This module emphasizes interpretation because metrics only become useful when you apply judgment. The goal is to help you explain what a metric can and cannot tell you, then recommend a design change that fits the evidence.",
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
        "Design decision points that reflect realistic constraints, consequences, and learner judgment.",
        "Evaluate fidelity, branching complexity, and feedback choices in a practice experience.",
        "Connect AI-driven conversations to experiential learning, deliberate practice, and performance-focused design.",
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
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro:
          "This layer shows how adaptive learning experiences are built from instructional logic, learner evidence, and pathway decisions rather than from vague promises of personalization.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description:
              "The module moves from the concept of personalization to the architecture behind it. Learners identify meaningful learner differences, choose evidence signals, and map adaptations that support progress without fragmenting the course experience.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "The structure aligns with mastery learning by focusing on readiness and progression, with differentiated instruction by adjusting support and pathways, and with learner variability by asking which learner differences should influence design decisions.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "The content is organized around the adaptive design workflow: define the capability, clarify learner variability, identify diagnostics, design pathways or recommendations, evaluate adaptation tradeoffs, and reflect on where personalization adds value.",
          },
          {
            id: "prompt-architecture",
            title: "Prompt Architecture",
            description:
              "The implied design prompt pattern is: define the shared learning outcome, identify meaningful learner variables, select diagnostic evidence, define pathway rules, specify the adapted support or challenge, and validate whether the adaptation improves the learner's path.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description:
              "The module content remains structured as data so adaptive learning concepts, pathway decisions, and reverse engineering notes can be rendered through the shared module route without embedding instructional copy in UI components.",
          },
          {
            id: "design-rationale",
            title: "Design Rationale",
            description:
              "The experience emphasizes constraints because personalization is only valuable when it improves learning decisions. The module keeps the focus on evidence, clarity, and learner progress rather than building complex branching for its own sake.",
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
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro:
          "This layer shows how the module itself models the content system principles it teaches: structured data, reusable rendering, and a clear boundary between instructional content and presentation.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description:
              "The module moves from content structure to workflow decisions. You identify content patterns, decide what should be structured, and evaluate where automation or reuse would make updates easier without weakening instructional quality.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "This structure uses reusable learning objects, information architecture, and workflow design to help you break content into chunks, define labels and relationships, and connect content structure to repeatable production work.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "The content follows the work itself: define the capability, identify where scale creates problems, modularize learning content, define reusable objects, separate content from UI, evaluate automation opportunities, and reflect on maintenance.",
          },
          {
            id: "prompt-architecture",
            title: "Prompt Architecture",
            description:
              "The implied design prompt pattern is: identify repeated content, name the content type, define required fields, separate instructional meaning from presentation, determine reuse rules, identify automation points, and specify the human review needed before publishing.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description:
              "This course uses structured module content in data files while shared UI components render the same schema across modules. That separation keeps instructional content portable and allows the product to scale without hardcoding learning copy into route or component files.",
          },
          {
            id: "design-rationale",
            title: "Design Rationale",
            description:
              "This module focuses on real content operations because a content system only matters if it changes how teams produce, review, update, and reuse learning materials. The goal is a clearer workflow that moves faster without removing quality checks.",
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
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro:
          "This layer shows how the module turns ethics and change from abstract values into concrete design checks that can be applied before a learning system launches.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description:
              "This module starts with trust concepts, then shifts into a practical design review. You first identify why adoption depends on confidence, then evaluate a learning feature for transparency, bias, psychological safety, and responsible AI use.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "This structure uses change management, ethical instructional design, and psychological safety to help you check adoption conditions, possible harm, learner agency, confidence, and dignity.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "The content follows the trust design workflow: define the capability, clarify why trust affects adoption, examine change impacts, identify AI transparency needs, evaluate ethical tradeoffs, add safeguards, and reflect on responsible use.",
          },
          {
            id: "prompt-architecture",
            title: "Prompt Architecture",
            description:
              "Use this review pattern: describe the learning system, identify who is affected, name the data and AI touchpoints, surface trust risks, evaluate bias and safety concerns, choose safeguards, and define how your learners will understand and challenge the system.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description:
              "The module content remains structured as data so ethical design prompts, trust review criteria, and reverse engineering notes can be rendered through the shared module route without embedding instructional copy in UI components.",
          },
          {
            id: "design-rationale",
            title: "Design Rationale",
            description:
              "The experience emphasizes practical safeguards because ethical learning design happens through decisions about data, feedback, transparency, and support. Trust is treated as something designers can intentionally build, test, and maintain.",
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
