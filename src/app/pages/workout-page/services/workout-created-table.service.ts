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
      {field: 'cyclesCount', header: 'Кол-во кругов'},
      {field: 'setsCount', header: 'Кол-во подходов'},
      {field: 'exerciseTimeout', header: 'Время отдыха между упражнениями'},
      {field: 'setsCountTimeout', header: 'Время отдыха между подходами'},
      {field: 'cyclesCountTimeout', header: 'Время отдыха между кругами'},
      {field: 'exercises', header: 'Список упражнений'}
    ]
  }
}
