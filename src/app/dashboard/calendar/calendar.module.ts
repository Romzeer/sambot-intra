import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { CalendarCustComponent } from './calendar.component';
import { UtilsCalendarModule } from './utils.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule.forRoot(),
    UtilsCalendarModule
  ],
  declarations: [CalendarCustComponent],
  exports: [CalendarCustComponent]
})
export class CalendarCustomModule {}
