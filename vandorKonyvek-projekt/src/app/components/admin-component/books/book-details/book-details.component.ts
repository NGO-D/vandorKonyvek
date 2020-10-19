import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) 
              { }

  ngOnInit(): void {
    console.log('nah');
  }

}
