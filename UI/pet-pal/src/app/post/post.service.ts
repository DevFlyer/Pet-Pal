import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class PostService {
  private apiBase: string;
  private postEndpoint: string;
  constructor(private httpClient: HttpClient) {
    this.apiBase = environment.baseApi;
   }
  
  savePost(post: Post):Observable<Post> {
    this.postEndpoint = 'post';
    return this.httpClient.post<Post>(`${this.apiBase}${this.postEndpoint}`, post);
  }
}
