import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import {AppServices} from 'src/services/app-services'
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  
  firstNameFormControl = new FormControl();
  lastNameFormControl = new FormControl();
  addressFormControl = new FormControl();
  contactFormControl = new FormControl();
  nicFormControl = new FormControl();
  passwordFormControl = new FormControl();
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor(private http: HttpClient, public router:Router,private service:AppServices) { }

  ngOnInit() {
  }
  

  password(formGroup: { get: (arg0: string) => { value: any; }; }) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  register(){
    var  contact= this.contactFormControl.value;
    var number=contact.slice(1,9)
    var contactNo="94"+number
    // console.log(contactNo)
    
    
    var  address = this. addressFormControl.value;
    var firstName = this.firstNameFormControl.value;
    var lastName = this.lastNameFormControl.value;
    var email = this.emailFormControl.value;
    var password = this.passwordFormControl.value;
    var  nic = this. nicFormControl.value;
   

    let body = new HttpParams({

      fromObject:{
        'firstName':firstName,
        'lastName':lastName,
        'address':address,
        'contact':contactNo,
        'nic':nic,
        'email':email,
        'password':password,
        
      }

    });

    var url = 'http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/register'

    console.log(body)

    this.http.post<any>(url,body).subscribe(
      (data)=>{      
          alert('Register Sucess')
      },
      (error)=>{
        alert(`Email Is already Available`)
        this.router.navigate(
          ['/register']

        );
      }
    )

 
  }

}



