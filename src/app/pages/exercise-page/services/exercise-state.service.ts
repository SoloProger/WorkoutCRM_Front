import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Exercise} from "../../../models/Exercise";
import {AbstractStateService} from "../../../abstract/AbstractStateService";


@Injectable()
export class ExerciseStateService extends AbstractStateService<Exercise> {
  constructor() {
    super();
  }
}
