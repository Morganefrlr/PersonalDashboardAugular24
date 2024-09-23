import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapMainComponent } from './map-main/map-main.component';



@NgModule({
  declarations: [
    MapMainComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    MapModule,
  ]
})
export class MapModule { }
