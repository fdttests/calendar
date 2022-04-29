import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'src/app/components/calendar/calendar.module';

const routes: Routes = [
  {
      "path": "",
      "component": HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
  ]
})
export class HomePageModule { }
