import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutPageComponent} from './workout-page.component';
import {WorkoutNavigationComponent} from './workout-navigation/workout-navigation.component';
import {TabMenuModule} from "primeng/tabmenu";
import {RouterModule} from "@angular/router";
import {WorkoutCreateFormComponent} from './workout-create-form/workout-create-form.component';
import {WorkoutCreatedTableComponent} from './workout-created-table/workout-created-table.component';
import {WorkoutLoadTableComponent} from './workout-load-table/workout-load-table.component';
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {WorkoutStateService} from "./services/workout-state.service";
import {WorkoutStateHandlerService} from "./services/workout-state-handler.service";
import {WorkoutHttpService} from "./services/workout-http.service";


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
  ],
  providers: [
    WorkoutStateService,
    WorkoutStateHandlerService,
    WorkoutHttpService
  ]
})
export class WorkoutPageModule {
}
