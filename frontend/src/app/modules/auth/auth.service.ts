import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/services/shared.service';
import { LoginPayload, LoginResponse, SignupPayload } from './auth.types';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private sharedService: SharedService,
    private router: Router,
  ) { }

  public jwtHelper: JwtHelperService = new JwtHelperService();

  getAuthorizationToken() {
    return localStorage.getItem('authToken');
  }

  authSignupUrl = `${environment.serverUrl}/auth/register`;

  signup(signupPayload: SignupPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.authSignupUrl, signupPayload)
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

  setUserIdToLocalStorage(userId) {
    localStorage.setItem("userId", userId)
  }

  setFirstNameToLocalStorage(firstName) {
    localStorage.setItem("firstName", firstName)
  }

  setLastNameToLocalStorage(lastName) {
    localStorage.setItem("lastName", lastName)
  }

  setUserId(userId) {
    localStorage.setItem('userId', userId);
  }


  redirectToDashboard() {
    this.router.navigate(['/dashboard/website']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    // Check whether the token is expired and return
    // true or false

    if (!token) {
      return false;
    }

    return !this.jwtHelper.isTokenExpired(token);
  }

  handleAuthResponse(res) {
    this.setAuthTokenToLocalStorage(res.accessToken);
    this.setRefreshTokenToLocalStorage(res.refreshToken);
    this.setUserIdToLocalStorage(res.user.id);
    this.setFirstNameToLocalStorage(res.user.firstName);
    this.setLastNameToLocalStorage(res.user.lastName);
    this.redirectToDashboard();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}
