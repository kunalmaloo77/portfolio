export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  techStack: TechStackProps;
  achievements: AchievementsProps;
}

export interface TechStackCategory {
  name: string;
  items: string[];
}

export interface TechStackProps {
  title: string;
  categories: TechStackCategory[];
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
  technologies: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  description: string;
}

export interface AboutProps {
  description: string;
  image: string;
  skills: Object;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

export interface Achievement {
  title: string;
  description: string;
  link?: string;
  metric?: string; // e.g., "300+", "95%", "10K+"
}

export interface AchievementsProps {
  title: string;
  items: Achievement[];
}
