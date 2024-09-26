import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarkerMapData } from '../mapData';


@Component({
  selector: 'app-form-map',
  template: `
    <form #addMarker='ngForm' (submit)="onSubmit()" class="formMap">
      <h3>Ajouter</h3>
      <input type="text" placeholder="Ville" required name="city" [(ngModel)]='markerToAdd.city'>
      <input type="number" placeholder="Latitude" required name="latitude" [(ngModel)]='latitude'>
      <input type="number" placeholder="Longitude" required  name="longitude" [(ngModel)]='longitude'>
      <button>Ajouter</button>
    </form>
  `,
  styles: ``
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
