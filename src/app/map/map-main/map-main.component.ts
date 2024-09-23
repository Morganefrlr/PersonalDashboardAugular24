import { Component, OnInit } from '@angular/core';
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

@Component({
  selector: 'app-map-main',
  templateUrl: './map-main.component.html',
})
export class MapMainComponent implements OnInit{

  map: any

  ngOnInit() {
    this.mapConfig()
  }



  mapConfig(){
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  
  }
}
