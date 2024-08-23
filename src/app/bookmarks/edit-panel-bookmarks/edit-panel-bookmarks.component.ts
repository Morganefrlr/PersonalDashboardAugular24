import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
import { Bookmark } from '../bookmarkModel';

@Component({
  selector: 'app-edit-panel-bookmarks',
  templateUrl: './edit-panel-bookmarks.component.html',
  styles: ``
})
export class EditPanelBookmarksComponent implements OnInit{

  bookmarks : Bookmark[]
  editMode : boolean = true
  empty: boolean = false

  constructor(private bookmarksService : BookmarksService){}


  ngOnInit(){
    this.bookmarks = this.bookmarksService.getBookmarks()
  }

  handleDeleteBookmark(id : number){
    this.bookmarksService.deleteBookmark(id)
    this.bookmarks = this.bookmarksService.getBookmarks()
    if(this.bookmarks.length === 0){
      this.empty = true
    }
  }
}
