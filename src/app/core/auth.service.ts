import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TokenService } from './token/token.service';

const API_URL = 'http://localhost:3000/user/login'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient, 
    private tokenService: TokenService) { }

  authenticate(userName: string, password: string){
    return this.http
      .post(API_URL, {userName, password}, {observe: "response"})
      .pipe(tap(res => {1
        const authToken = res.headers.get('x-access-token');
        this.tokenService.setToken(authToken);
        console.log(`Use ${userName} authenticated with token ${authToken}`);
      }));    
  }

}
