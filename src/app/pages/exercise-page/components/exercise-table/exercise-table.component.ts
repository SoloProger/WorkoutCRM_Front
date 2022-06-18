import {Component, OnInit} from '@angular/core';
import {ExerciseStateHandlerService} from "../../services/exercise-state-handler.service";
import {ExerciseStateService} from "../../services/exercise-state.service";
import {ExerciseTableService} from "../../services/exercise-table.service";
import {BaseTableColumns} from "../../../../models/BaseTableColumns";

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
    private readonly exerciseTableService: ExerciseTableService
  ) {
  }

  ngOnInit(): void {
    this.stateHandler.getExercises();
    this.columns = this.exerciseTableService.getExerciseTableColumns();
  }

}
