import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private messageSource = new BehaviorSubject('I am Behavior Subject!');
  currentMessage = this.messageSource.asObservable();
  toggle: boolean;
  columnNameInput: any;
  columnName: string;
  tableData: any;
  result: any;

  constructor() { }
  
  changeMessage(col: string): void {
    this.messageSource.next(col);
  }

  orderData(): Observable<any> {
    this.toggle = !this.toggle;
    if (this.columnName != this.columnNameInput) {
      this.toggle = true;
      this.columnName = this.columnNameInput;
     
    }
    this.tableData.sort((a: any, b: any) => {
      if (a[this.columnNameInput] < b[this.columnNameInput]) {
        return -1;
      } else if (a[this.columnNameInput] > b[this.columnNameInput]) {
        return 1;
      } else {
        return 0;
      }
    });
    if (this.toggle) {
      return this.tableData;
    } else {
      return this.tableData.reverse();
    }
  }

}
