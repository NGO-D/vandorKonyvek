import { Component, OnInit, OnDestroy } from '@angular/core';
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
  booksSubscription: Subscription;
  bookFormSubscription: Subscription;
  bookNewSignupForm: FormGroup;
  newID: Number;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksSubscription = this.booksService.get().subscribe(
        books => {
        this.books = books;
        this.newID = this.booksService.maxIDFinder(this.books);
        this.bookNewSignupForm = this.booksService.createBookNewSignupForm();
        this.bookNewSignupForm.patchValue({id: this.newID});
        },
        error => console.log(error)
        );
  }

  onChanges(): void {
    this.booksService.createNew(this.bookNewSignupForm.value).subscribe(
      response => {
        console.log('megvót! :)');
      },
      err => console.log(err)
    );
  }

 ngOnDestroy(): void {
   this.bookFormSubscription.unsubscribe();
   this.booksSubscription.unsubscribe();
 }
}

