import { Component, OnInit, Type } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Books } from '../books.model';
import { BooksService } from '../books.service';
import { AffirmModalComponent } from '../../../modals/affirm-modal/affirm-modal.component';


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
      'book_description': [null],
      'book_title': [null],
      'book_image': [null],
    } )
  
    this.newID = this.booksService.getMaxID().subscribe(
      id => {
        this.bookNewSignupForm.patchValue({id: id});
      }
    )
  }

  openAffirmModal(name: string) {
    console.log('open');
    this.modalService.open(MODALS[name], { centered: true });
    console.log(name);
  }

  onSubmit(): void {
    console.log(this.bookNewSignupForm.value);
    this.booksService.createNew(this.bookNewSignupForm.value).subscribe(
      response => {
      console.log('new book added to database');
    })
   
  }
  

}

