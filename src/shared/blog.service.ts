import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog.model';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  selectedBlog: Blog;
  blogs: Blog[];
  readonly baseURL = 'http://ec2-18-222-252-84.us-east-2.compute.amazonaws.com:3100/blog'

  constructor(public http: HttpClient) { }

  postBlog(blg : Blog){
    return this.http.post(this.baseURL,blg);
  }

  getBlogList() {
    return this.http.get(this.baseURL);
  }

  putBlog(blg: Blog) {
    return this.http.put(this.baseURL + `/${blg._id}`, blg);
  }

  deleteBlog(_id: string){
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
