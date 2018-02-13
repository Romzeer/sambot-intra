import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable()

export class TaskService {

  static LS_KEY = 'tasks';

  private _tasks: Task[];

  constructor() {
    this._get();
  }

  get() {
    return this._tasks;
  }

  find(taskID: number): Task {
    return this._tasks.find(task => task.id === taskID);
  }

  edit(task: Task) {
    if (task.id != 0) {

      const indexTask = this._tasks.findIndex(taskEl => taskEl.id === task.id);

      if (indexTask) {
        this._tasks[ indexTask ] = task;
      }

    } else {
      task.id = Math.floor(Math.random() * 100000000) + 1;
      this._tasks.push(task);
    }
    this._save();
  }

  remove(taskID: number) {
    this._tasks = this._tasks.filter(task => task.id !== taskID);
    this._save();
  }

  private _get() {
    const tasks = JSON.parse(localStorage.getItem(TaskService.LS_KEY));
    this._tasks = (tasks ? tasks : []);
  }

  private _save() {
    localStorage.setItem(TaskService.LS_KEY, JSON.stringify(this._tasks));
  }
}
