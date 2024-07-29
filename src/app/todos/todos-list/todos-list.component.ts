import { Component, OnInit } from '@angular/core';
import { Todo } from '../todoModel';
import { TodosService } from '../todos.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

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
 
 constructor(private todosService : TodosService,
  private router : Router
 ){}


  ngOnInit(){
   this.todos = this.todosService.getTodos() 
   console.log(this.todos)
 }
 
  toggleCompleted(todo:Todo){
   this.todosService.updateTodo(todo.id, {completed: !todo.completed})
  }

  handleDeleteTodo(id: number){
    this.todosService.deleteTodo(id)
    this.todos = this.todosService.getTodos() 
  }

  handleEditTodo(id : number){
    this.router.navigate(["todos/edit", id])
  }

}
