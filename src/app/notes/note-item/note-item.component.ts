import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../noteModel';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styles: ``
})
export class NoteItemComponent implements OnInit{

  class:string = 'noteButtons'
  @Input() note: Note
  
  @Output() handleDeleteNote: EventEmitter<void> = new EventEmitter()
  @Output() handleEditNote: EventEmitter<void> = new EventEmitter()

  constructor(){}

  ngOnInit(){
    
  }

  handleEditBtn(){
    this.handleEditNote.emit()
  }
  handleDeleteBtn(){
    this.handleDeleteNote.emit()
  }
}
