import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarkerMapData } from '../mapData';


@Component({
  selector: 'app-form-map',
  template: `
    <form #addMarker='ngForm' (submit)="onSubmit()" class="formMap">
      <h3>Ajouter</h3>
      <input type="text" placeholder="Ville" required id="city" [(ngModel)]='markerToAdd.city'>
      <input type="number" placeholder="Latitude" required id="latitude" [(ngModel)]='latitude'>
      <input type="number" placeholder="Longitude" required  id="longitude" [(ngModel)]='longitude'>
      <button>Ajouter</button>
    </form>
  `,
})
export class FormMapComponent {

  @Input() markerToAdd :  MarkerMapData | any
  latitude : number
  longitude : number
  
  @Output() handleBtnForm: EventEmitter<void> = new EventEmitter() 


  onSubmit(){
    this.markerToAdd.geocode = [this.latitude, this.longitude]
    this.handleBtnForm.emit(this.markerToAdd)
  }

}
