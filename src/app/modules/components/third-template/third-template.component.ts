import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RichTextComponent } from '../rich-text/rich-text.component';

@Component({
  selector: 'app-third-template',
  imports: [
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    RichTextComponent
  ],
  templateUrl: './third-template.component.html',
  styleUrl: './third-template.component.scss'
})
export class ThirdTemplateComponent implements OnInit, OnDestroy {
  isSidebarOpen = false;
  name = "Fejin"

  tabName: string = "home";
  education = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science',
      university: 'XYZ University, [Your Location]',
      years: '2018 - 2022',
      details: [
        'Specialized in Software Development and Database Management.',
        'Developed multiple projects focusing on scalable web applications.',
        'Active participant in coding competitions and hackathons.'
      ]
    },
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science',
      university: 'XYZ University, [Your Location]',
      years: '2018 - 2022',
      details: [
        'Specialized in Software Development and Database Management.',
        'Developed multiple projects focusing on scalable web applications.',
        'Active participant in coding competitions and hackathons.'
      ]
    },
    {
      degree: 'Bachelor of Technology (B.Tech) in Computer Science',
      university: 'XYZ University, [Your Location]',
      years: '2018 - 2022',
      details: [
        'Specialized in Software Development and Database Management.',
        'Developed multiple projects focusing on scalable web applications.',
        'Active participant in coding competitions and hackathons.'
      ]
    },
  ];

  certifications = [
    { name: 'Java Certification', date: 'Expected 2025' },
    { name: 'Angular Full Stack Development Certification', date: 'Planned 2025' },
    { name: 'Advanced SQL & Database Optimization', date: '2023' },
    { name: 'DevOps & CI/CD Implementation', date: '2024' }
  ];

  aboutTitle = 'About Me';
  aboutHtmlContent = `
<ul><li><strong>asasas</strong>a<u>sasa</u></li></ul>`;
  aboutDescription = `Ever since I wrote my first line of code, I've been passionate about solving real-world problems through technology. 
  With a deep interest in software development, I started my journey by exploring various programming languages and frameworks. 
  Over the years, I have honed my skills in Full Stack Development, specializing in Angular, Java, Spring Boot, and SQL/MongoDB. 
  I have worked on high-performance web applications, ensuring scalability and security while delivering an intuitive user experience.`;
  homeDescription = `I specialize in building scalable, high-performance web applications
                    with a strong focus on clean architecture, best coding practices,
                    and DevOps strategies. With expertise in Angular, Java, Spring Boot,
                    SQL, and MongoDB, I create seamless digital experiences that drive
                    business impact.`;

  aboutPoints = [
    "Let's connect and build something amazing together! 🚀",
    "Passionate about software architecture and best coding practices.",
    "Always eager to learn new technologies and improve performance.",
    "Mentoring aspiring developers and contributing to open-source projects."
  ];
  homeSubTitle = `Full Stack Developer | Angular | Java | DevOps Enthusiast`;

  skills = [
    { name: 'Angular', level: 'Advanced' },
    { name: 'Java', level: 'Expert' },
    { name: 'Spring Boot', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'DevOps Practices', level: 'Intermediate' },
    { name: 'CI/CD Pipelines', level: 'Advanced' },
    { name: 'Microservices', level: 'Intermediate' }
  ];

  projects = [
    {
      name: 'Progress Tracker App',
      duration: '2024 - Present',
      description: 'A web application to track progress efficiently using Angular, Spring Boot, and SQL.',
      technologies: ['Angular', 'Spring Boot', 'SQL', 'Netlify', 'Render']
    },
    {
      name: 'Secure Banking Web App',
      duration: '2023 - 2024',
      description: 'A scalable and secure banking application ensuring high performance and reliability.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'OpenShift']
    },
    {
      name: 'Internal Course Management System',
      duration: '2022 - 2023',
      description: 'A platform to streamline internal training and learning processes.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'CI/CD Pipelines']
    }
  ];

  experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Ltd.',
      duration: 'Jan 2023 - Present',
      description: [
        'Developed scalable and high-performance web applications using Angular and Spring Boot.',
        'Implemented RESTful APIs, optimized database queries, and improved application performance.',
        'Integrated CI/CD pipelines and automated deployments for efficient release cycles.',
        'Collaborated with cross-functional teams to ensure smooth product development.'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Innovatech Systems',
      duration: 'Jul 2021 - Dec 2022',
      description: [
        'Built dynamic web applications with Angular and Node.js, ensuring responsive UI/UX.',
        'Worked on backend services using Express.js and MongoDB for data management.',
        'Enhanced application security by implementing OAuth and JWT authentication.',
        'Participated in Agile development, sprint planning, and code reviews.'
      ]
    }
  ];

  accomplishments = [
    { title: 'Java Certification', date: 'Expected 2025', description: 'Certification in Java programming to enhance backend expertise.' },
    { title: 'Angular Full Stack Development Certification', date: 'Planned 2025', description: 'Comprehensive certification covering front-end and back-end development with Angular and Spring Boot.' },
    { title: 'Advanced SQL & Database Optimization', date: '2023', description: 'Completed a professional course on database optimization techniques for SQL-based systems.' },
    { title: 'DevOps & CI/CD Implementation', date: '2024', description: 'Implemented CI/CD pipelines for automated deployments and efficient software delivery.' },
    { title: 'Hackathon Winner', date: '2022', description: 'Won 1st place in a national hackathon by building a scalable web solution.' }
  ];

  spokenLanguages = ['English', 'Spanish', 'French'];
  programmingLanguages = ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Python', 'C++'];

  contactInfo = {
    email: 'your.email@example.com',
    phone: '+123 456 7890',
    location: 'Your City, Your Country',
    linkedIn: 'https://www.linkedin.com/in/yourprofile',
    github: 'https://github.com/yourgithub',
  };
  ngOnInit(): void {
    this.tabName = sessionStorage.getItem('tabName') || "home"
  }


  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  change(tabName: string) {
    this.isSidebarOpen = !this.isSidebarOpen;
    sessionStorage.setItem('tabName', tabName)
    this.tabName = tabName;
  }
  onImageError(event: any, imageName: string) {
    event.target.src = `assets/images/${imageName}.webp`;
  }

  ngOnDestroy(): void {
    sessionStorage.clear();
  }

}
