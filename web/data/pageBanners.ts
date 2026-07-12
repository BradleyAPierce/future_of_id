import { modules } from "./modules";

export type PageBannerConfig = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  pills?: string[];
};

export const DEFAULT_BANNER_IMAGE =
  "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/dashboard-banner-overlay-web640x287.jpg";

export const dashboardBanner: PageBannerConfig = {
  title: "Bradley's Current Capability Pathway",
  subtitle:
    "Seven implemented capability areas demonstrating the reusable Future of ID development method.",
  imageUrl: DEFAULT_BANNER_IMAGE,
};

export const orientationBanner: PageBannerConfig = {
  title: "Future of ID Capability Development System",
  subtitle:
    "Identify, develop, apply, and share future-relevant capabilities through a reusable learning architecture.",
  imageUrl:
    "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/orientation-banner-overlay-web640x287.jpg",
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
      "Learn where AI can support your design work, where it falls short, and how to use it with judgment.",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/ai-literacy-banner-overlay-web640x287.jpg",
    pills: ["Module 1", "Design Practice"],
  },
  "performance-consulting": {
    title: "Performance Consulting and Business Alignment",
    subtitle:
      "Learn how to connect course requests to business goals, performance gaps, and real workplace needs.",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/performance-consulting-banner-overlay-web640x287.jpg",
    pills: ["Module 2", "Design Practice"],
  },
  "learning-analytics": {
    title: "Learning Analytics and Evidence-Based Design",
    subtitle:
      "Use data to measure what is working, find gaps, and improve learning designs over time.",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/learning-analytics-banner-overlay-web640x287.jpg",
    pills: ["Module 3", "Design Practice"],
  },
  "simulation-design": {
    title: "Scenario, Simulation, and Conversation Design",
    subtitle:
      "Design realistic scenarios and conversations that help people practice job skills.",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/simulation-design-banner-overlay-web640x287.jpg",
    pills: ["Module 4", "Design Practice"],
  },
  "adaptive-learning": {
    title: "Adaptive and Personalized Learning Architecture",
    subtitle:
      "Design pathways that adjust to your learners' goals, needs, and progress.",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/adaptive-learning-banner-overlay-web640x287.jpg",
    pills: ["Module 5", "Design Practice"],
  },
  "content-systems": {
    title: "Content Systems Thinking and Workflow Automation",
    subtitle:
      "Build content systems that are easier to update, reuse, and manage across programs.",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/content-systems-banner-overlay-web640x287.jpg",
    pills: ["Module 6", "Design Practice"],
  },
  "human-centered-change": {
    title: "Human-Centered Change, Ethics, and Trust",
    subtitle:
      "Design learning experiences that support real behavior change and build trust with your learners.",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/BradleyAPierce/future-of-id-images@main/human-centered-change-banner-overlay-web640x287.jpg",
    pills: ["Module 7", "Design Practice"],
  },
};
