import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkItemComponent } from './bookmark-item/bookmark-item.component';
import { SharedModuleModule } from "../shared-module/shared-module.module";
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { EditPanelBookmarksComponent } from './edit-panel-bookmarks/edit-panel-bookmarks.component';
import { EditBookmarkComponent } from './edit-panel-bookmarks/edit-bookmark/edit-bookmark.component';

const bookmarksRoutes: Routes = [
  {path:"bookmarks", component: BookmarksListComponent, data: {tab: 1}},
  {path:"bookmarks/add", component: AddBookmarkComponent},
  {path:"bookmarks/edit", component: EditPanelBookmarksComponent},
  {path:"bookmarks/edit/:id", component: EditBookmarkComponent},
]



@NgModule({
  declarations: [
    BookmarksListComponent,
    BookmarkItemComponent,
    AddBookmarkComponent,
    EditPanelBookmarksComponent,
    EditBookmarkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bookmarksRoutes),
    SharedModuleModule,
]
})
export class BookmarksModule { }
