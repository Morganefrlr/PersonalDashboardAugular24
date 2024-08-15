import { Component, Input } from '@angular/core';
import { Bookmark } from '../../../bookmarks/bookmarkModel';

@Component({
  selector: 'app-input-bookmark',
  template: `
    <div class="formStyle_inputContainer">
      <input type="text" 
            placeholder="Entrer un titre....." 
            required
            pattern="^[a-zA-Z0-9àâéèç'!?,.() ]{1,300}$"
            [(ngModel)]="bookmark.title"
            name="inputTitle"
            #inputTitle="ngModel"
      >
      <input type="url" 
            placeholder="Entrer une url....." 
            required
            [(ngModel)]="bookmark.url"
            name="inputUrl"
            #inputUrl="ngModel"
      >
            
    </div>
  `,

})
export class InputBookmarkComponent {
  @Input() bookmark :Bookmark 

}
