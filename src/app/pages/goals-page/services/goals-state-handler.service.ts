import {Injectable} from '@angular/core';
import {GoalsHttpService} from "./goals-http.service";
import {GoalsStateService} from "./goals-state.service";
import {GoalsTableService} from "./goals-table.service";
import {Goal} from "../../../models/Goal";

@Injectable({
  providedIn: 'root'
})
export class GoalsStateHandlerService {

  constructor(
    private readonly api: GoalsHttpService,
    private readonly state: GoalsStateService,
    private readonly table: GoalsTableService,
  ) {
  }

  public getGoals(): void {
    this.table
      .startLoading(this.api.getAll())
      .subscribe(goals => this.state.loadState(goals))
  }

  public addGoal(goal: Goal): void {
    this.table
      .startLoading(this.api.create(goal))
      .subscribe(data => {
        this.state.createValue(data)
      })
  }

  public updateGoal(goal: Goal, id: number): void {
    this.table
      .startLoading(this.api.update(id, goal))
      .subscribe(data => this.state.updateValue(data))
  }

  public deleteGoal(id: number): void {
    this.table
      .startLoading(this.api.delete(id))
      .subscribe(() => this.state.deleteValue(id))
  }
}
