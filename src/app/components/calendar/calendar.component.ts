import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import CalendarDateModel from 'src/app/data/models/calendar/calendar-date.model';
import CalendarEventModel from 'src/app/data/models/calendar/calendar-event.model';
import { CompareDatesAreEqualUseCase } from 'src/app/data/use-cases/date/compare-dates-are-equal.use-case';
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

  @Output() public onClickDate = new EventEmitter<Date>();

  public weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public dateRange: Array<CalendarDateModel> = [];

  public constructor(
    private getDateRangeUseCase: GetDateRangeUseCase,
    private compareDatesAreEqualUseCase: CompareDatesAreEqualUseCase
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
      return this.compareDatesAreEqualUseCase.execute({
        date1: event.date,
        date2: date
      });
    });
  }
}
