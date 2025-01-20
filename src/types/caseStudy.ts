export interface CaseStudy {
  title: string;
  description: string;
  role: string;
  client: string;
  duration: string;
  year: number;
  services: string[];
  thumbnail: string;
  heroImage: string;
  nextProject: {
    slug: string;
    title: string;
    thumbnail: string;
  };
} 