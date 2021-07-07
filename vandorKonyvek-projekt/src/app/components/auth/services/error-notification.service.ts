import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorNotificationService {
  public cachedRequests: Array<HttpRequest<any>> = [];
  
  constructor(private _snackBar: MatSnackBar) {}

  public collectFailedRequest(request): void {
    this.cachedRequests.push(request);
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

  public conflict(): void  {
    this._snackBar.open('Ezzel az e-mail címmel már regisztrált nálunk felhasználó.', '', {
      duration: 3000,
    });
  }
  
  public unauthorised() {
    this._snackBar.open('Az oldal megtekintéséhez bejelentkezés szükséges.', '', {
      duration: 3000,
    });
    // then redirect
  }
}