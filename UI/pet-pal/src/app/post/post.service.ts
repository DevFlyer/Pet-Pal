import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  private apiBase: string;
  private postEndpoint: string;
  constructor(private httpClient: HttpClient) { }
  
  savePost(post: Post):Observable<Post> {
    return this.httpClient.post<Post>(`${this.apiBase}${this.postEndpoint}`, post);
  }
}
