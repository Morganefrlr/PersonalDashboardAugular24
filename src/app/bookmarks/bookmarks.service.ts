import { Injectable } from '@angular/core';
import { Bookmark } from './bookmarkModel';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {


  bookmarks : Bookmark[]=[
    new Bookmark('google', 'https://www.google.com/'),
    new Bookmark('wikipedia', 'https://fr.wikipedia.org/'),
  ]
  constructor() { }

  getBookmarks(){
    return this.bookmarks
  }


  addBookmark(bookmark : Bookmark){
    bookmark.url = new URL(bookmark.url)
    this.bookmarks.push(bookmark)
  }

  getBookmarkById(id: number){
    return this.bookmarks.find(el => el.id === id)
  }

  updateBookmark(bookmark : Bookmark){
    const bookmarkToUpdate: Bookmark | any = this.getBookmarkById(bookmark.id)
    const bookmarkIndex : number = this.bookmarks.findIndex(el => el.id === bookmark.id)

    this.bookmarks[bookmarkIndex] = bookmarkToUpdate
  }

  deleteBookmark(id : number){
    const bookmarksUpdated = this.bookmarks.filter(el => el.id !== id)
    this.bookmarks = bookmarksUpdated
  }
}
