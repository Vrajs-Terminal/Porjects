/**
 * Core TypeScript interfaces for Vraj Amin's Developer Portfolio
 */

export type ProjectCategory = 'web-apps' | 'frontend' | 'fullstack' | 'ui-ux';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  technologies?: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  certifications: string[];
  skills: {
    programming: string[];
    webTech: string[];
    frameworks: string[];
    testing: string[];
    os: string[];
  };
  softSkills: string[];
  languages: string[];
  education: string;
  expectedGraduation: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  portraitImage: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'frontend' | 'fullstack' | 'freelance' | 'internship';
  message: string;
  timestamp: Date;
}
