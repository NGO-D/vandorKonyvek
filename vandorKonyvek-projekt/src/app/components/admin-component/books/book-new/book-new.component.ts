import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { Books } from '../../../../models/books.model';
import { BooksService } from '../../../../services/books.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
  providers: [BooksService]
})  

export class BookNewComponent implements OnInit, OnDestroy{
  books: Array<Books>;
 // maxBookID: Any;
  booksSubscription: Subscription;
  bookFormSubscription: Subscription;
  bookNewSignupForm: FormGroup;
 
  ID: Number = -555;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksSubscription = this.booksService.get().subscribe(
        books => {
        this.books = books;
        },
        err => console.log(err)
        );

    this.bookNewSignupForm = this.booksService
    .createBookNewSignupForm();
    console.log(this.bookNewSignupForm);

  }

  onSubmit(): void {
    this.booksService.createNew(this.bookNewSignupForm.value).subscribe(
      response => {
        console.log('megvót! :)');
      },
      err => console.log(err)
    );
  //this.maxIDFinder();
    console.log(this.bookNewSignupForm.value);
//this.bookNewSignupForm.value.id = this.maxID;
    console.log(this.bookNewSignupForm.value);
  }
/*
 
 */

 ngOnDestroy(): void {
 this.booksSubscription.unsubscribe();
 }
}

