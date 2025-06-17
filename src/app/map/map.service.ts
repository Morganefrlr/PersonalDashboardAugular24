import { Injectable } from '@angular/core';
import { MarkerMapData } from './mapData';

@Injectable({
  providedIn: 'root'
})
export class MapService {


  markers : MarkerMapData[] = [
    new MarkerMapData('Paris', [48.85341, 2.3488]),
    new MarkerMapData('Londres', [51.50853, -0.12574]),
    new MarkerMapData('Berlin', [52.52437, 13.41053]),
    new MarkerMapData('Rome', [41.89193, 12.51133]),
    new MarkerMapData('Madrid', [40.4165, -3.70256]),
  ]

  constructor() { }

  getMarkers(){
    return this.markers
  }

  getMarkerById(id : number){
    return this.markers.find(el => el.id = id)
  }

  addMarker(markToAdd : MarkerMapData){
    this.markers.push(markToAdd)
  }

  deleteMarker(id : number){
      this.markers = this.markers.filter(el => el.id !== id)
     // console.log(this.markers)
  }

}
