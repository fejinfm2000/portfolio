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
  experienceCategories: ExperienceCategory[] = [
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
        { name: 'PostgreSQL', level: 'Basic' },
        { name: 'Node JS', level: 'Intermediate' },
        { name: 'Express JS', level: 'Intermediate' },
        { name: 'Git', level: 'Intermediate' }
      ]
    }
  ];

  projectCategories = [
    {
      title: 'Project One',
      des: 'Project One',
    },
    {
      title: 'Project Two',
      des: 'Project One',
    },
    {
      title: 'Project Three',
      des: 'Project One',
    }
  ];
  onImageError(event: any, imageName: string) {
    event.target.src = `assets/images/${imageName}.webp`;
  }
}
