import {Pipe, PipeTransform} from "@angular/core";
import {Exercise} from "../../../models/Exercise";


@Pipe({
  name: 'exerciseTablePipe'
})
export class ExerciseTablePipePipe implements PipeTransform {
  transform(value: Exercise, field: string): string {
    const fieldDict: { [key: string]: any } = {
      exerciseName: value.exerciseName,
      repeatsCount: value.repeatsCount,
      repeatsCountTimeout: value.repeatsCountTimeout,
    }

    return fieldDict[field] || '-'
  }

}
