import { Component, OnInit } from '@angular/core';
import { MarkerMapData } from '../mapData';
import { MapService } from '../map.service';


@Component({
  selector: 'app-map-edit',
  template: `
    <div class="markerEditPageMain container">

      <div class="markerEditPageMain_leftSide">
        <app-form-map *ngIf="markToForm"  [mark]="markToForm" [init]='initForm' (handleBtnForm)="handleBtnForm()"></app-form-map>
      </div>

      <div class="markerEditPageMain_rightSide">

        <div *ngFor="let mark of markers" (click)='getMarker(mark.id)' class="markerStyle">
          <h3>{{mark.city}}</h3>
          <span>Géocode : [{{mark.geocode[0]}} , {{mark.geocode[1]}}]</span>
          
          <app-box-buttons-item (handleEditBtn)="handleEditBtn(mark)"
          (handleDeleteBtn)="handleDeleteBtn(mark.id)"  class='noteButtons'>
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
  markToForm : MarkerMapData| boolean
  initForm : string

  constructor(private mapService : MapService){}


  ngOnInit(){
    this.markers = this.mapService.getMarkers()
  }

  getMarker(id : number){
    this.mark = this.mapService.getMarkerById(id)
  }


  handleDeleteBtn(id : number){
    this.mapService.deleteMarker(id)
    this.markers = this.mapService.getMarkers()
  }


  handleEditBtn(mark: MarkerMapData){
    this.markToForm = mark
    this.initForm = 'Editer'
  }


  handleBtnForm(){
    if(this.initForm = 'Editer'){this.mapService.updateMarker(this.mark)} 
      
   //if(this.initForm = 'Ajouter'){this.mapService.updateMarker(this.mark)} 
   this.markToForm = false
  }

}
