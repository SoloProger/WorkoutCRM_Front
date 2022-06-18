import {Injectable} from "@angular/core";
import {ExerciseStateService} from "./exercise-state.service";
import {ExerciseHttpService} from "./exercise-http.service";
import {Exercise} from "../../../models/Exercise";

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

  public createExercise(exercise: Exercise): void{
    this.exerciseHttpService.createExercise(exercise).subscribe(newExercise => {
      this.state.createValue(newExercise);
    })
  }
}
