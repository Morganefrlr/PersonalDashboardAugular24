import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todos/todoModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent implements OnInit{
 
  @Input()todo : Todo | any
  value: string  | any

  @Output() addTodo: EventEmitter<void> = new EventEmitter()

  ngOnInit(){
    
  }

  onSubmit(){
    this.todo.text = this.value
    this.addTodo.emit(this.todo)
  }
}
