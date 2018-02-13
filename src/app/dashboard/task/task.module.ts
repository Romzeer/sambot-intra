import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
  ],
  declarations: [TaskListComponent, TaskEditComponent]
})
export class TaskModule { }
