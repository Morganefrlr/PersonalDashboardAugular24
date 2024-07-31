import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { FormsModule } from '@angular/forms';
import { NotesService } from './notes.service';
import { NoteItemComponent } from './note-item/note-item.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const notesRoutes: Routes = [
 {path:"notes", component: NotesListComponent},
 {path:'notes/add',component:  AddNoteComponent },
 {path:'notes/edit/:id',component:  EditNoteComponent },
]

@NgModule({
  declarations: [
    NotesListComponent,
    NoteItemComponent,
    AddNoteComponent,
    EditNoteComponent
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
