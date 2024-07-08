
import { Injectable } from '@angular/core';
import { FAKETODOS, ToDo } from './fakeToDo';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {


  constructor(private http: HttpClient) { }


  getToDoList(): Observable<ToDo[]>{
    return  this.http.get<ToDo[]>('/api/todolist').pipe(
       tap((res) => this.log(res)),
       catchError((error) => this.handleError(error, []) ))
    
  }

  
  deleteTodoById(toDoId : number): Observable<null>{
    return this.http.delete(`api/todolist/${toDoId}`).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    )
  }


  private log(response : any){
    console.table(response)
  }

  private handleError(error : Error, errorValue : any){
    console.error(error)
    return of(errorValue)
  }
}
