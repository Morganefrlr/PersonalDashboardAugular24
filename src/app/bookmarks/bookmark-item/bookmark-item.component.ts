import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookmark } from '../bookmarkModel';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',

})
export class BookmarkItemComponent implements OnInit{

  @Input() bookmark: Bookmark
  @Input() editMode : boolean
  favicon : string

  @Output() handleDeleteBookmark: EventEmitter<void> = new EventEmitter()

  ngOnInit() {
    this.favicon = this.bookmark.url.origin + '/favicon.ico'
  }


  DeleteBtn(){
    this.handleDeleteBookmark.emit()
    
  }
}
