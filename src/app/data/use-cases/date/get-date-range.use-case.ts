import { Injectable } from '@angular/core';
import UseCase from '../../base/use-case';
import { GetFirstSundayOfMonthUseCase } from './get-first-sunday-of-month.use-case';

@Injectable({
  providedIn: 'root'
})
export class GetDateRangeUseCase implements UseCase<Date, Array<Date>> 
{
  public constructor(private getFirstSundayOfMonthUseCase: GetFirstSundayOfMonthUseCase) {

  }
  
  public execute(date: Date): Array<Date> {
    const firstSundayOfMonth = this.getFirstSundayOfMonthUseCase.execute(date);
    const range = [new Date(firstSundayOfMonth)];

    for (let i = 0; i < 41; i++) {
      firstSundayOfMonth.setDate(firstSundayOfMonth.getDate() + 1);
      
      range.push(new Date(firstSundayOfMonth));
    }

    return range;
  }
}
