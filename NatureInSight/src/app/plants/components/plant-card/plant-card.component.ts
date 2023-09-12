import { Component, Input } from '@angular/core';
import { Plants } from 'src/models/Plants.model';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.scss']
})
export class PlantCardComponent {
  @Input()plants!: Plants


}
