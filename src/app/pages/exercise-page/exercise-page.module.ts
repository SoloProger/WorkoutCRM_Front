import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExercisePageComponent} from './exercise-page.component';
import {RouterModule} from "@angular/router";
import {ExerciseTableComponent} from './components/exercise-table/exercise-table.component';
import {ExerciseTablePipePipe} from "./pipes/exercise-table-pipe.pipe";
import {ExerciseHttpService} from "./services/exercise-http.service";
import {ExerciseStateService} from "./services/exercise-state.service";
import {ExerciseStateHandlerService} from "./services/exercise-state-handler.service";
import {ExerciseTableService} from "./services/exercise-table.service";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {
  AddEditExerciseFormDialogComponent
} from './dialogs/add-edit-exercise-form-dialog/add-edit-exercise-form-dialog.component';
import {ExerciseDialogService} from "./services/exercise-dialog.service";
import {ExerciseFormService} from "./services/exercise-form.service";
import {DialogService} from "primeng/dynamicdialog";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";


@NgModule({
  declarations: [
    ExercisePageComponent,
    ExerciseTableComponent,
    ExerciseTablePipePipe,
    AddEditExerciseFormDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExercisePageComponent
      }
    ]),
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputNumberModule
  ],
  providers: [
    ExerciseHttpService,
    ExerciseStateService,
    ExerciseStateHandlerService,
    ExerciseTableService,
    ExerciseDialogService,
    DialogService,
    ExerciseFormService
  ]
})
export class ExercisePageModule {
}
