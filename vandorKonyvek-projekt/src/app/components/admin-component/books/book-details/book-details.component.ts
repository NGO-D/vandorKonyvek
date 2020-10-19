import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Books } from '../../../../models/books.model';
import { BooksService } from '../../../../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  books: Array<Books>;
  booksSubscription: Subscription;
  oneBook: Books = new Books();
  id: Number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private booksService: BooksService) 
              { 
                //this.id = +this.router.url.split('/')[3];
               /* let id: number;

                activatedRoute.params.forEach(data => id = data.id)
                console.log('ájdi');
                console.log(id);
                ps.read().forEach(memberArray => {
                  this.editProduct = memberArray.filter(member => member.id == id)[0];
                  console.log(this.editProduct); */
              }

  ngOnInit() {
    console.log('book-details vagyok');
    this.booksSubscription = this.booksService.get().subscribe(
      books => {
        this.books = books;
      }
    )
    err => console.log(err);
    this.activatedRoute.params.forEach(data => this.id = data.id)
                console.log('ájdi');
                console.log(this.id);
                console.log(this.activatedRoute.params);

   this.booksService.get().forEach(data => {
     this.oneBook = data.find(member => member.id = this.id);
     console.log(this.oneBook);
   });
    }
  
ngOnDestroy() {
this.booksSubscription.unsubscribe();
}

}
