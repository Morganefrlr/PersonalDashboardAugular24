import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarksService } from '../../bookmarks.service';
import { Bookmark } from '../../bookmarkModel';

@Component({
  selector: 'app-edit-bookmark',
  template: `
    <app-form
      [edit]='true'
      [bookmark]='bookmark'
      (handleBtn)="updateBookmark()"
    ></app-form>
  `,
  styles: ``
})
export class EditBookmarkComponent implements OnInit{

  bookmark : Bookmark | any


  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private bookmarkService : BookmarksService
  ){}


  ngOnInit(){
    const params: string | null = this.route.snapshot.paramMap.get("id") 
    if(params){
      this.bookmark = this.bookmarkService.getBookmarkById(+params)
    }


  }


  updateBookmark(){
    this.bookmarkService.updateBookmark(this.bookmark)
    this.router.navigate(['/bookmarks'])
  }

}
