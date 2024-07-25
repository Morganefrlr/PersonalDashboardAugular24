import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { TodosService } from './todos.service';
import { FormsModule } from '@angular/forms';

const todosRoutes: Routes = [
  {path:"todos", component: TodosListComponent},
  {path:"todos/add", component: AddTodoComponent},
]

@NgModule({
  declarations: [
    TodosListComponent,
    TodoItemComponent,
    AddTodoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(todosRoutes),
    SharedModuleModule,
    FormsModule,
    
  ],
  providers:[
    TodosService
  ]
})
export class TodosModule { }
