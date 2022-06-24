import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  AddEditWorkoutTypeFormDialogComponent
} from './dialogs/add-edit-workout-type-form-dialog/add-edit-workout-type-form-dialog.component';
import {WorkoutTypesDialogService} from "./services/workout-types-dialog.service";
import {WorkoutTypesTableService} from "./services/workout-types-table.service";
import {WorkoutTypesHttpService} from "./services/workout-types-http.service";
import {WorkoutTypesFormService} from "./services/workout-types-form.service";
import {WorkoutTypesStateService} from "./services/workout-types-state.service";
import {WorkoutTypesStateHandlerService} from "./services/workout-types-state-handler.service";
import {WorkoutTypeTablePipe} from "./pipes/workout-type-table.pipe";
import {WorkoutTypeInitComponent} from './components/workout-type-init/workout-type-init.component';
import {ButtonModule} from "primeng/button";
import { WorkoutTypeTableDialogComponent } from './dialogs/workout-type-table-dialog/workout-type-table-dialog.component';
import {TableModule} from "primeng/table";
import { WorkoutTypeWrapperComponent } from './components/workout-type-wrapper/workout-type-wrapper.component';
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";


@NgModule({
  declarations: [
    AddEditWorkoutTypeFormDialogComponent,
    WorkoutTypeTablePipe,
    WorkoutTypeInitComponent,
    WorkoutTypeTableDialogComponent,
    WorkoutTypeWrapperComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ReactiveFormsModule,
    TooltipModule
  ],
  exports: [
    WorkoutTypeInitComponent
  ],
  providers: [
    WorkoutTypesDialogService,
    WorkoutTypesTableService,
    WorkoutTypesHttpService,
    WorkoutTypesFormService,
    WorkoutTypesStateService,
    WorkoutTypesStateHandlerService
  ]
})
export class WorkoutTypeModule {
}
