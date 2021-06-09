import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
   user_lastName: null,
   user_firstName: null,
   user_region: null,
   user_city: null,
   user_postcode: null,
   user_userName: null,
   user_password: null 
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    console.log('vagyok');
  }

  onSubmit(): void {
    console.log('kukucs');
    const { user_lastName,
            user_firstName,
            user_region,
            user_city,
            user_postcode,
            user_userName,
            user_password } = this.form;

    this.authService.register(user_lastName,
      user_firstName,
      user_region,
      user_city,
      user_postcode,
      user_userName,
      user_password).subscribe(
      data => {
        console.log(user_lastName);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        console.log(user_lastName);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

 /* registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private _snackBar: MatSnackBar) { }

              ngOnInit() {
                this.registerForm = this.formBuilder.group({
                  firstname: ['', Validators.required],
                  lastname: ['', Validators.required],
                  username: ['', Validators.required],
                  password: ['', Validators.required]
                });
              }
  get data() { return this.registerForm.controls; }

  onSubmit() {    
    if (this.registerForm.invalid) {
      return;
    } else {
      localStorage.setItem("firstname", this.data.firstname.value);
      localStorage.setItem("lastname", this.data.lastname.value);
      localStorage.setItem("username", this.data.username.value);
      localStorage.setItem("password", this.data.password.value);
      console.log(localStorage);
      this._snackBar.open('Register Successfully', 'Success', {
        duration: 2000,
      });
      this.router.navigate(['/admin/login']);
    }
  }
*/
}
