export type HomepageProofAsset = {
  eyebrow: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  href?: string;
  cropBottom?: boolean;
};

export const HOMEPAGE_DASHBOARD_PROOF_IMAGE =
  "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/dashboard-banner-overlay-web640x287.jpg";

export const HOMEPAGE_LEARNING_SYSTEM_FRAMEWORK_IMAGE =
  "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/future-of-id-learning-system-portrait.png";

export const homepageProofAssets = {
  dashboard: {
    eyebrow: "Product proof",
    title: "A real learning product, not a static article.",
    description:
      "The dashboard gives learners an open capability map so they can start with orientation or choose the module that matches their current question.",
    imageUrl: HOMEPAGE_DASHBOARD_PROOF_IMAGE,
    imageAlt:
      "Future of ID dashboard preview showing the course environment and capability-based learning experience.",
    caption: "Dashboard preview: open access to the guided capability map.",
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
    cropBottom: true,
  },
} satisfies Record<string, HomepageProofAsset>;
