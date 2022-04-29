import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { GetCitiesUseCase } from 'src/app/data/use-cases/city/get-cities.use-case';
import CityModel from 'src/app/data/models/city/city.model';

@Component({
  selector: 'app-date-event-modal',
  templateUrl: './date-event-modal.component.html',
  styleUrls: ['./date-event-modal.component.css']
})
export class DateEventModalComponent implements OnInit {
  @ViewChild(ModalComponent)
  public modal!: ModalComponent;

  public color: any;

  public date: any;

  public cities: Array<CityModel> = [];

  public eventForm = this.formBuilder.group({
    description: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  public constructor(
    private formBuilder: FormBuilder,
    private getCitiesUseCase: GetCitiesUseCase
  ) { }

  public ngOnInit(): void {
    this.loadCities();
  }

  public ngAfterViewInit() {
    this.modal.open();
  }

  public onChangeColor(color: string): void {
    this.color = color;
    this.eventForm.patchValue({ color });
  }

  public save() {
    console.log(this.eventForm.value);
  }

  private loadCities() {
    this.getCitiesUseCase.execute()
      .subscribe((cities) => this.cities = cities);
  }
}
