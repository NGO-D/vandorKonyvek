import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthDto } from '../dto/auth.dto';
import { Router } from '@angular/router';


//nem korrekt ez alábbi elérési útvonal, át is írtam
//const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;

  private accessToken: string;
  private isAuthenticated = false;

  constructor(private httpClient: HttpClient) { }

  getAccessToken(): string {
    return this.accessToken;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /*login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }*/

  register(authDto: AuthDto): Observable<AuthDto> {
          const endpoint: string = this.apiUrl + "/auth/register";
          console.log('serviceben vagyok');
          const httpParams = { 
            user_lastName: authDto.user_lastName,
            user_firstName: authDto.user_firstName,
            user_region: authDto.user_region,
            user_city: authDto.user_city,
            user_postcode: authDto.user_postcode,
            user_userName: authDto.user_userName,
            user_email: authDto.user_email,
            user_password: authDto.user_password
          };
          console.log(endpoint);
          this.httpClient.post(endpoint, httpParams).subscribe(
            (response) => {
              console.log('siker');
            },
            (error) => {
              console.error(error);
            }

          );
          return;
    }
  }
