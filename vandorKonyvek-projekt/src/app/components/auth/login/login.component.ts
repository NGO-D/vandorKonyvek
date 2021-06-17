import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private authService: AuthService)
               { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user_email: ['', Validators.required],
      user_password: ['', Validators.required]
    });
  }

  get data() { return this.loginForm.controls; }

  onSubmit() {    
   if (this.loginForm.invalid) {
     console.log('kakuk');
    return;
  } else {
    console.log('comp');
    this.authService.login(this.loginForm.value);
  } 
  this.router.navigate(['/']);
  }
}

