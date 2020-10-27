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
export class BookNewComponent implements OnInit {
  books: Array<Books>;
 // maxBookID: Any;
  booksSubscription: Subscription;
  bookNewSignupForm: FormGroup;
  maxID: Number = -555;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.get().subscribe(
        books => {
        this.books = books;
        },
        err => console.log(err)
        );

    this.bookNewSignupForm = new FormGroup( {
      'bo_author': new FormControl(null),
      'bo_title': new FormControl(null),
      'bo_image': new FormControl(null),
      'bo_available': new FormControl(null),
      'id': new FormControl(null)
    } )
  }

 onSubmit() {
  this.maxIDFinder();
  console.log(this.bookNewSignupForm.value);
this.bookNewSignupForm.value.id = this.maxID;
console.log(this.bookNewSignupForm.value);
 }

 maxIDFinder() {
  this.maxID = this.books.reduce((max, element) => (element.id > max ? element.id : max),
        this.books[0].id) + 1;
  console.log(this.maxID);
 }

 ngOnDestroy() {
 this.booksSubscription.unsubscribe();
 }


}

