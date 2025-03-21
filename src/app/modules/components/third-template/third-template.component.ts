import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-third-template',
  imports: [
    MatSidenavModule,
    MatListModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './third-template.component.html',
  styleUrl: './third-template.component.scss'
})
export class ThirdTemplateComponent {
  isSidebarOpen = false;
  tabName: string = "home";
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  change(tabName: string) {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.tabName = tabName;
  }
  onImageError(event: any, imageName: string) {
    event.target.src = `assets/images/${imageName}.webp`;
  }

}
