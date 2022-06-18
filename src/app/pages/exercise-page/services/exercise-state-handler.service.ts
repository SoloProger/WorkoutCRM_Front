import {Injectable} from "@angular/core";
import {ExerciseStateService} from "./exercise-state.service";
import {ExerciseHttpService} from "./exercise-http.service";

@Injectable()
export class ExerciseStateHandlerService {
  constructor(
    private readonly exerciseHttpService: ExerciseHttpService,
    private readonly state: ExerciseStateService
  ) {
  }

  public getExercises(): void {
    this.exerciseHttpService.getExercisesList().subscribe(exercises => {
      this.state.getState(exercises);
    })
  }
}
