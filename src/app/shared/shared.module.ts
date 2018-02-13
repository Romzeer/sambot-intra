import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';
import { PriorityPipe } from './pipes/priority.pipe';
import { PriorityBgDirective } from './directives/priority-bg.directive';
import { AccountService } from './services/account.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PriorityPipe, PriorityBgDirective],
  providers: [
    TaskService,
    AccountService
  ],
  exports: [
    RouterModule,
    FormsModule,
    PriorityPipe,
    PriorityBgDirective
  ]
})
export class SharedModule { }
