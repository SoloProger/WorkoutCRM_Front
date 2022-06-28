import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoalsTableService} from "../../services/goals-table.service";
import {Goal} from "../../../../models/Goal";
import {BaseTableColumns} from "../../../../models/BaseTableColumns";

@Component({
  selector: 'app-goals-page-table',
  templateUrl: './goals-page-table.component.html',
  styleUrls: ['./goals-page-table.component.scss']
})
export class GoalsPageTableComponent {

  @Output()
  public removeGoal = new EventEmitter<number>();

  @Output()
  public openCreateEditDialog = new EventEmitter<Goal | null>();

  @Input()
  public goals: Goal[] = [];

  public columns: BaseTableColumns[] = this.table.getTableColumns();


  public isLoading$ = this.table.loading$;

  constructor(private readonly table: GoalsTableService) {
  }

}
