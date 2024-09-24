import { Component, OnInit } from '@angular/core';
import { MarkerMapData } from '../mapData';
import { MapService } from '../map.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-map-edit',
  template: `
    <div class="markerEditPageMain">
      <div>
        
      </div>
      <div>
        <div *ngFor="let mark of markers" (click)='getMarker(mark.id)'>
          <h3>{{mark.city}}</h3>
          <span>Géocode : [{{mark.geocode[0]}} , {{mark.geocode[1]}}]</span>
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
}
