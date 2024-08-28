import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  url  = "https://www.themealdb.com/api/json/v1/1/search.php?s="
 
  constructor(private http : HttpClient) { }



  getRecipes():Observable<any>{
    return this.http.get<any>(this.url)
    .pipe(
      tap((res) => console.log(res)),
      catchError((error) => this.handleError(error, []))
    )
  }




  private log(response: any ){
    console.table(response)
  }

  private handleError(error : Error, errorValue : any){
    console.error(error)
    return of(errorValue)
  }

}
