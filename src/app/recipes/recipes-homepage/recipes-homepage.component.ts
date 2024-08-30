import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-homepage',
  templateUrl: './recipes-homepage.component.html',
  styles: ``
})
export class RecipesHomepageComponent implements OnInit{

  recipeSearch: string =""
  recipes: []

  constructor(private recipesService : RecipesService){}

  ngOnInit(){
    this.getRecipes()
  }

  getRecipes(){
    this.recipesService.getRecipes()
    .subscribe(res => this.recipes = res.meals)
  }
}
