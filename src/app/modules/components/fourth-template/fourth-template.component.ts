import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioService } from '../../../service/portfolio.service';
import { Subject, takeUntil } from 'rxjs';
import { IFoProfile } from '../../../models/userDetails';

@Component({
  selector: 'app-fourth-template',
  imports: [],
  templateUrl: './fourth-template.component.html',
  styleUrl: './fourth-template.component.scss'
})
export class FourthTemplateComponent implements OnInit, OnDestroy {
  currentUser?: IFoProfile;
  unSubscribe$ = new Subject();

  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void {
    this.portfolioService.forthPortfolioData.pipe(takeUntil(this.unSubscribe$)).subscribe({
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
