import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Exercise} from "../../../models/Exercise";
import {AbstractHttpService} from "../../../abstract/AbstractHttpService";


@Injectable()
export class ExerciseHttpService extends AbstractHttpService<Exercise, Exercise> {
  constructor(protected override readonly http: HttpClient) {
    super('exercises', http);
  }
}
