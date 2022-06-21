import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExerciseStateHandlerService} from "../../services/exercise-state-handler.service";
import {ExerciseStateService} from "../../services/exercise-state.service";
import {ExerciseTableService} from "../../services/exercise-table.service";
import {BaseTableColumns} from "../../../../models/BaseTableColumns";
import {ExerciseDialogService} from "../../services/exercise-dialog.service";
import {Exercise} from "../../../../models/Exercise";
import {BehaviorSubject} from "rxjs";


@Component({
  selector: 'app-exercise-table',
  templateUrl: './exercise-table.component.html',
  styleUrls: ['./exercise-table.component.scss']
})
export class ExerciseTableComponent {

  @Output()
  public removeExercise = new EventEmitter<number>()

  @Output()
  public openCreateEditDialog = new EventEmitter<Exercise | null>();

  @Input()
  public exercises: Exercise[] = [];

  public columns: BaseTableColumns[] = this.exerciseTableService.getTableColumns();

  public isLoading$ = this.exerciseTableService.loading$;

  constructor(
    private readonly exerciseTableService: ExerciseTableService,
  ) {
  }
}
