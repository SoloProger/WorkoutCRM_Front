import {Injectable} from "@angular/core";
import {WorkoutTypesHttpService} from "./workout-types-http.service";
import {WorkoutTypesStateService} from "./workout-types-state.service";
import {WorkoutTypesTableService} from "./workout-types-table.service";
import {WorkoutType} from "../../../models/WorkoutType";


@Injectable()
export class WorkoutTypesStateHandlerService {
  constructor(
    private readonly http: WorkoutTypesHttpService,
    private readonly state: WorkoutTypesStateService,
    private readonly table: WorkoutTypesTableService
  ) {
  }

  public getWorkoutTypes(): void {
    this.table.startLoading(this.http.getAll()).subscribe(types => this.state.loadState(types));
  }

  public createWorkoutType(type: WorkoutType): void {
    this.table.startLoading(this.http.create(type)).subscribe(data => this.state.createValue(data));
  }

  public updateWorkoutType(type: WorkoutType, id: number): void {
    this.table.startLoading(this.http.update(id, type)).subscribe(data => this.state.updateValue(data));
  }

  public deleteWorkoutType(id: number): void {
    this.table.startLoading(this.http.delete(id)).subscribe(() => this.state.deleteValue(id));
  }
}
