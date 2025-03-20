import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ExperienceCategory } from '../../../models/userDetails';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { PortfolioData } from '../../../models/secondPortfolioDetails';
import { Subject, takeUntil } from 'rxjs';
import { PortfolioService } from '../../../service/portfolio.service';

@Component({
  selector: 'app-second-template',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule, MatCardModule, CommonModule],
  templateUrl: './second-template.component.html',
  styleUrl: './second-template.component.scss'
})
export class SecondTemplateComponent implements OnInit, OnDestroy {
  currentUser?: PortfolioData;
  unSubscribe$ = new Subject();

  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void {
    this.portfolioService.secondPortfolioData.pipe(takeUntil(this.unSubscribe$)).subscribe({
      next: (data) => {
        if (data) {
          this.currentUser = data;
        } else {
          this.currentUser = {}
        }
      }
    })
  }

  onImageError(event: any, imageName: string) {
    event.target.src = `assets/images/${imageName}.webp`;
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }
}
