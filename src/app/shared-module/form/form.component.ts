import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../todos/todoModel';
import { Note } from '../../notes/noteModel';
import { Bookmark } from '../../bookmarks/bookmarkModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent implements OnInit{
 
  value: string = 'Ajouter'
  title: string 

  @Input()todo : Todo | any
  @Input()note: Note | any
  @Input()bookmark: Bookmark  | any
  @Input()edit : boolean= false

  @Output() handleBtn: EventEmitter<void> = new EventEmitter()

  ngOnInit(){
    if(this.edit){
      this.value = 'Editer'
    } 
    if(this.todo){
      this.title = 'une Tâche'
    }
    if(this.note){
      this.title = "une Note"
    }
    if(this.bookmark){
      this.title = "un Bookmark"
    }
    
  }

  onSubmit(){
    if(this.todo){this.handleBtn.emit(this.todo)}
    if(this.note){this.handleBtn.emit(this.note)}
    if(this.bookmark){this.handleBtn.emit(this.bookmark)}
  }
}
