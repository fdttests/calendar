import CalendarEventModel from 'src/app/data/models/calendar/calendar-event.model';
import ReminderStore from 'src/app/data/stores/reminder/reminder.store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AddMonthToDateUseCase } from 'src/app/data/use-cases/date/add-month-to-date.use-case';
import { DateEventModalComponent } from './components/date-event-modal/date-event-modal.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild(DateEventModalComponent)
  public dateEventModal!: DateEventModalComponent;

  public selectedDate: Date = new Date();
  public events: Array<CalendarEventModel> = [];

  public constructor(
    private reminderStore: ReminderStore,
    private addMonthToDateUseCase: AddMonthToDateUseCase,
    private domSanitizer: DomSanitizer
  ) { }

  public ngOnInit(): void {
    this.reminderStore.get().subscribe((reminders) => {
      this.events = reminders.map((reminder) => {
        return {
          date: reminder.date,
          color: reminder.color,
          description: reminder.description,
          data: reminder
        };
      });
    });
  }

  public setMonth(operation: number) {
    this.selectedDate = this.addMonthToDateUseCase.execute({
      date: this.selectedDate,
      month: operation
    });

    this.reminderStore.applyFilter({
      year: this.selectedDate.getFullYear(),
      month: this.selectedDate.getMonth()
    });
  }

  public addReminder(date = new Date()) {
    this.dateEventModal.openWithReminder({
      description: '',
      color: '#ffffff',
      date,
    });
  }

  public editReminder(calendarEvent: CalendarEventModel) {
    this.dateEventModal.openWithReminder(calendarEvent.data);
  }

  public getIcon(calendarEvent: CalendarEventModel) {
    return this.domSanitizer.bypassSecurityTrustUrl(`https://openweathermap.org/img/w/${calendarEvent.data.forecast.icon}.png`);
  }

  public getCurrentDateDescription() {
    const monthName = this.selectedDate.toLocaleString('default', { month: 'long' });

    return `${monthName} - ${this.selectedDate.getFullYear()}`;
  }

  public getFormattedEventHour(event: CalendarEventModel) {
    const hours = event.date.getHours();
    const minutes = event.date.getMinutes();
    const amPm = hours >= 12 ? 'pm' : 'am';

    const formattedHour = (hours % 12) ? hours : 12; // the hour '0' should be '12'
    const formattedMinute = minutes < 10 ? '0'+minutes : minutes;
    
    return `${formattedHour}:${formattedMinute} ${amPm}`;
  }
}
