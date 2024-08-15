import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';

const bookmarksRoutes: Routes = [
  {path:"bookmarks", component: BookmarksListComponent},
  
]



@NgModule({
  declarations: [
    BookmarksListComponent,
    BookmarkItemComponent,
    AddBookmarkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bookmarksRoutes),
    SharedModuleModule
]
})
export class BookmarksModule { }
