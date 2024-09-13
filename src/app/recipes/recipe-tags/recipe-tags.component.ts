import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-tags',
  template: `
    <hr>
    <h3>Tags</h3>
    <div class="recipePageRight_tags">
      <p *ngFor="let tag of tags">{{tag}}</p>
    </div>
  `,
  styles: ``
})
export class RecipeTagsComponent {
 @Input() tags : []
}
