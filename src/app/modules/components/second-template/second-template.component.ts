import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-second-template',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './second-template.component.html',
  styleUrl: './second-template.component.scss'
})
export class SecondTemplateComponent {

}
