// data/projects.ts
export interface ProjectSummary {
    slug: string;
    title: string;
    description: string;
    thumbnail?: string; // optional image
  }
  
  export const projects: ProjectSummary[] = [
    {
      slug: "portfolio",
      title: "Portfolio Website",
      description: "Showcases my skills, resume, and projects.",
      thumbnail: "/images/portfolio-thumb.png",
    },
    {
      slug: "ecommerce",
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with Next.js & Stripe.",
      thumbnail: "/images/ecommerce-thumb.png",
    },
    {
      slug: "chat-app",
      title: "Chat Application",
      description: "A realtime chat application with Firebase.",
      thumbnail: "/images/chat-thumb.png",
    },
  ];
  