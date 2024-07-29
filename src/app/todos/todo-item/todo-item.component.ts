import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todoModel';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})


export class TodoItemComponent implements OnInit{

  @Input() todo: Todo

  @Output() handleDeleteTodo: EventEmitter<void> = new EventEmitter()
  @Output() handleEditTodo: EventEmitter<void> = new EventEmitter()


  constructor(){}

  ngOnInit() {
    
  }

  handleDeleteBtn(){
    this.handleDeleteTodo.emit()
  }
  handleEditBtn(){
    this.handleEditTodo.emit()
  }

}
