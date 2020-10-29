import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Baskets } from '../models/baskets.model';

@Injectable({
  providedIn: 'root'
})
export class BasketsService {

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/basket';

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   createNew(baskets: Baskets): Observable<any> {
     return this.httpClient.put(`${this.url}/${'new'}`, baskets);
   }

   update(baskets: Baskets): Observable<any> {
     return this.httpClient.post(`${this.url}/${baskets.id}`, baskets);
   }

   //delete nem biztos, hogy működik
   delete(basket: any): Observable<Baskets> {
    return this.httpClient.delete<Baskets>(`${this.url}/${basket.id}`);
  }
}

