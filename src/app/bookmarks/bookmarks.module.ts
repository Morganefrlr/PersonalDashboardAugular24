import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { FormsModule } from '@angular/forms';

const bookmarksRoutes: Routes = [
  {path:"bookmarks", component: BookmarksListComponent},
  {path:"bookmarks/add", component: AddBookmarkComponent},
  
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
    SharedModuleModule,
]
})
export class BookmarksModule { }
