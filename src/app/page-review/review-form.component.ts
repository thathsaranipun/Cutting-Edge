import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentUs } from 'src/models/comment-us';
import {AppServices } from 'src/services/app-services';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  display:any[]
  commets:CommentUs
  
  onSubmit(){
    console.log(this.commets);
    alert(`=== Thank You For Commenting Us ===`)
    this.userService.saveComment(this.commets).subscribe(result => this.gotoUserThanku());
  }




   
    
   
 


  gotoUserThanku() {  
    this.router.navigate(['/page-review']);
  }

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: AppServices,
    public appServices:AppServices
    
  ) { 
    this.commets=new CommentUs();
    this.appServices.veiw().subscribe(CommentList=>{this.display=CommentList});
  }

  ngOnInit() {
  }


  // onRate($event:{newValue:number}) {
  //   confirm(`
  //    You Rated us : ${$event.newValue} Stars, 
  //    If you Need to Submit Press Submit Button,
  //    Thank You for Rate Us`);
  // }
  



}
