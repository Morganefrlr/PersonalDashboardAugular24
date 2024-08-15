import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAddComponent } from './button-add/button-add.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { InputTodoComponent } from './form/input-todo/input-todo.component';
import { InputNoteComponent } from './form/input-note/input-note.component';
import { BoxButtonsItemComponent } from './box-buttons-item/box-buttons-item.component';
import { InputBookmarkComponent } from './form/input-bookmark/input-bookmark.component';



@NgModule({
  declarations: [
    ButtonAddComponent,
    FormComponent,
    InputTodoComponent,
    InputNoteComponent,
    BoxButtonsItemComponent,
    InputBookmarkComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports:[
    ButtonAddComponent,
    FormComponent,
    BoxButtonsItemComponent,
  ]
})
export class SharedModuleModule { }
