import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TodolistService } from './todolist.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const toDoListRoute : Routes = [
  {path: 'todolist' , component: ListComponent}
]


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(toDoListRoute)
  ],
  providers: [
    TodolistService
  ]
})
export class ToDoListModule { }
