export type LandingLink = {
  label: string;
  href: string;
};

export type LandingCard = {
  title: string;
  description: string;
  label?: string;
};

export type LandingCapability = {
  label: string;
  title: string;
  description: string;
  focus: string;
};

export type LandingLearningLoopStep = {
  label: string;
  meaning: string;
  description: string;
  order: number;
  icon?: string;
};

export const landingContent = {
  header: {
    navItems: [
      { label: "What it is", href: "#what-it-is" },
      { label: "Different paths", href: "#different-paths" },
      { label: "Capabilities", href: "#capabilities" },
      { label: "Principles", href: "#platform-principles" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "Start Orientation", href: "/course/orientation" },
  },
  hero: {
    eyebrow: "For instructional designers, L&D teams, and career changers",
    title: "Future of ID",
    description:
      "A practical learning platform for moving from course production to next-generation learning systems design.",
    support:
      "Study seven modern capabilities through guided modules, AI-supported practice, Reverse Builds, and transparent design decisions from real instructional design work.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/dashboard-banner-overlay-web640x287.jpg",
    primaryCta: { label: "Start Orientation", href: "/course/orientation" },
    secondaryCta: { label: "Preview Capabilities", href: "#capabilities" },
    proofPoints: [
      "Systems thinking",
      "AI-supported practice",
      "Reverse Builds",
    ],
  },
  learningLoop: {
    eyebrow: "How the Platform Teaches",
    title: "A learning loop built for design judgment.",
    intro:
      "Future of ID connects explanation, practice, design rationale, and reflection so learners can see both the concept and the choices behind the experience.",
    steps: [
      {
        label: "Theory",
        meaning: "Explain",
        description:
          "Start with the concept, why it matters, and how it connects to instructional design work.",
        order: 1,
      },
      {
        label: "Experience",
        meaning: "Apply",
        description:
          "Use scenarios, decisions, or guided activities to practice the idea in context.",
        order: 2,
      },
      {
        label: "Reverse Build",
        meaning: "Reveal",
        description:
          "Inspect the design rationale, tradeoffs, and implementation choices behind the learning experience.",
        order: 3,
      },
      {
        label: "Reflection",
        meaning: "Transfer",
        description:
          "Connect the lesson to your own tools, role, constraints, and future design decisions.",
        order: 4,
      },
    ] satisfies LandingLearningLoopStep[],
  },
  whatIs: {
    eyebrow: "What Future of ID Is",
    title: "A field guide for the next shape of instructional design work.",
    intro:
      "Future of ID helps experienced IDs, L&D professionals, and career-transition learners strengthen the judgment required to design learning systems, not just deliver course assets.",
    items: [
      {
        title: "A practical learning pathway",
        description:
          "The course gives instructional designers a structured way to explore AI literacy, performance consulting, analytics, scenarios, adaptive learning, content systems, and trust.",
      },
      {
        title: "A transparent implementation record",
        description:
          "Reverse Builds show what shaped the work, what was simplified, where AI helped, and where human judgment stayed central.",
      },
      {
        title: "A systems design lens",
        description:
          "The platform connects learning science, workflow decisions, evidence, learner support, and technical constraints into one design conversation.",
      },
      {
        title: "A place to calibrate your path",
        description:
          "The goal is to help you decide what level of AI adoption, technical depth, and system ownership makes sense for your role and context.",
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
    title: "There is more than one credible future for instructional designers.",
    intro:
      "Roles, teams, industries, and interests vary. Future of ID treats technical depth as a set of strategic choices, not a single ladder everyone must climb.",
    items: [
      {
        label: "Foundation",
        title: "AI-assisted writing and review",
        description:
          "Use AI to draft, revise, compare, and improve objectives, scripts, quizzes, storyboards, and support materials.",
      },
      {
        label: "Production",
        title: "Course development workflows",
        description:
          "Improve work in tools like Storyline, Rise, Captivate, or iSpring without needing to build custom systems.",
      },
      {
        label: "Experience",
        title: "Scenarios and feedback",
        description:
          "Design decisions, response options, consequences, and feedback that help people practice real workplace judgment.",
      },
      {
        label: "Support",
        title: "AI-assisted guidance",
        description:
          "Explore feedback systems, coaching prompts, chatbot support, and learner-facing safeguards where they are appropriate.",
      },
      {
        label: "Architecture",
        title: "Custom learning architecture",
        description:
          "Investigate APIs, guardrails, orchestration, content systems, and platform-level workflows when the problem calls for that depth.",
      },
    ] satisfies LandingCard[],
  },
  whyExists: {
    eyebrow: "Why This Exists",
    title: "The profession needs a clearer bridge from commentary to implementation.",
    intro:
      "AI can make content generation faster, but speed does not remove the need for design judgment. Instructional designers still need to define what matters, evaluate outputs, protect trust, and connect learning work to performance.",
    items: [
      {
        title: "The work is expanding unevenly",
        description:
          "Different organizations are adopting AI and learning technology at different speeds, with different risks and constraints.",
      },
      {
        title: "The implementation details are often hidden",
        description:
          "Many conversations skip the build decisions, failed attempts, tradeoffs, and maintenance problems that shape real work.",
      },
      {
        title: "The point is practical clarity",
        description:
          "Future of ID documents what was built, what was learned, and what another designer might adapt for their own learning ecosystem.",
      },
    ] satisfies LandingCard[],
  },
  principles: {
    eyebrow: "Platform Principles",
    title: "Built for judgment, not novelty.",
    intro:
      "These principles guide the course, the Reverse Build sections, and the way AI is discussed across the platform.",
    items: [
      {
        title: "Observed, not predicted",
        description:
          "The platform shares what has been built, tested, changed, and learned through implementation.",
      },
      {
        title: "Implemented, not theorized",
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
    title: "A course structure that turns concepts into design decisions.",
    intro:
      "Each module connects explanation, scenario practice, Reverse Build notes, and reflection so you can see both the learning concept and the system choices behind it.",
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
  capabilities: {
    eyebrow: "Seven Capabilities",
    title: "A strategic preview of the modern ID capability stack.",
    intro:
      "These seven areas extend familiar instructional design strengths into the systems work learning teams are being asked to own: judgment, performance, evidence, practice, adaptation, maintainability, and trust.",
    items: [
      {
        label: "01",
        title: "AI Literacy and Agent-Enabled Learning Design",
        description:
          "Use AI as a design partner without surrendering quality standards, learner context, accessibility, or human review.",
        focus: "Judgment",
      },
      {
        label: "02",
        title: "Performance Consulting and Business Alignment",
        description:
          "Move upstream from course requests to performance gaps, stakeholder outcomes, workplace constraints, and measurable value.",
        focus: "Performance",
      },
      {
        label: "03",
        title: "Learning Analytics and Evidence-Based Design",
        description:
          "Use signals from learner behavior, practice, and outcomes to improve learning experiences over time.",
        focus: "Evidence",
      },
      {
        label: "04",
        title: "Scenario, Simulation, and Conversation Design",
        description:
          "Create practice environments where learners make decisions, receive feedback, and build workplace judgment.",
        focus: "Practice",
      },
      {
        label: "05",
        title: "Adaptive and Personalized Learning Architecture",
        description:
          "Design pathways that respond to learner goals, confidence, readiness, and progress without losing instructional coherence.",
        focus: "Adaptation",
      },
      {
        label: "06",
        title: "Content Systems Thinking and Workflow Automation",
        description:
          "Structure learning content so it can be reused, updated, governed, and maintained across programs.",
        focus: "Maintainability",
      },
      {
        label: "07",
        title: "Human-Centered Change, Ethics, and Learner Trust",
        description:
          "Protect transparency, agency, inclusion, and trust as AI-supported learning experiences become more complex.",
        focus: "Trust",
      },
    ] satisfies LandingCapability[],
  },
  finalCta: {
    eyebrow: "Start With Orientation",
    title: "Enter the course with the full system in view.",
    description:
      "The orientation frames the shift from course builder to learning systems designer, then points you into the seven capability modules. Use the course to study real decisions, borrow what fits, and choose the level of AI-enabled practice that makes sense for your context.",
    primaryCta: { label: "Start Orientation", href: "/course/orientation" },
    secondaryCta: { label: "View Course Dashboard", href: "/course/dashboard" },
  },
};
