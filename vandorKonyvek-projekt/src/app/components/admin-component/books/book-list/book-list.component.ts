import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


import { BooksService } from '../../../../services/books.service';
import { Books } from '../../../../models/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Books[];
  booksSubscription: Subscription;
  changeCounter: number = 0;


  constructor(private booksService: BooksService,
              private router: Router,
              private activatedRoute: ActivatedRoute) 
              { }

  ngOnInit() {
    console.log("Books megy :D");
    this.booksSubscription = this.booksService.get().subscribe(
      books => {
        this.books = books;
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
  }


  onDeleteOneBook(id: number): void {
    this.booksService.delete(id).forEach(data => {
      let index = this.books.findIndex(book => book.bo_id == id);
      this.books.splice(index, 1);
      this.changeCounter++;
    });

  }
//   nemműködik, az egyéni oldal után jó lesz
// onDeleteOneBook(books) {
//     console.log(books.bo_id);
//   this.booksService.delete(books.bo_id);
//  }

}
