import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RichTextComponent } from '../rich-text/rich-text.component';
import { IThProfile } from '../../../models/userDetails';
import { Subject, takeUntil } from 'rxjs';
import { PortfolioService } from '../../../service/portfolio.service';

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
  tabName: string = "home";
  currentUser?: IThProfile;
  unSubscribe$ = new Subject();
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void {
    this.tabName = sessionStorage.getItem('tabName') || "home"

    this.portfolioService.thirdPortfolioData.pipe(takeUntil(this.unSubscribe$)).subscribe({
      next: (data) => {
        if (data) {
          this.currentUser = data;
        } else {
          this.currentUser = {}
        }
      }
    })
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
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }

}
