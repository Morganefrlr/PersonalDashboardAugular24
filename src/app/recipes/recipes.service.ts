import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, tap } from 'rxjs';
import { Recipe } from './recipe-page/configRecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  url  = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  urlId = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  urlSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

  recipesLike: Recipe[] 

  constructor(private http : HttpClient) { }



  getRecipes():Observable<any>{
    return this.http.get<any>(this.url)
    .pipe(
      tap((res) => this.log(res.meals)),
      catchError((error) => this.handleError(error, []))
    )
  }

  getRecipeById(idMeal : string):Observable<any>{
    return this.http.get<any>(this.urlId + idMeal)
    .pipe(
      tap((res) => console.log(res.meals[0])),
      catchError((error) => this.handleError(error, undefined))
    )
  }

  getRecipeBySearch(recipeSearch : string){
    return this.http.get<any>(this.urlSearch + recipeSearch)
    .pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, undefined))
    )
  }


  updateLikeRecipe(recipe : Recipe){
    this.getRecipeById(recipe.id).subscribe(res => {
      console.log(this.recipesLike)
      if(this.recipesLike === undefined){
        this.recipesLike = [recipe]
       
      } else{
       const searchRecipe = this.recipesLike.find(el => el.id === recipe.id)
          if(searchRecipe && this.recipesLike.length === 1){
            this.recipesLike = []
            console.log(this.recipesLike)
          }else if(searchRecipe && this.recipesLike.length !== 1){
            const test = this.recipesLike.find(el => el.id !== recipe.id)
            console.log(test)
          }
          else{
            this.recipesLike.push(recipe)
          }
      }

      
    })

  }





  


  private log(response: any ){
    console.table(response)
  }

  private handleError(error : Error, errorValue : any){
    console.error(error)
    return of(errorValue)
  }

}
