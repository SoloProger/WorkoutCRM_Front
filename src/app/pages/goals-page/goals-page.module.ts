import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoalsPageComponent} from './goals-page.component';
import {GoalsPageTableComponent} from './components/goals-page-table/goals-page-table.component';
import {
  AddEditGoalsFormDialogComponent
} from './dialogs/add-edit-goals-form-dialog/add-edit-goals-form-dialog.component';
import {GoalsTablePipe} from './pipes/goals-table.pipe';


@NgModule({
  declarations: [
    GoalsPageComponent,
    GoalsPageTableComponent,
    AddEditGoalsFormDialogComponent,
    GoalsTablePipe,
  ],
  imports: [
    CommonModule
  ]
})
export class GoalsPageModule {
}
