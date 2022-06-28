import {Injectable} from "@angular/core";
import {ExerciseStateService} from "./exercise-state.service";
import {ExerciseHttpService} from "./exercise-http.service";
import {Exercise} from "../../../models/Exercise";
import {ExerciseTableService} from "./exercise-table.service";

@Injectable()
export class ExerciseStateHandlerService {
  constructor(
    private readonly api: ExerciseHttpService,
    private readonly state: ExerciseStateService,
    private readonly table: ExerciseTableService,
  ) {
  }

  public getExercises(): void {
    this.table
      .startLoading(this.api.getAll())
      .subscribe(exercises => this.state.loadState(exercises))
  }

  public createExercise(exercise: Exercise): void {
    this.table
      .startLoading(this.api.create(exercise))
      .subscribe(data => {
        this.state.createValue(data)
      })
  }

  public updateExercise(exercise: Exercise, id: number): void {
    this.table
      .startLoading(this.api.update(id, exercise))
      .subscribe(data => this.state.updateValue(data))
  }

  public deleteExercise(id: number): void {
    this.table
      .startLoading(this.api.delete(id))
      .subscribe(() => this.state.deleteValue(id))
  }
}
