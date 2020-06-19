import { Component, OnInit } from '@angular/core';
import { PredicpipeService } from '../predicpipe.service';


@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {

  predictionStore:any[];
 
  
 
  correct=false


  constructor(public predicpipeService:PredicpipeService) { 
    this.predicpipeService.getforestPast().subscribe(predictlist=>{this.predictionStore=predictlist});
    
   
  }

  ngOnInit() {
  }
  changespre(risk){
    console.log(risk);
    if(risk=="Low Risk"){
      this.correct=true;
      return true
    }
    else{
      this.correct=false;
      return false
    }
  
  }


 
}


 