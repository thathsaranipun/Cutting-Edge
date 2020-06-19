import { Component, OnInit } from '@angular/core';
import { CenterService } from '../center.service';
import {center} from 'src/models/center';
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  support:center[];


  constructor(public centerService:CenterService) { 
    this.centerService .enterCenter().subscribe(listCenter=>{this.support=listCenter});
    
  }

  ngOnInit() {
  }

}
