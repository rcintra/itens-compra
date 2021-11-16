import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    AppMaterialModule,
    FormsModule
  ]
})
export class TodosModule { }
