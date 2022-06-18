import {Injectable} from "@angular/core";
import {WorkoutStateService} from "./workout-state.service";
import {WorkoutHttpService} from "./workout-http.service";


@Injectable()
export class WorkoutStateHandlerService {

  public workouts$ = this.state.workouts$;

  constructor(
    private readonly state: WorkoutStateService,
    private readonly workoutHttpService: WorkoutHttpService
  ) {
  }

  public getStateHandler(): void {
    this.workoutHttpService.getWorkouts().subscribe(workouts => {
      this.state.getWorkoutsState(workouts);
    })
  }
}
