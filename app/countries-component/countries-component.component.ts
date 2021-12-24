import { Component, OnInit, Input } from '@angular/core';
import { CountriesService } from '../shared/services/countries.service';
import { Country } from '../shared/models/country.model';

@Component({
  selector: 'app-countries-component',
  templateUrl: './countries-component.component.html',
  styleUrls: ['./countries-component.component.css']
})
export class CountriesComponentComponent {
  public countries:Country[]|undefined;
  public index:string="";
  public filteredCountries:Country[]|undefined;
  constructor(private myCountriesService:CountriesService) {
    this.countries=this.myCountriesService.country;
  }
  public get getCountry():Country[]|undefined{
    return this.countries;
  }
  public filter(t:any):void{
    this.filteredCountries=[];
    this.index=t.value;
    if(this.countries && this.index.length>0){
      
      for(let c of this.countries){
        if(c.name.toLocaleLowerCase().startsWith(this.index.toLocaleLowerCase()) || c.capital.toLocaleLowerCase().startsWith(this.index.toLocaleLowerCase())){
          this.filteredCountries.push(c);
        }
      }
    }
  }
}
