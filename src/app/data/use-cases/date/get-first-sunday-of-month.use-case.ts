import { Injectable } from '@angular/core';
import UseCase from '../../base/use-case';

@Injectable({
    providedIn: 'root'
})
export class GetFirstSundayOfMonthUseCase implements UseCase<Date, any> {
    public execute(date: Date): Date {
        const [year, month] = [date.getFullYear(), date.getMonth()];
        const firstDayOfMonth = new Date(year, month, 1);

        const weekInterval = Array.from(Array(7).keys());

        const firstSunday = weekInterval
            .map(() => {
                firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 1);

                return new Date(firstDayOfMonth);
            })
            .find((date: Date) => date.getDay() === 0);

        if (!firstSunday) {
            throw new Error('Unable to obtain first sunday of given date');
        }

        return firstSunday;
    }
}
