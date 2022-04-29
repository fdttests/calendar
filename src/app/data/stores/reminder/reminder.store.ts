import { Injectable } from "@angular/core";
import { createStore, select, setProps, Store, withProps } from "@ngneat/elf";
import { addEntities, selectAllEntitiesApply, withEntities } from "@ngneat/elf-entities";
import { switchMap } from "rxjs";
import ReminderFilterModel from "../../models/reminder/reminder-filter.model";
import ReminderModel from "../../models/reminder/reminder.model";

@Injectable({ providedIn: 'root' })
export default class ReminderStore {
    private store: Store;

    public constructor() {
        const currentDate = new Date();

        this.store = createStore(
            { name: 'reminders' },
            withProps<ReminderFilterModel>({
                year: currentDate.getFullYear(),
                month: currentDate.getMonth()
            }),
            withEntities()
        );
    }

    public add(reminder: ReminderModel) {
        this.store.update(
            addEntities(reminder)
        );
    }

    public applyFilter(filters: ReminderFilterModel) {
        this.store.update(setProps(filters));
    }

    public get() {
        return this.store
            .pipe(select((all) => all))
            .pipe(
                switchMap((filter: ReminderFilterModel) => {
                    return this.store.pipe(
                        selectAllEntitiesApply({
                            filterEntity(reminder: ReminderModel) {
                                return filter.year === reminder.date.getFullYear()
                                    && filter.month === reminder.date.getMonth() 
                            },
                        })
                    );
                })
            );
    }
}