import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
import { Bookmark } from '../bookmarkModel';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-panel-bookmarks',
  templateUrl: './edit-panel-bookmarks.component.html',
  animations: [
    trigger('deleteAnimation', [
      transition(':leave', [
        animate(200, style({
          opacity: 0,
          width: 0,
          marginBottom: 0
        }))
      ])
    ])
  ]
})
export class EditPanelBookmarksComponent implements OnInit{

  bookmarks : Bookmark[]
  editMode : boolean = true
 

  constructor(private bookmarksService : BookmarksService, private router : Router){}


  ngOnInit(){
    this.bookmarks = this.bookmarksService.getBookmarks()
  }

  handleDeleteBookmark(id : number){
    this.bookmarksService.deleteBookmark(id)
    this.bookmarks = this.bookmarksService.getBookmarks()
    if(this.bookmarks.length === 0){
      this.router.navigate(['/bookmarks'])
    }
  }
}
