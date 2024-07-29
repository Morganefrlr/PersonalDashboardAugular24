import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddComponent } from './button-add/button-add.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonAddComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[
    ButtonAddComponent,
    FormComponent,
  ]
})
export class SharedModuleModule { }
