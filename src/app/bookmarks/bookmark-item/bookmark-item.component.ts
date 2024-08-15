import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../bookmarkModel';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',

})
export class BookmarkItemComponent implements OnInit{

  @Input() bookmark: Bookmark
  favicon : string


  ngOnInit() {
    this.favicon = this.bookmark.url.origin + '/favicon.ico'
   
  }
}
