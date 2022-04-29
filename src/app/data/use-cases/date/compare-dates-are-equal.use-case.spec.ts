import { TestBed } from '@angular/core/testing';
import { MonthEnum } from '../../enums/month.enum';

import { CompareDatesAreEqualUseCase } from './compare-dates-are-equal.use-case';

fdescribe('CompareDatesAreEqualUseCase', () => {
  let service: CompareDatesAreEqualUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompareDatesAreEqualUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be true when dates are equal', () => {
    const testOne = {
      date1: new Date(2022, MonthEnum.JANUARY, 31, 17, 15, 0, 0),
      date2: new Date(2022, MonthEnum.JANUARY, 31, 8, 45, 0, 0)
    };

    const testTwo = {
      date1: new Date(2022, MonthEnum.JANUARY, 31, 23, 59, 59, 0),
      date2: new Date(2022, MonthEnum.JANUARY, 31, 0, 0, 0, 0)
    };

    expect(service.execute(testOne)).toEqual(true);
    expect(service.execute(testTwo)).toEqual(true);
  });

  it('should be false when dates are not equal', () => {
    const testOne = {
      date1: new Date(2022, MonthEnum.JANUARY, 31, 14, 35, 0, 0),
      date2: new Date(2022, MonthEnum.JANUARY, 30, 14, 35, 0, 0)
    };

    const testTwo = {
      date1: new Date(2022, MonthEnum.JANUARY, 31, 23, 59, 59, 0),
      date2: new Date(2021, MonthEnum.JANUARY, 31, 0, 0, 0, 0)
    };

    expect(service.execute(testOne)).toEqual(false);
    expect(service.execute(testTwo)).toEqual(false);
  });
});
