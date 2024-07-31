import { Component, OnInit } from '@angular/core';
import { Note } from '../noteModel';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-notes',
  templateUrl: './notes-list.component.html',
  animations: [
    trigger('deleteAnimation', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          height: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class NotesListComponent implements OnInit{

  notes: Note[] 

  constructor( 
    private notesService : NotesService,
    private router : Router
  
  ){}

  ngOnInit(){
    this.notes = this.notesService.getNotes()
  }


  handleDeleteNote(id: number){
    this.notesService.deleteNote(id)
    this.notes = this.notesService.getNotes()

  }

  handleEditNote(id:number){
    this.router.navigate(['notes/edit/', id])
  }



}
