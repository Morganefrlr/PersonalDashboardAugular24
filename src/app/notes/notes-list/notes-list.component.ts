import { Component, OnInit } from '@angular/core';
import { Note } from '../noteModel';

@Component({
  selector: 'app-notes',
  templateUrl: './notes-list.component.html',
  styles: ``
})
export class NotesListComponent implements OnInit{

 notes: Note[] =[ 
  new Note('coucou', "helloo "),
  new Note('hello world ', 'fdzhbiopuvdz dvzhip vzdhipvdz viydzp uvrdzizpà yvreazdyhipfeéa yvbirzdp obvfizdypào efagéiypgvre yubfvzid pyfzdvbijokyh grziuopy vbfrzhiupvbdfz pohgfevadipbv zfrypiubrvzhpizdfg gyi!bvdfz ùgrzgujvdfmo sfvbdgijhlqs bgvhimfdbgouùjmgre ùovfsgh uoùbfveioùh fveôùa ')
 ]
  ngOnInit(): void {
    
  }
}
