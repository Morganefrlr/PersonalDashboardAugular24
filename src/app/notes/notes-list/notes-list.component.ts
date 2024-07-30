import { Component, OnInit } from '@angular/core';
import { Note } from '../noteModel';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes-list.component.html',
  styles: ``
})
export class NotesListComponent implements OnInit{

 notes: Note[] 

 constructor( private notesService : NotesService){}
  ngOnInit(){
    this.notes = this.notesService.getNotes()
  }
}
