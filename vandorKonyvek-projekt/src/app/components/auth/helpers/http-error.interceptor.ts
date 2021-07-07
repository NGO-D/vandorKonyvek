import {
        HttpEvent,
        HttpInterceptor,
        HttpHandler,
        HttpRequest,   
        HttpErrorResponse
        } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorNotificationService } from '../services/error-notification.service';

@Injectable({
  providedIn: 'root'
})   
export class ErrorInterceptor implements HttpInterceptor {
    httpError: HttpErrorResponse;

   constructor(private errorNotificationService: ErrorNotificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe( 
          catchError((error: HttpErrorResponse) => {  
            this.errorNotificationService.retryFailedRequests();
            let errorMessage = ''; 
            if (error.error instanceof ErrorEvent) {     
              // client-side error 
              this.unauthorised();
              errorMessage = `Error: ${error.error.message}`;
            } else {    
              // server-side error 
             this.conflict();
              errorMessage = `Error Code: ${error.status} Message: ${error.message}`; 
            }              
            return throwError(errorMessage);  
          })  
        ) 
    }   

    // while registry entered email address is already in the database
    conflict() {
      if (this.httpError.status === 409) {
        this.errorNotificationService.conflict();
        };
      return;
    }

    // eg: token is epired, user is not signed in
    unauthorised() {
      if (this.httpError.status === 401) {
        this.errorNotificationService.unauthorised();
        };
      return;
    }
}