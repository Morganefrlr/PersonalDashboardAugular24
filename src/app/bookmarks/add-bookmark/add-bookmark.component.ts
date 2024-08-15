import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmarkModel';

@Component({
  selector: 'app-add-bookmark',
  template: `
    <app-form
   [bookmark]='bookmark'
   (handleBtn)="addBookmark()"
   ></app-form>
  `,
  styles: ``
})
export class AddBookmarkComponent implements OnInit{

  bookmark : Bookmark = new Bookmark('','http://example.com')

  constructor(){}
  ngOnInit(){
    
  }

  addBookmark(){
    console.log(this.bookmark)
  }

}
