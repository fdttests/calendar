import CityModel from "../city/city.model";

export default interface ReminderModel {
    id?: string;
    description: string;
    color: string;
    city?: CityModel;
    date: Date;
}