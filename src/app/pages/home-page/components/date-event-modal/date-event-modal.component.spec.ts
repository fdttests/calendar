import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ColorPickerModule } from 'ngx-color-picker';
import { ModalModule } from 'src/app/components/modal/modal.module';
import WeatherForecastRepositoryMock from 'src/app/data/mocks/weather-forecast/weather-forecast-repository.mock';
import WeatherForecastRepository from 'src/app/data/repositories/weather-forecast/weather-forecast.repository';

import { DateEventModalComponent } from './date-event-modal.component';

describe('DateEventModalComponent', () => {
    let component: DateEventModalComponent;
    let fixture: ComponentFixture<DateEventModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DateEventModalComponent],
            providers: [
                {
                    provide: WeatherForecastRepository,
                    useClass: WeatherForecastRepositoryMock
                }
            ],
            imports: [
                ModalModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                ReactiveFormsModule,
                ColorPickerModule,
                OwlDateTimeModule,
                OwlNativeDateTimeModule,
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DateEventModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be invalid when empty', () => {
        expect(component.eventForm.valid).toBeFalsy();
    });

    it('should be invalid when description > 30', () => {
        let descripiton = component.eventForm.controls['description'];
        descripiton.setValue("x".repeat(100));
        
        const errors = descripiton.errors || {};
        expect(errors['maxlength']).toBeTruthy(); (1)
    });

    it('should be valid when form is filled', () => {
        component.eventForm.patchValue({
            description: 'Test',
            city: {
                id: 1,
            },
            color: 'white',
            date: new Date(),
        });

        expect(component.eventForm.valid).toBeTruthy();
    });
});
