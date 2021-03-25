import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from './books.service';
import { Books } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BooksService]
})

export class BookListComponent implements OnInit, OnDestroy {
  books: Array<Books>;
  booksSubscription: Subscription;
  searchText = '';

  constructor(private booksService: BooksService) 
              { }

  ngOnInit(): void {
    this.booksSubscription = this.booksService.get().subscribe(
      books => {
        this.books = books;
      },
      err => console.error(err)
    );
  }

  onDelete(obj: any): void {
    this.booksService.delete(obj).forEach(data => {
      let index = this.books.findIndex(book => book.book_id == obj.id);
      this.books.splice(index, 1);
    });
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  } 


}

