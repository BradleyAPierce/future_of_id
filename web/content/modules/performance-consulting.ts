import type { ModuleContent } from "@/types/moduleContent";

export const performanceConsultingContent: ModuleContent = {
  slug: "performance-consulting",
  intro: {
    learnerQuestion: "What problem are we actually solving?",
    takeaway: "Better diagnosis leads to better learning solutions.",
    overview:
      "A course request is a signal to diagnose the performance system, not an automatic order to build training. Performance consulting means you investigate the business problem, define the performance gap, and identify the conditions influencing behavior. In this module, you'll ask targeted questions, align work to measurable outcomes, and decide when training is not the solution.",
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
        "This layer gives learners practice reframing a stakeholder's course request into a performance consulting conversation. The goal is not to find the fastest solution; it is to identify the real performance problem before proposing learning.",
      practiceGuidance:
        "As you respond, name the stakeholder's stated request, the performance problem that may sit beneath it, the evidence or questions you still need, any non-training factors that could affect performance, and the next step you would defend.",
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
          description: "The most reusable element is the consulting pattern.",
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
              description: "Separate what is known from what is assumed.",
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
      "Think of a recent or realistic course request. What assumption would you challenge, what evidence would you still need, and what diagnosis remains yours as the instructional designer before recommending a solution?",
  },
};
