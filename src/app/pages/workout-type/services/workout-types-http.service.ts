import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WorkoutType} from "../../../models/WorkoutType";
import {Workout} from "../../../models/Workout";
import {AbstractHttpService} from "../../../abstract/AbstractHttpService";


@Injectable()
export class WorkoutTypesHttpService extends AbstractHttpService<WorkoutType, WorkoutType> {
  constructor(protected override readonly http: HttpClient) {
    super('workout-types', http)
  }
}
