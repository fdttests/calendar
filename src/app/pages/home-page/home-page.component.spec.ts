import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ColorPickerModule } from 'ngx-color-picker';
import { CalendarModule } from 'src/app/components/calendar/calendar.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { DateEventModalComponent } from './components/date-event-modal/date-event-modal.component';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomePageComponent,
        DateEventModalComponent
      ],
      imports: [
        CalendarModule,
        ModalModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ColorPickerModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
