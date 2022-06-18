import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Exercise} from "../../../models/Exercise";


@Injectable()
export class ExerciseStateService {
  private exercisesValue$ = new BehaviorSubject<Exercise[]>([]);
  public exercises$ = this.exercisesValue$.asObservable();


  public getState(data: Exercise[]): void {
    this.exercisesValue$.next(data);
  }

  public createValue(data: Exercise): void {
    const state = this.exercisesValue$.value;
    this.exercisesValue$.next([data, ...state])
  }
}
