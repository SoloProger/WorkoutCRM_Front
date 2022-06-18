import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Workout} from "../../../models/Workout";


@Injectable()
export class WorkoutStateService {

  private workouts = new BehaviorSubject<Workout[]>([]);

  public workouts$ = this.workouts.asObservable();

  constructor() {
  }


  public getWorkoutsState(data: Workout[]): void {
    this.workouts.next(data);
  }

}
