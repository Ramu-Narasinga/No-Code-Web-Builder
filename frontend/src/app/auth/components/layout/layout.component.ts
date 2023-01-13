import { Component } from '@angular/core';

enum AuthType {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
}

@Component({
  selector: 'app-auth-container',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  authType: AuthType = AuthType.LOGIN;

  constructor() {

  }

  public get AuthType(): typeof AuthType {
    return AuthType
  }

}
