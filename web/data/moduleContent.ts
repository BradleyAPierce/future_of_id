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
      overview:
        "Performance consulting shifts instructional designers from taking course requests at face value to investigating the business problem, the performance gap, and the conditions that influence behavior. This module focuses on asking better questions, aligning learning work to measurable outcomes, and knowing when training is only part of the solution.",
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
          "This layer frames performance consulting as a strategic L&D capability: diagnosing the real problem before designing the learning solution.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Performance consulting is the practice of partnering with stakeholders to define the desired business result, identify the performance required to achieve it, and determine whether learning, process, tools, incentives, or environmental changes are needed. The designer's role expands from building content to improving performance conditions.",
          },
          {
            id: "business-alignment",
            title: "Business Alignment",
            description:
              "Business alignment means connecting learning work to the operational goal it is meant to support. Instead of starting with a requested course, the consultant clarifies what needs to change, who needs to perform differently, what success looks like, and how the organization will know the work mattered.",
          },
          {
            id: "stakeholder-discovery",
            title: "Stakeholder Discovery",
            description:
              "Strong discovery conversations surface the business context behind the request. Useful questions explore the current state, desired state, audience, constraints, consequences, prior attempts, available evidence, and the decisions stakeholders are willing to make if training alone will not solve the problem.",
          },
          {
            id: "needs-analysis",
            title: "Needs Analysis",
            description:
              "Needs analysis separates symptoms from causes. A request for training may reveal a knowledge gap, but it may also reveal unclear expectations, broken workflows, low manager support, poor tools, misaligned incentives, or missing feedback loops.",
          },
          {
            id: "performance-gaps",
            title: "Performance Gaps",
            description:
              "A performance gap is the difference between what people are currently doing and what they need to do to produce the desired result. Defining that gap in observable terms helps designers avoid vague goals and build interventions around real workplace behavior.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "HPI / performance improvement",
                description:
                  "Human Performance Improvement helps designers look beyond training by examining environment, process, information, tools, motivation, and feedback. It supports a broader solution set than instruction alone.",
              },
              {
                label: "Kirkpatrick",
                description:
                  "Kirkpatrick helps connect learning work to behavior and results. Performance consulting strengthens evaluation by defining desired outcomes before the solution is built.",
              },
              {
                label: "Needs analysis",
                description:
                  "Needs analysis gives structure to discovery. It helps determine whether a gap is caused by knowledge, skill, motivation, process, tools, expectations, or other workplace conditions.",
              },
              {
                label: "ROI thinking",
                description:
                  "ROI thinking encourages designers to consider value, cost, evidence, and business impact. It does not require every project to produce a financial calculation, but it does require clarity about what improvement is worth pursuing.",
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
              "The module begins with a conceptual shift, then moves into diagnostic practice. Learners are asked to slow down the request, inspect the problem, and make a reasoned recommendation before thinking about course design.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "The structure aligns with HPI by treating performance as a system influenced by more than knowledge. It aligns with Kirkpatrick by connecting learning decisions to behavior and results, and with needs analysis by requiring evidence before solution design.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "The content is organized around the consulting flow: define the capability, clarify business alignment, investigate stakeholder context, analyze needs, identify performance gaps, practice triage, and reflect on how to respond to future requests.",
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
              "The experience emphasizes stakeholder discovery because performance consulting depends on the quality of the questions asked before design begins. This helps learners practice credibility-building behaviors they can use in real L&D conversations.",
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
        "Learning analytics helps instructional designers move from assumptions to evidence. This module focuses on using data to understand learner behavior, evaluate design decisions, and make practical improvements that connect learning activity to outcomes and business value.",
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
          "This layer frames learning analytics as a design capability: using evidence to ask better questions, evaluate impact, and improve learning systems over time.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Learning analytics is the practice of collecting, interpreting, and applying data about learner activity, performance, behavior, and outcomes. For instructional designers, the goal is not reporting for its own sake; it is using evidence to improve decisions about content, practice, support, assessment, and impact.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "Modern L&D teams are expected to show whether learning experiences are working and where they should improve. Analytics helps designers identify friction, validate assumptions, prioritize revisions, and connect learning work to measurable value instead of relying only on completion counts or satisfaction scores.",
          },
          {
            id: "measurement-strategy",
            title: "Measurement Strategy",
            description:
              "A measurement strategy defines what evidence is needed before the experience is built. Strong strategies connect the business goal, desired performance, learning objectives, practice opportunities, assessment evidence, and post-launch indicators into one decision-making system.",
          },
          {
            id: "dashboard-interpretation",
            title: "Dashboard Interpretation",
            description:
              "Dashboards are useful only when designers know what decisions they support. Completion, time spent, quiz scores, drop-off points, practice attempts, confidence ratings, and performance metrics each tell a partial story. The designer's task is to interpret patterns in context rather than treating any single metric as proof of success.",
          },
          {
            id: "evidence-based-iteration",
            title: "Evidence-Based Iteration",
            description:
              "Analytics becomes valuable when it leads to better design choices. Evidence may suggest that instructions need clarification, practice is too easy or too difficult, feedback is not specific enough, learners need job support, or the assessment does not match the desired performance.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "Kirkpatrick",
                description:
                  "Kirkpatrick helps organize analytics across reaction, learning, behavior, and results. It reminds designers to look beyond whether learners liked the experience and toward whether behavior and outcomes changed.",
              },
              {
                label: "Evaluation strategy",
                description:
                  "Evaluation strategy defines what evidence will be collected, when it will be collected, and how it will inform decisions. It keeps analytics tied to purpose instead of producing disconnected reports.",
              },
              {
                label: "Evidence-based iteration",
                description:
                  "Evidence-based iteration treats learning design as an improvement cycle. Data reveals where the design is supporting learners, where it is creating friction, and what revision is most likely to improve outcomes.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer gives learners practice reading analytics evidence and turning it into a focused design recommendation.",
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
              "The module moves from analytics concepts to evidence interpretation and then to design action. Learners are not asked to become data analysts; they are asked to use data responsibly as instructional decision-makers.",
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
              "The experience emphasizes interpretation because analytics quality depends on judgment. The goal is to help learners explain what a metric can and cannot tell them, then make a design recommendation that is proportional to the evidence.",
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
        "Scenario, simulation, and conversation design helps instructional designers create realistic practice environments where learners can make decisions, receive feedback, and experience consequences before applying skills in higher-stakes settings. This module focuses on the design choices that make practice authentic, useful, and appropriately complex.",
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
          "This layer frames realistic practice design as a way to help learners build judgment, not just consume information about what they should do.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Scenario, simulation, and conversation design is the practice of creating structured environments where learners respond to realistic situations. The designer defines the context, decision points, constraints, feedback, and consequences so learners can practice how they will think and act in real work.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "Many valuable workplace skills depend on timing, judgment, communication, and tradeoffs. Realistic practice gives learners a safe space to try decisions, see consequences, recover from mistakes, and build confidence before the stakes involve customers, teams, compliance, safety, trust, or business outcomes.",
          },
          {
            id: "scenario-based-learning",
            title: "Scenario-Based Learning",
            description:
              "Scenario-based learning places learners in a meaningful role and asks them to make decisions in context. Strong scenarios include a clear situation, relevant pressure, plausible options, and consequences that reveal why one response is more effective than another.",
          },
          {
            id: "branching-logic",
            title: "Branching Logic",
            description:
              "Branching logic lets learner choices influence what happens next. Effective branching is not about creating endless paths; it is about selecting the few decisions that meaningfully change the conversation, reveal a misconception, create a consequence, or open a recovery path.",
          },
          {
            id: "conversation-design",
            title: "Conversation Design",
            description:
              "Conversation design focuses on how learners practice dialogue, questioning, coaching, negotiation, empathy, or de-escalation. AI-driven conversations can make this practice more responsive, but they still require clear goals, guardrails, feedback criteria, and an understanding of what a strong response looks like.",
          },
          {
            id: "fidelity-tradeoffs",
            title: "Fidelity Tradeoffs",
            description:
              "Low-fidelity practice can isolate a specific decision and reduce cognitive load. High-fidelity simulation can increase realism and emotional pressure. The design choice depends on the skill, the learner's readiness, the stakes of the task, and the amount of complexity needed to support transfer.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "Experiential learning",
                description:
                  "Experiential learning emphasizes concrete experience, reflection, and application. Scenarios and simulations support this cycle by giving learners an experience they can examine before returning to the workplace.",
              },
              {
                label: "Deliberate practice",
                description:
                  "Deliberate practice requires focused attempts, clear criteria, feedback, and refinement. Simulation design supports this when learners practice a targeted decision or behavior rather than simply moving through a story.",
              },
              {
                label: "Bloom's application/evaluation",
                description:
                  "Scenario-based practice asks learners to apply concepts, evaluate options, justify choices, and adapt decisions based on consequences instead of only recalling information.",
              },
              {
                label: "Scenario-based learning",
                description:
                  "Scenario-based learning connects knowledge to context. It helps learners recognize when a concept matters, how to use it, and what tradeoffs appear in realistic conditions.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer gives learners practice shaping a realistic scenario or AI-driven conversation around a workplace decision that matters.",
        sections: [
          {
            id: "activity",
            title: "Practice Environment Design",
            description:
              "Select a workplace skill and define the practice environment around it: learner role, situation, pressure, available information, decision point, possible responses, and the consequence or feedback each response should trigger.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description:
              "Decide where the experience needs branching, where a linear scenario is enough, and where an AI-driven conversation would add value. The goal is to choose interaction patterns that serve the target performance instead of adding complexity for its own sake.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description:
              "Evaluate the practice design against key criteria: the decision is authentic, the choices are plausible, the feedback explains consequences, the fidelity level is appropriate, and the learner can connect the experience back to workplace action.",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro:
          "This layer makes the design logic visible so learners can see how scenario, simulation, and conversation experiences are built from performance needs rather than narrative decoration.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description:
              "The module moves from concept to design judgment. Learners first understand why realistic practice supports transfer, then identify the decision moments, feedback loops, and fidelity choices that make a practice environment instructionally useful.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "The structure aligns with experiential learning by creating a concrete practice context, with deliberate practice by focusing on specific decisions and feedback, and with Bloom's higher-order levels by requiring learners to apply and evaluate choices under constraints.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "The content is organized around the simulation design workflow: define the capability, clarify the value of realistic practice, identify decision points, choose branching or conversation patterns, evaluate fidelity tradeoffs, and reflect on safe practice design.",
          },
          {
            id: "prompt-architecture",
            title: "Prompt Architecture",
            description:
              "The implied design prompt pattern is: define the target performance, describe the learner role and context, identify the critical decision, draft plausible responses, map consequences, set feedback criteria, and decide whether AI conversation adds meaningful practice value.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description:
              "The module content remains structured as data so scenario concepts, conversation design prompts, and reverse engineering notes can be rendered through the shared module route without embedding instructional copy in UI components.",
          },
          {
            id: "design-rationale",
            title: "Design Rationale",
            description:
              "The experience emphasizes design tradeoffs because effective simulations are not defined by how elaborate they are. They are effective when they create focused, safe, feedback-rich practice for the decisions learners actually need to make.",
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
        "Adaptive and personalized learning architecture helps instructional designers create learning systems that respond to learner needs, readiness, progress, and context. This module focuses on the design decisions behind adaptation: what should change, why it should change, what evidence justifies the change, and when personalization is worth the added complexity.",
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
          "This layer frames adaptive learning as an architecture problem: designing rules, evidence, pathways, and supports that help learners progress without losing instructional coherence.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Adaptive and personalized learning architecture is the practice of designing learning experiences that adjust based on learner state, performance, preferences, needs, or context. The goal is not to make every experience unique; it is to provide the right support, challenge, or pathway when the evidence suggests a learner needs it.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "Learners often enter with different prior knowledge, confidence, roles, goals, constraints, and performance gaps. Adaptive design helps reduce unnecessary friction by routing learners toward appropriate practice, remediation, enrichment, or support while keeping the experience tied to shared outcomes.",
          },
          {
            id: "learner-variability",
            title: "Learner Variability",
            description:
              "Learner variability includes differences in prior knowledge, skill level, role context, language, accessibility needs, motivation, confidence, and available time. Useful personalization starts by identifying which differences actually affect the learning goal and which should not drive separate pathways.",
          },
          {
            id: "diagnostics-and-learner-state",
            title: "Diagnostics and Learner State",
            description:
              "Adaptive systems need evidence about the learner's current state. That evidence might come from diagnostic questions, self-assessment, role selection, confidence ratings, quiz performance, practice behavior, or prior completion data. The designer must decide which signals are trustworthy enough to shape the experience.",
          },
          {
            id: "pathways-and-recommendations",
            title: "Pathways and Recommendations",
            description:
              "Pathways sequence learning based on need, while recommendations guide learners toward useful next actions. Both require clear rules: what triggers the adaptation, what changes for the learner, and how the system avoids over-personalizing in ways that hide essential content or reinforce weak assumptions.",
          },
          {
            id: "adaptation-tradeoffs",
            title: "Adaptation Tradeoffs",
            description:
              "Adaptation adds design, content, data, maintenance, and QA complexity. It is most valuable when learners differ in meaningful ways, when the stakes justify differentiated support, and when the system has enough evidence to make a better decision than a well-designed common path.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "Mastery learning",
                description:
                  "Mastery learning emphasizes reaching a defined level of competence before moving on. Adaptive pathways can support mastery by routing learners to remediation, additional practice, or enrichment based on evidence of progress.",
              },
              {
                label: "Differentiated instruction",
                description:
                  "Differentiated instruction adjusts content, process, practice, or support based on learner needs. Adaptive architecture translates that principle into system rules and content pathways.",
              },
              {
                label: "Learner variability",
                description:
                  "Learner variability reminds designers that one-size-fits-all experiences often create unnecessary barriers. The design challenge is deciding which differences matter enough to inform the learning path.",
              },
              {
                label: "Learner-centered design",
                description:
                  "Learner-centered design keeps adaptation focused on learner progress rather than technical novelty. Personalization should make the experience clearer, more relevant, or better supported.",
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
        "Content systems thinking helps instructional designers move from one-off course production to reusable, maintainable learning content workflows. This module focuses on modular content design, content architecture, workflow automation, and the separation of content from presentation so learning materials can scale without becoming fragile or duplicated.",
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
          "This layer frames content systems thinking as a practical capability for designing learning content that can be reused, updated, rendered, and scaled across modules and formats.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description:
              "Content systems thinking is the practice of designing instructional content as structured, reusable data instead of isolated page copy. For learning teams, this means defining content types, patterns, metadata, relationships, and workflows so content can move across experiences without being rewritten each time.",
          },
          {
            id: "why-it-matters",
            title: "Why It Matters",
            description:
              "As learning libraries grow, one-off content becomes harder to update, localize, personalize, measure, and govern. A content system helps designers preserve instructional quality while reducing duplication, version drift, manual handoffs, and UI-specific copy that cannot be reused elsewhere.",
          },
          {
            id: "modular-content-design",
            title: "Modular Content Design",
            description:
              "Modular content design breaks learning material into purposeful chunks such as overviews, outcomes, explanations, examples, practice prompts, feedback, reflections, and reverse engineering notes. Each module should be complete enough to make sense, but structured enough to be reused or rearranged.",
          },
          {
            id: "reusable-learning-objects",
            title: "Reusable Learning Objects",
            description:
              "Reusable learning objects are instructional assets designed for more than one placement or context. They require clear boundaries, labels, dependencies, and metadata so teams know what the object teaches, where it fits, and what should change when the source is updated.",
          },
          {
            id: "content-architecture",
            title: "Content Architecture",
            description:
              "Content architecture defines the structure behind the learning experience: content types, fields, relationships, naming conventions, and governance rules. It lets designers separate what the content means from how a specific page or component displays it.",
          },
          {
            id: "workflow-automation",
            title: "Workflow Automation",
            description:
              "Workflow automation can support drafting, review routing, version checks, publishing, tagging, QA, localization preparation, and content transformation. The design question is where automation removes repeatable friction while keeping human review in place for instructional quality and context.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "Reusable learning objects",
                description:
                  "Reusable learning object thinking helps designers create instructional chunks that can be reused across pathways, modules, and formats without losing meaning or context.",
              },
              {
                label: "Information architecture",
                description:
                  "Information architecture supports findability, structure, and relationships. In L&D, it helps learners and teams navigate content consistently across larger learning ecosystems.",
              },
              {
                label: "Single source of truth",
                description:
                  "Single-source content reduces duplication and version drift by keeping core instructional material in one structured location that different interfaces or outputs can consume.",
              },
              {
                label: "Workflow design",
                description:
                  "Workflow design clarifies how content moves from request to draft, review, approval, publication, measurement, and revision. It makes quality less dependent on individual memory or manual coordination.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro:
          "This layer gives learners practice turning a messy course asset into a modular content system that can be reused and maintained.",
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
              "The module moves from systems concepts to practical content workflow decisions. Learners identify content patterns, decide what should be structured, and evaluate where automation or reuse would improve maintainability without flattening instructional intent.",
          },
          {
            id: "theory-alignment",
            title: "Theory Alignment",
            description:
              "The structure aligns with reusable learning object theory by breaking content into meaningful chunks, with information architecture by defining relationships and labels, and with workflow design by connecting content structure to repeatable production practices.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description:
              "The content is organized around the content systems workflow: define the capability, identify why scale creates problems, modularize learning content, define reusable objects, separate content from UI, evaluate automation opportunities, and reflect on maintainability.",
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
              "The experience emphasizes real content operations because systems thinking is only useful when it changes how teams produce, review, update, and reuse learning materials. The goal is a workflow that is faster because it is clearer, not because quality checks were removed.",
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
};
