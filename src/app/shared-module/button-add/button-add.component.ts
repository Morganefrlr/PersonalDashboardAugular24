import { Component } from '@angular/core';

@Component({
  selector: 'app-button-add',
  template: `
    <div class="btnAdd">
      <a routerLink="add">
        <i class="material-icons-outlined">
          add
        </i> 
      </a>
    </div>
  `,
  styles: ``
})
export class ButtonAddComponent {

}
