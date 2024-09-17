import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  template: `
    <a class="recipeItem" routerLink={{routeurLink}}>
      <img src={{img}} alt="">
      <h4>{{title}}</h4>
    </a>
`,
})
export class RecipeItemComponent implements OnInit{


  @Input() recipe:any
  routeurLink: string 
  img: string
  title : string

  ngOnInit() {
    if(this.recipe.idMeal){
      this.routeurLink = `recipe/${this.recipe.idMeal}` 
      this.img = this.recipe.strMealThumb
      this.title = this.recipe.strMeal

    } else{
      this.routeurLink = `../recipe/${this.recipe.id}`
      this.img = this.recipe.img
      this.title = this.recipe.title

    }
  }
}
