import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {WorkoutType} from "../../../models/WorkoutType";


@Injectable()
export class WorkoutStateService {

  private workoutTypes = new BehaviorSubject<WorkoutType[]>([]);

  public workoutTypes$ = this.workoutTypes.asObservable();

  constructor() {
  }

  public getStateData(types: WorkoutType[]): void {
    this.workoutTypes.next(types);
  }

}
