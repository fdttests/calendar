import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import CityModel from "../../models/city/city.model";
import WeatherForecastModel from "../../models/weather-forecast/weather-forecast.model";

@Injectable({providedIn: 'root'})
export default class WeatherForecastRepositoryMock {
    public getByCityAndDate(city: CityModel, date: Date): Observable<WeatherForecastModel | undefined> {
        return of(undefined);
    }
}