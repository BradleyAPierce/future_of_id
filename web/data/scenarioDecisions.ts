const SALES_ONBOARDING_SCENARIO =
  "You are designing a scenario-based learning experience for a new sales onboarding program. The experience should help new sales representatives practice making realistic decisions, interpreting customer cues, and choosing next steps during an early customer conversation.";

const AI_CONVERSATION_GOVERNANCE_SCENARIO =
  "You are designing an AI-driven conversation simulation for sales onboarding. The sales team wants the AI customer to vary responses so practice feels realistic, but legal and brand leaders want every customer objection and recommended reply pre-approved by SMEs. Decide how you would balance adaptive conversation practice with accuracy, brand alignment, and review control.";

export type ScenarioDecision = {
  id: string;
  title: string;
  progressionLabel: string;
  focus: string;
  scenario: string;
};

export const SCENARIO_DECISIONS_BY_MODULE: Record<string, ScenarioDecision[]> = {
  "simulation-design": [
    {
      id: "sales-onboarding-decision",
      title: "Sales Onboarding Decision Practice",
      progressionLabel: "Practice Focus 1",
      focus: "Scenario Realism",
      scenario: SALES_ONBOARDING_SCENARIO,
    },
    {
      id: "ai-conversation-governance",
      title: "AI Conversation Governance",
      progressionLabel: "Practice Focus 2",
      focus: "AI Governance",
      scenario: AI_CONVERSATION_GOVERNANCE_SCENARIO,
    },
    {
      id: "adaptive-simulation-logic",
      title: "Adaptive Simulation Logic",
      progressionLabel: "Practice Focus 3",
      focus: "Adaptive Logic",
      scenario:
        "You are designing an adaptive sales onboarding simulation. The platform can adjust scenario difficulty based on prior responses, confidence ratings, and early performance patterns. Sales leaders want high performers moved quickly into advanced challenges, while new or struggling reps receive more guided practice. You are concerned that limited data could misclassify learners, reinforce early mistakes, or create uneven practice experiences. Decide how you would define the adaptive logic and what safeguards would keep the experience fair, effective, and instructionally controlled.",
    },
  ],
  "performance-consulting": [
    {
      id: "problem-framing",
      title: "Performance Problem Framing",
      progressionLabel: "Practice Focus 1",
      focus: "Problem Framing",
      scenario:
        "You are asked to create a training program because sales performance has dropped over the last quarter. Your stakeholder believes the issue is that sales reps are not following the correct process and wants a course built immediately. However, you suspect the problem may not be caused by a lack of knowledge alone. What would you do in this situation, and how would you approach the request?",
    },
    {
      id: "stakeholder-pressure",
      title: "Stakeholder Pressure",
      progressionLabel: "Practice Focus 2",
      focus: "Stakeholder Alignment",
      scenario:
        "You are working with a stakeholder who insists that a training course must be delivered within two weeks to address a performance issue. You have limited time to investigate the problem, and the stakeholder is resistant to delaying the solution. You suspect the issue may involve unclear expectations, manager support, or process gaps rather than just knowledge. How would you respond to the stakeholder, and how would you decide what solution to move forward with?",
    },
    {
      id: "system-level-decision",
      title: "System-Level Performance Decision",
      progressionLabel: "Practice Focus 3",
      focus: "Performance Systems",
      scenario:
        "You are analyzing a performance issue where different teams are showing inconsistent results. Some teams perform well with minimal support, while others struggle despite completing the same training. Leadership wants a single standardized training solution rolled out across all teams. You believe the issue may involve differences in manager coaching, tools, or local processes rather than a single training gap. How would you define the problem and decide what type of solution is needed?",
    },
  ],
  "ai-literacy": [
    {
      id: "ai-use-decision",
      title: "AI Use Decision",
      progressionLabel: "Practice Focus 1",
      focus: "AI Application",
      scenario:
        "You are designing a new onboarding module and are considering using AI to generate first drafts of learning content. You have access to SME documentation and past training materials, but timelines are tight and stakeholders expect rapid development. Decide how you would use AI in this situation, and what you would NOT rely on AI to do.",
    },
    {
      id: "ai-overreliance-risk",
      title: "AI Over-Reliance Risk",
      progressionLabel: "Practice Focus 2",
      focus: "Validation and Risk",
      scenario:
        "You are reviewing a course that was largely generated using AI. The content is well-structured and reads clearly, but you are unsure whether it accurately reflects real workflows or nuanced decision-making. Stakeholders are satisfied with the speed and output, and there is pressure to move forward without additional review. How would you approach this situation, and what risks would you address before approving the course?",
    },
    {
      id: "ai-integration-strategy",
      title: "AI Integration Strategy",
      progressionLabel: "Practice Focus 3",
      focus: "Workflow Design",
      scenario:
        "Your organization wants to integrate AI into the instructional design workflow to increase speed and scalability across multiple projects. Different designers are using AI inconsistently, and there is no shared approach for when and how AI should be used. You are asked to help define how AI should be incorporated into the workflow. How would you design this approach, and what guidelines or controls would you put in place to ensure quality and consistency?",
    },
  ],
  "learning-analytics": [
    {
      id: "data-interpretation",
      title: "Data Interpretation",
      progressionLabel: "Practice Focus 1",
      focus: "Evidence Review",
      scenario:
        "You are reviewing analytics for a recently launched training program. Completion rates are high, and learners report positive feedback, but there has been no noticeable improvement in job performance. How would you interpret this data, and what would you do next?",
    },
    {
      id: "misleading-metrics",
      title: "Misleading Metrics",
      progressionLabel: "Practice Focus 2",
      focus: "Metric Evaluation",
      scenario:
        "A stakeholder is excited because training engagement metrics have increased significantly, including time spent in modules and interaction rates. However, you are unsure whether these metrics actually reflect meaningful learning or improved performance. How would you evaluate these results, and how would you respond to the stakeholder?",
    },
    {
      id: "measurement-strategy",
      title: "Measurement Strategy",
      progressionLabel: "Practice Focus 3",
      focus: "Performance Measurement",
      scenario:
        "Your organization wants to standardize how learning effectiveness is measured across all programs. Different teams are using different metrics, and there is no clear connection between training and business outcomes. How would you design a measurement approach that ensures learning is evaluated based on real performance impact?",
    },
  ],
  "content-systems": [
    {
      id: "reuse-vs-customization",
      title: "Reuse vs Customization",
      progressionLabel: "Practice Focus 1",
      focus: "Reusable Content",
      scenario:
        "You are updating several onboarding courses that share similar concepts, examples, and job aids. Each stakeholder wants their course customized, but you notice that teams are repeatedly recreating the same content in slightly different ways. How would you decide what should be reused, what should be customized, and how the content should be structured?",
    },
    {
      id: "workflow-fragmentation",
      title: "Workflow Fragmentation",
      progressionLabel: "Practice Focus 2",
      focus: "Workflow Design",
      scenario:
        "Your learning team stores content across slide decks, documents, spreadsheets, LMS uploads, and shared folders. Updates are difficult because no one knows which version is current, and changes often have to be made in multiple places. How would you redesign the workflow so content is easier to maintain, update, and reuse?",
    },
    {
      id: "scalable-content-architecture",
      title: "Scalable Content Architecture",
      progressionLabel: "Practice Focus 3",
      focus: "Content Architecture",
      scenario:
        "Your organization wants to scale learning content across multiple audiences, regions, and product lines without rebuilding every course from scratch. You need to design a content system that supports consistency, flexibility, and long-term maintenance. How would you structure the system, and what rules would prevent it from becoming fragmented over time?",
    },
  ],
  "adaptive-learning": [
    {
      id: "personalization-decision",
      title: "Personalization Decision",
      progressionLabel: "Practice Focus 1",
      focus: "Learner Variability",
      scenario:
        "You are designing a learning experience for a group of learners with different levels of prior knowledge, confidence, and job experience. A stakeholder wants one standard path so everyone receives the same content, but you believe some learners need more support while others need more advanced practice. How would you decide what should be personalized and what should remain consistent for everyone?",
    },
    {
      id: "adaptive-pathway-risk",
      title: "Adaptive Pathway Risk",
      progressionLabel: "Practice Focus 2",
      focus: "Adaptive Rules",
      scenario:
        "Your team wants to use quiz results to automatically move learners into different learning paths. Learners who score high would skip practice, while learners who score low would receive extra support. You are concerned that one quiz may not provide enough evidence to make that decision. How would you design the adaptive rule, and what risks would you address?",
    },
    {
      id: "scalable-adaptive-system",
      title: "Scalable Adaptive System",
      progressionLabel: "Practice Focus 3",
      focus: "Adaptive Architecture",
      scenario:
        "Your organization wants to scale adaptive learning across multiple programs. Different teams are using different rules for personalization, and there is no shared approach for deciding when content, practice, or feedback should adapt. How would you design an adaptive learning system that is scalable, fair, and instructionally sound?",
    },
  ],
  "human-centered-change": [
    {
      id: "learner-trust",
      title: "Learner Trust",
      progressionLabel: "Practice Focus 1",
      focus: "Trust and Transparency",
      scenario:
        "You are introducing an AI-supported learning experience that gives learners personalized feedback. Some learners are excited, while others worry that the system may judge them unfairly or track more than they understand. How would you design the experience so learners understand how AI is being used and can trust the feedback process?",
    },
    {
      id: "change-resistance",
      title: "Change Resistance",
      progressionLabel: "Practice Focus 2",
      focus: "Adoption and Support",
      scenario:
        "Your organization is rolling out new AI-enabled learning tools for instructional designers and facilitators. Some team members are enthusiastic, while others worry that AI will reduce quality, replace their expertise, or create extra work. How would you support adoption while respecting legitimate concerns?",
    },
    {
      id: "ethical-learning-system",
      title: "Ethical Learning System",
      progressionLabel: "Practice Focus 3",
      focus: "Ethics and Governance",
      scenario:
        "Your organization wants to use learner data, AI feedback, and adaptive recommendations to improve learning outcomes at scale. The system could provide valuable support, but it also raises concerns about privacy, bias, transparency, and learner agency. How would you design governance and safeguards so the system remains ethical and human-centered?",
    },
  ],
};
