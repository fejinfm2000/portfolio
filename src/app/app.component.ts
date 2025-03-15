import { Component, inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { IUserData, Users } from './models/userDetails';
import { PortfolioService } from './service/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  username: string = '';
  users!: Users;
  currentUser!: IUserData;
  private http = inject(HttpClient);
  constructor(private location: Location, private portfolioService: PortfolioService) { }

  ngOnInit() {
    const url = this.location.path();
    const segments = url.split('/');

    if (segments.length > 2) {
      this.username = segments[2];
    }

    this.http.get<Users>('https://gist.githubusercontent.com/fejinfm2000/82d1f8b4f857460e85dabfb842327c5d/raw/5547dcf4ba3947acac5e04ee5ab8425892a6137d/portfoliolist.json')
      .subscribe({
        next: (res) => {
          this.users = res;
          this.currentUser = this.users[this.username as keyof typeof this.users];
          this.portfolioService.currentUserData.next(this.currentUser);
        },
        error: (err) => console.warn('HTTP Error:', err),
      });
  }
}
