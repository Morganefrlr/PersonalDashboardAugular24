import { Component, Input, OnInit } from '@angular/core';
import {ToDo } from '../fakeToDo';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{
  @Input()todo : ToDo
  toDoList:ToDo[] 



  constructor(private todoService : TodolistService){}


  ngOnInit(){
   this.todoService.getToDoList()
   .subscribe(toDoList => this.toDoList = toDoList)
  }

  deleteToDo(toDo : ToDo){
    this.todoService.deleteTodoById(toDo.id)
    .subscribe(() => 
      this.todoService.getToDoList()
      .subscribe(toDoList => this.toDoList = toDoList)
    )
  }
  
  onSubmit(){
    this.todoService.addToDo(this.todo)
        .subscribe(() => 
          this.todoService.getToDoList()
          .subscribe(toDoList => this.toDoList = toDoList)
        ) 
  }

}
