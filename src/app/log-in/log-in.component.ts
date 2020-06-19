import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SessionService } from '../session';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  passwordFormControl = new  FormControl();
  emailFormControl= new FormControl('',[
    Validators.required,
    Validators.email,
  ]);

  // mySession:SessionService

  constructor(private http: HttpClient,public session: SessionService, private router:Router) { }

  ngOnInit() {
  }

   login(){
      var email = this.emailFormControl.value;
      var password = this.passwordFormControl.value;
      // console.log(email)

     let body = new HttpParams({

       fromObject:{
         'email':this.emailFormControl.value,
         'password':password
       }
     });

     var url = "http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/login";

    //  console.log(body)

     this.http.post<any>(url,body).subscribe(
      data =>{
        console.log(data)
        if(!data){
          
          
          // this.session.setAuth(true);
          // this.session.setID(data['_id']);
          // this.session.setName(data['name']);

         
        }else{
          alert("Invalid Username or Password")
        }
      },
      (error)=>{
        alert("Login Sucsess")

       
        
        this.session.setAuth(true); 
        this.session.setID(email);
        this.session.id=email
        console.log(this.session)
        this.router.navigate(
          ['/top']

        );
      }

      
    
     ) 
   }

 }

 