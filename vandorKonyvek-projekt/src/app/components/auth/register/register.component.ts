import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  
  constructor(private formBuilder: FormBuilder, 
              private router: Router, 
              private _snackBar: MatSnackBar,
              private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      user_lastName: ['', Validators.required],
      user_firstName: ['', Validators.required],
      user_region: ['', Validators.required],
      user_city: ['', Validators.required],
      user_postcode: ['', Validators.required],
      user_userName: ['', Validators.required],
      user_email: ['', Validators.required],
      user_password: ['', Validators.required],
    });
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {    
    if (this.registerForm.invalid) {
      this._snackBar.open('Sikertelen ', 'regisztráció!', {
        duration: 3000,
      });
      return;
    } else {
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          this._snackBar.open('Sikeres ', 'regisztráció!', {
            duration: 2000,
          })
        },
        (error) => {
          console.error(error);
          this._snackBar.open('Sikertelen ', 'regisztráció!', {
            duration: 3000,
          });
        }
      )
      
      }
    }
  }
