export interface Skill {
  name: string;
  level: string;
}

export interface ExperienceCategory {
  title: string;
  skills: Skill[];
}

export interface ProjectCategory {
  title: string;
  des: string;
  gitLink: string;
  demoLink: string;
}


export interface PortfolioData {
  name?: string;
  greeting?: string;
  role?: string;
  resumeLink?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  aboutImage?: string;
  educationList?: string[];
  experienceList?: string[];
  aboutMeContentList?: string[];
  mailTo?: string;
  email?: string;
  experienceCategories?: ExperienceCategory[];
  projectCategories?: ProjectCategory[];
}


export interface ISecondTemplatePortfolio {
  [key: string]: PortfolioData;
}
