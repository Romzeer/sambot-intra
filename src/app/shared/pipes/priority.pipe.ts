import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priority'
})
export class PriorityPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch (value) {
      case '1':
        return 'Bas';
      case '2':
        return 'Normal';
      case '3':
        return 'Urgent';
      default:
        return value;
    }
  }

}
