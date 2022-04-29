import { Injectable } from "@angular/core";
import { createStore, select, setProps, Store, withProps } from "@ngneat/elf";
import { addEntities, selectAllEntities, updateEntities, withEntities } from "@ngneat/elf-entities";
import ReminderFilterModel from "../../models/reminder/reminder-filter.model";
import ReminderModel from "../../models/reminder/reminder.model";

@Injectable({ providedIn: 'root' })
export default class ReminderStore {
    private store: Store;

    public constructor() {
        this.store = createStore(
            { name: 'reminders' },
            withEntities()
        );
    }

    public add(reminder: ReminderModel) {
        reminder.id = Date.now().toString(36) + Math.random().toString(36).substring(2);

        this.store.update(
            addEntities(reminder)
        );
    }

    public update(reminder: ReminderModel) {
        this.store.update(
            updateEntities(reminder.id, () => reminder),
        );
    }

    public get() {
        return this.store
            .pipe(selectAllEntities());
    }
}
