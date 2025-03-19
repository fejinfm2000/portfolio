import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-second-template',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './second-template.component.html',
  styleUrl: './second-template.component.scss'
})
export class SecondTemplateComponent {

  onImageError(event: any) {
    event.target.src = 'assets/images/defaultProfile.webp';
  }
}
