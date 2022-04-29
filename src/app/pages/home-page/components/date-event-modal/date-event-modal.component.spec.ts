import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule } from 'src/app/components/modal/modal.module';

import { DateEventModalComponent } from './date-event-modal.component';

describe('DateEventModalComponent', () => {
  let component: DateEventModalComponent;
  let fixture: ComponentFixture<DateEventModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateEventModalComponent],
      imports: [ModalModule]
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
