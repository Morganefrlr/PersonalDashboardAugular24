import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from '../todoModel';

@Component({
  selector: 'app-edit-todo',
  template: `

      <app-form
      [todo]="todo"
      [edit]='true'
      (handleBtn)="editTodo()"

      ></app-form>

  `
})
export class EditTodoComponent implements OnInit{

  todo : Todo | undefined


  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private todoService : TodosService
  ){}



  ngOnInit(): void {
    const params: string | null = this.route.snapshot.paramMap.get("id") 
    if(params){
      this.todo = this.todoService.getTodoById(+params)
    }
  }


 editTodo(){
  if(this.todo){this.todoService.updateTodo(this.todo.id, {text: this.todo.text})}
  this.router.navigate(['/todos'])
 }

}
