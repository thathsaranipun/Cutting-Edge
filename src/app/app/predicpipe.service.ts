import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { DataInRisk } from 'src/models/pipes';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PredicpipeService {

 
  constructor(private http:HttpClient) { 
    // const API="http://localhost:4000/warning";
  
  }

  getforestPast(){
    return this.http.get<any[]>('http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/predict');
  //   Observable<DataInRisk[]>{
  // ;
  }

 



}
