import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';
import { NotesService } from './notes.service';
import { NoteItemComponent } from './note-item/note-item.component';

const notesRoutes: Routes = [
 {path:"notes", component: NotesListComponent}
]

@NgModule({
  declarations: [
    NotesListComponent,
    NoteItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(notesRoutes),
    SharedModuleModule,
    FormsModule
  ],
  providers:[
    NotesService
  ]
})
export class NotesModule { }
