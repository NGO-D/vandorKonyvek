import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  constructor(private _snackBar: MatSnackBar) {}

  emailAlreadyInUse()  {

    this._snackBar.open('Ezzel az e-mail címmel már regisztrált nálunk felhasználó.', '', {
      duration: 3000,
    });
  }
}