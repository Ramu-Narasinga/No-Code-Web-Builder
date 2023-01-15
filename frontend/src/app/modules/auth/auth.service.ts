import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/services/shared.service';
import { LoginPayload, LoginResponse, SignupPayload } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService
  ) { }


  getAuthorizationToken() {
    return localStorage.getItem('authToken');
  }


  authSignupUrl = `${environment.serverUrl}/auth/register`;

  signup(signupPayload: SignupPayload): Observable<SignupPayload> {
    return this.http.post<SignupPayload>(this.authSignupUrl, signupPayload)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }


  authLoginUrl = `${environment.serverUrl}/auth/login`;

  login(loginPayload: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.authLoginUrl, loginPayload)
    .pipe(
      catchError(this.sharedService.handleError)
    );
  }

  setAuthTokenToLocalStorage(authToken) {
    localStorage.setItem("authToken", authToken);
  }

  setRefreshTokenToLocalStorage(refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }
}
