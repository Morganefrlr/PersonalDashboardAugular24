import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';

const bookmarksRoutes: Routes = [
  {path:"bookmarks", component: BookmarksListComponent},
  
]



@NgModule({
  declarations: [
    BookmarksListComponent,
    BookmarkItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bookmarksRoutes),
  ]
})
export class BookmarksModule { }
