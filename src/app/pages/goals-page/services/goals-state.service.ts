import {Injectable} from '@angular/core';
import {AbstractStateService} from "../../../abstract/AbstractStateService";
import {Goal} from "../../../models/Goal";

@Injectable({
  providedIn: 'root'
})
export class GoalsStateService extends AbstractStateService<Goal> {
  constructor() {
    super();
  }
}
