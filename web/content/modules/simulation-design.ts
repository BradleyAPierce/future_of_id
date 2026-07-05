import type { ModuleContent } from "@/types/moduleContent";

export const simulationDesignContent: ModuleContent = {
  slug: "simulation-design",
  intro: {
    learnerQuestion: "How do I design practice where decisions matter?",
    takeaway:
      "Realistic practice starts with a decision, a consequence, and useful feedback.",
    overview:
      "Scenario, simulation, and conversation design helps instructional designers create realistic practice environments where your learners can make decisions, receive feedback, and experience consequences before applying skills in higher-stakes settings. This module shows you how to design realistic practice where decisions matter, constraints are visible, and feedback helps people improve before the stakes are real.",
    outcomes: [
      "Explain how scenario-based learning, simulations, and conversation design support skill transfer.",
      "Shape decision points that reflect realistic constraints, consequences, and learner judgment.",
      "Evaluate fidelity, branching complexity, and feedback choices in a practice experience.",
      "Decide when AI-driven conversation adds value, and when simpler scenario design is enough.",
    ],
  },
  frameworks: {
    beforeDesignPractice: "experience-in-action",
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
              description: "Too much complexity, not enough added value.",
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
              description: "AI helped draft early versions of scenarios.",
            },
            {
              label: "Response options",
              description: "AI helped generate different response options.",
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
};
