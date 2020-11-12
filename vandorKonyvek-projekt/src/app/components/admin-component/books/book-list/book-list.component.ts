import { Component, OnInit, OnDestroy, Type } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BooksService } from '../../../../services/books.service';
import { Books } from '../../../../models/books.model';
import { DeleteModalComponent } from 'D:/vandorKonyvek/vandorKonyvek-projekt/src/app/components/modals/delete-modal/delete-modal.component';

const MODALS: {[name: string]: Type<any>} = {
  deleteModalComponent: DeleteModalComponent
};

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BooksService]
})

export class BookListComponent implements OnInit, OnDestroy {
   
  books: Array<Books>;
  booksSubscription: Subscription;

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

  onOpenDeleteModal(name: string) {
    this.modalService.open(MODALS[name], { centered: true });
  }

  onDelete(obj: any): void {
  console.log(obj.id);
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


/* működik, csak mást használok
  onToBookDetails(book: any) {
    this.router.navigate([book.id], {relativeTo: this.activatedRoute});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
*/
}
