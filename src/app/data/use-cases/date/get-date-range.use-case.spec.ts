import { TestBed } from '@angular/core/testing';
import { MonthEnum } from '../../enums/month.enum';
import { aprilMonthIntervalStub } from '../../stubs/use-cases/date/april-month-interval.stub';
import { februaryMonthIntervalStub } from '../../stubs/use-cases/date/february-month-interval.stub';
import { januaryMonthIntervalStub } from '../../stubs/use-cases/date/january-month-interval.stub';
import { marchMonthIntervalStub } from '../../stubs/use-cases/date/march-month-interval.stub';
import { GetDateRangeUseCase } from './get-date-range.use-case';

describe('GetDateRangeUseCase', () => {
  let service: GetDateRangeUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDateRangeUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the right range with given date', () => {
    const januaryDate = new Date(2022, MonthEnum.JANUARY, 31);
    const februaryDate = new Date(2022, MonthEnum.FEBRUARY, 1);
    const marchDate = new Date(2022, MonthEnum.MARCH, 13);
    const aprilDate = new Date(2022, MonthEnum.APRIL, 23);

    expect(service.execute(januaryDate)).toEqual(januaryMonthIntervalStub);
    expect(service.execute(februaryDate)).toEqual(februaryMonthIntervalStub);
    expect(service.execute(marchDate)).toEqual(marchMonthIntervalStub);
    expect(service.execute(aprilDate)).toEqual(aprilMonthIntervalStub);
  });
});
