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
}
