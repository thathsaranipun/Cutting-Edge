import { Component, OnInit } from '@angular/core';
import { ForestFires } from 'src/models/forest-fires';
import { MouseEvent } from '@agm/core';
import {AppServices} from 'src/services/app-services'



@Component({
  selector: 'app-fire-predictions',
  templateUrl: './fire-predictions.component.html',
  styleUrls: ['./fire-predictions.component.css']
})
export class FirePredictionsComponent{


  forestFireDetails:ForestFires[];

  fireDetails:ForestFires[];

  mapped;


  // constructor(public appServices:AppServices) { 
  //   this.appServices.findAllForestFirePredictions().subscribe(forestfire=>{this.forestFireDetails=forestfire});
  // }

  zoom: number = 3;


  
  // initial center position for the map
  lat: number = 10.8968;
  lng: number = 155.5828;
  appServices: any;

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
	  // {
		//   lat: 36.778259,
		//   lng: -119.417931,
    //   label: 'Califonia',
		//   draggable: false
	  // },
	
	  {
		  lat: -29.588744,
		  lng: 152.332031,
		  label: 'Australia',
		  draggable: false,
	  }
  ]

  constructor(
    public mapservice:AppServices
  ){

  }
  
  ngOnInit() {   
     

       
          
        this.mapservice.findAllForestFirePredictions().subscribe(data => {
         console.log(data)
      
       

        this.forestFireDetails=[
          {_id:data._id,date:data.date,temperature:data.temperature,windSpeed:data.windSpeed, relativeHumidity:data.relativeHumidity,fwiValue:data.fwiValue,risk:data.risk,spreads:data.spreads}
         
         ];

      
            

        });

       

  }
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}