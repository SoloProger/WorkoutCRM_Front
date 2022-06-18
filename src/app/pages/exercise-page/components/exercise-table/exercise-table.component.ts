import {Component, OnInit} from '@angular/core';
import {ExerciseStateHandlerService} from "../../services/exercise-state-handler.service";
import {ExerciseStateService} from "../../services/exercise-state.service";
import {ExerciseTableService} from "../../services/exercise-table.service";
import {BaseTableColumns} from "../../../../models/BaseTableColumns";
import {ExerciseDialogService} from "../../services/exercise-dialog.service";
import {Exercise} from "../../../../models/Exercise";

@Component({
  selector: 'app-exercise-table',
  templateUrl: './exercise-table.component.html',
  styleUrls: ['./exercise-table.component.scss']
})
export class ExerciseTableComponent implements OnInit {

  public exercises$ = this.state.exercises$;

  public columns!: BaseTableColumns[];

  constructor(
    private readonly stateHandler: ExerciseStateHandlerService,
    private readonly state: ExerciseStateService,
    private readonly exerciseTableService: ExerciseTableService,
    private readonly exerciseDialogService: ExerciseDialogService,
  ) {
  }

  ngOnInit(): void {
    this.stateHandler.getExercises();
    this.columns = this.exerciseTableService.getExerciseTableColumns();
  }

  public openCreateEditDialog(exercise: Exercise | null): void {
    this.exerciseDialogService.openExerciseDialog(exercise).subscribe(rawExercise => {
      exercise ? () => {
      } : this.stateHandler.createExercise(rawExercise);
    })
  }

}
