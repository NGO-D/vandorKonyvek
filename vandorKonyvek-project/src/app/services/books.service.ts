import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Books } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/books';

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   createNew(books: Books): Observable<any> {
     return this.httpClient.put(`${this.url}`, books);
   }

   update(books: Books): Observable<any> {
     return this.httpClient.post(`${this.url}/${books.bo_id}`, books);
   }

   //delete nem biztos, hogy működik
   delete(id: number): Observable<Books> {
    return this.httpClient.delete<Books>(`${this.url}/${id}`);
  }
}

