import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapMainComponent } from './map-main/map-main.component';
import { RouterModule, Routes } from '@angular/router';

const mapRoutes: Routes = [
  {path:"map", component: MapMainComponent, data: {tab: 5}},
]

@NgModule({
  declarations: [
    MapMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mapRoutes)
  ],
  providers: [
    MapModule,
  ]
})
export class MapModule { }
