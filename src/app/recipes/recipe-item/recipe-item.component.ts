import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: ``
})
export class RecipeItemComponent {


  @Input() recipe:any


}
