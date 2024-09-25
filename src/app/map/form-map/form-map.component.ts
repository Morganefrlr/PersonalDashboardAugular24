import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarkerMapData } from '../mapData';
import { MapService } from '../map.service';

@Component({
  selector: 'app-form-map',
  template: `
    <div *ngIf="mark">
      <h3>{{init}}</h3>
      <input type="text" placeholder="Ville" required 
            [(ngModel)]="mark.city"
            name="inputCity"
            #inputCity="ngModel">
      <input type="number" placeholder="latitude" required 
            [(ngModel)]="mark.geocode[0]"
            name="inputLatitude"
            inputLatitude="ngModel">
      <input type="number" placeholder="Longitude" required 
            [(ngModel)]="mark.geocode[1]"
            name="inputLongitude"
            #inputLongitude="ngModel">
            <button (click)="onSubmit()">{{init}}</button>
    </div>
  `,
  styles: ``
})
export class FormMapComponent {

  @Input() mark : MarkerMapData | any
  @Input() init : string
  @Output() handleBtnForm: EventEmitter<void> = new EventEmitter() 


  onSubmit(){
   this.handleBtnForm.emit(this.mark)
  }

}
