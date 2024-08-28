import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Recette } from '../recipeModel';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit{


  
  recettes : Recette[]

  constructor(private recipesService : RecipesService){}

  ngOnInit(){
    this.recipesService.getRecipes().subscribe(res => console.log(res))

  }

 
}
