import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Workout} from "../../../models/Workout";


@Injectable()
export class WorkoutHttpService {
  constructor(private readonly http: HttpClient) {
  }

  public getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>('http://localhost:3004/workouts');
  }
}
