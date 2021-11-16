import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private readonly API = "/assets/todos.json";

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Todo[]>(this.API).pipe();
  }
}
