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

        <div *ngFor="let mark of markers" class="markerStyle">
          <h3>{{mark.city}}</h3>
          <span>Géocode : [{{mark.geocode[0]}} , {{mark.geocode[1]}}]</span>
          
          <div class="buttonTest" (click)="handleDeleteBtn(mark.id)">
              <i class="material-icons">
                  delete
              </i>
          </div>
        </div>

      </div>

    </div>
  `,
  styles: ``
})
export class MapEditComponent implements OnInit {

  markers: MarkerMapData[]
  markerToAdd : MarkerMapData = new MarkerMapData("", [0,0])


  constructor(private mapService : MapService){}


  ngOnInit(){
    this.markers = this.mapService.getMarkers()
  }



  handleDeleteBtn(id : number){
    this.mapService.deleteMarker(id)
    this.markers = this.mapService.getMarkers()
  }




  handleBtnForm(){
    this.mapService.addMarker(this.markerToAdd)
    this.markers = this.mapService.getMarkers()

  }

}
