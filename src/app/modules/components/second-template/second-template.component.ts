import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ExperienceCategory } from '../../../models/userDetails';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-second-template',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule, MatCardModule, CommonModule],
  templateUrl: './second-template.component.html',
  styleUrl: './second-template.component.scss'
})
export class SecondTemplateComponent {
  resumeDetails = {
    name: "Fejin FM",
    greeting: "Hello, I'm",
    role: "Full Stack Developer",
    resumeLink: "https://drive.google.com/file/d/1GqB_UUYArKCdhLVpV5sMBpHX6i_p7nVC/view?usp=sharing",
    linkedInUrl: "https://www.linkedin.com/in/your-profile",
    githubUrl: "https://github.com/",
    aboutImage: " ",
    educationList: ["BE. Computer Science Engineering Degree"],
    experienceList: ['3+ years in Full Stack Development'],
    aboutMeContentList: [
      "Ever since I wrote my first line of code, I’ve been passionate about solving real-world problems through technology. With a deep interest in software development, I started my journey by exploring various programming languages and frameworks.",
      "Over the years, I have honed my skills in Full Stack Development, specializing in Angular, Java, Spring Boot, and SQL/MongoDB. I have worked on high-performance web applications, ensuring scalability and security while delivering an intuitive user experience.",
      "Beyond coding, I enjoy collaborating with teams, learning new technologies, and implementing best practices in DevOps and software architecture. My goal is to build robust and efficient solutions that make a difference.",
      "In my free time, I love exploring open-source projects, mentoring aspiring developers, and staying updated with the latest trends in web development and cloud computing.",
      "Let’s connect and build something amazing together! 🚀"
    ],
    mailTo: "fejinfm2000@gmail.com",
    email: "fejinfm2000@gmail.com",
    experienceCategories: [
      {
        title: 'Frontend Development',
        skills: [
          { name: 'HTML', level: 'Experienced' },
          { name: 'CSS', level: 'Experienced' },
          { name: 'SASS', level: 'Intermediate' },
          { name: 'JavaScript', level: 'Basic' },
          { name: 'TypeScript', level: 'Basic' },
          { name: 'Material UI', level: 'Intermediate' }
        ]
      },
      {
        title: 'Backend Development',
        skills: [
          { name: 'Java', level: 'Intermediate' },
          { name: 'Git', level: 'Intermediate' }
        ]
      },
      {
        title: 'Data Base',
        skills: [
          { name: 'SQL', level: 'Intermediate' },
          { name: 'Express JS', level: 'Intermediate' },
        ]
      }
    ],
    projectCategories: [
      {
        title: 'Progress Tracker Web App',
        des: 'A scalable and high-performance progress tracking application using Angular and Spring Boot.',
        gitLink: "",
        demoLink: ""
      },
      {
        title: 'Banking Web Application',
        des: 'A secure banking application with role-based authentication and transaction management.',
        gitLink: "",
        demoLink: ""
      },
      {
        title: 'Portfolio Template page',
        des: 'A scalable Portfolio Template view only web page application using Angular.',
        gitLink: "",
        demoLink: ""
      }
    ]
  };
  onImageError(event: any, imageName: string) {
    event.target.src = `assets/images/${imageName}.webp`;
  }
}
