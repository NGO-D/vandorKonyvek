import { Component, 
         OnInit,
         } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators,
         } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth.service';
import { MustMatch } from '../helpers/password-match.validator';

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
  hideConfirm = true;
  
  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private matSnackBar: MatSnackBar,
              ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userLastName:    ['', Validators.required],
      userFirstName:   ['', Validators.required],                  
      userRegion:      ['', Validators.required],
      userCity:        ['', Validators.required],
      userPostcode:    ['', [Validators.required, Validators.maxLength(4)]],
      userName:        ['', Validators.required],
      userEmail:       ['', [Validators.required, Validators.email]],
      userPassword:    ['', [Validators.required, Validators.minLength(6),
                             Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      userConfirmPassword:  ['', [Validators.required, Validators.minLength(6),
                             Validators.pattern(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)]],
      userAcceptTerms:      [false, Validators.requiredTrue],
    },
    {
     validator: MustMatch('userPassword', 'userConfirmPassword')
    },
    
  );

    this.authService.userRegionSelecter().subscribe(
      (regions) => {
        this.userRegions = regions;
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
      this.matSnackBar.open('Sikertelen ', 'regisztráció!', {
        duration: 3000,
      });
      return;
    } else {
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          this.matSnackBar.open('Sikeres ', 'regisztráció!', {
            duration: 2000,
          })
        },
        (error) => {
          this.matSnackBar.open('Sikertelen ', 'regisztráció!', {
            duration: 3000,
          });
        }
      )
      
      }
    }

    ngOnDestroy() {

    }
  }
