import { Component, OnInit, ViewChild } from '@angular/core';
import ReminderModel from 'src/app/data/models/reminder/reminder.model';
import ReminderStore from 'src/app/data/stores/reminder/reminder.store';
import { AddMonthToDateUseCase } from 'src/app/data/use-cases/date/add-month-to-date.use-case';
import { DateEventModalComponent } from './components/date-event-modal/date-event-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild(DateEventModalComponent)
  public dateEventModal!: DateEventModalComponent;

  public selectedDate: Date = new Date();
  public reminders: Array<ReminderModel> = [];

  public constructor(
    private reminderStore: ReminderStore,
    private addMonthToDateUseCase: AddMonthToDateUseCase
  ) { }

  public ngOnInit(): void {
    this.reminderStore.get().subscribe((reminders) => {
      this.reminders = reminders;
    });
  }

  public setMonth(operation: number) {
    this.selectedDate = this.addMonthToDateUseCase.execute({
      date: this.selectedDate,
      month: operation
    });
  }

  public addReminder() {
    this.dateEventModal.openWithReminder({
      description: '',
      color: '#ffffff',
      date: new Date()
    });
  }

  public getCurrentDateDescription() {
    const monthName = this.selectedDate.toLocaleString('default', { month: 'long' });

    return `${monthName} - ${this.selectedDate.getFullYear()}`;
  }
}
