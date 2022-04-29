import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import UseCase from "../../base/use-case";
import GetWeatherForecastByDateAndCityOptionsModel from "../../models/weather-forecast/get-weather-forecast-by-date-and-city-option.model";
import WeatherForecastModel from "../../models/weather-forecast/weather-forecast.model";
import WeatherForecastRepository from "../../repositories/weather-forecast/weather-forecast.repository";

@Injectable({
    providedIn: 'root'
})
export default class GetWeatherForecastByDateAndCityUseCase implements UseCase<GetWeatherForecastByDateAndCityOptionsModel, Observable<WeatherForecastModel | undefined>> {
    public constructor(
        private weatherForecastRepository: WeatherForecastRepository
    ) { }

    public execute(params: GetWeatherForecastByDateAndCityOptionsModel): Observable<WeatherForecastModel | undefined> {
        return this.weatherForecastRepository.getByCityAndDate(params.city, params.date);
    }
}