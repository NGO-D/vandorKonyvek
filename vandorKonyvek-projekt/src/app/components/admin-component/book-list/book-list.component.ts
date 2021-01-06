import { Component, OnInit, OnDestroy, Type, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksService } from './books.service';
import { Books } from '../../../models/books.model';
import { OrderService } from '../shared/order/order-service.service';
import { OrderByPipe } from '../shared/pipes/order-pipe.pipe'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BooksService, OrderByPipe]
})

export class BookListComponent implements OnInit, OnDestroy {
  columnName: String = 'id';
  columnNameImput: String;
  books: Array<Books>;
  booksSubscription: Subscription;
  pipeSubscription: Subscription;
  toggle: Boolean = false;
  searchText = '';
  message:string;
  data: any;

  constructor(private booksService: BooksService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal,
              private orderService: OrderService,
              private orderbyPipe: OrderByPipe) 
              { }

  ngOnInit(): void {
    console.log("Books megy :D");
    this.booksSubscription = this.booksService.get().subscribe(
      books => {
        this.books = books;
      },
      err => console.error(err)
    );

   
/*
    this.orderService.currentMessage.subscribe(message => {
      this.message = message;
      console.log(this.message);
    });

     this.orderService.orderData().subscribe( data => {
      data = this.data;
      console.log(this.data);
    });
*/
   
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
