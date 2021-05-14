import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor() { }

  ngOnInit(){
    /*this.signupForm = new FormGroup( {
      'userData': new FormGroup( {
        'username': new FormControl(null, Validators.required), 
        'email': new FormControl(null, [Validators.required, Validators.email])
      } ),
      'gender': new FormControl('female')
    } );*/
  }
 
}
