import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor( private session:SessionService) { }

  ngOnInit() {
  }


notificationLog(){


  if(this.session.getID()){
    return true
  }else{
    return false
}
}
}
