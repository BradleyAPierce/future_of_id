export type ModuleMetadata = {
  slug: string;
  title: string;
  description: string;
  order: number;
  estimatedTime: string;
  type: 'orientation' | 'module';
  practiceLabel?: string;
};

export const modules: ModuleMetadata[] = [
  {
    slug: "orientation",
    title: "The Future of Instructional Design",
    description:
      "An introduction to the seven core capabilities instructional designers need to work effectively with AI.",
    order: 0,
    estimatedTime: "10 min",
    type: "orientation",
  },
  {
    slug: "ai-literacy",
    title: "AI Literacy and Agent-Enabled Learning Design",
    description:
      "Learn where AI can support your design work, where it falls short, and how to use it with judgment.",
    order: 1,
    estimatedTime: "20 min",
    type: "module",
    practiceLabel: "Design Practice",
  },
  {
    slug: "performance-consulting",
    title: "Performance Consulting and Business Alignment",
    description:
      "Learn how to connect course requests to business goals, performance gaps, and real workplace needs.",
    order: 2,
    estimatedTime: "20 min",
    type: "module",
    practiceLabel: "Design Practice",
  },
  {
    slug: "learning-analytics",
    title: "Learning Analytics and Evidence-Based Design",
    description:
      "Use data to measure what is working, find gaps, and improve learning designs over time.",
    order: 3,
    estimatedTime: "20 min",
    type: "module",
    practiceLabel: "Design Practice",
  },
  {
    slug: "simulation-design",
    title: "Scenario, Simulation, and Conversation Design",
    description:
      "Design realistic scenarios and conversations that help people practice job skills.",
    order: 4,
    estimatedTime: "20 min",
    type: "module",
    practiceLabel: "Design Practice",
  },
  {
    slug: "adaptive-learning",
    title: "Adaptive and Personalized Learning Architecture",
    description:
      "Design pathways that adjust to your learners' goals, needs, and progress.",
    order: 5,
    estimatedTime: "20 min",
    type: "module",
    practiceLabel: "Design Practice",
  },
  {
    slug: "content-systems",
    title: "Content Systems Thinking and Workflow Automation",
    description:
      "Build content systems that are easier to update, reuse, and manage across programs.",
    order: 6,
    estimatedTime: "20 min",
    type: "module",
    practiceLabel: "Design Practice",
  },
  {
    slug: "human-centered-change",
    title: "Human-Centered Change, Ethics, and Trust",
    description:
      "Design learning experiences that support real behavior change and build trust with your learners.",
    order: 7,
    estimatedTime: "20 min",
    type: "module",
    practiceLabel: "Design Practice",
  },
];
