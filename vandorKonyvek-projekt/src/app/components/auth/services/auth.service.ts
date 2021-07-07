import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthDto } from '../dto/auth.dto';
import { User } from '../models/user.model';
import { TokenStorageService } from './token-storage.service';
import { UserRole } from '../models/user-role.enum';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Regions } from '../models/user-region.enum';

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
              //private errorInterceptor: ErrorInterceptor,
              ) { }


  public isAuthenticated(): boolean {
    const token = localStorage.getItem('auth-token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public login(authDto: AuthDto): Observable<any> {
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


  public userRegionSelecter(): Observable<String[]> {
    return of(this.regions.regionsToArray());
  }


  public loginEndpointSwitch(token): void {
    if (this.tokenStorageService.decodeToken(token).userRole === UserRole.common) {
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/admin']);
    }
  }


  public register(user: User): Observable<User> {
          const endpoint: string = this.apiUrl + "/auth/signup";
          const httpParams = { 
            userLastName: user.userLastName,
            userFirstName: user.userFirstName,
            userRegion: user.userRegion,
            userCity: user.userCity,
            userPostcode: parseInt(user.userPostcode),
            userName: user.userName,
            userRole: UserRole.common,
            userEmail: user.userEmail,
            userPassword: user.userPassword
          };
          this.httpClient.post(endpoint, httpParams).subscribe(
            (response) => {
              this.router.navigate(['/login']);
            },
            (error) => {
              console.log(error);
            }
          );
          return;
    }
}


 