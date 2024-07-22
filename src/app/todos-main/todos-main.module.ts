import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';


const todosRoutes: Routes = [
  {path:"todos", component: TodosComponent},
]

@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todosRoutes)
  ]
})
export class TodosMainModule { }
