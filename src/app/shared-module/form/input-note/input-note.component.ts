import { Component, Input } from '@angular/core';
import { Note } from '../../../notes/noteModel';

@Component({
  selector: 'app-input-note',
  template: `
    <div class="formStyle_inputContainer">
      <input type="text" 
            placeholder="Entrer un titre....." 
            required
            pattern="^[a-zA-Z0-9àâéèç'!?,.() ]{1,300}$"
            [(ngModel)]="note.title"
            name="inputTitle"
            #inputTitle="ngModel"
      >
      <textarea rows="5" [(ngModel)]="note.desc" name="inputNote" #inputNote="ngModel" required></textarea>
            
    </div>
  `,
  styles: ``
})
export class InputNoteComponent {
@Input() note : Note
}
