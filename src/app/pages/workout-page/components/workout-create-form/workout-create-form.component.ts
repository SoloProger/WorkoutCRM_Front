import { Component, OnInit } from '@angular/core';
import { WorkoutTypesStateService } from '../../../workout-type/services/workout-types-state.service';
import { WorkoutTypesStateHandlerService } from '../../../workout-type/services/workout-types-state-handler.service';
import { FormGroup } from '@angular/forms';
import { WorkoutFormService } from '../../services/workout-form.service';
import { WorkoutStateHandlerService } from '../../services/workout-state-handler.service';
import { ExerciseStateService } from '../../../exercise-page/services/exercise-state.service';
import { ExerciseStateHandlerService } from '../../../exercise-page/services/exercise-state-handler.service';
import { Exercise } from '../../../../models/Exercise';
import { Router } from '@angular/router';
import { WorkoutTypesDialogService } from '../../../workout-type/services/workout-types-dialog.service';

@Component({
  selector: 'app-workout-create-form',
  templateUrl: './workout-create-form.component.html',
  styleUrls: ['./workout-create-form.component.scss'],
})
export class WorkoutCreateFormComponent implements OnInit {
  public workoutForm!: FormGroup;

  public types$ = this.stateType.state$;

  public exercises$ = this.exerciseState.state$;

  public exercises: Exercise[];

  constructor(
    private readonly stateHandlerWorkout: WorkoutStateHandlerService,
    private readonly stateType: WorkoutTypesStateService,
    private readonly stateHandlerType: WorkoutTypesStateHandlerService,
    private readonly exerciseState: ExerciseStateService,
    private readonly exerciseHandler: ExerciseStateHandlerService,
    private readonly form: WorkoutFormService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.workoutForm = this.form.createForm();
    this.stateHandlerType.getWorkoutTypes();
    this.exerciseHandler.getExercises();
  }

  public submitForm(): void {
    this.stateHandlerWorkout.createWorkout({ ...this.workoutForm.value });
  }

  public navigateToExercise(): void {
    this.router.navigate(['/exercises']);
  }
}
