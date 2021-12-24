import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {CountriesComponentComponent} from './countries-component/countries-component.component';

const routes: Routes = [
  {path:"home-page", component:HomePageComponent},
  {path:"countries-component", component:CountriesComponentComponent},
  {path:"", pathMatch:"full" ,redirectTo:"/home-page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
