import { Injectable } from '@angular/core';
import { Bookmark } from './bookmarkModel';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {


  bookmarks : Bookmark[]=[
    new Bookmark('google', 'https://www.google.com/'),
    new Bookmark('wikipedia', 'https://fr.wikipedia.org/')
  ]
  constructor() { }

  getBookmarks(){
    return this.bookmarks
  }
  addBookmark(){

  }
}
