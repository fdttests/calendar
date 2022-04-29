import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ColorPickerModule } from 'ngx-color-picker';
import { ModalModule } from 'src/app/components/modal/modal.module';

import { DateEventModalComponent } from './date-event-modal.component';

describe('DateEventModalComponent', () => {
  let component: DateEventModalComponent;
  let fixture: ComponentFixture<DateEventModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateEventModalComponent],
      imports: [
        ModalModule, 
        ReactiveFormsModule, 
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
    fixture = TestBed.createComponent(DateEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
