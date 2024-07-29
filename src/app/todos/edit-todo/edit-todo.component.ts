import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from '../todoModel';

@Component({
  selector: 'app-edit-todo',
  template: `
    <div class="formMainContainer container">
      <h3>Ajouter une Tâche</h3>
      
    </div>
  `,
  styles: ``
})
export class EditTodoComponent implements OnInit{

  todo : Todo | undefined
  constructor(
    private route : ActivatedRoute,
    private todoService : TodosService
  ){}

  ngOnInit(): void {
    const params: string | null = this.route.snapshot.paramMap.get("id") 
    if(params){
      this.todo = this.todoService.getTodoById(+params)
      console.log(this.todo)
    }
  }
}
