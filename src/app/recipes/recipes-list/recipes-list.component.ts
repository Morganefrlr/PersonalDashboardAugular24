import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Recette } from '../recipeModel';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit{

  api  = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  
  recettes : Recette[]

  constructor(private http : HttpClient){}

  ngOnInit(){
    this.getRecette().subscribe(res => console.log(res.meals))

  }

  getRecette():Observable<any>{
    return this.http.get<any>(this.api)
    .pipe(
      tap((res) => console.log(res)),
      catchError((error) => this.handleError(error, []))
    )
  }

  private handleError(error : Error, errorValue : any){
    console.error(error)
    return of(errorValue)
  }
}
