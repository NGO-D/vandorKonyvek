import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Admins } from '../models/admins.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/admin';

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   createNew(admins: Admins): Observable<any> {
     return this.httpClient.put(`${this.url}/${'new'}`, admins);
   }

   update(admins: Admins): Observable<any> {
     return this.httpClient.post(`${this.url}/${admins.id}`, admins);
   }

   delete(admin: any): Observable<Admins> {
    return this.httpClient.delete<Admins>(`${this.url}/${admin.id}`);
  }
}

