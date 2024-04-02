import { Component, Input } from '@angular/core';
import { View } from '../../view';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-view-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './view-card.component.html',
  styleUrl: './view-card.component.css'
})
export class ViewCardComponent {

  @Input() view: View = new View();


}
