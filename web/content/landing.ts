export type LandingLink = {
  label: string;
  href: string;
};

export type LandingCard = {
  title: string;
  description: string;
  label?: string;
};

export const landingContent = {
  header: {
    navItems: [
      { label: "What it is", href: "#what-it-is" },
      { label: "What it is not", href: "#what-it-is-not" },
      { label: "Different paths", href: "#different-paths" },
      { label: "Principles", href: "#platform-principles" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "Explore Modules", href: "/course/dashboard" },
  },
  hero: {
    eyebrow: "Practical instructional design implementation",
    title: "Future of ID",
    description:
      "A practical learning platform with modules, AI-supported practice, Reverse Builds, and documented design decisions from real instructional design work.",
    support:
      "This is not a prediction or a mandate. It shares one practitioner's evolving path through real projects, workflow decisions, constraints, and lessons learned.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/dashboard-banner-overlay-web640x287.jpg",
    primaryCta: { label: "Explore the Modules", href: "/course/dashboard" },
    secondaryCta: { label: "Read the Philosophy", href: "#platform-principles" },
    proofPoints: ["Real workflows", "Design tradeoffs", "Reverse Builds"],
  },
  whatIs: {
    eyebrow: "What Future of ID Is",
    title: "A practical record of instructional design work in motion.",
    intro:
      "Future of ID focuses on implementation: the decisions, tools, workflows, constraints, and revisions behind modern learning experiences.",
    items: [
      {
        title: "A practical learning platform",
        description:
          "The course gives instructional designers a structured way to explore AI literacy, analytics, performance consulting, scenarios, adaptive learning, content systems, and trust.",
      },
      {
        title: "A transparent design record",
        description:
          "Reverse Build sections show what shaped the work, what was simplified, where AI helped, and where human judgment stayed central.",
      },
      {
        title: "A working implementation space",
        description:
          "The platform documents real build choices instead of treating AI and learning systems as abstract topics.",
      },
      {
        title: "A place to compare approaches",
        description:
          "The goal is to help instructional designers decide what level of AI adoption and technical depth makes sense for their own context.",
      },
    ] satisfies LandingCard[],
  },
  whatIsNot: {
    eyebrow: "What Future of ID Is Not",
    title: "Not a prediction platform. Not a universal prescription.",
    intro:
      "This is not a claim that every instructional designer needs to code, build AI systems, or follow the same technical path.",
    items: [
      {
        title: "Not a trend report",
        description:
          "It does not try to forecast the future of the profession or package AI as a broad industry prediction.",
      },
      {
        title: "Not a replacement for fundamentals",
        description:
          "Instructional design judgment, performance analysis, accessibility, sequencing, and evaluation still matter.",
      },
      {
        title: "Not a mandate to code",
        description:
          "Some IDs may stay close to writing and authoring tools. Others may explore custom systems. Both paths can be valid.",
      },
      {
        title: "Not complexity for status",
        description:
          "Technical depth only matters when it helps solve a real learning or workflow problem.",
      },
    ] satisfies LandingCard[],
  },
  paths: {
    eyebrow: "Different Paths",
    title: "Instructional designers will not all use AI the same way.",
    intro:
      "Roles, teams, tools, industries, and interests vary. Future of ID treats technical depth as a set of options, not a single correct ladder.",
    items: [
      {
        label: "Writing and review",
        title: "AI-assisted writing workflows",
        description:
          "Use AI to draft, revise, compare, and improve objectives, scripts, quizzes, storyboards, and support materials.",
      },
      {
        label: "Authoring tools",
        title: "Course development workflows",
        description:
          "Improve work in tools like Storyline, Rise, Captivate, or iSpring without needing to build custom systems.",
      },
      {
        label: "Practice design",
        title: "Scenarios and feedback",
        description:
          "Design decisions, response options, consequences, and feedback that help people practice real workplace judgment.",
      },
      {
        label: "Learner support",
        title: "AI-assisted guidance",
        description:
          "Explore feedback systems, coaching prompts, chatbot support, and learner-facing safeguards where they are appropriate.",
      },
      {
        label: "Technical systems",
        title: "Custom learning architecture",
        description:
          "Investigate APIs, guardrails, orchestration, content systems, and platform-level workflows when the problem calls for that depth.",
      },
    ] satisfies LandingCard[],
  },
  whyExists: {
    eyebrow: "Why This Exists",
    title: "There is a gap between AI commentary and implementation reality.",
    intro:
      "AI can make content generation faster, but speed does not remove the need for design judgment. Instructional designers still need to decide what matters, evaluate outputs, protect trust, and connect learning work to performance.",
    items: [
      {
        title: "The work is uneven",
        description:
          "Different organizations are adopting AI and learning technology at different speeds, with different risks and constraints.",
      },
      {
        title: "The details are often hidden",
        description:
          "Many conversations skip the build decisions, failed attempts, tradeoffs, and maintenance problems that shape real work.",
      },
      {
        title: "The point is practical clarity",
        description:
          "Future of ID documents what was built, what was learned, and what another instructional designer might adapt.",
      },
    ] satisfies LandingCard[],
  },
  principles: {
    eyebrow: "Platform Principles",
    title: "Documented, not performed for attention.",
    intro:
      "These principles guide the course, the Reverse Build sections, and the way AI is discussed across the platform.",
    items: [
      {
        title: "Observed, not predicted",
        description:
          "The platform shares what has been built, tested, changed, and learned through implementation.",
      },
      {
        title: "Built, not theorized",
        description:
          "The work itself is the evidence. Concepts matter when they change real design decisions.",
      },
      {
        title: "Transparent, not performative",
        description:
          "Tradeoffs, limits, AI support, human review, and design constraints are part of the story.",
      },
      {
        title: "Useful, not trendy",
        description:
          "The goal is not to impress people with AI terms. The goal is to make better learning design decisions.",
      },
    ] satisfies LandingCard[],
  },
  inside: {
    eyebrow: "Inside the Platform",
    title: "What you will find inside.",
    intro:
      "The course is organized around practical capabilities and design layers that connect explanation, practice, build decisions, and reflection.",
    items: [
      {
        title: "Guided modules",
        description:
          "Seven capability areas cover AI literacy, performance consulting, analytics, scenarios, adaptive learning, content systems, and trust.",
      },
      {
        title: "Scenario practice",
        description:
          "Each module gives you a place to make design decisions and receive AI-supported feedback.",
      },
      {
        title: "Reverse Build notes",
        description:
          "Design notes explain why each module was built the way it was, including constraints, tradeoffs, and reusable patterns.",
      },
      {
        title: "Reflection prompts",
        description:
          "Reflection sections help you connect the ideas to your own role, tools, and work context.",
      },
    ] satisfies LandingCard[],
  },
  finalCta: {
    eyebrow: "Start Where It Helps",
    title: "Explore the work, then choose your own depth.",
    description:
      "Future of ID is one practitioner path through changing instructional design work. Use it to study real decisions, borrow what fits, and decide what level of AI-enabled practice makes sense for your own context.",
    primaryCta: { label: "Explore the Modules", href: "/course/dashboard" },
    secondaryCta: { label: "Learn About the Creator", href: "/about" },
  },
};
