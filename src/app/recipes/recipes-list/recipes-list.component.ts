
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit{


  
  recipes : []

  constructor(private recipesService : RecipesService){}

  ngOnInit(){
    this.getRecipeList()
  }

  getRecipeList(){
    this.recipesService.getRecipes()
    .subscribe(res => this.recipes = res.meals)
  }
 
}
