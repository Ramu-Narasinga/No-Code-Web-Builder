import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

enum AuthType {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
}

@Component({
  selector: 'app-auth-container',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // authType: string = AuthType.LOGIN;

  constructor(private route: ActivatedRoute) {}

  // public get AuthType(): typeof AuthType {
  //   return AuthType
  // }

  ngOnInit() {
    // console.log("what are you", this.route.snapshot.url[0].path);
    // this.authType = this.route.snapshot.url[0].path.toUpperCase();
    // console.log("this.authType:", this.authType);
  }
}
