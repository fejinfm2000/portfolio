import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { PortfolioService } from '../../../service/portfolio.service';
import { IUserData } from '../../../models/userDetails';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-first-template',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './first-template.component.html',
  styleUrl: './first-template.component.scss'
})
export class FirstTemplateComponent implements OnInit, OnDestroy {
  currentUser?: IUserData;
  unSubscribe$ = new Subject();

  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void {
    this.portfolioService.currentUserData.pipe(takeUntil(this.unSubscribe$)).subscribe({
      next: (data) => {
        if (data) {
          this.currentUser = data;
        } else {
          this.currentUser = {}
        }
      }
    })
  }

  onImageError(event: any) {
    event.target.src = 'assets/images/defaultProfile.webp';
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }


}
