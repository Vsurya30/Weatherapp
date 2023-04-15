import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weatherdata } from '../models/weather.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  

  constructor(private http:HttpClient) { }
    getWeatherData(cityName: string) : Observable<Weatherdata>
    {
      return this.http.get<Weatherdata>(environment.weatherApibaseurl,{
        headers : new HttpHeaders()
        .set(environment.XRapidAPIHostHeadername,environment.XRapidAPIHostHeadervalue)
        .set(environment.XRapidAPIKeyHeadername,environment.XRapidAPIKeyHeadervalue),
        params: new HttpParams()
        .set('q',cityName)
        .set('units','metrics')
        .set('mode' , 'json')
      })
    }
  
}
export const environment={

  
  weatherApibaseurl : 'https://weatherapi-com.p.rapidapi.com/current.json',
  XRapidAPIHostHeadername: 'X-RapidAPI-Host',
  XRapidAPIHostHeadervalue: 'weatherapi-com.p.rapidapi.com',
  XRapidAPIKeyHeadername : 'X-RapidAPI-Key',
  XRapidAPIKeyHeadervalue : '1437461984msh5d3f7439090f209p1a17bdjsn6224041c6a71'

  
}

function getWeatherData(cityName: any, string: any) {
  throw new Error('Function not implemented.');
}

