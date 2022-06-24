import {Component, OnInit} from '@angular/core';
import {WorkoutTypesStateService} from "../../services/workout-types-state.service";
import {WorkoutTypesStateHandlerService} from "../../services/workout-types-state-handler.service";
import {WorkoutTypesDialogService} from "../../services/workout-types-dialog.service";
import {WorkoutType} from "../../../../models/WorkoutType";

@Component({
  selector: 'app-workout-type-wrapper',
  templateUrl: './workout-type-wrapper.component.html',
  styleUrls: ['./workout-type-wrapper.component.scss']
})
export class WorkoutTypeWrapperComponent implements OnInit {

  public types$ = this.state.state$;

  constructor(
    private readonly state: WorkoutTypesStateService,
    private readonly handler: WorkoutTypesStateHandlerService,
    private readonly dialog: WorkoutTypesDialogService
  ) {
  }

  ngOnInit(): void {
    this.handler.getWorkoutTypes();
  }

  public openWorkoutTypeDialog(type: WorkoutType): void {
    this.dialog.openAddEditFormDialog(type).subscribe(rawType =>
      type
        ? this.onUpdateType(rawType, type.id)
        : this.onCreateType(rawType))
  }

  public onCreateType(type: WorkoutType): void {
    this.handler.createWorkoutType(type);
  }

  public onUpdateType(type: WorkoutType, id: number): void {
    this.handler.updateWorkoutType(type, id);
  }

  public onDeleteType(id: number): void {
    this.handler.deleteWorkoutType(id);
  }

}
