import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  template: `
    <div class="btnIcon">
      <a routerLink={{routerLink}}>
        <i class="material-icons-outlined">
          {{init}}
        </i> 
      </a>
    </div>
  `,
  styles: ``
})
export class ButtonIconComponent implements OnInit {
  
  @Input() init : string
  @Input() edit: boolean = false
  
  routerLink : string 
  
  ngOnInit(){

    if(this.init === 'arrow_back' && this.edit === false){
      this.routerLink = '../'
    }else if(this.init === 'arrow_back' && this.edit === true){
      this.routerLink = '../../'
    }else if(this.init === 'favorite'){
      this.routerLink = 'like'
    }else{
      this.routerLink = this.init
    }
  }

}
