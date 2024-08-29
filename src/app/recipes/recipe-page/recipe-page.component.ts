import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styles: ``
})
export class RecipePageComponent implements OnInit{

  recipe : any

  constructor(
    private route : ActivatedRoute,
    private recipeService : RecipesService,

  ){}
  ngOnInit(){
    const params: string | null = this.route.snapshot.paramMap.get("id") 
    if(params){
      this.getRecipe(params)
    }
  }

  getRecipe(params : string){
    this.recipeService.getRecipeById(params)
    .subscribe(res => this.recipe = res.meals[0])
  }
}
