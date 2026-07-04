export type HomepageProofAsset = {
  eyebrow: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  href?: string;
};

export const HOMEPAGE_EXPERIENCE_IN_ACTION_IMAGE =
  "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/Experience-in-Action-LandscapeV4.jpg";

export const HOMEPAGE_LEARNING_SYSTEM_FRAMEWORK_IMAGE =
  "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/future-of-id-learning-system-portrait.png";

export const homepageProofAssets = {
  dashboard: {
    eyebrow: "Product proof",
    title: "Experience, feedback, and Reverse Build in one learning loop.",
    description:
      "Future of ID teaches through experience: learners practice, receive AI-supported feedback, reflect on their judgment, and then use Reverse Build to inspect why the experience was designed that way.",
    imageUrl: HOMEPAGE_EXPERIENCE_IN_ACTION_IMAGE,
    imageAlt:
      "Experience in Action framework showing the relationship between the learner experience, AI feedback, reflection, and Reverse Build design rationale.",
    caption:
      "Experience in Action: practice, AI-supported feedback, reflection, and Reverse Build design rationale.",
    href: "/course/dashboard",
  },
  learningSystemFramework: {
    eyebrow: "Experience framework",
    title: "How Future of ID frames learning system design.",
    description:
      "A framework view of how practical learning, implementation transparency, systems thinking, and professional calibration fit together.",
    imageUrl: HOMEPAGE_LEARNING_SYSTEM_FRAMEWORK_IMAGE,
    imageAlt:
      "Future of ID learning system framework graphic showing the relationship between practical learning, transparent implementation, systems thinking, and professional calibration.",
    caption:
      "Framework view: the section teaches the shape of the learning system before asking learners to explore it.",
  },
} satisfies Record<string, HomepageProofAsset>;
