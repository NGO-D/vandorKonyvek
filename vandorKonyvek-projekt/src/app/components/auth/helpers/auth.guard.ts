import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { AuthService } from '../services/auth.service';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, 
                private router: Router) 
                {}
  
   
    canActivate(next: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): boolean {
                  const isAuth = this.authService.isAuthenticated();
                  if (!isAuth) {
                    this.router.navigate(['/login']);
                  }
                  return isAuth;
  }
  }