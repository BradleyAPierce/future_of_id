import { modules } from "./modules";

export type PageBannerConfig = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  pills?: string[];
};

export const DEFAULT_BANNER_IMAGE =
  "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/dashboard-banner-overlay-web640x287.jpg";

export const dashboardBanner: PageBannerConfig = {
  title: "Future of Instructional Design",
  subtitle:
    "A guided learning experience for practicing AI, analytics, systems, and human-centered capabilities shaping modern instructional design.",
  imageUrl: DEFAULT_BANNER_IMAGE,
};

export const orientationBanner: PageBannerConfig = {
  title: "The Future of Instructional Design",
  subtitle:
    "A guided experience for exploring the capabilities instructional designers need as AI, analytics, systems thinking, and human-centered change reshape the field.",
  imageUrl:
    "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/orientation-banner-overlay-web640x287.jpg",
  pills: ["Orientation"],
};

export const moduleBannersBySlug: Record<string, PageBannerConfig> = {
  ...Object.fromEntries(
    modules
      .filter((module) => module.type === "module")
      .map((module) => [
        module.slug,
        {
          title: module.title,
          subtitle: module.description,
          imageUrl: DEFAULT_BANNER_IMAGE,
          pills: [
            `Module ${module.order}`,
            ...(module.practiceLabel ? [module.practiceLabel] : []),
          ],
        },
      ]),
  ),

  "ai-literacy": {
    title: "AI Literacy and Agent-Enabled Learning Design",
    subtitle:
      "How AI is changing how learning experiences are designed and delivered.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/ai-literacy-banner-overlay-web640x287.jpg",
    pills: ["Module 1", "AI Practice"],
  },
  "performance-consulting": {
    title: "Performance Consulting and Business Alignment",
    subtitle: "Moving from course builder to performance partner.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/performance-consulting-banner-overlay-web640x287.jpg",
    pills: ["Module 2", "AI Practice"],
  },
  "learning-analytics": {
    title: "Learning Analytics and Evidence-Based Design",
    subtitle: "Using data to design and evaluate learning experiences.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/learning-analytics-banner-overlay-web640x287.jpg",
    pills: ["Module 3", "AI Practice"],
  },
  "simulation-design": {
    title: "Scenario, Simulation, and Conversation Design",
    subtitle:
      "Designing realistic practice environments for skill development.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/simulation-design-banner-overlay-web640x287.jpg",
    pills: ["Module 4", "AI Practice"],
  },
  "adaptive-learning": {
    title: "Adaptive and Personalized Learning Architecture",
    subtitle: "Designing learning systems that adapt to learner needs.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/adaptive-learning-banner-overlay-web640x287.jpg",
    pills: ["Module 5", "AI Practice"],
  },
  "content-systems": {
    title: "Content Systems Thinking and Workflow Automation",
    subtitle: "Building scalable learning content systems.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/content-systems-banner-overlay-web640x287.jpg",
    pills: ["Module 6", "AI Practice"],
  },
  "human-centered-change": {
    title: "Human-Centered Change, Ethics, and Learner Trust",
    subtitle: "Designing learning that supports change and builds trust.",
    imageUrl:
      "https://raw.githubusercontent.com/BradleyAPierce/future-of-id-images/main/human-centered-change-banner-overlay-web640x287.jpg",
    pills: ["Module 7", "AI Practice"],
  },
};
