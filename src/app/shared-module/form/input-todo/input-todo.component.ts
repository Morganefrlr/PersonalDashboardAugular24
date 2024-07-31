import { Component, Input } from '@angular/core';
import { Todo } from '../../../todos/todoModel';

@Component({
  selector: 'app-input-todo',
  template: `
    <div class="formStyle_inputContainer">
      <input type="text" 
            placeholder="Entrer une nouvelle tâche....." 
            required
            pattern="^[a-zA-Z0-9àâéèç'!?,.() ]{1,300}$"
            [(ngModel)]="todo.text"
            name="inputText"
            #inputText="ngModel"
      >
            
      <div [hidden]="inputText.valid || inputText.pristine">
          Il y a une erreur de saisie
      </div>
    </div>
  `,
  styles: ``
})
export class InputTodoComponent {
  @Input()todo : Todo | any
}
