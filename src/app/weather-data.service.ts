import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  key = '47fc65002091c63d3254f975a425fe78';

  constructor(private http:HttpClient) { }

  getData(city:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}&units=metric`);
  }
}
