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
  
   
    canActivate(
      // ezeket ki kéne törölni, de nem tudom, mit csinálnak. lehet, kellenek még később
      next: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                  const isAuth = this.authService.isAuthenticated();
                  if (!isAuth) {
                    this.router.navigate(['/login']);
                  }
                  return isAuth;
  }
  }