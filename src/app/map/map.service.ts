import { Injectable } from '@angular/core';
import { Marker } from 'leaflet';
import { Markerperso } from './mapData';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  markers : Markerperso[] = [
    new Markerperso('Paris', [48.85341, 2.3488]),
    new Markerperso('Londres', [51.50853, -0.12574]),
    new Markerperso('Berlin', [52.52437, 13.41053]),
    new Markerperso('Rome', [41.89193, 12.51133]),
    new Markerperso('Madrid', [40.4165, -3.70256]),
  ]

  constructor() { }

  getMarkers(){
      return this.markers
  }

}
