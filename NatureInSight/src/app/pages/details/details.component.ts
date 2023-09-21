import { Component, Input } from '@angular/core';
import { Plants } from 'src/models/Plants.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  titulo="Aloe Vera";
  @Input()plants!: Plants;
}
