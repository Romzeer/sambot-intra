import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../shared/services/task.service';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.tasks = this.taskService.get();
  }

  removeTask(taskID) {
    this.taskService.remove(taskID);
    this._get();
  }

  private _get() {
    this.tasks = this.taskService.get();
  }
}
