import {Injectable} from '@angular/core';
import {AbstractTableService} from "../../../abstract/AbstractTableService";
import {BaseTableColumns} from "../../../models/BaseTableColumns";

@Injectable({
  providedIn: 'root'
})
export class GoalsTableService extends AbstractTableService {

  constructor() {
    super();
  }

  public getTableColumns(): BaseTableColumns[] {
    return [
      {field: 'goalTitle', header: 'Цель'},
      {field: 'status', header: 'Статус'},
    ]
  }
}
