import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-add',
  template: `
    <div class="btnAdd">
      <a routerLink={{routerLink}}>
        <i class="material-icons-outlined">
          {{icon}}
        </i> 
      </a>
    </div>
  `,
  styles: ``
})
export class ButtonAddComponent implements OnInit {
  
  @Input() editBtn : boolean
  
  routerLink : string = 'add'
  icon : string = 'add'
  
  
  ngOnInit(){
    if(this.editBtn){
      this.routerLink = 'edit'
      this.icon = 'edit'
    }
  }
}
