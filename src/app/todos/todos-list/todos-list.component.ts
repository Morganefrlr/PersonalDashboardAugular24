import { Component, OnInit } from '@angular/core';
import { Todo } from '../todoModel';
import { TodosService } from '../todos.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  animations: [
    trigger('deleteAnimation', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
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

  handleDelete(id: number){
    this.todosService.deleteTodo(id)
    this.todos = this.todosService.getTodos() 
  }



}
