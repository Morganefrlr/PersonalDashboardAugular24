import { Component, OnInit } from '@angular/core';
import { Todo } from '../todoModel';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',

})
export class TodosListComponent implements OnInit{
 todos : Todo[]
 
 constructor(private todosService : TodosService){}


  ngOnInit(){
   this.todos = this.todosService.getTodos() 
   console.log(this.todos)
 }
 
  toggleCompleted(todo:Todo){
   this.todosService.updateTodo(todo.id, {completed: !todo.completed})
  }





}
