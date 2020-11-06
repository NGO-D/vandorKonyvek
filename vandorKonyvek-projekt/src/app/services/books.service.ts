import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Books } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<Books>;

  constructor(private httpClient: HttpClient) { }


   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/books';

  findMax(list: Books[]): number | undefined {
    return (list.reduce((max, book) => (book.id > max ? book.id : max ), list[0].id)) + 1;
}

  getMaxID(): Observable<any> {
  return this.httpClient.get(this.url).pipe(map(this.findMax));
  }

   get(): Observable<any> {
     return this.httpClient.get(this.url);
   }

   //POST
   createNew(books: Books): Observable<any> {
     return this.httpClient.post(`${this.url}/${'new'}`, books);
   }

   //PUT
   update(books: Books): Observable<any> {
     return this.httpClient.put(`${this.url}/${books.id}`, books);
   }

   delete(book: any): Observable<Books> {
      return this.httpClient.delete<Books>(`${this.url}/${book.id}`);
  }

}

