import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutPageComponent} from './workout-page.component';
import {WorkoutNavigationComponent} from './components/workout-navigation/workout-navigation.component';
import {TabMenuModule} from "primeng/tabmenu";
import {RouterModule} from "@angular/router";
import {WorkoutCreateFormComponent} from './components/workout-create-form/workout-create-form.component';
import {WorkoutCreatedTableComponent} from './components/workout-created-table/workout-created-table.component';
import {WorkoutLoadTableComponent} from './components/workout-load-table/workout-load-table.component';
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {WorkoutTypesStateService} from "./services/workout-types-state.service";
import {WorkoutTypesStateHandlerService} from "./services/workout-types-state-handler.service";
import {WorkoutTypesHttpService} from "./services/workout-types-http.service";
import {TableModule} from "primeng/table";
import {WorkoutCreatedTableService} from "./services/workout-created-table.service";
import {WorkoutHttpService} from "./services/workout-http.service";
import {WorkoutStateService} from "./services/workout-state.service";
import {WorkoutStateHandlerService} from "./services/workout-state-handler.service";


@NgModule({
  declarations: [
    WorkoutPageComponent,
    WorkoutNavigationComponent,
    WorkoutCreateFormComponent,
    WorkoutCreatedTableComponent,
    WorkoutLoadTableComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: WorkoutPageComponent}
    ]),
    CommonModule,
    TabMenuModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TableModule,
  ],
  providers: [
    WorkoutTypesStateService,
    WorkoutTypesStateHandlerService,
    WorkoutTypesHttpService,
    WorkoutCreatedTableService,
    WorkoutHttpService,
    WorkoutStateService,
    WorkoutStateHandlerService
  ]
})
export class WorkoutPageModule {
}
