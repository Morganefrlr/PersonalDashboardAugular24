import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todos/todoModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent implements OnInit{
 
  value: string = 'Ajouter'


  @Input()todo : Todo | any
  @Output() handleBtn: EventEmitter<void> = new EventEmitter()

  ngOnInit(){
    if(this.todo.text !== ''){
      this.value = 'Editer'
    } 
    
  }

  onSubmit(){
    this.handleBtn.emit(this.todo)
  }
}
