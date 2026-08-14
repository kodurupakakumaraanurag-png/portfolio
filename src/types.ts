export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: 'Excel & Dashboards' | 'AI & ML' | 'Data Analytics';
  image: string;
  tags: string[];
  metrics: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  architecture: string[];
}

export interface Skill {
  name: string;
  category: 'Programming & Analytics' | 'Data Visualization & BI' | 'Databases & SQL' | 'Machine Learning & Tools';
  level: number; // percentage
  experienceYears: string;
  iconName: string;
  description: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Lead';
  description: string;
  achievements: string[];
  skillsUsed: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}
