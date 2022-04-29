import { TestBed } from '@angular/core/testing';
import { MonthEnum } from '../../enums/month.enum';

import { AddMonthToDateUseCase } from './add-month-to-date.use-case';

describe('AddMonthToDateUseCase', () => {
  let service: AddMonthToDateUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMonthToDateUseCase);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should modify month + 1 with 31 days', () => {
    const januaryDate = {
      date: new Date(2022, MonthEnum.JANUARY, 31),
      month: 1
    };

    const octoberDate = {
      date: new Date(2022, MonthEnum.OCTOBER, 31),
      month: 1
    };

    expect(service.execute(januaryDate)).toEqual(new Date(2022, MonthEnum.FEBRUARY, 28));
    expect(service.execute(octoberDate)).toEqual(new Date(2022, MonthEnum.NOVEMBER, 30));
  });

  it('should modify month + 1 with overlap year', () => {
    const date = {
      date: new Date(2012, MonthEnum.JANUARY, 31),
      month: 1
    };

    expect(service.execute(date)).toEqual(new Date(2012, MonthEnum.FEBRUARY, 29));
  });

  it('should modify month - 1 with 31 days', () => {
    const januaryDate = {
      date: new Date(2022, MonthEnum.JANUARY, 31),
      month: -1
    };

    const octoberDate = {
      date: new Date(2022, MonthEnum.OCTOBER, 31),
      month: -1
    };

    expect(service.execute(januaryDate)).toEqual(new Date(2021, MonthEnum.DECEMBER, 31));
    expect(service.execute(octoberDate)).toEqual(new Date(2022, MonthEnum.SEPTEMBER, 30));
  });

  it('should modify month - 1 with overlap year', () => {
    const date = {
      date: new Date(2012, MonthEnum.MARCH, 31),
      month: -1
    };

    expect(service.execute(date)).toEqual(new Date(2012, MonthEnum.FEBRUARY, 29));
  });
});
