import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import UseCase from '../../base/use-case';
import CityModel from '../../models/city/city.model';
import CityRepository from '../../repositories/city/city.repository';

@Injectable({
    providedIn: 'root'
})
export class GetCitiesUseCase implements UseCase<void, Observable<Array<any>>> {
    public constructor(private cityRepository: CityRepository) {

    }

    public execute(): Observable<Array<CityModel>> {
        return this.cityRepository.get();
    }
}
