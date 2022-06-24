import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'workoutTypeTablePipe'
})
export class WorkoutTypeTablePipe implements PipeTransform {
  transform(value: WorkerType, field: string): string {
    const fieldValue = {};
    return fieldValue[field] || value[field] || '-';
  }

}
