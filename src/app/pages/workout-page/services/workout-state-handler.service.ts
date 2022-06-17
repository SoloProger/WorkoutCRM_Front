import {Injectable} from "@angular/core";
import {WorkoutHttpService} from "./workout-http.service";
import {WorkoutStateService} from "./workout-state.service";


@Injectable()
export class WorkoutStateHandlerService {
  constructor(
    private readonly workoutHttpService: WorkoutHttpService,
    private readonly state: WorkoutStateService) {
  }

  public handlerTypes(): void {
    this.workoutHttpService.getWorkoutTypes().subscribe(types => {
      this.state.getStateData(types);
    })
  }
}
