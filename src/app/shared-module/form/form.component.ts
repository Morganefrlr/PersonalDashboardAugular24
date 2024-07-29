import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todos/todoModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent implements OnInit{
 
  @Input()todo : Todo | any
  value: string  
  isAddForm: boolean = true
  @Output() handleBtn: EventEmitter<void> = new EventEmitter()

  ngOnInit(){
    if(this.todo.text !== ''){
      this.isAddForm = false
    } 
    
  }

  onSubmit(){
    this.handleBtn.emit(this.todo)
  }
}
