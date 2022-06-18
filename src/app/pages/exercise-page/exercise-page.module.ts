import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExercisePageComponent} from './exercise-page.component';
import {RouterModule} from "@angular/router";
import { ExerciseTableComponent } from './components/exercise-table/exercise-table.component';


@NgModule({
  declarations: [
    ExercisePageComponent,
    ExerciseTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExercisePageComponent
      }
    ])
  ]
})
export class ExercisePageModule {
}
