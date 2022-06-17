import {Injectable} from "@angular/core";
import {BaseTableColumns} from "../../../models/BaseTableColumns";


@Injectable()
export class WorkoutCreatedTableService {
  constructor() {
  }

  public getTableColumns(): BaseTableColumns[] {
    return [
      {field: 'workoutName', header: 'Название тренировки'},
      {field: 'workoutType', header: 'Тип тренировки'},
      {field: 'exerciseSetTimeout', header: 'Время отдыха между упражнениями'},
      {field: 'cyclesCount', header: 'Кол-во кругово'},
      {field: 'exercises', header: 'Список упражнений'}
    ]
  }
}
