import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../bookmarkModel';
import { BookmarksService } from '../bookmarks.service';
import { Router } from '@angular/router';

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

  bookmark : Bookmark = new Bookmark('','')

  constructor(
    private bookmarkService : BookmarksService,
    private router : Router
  ){}
  ngOnInit(){
    
  }

  addBookmark(){
    this.bookmarkService.addBookmark(this.bookmark)
    this.router.navigate(['/bookmarks'])
  }

}
