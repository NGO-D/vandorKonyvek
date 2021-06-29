import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import decode from 'jwt-decode';
import { TokenPayload } from '../models/token-payload.model';
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
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = this.tokenStorageService.getToken();
    // decode the token to get its payload
    const tokenPayload: TokenPayload = decode(token);
    console.log("token payload:");
    console.log(tokenPayload);
    if (
      !this.authService.isAuthenticated() || 
      tokenPayload.user_role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    } 
    return true;
  }
}