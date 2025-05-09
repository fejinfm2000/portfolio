import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FirstTemplateComponent } from '../components/first-template/first-template.component';
import { SecondTemplateComponent } from "../components/second-template/second-template.component";
import { Subject, takeUntil } from 'rxjs';
import { PortfolioService } from '../../service/portfolio.service';
import { ThirdTemplateComponent } from '../components/third-template/third-template.component';
import { FourthTemplateComponent } from '../components/fourth-template/fourth-template.component';
@Component({
  selector: 'app-portfolio',
  imports: [MatSidenavModule, MatButtonModule,
    FirstTemplateComponent, SecondTemplateComponent,
    ThirdTemplateComponent, FourthTemplateComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  templateName: string = 'first';
  unSubscribe$ = new Subject();

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.templateName.pipe(takeUntil(this.unSubscribe$)).subscribe({
      next: (data) => {
        this.templateName = data
      }
    })
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }

}
