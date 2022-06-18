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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
