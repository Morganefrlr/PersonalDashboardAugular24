import { Component, OnInit } from '@angular/core';
import {ToDo } from '../fakeToDo';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{

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
  

}
