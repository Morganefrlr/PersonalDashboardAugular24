import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../noteModel';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styles: ``
})
export class NoteItemComponent implements OnInit{

  @Input() note: Note
  ngOnInit(): void {
    
  }
}
