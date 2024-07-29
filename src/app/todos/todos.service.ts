import { Injectable } from '@angular/core';
import { Todo } from './todoModel';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[] = [
    new Todo('Entez une nouvelle tâche.....')
  ]
  constructor() { 
    
  }



  getTodos(){
    return this.todos
  }

  getTodoById(id : number){
    return this.todos.find(el => el.id === id)
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(id: number, updatedTodoFields: Partial<Todo>) {
    const todo : Todo | any = this.getTodoById(id)
    Object.assign(todo, updatedTodoFields)

  }

  deleteTodo(id:number){
    const todosUpdated =  this.todos.filter(el => el.id !== id)
    this.todos = todosUpdated
  }
}
