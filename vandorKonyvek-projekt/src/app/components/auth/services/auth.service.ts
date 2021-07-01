import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthDto } from '../dto/auth.dto';
import { User } from '../models/user.model';
import { TokenStorageService } from './token-storage.service';
import { UserRole } from '../models/user-role.enum';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Regions, UserRegion } from '../models/user-region.enum';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  private jwtHelper = new JwtHelperService();
  private regions = new Regions();

  constructor(private httpClient: HttpClient,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('auth-token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(authDto: AuthDto): Observable<any> {
    const endpoint: string = this.apiUrl + "/auth/signin";
    this.httpClient.post(endpoint, authDto).subscribe(
      (response) => {
        const token = response[Object.keys(response)[0]];
        this.tokenStorageService.saveToken(token);
        this.loginEndpointSwitch(token);
      },
      (error) => {
        console.error(error);
      } 
    );
    return;
  }

  userRegionSelecter(): Observable<String[]> {
    console.log('auth service:');
    console.log(this.regions.regionsToArray());
    return of(this.regions.regionsToArray());
  }

  loginEndpointSwitch(token): void {
    if (this.tokenStorageService.decodeToken(token).user_role === UserRole.common) {
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/admin']);
    }
  }

  register(user: User): Observable<User> {
          const endpoint: string = this.apiUrl + "/auth/signup";
          const httpParams = { 
            user_lastName: user.user_lastName,
            user_firstName: user.user_firstName,
            user_region: user.user_region,
            user_city: user.user_city,
            user_postcode: user.user_postcode,
            user_userName: user.user_userName,
            user_role: UserRole.common,
            user_email: user.user_email,
            user_password: user.user_password
          };
          this.httpClient.post(endpoint, httpParams).subscribe(
            (response) => {
              this.router.navigate(['/login']);
            },
            (error) => {
              console.error(error);
            }
          );
          return;
    }

  }


 