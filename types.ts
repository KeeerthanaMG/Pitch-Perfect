export interface SlideContent {
  title: string;
  subtitle?: string;
  points: string[];
  imageUrl: string; // Direct URL to the image
  imageCaption?: string;
  type: 'intro' | 'content' | 'activity' | 'checklist' | 'quote';
  moduleId: number;
}

export interface Module {
  id: number;
  title: string;
}

export const Modules: Module[] = [
  { id: 0, title: "Welcome & Intro" },
  { id: 1, title: "Hackathon Fundamentals" },
  { id: 2, title: "Problem & Market" },
  { id: 3, title: "Solution & Value" },
  { id: 4, title: "Business Thinking" },
  { id: 5, title: "Tech Feasibility" },
  { id: 6, title: "Demo Strategy" },
  { id: 7, title: "Storytelling" },
  { id: 8, title: "Judge Psychology" },
  { id: 9, title: "Mistakes & Best Practices" },
  { id: 10, title: "Hands-on & Wrap-up" },
];