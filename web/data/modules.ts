export type ModuleMetadata = {
  slug: string;
  title: string;
  description: string;
  order: number;
  estimatedTime: string;
  type: 'orientation' | 'module';
  practiceLabel?: string;
};

export const modules = [
  {
    slug: "orientation",
    title: "The Future of Instructional Design",
    description:
      "Introduction to the seven capabilities shaping the next generation of instructional design.",
    order: 0,
    estimatedTime: "10 min",
    type: "orientation",
  },
  {
    slug: "ai-literacy",
    title: "AI Literacy and Agent-Enabled Learning Design",
    description:
      "How AI is changing how learning experiences are designed and delivered.",
    order: 1,
    estimatedTime: "20 min",
    type: "module",
    practiceLabel: "AI Practice",
  },
  {
    slug: "performance-consulting",
    title: "Performance Consulting and Business Alignment",
    description: "Moving from course builder to performance partner.",
    order: 2,
    estimatedTime: "20 min",
    type: "module",
  },
  {
    slug: "learning-analytics",
    title: "Learning Analytics and Evidence-Based Design",
    description: "Using data to design and evaluate learning experiences.",
    order: 3,
    estimatedTime: "20 min",
    type: "module",
  },
  {
    slug: "simulation-design",
    title: "Scenario, Simulation, and Conversation Design",
    description:
      "Designing realistic practice environments for skill development.",
    order: 4,
    estimatedTime: "20 min",
    type: "module",
  },
  {
    slug: "adaptive-learning",
    title: "Adaptive and Personalized Learning Architecture",
    description: "Designing learning systems that adapt to learner needs.",
    order: 5,
    estimatedTime: "20 min",
    type: "module",
  },
  {
    slug: "content-systems",
    title: "Content Systems Thinking and Workflow Automation",
    description: "Building scalable learning content systems.",
    order: 6,
    estimatedTime: "20 min",
    type: "module",
  },
  {
    slug: "human-centered-change",
    title: "Human-Centered Change, Ethics, and Learner Trust",
    description: "Designing learning that supports change and builds trust.",
    order: 7,
    estimatedTime: "20 min",
    type: "module",
  },
];
