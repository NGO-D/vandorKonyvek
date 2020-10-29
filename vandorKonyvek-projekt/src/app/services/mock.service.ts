import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Mock } from '../models/mock.model';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/mock';

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   createNew(mock: Mock): Observable<any> {
     return this.httpClient.put(`${this.url}/${'new'}`, mock);
   }

   update(mock: Mock): Observable<any> {
     return this.httpClient.post(`${this.url}/${mock.id}`, mock);
   }

   delete(mock: any): Observable<Mock> {
    return this.httpClient.delete<Mock>(`${this.url}/${mock.id}`);
  }
}

