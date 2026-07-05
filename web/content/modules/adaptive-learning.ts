import type { ModuleContent } from "@/types/moduleContent";

export const adaptiveLearningContent: ModuleContent = {
  slug: "adaptive-learning",
  intro: {
    learnerQuestion: "When does adaptation actually improve learning?",
    takeaway: "Complexity should be earned.",
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
        'Most teams ask for "adaptive learning" without being able to define what should actually change, or why. The result is usually one of two extremes: a single static path that ignores real learner differences, or an overbuilt experience with unnecessary branching, weak logic, and no clear evidence behind it. This module was designed to correct that problem. Instead of teaching adaptive learning as a feature or system, it focuses on the core design work: deciding which learner differences matter, what evidence you trust, and when a change in the experience is actually justified. The goal is not to make every experience personalized. The goal is to make better decisions about when adaptation improves learning, and when it doesn\'t.',
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
};
