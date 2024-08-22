import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  template: `
    <div class="btnIcon">
      <a routerLink={{routerLink}}>
        <i class="material-icons-outlined">
          {{icon}}
        </i> 
      </a>
    </div>
  `,
  styles: ``
})
export class ButtonIconComponent implements OnInit {
  
  @Input() init : string
  
  routerLink : string 
  icon : string 
  
  
  ngOnInit(){
    this.icon = this.init
    if(this.init === 'cancel'){
      this.routerLink = '../'
    }else{
      this.routerLink = this.init
    }
      


  }
}
