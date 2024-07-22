import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddComponent } from './button-add/button-add.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ButtonAddComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[
    ButtonAddComponent,
  ]
})
export class SharedModuleModule { }
