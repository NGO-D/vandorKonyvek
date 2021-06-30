import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { TokenPayload } from '../dto/token-payload.dto';
import decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public signOut(): void {
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

  public decodeToken(token): TokenPayload {
    const tokenPayload: TokenPayload = decode(token);
    return tokenPayload;
  }
}