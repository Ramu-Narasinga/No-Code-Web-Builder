import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { LoginResponse } from '../../auth.types';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private authService: AuthService
  ) {}

  private _getLoginPayload() {
    return {
      email: this.email,
      password: this.password,
    }
  }

  login() {

    let loginPayload = this._getLoginPayload();

    this.authService
    .login(loginPayload)
    .subscribe((res: LoginResponse) => {
      this.authService.setAuthTokenToLocalStorage(res.accessToken);
      this.authService.setRefreshTokenToLocalStorage(res.refreshToken);
      this.authService.redirectToDashboard();
    });
  }
}
