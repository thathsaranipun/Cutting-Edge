import { Component, OnInit } from '@angular/core';

import { BlogService } from 'src/shared/blog.service';
import { NgForm } from '@angular/forms';
import { Blog } from 'src/shared/blog.model';

declare var M: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

constructor(public blogService: BlogService) { }

  ngOnInit(): void {
    this.resetForm();
    this.refreshBlogList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.blogService.selectedBlog = {
      _id: "",
      title: "",
      description: ""
    }
  }

  onSubmit(form : NgForm){
    if(form.value._id==""){
    this.blogService.postBlog(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshBlogList();
      M.toast({html: 'Saved!', classes: 'rounded'});
    });
  }else{
    this.blogService.putBlog(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshBlogList();
      M.toast({html: 'Updated !', classes: 'rounded'});
    });
  }
}

  refreshBlogList() {
    this.blogService.getBlogList().subscribe((res) => {
      this.blogService.blogs = res as Blog[];
    });
  }

  onEdit(blg : Blog){
    this.blogService.selectedBlog = blg;
  }

  onDelete(_id: string, form: NgForm){
    if (confirm ("Are you sure ?") == true) {
      this.blogService.deleteBlog(_id).subscribe((res) => {
        this.refreshBlogList();
        this.resetForm(form);
        M.toast({html: 'Deleted !', classes: 'rounded'});
      });
    }
  }
}

