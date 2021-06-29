import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  signOut(): any {
    this.storage.clear();
    console.log('signout localstorage: ');
    console.log(this.storage);
  }

  public saveToken(token: string): void {
    this.storage.clear();
    this.storage.set(TOKEN_KEY, token);
    console.log('savetoken localstorage: ');
    console.log(this.storage);
  }

  public getToken(): string | null {
    return this.storage.get(TOKEN_KEY);
  }

//itt még nem tartok, nem is értem, hogy miért kell ez  
/*
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
*/
/*
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
*/
}