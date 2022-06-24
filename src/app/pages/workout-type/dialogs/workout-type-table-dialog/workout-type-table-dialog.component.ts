import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WorkoutType} from "../../../../models/WorkoutType";
import {BaseTableColumns} from "../../../../models/BaseTableColumns";
import {WorkoutTypesTableService} from "../../services/workout-types-table.service";

@Component({
  selector: 'app-workout-type-table-dialog',
  templateUrl: './workout-type-table-dialog.component.html',
  styleUrls: ['./workout-type-table-dialog.component.scss']
})
export class WorkoutTypeTableDialogComponent implements OnInit {

  @Output()
  public deleteWorkoutType = new EventEmitter<number>();

  @Output()
  public openCreateEditDialog = new EventEmitter<WorkoutType | null>();

  @Input()
  public types: WorkoutType[] = [];

  public columns: BaseTableColumns[] = this.table.getTableColumns();

  public isLoading$ = this.table.loading$;

  constructor(private readonly table: WorkoutTypesTableService) {
  }

  ngOnInit(): void {
  }

}
