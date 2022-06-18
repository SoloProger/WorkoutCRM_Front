import {Injectable} from "@angular/core";
import {WorkoutTypesHttpService} from "./workout-types-http.service";
import {WorkoutTypesStateService} from "./workout-types-state.service";


@Injectable()
export class WorkoutTypesStateHandlerService {
  constructor(
    private readonly workoutHttpService: WorkoutTypesHttpService,
    private readonly state: WorkoutTypesStateService) {
  }

  public handlerTypes(): void {
    this.workoutHttpService.getWorkoutTypes().subscribe(types => {
      this.state.getStateData(types);
    })
  }
}
