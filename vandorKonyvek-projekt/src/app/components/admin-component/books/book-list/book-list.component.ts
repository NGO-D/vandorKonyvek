import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';


import { BooksService } from '../../../../services/books.service';
import { Books } from '../../../../models/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Books[];

  constructor(private booksService: BooksService,
              private router: Router,
              private activatedRoute: ActivatedRoute) 
              { }

  ngOnInit() {
    console.log("Books megy :D");
    this.booksService.get().subscribe(books => {
      this.books = books;
    });
  }

//   nemműködik, az egyéni oldal után jó lesz
 onDeleteOneBook(id) {
   console.log('lúúúúúúúúúúúúúúúúúúúúúúzer')
 this.booksService.delete(id);
}

}
