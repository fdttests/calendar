import { TestBed } from '@angular/core/testing';
import { MonthEnum } from '../../enums/month.enum';

import { GetFirstSundayOfMonthUseCase } from './get-first-sunday-of-month.use-case';

describe('GetFirstSundayOfMonthUseCase', () => {
    let service: GetFirstSundayOfMonthUseCase;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GetFirstSundayOfMonthUseCase);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return the right sunday with given date', () => {
        expect(service.execute(new Date(2022, MonthEnum.APRIL, 23))).toEqual(new Date(2022, MonthEnum.MARCH, 27));
        expect(service.execute(new Date(2022, MonthEnum.MARCH, 15))).toEqual(new Date(2022, MonthEnum.FEBRUARY, 27));
        expect(service.execute(new Date(2022, MonthEnum.FEBRUARY, 8))).toEqual(new Date(2022, MonthEnum.JANUARY, 30));
        expect(service.execute(new Date(2022, MonthEnum.JANUARY, 10))).toEqual(new Date(2021, MonthEnum.DECEMBER, 26));
    });
});
