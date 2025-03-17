import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { IUserData, Users } from './models/userDetails';
import { PortfolioService } from './service/portfolio.service';
import { Subject, takeUntil } from 'rxjs';

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
  private http = inject(HttpClient);
  constructor(private location: Location, private portfolioService: PortfolioService) { }

  ngOnInit() {
    const url = this.location.path();
    const segments = url.split('/');

    if (segments.length > 2) {
      this.username = segments[2];
      this.templateName = segments[3];

    }

    this.http.get<Users>('https://gist.githubusercontent.com/fejinfm2000/82d1f8b4f857460e85dabfb842327c5d/raw/33371cdef4beebe032c2364536fb7c550f719b2e/portfoliolist.json')
      .pipe(takeUntil(this.unSubscribe$))
      .subscribe({
        next: (res) => {
          this.users = res;
          this.currentUser = this.users[this.username as keyof typeof this.users];
          this.portfolioService.currentUserData.next(this.currentUser);
          this.portfolioService.templateName.next(this.templateName);
        },
        error: (err) => console.warn('HTTP Error:', err),
      });
  }


  ngOnDestroy(): void {
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }

}
