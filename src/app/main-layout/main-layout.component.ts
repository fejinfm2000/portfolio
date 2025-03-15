import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IUserData } from '../models/userDetails';
import { PortfolioService } from '../service/portfolio.service';
@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
