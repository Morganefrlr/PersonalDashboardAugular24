import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  template: `
   <app-form
   [title]="title"
   ></app-form>
  `
})
export class AddNoteComponent implements OnInit{
  title : string = "Ajouter une Note"

  ngOnInit(): void {
    
  }
}
