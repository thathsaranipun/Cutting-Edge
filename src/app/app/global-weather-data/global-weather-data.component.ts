import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-global-weather-data',
  templateUrl: './global-weather-data.component.html',
  styleUrls: ['./global-weather-data.component.css']
})
export class GlobalWeatherDataComponent implements OnInit {
  lat;
  lon;
  weather;
  
    constructor(private weatherServices:WeatherService) { }
  
    ngOnInit() {
      this.getLocation();
    }
  getLocation(){
    if("geolocation" in navigator){
     navigator.geolocation.watchPosition((success)=>{
       this.lat=success.coords.latitude;
       this.lon=success.coords.longitude;
  
       this.weatherServices.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
        this.weather=data;
       });
     }) 
    }
  }
  
  getCity(city){
    this.weatherServices.getWeatherDataByCityName(city).subscribe((data:any)=>{
      this.weather=data;
  
      this.lat=data.coord.lat;
      this.lon=data.coord.lon;
    })
  }
  }
  