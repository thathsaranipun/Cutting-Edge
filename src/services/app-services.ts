import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable, from } from 'rxjs';
import { ForestFires } from 'src/models/forest-fires';
import {User} from 'src/models/user/user';
import {map} from 'rxjs/operators';
import {CommentUs} from 'src/models/comment-us';
@Injectable()
export class AppServices {

   
    private futureForestFires:string
    private logindetails:string
    private getComment:string;

    constructor(private http:HttpClient){
            // const API="http://http://ec2-18-221-107-214.us-east-2.compute.amazonaws.com:4000/lastone";
            this.futureForestFires="http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/lastone";
            this.logindetails="http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/login";
            this.getComment='http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/notes';

    }

    public findAllForestFirePredictions():Observable<ForestFires>{
        return this.http.get<ForestFires>(this.futureForestFires);
    }

    public getLoginUserDetails():Observable<User[]>{
        return this.http.get<User[]>(this.logindetails)
    }

    public sendUserLogedDetails(logedUser:any){
        return this.http.post<any[]>(this.logindetails,logedUser)
    }

  public registerUser(user:User) {
    return this.http.post(this.logindetails, user)
  }
  public saveComment(comment:CommentUs){
    return this.http.post<CommentUs[]>(this.getComment,comment)
  }
  veiw(){
    return this.http.get<any[]>('http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3000/notes');
  }
}
