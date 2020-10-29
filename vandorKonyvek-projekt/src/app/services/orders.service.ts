import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Orders } from '../models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/orders';

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   createNew(orders: Orders): Observable<any> {
     return this.httpClient.put(`${this.url}/${'new'}`, orders);
   }

   update(orders: Orders): Observable<any> {
     return this.httpClient.post(`${this.url}/${orders.id}`, orders);
   }

   //delete nem biztos, hogy működik
   delete(order: any): Observable<Orders> {
    return this.httpClient.delete<Orders>(`${this.url}/${order.id}`);
  }
}

