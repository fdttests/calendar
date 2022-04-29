import { Injectable } from '@angular/core';
import UseCase from '../../base/use-case';
import AddMonthToDateConfigModel from '../../models/date/add-month-to-date-config.model';

@Injectable({
    providedIn: 'root'
})
export class AddMonthToDateUseCase implements UseCase<AddMonthToDateConfigModel, Date> {
    public execute(config: AddMonthToDateConfigModel): Date {
        const newDate = new Date(config.date);
        const originalDay = newDate.getDate();

        newDate.setDate(1);
        newDate.setMonth(newDate.getMonth() + config.month);

        const isLeapYear = (((newDate.getFullYear() % 4 === 0) && (newDate.getFullYear() % 100 !== 0)) || (newDate.getFullYear() % 400 === 0));
        const daysInMonth = [31, (isLeapYear ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][newDate.getMonth()];

        newDate.setDate(Math.min(originalDay, daysInMonth));

        return newDate;
    }
}
