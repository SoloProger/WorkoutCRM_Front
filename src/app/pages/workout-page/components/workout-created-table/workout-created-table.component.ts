import {Component, OnInit} from '@angular/core';
import {WorkoutStateHandlerService} from "../../services/workout-state-handler.service";
import {WorkoutCreatedTableService} from "../../services/workout-created-table.service";
import {BaseTableColumns} from "../../../../models/BaseTableColumns";

@Component({
  selector: 'app-workout-created-table',
  templateUrl: './workout-created-table.component.html',
  styleUrls: ['./workout-created-table.component.scss']
})
export class WorkoutCreatedTableComponent implements OnInit {

  public workouts$ = this.stateHandler.workouts$;

  public columns!: BaseTableColumns[];

  constructor(
    private readonly stateHandler: WorkoutStateHandlerService,
    private readonly workoutTableService: WorkoutCreatedTableService,
  ) {
  }

  ngOnInit(): void {
    this.stateHandler.getStateHandler();
    this.columns = this.workoutTableService.getTableColumns();
  }

}
