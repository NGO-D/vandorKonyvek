import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { OrderService } from '../order/order-service.service';

import { BooksService } from '../../book-list/books.service';
import { Books } from '../../../../models/books.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  columnName: String = 'id';
 
  toggle: Boolean = false;
  searchText = '';
  message:string;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.currentMessage.subscribe(message => this.message = message)
  }

  onColumnName(col: string): void {
    this.orderService.changeMessage(col);
  }

  

  ngOnDestroy(): void {
  } 
}
