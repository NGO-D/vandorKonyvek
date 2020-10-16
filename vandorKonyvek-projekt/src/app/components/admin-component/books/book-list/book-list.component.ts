import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


import { BooksService } from '../../../../services/books.service';
import { Books } from '../../../../models/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BooksService]
})
export class BookListComponent implements OnInit {
   
  books: Array<Books>;
 

  booksSubscription: Subscription;
  changeCounter: number = 0; //ez minek, kell egyáltalán ide?


  constructor(private booksService: BooksService,
              private router: Router,
              private activatedRoute: ActivatedRoute) 
              { }

  ngOnInit() {
    console.log("Books megy :D");
    this.booksSubscription = this.booksService.get().subscribe(
      books => {
        this.books = books;
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    this.booksSubscription.unsubscribe();
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
/* működik, csak mást használok
  onToBookDetails(book: any) {
    this.router.navigate([book.id], {relativeTo: this.activatedRoute});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
*/
}
