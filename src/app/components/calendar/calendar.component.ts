import { Component, Input, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import CalendarDateModel from 'src/app/data/models/calendar/calendar-date.model';
import CalendarEventModel from 'src/app/data/models/calendar/calendar-event.model';
import { GetDateRangeUseCase } from 'src/app/data/use-cases/date/get-date-range.use-case';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnChanges, OnInit {

  @Input() public selectedDate: Date = new Date();
  @Input() public events: Array<CalendarEventModel> = [];
  @Input() public eventTemplate!: TemplateRef<any>;

  public weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public dateRange: Array<CalendarDateModel> = [];

  public constructor(
    private getDateRangeUseCase: GetDateRangeUseCase
  ) { }

  public ngOnInit(): void {
    this.applyDateInterval();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDate']?.currentValue || changes['events']?.currentValue) {
      this.applyDateInterval();
    }
  }

  private applyDateInterval() {
    this.dateRange = this.getDateRangeUseCase.execute(this.selectedDate).map((date) => {
      return {
        date: date,
        events: this.getEventsOnDate(date)
      };
    });
  }

  private getEventsOnDate(date: Date) {
    return this.events.filter((event) => {
      return event.date.toISOString().split("T")[0] === date.toISOString().split("T")[0];
    });
  }
}
