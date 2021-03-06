import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'workouts',
    loadChildren: () =>
      import('./pages/workout-page/workout-page.module').then(
        (m) => m.WorkoutPageModule
      ),
  },
  {
    path: 'exercises',
    loadChildren: () =>
      import('./pages/exercise-page/exercise-page.module').then(
        (m) => m.ExercisePageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'goals',
    loadChildren: () =>
      import('./pages/goals-page/goals-page.module').then(
        (m) => m.GoalsPageModule
      ),
  },
  {
    path: 'timetable',
    loadChildren: () =>
      import('./pages/timetable/timetable.module').then(
        (m) => m.TimetableModule
      ),
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
