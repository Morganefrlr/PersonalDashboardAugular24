import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { RouterModule, Routes } from '@angular/router';

const bookmarksRoutes: Routes = [
  {path:"bookmarks", component: BookmarksListComponent},
  
]



@NgModule({
  declarations: [
    BookmarksListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bookmarksRoutes),
  ]
})
export class BookmarksModule { }
