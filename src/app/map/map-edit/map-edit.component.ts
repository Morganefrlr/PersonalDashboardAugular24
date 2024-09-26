import { Component, OnInit } from '@angular/core';
import { MarkerMapData } from '../mapData';
import { MapService } from '../map.service';


@Component({
  selector: 'app-map-edit',
  template: `
    <div class="markerEditPageMain container">

      <div class="markerEditPageMain_leftSide">    
        <app-form-map (handleBtnForm)="handleBtnForm()" [markerToAdd]="markerToAdd"></app-form-map>
        <app-button-icon init="arrow_back"></app-button-icon>
      </div>


      <div class="markerEditPageMain_rightSide">
        <app-map-marker-item [markers]="markers"></app-map-marker-item>
      </div>

    </div>
  `,
})
export class MapEditComponent implements OnInit {

  markers: MarkerMapData[]
  markerToAdd : MarkerMapData = new MarkerMapData("", [0,0])


  constructor(private mapService : MapService){}


  ngOnInit(){
    this.markers = this.mapService.getMarkers()
  }



  handleBtnForm(){
    this.mapService.addMarker(this.markerToAdd)
    this.markers = this.mapService.getMarkers()
    this.markerToAdd = new MarkerMapData("", [0,0])

  }

}
