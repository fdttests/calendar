import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GetDateRangeUseCase } from 'src/app/data/use-cases/date/get-date-range.use-case';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnChanges, OnInit {

  @Input() public selectedDate: Date = new Date();

  public dateRange: Array<Date> = [];

  public constructor(
    private getDateRangeUseCase: GetDateRangeUseCase
  ) { }

  public ngOnInit(): void {
    this.applyDateInterval(this.selectedDate);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDate'].currentValue) {
      this.applyDateInterval(changes['selectedDate'].currentValue);
    }
  }

  private applyDateInterval(date: Date) {
    this.dateRange = this.getDateRangeUseCase.execute(date);
  }
}
