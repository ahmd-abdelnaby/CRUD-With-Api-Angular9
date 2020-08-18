import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPost } from '../Cutom DataTypes/ipost';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAllPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`);
  }
  getPostByID(id): Observable<IPost>{
    return this.httpClient.get<IPost>(`https://jsonplaceholder.typicode.com/posts/`+id);
  }
  Update(post,id){
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
        })};
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/`+id,post,httpOptions);
  }

  Delete(id)
  {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/`+id);
  }
}
