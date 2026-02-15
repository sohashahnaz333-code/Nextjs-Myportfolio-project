export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}


export type Blog = {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  content: string   // 👈 ADD THIS
}
