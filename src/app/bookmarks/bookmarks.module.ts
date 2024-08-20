import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { EditPanelBookmarksComponent } from './edit-panel-bookmarks/edit-panel-bookmarks.component';

const bookmarksRoutes: Routes = [
  {path:"bookmarks", component: BookmarksListComponent},
  {path:"bookmarks/add", component: AddBookmarkComponent},
  {path:"bookmarks/edit", component: EditPanelBookmarksComponent},
  
]



@NgModule({
  declarations: [
    BookmarksListComponent,
    BookmarkItemComponent,
    AddBookmarkComponent,
    EditPanelBookmarksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bookmarksRoutes),
    SharedModuleModule,
]
})
export class BookmarksModule { }
