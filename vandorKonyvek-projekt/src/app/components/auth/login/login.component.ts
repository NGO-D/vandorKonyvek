import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  public hide = true;

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private _snackBar: MatSnackBar,
              ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      userPassword: ['', Validators.required]
    });
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {   
   if (this.loginForm.invalid) {
    this._snackBar.open('Sikertelen bejelentkezés.', '', {
      duration: 3000,
    });
    return;
  } else {
    this.authService.login(this.loginForm.value);
    }
  } 
  
}

