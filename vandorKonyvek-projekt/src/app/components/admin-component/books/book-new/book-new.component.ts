import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  booksSubscription: Subscription;
  bookNewSignupForm: FormGroup;
  ajdi: Number = 5;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.get().subscribe(
        books => {
        this.books = books;
        console.log(this.books);
      },
      err => console.log(err)
    );
      

    this.bookNewSignupForm = new FormGroup( {
      'bo_author': new FormControl(null),
      'bo_title': new FormControl(null),
      'bo_image': new FormControl(null),
      'bo_available': new FormControl(null),
      'id': new FormControl(this.ajdi)
    } )
  }

onSubmit() {
  console.log(this.bookNewSignupForm);
}

ngOnDestroy() {
this.booksSubscription.unsubscribe();
}


}
