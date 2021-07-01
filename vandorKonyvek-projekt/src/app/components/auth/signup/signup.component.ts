import { Component, 
         OnInit,
         } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators,
         } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  userRegions: String[];
  selectedRegion: String;
  hide = true;
  
  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private router: Router,
              private _matSelectModule: MatSelectModule,
              private _snackBar: MatSnackBar,
              ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      user_lastName: ['', 
                          [
                          Validators.required,
                          Validators.minLength(2),
                          Validators.maxLength(20),
                          ]
                      ],
      user_firstName: ['', 
                          [
                          Validators.required,
                          Validators.minLength(2),
                          Validators.maxLength(20),
                        ]
                      ],
      user_region: [ '', Validators.required],
      user_city: ['', 
                      [ 
                        Validators.required,
                        Validators.minLength(2),
                        Validators.maxLength(20),
                      ]
                  ],
      user_postcode: ['', 
                          [
                            Validators.required,
                            Validators.minLength(4),
                            Validators.maxLength(4),
                          ]
                      ],
      user_userName: ['', 
                          [
                            Validators.required,
                            Validators.minLength(2),
                            Validators.maxLength(20),
                          ]
                      ],
      user_email: ['', 
                        [
                          Validators.required,
                          Validators.minLength(4),
                          Validators.maxLength(20),
                        ]
                  ],
      user_password: ['', 
                          [
                            Validators.required,
                            Validators.minLength(6),
                            Validators.maxLength(20),
                            Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),
                          ]
                      ],
    });

    this.authService.userRegionSelecter().subscribe(
      (regions) => {
        this.userRegions = regions;
        console.log('userRegions ngonint:');
        console.log(this.userRegions);
      },
      (error) => {
        console.error(error);
      } 
    );
  }

  get data() { return this.registerForm.controls; }

  onSubmit() {    
    console.log('onsubmit:');
    console.log(this.registerForm.value);
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
