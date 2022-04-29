import { Injectable } from '@angular/core';
import UseCase from '../../base/use-case';
import CompareDatesAreEqualConfigModel from '../../models/date/compare-dates-are-equal-config.model';

@Injectable({
  providedIn: 'root'
})
export class CompareDatesAreEqualUseCase implements UseCase<CompareDatesAreEqualConfigModel, boolean> {
  public execute(config: CompareDatesAreEqualConfigModel): boolean {
    const [year1, year2] = [config.date1.getFullYear(), config.date2.getFullYear()];
    const [month1, month2] = [config.date1.getMonth(), config.date2.getMonth()];
    const [day1, day2] = [config.date1.getDate(), config.date2.getDate()];

    return year1 === year2
      && month1 === month2
      && day1 === day2;
  }
}
