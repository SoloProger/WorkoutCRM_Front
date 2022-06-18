import {Injectable} from "@angular/core";
import {BaseTableColumns} from "../../../models/BaseTableColumns";


@Injectable()
export class ExerciseTableService {


  public getExerciseTableColumns(): BaseTableColumns[] {
    return [
      {field: 'exerciseName', header: 'Название упражнения'},
      {field: 'repeatsCount', header: 'Количество повторений'},
      {field: 'repeatsCountTimeout', header: 'Отдых между повторениями'}
    ]
  }
}
