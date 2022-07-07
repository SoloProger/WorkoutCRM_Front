import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimetableComponent} from './timetable.component';
import {CalendarComponent} from '../../shared/calendar/calendar.component';
import {RouterModule} from "@angular/router";
import {ProfilePageComponent} from "../profile-page/profile-page.component";


@NgModule({
  declarations: [
    TimetableComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CalendarComponent}
    ]),
  ]
})
export class TimetableModule {
}
