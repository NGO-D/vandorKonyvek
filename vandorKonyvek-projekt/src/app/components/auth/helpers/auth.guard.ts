import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
  } from '@angular/router';
  import { Injectable } from '@angular/core';
  import { Observable, of, pipe } from 'rxjs';
  import { AuthService } from '../services/auth.service';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, 
                private router: Router) 
                {}
  
  public canActivate(next: ActivatedRouteSnapshot, 
            state: RouterStateSnapshot
            ): Observable<boolean> | Promise<boolean> | boolean {
            if (!this.authService.isAuthenticated()) {
              this.router.navigate(['/login']);
              return false;
            } 
            return true;
                        
    }
  }

 