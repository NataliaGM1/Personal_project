import { Component } from '@angular/core';
import { plants } from 'src/app/mock-plants';
import { Plants } from 'src/models/Plants.model';

@Component({
  selector: 'app-list-plant',
  templateUrl: './list-plant.component.html',
  styleUrls: ['./list-plant.component.scss']
})
export class ListPlantComponent {
  titulo="Listado plantas medicinales";
  usuario= 'Maria';
  plants:Plants[]=plants

}
