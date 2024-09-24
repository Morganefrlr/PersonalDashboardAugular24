import { Component, OnInit } from '@angular/core';
import { MarkerMapData } from '../mapData';
import { MapService } from '../map.service';


@Component({
  selector: 'app-map-edit',
  template: `
    <div class="markerEditPageMain container">

      <div class="markerEditPageMain_leftSide">
        lku
      </div>

      <div class="markerEditPageMain_rightSide">

        <div *ngFor="let mark of markers" (click)='getMarker(mark.id)' class="markerStyle">
          <h3>{{mark.city}}</h3>
          <span>Géocode : [{{mark.geocode[0]}} , {{mark.geocode[1]}}]</span>
          
          <app-box-buttons-item (handleEditBtn)="handleEditBtn()"
          (handleDeleteBtn)="handleDeleteBtn()"  class='noteButtons'>
        </app-box-buttons-item>
        </div>

      </div>

    </div>
  `,
  styles: ``
})
export class MapEditComponent implements OnInit {

  markers: MarkerMapData[]
  mark : MarkerMapData| any

  constructor(private mapService : MapService){}
  ngOnInit(){
    this.markers = this.mapService.getMarkers()
  }

  getMarker(id : number){
    this.mark = this.mapService.getMarkerById(id)
  }
  handleDeleteBtn(){}
  handleEditBtn(){}

}
