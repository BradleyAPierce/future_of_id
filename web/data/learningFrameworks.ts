export type LearningFrameworkStatus = "active" | "draft";

export type LearningFrameworkUse =
  | "homepage"
  | "orientation"
  | "modules"
  | "downloads"
  | "presentations";

export type LearningFramework = {
  id: string;
  title: string;
  mentalModel: string;
  transformationalQuestion: string;
  imageUrl?: string;
  alt?: string;
  status: LearningFrameworkStatus;
  intendedUses: LearningFrameworkUse[];
};

const GITHUB_IMAGE_BASE =
  "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main";

export const learningFrameworks = [
  {
    id: "human-judgment-in-the-age-of-ai",
    title: "Human Judgment in the Age of AI",
    mentalModel:
      "AI can accelerate analysis, drafting, feedback, and iteration, but human judgment remains responsible for purpose, ethics, context, quality, and consequence.",
    transformationalQuestion:
      "What should instructional designers own when AI can generate more of the work?",
    imageUrl: `${GITHUB_IMAGE_BASE}/Human-Judgement-in-the-Age-of-AI.jpg`,
    alt: "Human Judgment in the Age of AI framework showing professional judgment as a compass for navigating learning science, human needs, business context, AI capability, professional experience, and systems thinking.",
    status: "active",
    intendedUses: ["homepage", "orientation", "modules", "presentations"],
  },
  {
    id: "learning-system",
    title: "Capability Development System",
    mentalModel:
      "Future of ID uses a repeatable method and reusable Theory, Experience, Reverse Build, and Reflection architecture to develop future-relevant capabilities.",
    transformationalQuestion:
      "How can I identify, develop, apply, and share capabilities relevant to my professional context?",
    imageUrl: `${GITHUB_IMAGE_BASE}/future-of-id-learning-system-portrait.png`,
    alt: "Future of ID learning system framework showing practical learning, transparent implementation, systems thinking, and professional calibration.",
    status: "active",
    intendedUses: ["homepage", "orientation", "presentations"],
  },
  {
    id: "experience-in-action",
    title: "Experience in Action",
    mentalModel:
      "A learner moves through experience, AI-supported feedback, reflection, and Reverse Build to connect practice with design rationale.",
    transformationalQuestion:
      "How does the learning experience help me practice judgment and then understand why it was designed that way?",
    imageUrl: `${GITHUB_IMAGE_BASE}/Experience-in-Action-LandscapeV4.jpg`,
    alt: "Experience in Action framework showing the relationship between the learner experience, AI feedback, reflection, and Reverse Build design rationale.",
    status: "active",
    intendedUses: ["homepage", "orientation", "modules", "presentations"],
  },
  {
    id: "different-paths",
    title: "Different Paths",
    mentalModel:
      "Practitioners may select different capability areas based on role, responsibilities, organization, industry, career direction, and goals while preserving the same development method.",
    transformationalQuestion:
      "Which capabilities matter in my context, and how might I organize them into an intentional pathway?",
    imageUrl: `${GITHUB_IMAGE_BASE}/Different-Paths-Landscape.jpg`,
    alt: "Different Paths framework showing multiple credible routes for instructional designers developing future-ready capabilities.",
    status: "active",
    intendedUses: ["homepage", "orientation", "downloads", "presentations"],
  },
  {
    id: "capability-ecosystem",
    title: "Stronger Together",
    mentalModel:
      "Bradley's current seven capabilities work as the first complete demonstration of an ecosystem of judgment, evidence, systems thinking, and human-centered practice.",
    transformationalQuestion:
      "What does this implemented pathway demonstrate, and which capability areas might change in another practitioner's context?",
    imageUrl: `${GITHUB_IMAGE_BASE}/Stronger-Together-Landscape.jpg`,
    alt: "Capability Ecosystem framework showing Bradley's current seven Future of ID capabilities as the first complete demonstration of a reusable capability development system.",
    status: "active",
    intendedUses: ["homepage", "orientation", "modules", "downloads", "presentations"],
  },
  {
    id: "reverse-build",
    title: "Reverse Build",
    mentalModel:
      "Reverse Build makes design decisions visible by showing the rationale, tradeoffs, constraints, and human judgment behind a learning experience.",
    transformationalQuestion:
      "What can I learn by inspecting the design choices behind the experience, not only by completing the activity?",
    imageUrl: `${GITHUB_IMAGE_BASE}/Reverse-Build-LandscapeV1.jpg`,
    alt: "Reverse Build framework showing how design rationale, implementation choices, and instructional tradeoffs can be inspected after a learning experience.",
    status: "active",
    intendedUses: ["modules", "downloads", "presentations"],
  },
] satisfies LearningFramework[];

export const learningFrameworksById = Object.fromEntries(
  learningFrameworks.map((framework) => [framework.id, framework]),
) as Record<string, LearningFramework>;
