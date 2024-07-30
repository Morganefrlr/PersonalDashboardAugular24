import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../noteModel';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styles: ``
})
export class NoteItemComponent implements OnInit{

  class:string = 'noteButtons'
  @Input() note: Note



  ngOnInit(){
    
  }

  handleEditBtn(){
    console.log('editbtn')
  }
  handleDeleteBtn(){console.log('deletebtn') }
}
