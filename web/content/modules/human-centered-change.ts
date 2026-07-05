import type { ModuleContent } from "@/types/moduleContent";

export const humanCenteredChangeContent: ModuleContent = {
  slug: "human-centered-change",
  intro: {
    learnerQuestion: "How do I design learning experiences people can trust?",
    takeaway: "Trust is designed.",
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
            'Where in your current or upcoming learning experience could a learner reasonably think: "I don\'t understand what this system is doing," "This feels unfair or inaccurate," or "I\'m not sure how much I should trust this"? What is one design change you would make before launch to address that moment?',
        },
      ],
    },
  },
  reflection: {
    title: "Reflection",
    prompt:
      "Where could an AI-enabled learning experience lose learner trust, and what design safeguard would you add before asking learners to rely on it?",
  },
};
