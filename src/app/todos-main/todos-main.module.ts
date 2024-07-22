import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';


const todosRoutes: Routes = [
  {path:"todos", component: TodosComponent},
  {path:"todos/add", component: AddTodoComponent},
]

@NgModule({
  declarations: [
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todosRoutes),
    SharedModuleModule,
  ]
})
export class TodosMainModule { }
