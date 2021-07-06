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
            let errorMessage = ''; 
            this.httpError = error;
            if (error.error instanceof ErrorEvent) {
              // client-side error 
              errorMessage = `Error: ${error.error.message}`;
            } else {  
              // server-side error 
             this.emailAlreadyInUse();
              errorMessage = `Error Code: ${error.status} Message: ${error.message}`; 
            }  
            //window.alert(errorMessage);  
            
            return throwError(errorMessage);  
          })  
        ) 
    }   

    emailAlreadyInUse() {
      if (this.httpError.status === 409) {
        this.errorNotificationService.emailAlreadyInUse();
        };
      return;
    }
}