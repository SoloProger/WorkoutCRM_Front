import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'workouts',
    loadChildren: () => import('./pages/workout-page/workout-page.module').then(m => m.WorkoutPageModule)
  },
  {
    path: 'exercises',
    loadChildren: () => import('./pages/exercise-page/exercise-page.module').then(m => m.ExercisePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule)
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
