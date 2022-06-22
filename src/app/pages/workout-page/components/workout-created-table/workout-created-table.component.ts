import {Component, Input, OnInit} from '@angular/core';
import {WorkoutStateHandlerService} from "../../services/workout-state-handler.service";
import {WorkoutCreatedTableService} from "../../services/workout-created-table.service";
import {BaseTableColumns} from "../../../../models/BaseTableColumns";
import {Workout} from "../../../../models/Workout";
import {WorkoutDialogService} from "../../services/workout-dialog.service";

@Component({
  selector: 'app-workout-created-table',
  templateUrl: './workout-created-table.component.html',
  styleUrls: ['./workout-created-table.component.scss']
})
export class WorkoutCreatedTableComponent implements OnInit {

  @Input()
  public workouts: Workout[] = []

  public columns: BaseTableColumns[] = this.workoutTableService.getTableColumns();

  public loading$ = this.workoutTableService.loading$;

  constructor(
    private readonly stateHandler: WorkoutStateHandlerService,
    private readonly workoutTableService: WorkoutCreatedTableService,
    private readonly workoutDialog: WorkoutDialogService,
  ) {
  }

  ngOnInit(): void {
    this.stateHandler.getStateHandler();
  }

  public deleteWorkout(id: number): void {
    this.stateHandler.deleteWorkout(id);
  }

  public openWorkoutDialog(workout: Workout): void {
    this.workoutDialog.openWorkoutDialog(workout).subscribe(rawWorkout => {
      this.editWorkout(rawWorkout, workout.id);
    })
  }

  public editWorkout(workout: Workout, id: number): void {
    this.stateHandler.updateWorkout(workout, id);
  }

}
