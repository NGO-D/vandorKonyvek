import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Books } from './books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<Books>;

  constructor(private httpClient: HttpClient) { }

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/books';

  findMax(list: Books[]): number | undefined {
    return (list.reduce((max, book) => (book.book_id > max ? book.book_id : max ), list[0].book_id)) + 1;
  }

  getMaxID(): Observable<any> {
  return this.httpClient.get(this.url).pipe(map(this.findMax));
  }

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   createNew(books: Books): Observable<any> {
     return this.httpClient.post(`${this.url}/${'new'}`, books);
   }

   update(books: Books): Observable<any> {
     return this.httpClient.patch(`${this.url}/${books.book_id}`, books);
   }

   delete(book: any): Observable<Books> {
      return this.httpClient.delete<Books>(`${this.url}/${book.book_id}`);
  }

}

