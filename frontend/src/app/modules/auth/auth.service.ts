import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/services/shared.service';
import { LoginPayload, LoginResponse, SignupPayload } from './auth.types';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private router: Router
  ) { }


  getAuthorizationToken() {
    return localStorage.getItem('authToken');
  }

  getUserId() {
    return localStorage.getItem('userId');
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

  setUserId(userId) {
    localStorage.setItem('userId', userId);
  }


  redirectToDashboard() {
    this.router.navigate(['/dashboard/website']);
  }
}
