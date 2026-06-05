export type AboutLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type AboutCard = {
  title: string;
  description: string;
  label?: string;
};

export const aboutContent = {
  hero: {
    eyebrow: "About Future of ID",
    title: "Teaching the future of instructional design by demonstrating it.",
    intro:
      "Future of ID is a working learning product that shows how instructional design is evolving: from course production toward AI-enabled, data-informed, systems-oriented learning design.",
    creator: "Created by Bradley Pierce",
    creatorRole: "Learning architect building in public",
    proofPoints: [
      "Instructional design",
      "Full-stack development",
      "AI-supported practice",
      "Learning product strategy",
    ],
  },
  purpose: {
    eyebrow: "Why It Exists",
    title: "The field is changing faster than traditional course-building models can explain.",
    paragraphs: [
      "Instructional designers are still responsible for clarity, practice, accessibility, evidence, and learner trust. But the work around those responsibilities is expanding.",
      "Learning teams are being asked to use AI responsibly, interpret data, design adaptive experiences, support performance, manage reusable content, and connect learning work to business outcomes.",
      "Future of ID exists to make that shift visible. It does not just describe the future of instructional design. It turns the future into a product you can inspect, use, question, and learn from.",
    ],
  },
  creator: {
    eyebrow: "Creator Perspective",
    title: "Built by a learning architect, not a commentator on the sidelines.",
    intro:
      "Bradley Pierce approaches this project as a practitioner building the thing he is trying to explain. The platform is both a learning experience and a transparent record of product decisions.",
    items: [
      {
        label: "Practice",
        title: "Instructional design grounded in real work",
        description:
          "The focus is on performance, decision-making, scenario practice, stakeholder value, and the conditions that make learning useful on the job.",
      },
      {
        label: "Build",
        title: "Full-stack implementation as design evidence",
        description:
          "The platform connects curriculum structure, interface design, content systems, AI feedback, and technical architecture into one working learning product.",
      },
      {
        label: "Strategy",
        title: "Learning product thinking",
        description:
          "Future of ID treats learning experiences as products that need clear audiences, reusable systems, measurable value, responsible AI use, and long-term maintainability.",
      },
    ] satisfies AboutCard[],
  },
  audience: {
    eyebrow: "Who It Helps",
    title: "Designed for learners who need more than tool tips and trend summaries.",
    intro:
      "The course meets people at different points in their instructional design journey while keeping the same central promise: make better design decisions as the work becomes more complex.",
    items: [
      {
        title: "Experienced L&D professionals",
        description:
          "Use the platform to compare your existing practice with AI-supported workflows, analytics, adaptive design, and learning systems strategy.",
      },
      {
        title: "Newer instructional designers",
        description:
          "Build a stronger mental model for how learning science, performance consulting, scenarios, evidence, and learner trust fit together.",
      },
      {
        title: "Career-transition learners",
        description:
          "See what modern instructional design looks like when it moves beyond slides, scripts, and authoring tools into product-oriented learning systems.",
      },
    ] satisfies AboutCard[],
  },
  disciplines: {
    eyebrow: "What Comes Together",
    title: "The project sits at the intersection of learning, software, AI, and strategy.",
    intro:
      "Future of ID is intentionally cross-disciplinary because modern learning work is cross-disciplinary. The point is not to turn every instructional designer into a software engineer. The point is to understand how the pieces influence design quality.",
    items: [
      {
        title: "Instructional design",
        description:
          "Learning objectives, practice, feedback, sequencing, accessibility, reflection, and performance alignment remain the foundation.",
      },
      {
        title: "Full-stack development",
        description:
          "Interfaces, routes, content models, state, and system constraints shape what learners actually experience.",
      },
      {
        title: "AI integration",
        description:
          "AI is treated as a bounded design capability that requires prompts, safeguards, human review, and clear learner value.",
      },
      {
        title: "Learning product strategy",
        description:
          "The platform connects audience needs, capability development, product coherence, maintainability, and evidence of impact.",
      },
    ] satisfies AboutCard[],
  },
  finalCta: {
    eyebrow: "Explore the Work",
    title: "Start with the product, then inspect the thinking behind it.",
    description:
      "Future of ID is both a course and a demonstration. Use it to study the seven capability areas, see how the platform is structured, and decide what kind of future-facing instructional design practice you want to build.",
    primaryCta: { label: "Start Orientation", href: "/course/orientation" },
    secondaryCta: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/bradley-pierce-649a3435/",
      external: true,
    },
  },
};
