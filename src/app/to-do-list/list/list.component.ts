import { Component, Input, OnInit } from '@angular/core';
import {ToDo } from '../fakeToDo';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit{
 
  toDoList:ToDo[] 
  title : string
  toDo : ToDo


  constructor(private todoService : TodolistService){}


  ngOnInit(){
   this.todoService.getToDoList()
   .subscribe(toDoList => this.toDoList = toDoList)

   this.toDo = new ToDo()
  }

  deleteToDo(toDo : ToDo){
    this.todoService.deleteTodoById(toDo.id)
    .subscribe(() => 
      this.todoService.getToDoList()
      .subscribe(toDoList => this.toDoList = toDoList)
    )
  }
  
  onSubmit(){
    if(this.toDo.id === 0){
      const createId= new Date()
      const newTodo : ToDo = {
        title : this.toDo.title,
        id :+createId
      }
      this.todoService.addToDo(newTodo)
          .subscribe(() => 
            this.todoService.getToDoList()
            .subscribe(toDoList => this.toDoList = toDoList)
          ) 
    }else {
      this.todoService.updateToDo(this.toDo)
      .subscribe(() => 
        this.todoService.getToDoList()
        .subscribe(toDoList => this.toDoList = toDoList)
      ) 
      
    }
    this.toDo = new ToDo()
    
  } 

  update(toDo: ToDo){
    console.log(toDo)
    this.toDo = toDo
  }

}
