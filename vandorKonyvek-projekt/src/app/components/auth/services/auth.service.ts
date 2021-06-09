import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AuthDto } from '../dto/auth.dto';
import { Router } from '@angular/router';

//nem korrekt ez alábbi elérési útvonal
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string;
  private isAuthenticated = false;

  constructor(private http: HttpClient) { }

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

  register(user_lastName: string, 
          user_firstName: string, 
          user_region: string,
          user_city: string,
          user_postcode: string,
          user_userName: string,
          user_password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
            user_firstName,
            user_lastName,
            user_region,
            user_city,
            user_postcode,
            user_userName,
            user_password
    }, httpOptions);
  }
}
