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
  bookNewSignupForm: FormGroup; 
  newID: any;

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
  
    this.newID = this.booksService.getMaxID().subscribe(
      id => {
        this.bookNewSignupForm.patchValue({id: id});
        console.log(this.bookNewSignupForm.value);
      }
    )
  }

  onChanges(): void {
    console.log(this.bookNewSignupForm.value);
    this.booksService.createNew(this.bookNewSignupForm.value).subscribe(
      response => console.log('new book added to database')
    )
  }
  

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }
}

