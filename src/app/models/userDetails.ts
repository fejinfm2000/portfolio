export interface IUserProfile {
    name: string;
    profileName: string;
    role: string;
    experience: string;
    location: string;
    social_links: ISocialLinks;
    contact: IContact;
  }
  
  export interface ISocialLinks {
    website: string;
    twitter: string;
    instagram: string;
  }
  
  export interface IContact {
    message: boolean;
    share: boolean;
  }
  
  export interface IUserSections {
    myStory: string;
    skills: any[];
    projects: any[];
    experience: any[];
  }
  
  export interface IUserData {
    profile?: IUserProfile;
    skills?: string[];
    sections?: IUserSections;
  }
  
  export interface Users {
    [key: string]: IUserData;
  }
  