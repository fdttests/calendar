import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'src/app/components/calendar/calendar.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { DateEventModalComponent } from './components/date-event-modal/date-event-modal.component';

const routes: Routes = [
  {
      "path": "",
      "component": HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    DateEventModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
    ModalModule,
  ]
})
export class HomePageModule { }
