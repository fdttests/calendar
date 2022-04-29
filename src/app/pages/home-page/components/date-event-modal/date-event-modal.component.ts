import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { GetCitiesUseCase } from 'src/app/data/use-cases/city/get-cities.use-case';
import CityModel from 'src/app/data/models/city/city.model';
import ReminderModel from 'src/app/data/models/reminder/reminder.model';
import ReminderStore from 'src/app/data/stores/reminder/reminder.store';
import GetWeatherForecastByDateAndCityUseCase from 'src/app/data/use-cases/weather-forecast/get-weather-forecast-by-date-and-city.use-case';
import WeatherForecastModel from 'src/app/data/models/weather-forecast/weather-forecast.model';

@Component({
  selector: 'app-date-event-modal',
  templateUrl: './date-event-modal.component.html',
  styleUrls: ['./date-event-modal.component.css']
})
export class DateEventModalComponent implements OnInit {
  @ViewChild(ModalComponent)
  public modal!: ModalComponent;

  public color: string = '#ffffff';
  
  public date!: Date;
  
  public cities: Array<CityModel> = [];

  public eventForm = this.formBuilder.group({
    description: new FormControl('', [Validators.required, Validators.max(30)]),
    city: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  public reminderId?: string;

  public constructor(
    private formBuilder: FormBuilder,
    private getCitiesUseCase: GetCitiesUseCase,
    private getWeatherForecastByDateAndCityUseCase: GetWeatherForecastByDateAndCityUseCase,
    private reminderStore: ReminderStore
  ) { }

  public ngOnInit(): void {
    this.loadCities();
  }

  public openWithReminder(reminder: ReminderModel) {
    this.eventForm.patchValue({
      description: reminder.description,
      city: reminder.city,
      color: reminder.color,
      date: reminder.date,
    });

    this.color = reminder.color;
    this.reminderId = reminder.id;

    this.modal.open();
  }

  public onChangeColor(color: string): void {
    this.color = color;
    this.eventForm.patchValue({ color });
  }

  public async save() {
    const reminderData: ReminderModel = {
      id: this.reminderId,
      description: this.eventForm.controls['description'].value,
      color: this.eventForm.controls['color'].value,
      date: this.eventForm.controls['date'].value,
      city: this.eventForm.controls['city'].value,
      forecast: undefined
    };

    try {
      reminderData.forecast = await this.getForecastByCityAndDate(
        <CityModel>reminderData.city, 
        reminderData.date
      );
    } catch (error) {
      console.error(error);
      reminderData.forecast = undefined;
    }

    if (reminderData.id) {
      this.reminderStore.update(reminderData);
    } else {
      this.reminderStore.add(reminderData);
    }
    
    this.modal.close();
  }

  private getForecastByCityAndDate(city: CityModel, date: Date): Promise<WeatherForecastModel | undefined> {
    return new Promise((resolve, reject) => {
      this.getWeatherForecastByDateAndCityUseCase.execute({
        city, date
      })
      .subscribe({
        next: (item) => resolve(item),
        error: (item) => reject(item)
      })
    });
  }

  private loadCities() {
    this.getCitiesUseCase.execute()
      .subscribe((cities) => this.cities = cities);
  }
}
