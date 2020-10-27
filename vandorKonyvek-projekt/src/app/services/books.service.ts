import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Books } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
 // books: Array<Books>;
 // maxBookID: Number;

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/books';

   get(): Observable<any> {
    console.log(this.url)
     return this.httpClient.get(this.url);
   }

   createNew(books: Books): Observable<any> {
     return this.httpClient.put(`${this.url}`, books);
   }

   update(books: Books): Observable<any> {
     return this.httpClient.post(`${this.url}/${books.id}`, books);
   }

  

delete(book: any): Observable<Books> {
  console.log(book);
  console.log('evvót a book');
    return this.httpClient.delete<Books>(`${this.url}/${book.id}`);
  }
}

