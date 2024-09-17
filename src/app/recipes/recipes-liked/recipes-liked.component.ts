import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe-page/configRecipe';

@Component({
  selector: 'app-recipes-liked',
  template: `
    <app-button-icon init="arrow_back"></app-button-icon>
    <p *ngIf="empty" class="emptyText container">Aucune recette enregistrée! 
      Pour enregister une recette appuyez sur le coeur, en haut à droite, 
      sur une fiche recette.</p>
    <div class="recipeMain container">
      <app-recipes-list  [recipes]="recipes"></app-recipes-list>
    </div>
  `,
  styles: ``
})
export class RecipesLikedComponent implements OnInit{

  recipes: Recipe[] | any
  empty: boolean = false

  constructor(private recipesService : RecipesService){}

  ngOnInit(){
    this.getRecipes()
  }

  getRecipes(){
    this.recipes =  this.recipesService.getRecipesLiked()
    if(this.recipes.length === 0){this.empty = true}
  }
}
