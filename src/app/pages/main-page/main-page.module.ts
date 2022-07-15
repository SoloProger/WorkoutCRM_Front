import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainPageComponent }]),
    DividerModule,
  ],
})
export class MainPageModule {}
