import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-bookmark',
  template: `
    <app-form
   
   (handleBtn)="addBookmark()"
   ></app-form>
  `,
  styles: ``
})
export class AddBookmarkComponent implements OnInit{


  constructor(){}
  ngOnInit(){
    
  }

  addBookmark(){
    console.log('ok')
  }

}
