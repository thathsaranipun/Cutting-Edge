import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SessionService } from '../session';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  radioFormControl = new  FormControl();
  constructor(private router:Router,private http: HttpClient,private session:SessionService) {}

  ngOnInit() {
  }
  isSubmitted = false;

 
 
  submitForm() { 
    var Notification = this.radioFormControl.value;
    
    let body = new HttpParams({

      fromObject:{
        'email':this.session.getID(),
        'notification':Notification
      
      }
    });
    // console.log(body)

    var url = "http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/notification";
     
    this.http.post<any>(url,body).subscribe(
      (data)=>{      
          alert('Thank you for join with Inferno System')
          this.router.navigate(
            ['/top']
  
          );
      },
      (error)=>{
        
        alert(`Error`)
      }
    )

 
  }



  

}




    
    // this.isSubmitted = true;
    // if(!form.valid) {
    //   alert(JSON.stringify(form.value))
    //   alert("Notification off")
    //   this.http.get<JSON>('http://localhost:4500/sms').subscribe(data => {
      
    //   })
      // this.router.navigate(
      //   ['/top']

      // );
    // } else {
    // alert(JSON.stringify(form.value))
        
    //   JSON.stringify(form.value)
    //   alert("Notification On")
    //   this.http.get<JSON>('http://localhost:4500/sms').subscribe(data => {
      
    //   })
      
    
    // this.router.navigate(
    //   ['/top']
      

    // );
    // }
  // }

// }

