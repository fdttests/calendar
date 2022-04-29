import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render days', () => {
    const compiled = fixture.debugElement.nativeElement;
    const elements = compiled.querySelectorAll('[name="calendar-day"]');

    expect(elements.length).toBe(42);
  });

  it('should render weekdays', () => {
    const compiled = fixture.debugElement.nativeElement;
    const elements = compiled.querySelectorAll('[name="calendar-week-day"]');

    expect(elements.length).toBe(7);
  });
});
