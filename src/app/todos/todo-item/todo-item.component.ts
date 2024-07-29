import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todoModel';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})


export class TodoItemComponent implements OnInit{

  @Input() todo: Todo

  @Output() deleteClick: EventEmitter<void> = new EventEmitter()


  constructor(){}

  ngOnInit() {
    
  }

  handleDelete(){
    this.deleteClick.emit()
  }

}
