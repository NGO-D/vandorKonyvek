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
import { TokenPayload } from '../models/token-payload.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  private jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('auth-token');
    console.log('isauthaticated: ');
    console.log(token);
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(authDto: AuthDto): Observable<any> {
    console.log('szervíz');
    console.log(authDto);
    const endpoint: string = this.apiUrl + "/auth/signin";
    this.httpClient.post(endpoint, authDto).subscribe(
      (response) => {
        const token = Object.values(response);
        console.log(typeof response);
        this.tokenStorageService.saveToken(token.toString());
        console.log(token.toString());

      },
      (error) => {
        console.error(error);
      } 
    );
    return;
  }

  register(user: User): Observable<User> {
          const endpoint: string = this.apiUrl + "/auth/register";
          console.log('serviceben vagyok');
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
          console.log(httpParams);
          this.httpClient.post(endpoint, httpParams).subscribe(
            (response) => {
              console.log('siker');
              this.router.navigate(['/login']);
            },
            (error) => {
              console.error(error);
            }

          );
          return;
    }

    
  }


 