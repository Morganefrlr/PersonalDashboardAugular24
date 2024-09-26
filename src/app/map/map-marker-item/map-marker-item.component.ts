import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarkerMapData } from '../mapData';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-marker-item',
  template: `
    <div *ngFor="let mark of markers" class="markerStyle">
      <h3>{{mark.city}}</h3>
      <span>Géocode : [{{mark.geocode[0]}} , {{mark.geocode[1]}}]</span>
      <div class="buttonTest" (click)="handleDeleteBtn(mark.id)">
          <i class="material-icons">
              delete
          </i>
      </div>
    </div>
  `,
  styles: ``
})
export class MapMarkerItemComponent {

  @Input() markers : MarkerMapData[]

  constructor(private mapService : MapService){}


  handleDeleteBtn(id : number){
    this.mapService.deleteMarker(id)
    this.markers = this.mapService.getMarkers()
  }
}
