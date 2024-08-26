import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../notes.service';
import { Note } from '../noteModel';

@Component({
  selector: 'app-edit-note',
  template: `
   <app-form
   [note]='note'
   [edit]='true' 
   (handleBtn)='editNote()'
   >
   </app-form>
  `,
  styles: ``
})
export class EditNoteComponent implements OnInit{

  note : Note | undefined



  constructor(
    private notesService : NotesService,
    private router : Router,
    private route : ActivatedRoute
  ){}

  ngOnInit() {
    const params: string | null = this.route.snapshot.paramMap.get("id") 
    if(params){
      this.note = this.notesService.getNoteById(+params)
    }
  }


  editNote(){
    if(this.note){this.notesService.updateNote(this.note)}
    this.router.navigate(['/notes'])
  }
}
