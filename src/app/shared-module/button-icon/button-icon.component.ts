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

    if(this.init === 'cancel' && this.edit === false){
      this.routerLink = '../'
    }else if(this.init === 'cancel' && this.edit === true){
      this.routerLink = '../../'
    }else{
      this.routerLink = this.init
    }
  }

}
