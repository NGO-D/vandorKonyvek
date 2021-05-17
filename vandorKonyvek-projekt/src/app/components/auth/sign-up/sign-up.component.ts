import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

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

}
