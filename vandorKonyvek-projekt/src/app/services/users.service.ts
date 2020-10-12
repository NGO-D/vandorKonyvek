import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/users';

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   createNew(users: Users): Observable<any> {
     return this.httpClient.put(`${this.url}`, users);
   }

   update(users: Users): Observable<any> {
     return this.httpClient.post(`${this.url}/${users.us_id}`, users);
   }

   //delete nem biztos, hogy működik
   delete(id: number): Observable<Users> {
    return this.httpClient.delete<Users>(`${this.url}/${id}`);
  }
}

