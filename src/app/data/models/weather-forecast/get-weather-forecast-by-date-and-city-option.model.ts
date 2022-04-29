import CityModel from "../city/city.model";

export default interface GetWeatherForecastByDateAndCityOptionsModel {
    city: CityModel,
    date: Date,
}