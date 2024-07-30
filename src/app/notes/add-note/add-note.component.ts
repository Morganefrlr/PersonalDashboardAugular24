import { Component, OnInit } from '@angular/core';
import { Note } from '../noteModel';

@Component({
  selector: 'app-add-note',
  template: `
   <app-form
   
   [note]='note'
   (handleBtn)="addNote()"
   ></app-form>
  `
})
export class AddNoteComponent implements OnInit{
  
  
  note: Note = new Note('','')

  ngOnInit(): void {
    
  }

  addNote(){
    console.log("ok")

  }
}
