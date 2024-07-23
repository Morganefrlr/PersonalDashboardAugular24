import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todoModel';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html'
})
export class TodoItemComponent implements OnInit{
  @Input() todo: Todo
  constructor(){}
  ngOnInit() {
    
  }

}
