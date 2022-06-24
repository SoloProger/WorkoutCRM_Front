import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {WorkoutFormService} from "../../services/workout-form.service";
import {Workout} from "../../../../models/Workout";
import {WorkoutTypesStateService} from "../../../workout-type/services/workout-types-state.service";
import {WorkoutTypesStateHandlerService} from "../../../workout-type/services/workout-types-state-handler.service";
import {ExerciseStateService} from "../../../exercise-page/services/exercise-state.service";
import {ExerciseStateHandlerService} from "../../../exercise-page/services/exercise-state-handler.service";

@Component({
  selector: 'app-workout-edit-dialog-form',
  templateUrl: './workout-edit-dialog-form.component.html',
  styleUrls: ['./workout-edit-dialog-form.component.scss']
})
export class WorkoutEditDialogFormComponent implements OnInit {

  public workoutForm: FormGroup;

  public exercises$ = this.exercisesState.state$;

  public types$ = this.stateTypes.state$;

  constructor(
    private readonly form: WorkoutFormService,
    private readonly config: DynamicDialogConfig,
    private readonly ref: DynamicDialogRef,
    private readonly stateTypes: WorkoutTypesStateService,
    private readonly stateHandlerTypes: WorkoutTypesStateHandlerService,
    private readonly exercisesState: ExerciseStateService,
    private readonly exercisesStateHandler: ExerciseStateHandlerService,
  ) {
  }

  ngOnInit(): void {
    this.workoutForm = this.form.createForm()
    this.form.fillForm(this.workoutForm, this.config.data?.workout)
    this.stateHandlerTypes.getWorkoutTypes();
    this.exercisesStateHandler.getExercises();
  }

  public submitForm(): void {
    this.dialogClose({
      ...this.workoutForm.value
    })
  }

  public dialogClose(workout?: Workout): void {
    this.ref.close(workout)
  }
}
