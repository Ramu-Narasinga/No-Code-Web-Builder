import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { LoginResponse } from '../../auth.types';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService
  ) {}

  private _getSignUpPayload() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    }
  }

  signup() {

    let signupPayload = this._getSignUpPayload();

    this.authService
    .signup(signupPayload)
    .subscribe((res: LoginResponse) => {
      this.authService.handleAuthResponse(res)
    });
  }
}
