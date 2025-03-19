export interface IUserProfile {
  name: string;
  profileName: string;
  role: string;
  experience: string;
  location: ILocation;
  social_links: ISocialLinks;
  contact: IContact;
}

export interface ILocation {
  name: string;
  mapLink: string;
}

export interface ISocialLinks {
  globe: string;
  twitter: string;
  instagram: string;
  envelope: string;
  share: string;
  location: string;
}

export interface IContact {
  message: boolean;
  share: boolean;
}

export interface IUserSections {
  myStory: IMyStory;
  skills: ISkillCategory[];
  projects: IProject[];
  experience: IExperience[];
}

export interface IMyStory {
  storyInPara: string;
  storyInList: string[];
}

export interface ISkillCategory {
  name: string;
  items: string[];
}

export interface IProject {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface IExperience {
  company: string;
  role: string;
  duration: string;
  technologies: string[];
  description: string;
}

export interface IUserData {
  profile?: IUserProfile;
  skills?: string[];
  sections?: IUserSections;
}

export interface Users {
  [key: string]: IUserData;
}

export interface ISkill {
  name: string;
  level: string;
}

export interface ExperienceCategory {
  title: string;
  skills: ISkill[];
}
