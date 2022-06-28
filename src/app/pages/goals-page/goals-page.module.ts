import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoalsPageComponent} from './goals-page.component';
import {GoalsPageTableComponent} from './components/goals-page-table/goals-page-table.component';
import {
  AddEditGoalsFormDialogComponent
} from './dialogs/add-edit-goals-form-dialog/add-edit-goals-form-dialog.component';
import {GoalsTablePipe} from './pipes/goals-table.pipe';
import {TableModule} from "primeng/table";
import {GoalsDialogService} from "./services/goals-dialog.service";
import {GoalsHttpService} from "./services/goals-http.service";
import {GoalsTableService} from "./services/goals-table.service";
import {GoalsStateService} from "./services/goals-state.service";
import {GoalsStateHandlerService} from "./services/goals-state-handler.service";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {DialogService} from "primeng/dynamicdialog";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {GoalsFormService} from "./services/goals-form.service";


@NgModule({
  declarations: [
    GoalsPageComponent,
    GoalsPageTableComponent,
    AddEditGoalsFormDialogComponent,
    GoalsTablePipe,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GoalsPageComponent
      }
    ]),
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  providers: [
    GoalsDialogService,
    GoalsHttpService,
    GoalsTableService,
    GoalsStateService,
    GoalsStateHandlerService,
    GoalsFormService,
    DialogService
  ]
})
export class GoalsPageModule {
}
