import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'src/app/components/calendar/calendar.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { DateEventModalComponent } from './components/date-event-modal/date-event-modal.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

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
        ReactiveFormsModule,
        CalendarModule,
        ModalModule,
        ColorPickerModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
    ]
})
export class HomePageModule { }
