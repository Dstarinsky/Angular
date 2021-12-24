import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {

    public country: Country[]|undefined;

    constructor(private myHttpClient: HttpClient) { 
        this.getCountry();
    }

    public getCountry() {
        this.myHttpClient
            .get<Country[]>("https://restcountries.eu/rest/v2/all")
            .subscribe(
                res => {this.country = res;},
                err=>{console.log(err)}
            )
    }
}
