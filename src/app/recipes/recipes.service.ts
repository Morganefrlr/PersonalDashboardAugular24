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

  recipesLike: Recipe[] | any[] = []

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
    recipe.like = !recipe.like
    this.getRecipeById(recipe.id).subscribe(res => {
      const searchRecipe = this.recipesLike.find(el => el.id === recipe.id)
        if(searchRecipe){
          this.recipesLike = this.recipesLike.filter(el => el.id !== recipe.id)
        }
        else{
          this.recipesLike.push(recipe)
        }
    })
  }


  getLikeRecipeById(id : string){
    const searchRecipe = this.recipesLike.find(el => el.id === id)
    if(searchRecipe){
      return true
    }else{
      return false
    }
  }


  getRecipesLiked(){
    return this.recipesLike
  }




  


  private log(response: any ){
    console.table(response)
  }

  private handleError(error : Error, errorValue : any){
    console.error(error)
    return of(errorValue)
  }

}
