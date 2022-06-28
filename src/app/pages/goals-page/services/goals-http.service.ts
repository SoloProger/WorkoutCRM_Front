import {Injectable} from '@angular/core';
import {AbstractHttpService} from "../../../abstract/AbstractHttpService";
import {HttpClient} from "@angular/common/http";
import {Goal} from "../../../models/Goal";

@Injectable({
  providedIn: 'root'
})
export class GoalsHttpService extends AbstractHttpService<Goal, Goal> {
  constructor(protected override readonly http: HttpClient) {
    super('goals', http);
  }
}
