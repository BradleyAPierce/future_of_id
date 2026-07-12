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
    title: "Making capability development visible through a working system.",
    intro:
      "Future of ID is a capability development system: a repeatable method and reusable learning architecture for identifying, developing, applying, and sharing future-relevant instructional design capabilities.",
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
      "Future of ID exists to make capability development visible. Its current seven-capability pathway is Bradley's implemented professional pathway and the first complete demonstration of the system—not a universal, exhaustive, or permanent prescription.",
    ],
  },
  creator: {
    eyebrow: "Creator Perspective",
    title: "A professional calibration process made visible.",
    intro:
      "Future of ID did not begin with a claim that Bradley Pierce had mastered every capability the profession may need. It emerged through his professional calibration as an experienced instructional designer: assessing established expertise against the demands of future work, then using research, experimentation, applied practice, and reflection to develop and refine new capabilities.",
    items: [
      {
        label: "Know what you know",
        title: "Begin with established expertise",
        description:
          "Existing strengths in instructional design, professional judgment, performance, practice, evidence, accessibility, and learner trust provide the foundation for deciding where growth should begin.",
      },
      {
        label: "Know what you do not know",
        title: "Name development needs deliberately",
        description:
          "Bradley's current pathway focuses on areas where future work called for additional knowledge, intentional practice, technical experimentation, and stronger implementation experience.",
      },
      {
        label: "Discover through practice",
        title: "Let applied work reveal new questions",
        description:
          "Building, applying, and reflecting revealed connections and possibilities that were not visible at the start. Those discoveries refine an intentional pathway; they do not turn it into a universal prescription.",
      },
    ] satisfies AboutCard[],
  },
  audience: {
    eyebrow: "Who It Helps",
    title: "Designed for learners who need more than tool tips and trend summaries.",
    intro:
      "The course demonstrates one complete pathway while the system supports a broader promise: practitioners may identify different capabilities based on their role, responsibilities, organization, industry, career direction, and goals.",
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
          "The platform connects audience needs, capability development, product coherence, maintainability, and evidence of impact through a reusable learning architecture.",
      },
    ] satisfies AboutCard[],
  },
  finalCta: {
    eyebrow: "Explore the Work",
    title: "Start with the product, then inspect the thinking behind it.",
    description:
      "Future of ID is both a capability development system and a working demonstration. Study Bradley's current seven-capability pathway, inspect the reusable architecture, and consider which capabilities matter in your own professional context.",
    primaryCta: { label: "Start Orientation", href: "/course/orientation" },
    secondaryCta: {
      label: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/bradley-pierce-649a3435/",
      external: true,
    },
  },
};
