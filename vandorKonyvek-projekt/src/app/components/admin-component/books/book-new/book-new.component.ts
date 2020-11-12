import { Component, OnInit, OnDestroy, Type, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Books } from '../../../../models/books.model';
import { BooksService } from '../../../../services/books.service';
import { AffirmModalComponent } from 'D:/vandorKonyvek/vandorKonyvek-projekt/src/app/components/modals/affirm-modal/affirm-modal.component';

// @Component({
//   selector: 'ngbd-modal-confirm',
//   template: `
 
//   `
// })

// export class NgbdModalConfirm {
//   constructor(public modal: NgbActiveModal) {}
//   @Output() ok = new EventEmitter<boolean>();

//    clickedOK(agreed: boolean) {
//     this.ok.emit(agreed);
//     console.log('itt meg megvan');
//   }

// }

// const MODALS: {[name: string]: Type<any>} = {
//   focusFirst: NgbdModalConfirm
// };

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

  openAffirmModal(name: string) {
    this.modalService.open(MODALS[name], { centered: true });
  }

  onSubmit(): void {
    console.log(this.bookNewSignupForm.value);
    this.booksService.createNew(this.bookNewSignupForm.value).subscribe(
      response => {
      console.log('new book added to database');
      /* az alábbi nem működik, kitörli a form elemeit, de nem törli ki az oldalon, és nem ad új ID-t se.
      this.bookNewSignupForm.reset();
      console.log(this.bookNewSignupForm.value);
      */
    })
   
  }
  

}

