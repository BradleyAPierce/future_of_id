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
  practiceGuidance?: string;
  sections: ModuleLayerSection[];
};

export type ModuleContent = {
  slug: string;
  intro: {
    learnerQuestion?: string;
    takeaway?: string;
    overview: string;
    outcomes?: string[];
  };
  frameworks?: {
    afterIntro?: string;
    beforeDesignPractice?: string;
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
