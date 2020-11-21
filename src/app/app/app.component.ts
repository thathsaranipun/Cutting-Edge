import { Component } from '@angular/core';
import { SessionService } from './session';
// import { LogInComponent } from './log-in/log-in.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFront';
  // session : String
  constructor(
    private session:SessionService
    // private logedUser:LogInComponent
  ) { 
   
  }


  
  ngOnInit() {

    

    

    // this.session=this.mySession.getID()
  }


 changeLog(){

  console.log("My Session "  +this.session.getID())

  if(this.session.getID()){
    return true
  }else{
    return false
  }

 


  //  if(this.mySession.getID()){
  //    return false
  //  }else {
  //    return true
  //  }
 }
  LogOut(){
    this.session.logout()
    
  }
 
}
 