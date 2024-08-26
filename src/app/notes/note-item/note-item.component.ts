import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../noteModel';


@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',

})


export class NoteItemComponent {

  @Input() note: Note
  
  @Output() handleDeleteNote: EventEmitter<void> = new EventEmitter()
  @Output() handleEditNote: EventEmitter<void> = new EventEmitter()



  handleEditBtn(){
    this.handleEditNote.emit()
  }
  handleDeleteBtn(){
    this.handleDeleteNote.emit()
  }
}
