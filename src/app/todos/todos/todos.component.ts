import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  item: string = '';
  todos: Observable<Todo[]>;
  //todos: Todo[] = [];
  constructor(
    private todoService: TodosService
    ) {
    //this.todoService.list().subscribe(data => this.todos = data );
    this.todos = this.todoService.list();
  }

  onSubmit(): void {

    console.log(this.item);

    this.item = '';

  }

  remover(_id: string): void {
    console.log(_id);
  }

  ngOnInit(): void {

  }


}
