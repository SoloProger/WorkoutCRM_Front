import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../../../models/Exercise";


@Injectable()
export class ExerciseHttpService {
  constructor(private readonly http: HttpClient) {
  }

  public getExercisesList(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>('http://localhost:3004/exercises');
  }

  public createExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>('http://localhost:3004/exercises', exercise);
  }
}
