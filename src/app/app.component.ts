import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import {Weatherdata } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
   
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public hour : any;
  public minute: any;
  public seconds: any;

  constructor(private weatherService : WeatherService)
  {

  }
  cityName : string = 'Chennai';
  weatherData ?: Weatherdata;
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';

    

    
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';

  }
  private getWeatherData(cityName : string)
  {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) =>{
        this.weatherData = response;
         console.log(response);
         let timevalue : string =response.location.localtime.slice(10,13);
         //console.log(timevalue);

         //let hours:HTMLElement = document.getElementById('hours') as HTMLElement;
         //var hourtime = document.getElementById('hours');
         //console.log(hourtime);


         
      }
    });
  }
  
  
}
