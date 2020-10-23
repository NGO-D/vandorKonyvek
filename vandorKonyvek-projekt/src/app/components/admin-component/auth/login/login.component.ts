import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup; //it is going to contain the form

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup( {
      'userData': new FormGroup( {
        'username': new FormControl(null, Validators.required), 
        'email': new FormControl(null, [Validators.required, Validators.email])
      } ),
      'gender': new FormControl('female')
    } );
  }
 //first arugment is the default value, this one has none
        // second arg is validation, there is no () after required and it never be called
        // the key-value pairs are the controls. FormGroups consist of FormControls

        onSubmit() {
          console.log(this.signupForm);
        }
              
}
