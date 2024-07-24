import { Injectable } from '@angular/core';
import { Todo } from './todoModel';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[] = [
    new Todo('ceci est un test'),
    new Todo('coucou')
  ]
  constructor() { 
    
  }



  getTodos(){
    return this.todos
  }

  getTodo(id : number){
    return this.todos.find(el => el.id === id)
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(id: number, updatedTodoFields: Partial<Todo>) {
    const todo : Todo | any = this.getTodo(id)
    Object.assign(todo, updatedTodoFields)

  }

  deleteTodo(id:number){
    const todosUpdated =  this.todos.filter(el => el.id !== id)
    this.todos = todosUpdated
    console.log(this.todos)
  }
}
