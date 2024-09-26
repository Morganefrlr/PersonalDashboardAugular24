import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapMainComponent } from './map-main/map-main.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { MapEditComponent } from './map-edit/map-edit.component';
import { FormMapComponent } from './form-map/form-map.component';
import { FormsModule } from '@angular/forms';
import { MapMarkerItemComponent } from './map-marker-item/map-marker-item.component';

const mapRoutes: Routes = [
  {path:"map", component: MapMainComponent, data: {tab: 5}},
  {path:"map/edit", component: MapEditComponent},
]

@NgModule({
  declarations: [
    MapMainComponent,
    MapEditComponent,
    FormMapComponent,
    MapMarkerItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(mapRoutes),
    SharedModuleModule,
    FormsModule,
],
  providers: [
    MapModule,
  ]
})
export class MapModule { }
