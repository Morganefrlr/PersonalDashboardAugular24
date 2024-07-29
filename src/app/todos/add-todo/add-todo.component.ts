import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  template:`
    <div class="formAddMainContainer container">
      <h3>Ajouter une Tâche</h3>
      <app-form
      [todo]="todo"
      (addTodo)="addTodo()"
      ></app-form>
    </div>
    
  `
})
export class AddTodoComponent implements OnInit{
   
  todo : Todo = new Todo('')


  constructor(
    private todosService : TodosService,
    private router : Router
  ){}
  ngOnInit(): void {
    
  }

  addTodo(){
    this.todosService.addTodo(this.todo)
    this.router.navigate(['/todos'])

  }
}