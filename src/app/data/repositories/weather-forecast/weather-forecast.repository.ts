import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, Observable } from "rxjs";

import { environment } from "src/environments/environment";
import encodeQueryString from "../../utils/encode-query-string.util";
import CityModel from "../../models/city/city.model";
import WeatherForecastResponseModel from "../../models/weather-forecast/weather-forecast-response.model";
import WeatherForecastModel from "../../models/weather-forecast/weather-forecast.model";
import { CompareDatesAreEqualUseCase } from "../../use-cases/date/compare-dates-are-equal.use-case";

@Injectable({
    providedIn: 'root'
})
export default class WeatherForecastRepository {
    private apiUrl = 'https://api.openweathermap.org/data/2.5/';  //environment.apiUrl;
    private apiKey = 'd774f7ba00732d7f01030812cb0a65ab';

    public constructor(
        private http: HttpClient,
        private compareDatesAreEqualUseCase: CompareDatesAreEqualUseCase
    ) { }

    public getByCityAndDate(city: CityModel, date: Date): Observable<WeatherForecastModel | undefined> {
        const queryString = encodeQueryString({
            appid: this.apiKey,
            lat: city.lat,
            lon: city.lng,
            exclude: 'minutely,hourly,alerts'
        });

        return this.http
            .get<WeatherForecastResponseModel>(`${this.apiUrl}/onecall?${queryString}`)
            .pipe(
                map((forecastResponse: WeatherForecastResponseModel) => {
                    return forecastResponse.daily
                        .filter((foreacast) => {
                            return foreacast.weather && foreacast.weather.length > 0;
                        })
                        .map((forecast) => {
                            const [weather] = forecast.weather;

                            return {
                                date: new Date(forecast.dt * 1000),
                                icon: weather.icon,
                                description: weather.description
                            } as WeatherForecastModel;
                        })
                        .find((weather) => {
                            return this.compareDatesAreEqualUseCase.execute({
                                date1: weather.date,
                                date2: date
                            });
                        });
                })
            );
    }
}
