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
  imageUrl: string;
  alt: string;
  status: LearningFrameworkStatus;
  intendedUses: LearningFrameworkUse[];
};

const GITHUB_IMAGE_BASE =
  "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main";

export const learningFrameworks = [
  {
    id: "learning-system",
    title: "Learning System",
    mentalModel:
      "Future of ID as a connected learning system where practical learning, transparent implementation, systems thinking, and professional calibration reinforce one another.",
    transformationalQuestion:
      "How might I move from creating course assets to designing connected learning systems?",
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
      "Instructional designers can grow into future-ready practice through multiple credible paths rather than one prescribed technical ladder.",
    transformationalQuestion:
      "Which future-ready instructional design path fits my role, context, and level of technical ownership?",
    imageUrl: `${GITHUB_IMAGE_BASE}/Different-Paths-Landscape.jpg`,
    alt: "Different Paths framework showing multiple credible routes for instructional designers developing future-ready capabilities.",
    status: "active",
    intendedUses: ["homepage", "orientation", "downloads", "presentations"],
  },
  {
    id: "capability-ecosystem",
    title: "Stronger Together",
    mentalModel:
      "The seven Future of ID capabilities work as an ecosystem of judgment, evidence, systems thinking, and human-centered practice.",
    transformationalQuestion:
      "How do these capabilities connect into a broader instructional design practice instead of isolated topics?",
    imageUrl: `${GITHUB_IMAGE_BASE}/Stronger-Together-Landscape.jpg`,
    alt: "Capability Ecosystem framework showing the seven Future of ID capabilities as connected parts of a broader instructional design practice.",
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
