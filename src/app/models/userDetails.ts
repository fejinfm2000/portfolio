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

export interface IThEducation {
  degree: string;
  university: string;
  years: string;
  details: string[];
}

export interface IThCertification {
  name: string;
  date: string;
}

export interface IThAbout {
  title: string;
  htmlContent: string;
  description: string;
  points: string[];
}

export interface IThHome {
  description: string;
  subTitle: string;
}

export interface IThSkill {
  name: string;
  level: string;
}

export interface IThProject {
  name: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface IThExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface IThAccomplishment {
  title: string;
  date: string;
  description: string;
}

export interface IThContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github: string;
}

export interface IFoProfile {
  name?: string;
  imgName?: string;
  innerHtml?: string;
}

export interface IThProfile {
  name?: string;
  imgName?: string;
  education?: IThEducation[];
  certifications?: IThCertification[];
  about?: IThAbout;
  home?: IThHome;
  skills?: IThSkill[];
  projects?: IThProject[];
  experiences?: IThExperience[];
  accomplishments?: IThAccomplishment[];
  spokenLanguages?: string[];
  programmingLanguages?: string[];
  contactInfo?: IThContactInfo;
}

export interface IThUsers {
  [key: string]: IThProfile;
}

export interface IFoUsers {
  [key: string]: IFoProfile;
}

