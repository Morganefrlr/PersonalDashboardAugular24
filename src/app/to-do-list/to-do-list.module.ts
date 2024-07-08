import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TodolistService } from './todolist.service';




@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TodolistService
  ]
})
export class ToDoListModule { }
