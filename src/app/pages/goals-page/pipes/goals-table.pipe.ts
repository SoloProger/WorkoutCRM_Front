import {Pipe, PipeTransform} from '@angular/core';
import {Goal} from "../../../models/Goal";

@Pipe({
  name: 'goalsTable'
})
export class GoalsTablePipe implements PipeTransform {

  transform(value: Goal, field: string): string {
    const fieldDict = {
      goalTitle: value.goalTitle,
      status: value.status
    }

    return fieldDict[field] || value[field] || '-'
  }

}
