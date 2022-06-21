import {Component, OnInit} from '@angular/core';
import {ExerciseStateService} from "./services/exercise-state.service";
import {ExerciseStateHandlerService} from "./services/exercise-state-handler.service";
import {Exercise} from "../../models/Exercise";
import {ExerciseDialogService} from "./services/exercise-dialog.service";

@Component({
  selector: 'app-exercise-page',
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss']
})
export class ExercisePageComponent implements OnInit {

  public exercises$ = this.state.state$

  constructor(
    private readonly state: ExerciseStateService,
    private readonly handler: ExerciseStateHandlerService,
    private readonly dialog: ExerciseDialogService,
  ) {
  }

  ngOnInit(): void {
    this.handler.getExercises();
  }

  public openExerciseDialog(exercise: Exercise): void {
    this.dialog.openExerciseDialog(exercise)
      .subscribe(rawExercise =>
        exercise
          ? this.onUpdateExercise(rawExercise, exercise.id)
          : this.onCreateExercise(rawExercise))
  }

  public onCreateExercise(exercise: Exercise): void {
    this.handler.createExercise(exercise);
  }

  public onUpdateExercise(exercise: Exercise, id: number): void {
    this.handler.updateExercise(exercise, id);
  }

  public onDeleteExercise(id: number): void {
    this.handler.deleteExercise(id);
  }

}
