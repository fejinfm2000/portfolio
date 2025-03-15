import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FirstTemplateComponent } from '../components/first-template/first-template.component';
@Component({
  selector: 'app-portfolio',
  imports: [MatSidenavModule, MatButtonModule, FirstTemplateComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
