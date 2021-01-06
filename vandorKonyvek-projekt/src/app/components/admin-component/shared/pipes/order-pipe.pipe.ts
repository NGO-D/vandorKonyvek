import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderPipe'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) { return value; } // no array
    if (value.length <= 1) { return value; } // array with only one item
    if (!column || column === '') { 
      if(order==='asc'){return value.sort()}
      else{return value.sort().reverse();}
    } // sort 1d array
    //return orderBy(value, [column], [order]);
  }
/*
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
*/
}

