import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { IUserData, Users } from './models/userDetails';
import { PortfolioService } from './service/portfolio.service';
import { map, Observable, Subject, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  username: string = '';
  templateName: string = 'first';
  users!: Users;
  currentUser!: IUserData;
  unSubscribe$ = new Subject();
  constructor(private location: Location, private portfolioService: PortfolioService) { }

  ngOnInit() {
    const url = this.location.path();
    const segments = url.split('/');

    if (segments.length > 2) {
      this.username = segments[2];
      this.templateName = segments[3];
    }
    this.portfolioService.getGists().pipe(takeUntil(this.unSubscribe$)).subscribe(data => {
      if (data.length > 0) {
        this.portfolioService.getGistFile(data[0].id, 'portfoliolist.json').subscribe(data => {
          console.log(data);
          this.users = JSON.parse(data);
          this.currentUser = this.users[this.username as keyof typeof this.users];
          this.portfolioService.currentUserData.next(this.currentUser);
          this.portfolioService.templateName.next(this.templateName);
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }

}
