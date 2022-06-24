import {Injectable} from "@angular/core";
import {AbstractTableService} from "../../../abstract/AbstractTableService";
import {BaseTableColumns} from "../../../models/BaseTableColumns";


@Injectable()
export class WorkoutTypesTableService extends AbstractTableService {
  constructor() {
    super()
  }

  getTableColumns(): BaseTableColumns[] {
    return [
      {field: 'typeName', header: 'Название типа'}
    ];
  }
}
