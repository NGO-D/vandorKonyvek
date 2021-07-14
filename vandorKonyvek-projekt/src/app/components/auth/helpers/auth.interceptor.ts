import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,
                private tokenStorageService: TokenStorageService) {}
  
   intercept(req: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.tokenStorageService.getToken();
      console.log(`Interceptor`);
      const authRequest = req.clone({
        headers: req.headers.set('Authorization',  'Bearer ' + authToken),
      });
      console.log(authRequest);
      return next.handle(authRequest);
    }
  }

