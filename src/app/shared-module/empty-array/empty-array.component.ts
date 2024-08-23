import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-array',
  template: `
    <p class="emptyText">{{text}} Pour commencer appuyez sur le bouton +</p>
  `,
  styles: ``
})
export class EmptyArrayComponent implements OnInit{

  @Input() data : string
  text : string

  ngOnInit(){
    if(this.data === 'Bookmark'){
      this.text = 'Aucun Bookmark enregistré!'
    }
    if(this.data === 'Tâche' || this.data === 'Note'){
      this.text = `Aucune ${this.data} enregistrée!`
    }
  }
}
