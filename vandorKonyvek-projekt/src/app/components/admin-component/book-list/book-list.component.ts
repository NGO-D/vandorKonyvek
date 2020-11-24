import { Component, OnInit, OnDestroy, Type, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksService } from './books.service';
import { Books } from '../../../models/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BooksService]
})

export class BookListComponent implements OnInit, OnDestroy {
  columnName: String = 'id';
  books: Array<Books>;
  booksSubscription: Subscription;
  pipeSubscription: Subscription;
  toggle: Boolean = false;

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

  onColumnName(col: any): any {
    this.toggle = !this.toggle;
    if (this.columnName != col) {
      this.toggle = true;
      this.columnName = col;
     
    }
    this.books.sort((a: any, b: any) => {
      if (a[col] < b[col]) {
        return -1;
      } else if (a[col] > b[col]) {
        return 1;
      } else {
        return 0;
      }
    });
    if (this.toggle) {
      return this.books;
    } else {
      return this.books.reverse();
    }
  }

/* a modal under construction
  open(content) {
    console.log(content);
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

*/

  onDelete(obj: any): void {
  console.log(obj);
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
