import CityModel from "../city/city.model";

export default interface ReminderModel {
    id: number;
    description: string;
    city: CityModel;
    date: Date;
}