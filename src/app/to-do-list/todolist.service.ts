
import { Injectable } from '@angular/core';
import { FAKETODOS, ToDo } from './fakeToDo';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  addToDo(newToDo: ToDo):Observable<ToDo>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    
    return this.http.post<ToDo>('api/todolist', newToDo, httpOptions).pipe(
      tap((res) => this.log(res)),
      catchError((error) => this.handleError(error, null))
    )
  }

  updateToDo(updatedTodo : ToDo) : Observable<null>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }

    return this.http.put('api/todolist', updatedTodo, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
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
