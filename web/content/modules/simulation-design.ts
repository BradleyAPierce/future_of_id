import type { ModuleContent } from "@/types/moduleContent";

export const simulationDesignContent: ModuleContent = {
  slug: "simulation-design",
  intro: {
    learnerQuestion: "How do I design practice where decisions truly matter?",
    takeaway: "Meaningful practice begins with meaningful decisions.",
    overview:
      "Better scenarios do not come from more branching, realism, or technology by default. They come from meaningful decisions, consequences, and feedback that help learners practice judgment before the stakes are real. This module shows you how to design decision-rich practice where constraints are visible, feedback is useful, and complexity is earned.",
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
            "Many workplace skills targeted by this module require decisions under pressure or incomplete information, not recall alone. Experiential and deliberate-practice principles support giving learners focused decisions, consequences, feedback, and opportunities to adjust before the stakes are real.",
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
        {
          id: "evidence-and-source-notes",
          title: "Evidence and Source Notes",
          description:
            "The module draws on established experiential and deliberate-practice principles while treating implementation choices as Bradley's professional interpretation.",
          items: [
            {
              label: "Established principle — Kolb (1984)",
              description:
                "Experiential Learning: Experience as the Source of Learning and Development, 1984, supports connecting concrete experience with reflection, conceptualization, and further application.",
            },
            {
              label: "Established research — Ericsson, Krampe, and Tesch-Römer (1993)",
              description:
                "The Role of Deliberate Practice in the Acquisition of Expert Performance, Psychological Review, 100(3), 1993, DOI 10.1037/0033-295X.100.3.363, supports focused practice with feedback. It does not imply that every simulation automatically creates deliberate practice.",
            },
            {
              label: "Established taxonomy — Anderson and Krathwohl (2001)",
              description:
                "A Taxonomy for Learning, Teaching, and Assessing, 2001, supports distinguishing application, analysis, evaluation, and creation from simple recall.",
            },
            {
              label: "Bradley interpretation",
              description:
                "The rule that complexity must improve a meaningful decision is Bradley's design philosophy for this module, not a universal research threshold for simulation fidelity.",
            },
          ],
        },
      ],
    },
    experience: {
      title: "Experience",
      badge: "Layer 2",
      intro:
        "This layer gives your learners practice shaping a realistic scenario or AI-driven conversation around a workplace decision that matters. Before adding branches, realism, or AI, define the decision learners must make, the consequence they need to see, and the feedback that will help them improve.",
      practiceGuidance:
        "As you respond, define the meaningful decision the learner must make, the consequence that makes the decision matter, the feedback that helps them improve, whether branching, realism, or AI actually improves the practice, and what complexity you would intentionally avoid.",
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
        "We focused this module on one problem: new sales reps don't struggle because they lack knowledge; they struggle at the moment when a customer says something unexpected and they have to decide what to do next. The design starts with that meaningful decision, then builds the consequence, feedback, and only the complexity needed to support transfer. Instead of covering the full sales process or chasing realism, this module practices the moment where a rep has to make a call and move the conversation forward.",
      sections: [
        {
          id: "key-design-decisions",
          title: "Key Design Decisions",
          description:
            "A few decisions shaped everything here: meaningful decision, consequence, feedback, justified complexity, and transfer. We did consider building a full end-to-end simulation, but it added complexity without improving the core skill, so we cut it.",
          items: [
            {
              label: "Narrow the scope",
              description:
                "We stayed in the early conversation instead of building a full simulation. That's where the learner decision is clearest and most transferable.",
            },
            {
              label: "Build around one decision at a time",
              description:
                "Not a full conversation tree. Just moments where the learner has to decide what to do next and see why that choice matters.",
            },
            {
              label: "Keep branching limited",
              description:
                "We only added branches where a choice changes the consequence or feedback. Anything else just adds noise.",
            },
            {
              label: "Keep it realistic, not dramatic",
              description:
                "No over-the-top scenarios. Just enough workplace pressure to make the decision feel real and useful.",
            },
          ],
        },
        {
          id: "proven-practice-vs-new-approach",
          title: "Proven Practice vs New Approach",
          description:
            "Established experiential and deliberate-practice principles support practice, feedback, and reflection. Bradley's interpretation was to remove elements that did not strengthen the focal decision, rather than assume immersion or AI would improve the experience. That implementation choice is professional judgment, not a universal claim about every simulation.",
        },
        {
          id: "tradeoffs-and-constraints",
          title: "Tradeoffs and Constraints",
          description:
            "This didn't come together in a clean sequence. Most of the work was going back and fixing weak decisions after we saw how the scenario actually played out. The first version didn't work because the decisions were too obvious, the consequences were too soft, and the feedback had nothing meaningful to respond to.",
          items: [
            {
              label: "No full conversation simulation",
              description:
                "Too much complexity, not enough added value for the decision being practiced.",
            },
            {
              label: "Limited number of decisions",
              description:
                "More choices can feel realistic, but they make feedback harder to follow. If a branch doesn't change the consequence or the feedback, it is probably not worth building.",
            },
            {
              label: "Controlled fidelity",
              description:
                "Enough detail to support workplace transfer, but not so much that realism distracts from the decision.",
            },
            {
              label: "Buildable structure",
              description:
                "Bradley's professional constraint for this build was to avoid a large simulation unless added complexity improved the focal practice decision.",
            },
          ],
        },
        {
          id: "how-ai-supported-the-build",
          title: "How AI Supported the Build",
          description:
            "AI helped in a few specific ways. But the first outputs were generic. Most of the real work was rewriting choices and consequences so they sounded like something a real customer would actually say, and making sure the feedback explained what changed. AI didn't decide which decision mattered, how much complexity was justified, or what a good response looks like. That still comes from the designer and the SME.",
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
            "If you're building something like this, you don't need to overcomplicate it. You can do a lot with a simple decision-rich sequence.",
          items: [
            {
              label: "Start with one decision that actually matters.",
            },
            {
              label: "Define the consequence that teaches.",
            },
            {
              label:
                "Write feedback that improves future judgment, not just correctness.",
            },
            {
              label:
                "Add branching, realism, or AI only when it improves practice.",
            },
            {
              label:
                "Connect the practice back to real workplace performance.",
            },
          ],
        },
        {
          id: "where-this-could-break",
          title: "Where This Could Break",
          description:
            "This approach doesn't work everywhere. It starts to fall apart if the decision isn't real, the consequence doesn't teach, the feedback only marks correctness, or the learner already knows how to handle the situation. It also breaks if you overbuild it. More branching, more AI, and more realism can sound better, but they can make the experience harder to follow, harder to maintain, and less connected to performance.",
        },
        {
          id: "reflection",
          title: "Reflection",
          description:
            "What's one decision you keep explaining in your training but never actually let people practice? What consequence, feedback, and level of complexity would help that practice transfer to real work?",
        },
      ],
    },
  },
  reflection: {
    title: "Reflection",
    prompt:
      "Think of one workplace conversation or decision that would benefit from safe practice. What decision matters most, what consequence would create learning, and what professional judgment remains yours as the designer?",
  },
};
