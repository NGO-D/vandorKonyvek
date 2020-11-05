import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators, ReactiveFormsModule,
         FormBuilder } from '@angular/forms';

import { Books } from '../models/books.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  //books: Array<Books>;
 
  //maxID: Number;

  constructor(private httpClient: HttpClient,
              private formBuilder: FormBuilder) { }



  maxIDFinder(books) {
    let maxID = books.reduce((max, element) => (element.id > max ? element.id : max),
          books[0].id) + 1;
    return maxID;
    }
  

   // list: BehaviorSubject<any> = new BehaviorSubject([]);
   url: string = 'http://localhost:3000/api/books';

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

