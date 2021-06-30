import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class RoleGuard implements CanActivate {

  constructor(public authService: AuthService, 
              public tokenStorageService: TokenStorageService,
              public router: Router) 
              {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
              ): boolean {
    const expectedRole = route.data.expectedRole;
    const token = this.tokenStorageService.getToken();
    
    if (
      !this.authService.isAuthenticated() || 
      this.tokenStorageService.decodeToken(token).user_role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    } 
    return true;
  } 

}