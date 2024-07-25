import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todoModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styles: ``
})
export class AddTodoComponent implements OnInit{
   
  value: string
constructor(
  private todosService : TodosService,
  private router : Router
){}
  ngOnInit(): void {
    
  }

  onSubmit(){
    this.todosService.addTodo(new Todo(this.value))
    this.router.navigate(['/todos'])
  }
}
