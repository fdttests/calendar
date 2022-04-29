import CityModel from "../city/city.model";
import WeatherForecastModel from "../weather-forecast/weather-forecast.model";

export default interface ReminderModel {
    id?: string;
    description: string;
    color: string;
    city?: CityModel;
    date: Date;
    forecast?: WeatherForecastModel;
}
