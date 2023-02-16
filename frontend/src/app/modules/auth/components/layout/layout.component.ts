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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() { }
}
