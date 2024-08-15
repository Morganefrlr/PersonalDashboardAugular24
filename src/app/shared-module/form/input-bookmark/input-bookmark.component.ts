import { Component, Input } from '@angular/core';
import { Bookmark } from '../../../bookmarks/bookmarkModel';

@Component({
  selector: 'app-input-bookmark',
  template: `
    <p>
      input-bookmark works!
    </p>
  `,
  styles: ``
})
export class InputBookmarkComponent {
  @Input() bookmark :Bookmark 

}
