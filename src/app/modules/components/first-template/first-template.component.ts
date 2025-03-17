import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { PortfolioService } from '../../../service/portfolio.service';
import { IUserData } from '../../../models/userDetails';

@Component({
  selector: 'app-first-template',
  imports: [MatTabsModule, CommonModule],
  templateUrl: './first-template.component.html',
  styleUrl: './first-template.component.scss'
})
export class FirstTemplateComponent implements OnInit {
  currentUser?: IUserData;
  constructor(private portfolioService: PortfolioService) { }
  ngOnInit(): void {
    this.portfolioService.currentUserData.subscribe({
      next: (data) => {
        if (data) {
          this.currentUser = data;
        } else {
          this.currentUser = {}
        }
      }
    })
  }

}
