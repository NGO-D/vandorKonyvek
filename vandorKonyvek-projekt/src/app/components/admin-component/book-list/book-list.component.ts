import { Component, OnInit, OnDestroy, Type, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksService } from './books.service';
import { Books } from '../../../models/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BooksService]
})

export class BookListComponent implements OnInit, OnDestroy {
  columnName: String = 'id';
  columnNameImput: String;
  books: Array<Books>;
  booksSubscription: Subscription;
  pipeSubscription: Subscription;
  toggle: Boolean = false;
  searchText = '';
  message:string;
  data: any;

  constructor(private booksService: BooksService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal) 
              { }

  ngOnInit(): void {
    console.log("Books megy :D");
    this.booksSubscription = this.booksService.get().subscribe(
      books => {
        this.books = books;
      },
      err => console.error(err)
    );
   
  }

 


 

  onDelete(obj: any): void {
  console.log(obj);
    this.booksService.delete(obj).forEach(data => {
      let index = this.books.findIndex(book => book.id == obj.id);
      console.log(index);
      this.books.splice(index, 1);
      console.log(this.books)
    });
  }


  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  } 


}
