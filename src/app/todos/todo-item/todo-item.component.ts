import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todoModel';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})


export class TodoItemComponent {
  

  @Input() todo: Todo

  @Output() handleDeleteTodo: EventEmitter<void> = new EventEmitter()
  @Output() handleEditTodo: EventEmitter<void> = new EventEmitter()


  constructor(){}


  handleDeleteBtn(){
    this.handleDeleteTodo.emit()
  }
  handleEditBtn(){
    this.handleEditTodo.emit()
  }

}
