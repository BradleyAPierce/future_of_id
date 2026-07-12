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
    cta: { label: "Start with Orientation", href: "/course/orientation" },
  },
  hero: {
    eyebrow: "For instructional designers, L&D teams, and career changers",
    title: "Future of ID",
    description:
      "A capability development system for moving from course production toward learning systems design through a repeatable method and reusable learning architecture.",
    support:
      "Bradley's current seven-capability pathway is the first complete demonstration of the system—not a universal or permanent prescription for every instructional designer.",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/dashboard-banner-overlay-web640x287.jpg",
    primaryCta: { label: "Start with Orientation", href: "/course/orientation" },
    secondaryCta: { label: "Explore Capability Map", href: "/course/dashboard" },
    proofPoints: [
      "Human judgment",
      "AI-supported practice",
      "Inspect the Build",
    ],
  },
  learningLoop: {
    eyebrow: "How the Platform Teaches",
    title: "Learn, practice, inspect the build, then apply it.",
    intro:
      "Future of ID uses a reusable learning architecture: Theory, Experience, Reverse Build, and Reflection. Each module moves from understanding to practice and feedback, then opens the design decisions behind the experience so learners can transfer the insight into their own work.",
    steps: [
      {
        label: "Learn",
        meaning: "Theory",
        description:
          "Start with the concept, why it matters, and how it connects to instructional design work.",
        order: 1,
      },
      {
        label: "Practice",
        meaning: "Experience",
        description:
          "Use scenarios, decisions, or guided activities to test the idea in context.",
        order: 2,
      },
      {
        label: "Inspect the Build",
        meaning: "Reverse Build",
        description:
          "Open the design rationale, tradeoffs, and implementation choices behind the learning experience.",
        order: 3,
      },
      {
        label: "Apply",
        meaning: "Reflection",
        description:
          "Connect the lesson to your own tools, role, constraints, and future design decisions.",
        order: 4,
      },
    ] satisfies LandingLearningLoopStep[],
  },
  whatIs: {
    eyebrow: "What Future of ID Is",
    title: "A repeatable system for intentional capability development.",
    intro:
      "Future of ID helps practitioners identify, develop, apply, and share future-relevant capabilities through a reusable learning architecture. Sharing means making professional reasoning, artifacts, reflections, and design lessons understandable for others to inspect or adapt.",
    items: [
      {
        title: "Practical Learning Pathway",
        description:
          "Explore Bradley's current seven-capability pathway as a complete demonstration of the method, not as the only valid pathway.",
      },
      {
        title: "Transparent Implementation",
        description:
          "Use Reverse Builds to see what shaped the work, what was simplified, where AI helped, and where human judgment stayed central.",
      },
      {
        title: "Systems Thinking",
        description:
          "Connect learning science, workflow decisions, evidence, learner support, and technical constraints in one design conversation.",
      },
      {
        title: "Calibrate Your Future",
        description:
          "Choose the level of AI adoption, technical depth, and system ownership that fits your role and context.",
      },
    ] satisfies LandingCard[],
  },
  whatIsNot: {
    eyebrow: "What Future of ID Is Not",
    title: "Not a prediction platform. Not a universal prescription.",
    intro:
      "This is not a claim that every instructional designer needs the same capabilities, technical depth, or professional path. The current platform does not diagnose needs or generate personalized pathways automatically.",
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
      "Roles, responsibilities, organizations, industries, career directions, and goals vary. Future of ID meets practitioners where they are through practitioner-led professional calibration: understanding current context, experience, responsibilities, goals, and development needs before identifying relevant growth areas. Different practitioners may build different pathways—and revisit them as their work changes—while reusing the method and learning architecture; the platform does not diagnose needs, recommend capabilities, generate pathways, or personalize the experience automatically.",
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
          "Bradley's current implemented pathway covers AI literacy, performance consulting, analytics, scenarios, adaptive learning, content systems, and trust.",
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
    eyebrow: "Current Implemented Pathway",
    title: "Bradley's seven-capability demonstration.",
    intro:
      "These seven areas form Bradley's launch-stable professional pathway and the first complete demonstration of the capability development system. They are coherent and practical, but not universal, exhaustive, or the permanent boundary of Future of ID.",
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
    eyebrow: "Choose Your Entry Point",
    title: "Start with the frame, or explore the capability map.",
    description:
      "Use Orientation to understand the reusable method and Bradley's current pathway. Use the Dashboard to browse the seven implemented capabilities and choose the area that fits your current questions. Neither path is required before the other.",
    primaryCta: { label: "Start with Orientation", href: "/course/orientation" },
    secondaryCta: { label: "Explore Capability Map", href: "/course/dashboard" },
  },
};
