import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
import { Bookmark } from '../bookmarkModel';


@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  
})
export class BookmarksListComponent implements OnInit{
 
  bookmarks: Bookmark[]
  empty: boolean = false

  constructor(private bookmarkService: BookmarksService){}

  ngOnInit() {
    this.bookmarks = this.bookmarkService.getBookmarks()
    if(this.bookmarks.length === 0){
      this.empty = true
    }
  }

}
