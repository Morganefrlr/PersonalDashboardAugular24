import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients',
  template: `
    <div class="recipeIngredients_items">
        <p *ngFor="let item of data">{{item}}</p>
    </div>
  `,
  styles: ``
})
export class RecipeIngredientsComponent {
 @Input() data :[]
}
