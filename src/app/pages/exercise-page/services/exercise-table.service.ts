import {Injectable} from "@angular/core";
import {BaseTableColumns} from "../../../models/BaseTableColumns";
import {AbstractTableService} from "../../../abstract/AbstractTableService";


@Injectable()
export class ExerciseTableService extends AbstractTableService {

  constructor() {
    super();
  }

  public getTableColumns(): BaseTableColumns[] {
    return [
      {field: 'exerciseName', header: 'Название упражнения'},
      {field: 'repeatsCount', header: 'Количество повторений'},
      {field: 'repeatsCountTimeout', header: 'Отдых между повторениями'}
    ]
  }
}
