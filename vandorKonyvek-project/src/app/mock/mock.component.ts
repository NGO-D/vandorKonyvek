import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';
import { Mock } from '../models/mock.model';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})

export class MockComponent implements OnInit {
  mocks: Mock[];
  mock: Mock;

  constructor(private mockService: MockService) { }

  ngOnInit() {
    console.log('mock megy :D');
    this.mockService.getAll().subscribe(mocks => {
      this.mocks = mocks;
console.log(this.mocks);
    });
  }

}
