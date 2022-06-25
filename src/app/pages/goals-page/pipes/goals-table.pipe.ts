import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'goalsTable'
})
export class GoalsTablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
