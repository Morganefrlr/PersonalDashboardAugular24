import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TodolistService } from './todolist.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    TodolistService
  ]
})
export class ToDoListModule { }
