import { Component, OnInit } from '@angular/core';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { MapService } from '../map.service';
import { Markerperso } from '../mapData';

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
})
export class MapMainComponent implements OnInit{

  map: any
  marker:any
  markers:Markerperso[]

  constructor(private mapService : MapService){}

  ngOnInit() {
    this.mapConfig()
  }



  mapConfig(){
    this.map = L.map('map').setView([48.866667,2.333333], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  

    ////////// add markers /////////
    this.markers = this.mapService.getMarkers()
    this.markers.forEach(el => {
      this.marker = L.marker(el.geocode).addTo(this.map);
      this.marker.bindPopup(`<strong>${el.city}</strong>`).openPopup();
    })
    
  }
}
