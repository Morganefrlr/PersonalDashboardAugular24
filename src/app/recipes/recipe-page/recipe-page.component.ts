import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe, recipeConfig } from './configRecipe';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styles: ``
})
export class RecipePageComponent implements OnInit{

  recipe : any
  tags : [] | boolean


  constructor(
    private route : ActivatedRoute,
    private recipeService : RecipesService,
  ){}


  ngOnInit(){
    const params: string | null = this.route.snapshot.paramMap.get("id") 
    if(params)return this.getRecipe(params)
  }




  getRecipe(params : string){
    this.recipeService.getRecipeById(params)
    .subscribe(res => {

      if(res.meals[0].strTags){
        this.tags = res.meals[0].strTags.split(',')
      } else {
        this.tags = false
      }


      const config = recipeConfig(res.meals[0], this.tags)
      this.recipe = config[0]
      this.recipe.like = this.recipeService.getLikeRecipeById(params)
      
    })
   
  }


  handleLike(){
    this.recipeService.updateLikeRecipe(this.recipe)
  }
}
