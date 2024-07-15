import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { FAKETODOS } from './to-do-list/fakeToDo';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const todolist = FAKETODOS
    return {todolist}
  }
}
