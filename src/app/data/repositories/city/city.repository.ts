import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import CityModel from "../../models/city/city.model";

@Injectable({
    providedIn: 'root'
})
export default class CityRepository {
    public get(): Observable<Array<CityModel>> {
        return of([
            {
                "id": 3464975,
                "name": "Curitiba",
                "lng": -49.27306,
                "lat": -25.42778
            },
            {
                "id": 3463237,
                "name": "Florianópolis",
                "lng": -48.549171,
                "lat": -27.59667
            },
            {
                "id": 3457153,
                "name": "Minas Gerais",
                "lng": -44.0,
                "lat": -18.0
            },
            {
                "id": 3452925,
                "name": "Porto Alegre",
                "lng": -51.23,
                "lat": -30.03306
            },
            {
                "id": 3451190,
                "name": "Rio de Janeiro",
                "lng": -43.2075,
                "lat": -22.902781
            },
        ]);
    }
}
