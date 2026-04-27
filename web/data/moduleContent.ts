export type ModuleLayerSection = {
  id: string;
  title: string;
  description?: string;
  items?: {
    label: string;
    description?: string;
  }[];
};

export type ModuleLayer = {
  title: string;
  badge?: string;
  intro?: string;
  sections: ModuleLayerSection[];
};

export type ModuleContent = {
  slug: string;
  intro: {
    overview: string;
    outcomes?: string[];
  };
  layers: {
    theory: ModuleLayer;
    experience: ModuleLayer;
    reverseEngineering: ModuleLayer;
  };
  reflection?: {
    title: string;
    prompt: string;
  };
};

export const moduleContentBySlug: Record<string, ModuleContent> = {
  "performance-consulting": {
    slug: "performance-consulting",
    intro: {
      overview: "Placeholder overview for this module.",
      outcomes: ["Placeholder outcome 1", "Placeholder outcome 2"],
    },
    layers: {
      theory: {
        title: "Theory",
        badge: "Layer 1",
        intro: "Placeholder framing for the theory layer.",
        sections: [
          {
            id: "definition",
            title: "Capability Definition",
            description: "Placeholder content.",
          },
          {
            id: "business-alignment",
            title: "Business Alignment",
            description: "Placeholder content.",
          },
          {
            id: "theory-bridge",
            title: "L&D Theory Bridge",
            items: [
              {
                label: "HPI / performance improvement",
                description: "Placeholder theory connection.",
              },
              {
                label: "Kirkpatrick",
                description: "Placeholder theory connection.",
              },
              {
                label: "Needs analysis",
                description: "Placeholder theory connection.",
              },
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        badge: "Layer 2",
        intro: "Placeholder framing for the experience layer.",
        sections: [
          {
            id: "activity",
            title: "Interactive Activity",
            description: "Placeholder content.",
          },
          {
            id: "decision-making",
            title: "Applied Decision-Making",
            description: "Placeholder content.",
          },
          {
            id: "feedback",
            title: "Feedback and Insight",
            description: "Placeholder content.",
          },
        ],
      },
      reverseEngineering: {
        title: "Reverse Engineering",
        badge: "Layer 3",
        intro: "Placeholder framing for the reverse engineering layer.",
        sections: [
          {
            id: "instructional-strategy",
            title: "Instructional Strategy",
            description: "Placeholder content.",
          },
          {
            id: "content-structure",
            title: "Content Structure",
            description: "Placeholder content.",
          },
          {
            id: "implementation-notes",
            title: "Technical Implementation Notes",
            description: "Placeholder content.",
          },
        ],
      },
    },
    reflection: {
      title: "Reflection",
      prompt: "Placeholder reflection prompt.",
    },
  },
};
