import type { ModuleContent } from "@/types/moduleContent";

export const learningAnalyticsContent: ModuleContent = {
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
                'The scenario pushes beyond "did they finish?" toward "did anything change on the job?"',
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
};
