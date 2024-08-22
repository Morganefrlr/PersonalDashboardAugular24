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
  url : URL

  @Output() handleDeleteBookmark: EventEmitter<void> = new EventEmitter()

  ngOnInit() {
    this.url = new URL(this.bookmark.url)
    this.favicon = this.url.origin + '/favicon.ico'
  }


  DeleteBtn(){
    this.handleDeleteBookmark.emit()
    
  }
}
