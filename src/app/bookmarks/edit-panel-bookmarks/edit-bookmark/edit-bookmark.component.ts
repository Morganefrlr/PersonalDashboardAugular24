import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarksService } from '../../bookmarks.service';
import { Bookmark } from '../../bookmarkModel';

@Component({
  selector: 'app-edit-bookmark',
  template: `
    <app-form
      [edit]="edit"
      [bookmark]='bookmark'
     (handleBtn)="updateBookmark()"
      ></app-form>
  `,
  styles: ``
})
export class EditBookmarkComponent implements OnInit{

  bookmark : Bookmark | undefined
  edit: boolean = true


  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private bookmarkService : BookmarksService
  ){}
  ngOnInit(){
    const params: string | null = this.route.snapshot.paramMap.get("id") 

    if(params){
      console.log(params)
      this.bookmark = this.bookmarkService.getBookmarkById(+params)
      console.log(this.bookmark)
    }


  }


  updateBookmark(){}

}
