import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskEditComponent } from './task-edit/task-edit.component';

const routes: Routes = [
  {
    path: 'task',
    children: [
      {
        path: 'new',
        component: TaskEditComponent
      },
      {
        path: ':taskID',
        component: TaskEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})

export class TaskRoutingModule { }
