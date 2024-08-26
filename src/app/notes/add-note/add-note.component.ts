import { Component, OnInit } from '@angular/core';
import { Note } from '../noteModel';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  template: `
   <app-form
   [note]='note'
   (handleBtn)="addNote()"
   ></app-form>
  `
})
export class AddNoteComponent {
  
  
  note: Note = new Note('','')

  constructor(
    private notesService : NotesService,
    private router : Router
  ){}



  addNote(){
    this.notesService.addNote(this.note)
    this.router.navigate(['/notes'])
  }
}
