import { Injectable } from '@angular/core';
import { Note } from './noteModel';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

notes: Note[]=[
  new Note('coucou', "helloo "),
  new Note('hello world ', 'fdzhbiopuvdz dvzhip vzdhipvdz viydzp uvrdzizpà yvreazdyhipfeéa yvbirzdp obvfizdypào efagéiypgvre yubfvzid pyfzdvbijokyh grziuopy vbfrzhiupvbdfz pohgfevadipbv zfrypiubrvzhpizdfg gyi!bvdfz ùgrzgujvdfmo sfvbdgijhlqs bgvhimfdbgouùjmgre ùovfsgh uoùbfveioùh fveôùa ')
]


  constructor() { }

  getNotes(){
    return this.notes
  }

  getNoteById(id:number){
    return this.notes.find(el => el.id === id)
  }

  addNote(note:Note){
    this.notes.push(note)
  }
  





















}
