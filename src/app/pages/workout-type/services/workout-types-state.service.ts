import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {WorkoutType} from "../../../models/WorkoutType";
import {AbstractStateService} from "../../../abstract/AbstractStateService";


@Injectable()
export class WorkoutTypesStateService extends AbstractStateService<WorkoutType> {
  constructor() {
    super();
  }
}
