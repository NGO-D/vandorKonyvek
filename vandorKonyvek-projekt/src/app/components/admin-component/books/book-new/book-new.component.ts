import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
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
 // bookFormSubscription: Subscription;
  bookNewSignupForm: FormGroup; 
  newID: Number;

  constructor(private booksService: BooksService,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.bookNewSignupForm = this.formBuilder.group( {
      'bo_author': [null],
      'bo_title': [null],
      'bo_image': [null],
      'bo_available': [null],
      'id': [null]
    } )
  

   this.booksSubscription = this.booksService.get().subscribe(
        books => {
        this.books = books;
        this.newID = this.booksService.maxIDFinder(this.books);
        console.log(this.bookNewSignupForm.value);
        this.bookNewSignupForm.patchValue({id: this.newID});
        this.bookNewSignupForm.statusChanges.subscribe(
          (status) => {
            console.log(this.bookNewSignupForm);
            this.booksService.createNew(this.bookNewSignupForm.value).subscribe(
              (respose) => {
                console.log('new book added to database');
              }
            )
        },
        error => console.log(error)
        );
      }
      )

  }

  onChanges() {
    console.log();
    console.log(this.bookNewSignupForm.value);
  }
    /*
  onChanges(): void {
    this.booksService.createNew(this.bookNewSignupForm.value).subscribe(
      response => {
        console.log('megvót! :)');
      },
      err => console.log(err)
    );
  }
*/

 ngOnDestroy(): void {
   this.booksSubscription.unsubscribe();
 }
}

