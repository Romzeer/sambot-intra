import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../../../shared/services/task.service';
import { Task } from '../../../shared/models/task';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit, OnDestroy {

  task: Task;

  private _subParams;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.task = new Task();
  }

  ngOnInit() {
    this._subParams = this.route.params.subscribe((params: Params) => {
      if (params.taskID) {
        this.task = this.taskService.find(parseInt(params.taskID, 10) );
      }
    });
  }
  ngOnDestroy()  {
    this._subParams.unsubscribe();
  }


  submitTask() {
    this.taskService.edit(this.task);
    this.router.navigateByUrl('/dashboard/todolist')
  }

}
