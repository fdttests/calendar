import CalendarEventModel from "./calendar-event.model";

export default interface CalendarDateModel {
    date: Date;
    events: Array<CalendarEventModel>;
}
