import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {center} from 'src/models/center';
@Injectable({
  providedIn: 'root'
})
export class CenterService {

  constructor(private http:HttpClient) { }



  enterCenter(){
    return this.http.get<center[]>('http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/chatcbot');
  }
}
