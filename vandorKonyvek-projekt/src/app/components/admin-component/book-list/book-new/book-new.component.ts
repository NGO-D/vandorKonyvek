import { Component, OnInit, Type } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Books } from '../books.model';
import { BooksService } from '../books.service';
import { AffirmModalComponent } from 'D:/vandorKonyvek/vandorKonyvek-projekt/src/app/components/modals/affirm-modal/affirm-modal.component';


const MODALS: {[name: string]: Type<any>} = {
   affirmModalComponent: AffirmModalComponent
};

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
  providers: [BooksService]
})  

export class BookNewComponent implements OnInit {
  books: Array<Books>;
  bookNewSignupForm: FormGroup; 
  newID: any;

  constructor(private booksService: BooksService,
              private formBuilder: FormBuilder,
              private modalService: NgbModal) {}

  ngOnInit(): void {
    this.bookNewSignupForm = this.formBuilder.group( {
      'book_author': [null],
      'book_title': [null],
      'book_image': [null],
      'book_available': [null],
      'book_id': [null]
    } )
  
    this.newID = this.booksService.getMaxID().subscribe(
      id => {
        this.bookNewSignupForm.patchValue({id: id});
      }
    )
  }

  openAffirmModal(name: string) {
    this.modalService.open(MODALS[name], { centered: true });
  }

  onSubmit(): void {
    this.booksService.createNew(this.bookNewSignupForm.value).subscribe(
      response => {
      console.log('new book added to database');
    })
   
  }
  

}

