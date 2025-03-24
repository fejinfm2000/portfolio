import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-third-template',
  imports: [
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
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
