import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-affirm-modal',
  templateUrl: './affirm-modal.component.html',
  styleUrls: ['./affirm-modal.component.css']
})
export class AffirmModalComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
